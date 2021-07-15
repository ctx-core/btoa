import { btoa_ } from './btoa_.js'
/**
 * btoa helper functions
 * @module @ctx-core/btoa/lib
 */
export function btoa_Uint32Array_(b64:string) {
	const btoa = btoa_()
	const $ = btoa(b64)
	const { length } = $
	let btoa_Uint32Array = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		btoa_Uint32Array[i] = $.charCodeAt(i)
	}
	return btoa_Uint32Array
}
export {
	btoa_Uint32Array_ as _btoa_Uint32Array,
	btoa_Uint32Array_ as _Uint32Array__btoa,
}
