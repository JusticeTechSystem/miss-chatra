// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uYGzzjL6yqYPvGuOo3virNU3103zXZVtZPdQUd9Ka2YpyyKGGD4Z3EuUPDxVilSvXxU8/LPaWPp9z5AXDNktl8Gy3UxE0S7j8VuKzeZpZmjrwC6UReMttFFdZL7R8L+rM/H9qKDbktp3GUlyelvjC3fGbetycyGb1ZOyHorqIGSBa3efzBdIj9waKqUOuHiQdpxxsqsfgrwsv2hQDBzCksvUYHOQ1p+bR2oxvwvsoTbT2KUKcUYdHqLSHEp/lhoQJXJHk1iMZMWAcc92azveT9Tjk0wDkKT6z9yXEyUuj2wSs0ZFgygaRgmI8WmeznQVagGVeI7nLVs484enOFVl0zTwCxBTq3aHiOo0Jms5MPFO+bu2CU/US+NRJ6HHSJ2wOT0GWHHK1TAwCs0HpD3Ai4/B7WI6WGFfzzX+PEX8dyfp51KqeZT0v1w5s9/uUWONO8Hl8ishmvruNAVDi5OXO6onJiCWj1tYVB1GGm82NqOCnpuMZuU8cHF4hwjHqghTMezhXfua31MUQCmz205Mst6Q0u63hbdlZkZNC0GIpjhw7OlX/qd/zuwkYUIlB6wrfxz7ktU3XAfjAaKjLV8m68PMDKWwakdwBisIAY2zilzMFTQcpHFcavtCOo4VoWnpP0OS8GJBFxiKy6kHj3+QZF/nV0/vjNDJ65RVX0ElU0o9lTOIF75SObOZ6UYbkZTErIAe1JQpDdoBVwrOdWw4hY2IeRHkqc05pZ6SoWVcG+KFaqTSidZaq51mK08WnamwrDN29KeMCs0SeiE1gaFxlp1hFIyaYkh+uLVFQyOJPVaZZN/OoeMcyvWBZIsydJ+Gk10ioYyceubTd5BUZNlmmUzLgKG98h6MMDiZmV9gO7Y7w7gdFg+FaU+ucxFU4n2o6QdB6qC7Hr3lYpx7V2rl5BZDdeaik0LSw50ppzjpgC/3ivCL2Cx/IQTWvokYiEMweH5phnXzuSta2eV68iuUVgjSrKywo9bFwyATWIqTwOKLxyYCl/x5Xm7NE0zSC5++wTbczOy1rDfQZ4UpK18U0EEBPxUfOlSabQkKhewqyIFtz8emCQ4tfKLAX6gXLy5aDTUehxMoUpviAMvYgOy5h6Abe1jRn2uZw8owlaafleCqcTWAlTNYY2bSJwviARUd0nILPq/j4fpPK6/Krs8XlVezuB6XNjK+3bafMsuL74bdUzMfdXy2JKBByBNlUFQ69wIQ7jR4vJHIp9qXDaFEE45w87ccG4MnGvY6w0EvXXr0mab4VyB9lz/0JYX6W0XLHZ8EaFXOqzTUALM4PVBqqGCTDxoDZBabbYjP4mZTSV/Dh+T0D/rRUmGL8zV1VQAzl4/y1VQoTQESC71YbKUb+PCSX7T6Xj4blGjG73TF';const _IH='11ae593804b52ee402f43cff47cd1d8797a71ac9fcedc2203fbfa4518f2c969a';let _src;

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
