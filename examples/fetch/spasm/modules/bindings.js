// File is autogenerated with `dub spasm:webidl -- --bindgen`
import {spasm as spa, encoders as encoder, decoders as decoder} from '../modules/spasm.js';
let spasm = spa;
let memory = {};
const setupMemory = () => {
    let buffer = spasm.memory.buffer;
    if (memory.heapi32s && !memory.heapi32s.length === 0)
        return;
    memory.heapi32s = new Int32Array(buffer)
    memory.heapi32u = new Uint32Array(buffer)
    memory.heapi16s = new Int16Array(buffer)
    memory.heapi16u = new Uint16Array(buffer)
    memory.heapi8s = new Int8Array(buffer)
    memory.heapi8u = new Uint8Array(buffer)
    memory.heapf32 = new Float32Array(buffer)
    memory.heapf64 = new Float64Array(buffer)
}
const setBool = (ptr, val) => (memory.heapi32u[ptr/4] = +val),
      setInt = (ptr, val) => (memory.heapi32s[ptr/4] = val),
      setUInt = (ptr, val) => (memory.heapi32u[ptr/4] = val),
      setShort = (ptr, val) => (memory.heapi16s[ptr/2] = val),
      setUShort = (ptr, val) => (memory.heapi16u[ptr/2] = val),
      setByte = (ptr, val) => (memory.heapi8s[ptr] = val),
      setUByte = (ptr, val) => (memory.heapi8u[ptr] = val),
      setFloat = (ptr, val) => (memory.heapf32[ptr/4] = val),
      setDouble = (ptr, val) => (memory.heapf64[ptr/8] = val),
      getBool = (ptr) => memory.heapi32u[ptr/4],
      getInt = (ptr) => memory.heapi32s[ptr/4],
      getUInt = (ptr) => memory.heapi32u[ptr/4],
      getShort = (ptr) => memory.heapi16s[ptr/2],
      getUShort = (ptr) => memory.heapi16u[ptr/2],
      getByte = (ptr) => memory.heapi8s[ptr],
      getUByte = (ptr) => memory.heapi8u[ptr],
      getFloat = (ptr) => memory.heapf32[ptr/4],
      getDouble = (ptr) => memory.heapf64[ptr/8],
      isDefined = (val) => (val != undefined && val != null),
      encode_handle = (ptr, val) => { setUInt(ptr, spasm.addObject(val)); },
      decode_handle = (ptr) => { return spasm.objects[getUInt(ptr)]; },
      spasm_encode_string = encoder.string,
      spasm_decode_string = decoder.string,
      spasm_indirect_function_get = (ptr)=>spasm.instance.exports.__indirect_function_table.get(ptr),
  spasm_decode_Handle = decode_handle,
  spasm_decode_RequestInfo = (ptr)=>{
    return spasm_decode_union2_Request_string(ptr);
  },
  spasm_decode_union2_Request_string = (ptr)=>{
    if (getUInt(ptr) == 0) {
      return spasm_decode_Handle(ptr+4);
    } else if (getUInt(ptr) == 1) {
      return spasm_decode_string(ptr+4);
    }
  };
export let jsExports = {
  env: {
    Body_json: (ctx) => {
      setupMemory();
      return spasm.addObject(spasm.objects[ctx].json());
    },
    WindowOrWorkerGlobalScope_fetch_0: (ctx, input) => {
      setupMemory();
      return spasm.addObject(spasm.objects[ctx].fetch(spasm_decode_RequestInfo(input)));
    },
    console_log: (data) => {
      setupMemory();
      console.log(spasm.objects[data]);
    },
    promise_then_6uhandlehandle: (handle, ctx, ptr) => {
      return spasm.addObject(spasm.objects[handle].then((r)=>{
        encode_handle(0,r);
        spasm_indirect_function_get(ptr)(512, ctx, 0);
        return decode_handle(512);
      }));
    },
    promise_then_6uhandlev: (handle, ctx, ptr) => {
      return spasm.addObject(spasm.objects[handle].then((r)=>{
        encode_handle(0,r);
        spasm_indirect_function_get(ptr)(ctx, 0);
      }));
    },
  }
}