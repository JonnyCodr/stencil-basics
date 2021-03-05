import { Component, h, Prop, State, Watch  /*Element*/ } from '@stencil/core';
import { AV_API_KEY } from '../../global';


@Component({
  tag: 'stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;

  @Prop({mutable: true, reflect: true}) stockSymbol: string;

  @Watch('stock-symbol')
  stockSymbolChanged(newVal: string, oldVal: string) {
    if (newVal !== oldVal) {
      this.fetchStockPrice(newVal)
    }
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.stockInputValid = this.stockUserInput.trim() !== '';
  }

  async onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockUserInput = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    this.stockSymbol = this.stockInput.value
  }

  private fetchStockPrice(stockSymbol: string) {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid');
        }
        return res.json();
      })
      .then(data => {
        if (!data['Global Quote']['05. price']) {
          throw new Error('Invalid Symbol');
        }
        this.error = null;
        this.fetchedPrice = +data['Global Quote']['05. price'];
      })
      .catch(err => {
        this.error = err.message;
      });
  }

  componentWillLoad() {
    if (this.stockSymbol) {
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol)
    }
  }

  render() {

    let dataContent = null
    if (this.error) {
      dataContent = <p>{this.error}</p>
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>
    }

    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          id="stock-symbol"
          type='text'
          ref={el => this.stockInput = el }
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
      </form>,
      <div>
        {dataContent}
      </div>
    ]
  }
}
