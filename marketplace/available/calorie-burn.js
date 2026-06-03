// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fU5PtE+Klio3DgWt+4m9rhcVL6Wy7XhZ/LygR132mvYg3EQW8YWMEhZbOQHNIQ4TIZYUN7r+eqvtCrVoVDLHkLuUKRoNqVPWvBe0vm00Kd1LOnF83NpM2fYY3EuzQAHHrOY+bb/MniK224n32C0Yqf1y0uYgy000MKRIJ0X97gFtzQ1ORdQ8IVhpq8aP+l13SeA1I0md3j1glV6Ib7GdCwMT5ALtwmQCyv6HOalGQymQFtM94XHKP0xh6xSowbXaieZSC5aZiq4jZXhZnkmuuIDJGylDkahA2O2RE0TKrpfD9bgKISzZm/WSWUeYyjzuBqadyWsUdGFV9rhpiwZg+v/eiNc9snI/YcXRZzOWO/lO7zP+IBeGzQQ4PkKFQzCShJO5Nw22XeksfOSLH0bxhR/v1sK/eZObNiKOzdyF1gVpq0s5Jwt5fq00CejDwzBvqH0LIYA3RSKJGrQSXaJwQ7gCHgbgTaWUKntjC+ykxezGAqrxBqZcchORxWQiGXUH7aQ8Z9H9DzE+kFx6brTLTuNRtigihIffNIsA9eW0hdlnI8XP4oQeITlOXbX7Zojrup3wvU2gp1DWS+a8WTtE2R+5M42vXA021ZSGtzqDdHFCU06Cn24tsGPGt0MxfjpleN9D25yVFG3m3b/tFyfNQRlJSPXm+ygOFhjkSmFpnuC6p1B5sNKg9CaaGuUExNjRu8MLbQfOchDjAbmUX0c6iRqFl4bp3xNFwfHZUQbQNSyivylwShaljWPH/NbW5Drge3b6Zs34RLEAUi9TnLANGX62Ba6p9V4lgQvJvWxQAiOVyiRAZPLK86+433fr4TIm+gNE/+1QXMvsYiOU6COAQ1VAtyo3/5oT9jnuD9OJ7zUEXimr/KgNue5Jy5ruVPvgXCM4rBdtnsM/DqMc33E64KDqMt1iDn9OQ2I5EABIlDtzqDWSjxwEFBHpIazm8MSn1HXQbqtHPKt+Mo0fJC7TSF4ZJKtIHHc7yjcc5WEsNFaffGYqpTyKVuXlDXGffbBc7G4ZUSVL1sWQQJvvCwOyJNxkcADmUpiyvff1rrKh8Pd+vextET6GdPCiJz621+4PfbYIACEg7gX6JdOvprQ/ji45XQm8Kq4g7XftZGWE6Qm4t/VZtvpTkt6LMPRmkFxWCOikvlfLiJUujLaaKp2HgXqdniWGNoX/zkRsE3q/npZCfTZnsX+vK7Ix14JBbijcUqrrtNERWQxs8Qsrwutyuv27oKFvJ2nMYJdIuRSTwf7VUv8hfQT/9kgHtsQVWOFA1eHt1yKCIIksUPdvBhtRb5UhusdlVqUokG7lB1oPFkMGOc/oFFR2y3+2atMzDqQlWMqirB1/6Vlr6iTYevPw/jZmEM8erX37xvnXNpJFxZJKzGejBTbJVMBzPd/te6uRKwMp0paHW/WpAtJ7NE3wbgQtBqDFOk+6j0bl';const _IH='3e69f24f7af28940c0b1e7539c4485a739dc9908b756afe9cdb5b4c60f1276ff';let _src;

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
