import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrls: ['./side-drawer.css'],
  shadow: true
})
export class SideDrawer {

  @Prop({ reflect: true }) title: string;

  render() {
    return (
      <aside>
        <header><h1>{this.title}</h1></header>
        <slot />
      </aside>
    );
  }
}
