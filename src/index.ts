import Theme from '@swup/theme';
import styles from './index.css';

type Direction = 'to-left' | 'to-right' | 'to-top' | 'to-bottom';

type Options = {
	direction: Direction;
	color?: string;
	duration?: number;
}

export default class SwupOverlayTheme extends Theme {
	name = 'SwupOverlayTheme';

	defaults: Options = {
		direction: 'to-right',
		color: undefined,
		duration: undefined
	};
	options: Options;

	directions: Direction[] = ['to-left', 'to-right', 'to-top', 'to-bottom'];

	constructor(options: Partial<Options> = {}) {
		super();
		this.options = { ...this.defaults, ...options };

		if (!this.directions.includes(this.options.direction)) {
			throw new Error(`Invalid direction: ${this.options.direction}`);
		}
	}

	mount() {
		this.applyStyles(styles);
		this.applyHTML(this.createOverlay());
	}

	createOverlay() {
		const { direction } = this.options;
		const color = this.options.color !== undefined ? this.options.color : 'inherit';
		const duration = this.options.duration !== undefined ? `${this.options.duration}ms` : 'inherit';
		return `
			<div
				class="swup-transition-overlay"
				data-direction="${direction}"
				style="--swup-overlay-theme-color:${color};--swup-overlay-theme-duration:${duration};"
			></div>
		`;
	}
}
