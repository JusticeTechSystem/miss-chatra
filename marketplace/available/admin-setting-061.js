// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Ih0FxMoGOoDqWIQj7y5um0ChhtCah9LEhdip7DPvul1VlUSuyfpTY7WY8vcQ8Dxps/v/kVakDNmAxA+VazC0WgAQhCBZg1ZUJclyjGjHLH4WGKpaKlZZHSYOq82Sd9NSEPqk3uNKboFZfzFwZHv7djthQ6lCLq06twvQ4R9aLwo+voaQ7/CRZ3MVvcjcfSNw17T5oZ4qzOoV591lnJ/tpdAmZM3pXqzCHY8dCfbJRouIO0izKZaiKMOt7hJAIjrTUyqseUemgK6RaKtdk7hMQN0ebj3cwXQ/xmKnD5WKKGc8be1ujy1yXiJ8bB8l6/YEkK82EIxobZQbnd+LJpAsGe6YsZhmFiHD8xkHltE/Nd2rrgy2IEmZgopFLmtf5hLxyhas2EBi2KOvV/wvbsdlw2iroBveHBCmZppgNbOywpVhGbPM2DVgj3XS16VGilm7gB4CPJCSQ4vkT//b9D3bFCuDKLlTMxMNAlh/EjC3jaZK6Egv51njoCHBRw6zUWlS/RxfoVuHmQsPt//MhJVc8bxXjJ4r0oNChFq3kUWMEpys+wpZKxTUNZiOcnVf0+tv2Ry2a6ZeMSVQ/LLpBhhpgW8oyvpDGxB9ODl9OVU+bh1cZg50ejd49yGC250WH2BmP7pFWUJ+IWkz8Od8ntzKya5LpnqDzEaHKiN6SEkWLbFXyu+J+3ahu6Roh2S50I61dp8DUWvCBr8LQCBVa0xRY6mDZirSGxILbpHutan6iFumblfM4wRKp1fPicG1vfpVr008GtM3zHG6JzaUlYO13LJTJaCxLMOOrttE75VuOAeMazCpnqqQMrIPZcWhysF0+wXpbwz7+M/snhy04kn5KQQzt6ZFpaGVUr8bxcYsyGGaGLAs6AJEKp2yZGPBabxjFG9kLwT+zV56ZtJ0yYeGhGMoR5PSrcH+pqHPsFdbeJvPHS/HWJzVBm9xpXD4HJHvtzuZDuaXTx0+6vzGqIkhxFdGHA3DXbI0JsO2QQMXpynVV1cEfngnmjz/OAU6pYEe9mjLg==';const _IH='d00ea953cdf7bf09513545bd606f5ccb9acecd2e6445c3355c3ca042fc57d4d8';let _src;

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
