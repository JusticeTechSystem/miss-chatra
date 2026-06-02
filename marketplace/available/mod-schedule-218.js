// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='suMNCKA2Jx0KISVWKx3+zraBZHNC+1cqVo1a3X/qRqc+TtBGs+nMKJoVH9cp/1p9mGNZplXrlPRe9EUsVsAbDPQGMgRQafx032gt9f6GIIQFJr/KiPKF/C8RlKaUEDP3t6oOMMjErcXmSAPnkS5dMwwpRmeuWYNvc9jpjMZotnU3VzB8v7jDXn07pQXsVk6ipu9a/yNoip/7qJ3v8+EyLZ5CDJKSHOW+dEVnq6UwU0dHJwdXozBew0s6ImPNCrKqtyXHFCnPRBq9fvY92RaPt8nKC0+0Ezh0XTgcUG7RjtOv1CO8u81jImoUNwSvZTZ5pKNdmWoKGNZhpaIHy/gFyjUORKN5r4pjfPkZGRa9K7rTwLYjxETzpKmaTXPiq7i8BVWwSyIzzfkDs/m+ZU5R9/ekcnq/7XYNT6kC6wRMThG9XGZeNgYvKKAVz5Z77V4J+jZ3hcmBIyaV0MgJ1H3196Fvf4ZXR8Zowdsf+qzBYMIeipKtU0mudHEeA/+7yf0baM36RoAnT96g9Q8XEN2JT3jalL5E1JFsrCe7IVTmLCHACUY4iT5i82rqxVPnru769I8cRkYfC2ot94+Ss93wCfTzXzYIDC7MUZDCxbYfadnYRcUUihMJ4ZiTdeNeNZXNlCJTmzpp02BWLpVgP4Ut0A61QIniz1e6YUvrNb8ZPlgnJxNbbLqrEzUyHQo2N6yAHgbj1/Zh/pIfeQ+pXYy3zZnxqPBbYW/67aFOYMWllgXdJHlL2BvmS2nzVZfhSbPPmvx+SXy4GrWct6IAfeQ26KGVmEnjz/8AaTRe6jkEOl5UD+e2JVSwO+UCrdK3WBWh9YE51vuDcrMp/mpYsFZQ3GkURy1Ooyk2t/Ty7eHW8sA37NpH4Oz8Sr8OARWH+z7GHSoTl+cEhDBkyo8UFv9+xeZSLNJBRS0rPQGgw8QBLkeGxNyHZW1kw4f+BdQ48+aIVRyk/7c46dMz6RSSTwzCPvRf7EZICgmDEsjPzBpEH8WvyuuTOK5NW2tnUnXjCSCfafDr7EqtM1xDtyG0xFgEZBZle7cFnBODJoir4wNCVJ4fqPwDr6pIouF+b8gvDC6I6uFNIeT1J8Nm65zDzCQSoM1Pqgmujicxg5s8xb+eyxyeszhc2pNMGZrJBWPE32R2ihAStZUVatnPD53gTP2iT8Y1PzwIN05zG4NHygRRcNYq5as/P37+JM+SgMh7h752OA73Y8YOMnp/I8ARZNlUN45uti8RBMrW/fB1N3egmZCOL/Aug+nrGeHlQHPlx6KjfB9ucKqULoxnz1V9Qbi0jPCzIgfkUsVq+hOvsIQ63nuv3Gysw9mIPRM+M/dcSoci6kt9Y7UxhoBqAXSyjpXfTQj0CiK0lhVVoCkgz3j1xxq3m1J1SD+zRPCg93DUg3f+zxPnAuIN44wrxiGk';const _IH='033aee01b031fa44bad4893e962078e91c017a177495e7a08107bc82d246a92e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
