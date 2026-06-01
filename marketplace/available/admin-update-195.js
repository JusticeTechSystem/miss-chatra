// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6xctxd8EmoKUpFXUbKa4oZWEZfYzcVUynfjIljlbSa0BXBMcoc0PMGgApLWFx747BiclAyipPtlVJgPPhTBZkLesesUnEcgk4+yLv5YiHDeXo1Y28zoErWqpmi4h/A6DzuQRjQZep8ytYBjXGyvEOWA+h0N7HbkR19DMd2E/pcL6IkdhX/sc1ib1t/iNwDHZ6/toi/LDLgc0txMwBX6ZCyOkC+DM0C48VgpEOmGVj5Z6BZJ8vz2BOBF7uqUslZISg+gIFX27+TSM8VV/UtY41GlcPKapr1bn68EABAiatt3MZcRo90iD5rUpHnDSEiMP49SFkxTuQL3Ioz/aOFFZuK1s9+5zZut1nu0D2xpOYf/oSpzz0MRX5iFBBt/o457tl/4RC2UZiL8KknwzDevRiJoPcT3jeJtrh0AfwzIhMJd4CcJpU/dLQU3Lnr3Q9uTlXvo5W44Xexr9+6DzfVu+XehVbYzEFK8AWCkBVsqSp17Od/6DoeM4rqO2tQOtfN5vmqNmCOYYC9YAxJIZmmw54MLFqwIKDTvSHwvszuXUPBE7CJU0q3QRWgSH8Q6xkSOXaFxzRT9AAZCsIjuY2kSCdm0jnJcl+1RlAlvUFoNwmZ+XMbanBYXtEjjuz/7RqlG7wE1Oz4dCPe0m0Vfh9NAsVHBim4KjtGk36t9Gv+mmtUxx3Phd7vUVR1ugUgD0l2YDc1WeEg80GJRaWPgfiso/gFTqEHmKcClr+b+0MfFNCnlBA7QXYR4GqlRN17IWNnXSTI//yJ7Ma5+wZmqZyC7CwToKH/swzHG1RkAJO7Po7r9nqbvY0GgVtUVPbnMUdMuPZHUKNYwX8xfQJPH3cE8nhPLTURLFvFWZLggF1pCe4H1L43NSl4qXsnJIldQLAaiJBj/JWF+u9Ci0wJ5u9xHPt40vtUu/lXHRqL+0gBHWzNdaFuOQSbVou5jdfTuFYUh3tIoRFtTcy8PyphhWp7srpw9mpbPIGbIqALFcKPYNFKlHOGHZaorO2RE+YgFlrUkB54=';const _IH='2db5863837bb35945ad8fca5961907226e4609354acb318f943f64f4699211b5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
