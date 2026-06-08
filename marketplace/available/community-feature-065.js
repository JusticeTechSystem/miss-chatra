// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Hcvji0psi/IWxGE1xsBL7SPRp9mf8f7vAbzr0lkQ7MddXmw5+ryI2FFkSxwP7qzlTtiwK8lVIgjWExQ56uUv6Z9TgdH0m/9W6ZFTerFGLsk4h7W0mMKQn8iNXbppto+UmSdsTGNZU5xWdS3pn/wvQc2oLMTbq3eRyuxQWKPM6jVXVrNqNr34zciCiLh26US0LOxXU33jlK8DS6yAZAg2B8kjDZw0F4ddDsGerPx3WyO0esi6jIOddkkpQr3s5zxVvQQ2QD1PkvgBkmov0rHVoS7S34TR277onsnPVnP1Luuvd10dGgU/ZgZMbCAHCTlfZluGABVi5zDajsDWfoSgi7D1dcm2g6wAfB/FaOIhj9D1CNcI9nohVzdlTHhJT5S6JRttx1aUZ6n/U5yMNsVo1yGI5mZikStUqob4PL0wgdlSdYGKAtLf93G0lzUCE13UrzQRqmuTBU7xkX2lXJ2g8nW21TF/z2kZ7zHfyllVMmJ+KoCn8qhdcr3cXl77cmM0aGW7rXY22xn5smLxtOmUk6b3pLb5eaGYGZ87L6JOB1gCYOvVtocdGTQgrTvMXdM2iFu7QpvR5g1vpciSYt02cZL+e7wjIvLFiNX4ZvKeY9UCXHXK9/3rTDt1mrhvmOsMntGzQ6XCMC2GvDe6XJNwE+PMDkOiuQkcPlK8S5aH0J6GOmSPEcaiADlAtRWj3qEsHICjVFfEetwSq6T6tjR0KnNLhtNN4IjpDy0mCNpQZaU6Q8jprA=';const _IH='fc1ae307809ae48c98ea72475247d98d3058ef68633f3e778ebc1bf0cfd5e793';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
