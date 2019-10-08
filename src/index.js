import Theme from '@swup/theme';
import styles from './index.styl';

export default class OverlayTheme extends Theme {
	name = 'OverlayTheme';

	constructor(options) {
		super();

		const defaultOptions = {
			color: '#2D2E82',
			duration: 600,
			direction: 'to-right',
		};

		this.options = {
			...defaultOptions,
			...options
		};
	}

	mount() {
		this.applyStyles(styles);
		this.applyHTML(`
			<div class="swup-transition-overlay"
			style="background: ${this.options.color}; transition-duration: ${this.options.duration}ms"
			data-direction="${this.options.direction}"></div>
		`);
	}
}
