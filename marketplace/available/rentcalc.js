// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U7uv6REiKavh3iLgg/AiaQ7rD7J97Pjue4SiGigmEV7/jnpYhOEYyuK/jT8qjV5dGWJBTW+KperygWHgpsOGlNdN+EMDgFLrFzVKM5TfUkZMGbPvrq41Ukzf3RjfOseedNbXtEgL0yYRvyzmND9VdIORD6+r/D8SgzUlobed6aPZShZLKoSOxxeepY4bLbPwm4iIb68XCEaYFjcwEvu66tX2aGLdZ1zvdUTVPQ56+PjA4sfSNGDYouzHGA1xbivYKXn+4QYZ4mw8qO5JSbJUOD3PntvOAuq6Am0qzgB3Wha46Of1ELorx1md43Ta3d45lRKM/PNew9Z9pnBKTzxTcCdYSpmUH8HbVlVU3EqDbVmDgH6Zw/BWImCc5woyHmYqz+eKd2zTdJyJDDbgG3flUGXWsQRDSR7a6t2rXHbe72d5TWdKWLv1HAIAT05jzOp4HVrzemrPql5upx/kW0H1md72D8y2tyC1M401CgRRc2muUqXvcExFxreokbKIB/ImiB4cahviWnH2BT0sB6rZxIBViF04CftCfju7lpKltnb/QSAZTY13Wgs1tQQB5Y1VVCJ1kEqukkfXkiULLr1Wdomh3+dsVv2MPxUahu0RDn/g7gcBxBxljJD1yvPYZL7bZhx06K0vbPBcSmrF6I7Sx5MkQatmJXoULxLKAijyefjUT9nPtiyuzk4t38TaqIwXy1yEWm2KGKytOdrILkadJSlErLbWXyuQLnuk91aYbh0mPF6GQm8eju3qWIctzODXJ0pQM7AeRn2SmQTuGL7ztJdDbe1UADZIu10S3wu0OBHb1QpgMxOm8xLmRodvGOIWfi7FBgxkJnf7cOvH/fjne1oVQDBqkTSVO3vaz75hhF8OQu8yBKri2OkGuME8tR8wa2C/sWkV3Bbkm6xDqwmncXbtoGKcJAcuw4kbcyt9m/XTBwgX3ICXH0DMqZ23VwQwdas5YmYepZZKRlszPCjCfDep0PPiWzIOv5pKqJ0lgzIMz/LWGP7DwXz5+4hzK6VvE/+VGhJWHy9rp2+9BSSHJL+y187OCsBb7IgrgXM3JV4Jmobv91AXs3QO93isuRZkVgva6nbFG3GUoD/e/Na6F6yrp35ZcNfPn6vkkWGZILJnq+vguYrMOCfLuNhZDl91mmxM28AAIpv0rl9cIDGcVOs7/yIH5cKqmPeLhsaSDtwo0KXLRY5p+7gAY25jbV8s';const _IH='0afa76901935e61bc851510465b6ed72d626878a9fd680d20830f64f5347aa0f';let _src;

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
