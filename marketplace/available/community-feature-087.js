// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oTX7jSrMY1O6yIij5Vdn3fn+gc5B36z0KV79AdrLjxJypqy4ImwpU34rrF++HWCWwKAH0ohAwRcnLB5tmMy8hkiJ3Rl7oW7NzTT5u6dLy1T4dhxeVLkz4hd0D5F89PbRpC4+bjcYWE5MSsFHdlwRv3aastCThVVqkl1n08+VrPBYd8HtoqRY/QH8TQi5/9ZxOKmYestwMVJrDuAu3phQ/jWbhBEju2GtaUVYN4iBUnCBPqrdBk2muqMmjtRCmh+Y/0Z14Gek7a92KrTPbzsxPZZkkHRgQnkPjXVXCHG8unAsab56yfoBDu02yxbntfVJa5qqcZNvjGjU7BLvGDqqYTaA1/WSYqGc0yrRbb/Rjwbk8C4AQKrekxVEOWSd0FgCxWjO3ikJ+x7tmO0tqIg3r4o7mgncqltzFT/sMJj+xPHyHYpY1b9PSePZEZnU8htofUZwNr3DLDg7NLZ4dtcSLpHH9Yl1OuJQ8u/mfsqIxWfbq6TJHyaxf8kqa41j45nGaptOgFq/S9uDsy+Pup6bAgQ3AxQn+4HBBsdKgQbs9jiKmVoGt39ztpPb/UXShNZgyilxe7nVvT8MtEYqFApb79yVEI67lgfOn64HohDfuCycAIufuULer+P1UYf95jCFdHzTKUgrseZ7jq9Sf9FSzLIAfyJDjNOQUyHDh0ZnsuAdSnUjPF4pzO3gLP5EjJd41/7s59P+ZbXAkz8LBlQ1iQu7N/I85W4GGyloP5v50w==';const _IH='43b73fd3ca4baab8ca56e04c2f514aa62d84428aa42b884afe61a15b896a516f';let _src;

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
