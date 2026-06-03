// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s0hm1S4rUctL3pVgqH6ru2JB+DJC4LXEgRJT3ez6ZKjc9gpMAtyuju8U1k3H7bzt6OCcacY226oQK5X2J0vWjAq61Z41mpCUucbkC4917cUijNTXwJG76UDWwN2Vvu0rDe5/5f1j04NTWApAIw8FVO73q2HwtrDmWTu5PQR2F2ZBRe/60xzeoNlLpo4RCWeZrqKmJYM6Er+lFLHB4ZiWT43vhMwWJANnQMpWAhICVFHsTm5xKPZQzeD64UvX61gm1wCqJn4Llm/vniBbfJRY0z9bPkJLGsPdUJlLPa8Fu4GwhfBQeWJ+PigWuZ3GxK+GOViqU+HFzDDLVvieL+ihetdqMbZD+iM7GcyYTNMnaq2KPKDTBaJLxxrsKIVbdxKgEJrIvjQK87znmeMaACPhWl/1+zDlJCHURQvC9w1zWpXuUFxNOVbtts6uJExGuAjHh8tcuq20WpyhavgsiI/dRukAWxorVRwNOeiOztej7JTbSpw3L6c8dQVQXBw/K7mSt+siCspyEpcV+WACRCiOz2zbU6nZwJuWVBUfYAbwa8RYq72ZsG0tWRm2m8hqmp5Xg/8Xq/5bALeb0RCbMlXFoioKFr4ULBRV69rg0KqRrYN+4QPFUR5M9J4cI0GOyDIob+tOkAWi3TrSKlOYsoVEG5sRQ9YXySirL7Pu0JXkFZY5mBE3/ULtxFBcNs91+mLuG7HnfIPHk0O/XqzZi1A4jmsERq1yyhd9p/SGjGXDOwhTtvA2nW+kQEQuA7Ohuhk3tXpP1U5TM/pNMtQMIHtEAA/XeWXouie3dPpwF7tuiz6pbvtePWioKjoOyP1puBGXkDeNHtB8jwbVIwEZJglmNDQ8IAGB2zDNtFM7BnfaYhgb3DPIdPNIspNfVPmCUm83APTvH9iZHRby/sOC2DXxgzMZ4NBodL/qe8VGGP83c5fQbyIF170PH8vNBSf5lQ6NK2tauYjuujvbFU8xzbRsnciHM3aAIK5SPnAhnzbAiEjpGJ5EllPDZ2w=';const _IH='310f5d189b8f371cfbfcdac026bc45a7f51f32efa72b9ed311a8b346d7aa541b';let _src;

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
