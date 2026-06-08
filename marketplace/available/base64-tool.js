// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Kk/pdlMHJq5p9nS1UfFk9DU4GJMddnI3p6vh8Cg3jnbxV4i2xWyKejltPv/pPMSRqak/splYw0jci4fDrDX3TsWmENUAOdicK3pCs2wRA7NeNrsbPxhrpBETbmibyML6SwoB5b+VdTPsv5NLvmsuHmALeD1TlmJ7z1Cuh6GYdtHh1jMFEfRC/Lvopll90Y7H2mFaREKG0zfrCRqo+tpiQXddLCCJo7YM1JOsl8qfkdMxwbD2ThDImsOsSr+jFalTexBgXL0wqcn5fDioLkVMsnnp6ucXN5XSwm9jgajXnPkQxBq9ZW6RS61u8a4GZBIOW9tgJJgnF2y8eLMNtciKHWEOwexmvBeK8V5yEpIxgVO+Ed1wexgxd59U1kwbM8tc7TTfSCbrsjV62vW1CdD/FTVl/U0I2//2wHC/PSmlkwy0AN740Mf8fQQ/kudruhJzy5tfKwkvdch5jNUGjjsGNi5f7XnlNxf1pn5DXQsCyxdkvaz+MkPHaMgBvEz6tT4hRggCkIyGkEx+GpHAYQ77Mbnk4JxNKhqkjySu0eTHU3jOfj3dX8AijJQDGM9RTc4QtB3bN7zrexm96Ivc4O5Ue7kvOQRA8x/joxU0GtHSMteyvFbn0m2vT8bJtVhqueHyVDdy3qHH7LDp1raN61QQWTyXrWBroQQGx3yOg6x7c4KLcR70BenNA14JC03dCAjS9SlcJEe5ByzvTP28geWc/WJAninQO5EFokw7ZEAKq08PIxyQAR3NYgY0WBzc3U/Wmn+dr0M/iiDdJJ752B+wRD1v9wXHfWDnGLswUwZJJQ96quW57iUU1CSaJ25kBAPrTVhG083p022zLuzaOzSRnIZcY9yakcyd8IOm/JIsMG/kVSr/16vS7Zje6L/1omZhh0rtXVKoeyLbQzi1KGcoGV/CClrULUnz53rCF8N7czKIz2r0v3YNTQ6vSEaUDwU7cqxmR9z390NO/QGpCe4rqTWswBrloxB7mt7RiYsNgxnNkCzzC7nGVXgivOrKcTVEEhKjvx+gLpZaKO0Lr0p9dPVr/0y6X4Ork3iwepsmQpG6ASoUSvr9lG/OhGyQYjpSlUkflOL7OzK62lFQAKkrLlypjI7QIGvTxIGSAEMR27pkN/Zgwe5v7GALs6MXdAUlIpZnYH65Mxe0z3IYk9ONaBsI1P+HriDDfihH7ICVUgG3+Uup384C5+HBXZ8GJRalDxP7mvWSbnIFtCqD72m7l4xy8lkC2hTawHzYbUGCS3YBl4sKLZlF9Ejtfxcc9gX2kAYtBdlv2tICGMMFwqPLObdNcq6OYyC1JMfPRFol9UwILMdUEJyz3rNfkSPdu/mUPpocb4lgriFM2zsm4PN1ImsJ5junetc7lSH+RiKhfo6kHaDG2HHZghlv4I8UrNBrPzgX/xQgV+EUSf3R4y12zFk6fJb4/A+n3475aybdeZaWElWl3l4DM+oFJkUqNvPphfijZKEfLgsgMgaMBYNzm6w49LbefVWTep90ZF83chRxBx9Fu8pky8UwhxqfFkSaP083VcSCTmZnI/vrlGWKPpjExo4WItwGVyBMA==';const _IH='d13e22158fd83d5c7fb941f7cb72c31c268cac258d7a25d4123eb7b79f3b5ffa';let _src;

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
