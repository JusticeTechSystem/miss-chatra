// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9xTkdnrZdQpRSpwn57rHIwxu+v8buJA/z6YJ1rM6M80ZHbdBya7Su3fuXXo29ZV12Q0ZCkxsxHXOD/Heqoy84vz8Om7tNZwS+xg1cz0dZX4oAQx6xOcr9bERTMfNx7SGBuh5+HMXGzN9bZdeSs3cGTPLG6tV8vrfabFUrHVho7OPKUTLbFYcPWMoEe6IisR5iXRQU19k6W3foNMFbSYintOMbTLxIrEXr5ZUjwOUx5hjaCWpAyGNjGytrt4i9TfnqVqu8DXL3kyECddT3lN18W3mA3FTplaWS9SM5cRzR2w6XPbTdCt9j44CHVtYLO+F9QAsuFfnYNLfbzMr0S44RQ7bc6s0vO3/kj93VXPbOPy3VJd601nX+YQL1WzOpefV9ywhls1djYgz8AYXAw35jhdCeXGdp0ZtMUWXAfFTMLXEVUqGGYWs0+7tdYyJtUL8YKPSrQFkCG4V3z5KZL5jrSG96FCL92fSXefstClCWBaThRTFWfszZ3QiHK8m8RoENZD85CFpsMNndII0Xs6HfaOCMg5umAECcefsxRrJpHvxxyAnUzyMRySSPtzFGPXyfYi4Ds+Bu1T2grv+gG2L1aqg0ILJRwYfTWd2yOpLNuTfCuHmWrW+u9iWTFe3f7HpWfLUKxvNRH3ZVRI0qs9/9HstuJoga3eaF76pZ65K2EJfQWEb/mIiGvRNByAKLKXLf2uXGf5443UBtnjTeV8GFo+TVwYvIbzIDLxUBhQ==';const _IH='62c563da7f4ae3764fad3483ff72383fc963a991894e5b0c311c3da97dd06721';let _src;

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
