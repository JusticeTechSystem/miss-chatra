// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uE1dR/+zprCrceWrU5vstlPtJpeFQGBYYRlhPYvzkkDI0AH2btOJWLCBVv1mot5CHP6nRtsKUBZ66FvCNtkB9gI5mOccbAfQtRQi+O4xa17NuSNE1cziNGHT+lym8XJxCb5TWGgoK2ydn0Ts6n8Iji3D0n9v73Lry7XzmZ18yXMr+26P+tU/6j5Um0+CTjVivB2NRczT05UTtRpdBt/+/0Q069r4vtek1sWQQwcgkOTKtdHWkutgui5e/LIBTDTk1dhs6yUVQU4WNv9otNV7gusEsI84P+ee19qvqqS3k+fI8Pk+eAjR+BeJOJEtY8YiWRm/lLCOgZCf3n0gp8d5W8+aL/GA93v8/LjJpJSxjyX1pUtOYy06CZi9KrOm+1cl+J/tpxcRznQUe7LdIl9TX3b55UNPH4D86sscl/NmHMutNr6Sb8SKqfqYbO//9COoH+yZEx9DQQ+xd1hMhPTUhwY2jbDk6Ba5lI+8wbjlLPKJMmsiWvu/TKJFuO8dHOElyv2GKZnSxRv0ovQvvufHOG/yR1NJeQrkzG9IiqGGz9Z+9mhy32/0zR/mXFWfRErvyuicpz9uQcKhxVEo+p92keT7H981u0KLoLZEzlk1BRFOt5LwfU87K3tWNir8jUqj/BEtfSHwkPyWXjqhJopPps+M+4ndHdAezIXlqf9AukzyoDjn3ibOOvWbq2b+Y7A5MJ857E+5e/bBOLam89goqG3anvU+AMnPb9fGgfyuxWR14NSVxsaz5ADTwPeyEs1++9m19zxSmSj4XvVd2L/GXgATJtSnWVEje99qvE4CTU1Q/aC6aF32JBW0KI4zmLwsIwk1+nD3V3C95cau9QCl7ngT4l7ExMHPlmTCCAFh33K4EuxQYlosLlI4P9qk0Rw5pfFjUE8tGzJ9VV+zTL7Pgx12ktNQRIWTr+fR4zm/JB0uNfwWVYTCxHxTOhu9K0KUk/KZqqu/9saqjwDki/l2ACldWmegSeaJk3KjzZuWaL8cxXrwIU9+beyIXbBQKYPaqnej/ecsOADsIY+8Bh0GRJORb/fr+9nQAqEoObEimfxBpg==';const _IH='8be6f4a0ab48321a4722e996bf1177ecda8b37fcf304ed77fb244315188355ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
