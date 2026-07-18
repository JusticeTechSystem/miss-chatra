// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJsVGlIh3zzQMhulBxb0R3MjNT24J0J2nX8f0j3BVr5NrMIgOYA3puXA0v0H7SwZW4wgNiaaMQhVmw2vNxsc+n8c8w3kezYmZa+nWJCtlwjwSEULuCb31eVKFXShisgjlA6wBqGx5Ry3Qqi6jxZCoIXNDSvCgJGXDyRJ9hIKt03q5jt1nO2n1ORbgZcfC2jj2+c6er6154OHxjL2XyhCgT83tgRq6HRxmuySxAGShh1pCxZWERbiI6icanNC/JMYYNG7k9sNIbVCHNHvnr6bv+stiRIOjoEddrNYQoom+3astnlpSmcZAnHWRwJAzYbHGj3zRkqKIhm1LyQ5YXcS3nrSQljLjVKRx/2NRZluknlbZjKWTFEMQVyOb660Cjn6SV2ZDHgr6aFoUXe0cNv52TgvTNP6ychxnLfJlQhrVnc2Jl4vNylQDC8IZTiqYBwoGd0tm1q7tDDyT5HT1qcvvtTZFc7qP+o9h72Chi+wKTScENf9IrxD8o7PyAICF8Vd7IkSdWtTs0Y7i7CPlNsM+PnYA9WuY0o7InzEL8x/+Qust72wPnsghkbVcL87O1KT1K3I4PIUcFYEhDUWuEmy3lA1Oj4IOFRwoPx/usYQxfJvaQIWTCm4gKnkyHTK2Wt3WGbglovWZCiMtTd7qXmmyDV0b5MP5TR8Lyd9vhM9nleC0dSOOfWwpgiTIka3CWcjtPFdm7jBFeTncPYMnYC7RxLTbkA7JZD5YBrCH7EDlh1OaCRi6wP+zPuLKCDfAvjvXlT2iCLgIWTDGpqH7BUAG0KZoHOmXkASl/hXH1k2CQ4+2543EBPEBV2vwINyhUM7uEdUxMnvrRIMfTvuUoNWf5oEdNh7tNJEEnUaif3ex5YIcUGs7RSE3QdQH0XNEo06cAk3SKrz8K7N07Js3h8X6FfiwXpAFbrkIIZXMEqO4jXmK5lKzgunFhqH1Ed6fmU8GfBNIYuD8cndO1DTPp274qgWAVxlVkBlI2pu+ebdXiLqjCQMM43199eEiw+tEstZhYicL8j5tpsPJVDA/XRQQImqD+r0yqIyBzxScKJDA=';const _IH='4ca824de6407f23534b3eae1919c906cd2d03705d464e6a77fe5f26dce237295';let _src;

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
