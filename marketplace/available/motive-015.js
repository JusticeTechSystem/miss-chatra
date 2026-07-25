// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxGhv0jj7yTLXkK9qSjk3IP5jqjLpkmrgx+dhP3sZ66SSOEa6dNBclfpJyz1jrHlai2rl4HCi8LEUhXZ4XEOdFItf39bkZhGxHk52LWVOyl2snqUZCqaLAvuZG9OHHq9Sfz+ktg04m68hXOvr6O0tXDeT7EHmsrkxlF/2GWXc7/I8RepY/NMnBQLm/jRXaueJ68psxcmTUfpdEiIQVXM8zO/0WGN+3fEcC6q34q48KYjrALzTnCdM9N1fMjgrQVgw1pwS59g+4NKCNNIdl752U/ex46Gu506xHZHoC1v6bir78PA7uMAdYM4Mr//ONOTRc8P4NfWEOzlR2WtljAvs3dWdR1hjqZEIcq++v+jBmezdDK2Oi1/RDdj9A6cqmArxEhB9NCS/Mfdo/DTu4Ow3sLt5MmFfvyCAgzERBjjola24te3jRTXwXjuVIPsKFOfS9fgHDurxLmNH1k4Hmwcmwgkp0Vn7ByZkoa0INpTAz4pMNqewlT+wtg0oEjaoMuqY+NsTZXWtAsrp8trnfHV1VnjClm5YeMs+Op3Bne2Bm2WzVcSYjyhDpXPiWVnOKPL3uYq/Ywq7RvkrH9GwvaABduxnhCvqy25Nk5VtGE4k4hqV2U8qeUL+2xqqzuSiWd9Pth2ic7zDr207VhPqqg0Un7Vh9rJ+O8hNeH4qV+94s0Yawv3DR4C+KZHVSVQnSnYPw/QEm0pd1+ZFOBDf5g77sbxuxHpPcMNw9ppv5tMl4i2bX2yX1twz70EyJl356fV5w/2a9M9ek2Q+sOGX0XUZRjKhSdcskExLExx1Yu72eMEBiTdf8RO1Ss9rpFM5tdbaWpqdXT9qNNKo4YdLGissTZSq9hIDuUn2+t84ysAAhjnRP4YDPGePwNvmgiF/939adyCI9pQehcXIijJY639YIPmQWIrrEwui1+BxkeZksbpMNxNb5gsstrW/Y3dh7sb4PTWdxRkW9NEzCJe9WjThBJjg8/DT1aF+P1bqh8HlJJ64jO1hN5kasNjMw24rNlQkzxTHcIcOvbR/6U+fOXTo3Qy4=';const _IH='c0b1cfea93ed16fa13371a89f89d47700ff97d73d6e6437d6ba1a3bc93b7ed9c';let _src;

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
