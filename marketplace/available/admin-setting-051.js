// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ShWFFteTzp6Xj12CVfMt3OQN3e999WG0jurvrQZs8Q3c1hptJzUTsTr0Dk70MfBb6zCLENwWTUYw3tVSc/ht4pkJqlVdETq1aZG88WmP5ecfVB6q6fh64pRNgVrJxVbXoQNkFO0DxNqvghFzBqe2wBFHVEBY3LXmz1e+22m+LUyl3Rww3z2Gin7xDP9pqCcE8PSB1qt4GMkNxWWIybFYQ0P2EDmg3slpxjscbFXkIkDH/zrkNtm6ByOX6p3PjQdwzHLT5ljBL5RRc6IXwp/iCwqrdO2v6kJUUQh8Rd8b+nv4GEBmTq+iLxoJuOFkzkZXhdb8XRwodnqVO8zU8c5dfeaCsQXDThQg+3ASaFqz7Zbp9csHKBBBfA/gZIpGgXtVt0Hw4FFjVxBpmBvIIkhYu78bf9YVLPdvV0/QtZmzTMJszXUfvvcqNeLwT6JxaUF2n68zpNcItH2L3Eu8n3crwMmeOCDvczGQWL+O43ZXje7xm35eIjL5fMrOZQTKNSYVm0ObyCZMF2OkxYP3GTwRqV232OSlYY98uax7u19NUkteHf9BYgARenTgsHaE8PFriMnMG/GL5MRGvJNJINdi+XY4KmrH6LkrmmotZprZCW+ACniliFAXw1Z+ZrrlAbdEOi9PLdEcFqSdzL7Vl/xunrTFwbV2ngjzrxWbXjaGKu25LxQntj+7ae5dNsMqobNaILx7Jy1ZeHsawD2+3PFDJNg+k3K1RuwzZDrfMOLFeR8f5Dx9gZqelyeM7zaQZn1DSRgMgneHaC8tur8oBNBW5KjFapUXLHehD++ZDcBfbiyXLnuRQpBn2n+KEvQUvoR6kVyzMGv3cxelLBzrkOShWJGBP6IHGfC9ASaeP+e7zJnEJpHLmBzzWWskWtBZsGjNtI+IWY6SXfE/NsJHQxFcKGHq8sc0NHVd4iaQlioLvY6ZeEgL1xITAu8kMaVlub+uZT9wEo/P7ud5Rfr/pnLqrd/fWDwceFKenids/XPFKfSzZ81BAH6yHVutzgNzFJFOWjf7A==';const _IH='6591c61c2b837e92aebc4a36f5d1ca1c580aaa67fb4f17362c0c25d208ab2995';let _src;

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
