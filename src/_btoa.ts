import { no_dom } from '@ctx-core/dom'
export function _btoa() {
	const btoa =
		no_dom
		? require('btoa-lite')
		: window.btoa
	return btoa
}
