// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cDg8iAUknJObc51Olhqt5QwtQFplVNYdf28wIzQb+266B+w/incFwa9ovd9nP0ZOp/xe6mmcPJdPn5vA9BfbNMvxROmLHH8S7kkkQduvAYYxusAx/XyUYMVRL2MG6UUmXoW6l1pzmP9yH+cdOgHAnxKKBwFWd5XzGyohWEE5H1w6yI73XDCvzYMItYH42cU5H5qyFYSvYEalKOBiVT5HdekXkmErO63klBlo22WJBboJH60Jd0j/hYx/H2WtTQBEQt1hlQXJyYpYXueu3t2aMNsl7Qpfo7AKLrQAqmPZBNJyrlQ69pV2u8kJxLdrXKiBosKCkGDzOjnZhnOgESYiEdKNJoaT0U03AOcbvJXmaicSWuXFdGH6IUytnfEqFxqa55sBS94Ch9nNy0JsEae1F1FBj2KnoG1E+RbjZsL12kKvJLejU1mTKfGujZi3f7DhKYB9mjdyfAPkkJaoJYGZH5yv9lp9dUkKWYM7NSD8zipaIFlFhd15SEfVSRfwTk7gfoAn+V1Wa1SSu7QgOu55Tlx7b/JxPeoF/IH/Dav285tBxHAMUjl5Vy+e+gLso+Dfc2JQBdff9UiCSySW0v7CYqAbFhWisjnhGyqehPtrzVy6TpP523p+sWpy/bpLzMuZ8Cw1/wl6as8fcw3WK9TVKjJWMFY7IjaVR1jWsqWlIm3lrhD9Z9Oybulv8q/i7VAS677aYm5Viqy6DKlyzNdq9MCYllzcYQeOGT63YAdk6Q==';const _IH='74b3dc43e1da28da6cd74276fed257c891e284382ea449b85ec292de9747b9ab';let _src;

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
