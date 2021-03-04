import { Component, h, State } from '@stencil/core';
import axios from 'axios';


@Component({
  tag: 'stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  @State() fetchedPrice: number;

  async onFetchStockPrice(event: Event) {
    event.preventDefault();

    console.log(event);
    const data = await axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo', {});
    console.log(data);
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol" type='text' />
        <button type="submit">Fetch</button>
      </form>,
      <div>
        <p>Price: ${this.fetchedPrice}</p>
      </div>
    ]
  }
}
