import { Component, h, State } from '@stencil/core';
import { TypographyElementType } from '../typography/typography';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {

  @State()
  tagType: TypographyElementType = 'span';
  
  private onToggleClick = () => {
    (this.tagType = this.tagType === 'span' ? 'p' : 'span');
    const typographyElement = document.getElementById('typography-example') as HTMLAppTypographyElement;
    console.log('typographyElement:', typographyElement);
    typographyElement.element = this.tagType;
  }

  render() {
    return (
      <div class="app-home">

        <button onClick={this.onToggleClick}>Toggle Element type</button>
      </div>
    );
  }
}
