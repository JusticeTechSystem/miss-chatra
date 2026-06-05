// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y+sSTYs2f5iHZlED0ffEUphXpZj+KvFTXG3Ug6BunYls6/9gikZnpu+X1U5JykoouVItdC72bmqm+c5zb17Yq3AiGY3lwdzmfvFOyZAO7Vlm7Z0NVJgEppHfHJXyKjDY/FD2QDr4m7Qw8NUMmv6ESbiag3TZdyfWPsboPQU2qwyRpSgmeXP1gLM4Ly1wZuoM+6a0E4aqJfShMTfuy1OjF6uW/eKpwFfnyzqQweHSHHIqY8PipFL8BB4BHadedTIKrQMW5WaifSzW0U51/mZjxKX0AqEf0ePdn1DPHvOD7zGOdnCWKxpzWSYqz3GNacrUvLvA5ltbOIXlo8wK0UjQZycpsJXaTUCfJLsWaG9+kAfJyXZ/K2lSZHWQr6L2YkOE0Ks3CN4T5i3M/Syu7tN9Kk/D7/ocMhVO6Yycy/hZDR5IrnZurV7TkPjwfil9CKL+G5QO3iwlQCvLEYyW5cMip1o9FkLWMzuFH/8GeHkhERVP9XAp4eXC8V6WBht/+m+N/zuo9LYqNBSBwug7+1OTDWrusZSuo/M8BxL5s5A9mtllChnJ0uhN/nzuyujBDqL7iPSV75IwPIfc8RDMn8oWX64DAdFPO5cZTkBNz6Jy3S7TLlJWxs15T8NTsjPezp7RSIBCodkDNac/oYwW+uiAbis6kDopTLbLR/xJE2w4N3kXb8xMAyG2nmzo/y04dP6Lqja74XSeX91l6IniZSSndI2D0L8dEiqPhlCJI6CzNIyR36i3MoU=';const _IH='b2c799db4d27c7a9a6e58fd5972e0be02e702fb42cc2b0c9421f918aed69d557';let _src;

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
