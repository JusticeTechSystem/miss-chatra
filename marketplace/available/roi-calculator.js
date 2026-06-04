// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vxF11mzRx7ODXQeHRPWZ/jLmIPl4LbzaXqm6hVFhWEhqhjw6lXVwiXzVM5NWicR8sLjlyPWAleFVFuS4QDTJ6qx1tnQ0nJIWZvADBoH99Wh1ljgioh8Do0iOnESB2u1wtWT4SZ9KjzTWR55I2UVYeoIigridTzANrTVVCJUXzWflW7H+KqXUDnPVCWbWL3qd2i2YFT5r/DAUsfMxyrFLwuth0uUsAlqO0qXYsSHj83VbfdFd/h4DTWi/nfRq/mcgcVe6Y2td23GiGTtk3DMucpSm/Nb/G53C5T4vTrfgUVaMu/IIMkdNIAMJaQPBM1zT1Ha7mkNAauQbgS2PCU2RyV5J1WlpjTfXZQYEvDzGVltZ4dsOQ0uMp4s/MZcOiuBqi8K3Di+BTlM3W7dkpNrZErUf7SWXkpZd/okE/5FId+hKS31AafGqianblJmavSrec6ndgtY1zgOYd+0a7O2gOlcWQ5IGtFyTtT39X2+gJ7FfaisMD+RRRza5AHD2JqQmrf2cP0W/naR7/6mP5vvYFm3roCOo8U86lqgDY8vxpRZ899rGT/zuFGEOO5MgR/Atr0pz6vwDFQN7GCuxInH8qivCKGUoTNwX35dhDUht2Qytc8x2OnS00Xd85ATJLMloJK4jMB336j3tYD0BkWoaRqLh/rf4qG2OOntBp+COXb3yBnfPf0iFRIqK2pm5s/0NUe+aDCPqpDjtXjUDfvLBDB+iDMNExgAsrXvRtS0WbyDJqO/w0GO0yJEdWqeOsmnW/Vpkwz/DgcmhSy1KY5Y4DZlGGMqk8tESE2MAwk8dMxRZdiANHbMRLXfQnZyk6YVMWuJnHV6+tGUCRI05P03w6QusaHh94ZhlXWow9IOKELBdQB4xkXBnwfKqmRlqiKeiShg/t6xwBEIQd/nLfHZwOYcHMhtKmOI+JKZ+s7eUiTcvLShVT4mDZrb4NRcD2cbOYf+xI5jWAhWyoV12QqqsJWI2RJ1Sd1sRfSJ+iWs8f94DA0Bp8V6OjVi7s+TzU7qZj3zl9fSwi7rNMww3UjJNCTJTnTj6PpurcdLk7jKVXqRSX6cEkXp+RiqLoI6Z3TKxMMMd/N9tZRlRGvNLpAFYwpU/3+ibXHch9+Yd8KCrOXkufnbnzX0NTRlW6ykLlcQ/vvniK4BpLeWtjkZYC9prjcmZVYsHQgdxu9jjDeU9YGtGm5fNVLRaVn/L0RifLxSnE4mRHKCXkazyG5WVZ6mMceVhi2pBu2ODwuypjJqxEsX99rcIyeKA1Ab51p4h';const _IH='222626dbc37a447c34abd1ea1fb6dd7385b1e468ed37a84a6d7f6175c367a38c';let _src;

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
