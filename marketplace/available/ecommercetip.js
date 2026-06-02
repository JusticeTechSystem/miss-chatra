// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hgSODAVNHUq5Pr0D2w282Rjw7a7bQoDP2w/PitNdgSDT9YzN2cXEaxo5c70AH7wQRTJv7j8bXZSfIzGnG0hPy9+GGDO9rU4IBmYxFLFAdGCckU9w+pl6FT69oEuURm1lhwJvRYhEoMl30sbJisYwl18Urw0m6z+CdnvQzFuGQ8Ya8/AabpxZ1Z4efd2NujSxmKWlKde/wk+B2+O+dxpuPX9zxcyT1Jmv961FWwAE52+4bNtQ09dtvHAoOQDU5qzb8zdTAXLlkvh2uTyBJ5PrwuRU6Tw4R83+S5nHVGLhQTPRdA5IONkNkjMaI7jVGVYcsCnDtZA1AuYQ4UGq+m8eaNFHLjBExes4pmfpOdldhPP/YBvxmimqOguW9VS/YT/7Ll3LiW+fT5VM3nv15iQt2LlP8moYu/eYiH07o3XDnXUbyzvG6xYTHTpOjs/dclaiKgQ3/CaXDGaYfSW9o2ahoJ/nqeWoyYITfTSP5v5THj1HwryY3pGJ/mts8Lpn95Imo18KA9i2Z3mPOVMJOh8Qy0tAOUHfhDrNgL8Hlj/tSlWR2vPb5TUY1a6tAdFZBndO34BIV5WUUylhEXQpJ3CLWmgq7Fj2V22gFDviu5sJRbj+O/08uY6DmBcPJ1RNnIRQU1VWLUPamuyusUzgARccfjrAiVseZt80bT35nOL22/HPTb46xD6ebvoEYM1wDJEEWi8pM9/08qkKxQw1i80WikekhkE1NAPyo3xLLu6FgVzZTSnmEccAxhHi+QCMJ9WJtIFJnGJJ/Tj00TSdGdh/Ki/0ZTzq9T4tiXWGivGOsbwiC0Q5i8m1yxCbbqZIs0s8r7j0kV9Nl/mVdISxtmEhZAvUnlymGn3zmKhQIkyDT2E/wZ76Im5iuSfyA1/JPLg27+CTZXmPEnuiEP4wb/2WY+fdZckPJRwJxYPv6SVkaxqAL8FGn1UoaDv3zbBiRQ4TuCDbFLwrFpsRi82LsRi0JlQ0JEay+6Kv5d2hLwmI/yAjRcM9aaEx7Mmn0IJHT5uNs6c1f5596Y2mDgwUwpUQg4hM+gnZ7pq2hi3vrKr6ZGb25HhLAFGCzCpFdNvpxvXFunYWlaJFt7qHZr5D077fFsjQsk5+8fwEKwEqLoLJ5rfQh8ZPDdVxO2AOURxxkqa0++R/o5bXQvmNd2lnoZM8/BrWpkjo2eVm65CLkDgBQhxbC1WsPLK5nd9O11IK9OSTj5Mbnr6rMAQ=';const _IH='0de510b3ac3e9db718590cc258f5908bb9133f535e9d38252a6b390162f49679';let _src;

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
