// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NjXQB/3X3pD/iUgrCPoESJrADwJ+xcD3g8bWo3mP1FOOGDtojQsVdKGUctYo8ysTg2f7CMLNDXtukPd1OiP41yK7+M/hPSqX2vaA6KjB1SuhE5NtKTRnasKWjFakt3pOWvdYFFWKzGHXdNr6T0rJetCkhTeO+1EZrKxERseDy5yH6QznOXqc8yMo3M0km3CjE60wFLZHzAlY5M/ijW9hmKD9ccp2AUy/eK4UhaxDXDP9ztLbLw9b/ywaDGIgdB2eKUqq6LKP3l3WgdQiDkBavyPKpQaHAe3RJaXB5cmF1Aawl8gbXjdtLoy+KgloCOv/CRD0LjUX1TGeUbtYCHM4EnMEcECx3m9xeRqnga0nlQmduoVaSGEeOR4hCc5/oOI5rTAq30lZ769EpCklK8/VpoURqHbxr6Gymned8c8xzDVsEpAgDBvTQvnEUG8uD95Ly5slN5o1C2BX+tahMYbiKYrc6VQkR3QycxEiJPXgtcD5spmfdQrgqzLnmX54DBm11uXCJTcp1ybgm91ZZV35m/qlyF1g+7ZGtPgFoaTbGWGLzsg5QPQQWvDdM8jww7GYnPia2hcGEdFdgnX6v5oAKrJOwyyUJTd42N1RCk+wXIxhTpAKKtguIfC131RwXuWhGAIs6hMjGnxTvXpY/IXUCXoaMxIMQu1OLPeCAY8QXoX+EtYgbuWT5tfhX86A7SI/xcNdU+0jH3WZ2tfKSnGOH9wqZ0NoKy3u2VAw0ICqWyRUyJeiuvjRTqvgf1c8x3v5dRkXTEesezx/Zfi7hwm6If+3pDEEuZXS56C5gzWUAN69CZy7015VxpEzK/fZL+kkx+ZlwJZk4Q9UcnI8gMZOVBximbTwXjuI8boNa5KBPtHYHMaS4w4QrSXi1zMXzr5/0ZWtt+uu5wNRuo0q4wEI58xTLTM0FRRzS9NFRTYK5tEwbRgkwf9mHYdaCYTIqAVqzcf6fMsMsn05QOR2AjRw408wYador35w6phgnJ/2Iti5aQbBzftRGjNbz8NKxMS8ncpHj1Flx6iy8VXSnWEr9xou5j5kQLhXmHE9Fk5XF93Ij1dm7lZeEkzxjzPifx8/40SJzxsRC+SIb3geX5ds1OZw9m4JT0Z7StZvO/9xTh+EkSog5B3n+dM1nUo8nyyWLrLPvUkZ3qfg3yAVmZAvAidoD7iDzwpoiAr3zRMBlv7K0NbDWUhjjvobSQuK79GbHkxsvrZl7HoKufwaBVdF9pIOwwcws/uE+IPJUAATrqPLFaMUK968g7ob1R580ZL6UM0Www00GM79y/g+3u2i0Jw0WurLunK7v609IkIWd8tYVfVIQN/yXy/JcPpNavGVAI6xI4mvhPAqs0J28fmhEMQimtsondIWL3bOc+hO';const _IH='193c7e8f1190e43bc21cd6b2e16e47610c37a931319cca56a990f29118b68377';let _src;

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
