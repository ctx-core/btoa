import { no_dom } from '@ctx-core/dom'
export function btoa_() {
	const btoa =
		no_dom
		? require('btoa-lite')
		: window.btoa
	return btoa
}
export {
	btoa_ as _btoa,
}
