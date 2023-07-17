import Theme from '@swup/theme';
import styles from './index.css';

export default class SwupOverlayTheme extends Theme {
	name = 'SwupOverlayTheme';

	defaults = {
		direction: 'to-right'
	};

	directions = ['to-left', 'to-right', 'to-top', 'to-bottom'];

	constructor(options = {}) {
		super();
		this.options = { ...this.defaults, ...options };
		if (!directions.includes(this.options.direction)) {
			throw new Error(`Invalid direction: ${direction}`);
		}
	}

	mount() {
		const { direction } = this.options;
		this.applyStyles(styles);
		this.applyHTML(`<div class="swup-transition-overlay" data-direction="${direction}"></div>`);
	}
}
