import { no__dom } from '@ctx-core/dom'
export function _btoa() {
	const btoa =
		no__dom
		? require('btoa-lite')
		: window.btoa
	return btoa
}
