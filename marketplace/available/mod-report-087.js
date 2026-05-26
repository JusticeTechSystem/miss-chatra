// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZvQtNBCqvwZXD6nuYVgpDGjWrPCVVLmKhk24yUavUxD7bPvG/wl7aJaSJvyAq9wIm3TyXvBqWO5zJyweuRcPJrxPbHss2Laty6wEJUM6YMaduC77Xp1S9fqVw6zXjF9MWETRDchZdsvTNdI+BqKxACiTpJjWQ/eQcuFnTk+0F5md5Tqwx7TZjH4uEznDcyVvYgY1uyI2Ndtw+4McbsAsIu8mgBYMS1fKpfE99eQWv5mWvl6zTDw87YfeMe22yP6b2ZgWUqoRm5sD0WGnOtkewbJBxjhygOE13BXmYxfHxacKGz/3YgORjEEzwiT3/hytZ9LuNa12bv++v4yPw7qBOh0I1Mi345kykVQtuoklbaq73Db6ZNcXEWBd3N1yWeeL097Jxhbs+mkj6jXsTDlSVjpRjVVVrZht+Wbq4sk/CY8418ZyTZQRJag0pMZRr10xYYiqTx0eIveCdun4Z5ldMoqrqTqdhhfD6CoUyXY1RqWIhb7axHF8n7NxuSK66skxq3B1TS22J2a4Unbkt9g2zQemGuUvm/Y9arneGvVA+szucC9aHERjWUAuIg6+zzdJYBCu75+mVlA75pfSqlVKdV9EMlb50H07kHyxRQonYgReJHW66k0njWa2p90El09QfYBtyBNkrvU2C11hIDihtpyqt+4Qvfx2BghorpAoc3hBIFBaLtcUzCYTkaoA+RRu41JbCeix41TedPxTqofT3zBE3eEiicAd3KKcek8KupVVt8Q+ONVi13nYsAOOUQRJo3MlCiDzF9V3PMx9Bk7xm47+RYjoHSIxLdhUYhpZgTXgPO0NJUNon0383/bTENQMvrbSIfGsHo+zcFZyMWaboztOb0xonCviComJ+jO1dHAGsXqSyAkCeMZ/DzHBcOPyqyYzlJjDYbkccIC4Ddj54iMk+VoSK02mBcX6H7s+qS0r7TYgXYmlBUZ+d6VNiWLE4xpuo3jlEMvONOzg5J0QqL/tIGtGeRXgzLgyPv2NFSgvjEMHCwHATIidCONw9sdrqdOfRLnwNUjX6E+vq+CnAwiMRLdxZDHi5w2SssthpokHQ/suz9J+T1HyY6BR50653WOoEY7TjgWbo5rCUKlr7GzGi6GCT24PKcPHa49fOgexo3DmghpPT5fEjUS0xB77L701fY/Ly5uZ/OBBylMDOCCoiTyu3B8vMHKBPVVbf3XTaQlrKzmJ2UPOHMAN9rk9wff0NoeQ2fen3SL91lHU334ucLpVWDQ8vOc2pXeyhqyd0KuoUOMAHUm0cj21BgAMyWfs5QMJWYrgbPQfm16mPtTDyShMjFQ6W7hZTOsrShks2xpgbLtezegixfb1o6y+DU4D8q2AxIKNwEXm+RlIFSTTbjwzsEvONccS77S3evNWtA=';const _IH='e9abfe050ae123b2b0717d517aa06c99ba2d559968255e06f465c2e555d1920f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
