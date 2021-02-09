import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-side-drawer',
  styleUrls: ['./side-drawer.css'],
  shadow: true
})
export class SideDrawer {

  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true }) open: boolean;

  render() {
    return (
      <aside>
        <header><h1>{this.title}</h1></header>
        <slot />
      </aside>
    );
  }
}
