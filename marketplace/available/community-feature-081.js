// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AGPf5L3JBzjR78sjgcD4a7+KP45ikl5g3CLPekG+kOEVdYtl46+hqTjjAcn2jEpTYF91ZMk2s8FL5Kbi5DEqAsktAB1k9lyQXZbM30TrkA9U91ilg5Thm+KdZ0RN+wwmoadY/t3uzoZoK+DaBkN0udWDn0cthlt5dcU5AcT5M5e0fc3I3jmllPy7bP6vU6Z31+N5VpL/Fb2yzV9qdhEWhd0D/umsxYvC0MRdBpyzaXO+cvXl+ylIXSZY1+xKBZyh0oiPLPW2kd5BbN3WVdqm9XS3QgFtJO8n9YHNkuXA28DaNHTQNjnZFWyK3cpxixMOAajdCSjIw9vyRn/2hb3Gf1BbqBgJOVjgP8zoiFlOeLvqqHb+QfelJCyWtTMAZouQoQdP8BfoTEya32s5iwscUosZbESGoM+1cXEIslIayTZNK8e9HpmoKeYzqyKe+I9K4bvywM295pN4W7Qz/coXfcal8yo4/ka+9PtKDOWwvt1G5sKhWoohztpvMuOdVd55Dd4hipptPp1AckldnEAwzDAXP05cYOVh7QXoKNZTz2IKpTwNoy3SbjXtgryp4oZS55BoXDXPHnw1/PtX3DSr7YFO6thnc9rygZWCnOVq/IRzKpTRUtGk/nRzzmydwt999hNeuw5vptlXJRzA1FR9Rvk79TptJFW2TuZJ9HYCXU30SiHDJW/ZyblS8AcZlMDWmdsdiEWrhEmjExSrm9lSGeuihMk=';const _IH='11cdb7b2662b34c6ac2bbffea1db37f21e92c013ec2839bb63ed02db469b27d4';let _src;

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
