import { Component, h, State, Element } from '@stencil/core';
import axios from 'axios';
import { AV_API_KEY } from '../../global';


@Component({
  tag: 'stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement;
  // @Element() el: HTMLElement;
  @State() fetchedPrice: number;

  async onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    const stockSymbol = this.stockInput.value;
    console.log(event);
    const { data } =
      await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`, {});
    this.fetchedPrice = +data['Global Quote']['05. price']
    console.log(this.fetchedPrice);
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol" type='text' ref={el => this.stockInput = el }/>
        <button type="submit">Fetch</button>
      </form>,
      <div>
        <p>Price: ${this.fetchedPrice}</p>
      </div>
    ]
  }
}
