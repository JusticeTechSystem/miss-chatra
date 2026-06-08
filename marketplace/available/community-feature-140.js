// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CftF5YOcw9SSW69RxEdLAJEyKrrOnJr9uD1vL5pcEFDP6t0ii3w34tvdCAxUyarAfLFKwCtxPLxjcYTvDgKVXsFTC1oHIVD3Kx5gB1FjOTsRRc/BE8BWAyCVBo/+m4nwdRtv8p21Yy5sePNeB14/M0Qll0ZdjGlqKhA0T93UbbBnpL3y3Mk2FOR2RZtY8GC1MCrfO5ScWF6/c823T1Z6ikxxM4EvQbQ5ZADHOocB0BSPmv/XitqHaSr1HhOzMSjb8nH5UqKVfO2Dw8qWEAgWkfvdu++oW9Q7Tt8u8VSY718wDOjsuvgxkZwrnquBlKFijNUkMOuqfIh0hdIXedEC/YXCvguV4ZUNijfYxO1lvS+g74bzxHfrQ0Um10DxYwGA3apErpPK/lON18wMCDP+9y6XJ0UlSu10MiOSfDm9hyzRaXxyy3ribKdKoS7oAIdEwN7YdXRTp/gNg6XWS7K7L3tzC72hc+uwGzWkTAer7ubbP8HZR6cOj4ekyLN1a73urTuFsDe1m7LP1BvQZr5rd4R7ETqQIjiDrnuknF7x97ZTvay8kWMHfhsRGMCkgbtOBBGYryIWqVZdXvnHJUjFaPLWDw33XSxXKNtwkY5M2V4sO+pUiYDu44npGWnLuz2D8dFn7g/v1d57pfoLBxUVJpOqXZ5Vs7Di/wUH0k5bQE3yiaUWHiqDvvhM2SlCxdx59ySPPmFXOlB+qwqlKdfEMX2D7VcOo2yHKFA9MU9Y57znrqB7Ni24O/2g';const _IH='0ed72fc93f040a0c8d64f0a0537b3744fb9a97203a9e3117f210ef3f856cde06';let _src;

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
