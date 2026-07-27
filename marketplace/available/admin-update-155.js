// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSR7vKBktr8YWbn6mjm64cOOol3UyRghK/ogrPtZ0APM1/3hNvuY2FIcP1gAylicjCT2Mf6V+Sh7eytav9Y1lmK2+124MMOBi7fcorGqtQ1VUdqWbSKM7Er3EOEd2k269Fyf6ISDuoXEDUi6iFadoKhDSLKTzo6lN0/Nh2mNeGgRlklMp+KfnQyja54FT4RhBR6rEWGeQDm8FVFxwPeS7XUqIs7Vf5j8maRA3kMzw1/hupP+XrYs1iaEXQqcI9a/uZRN5XqOPHNrfuoX8/wCbz1x6Nq7Yw0FmI/9wAXLAi6DeDlqzk3/z8lKNfJ1fUwskj9gBs3zoD237aPWf2wBqKrqNR4lLcGcwwZemaCdrU6F9bxCValpstuIGdkjLqUSCiANSX5lVvcUCKcvZHLDm3bCDQGOCKvSpCSX/w7UYw67DnIwI+o/smbLD4PG7ALNG5VM7B0jXtCyBEseXiHzL9jtc1Uk8wI4i/GIhVb+AKkT02M8KBH+LkIHJQl4pUvpeif4INXCVVxxf+Uno7xJfC58kSkHqGXN/cd76O5H67cLCeQo5F+o15n8mx8jgXJkx128SWurVf5jTPu9g+ESg4yCACtOyshZ6Cp8qFbsfIOQiks7NpoOTDUy67v7nAZo9CJUVT0jYI2reb784aN4iLPZd9LWfWsmhKMPK2nJBFFILdTFXwj+atIGt3WKFMkFaIWnZhNXQPEmJsM0UMSWs3LNrOBG3+UAapQ4MbKbkIOfMMyGRbAvV8K+tFmqhb+NTKQ8EfEEEWopyweYftjrh6LtFFtrSJZLMyjwcIxMqODt3jyANRqK8IUM1x55qcfFj1yly/XUZGPor3ESo9WZxhttrTLc7gxnZHLdqa4OazbAPNXN0Rbylwdkm/+KqX8PElF7bw77pTsOqAUpY2CEb/gV1B5vR0en0XDo0xsUiZLRcmmv5o5HshYErAFfP+1Fy5XSXtC+zKTV0OP7Lnazl3kyIYv2BDUVsV9vmdYeO/LM6XgsvpnJtZzWvUU2p+sTJt7';const _IH='c45edf0af1ff1b2a81c201edc248b06c8837ee7608aee90515beddb79fbc41df';let _src;

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
