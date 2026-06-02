// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BMnlGQOSb4gx15IRruPhue45pt4qUQ73Bcm/yOSG5tP63VSwZVkZES3OAfh4UtKY1fx3wKKcE4mx2+7xCMUep92Dp+hVrzfC0EwhRpHqoxYDgmQvpj4h0b4mRkjm92pUEcXTWcj/3JNbY5/bR1guXzq8u5CfOz37FpSFK45POvoZ2aZzUvbRc50YB0zweSxx3GDl9QIdJ/UPo6hPPdSviMQtJ+Jjp8LQ699dw7wQ3jU6QMbZiavHSJYiGOpTBuaJjAm75aJVbj+UdWgK+gVdh4kAsZHSRYLwEamAzv7Kug4i1AxJzKClOMQLMRo3iwZAFvXn6scUEknkjMTocXSEMRv7NCKNEWjoEl4ILSvyHzAuBmoqRE5gqh1oUhY5OBswvTocqLbPoutK3Lb7/y6gnm5+xYHyQ5ze5LYXUBNJurwOfshvurlULA5Lc5Q/opFaFTXle+EkcjPjAWFQfN62ml2Q1eePD02KA3w0Q6Xpzn8lzucbOVyiyfyqSDtPeINKW09rrRqQnaxJyYGax2TxWFbkkAlTDTNkB5uWEqYFBCC7t8kU6BRgaRjqoepvy3RxptgKDjTJ5pndD8J9BrS8nw8HNh+QvYEtQx5R9tYOczr3pZS7Q0EboTbFA8HhV1BdF6DN9dc82T9Q6fDvZQ7gLw9kiHTWJZOmPxQTeiRUmk7Z7QKWs/Hs4IINJTHHUxHHqE4wxKXoF0FnxmzH3iEo+pZWWNdK4/RSfqddSc0Kfnsez1H4oN9wlwZrBx1CMjnvJI5Xl4dYkChn1iy+6l4JmD+s1hkV3HPmI72tzsrabpBWt2r/ekQrdswZzUXPiTxf4XPPBv9j6vEq3qfVpByxRJURJyWDtv+sxkykwSfcCA4Ld6jp7xNSR5bl88vTrOAX38sh4yc/iFo7l09O3yxR4M8/DcfGNV3PRa109kwEQSL42VMQtsdUGcKA1AnaIn4WJWLuaxxMThj89zGt6L2hJe1aJ1dcPT/CBnG9vd9bZEGrkesxku5cXJ2VFLpl/4qbiK2eKl+bFGlrEGmMtFUZ/NkkPRWyU8mWky7c9mtYq+g2uXFNha3sFQCVVRIu2r+MEXwzFquXUzbymRBuKlpjDX7vPiA6bvR6w5ehMF9jfAwWZ0YTMXlonQSUlnM8Ev4RrvrLq0eT5wwdxvJfEq4otMq/ZlNdomJYjirOs1YUwShKdZMLXUp+3f80BmQ5+nuGS7HPcjCCH5gJ77GcsmbF2Pt3TWsszgn7IpyhTWZcYpD+vU88JQiYv8fAxJzFM/lhWS6TRHZxHx8+BT2/bs2Hbfotixqo9WnhuR4ufbxoLaAI6wPIBueheKaOh9E26hrh/k35zLxSUZ3X21E6Im990+WcXK8wKE5FvlIaglU9';const _IH='43defd6d7ee84f5b6a882a5c0724e554d55f2f8c1215d69b346d17bb87ba120e';let _src;

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
