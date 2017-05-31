export const libSource = `/** An 8-bit signed integer. */
declare type sbyte = number;

/** An 8-bit unsigned integer. */
declare type byte = number;

/** A 16-bit signed integer. */
declare type short = number;

/** A 16-bit unsigned integer. */
declare type ushort = number;

/** A 32-bit signed integer. */
declare type int = number;

/** A 32-bit unsigned integer. */
declare type uint = number;

/** A 64-bit signed integer. */
declare type long = number;

/** A 64-bit unsigned integer. */
declare type ulong = number;

/** A 1-bit unsigned integer.*/
declare type bool = boolean;

/** A 32-bit float. */
declare type float = number;

/** A 64-bit float. */
declare type double = number;

/** A 32-bit unsigned integer when targeting WASM32 respectively a 64-bit unsigned integer when targeting WASM64. */
declare type uintptr = number;

/** A class describing a pointer to a data structure. */
/* declare class Ptr<T> {
    offset: uintptr;
    value: T;
    constructor(offset: uintptr);
    increment(diff: uintptr): Ptr<T>;
    decrement(diff: uintptr): Ptr<T>;
} */

// Type aliases
declare type int8 = sbyte;
declare type uint8 = byte;
declare type int16 = short;
declare type uint16 = ushort;
declare type int32 = int;
declare type uint32 = uint;
declare type int64 = long;
declare type uint64 = ulong;

/** Retrieves the byte size of a data structure. */
declare function sizeof<T>(): uintptr;

// Fillers for TypeScript complaining about missing types with 'nolib'
interface Array<T> { }
interface Boolean { }
interface Function { }
interface IArguments { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }

// Builtins
declare function rotl(value: int, shift: int): int;
declare function rotll(value: long, shift: long): long;
declare function rotr(value: int, shift: int): int;
declare function rotrl(value: long, shift: long): long;
declare function clz(value: int): int;
declare function clzl(value: long): long;
declare function ctz(value: int): int;
declare function ctzl(value: long): long;
declare function popcnt(value: int): int;
declare function popcntl(value: long): long;
declare function abs(value: double): double;
declare function absf(value: float): float;
declare function ceil(value: double): double;
declare function ceilf(value: float): float;
declare function floor(value: double): double;
declare function floorf(value: float): float;
declare function sqrt(value: double): double;
declare function sqrtf(value: float): float;
declare function trunc(value: double): double;
declare function truncf(value: float): float;
declare function nearest(value: double): double;
declare function nearestf(value: float): float;
declare function min(left: double, right: double): double;
declare function minf(left: float, right: float): float;
declare function max(left: double, right: double): double;
declare function maxf(left: float, right: float): float;
declare function copysign(left: double, right: double): double;
declare function copysignf(left: float, right: float): float;
declare function reinterpreti(value: float): int;
declare function reinterpretl(value: double): long;
declare function reinterpretf(value: int): float;
declare function reinterpretd(value: long): double;
declare function current_memory(): int;
declare function grow_memory(value: int): int;

// Linked-in standard library
declare function memset(dest: uintptr, c: int, size: uintptr): uintptr; // $0
declare function memcpy(dest: uintptr, src: uintptr, size: uintptr): uintptr; // $1
declare function malloc(size: uintptr): uintptr; // $2
declare function free(ptr: uintptr): void; // $3
`;

