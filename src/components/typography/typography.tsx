import { h, Component, Prop, ComponentInterface, Host } from '@stencil/core';

export type TypographyElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'em' | 'code' | 'sub' | 'sup' | 'del' | 'pre';
export type TypographyVariant =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'title6'
  | 'body1'
  | 'subtitle1'
  | 'subtitle2'
  | 'body2'
  | 'button'
  | 'badge'
  | 'caption';

const VARIANT_MAP: Record<TypographyVariant, TypographyElementType> = {
  title1: 'h1',
  title2: 'h2',
  title3: 'h3',
  title4: 'h4',
  title5: 'h5',
  title6: 'h6',
  body1: 'p',
  subtitle1: 'span',
  subtitle2: 'span',
  body2: 'span',
  button: 'span',
  badge: 'span',
  caption: 'span'
};

@Component({
  tag: 'app-typography',
  shadow: false,
  scoped: false
})
export class Typography implements ComponentInterface {
  @Prop({ reflect: true }) variant?: TypographyVariant = 'body1';
  @Prop({ reflect: true }) element?: TypographyElementType = undefined;


  private getElementType(): TypographyElementType {
    return (this.element ? this.element : VARIANT_MAP[this.variant]) || 'span';
  }

  render(): HTMLElement {
    const TagName = this.getElementType();

    return (
      <Host>
        <TagName>
          <slot />
        </TagName>
      </Host>
    );
  }
}
