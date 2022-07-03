import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Foundation/Typography',
  argTypes: {
    class: { control: { type: 'text' } },
  },
} as Meta;

export const Default: Story<any> = (args: any) => ({
  template: `
		Notice, if you're using these typography classes with a non-text element such as "div" or "span", 
		you have to use <code>class="txt"</code> along with the preferred class,
		for further info, please visit the ( typography.scss ) file.
		<br>
		<br>
		<p class="txt txt-sm" ><strong style="font-weight: bold;">Name: </strong> Display Large</p>
		<span class="txt txt-lg" style="background: #b6d5af;"><strong style="font-weight: bold;">Example: </strong> The richest of the rich is one who is not a prisoner to greed</span>
		<p class="txt txt-body hint"  ><strong style="font-weight: bold;">Usage: </strong> <code>class="txt-lg"</code></p>
		<br>
		<p class="txt txt-sm" ><strong style="font-weight: bold;">Name: </strong> Display Medium</p>
		<p class="txt txt-md" style="background: #b6d5af;"><strong style="font-weight: bold;">Example: </strong> The richest of the rich is one who is not a prisoner to greed</p>
		<p class="txt txt-body hint"  ><strong style="font-weight: bold;">Usage: </strong> <code>class="txt-md"</code></p>
		<br>
		<p class="txt txt-sm" ><strong style="font-weight: bold;">Name: </strong> Display Small</p>
		<p class="txt txt-sm" style="background: #b6d5af;"><strong style="font-weight: bold;">Example: </strong> The richest of the rich is one who is not a prisoner to greed</p>
		<p class="txt txt-body hint"  ><strong style="font-weight: bold;">Usage: </strong> <code>class="txt-sm"</code></p>
		<br>
		<p class="txt txt-sm" ><strong style="font-weight: bold;">Name: </strong> Subtitle</p>
		<p class="txt txt-subtitle" style="background: #b6d5af;"><strong style="font-weight: bold;">Example: </strong> The richest of the rich is one who is not a prisoner to greed</p>
		<p class="txt txt-body hint"  ><strong style="font-weight: bold;">Usage: </strong> <code>class="txt-subtitle"</code></p>
		<br>
		<p class="txt txt-sm" ><strong style="font-weight: bold;">Name: </strong> Body</p>
		<p class="txt txt-body" style="background: #b6d5af;"><strong style="font-weight: bold;">Example: </strong> The richest of the rich is one who is not a prisoner to greed</p>
		<p class="txt txt-body hint"  ><strong style="font-weight: bold;">Usage: </strong> <code>class="txt-body"</code></p>
		<br>
		<p class="txt txt-sm" ><strong style="font-weight: bold;">Name: </strong> Caption</p>
		<p class="txt txt-caption" style="background: #b6d5af;"><strong style="font-weight: bold;">Example: </strong> The richest of the rich is one who is not a prisoner to greed</p>
		<p class="txt txt-caption hint"  ><strong style="font-weight: bold;">Usage: </strong> <code>class="txt-caption"</code></p>
	`,
});
Default.storyName = "Typography"
