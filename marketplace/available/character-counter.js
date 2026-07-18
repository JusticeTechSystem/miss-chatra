// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJcucH4NS8QQISwrd1d+32+Xa1yAgKydKDukUQ0n30AIO7Es3KSaaIwOwe33ksKOqrQmcNY4IfHq5/kOpcuUclQCtATOyhp77lWotFgLdeAYFgUG8De2X9Fr6y5VD4hqrFNfqXZltExrI6wtSVGTjOVVAO45t07RDIDXzSaZ3s65VLd3ERPHV6U7rmr3Nz+JZKeA3NVxn4eCx0TJG02vsBQpPBCJsNLuDpLZ9WsCzZPKbVx30ZqnBzEZKP0NxGO8oduHX3YW1aOW8l5s8313s7Lsx4HUthwe2Pe1HFQBjOvA4FtIItxfbSHKm3osQMjXafPQWp83jSz/CyN93CY5wwdv1XxkqfC7K3yslOeNoq0OeUDJKtxyofO/iwvc71KK21mNViHjTHWcKwD54q7x0qSqgXh/Cl090AtGzvHllEYRKr0JPs84GOG6rNb8rxIyHdqiLViigVNZH1X3LyjkETpWO3/wmDYQdVGYsn/xZP1dYlsbllMSxJe2tl2T1pOc2YKWajcfzImyVM9EFk5iQV0koI2q5ZCvUhK9pdomsZ8J0sNfb0JKS7l4blPjS6DVG+Tp7ixuw0g22v8SSyiAcu0zkw5IAPCoFrMOhsM3kVhozYoZ+TvLrD+2FgHI6iV34jw4Cdue25/URf28+u4I5QRk3TGVdjxzNVLs2rdCUH4rKoHI8E9bqv5G0BkDs+DEnCDgKO2ZqGfrgqtGPQIfzpbzxi97Ssu8qoIfweL9tLrraQ8alX9eQVUbzBf9gmKxiKrR1nwfLM0FZJyjDh+ye7UFA+/Cr/d2EMzF3gY+RqgO2r+MlvK5EdkJ2ReeghcfmREGw4L92438ByezIsBQqFfboAblQ+qf0RDjV0LW9T3wjqVSRUc4+35iLR0GZJl1OSSxDG5RruSDgNwwPnh6/ER2VxQlCElLKDv2R7w8NznKmobpF8/EskECtLyUtHq6ByPpbweVZMprMQqOUdULrxVkl14risTdZHitutSz4TYp0oCtzile+ENND+cjr7OBmdHt3VtcB3ZP/NEdiJPv5whAog1paVg3dy/ICRyRuawJyt/FBHyfS3XRP4Oo8pMgqR1eyIx97+/KiWueAlw+Vhku8KUiuIUE+f2Ez89LymjAONgvzTNd/D+I8ii27kP6bBNkY4xb+XieYW9Aur22EnLwzAPsKdqZNXMegWHdr4lEYLRmMphiHEXq6u6WGJk0Bwhhp3RU635tFHtbCzRiCG/dzRBFWAdWIXMi6dO+adtrilsGNveUL9fcptM5CVnlWSHGnwDj5yMDGirkImJsgQCocID402wa5A5Uclpl7BjQx9QDcJLwX0YA9FTWh9MD6h7wMUZVLrmPyBhZe4M2KaQey8hpj9Busuc16lh1pb3Wulkm6F0IHmGmH9MkgMmdVS/n0H23lFS81+Bm32PNa+XJ5tDCY0m2PKmoeo0zhIsFc/V4A7P50n9omxu1Mn5QgrbjzIdVP4hx+e+sDhRhJUtPtv59r3/Nr2qoM02ARUl8dh60ZIUlolpNaRIe7kHLsB15oXTr6qoZqI7wqp5q8SjgX9yEA54j8fPsTbqSeQOByXvl5tmN2PHpClkEXDN0vRJ2D7ViUTQCKV4ojWkiY6JhbJBkrsPvluWQeKcZyhknuuPEDxpxjCqj+mnrEY5+bRvAkLoZFHRm7KTV6nprNVWzqktsqg9u1hGIpoU8+/MIX+';const _IH='81988952c4a36ffd394f08e500acc4d141604a8b3f594d7a525cf959d2c1e48b';let _src;

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
