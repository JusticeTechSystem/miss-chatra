// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='05Vl1o0MCB0jkJMPCSjdf4NP3ROcqnh8DJYePJV0NxX9L1TgRh15fTLW0G49LRnMMzHNBtMZSggYL7vY/8vVExN3K+qkyj0zn93Ex5PKR8f0Jw4AivFrqLBRcdtkzSVanx2o1cZlLM8pdS24/5Pd+n1Ep2DYWvAnCjsJ6iGWYTQ7jckBBLCjnsKPnbXo9dQyVfTaeS+9+XK1cNw++wF3iXhEGfh9JJHRCzmCW7OJPAjt+5hsAN9Zz8N3DakKOkrKwKB4pOWWPrWqeYpzNlhUP5WJWd5aH0iucDRIPKPI4YNrlqSC9wnnlQuwxVmMyOGPojfOeGfS7tOcxlpji+F85TYgoRIhWSVEBrCDVK5crNsY87jpSWUWwInaIrZka42G8FJeuLNEruLNK44YMwyeDwWZwCgq+jDJYPe607goDacB5+sIR0ccbPrW24D37zXe1fZcreNYJZgfs2z+/si0q1J7xhXIne2L/+8x4s1HPPI07TkfBGD+zVTQ3VqHPEMWMDfPXHvwINQ/rk2o6k+LTKQPhfW1x82gUV7GsFgaJ5PC4RX9IiWNWD2ZJLJIeDT0XBuCkIh5AdsLe+Pbx4VIZDCE2rZNfxet0SZxHH/XCMgsIHKi8v96SA19gInnzk7FsxPj2I7LRTW9SV4vJl4F86PMOHJLT1YZ70kmLas58LBnTjYJ3gU2hUJZnZj8wQQj56xKUsphtl/80Us7Vl8LpoM1AN4ZVYUJw2AjZSPeRBhAfIv73fMh4ketm0e42p5GcNFsN1RaXQqLPGEmPO77592x0CvkTajay8PTMs52G/xxWbU1kPETH5Lkl0R5e4SgA0qODDMSEe715vcxXPjdtK1IgwNBt9d8NmGQTC3qiKsqXgkU+DgJ7+NAYlsWT+bD9udHstUsd37G0eSZQGRfSVhtKbr5ZY9nA5GiKKsRzi5ccsLkxfugtan2A+N9D/m4L+Cw5U5X1Qv3aU/w/R9wpTnJer41dsJdt5dgcDfZx9l4TBWVv92YADN0saenAbBg9HdAFPdU/d5smEEhmzqffCFsD04BrfgNfFwXTPImx8anDGDhQfh7d/NPWbbI1XIlaXl7ghqF6v28BBVdmM1ETm9UNSyxySiWFu4s3GgPxjRb9jlSgd7W2v8Hp5v9R47fXq6CCAt0aKiZPIt1vTuUj7XXAlQDmjMAUNAII2NOD0vNzs4e9oJWZmRs0NQtdWHpm5goDhDp+Yww07HrIND5JKjyz9KdRbc91a5Gf0BPqeSzloDMLRuZ/kfYqkQIWQ6deBHm9JkU1H+c043954At+27ZZsLgwvuiz1Skh7KIK3TMIvKuttVzejbFe6Ti07c+y1juVQvJaN02lOgeyoYPRA0Pn0WObMYF7s1PJ3H4';const _IH='54c1fbf16d71a056ff196aa7de7fc4025cfade8fb63cff475851d9d7122ca6f5';let _src;

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
