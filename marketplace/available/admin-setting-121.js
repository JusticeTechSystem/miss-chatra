// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GpxAYqrjv/kNsxtsGAyAz/kvJ5tQVmapEZ140Vv80aIq+Ok+rOwodCQogom677ZqaIBnMGtTShcQ3336s++MTrS49s9uqG8nlQYmK5EGfl4c+DfEBfZwNXRRVRuAKcy1eidFHdeN+91NITsEMRv/ZWyQJsxTx0gGkwUN5h1R9fw/jt+t7Z+CS5jAZO1hR9JK4IYwVfZijXaG+a7j9wI8rwMpiH1K7oY25hVE9nv11z5tt1CcFab3eLpC9+hDB1hXdWsa4MwGfFxJWQr8T/+ovCKl8UPOGSRSptsPaFqI72sG+saFQn72oy4hAWg1VIpTifxYgMN+PMzBR1q6DgzDTeIgFoKRZ1Sv6GTATrohDSxK2TLx9RWL5PCcDJ5qY+eJsytcj8DtF5EfmH3xp1aU80sJLA/Zoon1nEQKLfI94NXYEfDRUa9kGAtUFFUfM1TCcFhlY12evql+7SgvdcZVebNKm+/kYJJcqkMconaiIZDp0XvuL4Z4K4GFICFZN3KvbQlIDWiqiACqKQ02PXeSISU6x4F+KH5IsHgL1RV8NftpbmdMNLKsfpTK2fegP0p3CRKij9KHJPiyDUsByhaRu4Zssr1ysxY1kecrjAYefYVRb2IxXdQa+Gkf/tFL828WXib7jpzt4kTk+a9BuXe6cU15csDQfmTrZUmZp6seudkTM+6af/KUzy4KX2hRlZevAlxUieTp1BsVedFH0MAowVhM4WmQR2pim8il18OrZuBZ/25QYLX4hGIqqsZLoa9GoNOagU0iJ2Q2WlyhuSFUVO/4vlglDQ/4uNjgJ6/bA2l1m5GvkARKs7sKHTmqcI7dEVRl8eqn5pd4xmh59HCg+4en2oz3jrQyBjaWoQVvVj0OTNFF+xW8QGIpvpvYfqVi9JetJ5zYpsPPoXRVuP6aGvIjRsTIh/QrBKlyVAS/vvlQaEH09/LDPK4S1id5HPm1nGpEIxVFKxSBLl/m83y0Ar6q0v0hcNB9AbrHtxP4GDcfrfIb0nqTNckRommHY85UY49zQ93E1+M=';const _IH='d83b6b28eceab153c0490ce475136fe96e2b1ecb3b4058fe4c11117a220ffc27';let _src;

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
