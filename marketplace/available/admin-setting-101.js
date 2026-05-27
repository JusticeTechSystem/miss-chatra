// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eVDO9h7oZIbQDGWBJlo4Y2ogNAtELAvc7p5tK+gRokFxQzv7YAg/oUC9DaGhWXQOuZjO+HgLQxhJqV1QfW17ZGHXrlIbRe7YOEmV4ItvTWmEosb8cDBVZ6GBg+do28GF0CsnUvBj824cMEcKV1LfqBddxWf8nX55JcdoqdwZuQSx87rta5/yZHbaaguV4rcvuHmJwHT6LUl6x0i+bGLtfPzU3pvS2JtUJPi1n5CCYJ+OHeAQiLI+i0oHCb24IQa6/DrCJVQSxcHPtJvVBp2AzyoGej+9kiAoAhAaluNw7Ixbpik5MIxr1h+lYqDSs6FKdBvb6F1v1aQDDDJMRrqA9k6eEXb1z+9EnMIrAffUwQQmeeL0MSPSTdAKQWyxGrfFlbqx+Bcx8bk+NqWBDeMrSnWYwGIaKMLOmrCsgZQ+tVO9cnHlJa0oM+tvBEDgAwplid9x+YEAC23jRp7Jwxz6xrY/PJjWLNGpyNSSX2sOJXkI4WOk/I8037IhIR8hKaGd0HbYxS/dZ2mlXQu86qzlvuFtp/OZYeF33yFfCrPxgRluSKp0NKYF1Hw8U+le2lUOOevp6l/zlGmjMKtoovjx3dS3skrNIxgwBmDPA9agNwY/hYnwCT3Fpy3cPxXV4G/AOjiuKvjmy90E5piidI+VDZci4PVhDO7IgEd5lFfKb2mH4mbZ+7qHrWw0xpEABWWWsXXqRXSK4XgM+vovrjQ10FJIU7Bm2y+GsfgEilD2bdkq97ZstRD0COqJ42hHQB3itIstusNJ/j8dQskY/uCh9NL03xTpygZ/S7woP1QaSgHpM8OqEv3UpPs2GT1/VIXyriwdsLjxvAmOFloih6idmZZMbfOUOVPogeLyB4UiZIgYHzCy5GhYPJBhI2M5ZoVS7W9jhXGhj9yLofOKc9Cz+Yk6+0C8qna91RMaoeavjwfOj+NIunRc7O58iFOn3No1yGHfiY/JKvoZUxpq+QgM00U3yrPU8VdCcjOgybxBBE1Is1vexa+NF50kOEMl7jOdJP5kiY/cWpA=';const _IH='edb2e985cbe4925e7d6006802a121cc063c8f6d3a2cdea7be3c0c4ff653eba97';let _src;

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
