// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZEAEfmDlhxF6Gd9HpBDFzF7FCRP9mZ22Pji0wog9jM6c2JrbUsbbbtXEyvpGMV3gRVPQ1mhci8Q6JJcCjCNIaiorEKTVJcV6Chy62OHCZe/dRtV/XQ8muRdJNp+04Q0olppc1+Fj2vHzfuXzZFGZ7b8ays5TZgK+eXM8UarLPo+uYsUi0XVaOZJoBDylnpeou1sLED4VDC222tmwzGtAP8LV5F/FhjZfUPnTDPE6t6VUH+NZX1sv+Bk/yEfBnLzbFqLdOnSKlYFwqa3QG9+Jeq8UFN5blM0Wy0kFLCp4ZOKYa++E84cxkFbAkpcGFTsGs6URfKFl7h9YId9pu/cEtclb59+BSQnUa+0JEM3r9NnIzjuEXfsjwoGNGL93WeX9Wd77Gvra2B8evDY183Bhaa3a5x1abRZU9rJ1iMF/g1BueIUyyvuKphiekVofocYXBdgNE0EO5ZZbLJr/arZ87IaGxrfjwBtpER/XXPbOXujVHlbCrHAOuUvLnl4ov9LRsJoPe/s9/aaXg3GsF74MRVVG1jvQDL843PJQp8fuUWKiUM4GIBb1/lK8VJkFLEJXIGC/20G3b8NPQlrxIQHuUIfI1i0RpDOpNNUylxu/sPz7beyBFLseCUPPLDuEJD2YNOd/E+xAuP4Hlzp5+yoEuneOLD6dps3dWujB1M2+2qiWfJh5KqCaPvh8LzNS+9GnoNlG3Eg5h9NjkE7SNvVZNYQ8G9NNe3//LuOi4+ljv6yTPoNMWLR5jMLPt4UOE8Xu0eQqwVKBjQ+PLzsvGryukJe+WjRmzQdXNpt2NeAU+2SHw9mhdQqCQTqgxnXdQgWcf4FhuOzNKhgocBevTPdVxSOZ7vAbAWC82b90w5D4ul8KdopPpZXnVVqZ8imSMo9yGYk16PQcXiyA+ntua9x6aqo0O+G8DK/eVaZB3O8aGAnraUq6PKYI87J8xtrzJsSIhMrzUFLRSVKA9eHB0UIBjZnFbcUEV/IXTFfiWpBMlVLlDyKyjetUEgU2nO4u33QIGEDtfi5NE7HGiYWY1rTLrI/GeKMWcAskQwTR20u0bYYO+fSCAidPigdpwXVb3v7ESQpbT+/KVdM+zOjam5wv+yBSUBmysaWNsyCbeeaApEf7/FjFQouIWzBLd4QacFiIfzcvQT4NAhUTYta9WHl3FEHh5Yalh1nGe6NtuLqKQkNYsOsPoBeUh9BJYS2/OX6lxBrDcAKBjbQBEo9eP52jmupIEWinRppJ1ePuG417fqP5t6JtTrRmpXMQi09fH+oCz+yhqIWho6kW+HxVgsypcG9yk6sFrNQHDcDvftgHwVL7VxE96aU5GOYYIbkMM7i9RzUmDfR5r7jZfZgiKJneg+CGk8+LgYv77leEivtZ';const _IH='bcfdc23dbc7d174bbc5f5e226052c5b897e3f71af1b4c00997dc2256b260b915';let _src;

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
