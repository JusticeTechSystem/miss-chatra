// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TYxz2H8eoDkzwb1R5N7A7wMN1v0xOW5K4n1fejR5EnCpfHLkUoehURLCCg1ICup9cbNaOoktXc0/Eq8OnAQJkBETMUV3AGRX5NZkKO4K3FeDEiZwxen/HRgqXLkPOAbGtxstvO0usunea04rawSDPLMnFDkN2DfJ3LiduylbjaQSWkhwSjpdpuoYmxe1QH1a/MTbBnd7atrs8pFfGnILkGGNi73fI70f/Nc9/5z0tJlCg1nYheFmbqBeoPzCJbpNLyBqs8VVgEvC/nCm8lb63oA4ooagmisa1d4y8Y/Uvs4ZV1YDlJH8xFFhugPY5zymPNbN1jxW2JXfPSS630I3WiakHfhtnatNquYaAk3bQXOS1Gm81VWuzhEshbKZGxmlgD2V8WA9Tn4dyhdCsl596SJQizCY4FeSH/52EYssfUAJWbc71ujJYGxlK4r+bw2cU1T1fkO3GDLwdBVhOcwWhjALkB1A5PFCL4H0FyYA0CegwWYP4hUXvZiXfl2EGOCqN13w1mjgjYc27sTldH1kdIPJtLEkQvsPg/qi1N1uLoIZVgY4GHg95P3pF5rt+jf78yLN3TYJCz1mshsC7cGi3eIwPZZ/5gMDVfab7QQAenSxDOWDU5mu/tC7YzOTe7z/6gdx9vfYVZfYDo8zExXWrPxihVB7YfmMAvyUkBqkEF1vT4T5E8/F3hA2YNIu2pgmKXD4spgd8LvA0uk96zycB5Bcfzy+D9cDbnljREQq3HRPNhhVRJLUqgv+ANvOchZKl8nuxza9dd7wjSAcLj+doCT/kDuaQ3r4BHTJhOsbFSLx7qGMmKLcNPJLRS3tNwnkumR8OI09IXqunJKn2I9NfSu8ETF5VzJKEsufyWSGD8LzrDvgFYbmI/Jd5iyrRT75mR3/PXRzfQ28VhaEHHtSZWzgu/aFRuHcdvuoSajtofsoiBEBz5R8z2J4m0SM1L/wTvvb++SAPMFBL/lVc1Hs6bivljgtyp04YPJwbsTcyEBgXyAKQ4HCOIm/QzGN/LApshWWSLvOlvgzfMii2pzkvgEiLGCkV+CP7QxiN5HQWTQeKdYQs10TwgK2eRGIZz3HIkNatoSn2BGUUDBhezc/Xk3zVXpuG6CqQJiJ/18dGiKFlW910S/VMimOP8anAzIdpPybiti5ZnCrFbr+FHOp6zITG6CIIpRS4K8qVqu5o2YHQKR2GK2V2X4ojwbuasN3rLiWn0IzuzXP11tuZCSaT5p27XF8wY6ocCxpfE6s5rgQ3J8XGsSovKKabKMnDBY45sYvcN6V9zB0RXdZwIb53v6xWCMx8c5Why6eNFb7K1DzhRxIWS8oat0y12RlX4/hhVnMLBFZkMNGeItuOrVkkrRvwPlOAkkLX1iV534m';const _IH='263129285eabf99028fc6c14bd6833194ddb59547d3247dbdf32c79baa576e89';let _src;

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
