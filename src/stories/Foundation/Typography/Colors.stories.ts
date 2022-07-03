import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Foundation/Colors',
  argTypes: {
    class: { control: { type: 'text' } },
  },
} as Meta;

export const Default: Story<any> = (args: any) => ({
  template: `
	<div class="colors-container">	
		<div class="colors-widget">
			<h3 class="txt-sm">Neutral Colors</h3>
			<ul>
				<li>
					<span class="color" style="background:#212121"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 900</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong>  $clr_neutral_900</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#424242"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 800</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong>  $clr_neutral_800</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#616161"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 700</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong>  $clr_neutral_700</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#757575"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 600</span>
						<span class="txt-caption"> <strong style="font-weight: bold;">Usage: </strong> $clr_neutral_600</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#9E9E9E"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 500</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong>  $clr_neutral_500</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#BDBDBD"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 400</span>
						<span class="txt-caption"> <strong style="font-weight: bold;">Usage: </strong> $clr_neutral_400</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#E0E0E0"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 300</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong>  $clr_neutral_300</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#EEEEEE"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 200</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong>  $clr_neutral_200</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#F5F5F5"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 100</span>
						<span class="txt-caption"> <strong style="font-weight: bold;">Usage: </strong> $clr_neutral_100</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#FAFAFA"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 50</span>
						<span class="txt-caption"> <strong style="font-weight: bold;">Usage: </strong> $clr_neutral_50</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#FFFFFF"></span>
					<div class="color-data">
						<span class="txt-subtitle">Neutral 0</span>
						<span class="txt-caption"> <strong style="font-weight: bold;">Usage: </strong> $clr_neutral_0</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="colors-widget">
			<h3 class="txt-sm">Primary Colors</h3>
			<ul>
				<li>
					<span class="color" style="background:#152979"></span>
					<div class="color-data">
						<span class="txt-subtitle">Primary 900</span>
						<span class="txt-caption"> <strong style="font-weight: bold;">Usage: </strong> $clr_primary_900</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#2140BA"></span>
					<div class="color-data">
						<span class="txt-subtitle">Primary 700</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_primary_700</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#4060DD"></span>
					<div class="color-data">
						<span class="txt-subtitle">Primary 400</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_primary_400</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#B7C5FA"></span>
					<div class="color-data">
						<span class="txt-subtitle">Primary 200</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_primary_200</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#E2E7FD"></span>
					<div class="color-data">
						<span class="txt-subtitle">Primary 50</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_primary_50</span>
					</div>
				</li>
			</ul>
			<h3 class="txt-sm">Success Colors</h3>
			<ul>
				<li>
					<span class="color" style="background:#2F6846"></span>
					<div class="color-data">
						<span class="txt-subtitle">Success 900</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_success_900</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#328048"></span>
					<div class="color-data">
						<span class="txt-subtitle">Success 700</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_success_700</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#5CB176"></span>
					<div class="color-data">
						<span class="txt-subtitle">Success 400</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_success_400</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#C6F0C2"></span>
					<div class="color-data">
						<span class="txt-subtitle">Success 200</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_success_200</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#EAFBE7"></span>
					<div class="color-data">
						<span class="txt-subtitle">Success 50</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_success_50</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="colors-widget">
			<h3 class="txt-sm">Secondary Colors</h3>
			<ul>
				<li>
					<span class="color" style="background:#006096"></span>
					<div class="color-data">
						<span class="txt-subtitle">Secondary 900</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_secondary_900</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#0C75AF"></span>
					<div class="color-data">
						<span class="txt-subtitle">Secondary 700</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_secondary_700</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#66B7F1"></span>
					<div class="color-data">
						<span class="txt-subtitle">Secondary 400</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_secondary_400</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#B8E1FF"></span>
					<div class="color-data">
						<span class="txt-subtitle">Secondary 200</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_secondary_200</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#EAF5FF"></span>
					<div class="color-data">
						<span class="txt-subtitle">Secondary 50</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_secondary_50</span>
					</div>
				</li>
			</ul>
			<h3 class="txt-sm">Warning Colors</h3>
			<ul>
				<li>
					<span class="color" style="background:#BE5D01"></span>
					<div class="color-data">
						<span class="txt-subtitle">Warning 900</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_warning_900</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#D9822F"></span>
					<div class="color-data">
						<span class="txt-subtitle">Warning 700</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_warning_700</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#F29D41"></span>
					<div class="color-data">
						<span class="txt-subtitle">Warning 400</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_warning_400</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#FAE7B9"></span>
					<div class="color-data">
						<span class="txt-subtitle">Warning 200</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_warning_200</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#FDF4DC"></span>
					<div class="color-data">
						<span class="txt-subtitle">Warning 50</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_warning_50</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="colors-widget">
			<h3 class="txt-sm">Danger Colors</h3>
			<ul>
				<li>
					<span class="color" style="background:#B72B1A"></span>
					<div class="color-data">
						<span class="txt-subtitle">Danger 900</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_danger_900</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#D02B20"></span>
					<div class="color-data">
						<span class="txt-subtitle">Danger 700</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_danger_700</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#EE5E52"></span>
					<div class="color-data">
						<span class="txt-subtitle">Danger 400</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_danger_400</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#F5C0B8"></span>
					<div class="color-data">
						<span class="txt-subtitle">Danger 200</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_danger_200</span>
					</div>
				</li>
				<li>
					<span class="color" style="background:#FCECEA"></span>
					<div class="color-data">
						<span class="txt-subtitle">Danger 50</span>
						<span class="txt-caption"><strong style="font-weight: bold;">Usage: </strong> $clr_danger_50</span>
					</div>
				</li>
			</ul>
		</div>
	</div>


	`,
});
Default.storyName = "Colors"
