// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ANnoRPJGDZfucR3ZCDtHxsmvFDNZg0jgZOfM8TSoR6D7V/BkLiipGHYPQXNuEKGT6hBX5ufNzXP713ONN3M69b0ARrsoH3CMP1N2751yhkllz2+MDjrIXKuFW4oedcghO/Frz4h4HPCNujI6D6BihmpkUHMlXRyYAGk8Q5z89OsxivYNWtct1lVM+sQI0I+7JIVJ0sHd28KkncI/DW3eRC2E36e40LZI4ZUbkXDa8nzt47L0cVeKxENhtbqvKVupKeuyRTUIw0Ldje4yJjojbKylsUIeLrcihuq6VMJS7T4kLT/U4uyGHCiB5pFPu+BC7SfJQbTvHiBw6Rf2lW9rzr9kmN5UjA2GYIRkBv95YykBvQkwJYAOAN6KTZWFXtCclvj66zwsmO40errxCBemMCNUBDFkXEqWUSxd4lC/7dRlXCq/LxCWFtrTFO+U85s97TAsjFMXfjIhTx5O+YYDy8mBcVYioGfj4fO3xOfYiz3/He2c2dLuW+QQVEdsdNZSyVhVbHk7XHTHyvcju8DE2r3npMiecXHUx43oaUojLxPAloXM9UuzXSvsXmYPiBCc4lAyl0XKHmT9YvqoGtZpQ/jgobNcHrU/uZ/gc0NGLGOu5BmpFeOXDp1g0rfGYPzqRgMkHo3V3pWzjwwU//GScxEQWAF+rHBC+WIU9oOnOL167n/Ul0Egq++o/VLV6qQyFGeKg13Npjq5iUhmI0xhyK1jMym1C4eT3FYoUy8KCciXp4O1FpsA5sF1/CZOcahNkdxcYy7mIXnl9ePxlm2SeXaQ7jbnolJpPq0CbU7c4QwinKPH9x1UJP1o3np4WfmpbF7S9/hadzwhEqhAly6/Sn4U2Mw6/bPGuFuUgsKHO9sjU97nbVfmuL39+UhbEZDiphP3cmUmFm4Me1wWUV1/jLcqf7InG3zD8QIBuNfo5bgUCgtk8XVC3Peh89iKhblCxG2agR2k/ViUfJWRMsXSXpCQuWaFmV3JVTGZeer7enfgAfDllqeE5KzOKxgaZfv6hKaKg1UVJO1xWsaFA74v4SF6tPsCm1QgBikxURPMwwu5DnIgiL3Pvsm4W2YudtRD0b2Z7FwGztYQxZU=';const _IH='12111ec5d4c3028bd21602de33f14b6bd19f9403cff644a4ea5fb9f348542e3d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
