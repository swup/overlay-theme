import Theme from '@swup/theme';
import styles from './index.css';

export default class SwupOverlayTheme extends Theme {
	name = 'SwupOverlayTheme';

	defaults = {
		direction: 'to-right',
		color: undefined,
		duration: undefined
	};

	directions = ['to-left', 'to-right', 'to-top', 'to-bottom'];

	constructor(options = {}) {
		super();
		this.options = { ...this.defaults, ...options };
		if (!this.directions.includes(this.options.direction)) {
			throw new Error(`Invalid direction: ${direction}`);
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