export const mallocBlob = `AGFzbQEAAAABqICAgAAHYAN/f38Bf2ABfwF/YAF/AGACf38Bf2AEf39/fwF/YAABf2ACf38AA4aAgIAABQIBAAABB7KAgIAABQZtZW1zZXQAAwZtZW1jcHkAAgZtYWxsb2MAAQRmcmVlAAAMd2FzbU1vcmVDb3JlAAQKlNWAgAAF9I+AgAABCH8CQCAARQ0AIABBeGoiAUEcKAIAIgdJDQAgAEF8aigCACIAQQNxIgNBAUYNACABIABBeHEiBWohBAJAAkAgAEEBcQ0AIANFDQIgASABKAIAIgBrIgEgB0kNAiAAIAVqIQUCQAJAAkACQEEgKAIAIAFHBEAgAEH/AUsNASABKAIMIQIgASgCCCIDIABBA3YiBkEDdEE0aiIARwRAIAcgA0sNBiADKAIMIAFHDQYLIAIgA0YNAiACIABHBEAgByACSw0GIAIoAgggAUcNBgsgAyACNgIMIAJBCGogAzYCACABIARJDQYMBwsgBCgCBCIAQQNxQQNHDQQgBEEEaiAAQX5xNgIAIAEgBUEBcjYCBEEUIAU2AgAgASAFaiAFNgIADwsgASgCGCEIAkAgASgCDCICIAFHBEAgByABKAIIIgBLDQEgACgCDCABRw0BIAIoAgggAUcNASACQQhqIAA2AgAgAEEMaiACNgIAIAgNBAwFCyABQRRqIgAoAgAiA0UEQCABQRBqIgAoAgAiA0UNAwsDQCAAIQYgAyICQRRqIgAoAgAiAw0AIAJBEGohACACKAIQIgMNAAsgByAGSw0AIAZBADYCAAsgCEUNAwwCC0EMQQwoAgBBfiAGd3E2AgAgASAESQ0DDAQLQQAhAiAIRQ0BCwJAAkAgASgCHCIDQQJ0QbwCaiIAKAIAIAFHBEBBHCgCACAITQRAIAhBEGogCCgCECABR0ECdGogAjYCAAsgAg0BDAMLIAAgAjYCACACRQ0BC0EcKAIAIgMgAksNASACIAg2AhgCQCABKAIQIgBFDQAgAyAASw0AIAIgADYCECAAIAI2AhgLIAFBFGooAgAiAEUNAUEcKAIAIABLDQEgAkEUaiAANgIAIAAgAjYCGCABIARJDQIMAwtBEEEQKAIAQX4gA3dxNgIACyABIARPDQELIAQoAgQiAEEBcUUNAAJAAkACQAJAAkACQAJAAkAgAEECcUUEQEEkKAIAIARGDQFBICgCACAERg0CIABBeHEgBWohBSAAQf8BSw0DIAQoAgwhAiAEKAIIIgMgAEEDdiIHQQN0QTRqIgBHBEBBHCgCACADSw0IIAMoAgwgBEcNCAsgAiADRg0EIAIgAEcEQEEcKAIAIAJLDQggAigCCCAERw0ICyADIAI2AgwgAkEIaiADNgIADAcLIARBBGogAEF+cTYCACABIAVqIAU2AgAgASAFQQFyNgIEDAcLQSQgATYCAEEYQRgoAgAgBWoiADYCACABIABBAXI2AgQgAUEgKAIARw0HQRRBADYCAEEgQQA2AgAPC0EgIAE2AgBBFEEUKAIAIAVqIgA2AgAgASAAQQFyNgIEIAEgAGogADYCAA8LIAQoAhghBgJAIAQoAgwiAiAERwRAQRwoAgAgBCgCCCIASw0BIAAoAgwgBEcNASACKAIIIARHDQEgAkEIaiAANgIAIABBDGogAjYCACAGDQQMBQsgBEEUaiIAKAIAIgNFBEAgBEEQaiIAKAIAIgNFDQMLA0AgACEHIAMiAkEUaiIAKAIAIgMNACACQRBqIQAgAigCECIDDQALQRwoAgAgB0sNACAHQQA2AgALIAZFDQMMAgtBDEEMKAIAQX4gB3dxNgIADAILQQAhAiAGRQ0BCwJAAkAgBCgCHCIDQQJ0QbwCaiIAKAIAIARHBEBBHCgCACAGTQRAIAZBEGogBigCECAER0ECdGogAjYCAAsgAg0BDAMLIAAgAjYCACACRQ0BC0EcKAIAIgMgAksNASACIAY2AhgCQCAEKAIQIgBFDQAgAyAASw0AIAIgADYCECAAIAI2AhgLIARBFGooAgAiAEUNAUEcKAIAIABLDQEgAkEUaiAANgIAIAAgAjYCGAwBC0EQQRAoAgBBfiADd3E2AgALIAEgBWogBTYCACABIAVBAXI2AgQgAUEgKAIARw0AQRQgBTYCAA8LAkACQAJAAn8CQCAFQf8BTQRAIAVBA3YiA0EDdEE0aiEAQQwoAgAiBUEBIAN0IgNxRQ0BIAAgACgCCCIDQRwoAgAgA0sbDAILIAFCADcCECABQRxqAn9BACAFQQh2IgNFDQAaQR8gBUH///8HSw0AGiAFQQ4gAyADQYD+P2pBEHZBCHEiAHQiA0GA4B9qQRB2QQRxIgIgAHIgAyACdCIAQYCAD2pBEHZBAnEiA3JrIAAgA3RBD3ZqIgBBB2p2QQFxIABBAXRyCyIANgIAIABBAnRBvAJqIQNBECgCACICQQEgAHQiBHFFDQIgBUEAQRkgAEEBdmsgAEEfRht0IQAgAygCACECA0AgAiIDKAIEQXhxIAVGDQQgAEEddiECIABBAXQhACADIAJBBHFqQRBqIgQoAgAiAg0AC0EcKAIAIARLDQQgBCABNgIAIAFBGGogAzYCACABIAE2AgwgASABNgIIDAQLQQwgBSADcjYCACAACyIDIAE2AgwgAEEIaiABNgIAIAEgADYCDCABIAM2AggPCyADIAE2AgBBECACIARyNgIAIAFBGGogAzYCACABIAE2AgggASABNgIMDAELQRwoAgAiBSADKAIIIgBLDQAgBSADSw0AIAAgATYCDCADQQhqIAE2AgAgASADNgIMIAFBGGpBADYCACABIAA2AggLQSxBLCgCAEF/aiIANgIAIAANAEHUAyEAA0AgACgCACIBQQhqIQAgAQ0AC0EsQX82AgALC5C1gIAAAQx/An9BBCgCAEEQayEHAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABB9AFNBEBBDCgCACIGQRAgAEELakF4cSAAQQtJGyIEQQN2IgF2IgBBA3FFDQEgAEF/c0EBcSABaiICQQN0IgRBPGooAgAiAEEIaiEDIAAoAggiASAEQTRqIgRGDQJBHCgCACABSw0DIAEoAgwgAEcNAyAEQQhqIAE2AgAgAUEMaiAENgIADAMLQX8hBCAAQb9/Sw0QIABBC2oiAEF4cSEEQRAoAgAiCkUNEAJ/QQAgAEEIdiIARQ0AGkEfIARB////B0sNABogBEEOIAAgAEGA/j9qQRB2QQhxIgF0IgBBgOAfakEQdkEEcSICIAFyIAAgAnQiAEGAgA9qQRB2QQJxIgFyayAAIAF0QQ92aiIAQQdqdkEBcSAAQQF0cgshCEEAIARrIQIgCEECdEG8AmooAgAiAUUNAyAEQQBBGSAIQQF2ayAIQR9GG3QhBUEAIQBBACEDA0AgASgCBEF4cSAEayIGIAJJBEAgBiECIAEhAyAGRQ0HCyAAIAFBFGooAgAiBiAGIAEgBUEddkEEcWpBEGooAgAiAUYbIAAgBhshACAFIAFBAEd0IQUgAQ0ACyAAIANyRQ0DDA0LIARBFCgCACIITQ0PIABFDQMgACABdEECIAF0IgBBACAAa3JxIgBBACAAa3FBf2oiACAAQQx2QRBxIgB2IgFBBXZBCHEiAiAAciABIAJ2IgBBAnZBBHEiAXIgACABdiIAQQF2QQJxIgFyIAAgAXYiAEEBdkEBcSIBciAAIAF2aiICQQN0IgNBPGooAgAiACgCCCIBIANBNGoiA0YNBUEcKAIAIAFLDQYgASgCDCAARw0GIANBCGogATYCACABQQxqIAM2AgAMBgtBDCAGQX4gAndxNgIACyAAIAJBA3QiAUEDcjYCBCAAIAFqIgAgACgCBEEBcjYCBCADDwtBACEDIApBAiAIdCIAQQAgAGtycSIARQ0MIABBACAAa3FBf2oiACAAQQx2QRBxIgB2IgFBBXZBCHEiBSAAciABIAV2IgBBAnZBBHEiAXIgACABdiIAQQF2QQJxIgFyIAAgAXYiAEEBdkEBcSIBciAAIAF2akECdEG8AmooAgAiAA0KDAsLQRAoAgAiCkUNCyAKQQAgCmtxQX9qIgAgAEEMdkEQcSIAdiIBQQV2QQhxIgIgAHIgASACdiIAQQJ2QQRxIgFyIAAgAXYiAEEBdkECcSIBciAAIAF2IgBBAXZBAXEiAXIgACABdmpBAnRBvAJqKAIAIgIoAgRBeHEgBGshASACQRBqIAIoAhBFQQJ0aigCACIABEADQCAAKAIEQXhxIARrIgMgASADIAFJIgMbIQEgACACIAMbIQIgAEEQaiAAKAIQRUECdGooAgAiAyEAIAMNAAsLQRwoAgAiDCACSw0LIAIgBGoiCyACTQ0LIAIoAhghCSACKAIMIgUgAkYNAyAMIAIoAggiAEsNBCAAKAIMIAJHDQQgBSgCCCACRw0EIAVBCGogADYCACAAQQxqIAU2AgAgCQ0GDAcLQQAhAiABIQMgASEADAgLQQwgBkF+IAJ3cSIGNgIACyAAQQhqIQMgACAEQQNyNgIEIAAgBGoiBSACQQN0IgIgBGsiAUEBcjYCBCAAIAJqIAE2AgAgCARAIAhBA3YiBEEDdEE0aiECQSAoAgAhAAJ/IAZBASAEdCIEcQRAIAIgAigCCCIEQRwoAgAgBEsbDAELQQwgBiAEcjYCACACCyIEIAA2AgwgAkEIaiAANgIAIAAgAjYCDCAAIAQ2AggLQSAgBTYCAEEUIAE2AgAgAw8LIAJBFGoiAygCACIARQRAIAIoAhAiAEUNAiACQRBqIQMLA0AgAyEHIAAiBUEUaiIDKAIAIgANACAFQRBqIQMgBSgCECIADQALIAwgB0sNACAHQQA2AgALIAlFDQIMAQtBACEFIAlFDQELAkACQCACIAIoAhwiA0ECdEG8AmoiACgCAEcEQEEcKAIAIAlNBEAgCUEQaiAJKAIQIAJHQQJ0aiAFNgIACyAFDQEMAwsgACAFNgIAIAVFDQELQRwoAgAiAyAFSw0BIAUgCTYCGAJAIAIoAhAiAEUNACADIABLDQAgBSAANgIQIAAgBTYCGAsgAkEUaigCACIARQ0BQRwoAgAgAEsNASAFQRRqIAA2AgAgACAFNgIYDAELQRAgCkF+IAN3cTYCAAsCQCABQQ9NBEAgAiABIARqIgBBA3I2AgQgAiAAaiIAIAAoAgRBAXI2AgQMAQsgAiAEQQNyNgIEIAsgAUEBcjYCBCALIAFqIAE2AgAgCARAIAhBA3YiA0EDdEE0aiEEQSAoAgAhAAJ/IAZBASADdCIDcQRAIAQgBCgCCCIDQRwoAgAgA0sbDAELQQwgBiADcjYCACAECyIDIAA2AgwgBEEIaiAANgIAIAAgBDYCDCAAIAM2AggLQSAgCzYCAEEUIAE2AgALIAJBCGoPCyAARQ0BCwNAIAAoAgRBeHEgBGsiASACIAEgAkkiARshAiAAIAMgARshAyAAQRBqIAAoAhBFQQJ0aigCACIBIQAgAQ0ACwsgA0UNACACQRQoAgAgBGtPDQBBHCgCACIJIANLDQAgAyAEaiIIIANNDQAgAygCGCEHIAMoAgwiBSADRg0BIAkgAygCCCIASw0CIAAoAgwgA0cNAiAFKAIIIANHDQIgBUEIaiAANgIAIABBDGogBTYCACAHDRsMHAsCfwJAAkACQAJAQRQoAgAiACAESQRAQRgoAgAiAyAETQ0BQSQoAgAiACAEaiIBIAMgBGsiAkEBcjYCBEEYIAI2AgBBJCABNgIAIAAgBEEDcjYCBCAAQQhqDwtBICgCACEBIAAgBGsiAkEQSQ0BIAEgBGoiAyACQQFyNgIEIAEgAGogAjYCAEEUIAI2AgBBICADNgIAIAEgBEEDcjYCBAwCC0HkAygCAEUNAkHsAygCAAwDCyABIABBA3I2AgQgASAAaiIAIAAoAgRBAXI2AgRBIEEANgIAQRRBADYCAAsgAUEIag8LQegDQoCAhICAgMAANwIAQfADQn83AgBB5AMgB0EMakFwcUHYqtWqBXM2AgBB+ANBADYCAEHIA0EANgIAQYCABAshAEEAIQUgACAEQS9qIgpqIgdBACAAayIIcSIGIARNDRFBACEFQcQDKAIAIgkEQEG8AygCACIAIAZqIgEgAE0NEiABIAlLDRILQQAhBUHIAy0AAEEEcQ0PQSQoAgAiAQRAQcwDIQADQCAAKAIAIgIgAU0EQCACIAAoAgRqIAFLDQULIAAoAggiAA0ACwtBBCgCACIDQX9GDQ4gBiEHQegDKAIAIgBBf2oiASADcQRAIAYgA2sgASADakEAIABrcWohBwsgByAETQ0OIAdB/v///wdLDQ4gCQRAQbwDKAIAIgAgB2oiASAATQ0PIAEgCUsNDwtBASEBIAdBgIAETgRAIAdBf2pBEHVBAWohAQsgAUAAQRB0IgBFDQRBBCAAIAFBEHRqNgIADAULIANBFGoiASgCACIARQRAIAMoAhAiAEUNAyADQRBqIQELA0AgASEGIAAiBUEUaiIBKAIAIgANACAFQRBqIQEgBSgCECIADQALIAkgBksNACAGQQA2AgALIAdFDRkMGAsgByADayAIcSIHQf7///8HSw0LIAdFDQNBASEBIAdBgIAETgRAIAdBf2pBEHVBAWohAQsgAUAAQRB0IgNFDQRBBCADIAFBEHRqNgIADAULQQAhBSAHDRYMFwtBfyEACyAAIANHDQMMCgtBBCgCACEDDAELQX8hAwsgAyAAKAIAIABBBGooAgBqRg0BIAMhAAsgACEDAkAgBEEwaiAHTQ0AIAdB/v///wdLDQAgA0F/Rg0AIAogB2tB7AMoAgAiAGpBACAAa3EiAEH+////B0sNByAARQ0CQQEhAiAAQYCABE4EQCAAQX9qQRB1QQFqIQILIAJAAEEQdCIBRQ0EQQQgASACQRB0ajYCAAwDCyADQX9HDQYMBAsgA0F/Rw0FDAMLQQQoAgAhAQsgAUF/Rg0AIAAgB2ohBwwDC0EBIQBBACAHayIBQQFIDQAgAUGAgAROBEAgB0F/c0EQdUEBaiEACyAAQABBEHQiAUUNAEEEIAEgAEEQdGo2AgALQcgDQcgDKAIAQQRyNgIACyAGQX9qIgBB/f///wdLDQFBASAAQRB2QQFqIAZBgIAESBsiAEAAQRB0IgNFDQFBACEFQQQgAyAAQRB0aiIANgIAIAAgA00NASAAQX9GDQEgACADayIHIARBKGpNDQELQbwDQbwDKAIAIAdqIgA2AgAgAEHAAygCAEsEQEHAAyAANgIACwJAAkACQEEkKAIAIgEEQEHMAyEAA0AgAyAAKAIAIgIgACgCBCIFakYNAiAAKAIIIgANAAwDCwALAkBBHCgCACIABEAgAyAATw0BC0EcIAM2AgALQQAhAEHQAyAHNgIAQcwDIAM2AgBBLEF/NgIAQTBB5AMoAgA2AgBB2ANBADYCAANAIABBPGogAEE0aiIBNgIAIABBwABqIAE2AgAgAEEIaiIAQYACRw0ACyADQXggA2tBB3FBACADQQhqQQdxGyIAaiIBIAdBWGoiAiAAayIAQQFyNgIEQShB9AMoAgA2AgBBGCAANgIAQSQgATYCACADIAJqQSg2AgQMAgsgAC0ADEEIcQ0AIAMgAU0NACACIAFLDQAgAUF4IAFrQQdxQQAgAUEIakEHcRsiAmoiA0EYKAIAIAdqIgYgAmsiAkEBcjYCBCAAQQRqIAUgB2o2AgBBKEH0AygCADYCAEEYIAI2AgBBJCADNgIAIAEgBmpBKDYCBAwBCyADQRwoAgAiBUkEQEEcIAM2AgAgAyEFCyADIAdqIQJBzAMhAAJAAkACfwJAAkACQAJAA0AgACgCACACRg0BIAAoAggiAA0ADAILAAsgAC0ADEEIcQ0AIAAgAzYCACAAIAAoAgQgB2o2AgQgA0F4IANrQQdxQQAgA0EIakEHcRtqIgcgBEEDcjYCBCACQXggAmtBB3FBACACQQhqQQdxG2oiAyAHayAEayEAIAcgBGohAiABIANGDQFBICgCACADRg0IIAMoAgQiAUEDcUEBRw0OIAFBeHEhCiABQf8BSw0JIAMoAgwhBiADKAIIIgQgAUEDdiIIQQN0QTRqIgFHBEAgBSAESw0OIAQoAgwgA0cNDgsgBiAERg0KIAYgAUcEQCAFIAZLDQ4gBigCCCADRw0OCyAEIAY2AgwgBkEIaiAENgIADA0LQcwDIQACQANAIAAoAgAiAiABTQRAIAIgACgCBGoiAiABSw0CCyAAKAIIIQAMAAsACyADQXggA2tBB3FBACADQQhqQQdxGyIAaiIGIAdBWGoiBSAAayIAQQFyNgIEIAMgBWpBKDYCBCABIAJBJyACa0EHcUEAIAJBWWpBB3EbakFRaiIFIAUgAUEQakkbIgVBGzYCBEEoQfQDKAIANgIAQRggADYCAEEkIAY2AgAgBUEQakHUAygCADYCACAFQQxqQdADKAIANgIAIAVBzAMoAgA2AgggBUEUakHYAygCADYCAEHMAyADNgIAQdADIAc2AgBB1AMgBUEIajYCAEHYA0EANgIAIAVBHGohAANAIABBBzYCACAAQQRqIgAgAkkNAAsgBSABRg0FIAVBBGoiACAAKAIAQX5xNgIAIAUgBSABayIGNgIAIAEgBkEBcjYCBCAGQf8BTQRAIAZBA3YiAkEDdEE0aiEAQQwoAgAiA0EBIAJ0IgJxRQ0CIAAgACgCCCICQRwoAgAgAksbDAMLIAFCADcCECABQRxqAn9BACAGQQh2IgJFDQAaQR8gBkH///8HSw0AGiAGQQ4gAiACQYD+P2pBEHZBCHEiAHQiAkGA4B9qQRB2QQRxIgMgAHIgAiADdCIAQYCAD2pBEHZBAnEiAnJrIAAgAnRBD3ZqIgBBB2p2QQFxIABBAXRyCyIANgIAIABBAnRBvAJqIQJBECgCACIDQQEgAHQiBXFFDQMgBkEAQRkgAEEBdmsgAEEfRht0IQAgAigCACEDA0AgAyICKAIEQXhxIAZGDQUgAEEddiEDIABBAXQhACACIANBBHFqQRBqIgUoAgAiAw0AC0EcKAIAIAVLDQUgBSABNgIAIAFBGGogAjYCACABIAE2AgwgASABNgIIDAULQSQgAjYCAEEYQRgoAgAgAGoiADYCACACIABBAXI2AgQMDQtBDCADIAJyNgIAIAALIgIgATYCDCAAQQhqIAE2AgAgASAANgIMIAEgAjYCCAwCCyACIAE2AgBBECADIAVyNgIAIAFBGGogAjYCACABIAE2AgggASABNgIMDAELQRwoAgAiAyACKAIIIgBLDQAgAyACSw0AIAAgATYCDCACQQhqIAE2AgAgASACNgIMIAFBGGpBADYCACABIAA2AggLQQAhBUEYKAIAIgAgBE0NAEEkKAIAIgEgBGoiAiAAIARrIgBBAXI2AgRBGCAANgIAQSQgAjYCACABIARBA3I2AgQgAUEIaiEFCyAFDwsgAkEUKAIAIABqIgBBAXI2AgRBICACNgIAQRQgADYCACACIABqIAA2AgAMBgsgAygCGCEJAkAgAygCDCIGIANHBEAgBSADKAIIIgFLDQEgASgCDCADRw0BIAYoAgggA0cNASAGQQhqIAE2AgAgAUEMaiAGNgIAIAkNBAwFCyADQRRqIgEoAgAiBEUEQCADQRBqIgEoAgAiBEUNAwsDQCABIQggBCIGQRRqIgEoAgAiBA0AIAZBEGohASAGKAIQIgQNAAsgBSAISw0AIAhBADYCAAsgCUUNAwwCC0EMQQwoAgBBfiAId3E2AgAMAgtBACEGIAlFDQELAkACQCADKAIcIgRBAnRBvAJqIgEoAgAgA0cEQEEcKAIAIAlNBEAgCUEQaiAJKAIQIANHQQJ0aiAGNgIACyAGDQEMAwsgASAGNgIAIAZFDQELQRwoAgAiBCAGSw0BIAYgCTYCGAJAIAMoAhAiAUUNACAEIAFLDQAgBiABNgIQIAEgBjYCGAsgA0EUaigCACIBRQ0BQRwoAgAgAUsNASAGQRRqIAE2AgAgASAGNgIYDAELQRBBECgCAEF+IAR3cTYCAAsgCiAAaiEAIAMgCmohAwsgAyADKAIEQX5xNgIEIAIgAEEBcjYCBCACIABqIAA2AgACQAJAAn8CQCAAQf8BTQRAIABBA3YiAUEDdEE0aiEAQQwoAgAiBEEBIAF0IgFxRQ0BIABBCGohBCAAIAAoAggiAUEcKAIAIAFLGwwCCyACAn9BACAAQQh2IgRFDQAaQR8gAEH///8HSw0AGiAAQQ4gBCAEQYD+P2pBEHZBCHEiAXQiBEGA4B9qQRB2QQRxIgMgAXIgBCADdCIBQYCAD2pBEHZBAnEiBHJrIAEgBHRBD3ZqIgFBB2p2QQFxIAFBAXRyCyIBNgIcIAJCADcCECABQQJ0QbwCaiEEQRAoAgAiA0EBIAF0IgVxRQ0CIABBAEEZIAFBAXZrIAFBH0YbdCEBIAQoAgAhAwNAIAMiBCgCBEF4cSAARg0EIAFBHXYhAyABQQF0IQEgBCADQQRxakEQaiIFKAIAIgMNAAtBHCgCACAFSw0EIAUgAjYCACACIAQ2AhggAiACNgIMIAIgAjYCCAwEC0EMIAQgAXI2AgAgAEEIaiEEIAALIgEgAjYCDCAEIAI2AgAgAiAANgIMIAIgATYCCAwCCyAEIAI2AgBBECADIAVyNgIAIAIgBDYCGCACIAI2AgggAiACNgIMDAELQRwoAgAiASAEKAIIIgBLDQAgASAESw0AIAAgAjYCDCAEQQhqIAI2AgAgAkEANgIYIAIgBDYCDCACIAA2AggLIAdBCGoPCwJAAkAgAyADKAIcIgFBAnRBvAJqIgAoAgBHBEBBHCgCACAHTQRAIAdBEGogBygCECADR0ECdGogBTYCAAsgBQ0BDAMLIAAgBTYCACAFRQ0BC0EcKAIAIgEgBUsNASAFIAc2AhgCQCADKAIQIgBFDQAgASAASw0AIAUgADYCECAAIAU2AhgLIANBFGooAgAiAEUNAUEcKAIAIABLDQEgBUEUaiAANgIAIAAgBTYCGAwBC0EQIApBfiABd3EiCjYCAAsCQCACQQ9NBEAgAyACIARqIgBBA3I2AgQgAyAAaiIAIAAoAgRBAXI2AgQMAQsgAyAEQQNyNgIEIAggAkEBcjYCBCAIIAJqIAI2AgACfwJAAn8CQCACQf8BTQRAIAJBA3YiAUEDdEE0aiEAQQwoAgAiAkEBIAF0IgFxRQ0BIABBCGohAiAAIAAoAggiAUEcKAIAIAFLGwwCCyACQQh2IgFFDQJBHyACQf///wdLDQMaIAJBDiABIAFBgP4/akEQdkEIcSIAdCIBQYDgH2pBEHZBBHEiBCAAciABIAR0IgBBgIAPakEQdkECcSIBcmsgACABdEEPdmoiAEEHanZBAXEgAEEBdHIMAwtBDCACIAFyNgIAIABBCGohAiAACyIBIAg2AgwgAiAINgIAIAggADYCDCAIIAE2AggMAgtBAAshACAIIAA2AhwgCEIANwIQIABBAnRBvAJqIQECQCAKQQEgAHQiBHEEQCACQQBBGSAAQQF2ayAAQR9GG3QhACABKAIAIQQDQCAEIgEoAgRBeHEgAkYNAiAAQR12IQQgAEEBdCEAIAEgBEEEcWpBEGoiBSgCACIEDQALQRwoAgAgBUsNAiAFIAg2AgAgCCABNgIYIAggCDYCDCAIIAg2AggMAgsgASAINgIAQRAgCiAEcjYCACAIIAE2AhggCCAINgIIIAggCDYCDAwBC0EcKAIAIgIgASgCCCIASw0AIAIgAUsNACAAIAg2AgwgAUEIaiAINgIAIAhBADYCGCAIIAE2AgwgCCAANgIICyADQQhqCwuZjICAAAEIfwJ/AkACQAJAAkAgAkUNACABQQNxRQ0AIAAhBQJAA0AgBSABLQAAOgAAIAJBf2ohAyAFQQFqIQUgAUEBaiEBIAJBAUYNASADIQIgAUEDcQ0ACwsgBUEDcUUNAQwCCyACIQMgACIFQQNxDQELAkAgA0EQTwRAIAUgA0FwaiIGQXBxIgdBEGoiCGohBCABIQIDQCAFIAIoAgA2AgAgBUEEaiACQQRqKAIANgIAIAVBCGogAkEIaigCADYCACAFQQxqIAJBDGooAgA2AgAgBUEQaiEFIAJBEGohAiADQXBqIgNBD0sNAAsgBiAHayEDIAEgCGohAQwBCyAFIQQLIANBCHEEQCAEIAEoAgA2AgAgBCABKAIENgIEIAFBCGohASAEQQhqIQQLIANBBHEEQCAEIAEoAgA2AgAgAUEEaiEBIARBBGohBAsgA0ECcQRAIAQgAS0AADoAACAEIAEtAAE6AAEgBEECaiEEIAFBAmohAQsgA0EBcUUNASAEIAEtAAA6AAAgAA8LAkACQAJAAkACQAJAAkAgA0EgSQ0AIAVBA3EiAkEDRg0BIAJBAkYNAiACQQFHDQAgBSABLQABOgABIAUgASgCACIHOgAAIAUgAS0AAjoAAiAFQQNqIQIgA0F9aiIEQRFJDQMgAUEQaiEGIANBbWohCCABIANBbGpBcHEiCUETaiIKaiEBA0AgAiAGQXRqKAIAIgNBCHQgB0EYdnI2AgAgAkEEaiAGQXhqKAIAIgdBCHQgA0EYdnI2AgAgAkEIaiAGQXxqKAIAIgNBCHQgB0EYdnI2AgAgAkEMaiAGKAIAIgdBCHQgA0EYdnI2AgAgAkEQaiECIAZBEGohBiAEQXBqIgRBEEsNAAsgCCAJayEEIAUgCmohAgwGCyADIQQgBSECDAULIAUgASgCACIHOgAAIAVBAWohAiADQX9qIgRBE0kNAiABQRBqIQYgA0FvaiEIIAEgA0FsakFwcSIJQRFqIgpqIQEDQCACIAZBdGooAgAiA0EYdCAHQQh2cjYCACACQQRqIAZBeGooAgAiB0EYdCADQQh2cjYCACACQQhqIAZBfGooAgAiA0EYdCAHQQh2cjYCACACQQxqIAYoAgAiB0EYdCADQQh2cjYCACACQRBqIQIgBkEQaiEGIARBcGoiBEESSw0ACyAIIAlrIQQgBSAKaiECDAQLIAUgASgCACIHOgAAIAUgAS0AAToAASAFQQJqIQIgA0F+aiIEQRJJDQIgAUEQaiEGIANBbmohCCABIANBbGpBcHEiCUESaiIKaiEBA0AgAiAGQXRqKAIAIgNBEHQgB0EQdnI2AgAgAkEEaiAGQXhqKAIAIgdBEHQgA0EQdnI2AgAgAkEIaiAGQXxqKAIAIgNBEHQgB0EQdnI2AgAgAkEMaiAGKAIAIgdBEHQgA0EQdnI2AgAgAkEQaiECIAZBEGohBiAEQXBqIgRBEUsNAAsgCCAJayEEIAUgCmohAgwDCyABQQNqIQEMAgsgAUEBaiEBDAELIAFBAmohAQsgBEEQcQRAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAIgAS0ABDoABCACIAEtAAU6AAUgAiABLQAGOgAGIAIgAS0ABzoAByACIAEtAAg6AAggAiABLQAJOgAJIAIgAS0ACjoACiACIAEtAAs6AAsgAiABLQAMOgAMIAIgAS0ADToADSACIAEtAA46AA4gAiABLQAAOgAAIAIgAS0ADzoADyACQRBqIQIgAUEQaiEBCyAEQQhxBEAgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAIgAS0ABDoABCACIAEtAAU6AAUgAiABLQAGOgAGIAIgAS0ABzoAByACQQhqIQIgAUEIaiEBCyAEQQRxBEAgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAJBBGohAiABQQRqIQELIARBAnEEQCACIAEtAAA6AAAgAiABLQABOgABIAJBAmohAiABQQJqIQELIARBAXFFDQAgAiABLQAAOgAAIAAPCyAACwv/goCAAAICfwF+An8CQCACRQ0AIAAgAmoiA0F/aiABOgAAIAAgAToAACACQQNJDQAgA0F+aiABOgAAIAAgAToAASADQX1qIAE6AAAgACABOgACIAJBB0kNACADQXxqIAE6AAAgACABOgADIAJBCUkNACAAQQAgAGtBA3EiBGoiAyABQf8BcUGBgoQIbCIBNgIAIAMgAiAEa0F8cSIEaiICQXxqIAE2AgAgBEEJSQ0AIAMgATYCCCADIAE2AgQgAkF4aiABNgIAIAJBdGogATYCACAEQRlJDQAgAyABNgIQIAMgATYCDCADIAE2AhQgAyABNgIYIAJBaGogATYCACACQWRqIAE2AgAgAkFsaiABNgIAIAJBcGogATYCACAEIANBBHFBGHIiBGsiAkEgSQ0AIAGtIgVCIIYgBYQhBSADIARqIQEDQCABIAU3AwAgAUEIaiAFNwMAIAFBEGogBTcDACABQRhqIAU3AwAgAUEgaiEBIAJBYGoiAkEfSw0ACwsgAAsL3oCAgAABAX8Cf0EBIQECQAJAIABBAU4EQCAAQYCABE4EQCAAQX9qQRB1QQFqIQELIAFAAEEQdCIARQ0BQQQgACABQRB0ajYCACAADwsgAEEASA0BQQQoAgAPC0F/DwtBfwsL`;

export const memsetInternalName = "3";

export const memcpyInternalName = "2";

export const mallocInternalName = "1";

export const freeInternalName = "0";

export const wasmMoreCoreInternalName = "4";
