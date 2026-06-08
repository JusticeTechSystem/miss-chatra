// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GULrb1AfMUOX1hDg+9SKEwEHhkJ6+NaenYOE568D9OiWLzm+NLwTgA9IQQyBi6VdXPyY3ufPpsr3GecVuWHndRR8kOIEKRBifuTWVO2a7MnRrYrRM4A4VTfyVRjr7tmat2DYSl6LRPjBrC9mGdiuEJP1ap1pb0YHn6SutNEVavdBaGjN9V2eozQRTx260wbyyKjWxRDpdsyhthob0XxyQBpD/gLhTFyMOXnueH3tKDhLRyPQEdGG2hBqk5zALw3bdrBi20mGCyDNnZnAb1gcAZsI++L3A39Xd5kptUAdH2XA0e1xsug+QlbQJy95gYXkJ/WJByjOxOW/CXpHVJhJOAP16iIDN5gYLoPJwvkjB9BCG8p7G5/xpzoaJT1BUnLsYkbantJoYEmPQTRV1am9uo8QwV98T78TE/7G5jWpkprWT5aToNS2IwK4A39tgZ10HsHMC8NBL56iIu5CcAGsNUbscU4yrgKrZ4M7AOHPZptwGZWVas6xgD7Q6zqXpw9EBQKXkA5dgvWTDSV5UFcnsHP+Bri7m5P25/gjxLM05VeHlDZALdA6ruCtGuNJdVfC9po+bd2xDn0pAH2SbMWgv43xyky/EWcJgHTV16VYIvWhWLddFIpTtgh1RyUO69555tbBZQKUwjMDHseLBMlJj2xkwBBCqCzCvS/J/y9JR3CyqQhmFaWbUt36KVHDtFD7jt6cLULGBZQOdJwhoqpNP+MtwTDdqbm+r32g1AWID0hcMnnd7yUBfN7dh1VQWlyZUKnUq8c1BY+an6vZkF2iC9YpElKiPJEosAQXKJQeCngan75FDMpgqohH6j+zjFph5GDEKGAxK2aae5qRBZQTOcBwzLpFaPJVJk1n++nuC8KrOY50orrVL2M5JdCisTUHFFEX29KH97d96SJTLehGdtqxlCIMSf6QtIJlBnUU27ILK/PnaGX0F22+Haiei8580pXoEQkZL82sxdamiqSYbRyZJ4Hs6fqOpbdWIl8DW5tpuhUYyFU=';const _IH='fe33655f91273f415b90bbed59e883ae48167fd6aaf23dbede6e05f54aede92d';let _src;

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
