import { Component, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global';

@Component({
  tag: 'stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @State() searchResults: {symbol: string, name: string}[] = []

  onFindStocks(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRes => {
        this.searchResults = parsedRes['bestMatches'].map( match => {
          return {name: match['2. name'], symbol: match['1. symbol']}
        })
      })
      .catch(err => console.log(err))
  }


  render () {


    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input
          id="stock-symbol"
          type='text'
          ref={el => this.stockNameInput = el }
        />
        <button type="submit">Find</button>
      </form>,
      <ul>
        {this.searchResults.map(res => (
          <li><strong>{res.symbol}</strong> - {res.name}</li>
        ))}
      </ul>
    ];
  }
}
