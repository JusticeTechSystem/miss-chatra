// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBS0zC7mu+/YN9uv0GlX3zfCP1asz7M67f+XFzqXPMq3wsyOzUnjO+DojXADM61hFkdWDqAp+ZTggyA1N0tYbTnHnjZLV2Bk0jbgx7+eqsU0FQFBMVvrfl8SgoKjw5uhYWYSXAMjc+D/FWuFeZM7EDOa7m9d8fy9c6xVbbn6I2nHz3ACB3v3XxD8OrZnrQOzy4Tjt9T2/qcqeAuSfogJH8oWF5KDFocoo6+LLVDkJkJbZDG0aU1VQ21qePJ4/Hmw0yDyl8THlYIxDrpRZ/gAqG211C9EK4k1giTgtcWQGZzV66ho+EXD0j9B0qCMTmjiElDirVM6iy2OTu8Ixds80z4qiezqBbMCi51BunxZDN5qjYlcG6LUttMkYjGCFt/2mOpv1gddz6BEXr4yJhA0XcHSYYYM1VuTRa1YOHOIrMQySpOEdcXo3JbiyUfT8nxbWuUasWEZ3e5EykQUVYoCURWyfEvo6rIkz411UCW2Ji3usT6F4TxFABaWOMwYwG1aQbdQ0SD4WQfriEXtb1U6ZZQlHZMHU0LQuhZ+wHPWBwNVQL7lfWDxZHE0C/mDM0OsNiivqap/jhwN7br0iuWQ/zde77fWTqRVm+FYKXa0vTSH61Wk+OLm/qJtYvHK1djTTmLNisKKlZxKAGsNzgV2v0oEuQdC8Fxcqr65voGrhn1XLjPF088m059eZbSESs1COWNg8wkuk69OQk+hVdS++C8Zf12HDVmPo5EwPAdyhz';const _IH='8b604c3c4f1d6991feb4de5feb7178308cdec24923e54f1895d889bce6a7d555';let _src;

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
