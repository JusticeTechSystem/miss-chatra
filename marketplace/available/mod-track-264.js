// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQX+KGbb1BRywYmxdjxN8ChAooWEu8NvdVAwiWihd7C+2Xi7BkJL3+QWlJtII3F0IxnhqHKVFViMsP9xOHj63fQDUp4Ed46CsRUEqaUX5vn2K4XTzxAti8vC4mvaJ14Bo2rD+C5KAm21n+yawNGS3UQ4KUJvn/IQPwZMNz1y9Wi5QySVtTwpebdgS9WlFX/uEwoAiGJrgqhsZpaAeZzWrnMdPIVIhjdFUdp1dyTBZM+cL37zJ0ndFZ4pnEVDljyK1RRNLy6Xa4C+n1GU2Gfbr/WNsq05jqUH+whLbsT93iaMs6nktEAud9o8zankO2P3Sr6Hu78Md0xnJ6bxVF8q2JfSsPUVnq94u5piSpqaYp4Mnxu1PKLGFbyxAN5JmjctbYNFv6dJiHnkxoDrHdkTQUVnYPWSL03v+VmwwLNnqerS31HSbVybtVobxSSmfqpkz2K56LaNzYmDSL+UI2ryHIK0hnehyzZMAQjmLQA35EKbc0XJ1w4W3Y1lZXWdbZrmVOzwDIW3ziJCoBBKfZIZR7BuifwCwE5Trt8cNLweLG+6SVU87VNTtUw58gC6pbyIo4dL/nBI/Zr8uyeROO2m4QOk/J/2utQgN3tmJsLpLvSQ2B+6Qgn8Ue4PVCE9csl3isIZyPywF3CGkvrpw0ki+4CM+MEN3yFiaGf1/SfpFlORz3QMxTAPBUHZAIHGsEVHVGHIpCjMg9XjRfKlQx/GpnLdaH2eP2rXIMhGqw8iLGehu+5vSPqu71/cWKofodMSATUrra2G9OWB9f8tCts1PG4uXHQIGILNjbOqxNR7twBO8JAcMzcQw/Awi84UYduE+qu0h10cFVJeOjkMvHsmnUPyJe/wr+d4sZED12mo8PnkYLUcI/JbQrDUeVY9SeJENxJa7UOXa+kfTfgHlD14Jz66JV0Rkx+2ruzuSntc1tv3CwWF1YDzN7auwm90v46cTNZoTEzkUW0mqMhnw4J1nS+xnISpqfpoKVVDfPSMEA5sNueN1qcGVFc+/BZG2QpBt8XBqwZ10oWaBVrqSQzNJomrA4jHCQEfG2O+kzoUWzFSqv2Kgxg2SS+F1F3vQI6lHiTiU1kFsU84sa8hKPHDo3yFNG+3lRLQfE1qMN4ac/Y5eCUkeptnQUkJNcD5QIEhjSDGK+RiqHxIqpONNfufl/3yM5Xc1SX2Lw9R3EmneurNK5It/AAlg4bFvjmywAraD4Qn1jFdNh1EwdGVCwWvOotIZWbw5vrpRPpj1C4BKCvssitpqHben0tnjKrdTKJOdiP4yeqYSunsahgASv7p31wYvRTuoho/sgf22kFD3RoUOgcbu8tvrRfSJmWcZsMYiaso7A6y3prMdhrxCmUhKs0f/1zCFki7ID70UI243U=';const _IH='99b691b6a6ac467f07adc289b83a01f56345690436a52549a44493bf4b28bb69';let _src;

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
