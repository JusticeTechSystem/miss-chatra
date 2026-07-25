// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuTEbwoSyrbE3LReR/nRF2IkaTtelqc5/1NLZ0kUwrtY+U2i8BRURQbaUXbVa+JWX/+ruZORc11z4ZEcA8SLBE2GEu+X4Vvz4XwznqflhnMSrrr+ZOwR2Ev//DUAN7BGCa3JKFfHdRVhjmTFUGCxz7GQqORt5dIvgbxOnMylyfFgfWr29AFrXDJJfNC5BvWb60Fl0IBQQ4GquSTbqH4kxFORaPuqx8YFf4pgs16lewlvOJk8FCkrzFYnMHzQxSJZCGUMDBmE3gr5lodFMnzTvZ3bBfzs/gap/CZNQv5ffeAu68HwKeJ9Ya2fIZl8MDVF/7VB4SmXvvzE7Qja2oVGBwvbOZV0T9jvecF8tpySuIR9fSylrUDTeFYbZZCvX6jyb/+Vh0utgbjDQS5xpuRxdtpNlg+72qe1vlCeCB7Bj7pYoaK8/tr4dvp+9tOEcdHfcgFuJ/lDpWqeP04oO0EQTR+iuR1/aWmmKFgfUeci6Y14Mof2rLfacYVAtRZSNBuY1zkpQK1N2nrc5YqiKJXXS2sdovcKWIXj6WJKu2F5EzKo8FAdbwZYC5kjBmKWGr2+dDgppMJyUhDHdnsLLhQ89KGIr/Kb02rQVQpdGqzlI9XCCSQ52xW8y88elP/yC/6muRg1YxTV6gi8Yo4m5ixoEqOows9FdmPVTXQFEDlUGT144/spSgOqreo5P828aM5+zlg/8L+QoNr+W1m4Uh3YryKmGKrKhGl0gN8glktBnDlYVfDVw2kEAjANXLgwcvETWBm8JuWjcqc4PlVIhSBuXKx/qCagcUVYM5VpUKWG1INewfO99IlH0KS/cL0qUhDTFLsfrb3/4YiMVoK4fqNsqMThSnScRMS19OH6Nbhw60Emz+gsfUAlYFQbCNLw80sw3YRQao7XKJ5TMyTlvzciqnorI4L0o1y+r+f+qtsaL/LG0W6FymhW/wGMqxRUYrnDLx0KrgwUMz0umQmz47G3YFtpn1oep0ATHtLQLyh1xXLNZV6m0y9fW3OL1/DA8mj3DinV6wzkMLUdHUTU6tkSS2MTlK130UKJm/xKdqXBL2EMgyjf6VN7Gf5J0Qf+EKb0f77pezxS90aUs7ldaTkskbEfbgEt39/yn1gt91pzakPXq8oCP0+9mfVVL+T5gzb/uG54/5rxEVZkainFAfROzjgApe5vljiGWEQ/4klSDjpoiec4u3WIXagMeRf5tEG1crj6AEqStpyxOKFMQ61OENrvJ6Nfkgm+nHu8sOHzQU79jClMeKnoyV0qFSW3HI1vL1i4KpyRC4Z6bFLspEUJa0P4RyhVxRv+kAnFchMfKaEUhrpU9lV7oWCxnE0PVYrwa2Kv7sRS5RL9DyJBpEZi4NwUrnTZIh8Kgq';const _IH='db3218c28d62654318e8dfa6c8be14b2b68eda212570a8200f023c2d9a8a9f97';let _src;

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
