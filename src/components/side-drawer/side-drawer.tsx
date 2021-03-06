import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-side-drawer',
  styleUrls: ['./side-drawer.css'],
  shadow: true
})
export class SideDrawer {

  // set from outside
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  //changed only internally
  @State() showContactInfo = false;

  @Method()
  async open() {
    this.opened = true;
  }

  onClosedDrawer() {
    this.opened = false;
  }

  onContentChanged(content: string) {
    this.showContactInfo = content === 'contact'
  }

  render() {
    let mainContent = < slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id='contact-information'>
          <h2>Contact Information</h2>
          <p>You can reach us at:</p>
          <ul>
            <li>Pone: 134523452345</li>
            <li>
              email:
              <a href='mailto:email@email.com'> email@email.com</a>
            </li>
          </ul>
        </div>
      )
    }

    return (
      [
        <div class='backdrop' onClick={this.onClosedDrawer.bind(this)}/>,
        <aside>
          <header>
            <h1>{this.title}</h1>
            <button onClick={this.onClosedDrawer.bind(this)}>X</button>
          </header>
          <section id='tabs'>
            <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChanged.bind(this, 'Nav')}>Navigation</button>
            <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChanged.bind(this, 'contact')}>Contact</button>
          </section>
          <main>{mainContent}</main>
        </aside>
      ]
    );
  }
}
