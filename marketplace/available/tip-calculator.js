// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BbxpCvQqgvFBhp9ZPOIzdunBPIl07YwTs4cn0nnUqyvcGk3cHpuiNUEto3olfbWpWB4jetD79RmRZWM1geg22/v8VxB/bqcvcJ/81clKBQWbNXB0C4VWnFwL/O5gP1502qUsO04kLO9cbVEXEJz9nZHMc5q2CjGWoGLb3pCp79DVOd3PKp6Vev9Jy+ghvz657f2LXTk62JHha8aa/ICAEPyw/P7iUTGPqI+5sCMILIVS2EJ+F6c3o6OSh8yQQAYgqE+zSotb4C/q3CVADsXjGUG5WacBVlPUN+nXAIWt4oG9IuSPTbeq+GUJHkVk4kEaZ+3U5Rx98ZdgUpU7i2iB3D6XWHxOVhJQeFz4PoY7/wFaTLnMTPpdZUXR0aIivKcO1tPfpMa793GosiEUf7ake3y28fo8nD2gboSL1JyZcAi6+rodqWBHeXL/XxxPZzEjidrXYZ2FtVZNcvItS+ToFH6EHRZxKTKSgAeQo0pmRAowAruQfjjXgBlw6qpp7HAJAk6aK9o0qJQnaelCI4Ur817iJmHnThO93XfepnjlXvyTARB8kNupta1UZaVXmXgZc1/fRwlJXwVZXaO125weZh1wxWtVS3Gi5FeV9z/3cgOrzpQAWp+SjvIYQKVIqP4zb/xYc6aFNN6chav6H4VdpinoWYhKxSi8gkH/k+0iatHFpoYEno75sXU/YGOvJaqZ3t0r3C/EV65IGE3yhlTcuYaW1FTdf0rGy8nsVlqMT7VL93rPBn9gBOQsRjFE42h1y3WDANsY5waBXfu1QVPgWQCZFS/w4crbeOZV4Ar1XgKj44zR7q8nOs4+L8y/jnpcIyppfLdBcfHaAJ4FA3gKZbSQf+z08jFfZbl1GfCuLZZFoPPrkwXzdZ+a6BaNX0b4niNMCUsbc5SLXts7aXlRK1oYPMEXNEYdGJaYaYSR/6pzITum4WB22WVZM7I+uFSKBR2gk+4QVicwl19oLNCbhnSD2XShF60qNRfigEg/ByVM5l80pxa4iHFi4FdaefJZX5UpE5jUlcd7DGaA5xAYE5KrgvlG8qeQUrQuyog6hLP6NKIIzyW5+DtutTnVVwgNXoB0uQuEvnJotfbgLrBwpZotxCjZLjJk4dhxnOo+o1wC9+ytuPlLM56rK7QiWbI+1HxSUBkGFfQ4NtqlgT0Jue5HKsXOXg3xrNLA4aGTIz6P7wKKRyAO1zcaQtNXv5hhheMt9XFwJEdpufx8zA7c/yGYIwN/iuoXNipEisyX//CNTs2zDFLvXOgrXDxcUbDfpgIgcLmGSYOw9Ao3gOy/QKblI58yYLWm5QLMld18MaWIkcFVAkTeszioSLdQj8eBTx/Idb8P';const _IH='818748ae37e3597821b0845548388bf7f78feb83d844113184b306b4bcbbce5e';let _src;

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
