// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuqulmOsusY9mhU4+D+j8u0gZAqm2LyHj+X9BPvsoBgvfM85EdhuID8WFqfTzvfJVC/WXWxAZQL5O+Rn70EmP8wkWklZc67xm/Z8QCaYdRnIsbslFAp0RBi+MkG/Y0BZw97Dx2C1Yxa1GCdostB+IoxI82QsPgN999HxfinnNSyPb88CluTWCMzzRjO+AEV29IsAXHtmmIPW8tHq5fmCy7mpTAdOAFuzwyHhj59LqqLgkhtd9SWQOk6qdUi1StFBsFjxvDJ34pO2ABA6EMP5dLj7T8bFSaPnXwb0isE9xNSVW5b9iJiOO9dNJ6p87R4a0bynd2G3BaBADujklAdxaeItpzTi5FqztRnjzfTpNf3ojmcaT7QWFgB3CEhnRe2xm7T0dyjabK98KrtYrWLZ0K7HC+O54tV1QXV+fpJDOi7Hh777jRk4pFJRgyF0laLHwgAgEgEUK9ZM6LxNesQERYjlMDXxjhKyyb4Ph0LeUb/1WlOlnpS2PwyR1f3OEFySvC++H72tP+pZkRLlhRlto0uOyUdf5zhbEesBLCgWrk9XQNotz5Hw2bqFWvoTjO2z+k/c7Jr+2K3AaQ9JRNxtsD2nBRz6/9frqJWh3fw1CXLa+P+pU5BkGmIISqViDQBCJFymPkicjNAoPV+jyTu6wFJdu6+i3E/aE/hVW6JUaOPNsRCinAyMfW5FDbZ3pYdxV13u1WW/r6bZmycE22Sx4kU+aNeAzZXN0H6FjQ8USFPcqhrWSQTMdR+WkkoHA8kTD9ZlA8r9TwrYuf7CMpclFHzx0R2OuBOc0ZhZo3DAw3DBy1WDGFeqCTBhmsHHwliO94/5mU8RQF0AvzsfVkhNQiR9wfjUBKlwvhv+sN+4AgvFdln3TRhB7FuVTyp8V4J2/a+Qr+tODW6tP3gABFkRfRMv8HMqjclJvp1IwZqdHEM6iqlLRqnQ4VGCSbxIy7CFHnniOrq0jm+bLVahT/EgVA437VjOvAkj/wCXRUn2mM/Mp8kVAVkIpO+eA3Ys9DNNMX3R06Jauy/AU5A38klxE6Lj/ttCM0jn9gfF3P5VWssuDHTVa6CdaIFfJpUDeXG3n4vqI2b/C2dl7JWbjtKhDlvy5AJ+sgAx2YHlc6oq2UsWvlq9K8frvMu28vp3tc3DFA34hStSnyIKJccq8MFc2AAC5JoCfg08/LZRDdLC2V/oNjO+F1IOEuIMt2VzOybmnkQxAA1zVkR6ONkguI8UymIjj0izCMKPtkPHDFhImeBVxCqPGjo/HrVzatqCJx+vSp6iNqwxt5prEJ0O8G+o7pP9ZUOF5qPWHK29GcQhM10Z2zV+gX4es3Kr6E8xtREDuw4v9Aha0jjWlCr6cZWLKc+jebrs33VY//rhZnUrjc1JduLco18o1egfCUFKy1MdYL77fzf/DTz9+2R1pY6c35I7bgNgM+hG/VszJeR7b3s8OkQnkRdmvSpRqi8c4600OHQYkIB1upjTt3G52BsysYUQ1rdZBQoc9WJMWpOXcS';const _IH='fee39f96045fbbc056ff72e6c66e6700e45ea9fb394144feb51cc9bf0f404eb9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
