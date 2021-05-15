import { _btoa } from './_btoa'
/**
 * btoa helper functions
 * @module @ctx-core/btoa/lib
 */
export function _btoa_Uint32Array(b64:string) {
	const btoa = _btoa()
	const $ = btoa(b64)
	const { length } = $
	let btoa_Uint32Array = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		btoa_Uint32Array[i] = $.charCodeAt(i)
	}
	return btoa_Uint32Array
}
export {
	_btoa_Uint32Array as _Uint32Array__btoa
}
