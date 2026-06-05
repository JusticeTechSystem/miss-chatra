// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AmVMfumAmx0b6r2kS5VI4eAfpRASGdvn2IQhSYtr7A1Ltu/vm9qAdf4xXZGqNJi9iKm5KieBlgcQ+ydwTNL/tQhEi0RXLspw/Qa5T0Bq0ke6Ov8XkUO0mAO/nothKlo3xqB7oJ9RsvSnVIl/5LYBPQ1hpjmjlEAjjzSKxlHBcnmZ9mLjRnJ5KuuG7Fm0Xx65s2eBvHT/eY6NmyHbEH15QqCLf+Hv3sn1JfUyyQB3/DG9Diaqy+zs2KVvD4XzxGLNPio2tWOH8hUfhYOCg6CgE/flCD+ERHHJemGmiIHJ84QJ9rqGewg4bXNA83KLor4Nqwhv2qL2QIip1PJ2IoPeZoRMpPaW32oElrcSDvQnB3CzOw07wWMtAA8Cvmvgw4Rgs+kj1QoE+Ozxwq9NHTsiC+aRquyKxLqNSwzQKWp9Efghu44BgyIrakPKYXG1Xq9vezoLOWmtbuY37E3mRCt6WxmIOFoHzmecjUFKwpGLP4Ish4po6RffNs6xOeWnCHA0nmD65vOlbfrj3uxZNjjYMSlBTYzMSkiQYQ3pLDlakkdWrrfMxDGEQa2DI0nUKGExazQtjzWH9utNYyJfmTHadixxKReH/rJ1DmPw5wwiAKyquSED7KTnLJ7Wa/RucpKyFSDM6WYepSA7gAvqQiuAuirBR/VbHo+uQ96fXmGRJZY17APMLEb8Zon790Rtl3cMpPLb06RfNHA0C3igdKeMmhLZ+V2TX9Va1UtVbrxoRA==';const _IH='6d0793ae94c23e97cce73fce8c77733416d93616f47cdf020ce1d3e04e58d384';let _src;

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
