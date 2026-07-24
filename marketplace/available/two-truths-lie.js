// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgANbXmE1+DEEt13Z+7yUrWpI/e7JBGYM+8Cs9fdP19AnrtjkiZ0uEkkW5b1VC5Gx8s/gDhxZFHFkBAt1CAeKICP8/DucBk9afBZxL+Ks2rJsI6fCZ8PEtllyKYWZA0xgVA68/r7MxKuQ7+vNOflxJ9ZrYEaEbkb9Q4dDBpM45Pvm77tH0zjzrVfZ5P8pNvhAUO2a7EglvsN6Q4MT3sfTjLUY/RF6u42OtdlCgZ5wXjbD0p6Hh2Pq5P8zqeyc1ck857nZ++o8TgbVBesBXRovDp2yrrqFb5nKgsuzu5gd7aaFqmIXSHO6KWalqBsmmofTYty/dl7Wv9kkDkQcy4pvIvvL0tXiSRVLeKQRZYk9K9u7Doykw7zYXcU3ihqUfDZ6bjkUuC0jp5esn8Pq1lihnKAsG/4FYkiJrDlVWR9mTb9ZBRD01htOBvY6+BW3IyjW++suxNuXXiNkjoHlqad9Z+MYVrDG8WqlYBsuXvuDCd0Nb15Jej9rmwZXyAyi230fIBMAIDQmFM9D5jf5Q2FGBucEb12sZ7BOGqqtI+zLEi2emQmaQQxlCN4D2g9Y7l5zW9/IPCGeGaVNSWubj19yXY8D5dlLCXEoMFKsqlPf3tZgij1yHi3JvymESbHQI1K3qPNE4tgK6UGsxsWF1wNOCe+JOzrpn4b4STBwgLpcCpTIKVGKTfqmjuEagSXPoNJy9HNpYu/65bHTswl1I9+TAIRyflg71MfkZVBsWgEHBmgioHdtOZ4vxI3yXCjcTp0VLTV4JhneoqXg/OOT9XZJFonpDcX6rr+2dNaVp3+3CeLXex+VAFOYLmYz34AqZF1oQZnEpHZnlYYGYyFpwARdG6iDiVktTDFLUH1lXS+Z/afxI1b2Nf9pe5pWbfAl4bbmi6Qid5mJ96qJ+xnrO03GfkebSmssVX7XwhOf0bR3GNoBtqUkJa1dKOTJaI71h2u01llE3d4RcAXasOxpKj6ghH/I2y6LJGCpKnQA5S7ez0JzcMKHzloJjNAqTWWPWTcziAhy4XCZv+pVhm9kWhrkpL1/ZTJsYP0AuNWm5PnTMFABSdrbs0VP33dwiZtRqzDeDXCXzbzlH4EWhm7YPjOy4AAI42Xe/AsGEoDbyamH1k3xex1kEIcyGB4NTI3NSGxot7vkWGiqEpoEHU4f3rDQHCdZmhANyS6OV/GUIFRNxOpbEe2FyHcUMMZVGccZ+RdFZ1lTF/BrZdOs8/boLiI9KJ7CApjz2i2e+5ThQtJyIWpiNJfZOxwfTNV8K8S8jjuhSypTL2799rVwiNmejR/Bfr0VAZEIEYdlbKy5iJImRdkySVqqWvTyg40KBeYq39cGWzCRbv0W6AKrEPWmbT5NeVXE1zhLwYKwdJMRkUA93IIHylm6IahZlE6ywiD7B/7vGLLHBt3lJC7s/bqCGcZeTht6AmECwEYzRsDFti7Wqkul2vmCfPogEyuw4NAm3rQUR2THo';const _IH='3dc355120ad091f1aff4a508f1ef05c9db6ef9ee1302fc5b0054e54eb2fca6e8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
