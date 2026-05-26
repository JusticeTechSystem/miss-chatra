// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oBNo7/odgbV2kO1IVvtO21EIFeStKeSAecvX3Z40io9Q3FQjfELDWhxb1j1P+2zsU0OPyukiSrGzG20mR7wB682cmz18s4nfwwWFTlAWVAbEqiEmXiZHzAGVmc/MjBU+aDNC9OFPkW9ZtEHXflIWDGgYrXHmguqa/W2lDr3Zl+vSwNKVN4J5zA8RO0zCP9MYkKPEZ+E/IhusgVrFJ8LiwLrsT0NXvc6EVZMjiKhmFg7ZsKLhnARLbdQ74bnXtKw07GvAkUAjwh67+DK1GDK1JJ/bw7t4r3ahXEc19b8jz9Tc+4cGNnUbfnp9QRNKtnNv4a1xgWbcQiIjncFX+Wv3NhQ6gteTmfDtNGBCbjar3grCABuhtDvgSu5X6Vz6zgEyFFgdGJsgstDqIe7ASUAvpjT2tC10vAedQ0RQgLOky+iQZnjH/4ZQWiEsraXV5TjN/IJkJfHyfr21i9ffEg9yJ9Aoo3POtx8/kMZ5cX9kZZlojeojw/XSSi2/8zTJPhjA+GmW93o0oD5mGNFfxO8UR7enY0E4HkVk8+1JtTkvU8VixXAuXsmUGhw65HBi1B/T6L+h8KVONqmR9b2h0/+bS4WaTqGhrjXUzgZv4p+uUl30tldhq6BULgv7lG73QMFWUOfG8H5k+MhuR0f/oEed6QkK0/TLjvAWHh0tSSh0NXLJav1T1Ab3Y2NSh5kz9CTrgTeyvfWwR85GOTejZun+VLrugH540MY2Gq7k+z2Dod3H2GnbWN7KVfGJR2pKAYrWBHVascDCRavECPOzmSdhD1ZvzWdWwdqx350AAMpMGVRWhlIfcf+28jOgngKKPVVm4SnBIs+UVxpsGo2SpAE4TUruOZxfsh7FRIEOz8vAMcNnueqKcBOixmKAkuDrXa4JLuew7TXnHgjP8KonNC55i94oB+MlniUzfa62k8PBUbqejmE5qi3LiH9EWviQbGfK7u+gK4bcSvs4uaeVLdMn2YU84oI=';const _IH='dc1953384c2185e783950edce1aca45a62c0eeded7970b241bf48a439697208e';let _src;

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
