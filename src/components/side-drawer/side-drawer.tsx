import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-side-drawer',
  styleUrls: ['./side-drawer.css'],
  shadow: true
})
export class SideDrawer {

  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  onClosedDrawer() {
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onClosedDrawer.bind(this)}>X</button>
        </header>
        <slot />
      </aside>
    );
  }
}
