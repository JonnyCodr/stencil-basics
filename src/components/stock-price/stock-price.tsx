import { Component, h } from '@stencil/core';


@Component({
  tag: 'stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {




  render() {

    return [
      <form>
        <input id="stock-symbol" type='text' />
        <button type="submit">Fetch</button>
      </form>,
      <div>
        <p>Price: {0}</p>
      </div>
    ]
  }
}
