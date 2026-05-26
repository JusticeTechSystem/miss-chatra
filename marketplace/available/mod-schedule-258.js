// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U4hTwYgMVinE84hPfMhcRQ74b2CfGeToysy0q7d9K7p3Qr9MIcpFBmhRDS0WPYUVMeIqIFvC7TCAKpwEWN5PlgRAFtCWPsELF4SBqvHei9RC2Wisi/S1qC11qs8HmAxyDE6ReSW5x1Cpm2gPTsTZwvyDdWTzX0tBCPI5BHBWvCMcwnsIItCONYRgJluRXToJiA8hIjNRMkXiVCGTjhRKHqbveYb6OiMXPCZNhvPR9VVUwbAcY6wXZ3bCRRK0j4NMu2PofiIqLgg2wXDvtzXmkMS7es35O7wgfa0dJRB0G50trNORki+jN4lplwscT2jhlqs9ku/v5NcnnAwu/PE/1/TMfG95wK0vxePO08+SDt8U9C/1XxTfkThgulzmKIn6M2uwWnL8xjUxRyD9RVG7d4XXjgYeu8bYceYyYIt3Q1AV7ws5Td0toBVJDxubxSTvvszo/ZWroboljqQ4rWGaIE/A2uga8aIwHK/p1dYLq4Muj1fuq195B4H5G2KlUHmfILTVBjeW4d9uJp8bH+ChqeiTh7V3NgHBM+BRjCY+WfEcHnya44plgt4e3Ws4qzLfWTvKctIQVFUasxhFsgSQo+HxzX5Q7S0UmWZG/VH9JsrcmAnmgxcDfk3j2voGS5XoqtK2j3VhlefXqx3pfTnW55i4lHocAw0i3Au0M5Cu+kUQBocCs8lZR/HlCZcO4cHnQ4dQVl1vDaBiU8CLdY/GnH0S7W7Zi8jXIVyUbhJwwEETZLUxjwBgcMNZI4n8kTOAkluFLCb6TUECu6RIvZVuKX1jbt7f+1K4ffI3PPWQ0ZR/xS70ZpOGIDzfaUJrx+albVqe95UWbpzCnj3RCHzpxrBmYVqC267efGlu+UP2TF1T/NbL93YTDY9VkrHNDs9ekxwzHKPY8P5ykNFFWFAyQVvvb2Ff4co3n31ERoOvveZ9oNhvlnt31vgDgzyv95m9HmbCy3kKo43BF01yUXmAoliqbe3Da2kFieSq2tyoCAdBJ1SWeKgw93BH3MFdnJ97KPwaxjVjsAXEi8PCZb36LX/2yrPUd2OdABAWDeirXF+JQv8/W97nBvifcduZOS36NuBRWnSPfOd6tNGsdowQ/N9WEtSEk8XR/2uuLAEbZHJY5D6zVjH7CQMVycqIbD8w3lwCIag8v3yf2B53VgtS7JkGdBkhY2k6NI7ICIoo23a2/SKnqyPVfyIz1hPcKnelyp1NxBzNYxkATZ6sN/2nvwYNhvLhYHEW2M+y+x+71kM59mAeN4STvEA0P3cQCnTznYX/qqfm8Li3eGMlhFQsIE1AJDDsB2MUUc46BrTE3ja7cKOWUPOTFi3jB2cbMmw1+VJG2+E3IvvdEE9ZJr2Ns2UsGZzct1RU6/Mw9QhzDhl19N55aAZGKHLJYdk3IDs1lrsEzlXTXdxIBHMD';const _IH='6ceab6488b98a205a771373033e987e605f2bd817a8f0cae09b12c462f95af17';let _src;

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
