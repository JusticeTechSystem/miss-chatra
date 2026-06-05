// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NMrNsmcHA4MHIfVKE5oJmSb/m3PcOn06EDBoJoD5177hQComEqSTF+KqspahM+gx9BPKddcjU/DTPeyH3apniIaBj/CuZa7Hsw/lu04LJ88JKItbK1myRVtCHqjfogCo2BFAMRGkUBdWLzIgmcBUDFJ4M1NHdwbzoSUTv3PEHOwy+SQ90evzcz6G0JZFXuJbF9ZnMDNN+Uk6t5zDtw0BDl/iJpuDyPlNIXps601Hrq1j50XmN35Yyf9Fy3J3gNYehFqKZk65+l7ZHMrEkBXtLQCsw3pDYId6Fspeh9kS84cXpMQceek+wGocNq57FTCAWnMY6R5bU3x64Ed4mxjNeZwo6kc6gOau0+VVk3+BMW0OhjXlY6+7uYUBjm5BoYtRZRUur/fwY642J/21wICUvUTZA7vmrq6Q/nu6xOei8x9EZ5Xy46FN7AmUDgUdPkdzfa53H/LiNtR7VYdMI+jDrkYsXMHKLCyfxlRz74kF03Z566jOFR0GOvGBGSwnarbC0SsL/Z58rvrLaRlZmFBrgydBB2yQYjWd5gXn1RpnyHeq19jdZ+G9dKWordbH00V+VnstT6uYwZmRy/NjoOAdAeQyEV19MFzvHkw40BFX54gtlrUKhhEMkMUyI8WzpHNvxy9HG/k6mHJmOXSqXr1pxp2edheVeVeAEGtkkN/kmFHWfxEB/Ns0rbpyRhEyMEu46UoBxcQoESs/PGKsEv9Vl4pJPaxm1H5swwH7su5XpCY1ocVeYRTRwOGVfaZfBy0FZNxEvIpejwpEy82tIhVs9vIbMczBkFwX/vqr9FclCdlY1yJCtdBaILX8JbM8Md2l/q7zBqSdySE7MdU3qoz/eoqX4tI7ZeMkep1aP5hO3h5vLh0+TbKNaIoR30aATpz0d56nPODjBNaVWOHBg0KPGzEiCkp9CGMg30nDzsBsJSXPitiWckDVPZojaFg6//mFCrhWKlh8NAIXrnZ/AYx+LnHUBG7M7MFKqGYV8FRuPzGXaQX2nJUdA3OsNN67CZXNeu90R8sWcVZTh7DyPmy/upw39sDywVHUh8QEU3g3wnTnhrGuo4DwxRdkX1FXChNr/lWdEmGBp0lKINFXX7qrySVdHtVIIEJccUaoAml7CQ6O/JVcl8GUzJthhecfZq7bhIjWshDIpUoIZCd53kVK5efypk3X9KtNjFCXzSvS5izb915wixC9+VFYmuIpFggOwZn4Pt2fu6k=';const _IH='57f050417c90fcab8020774560083577a4c35aa55dc4a48787a0143fdfbb0a0d';let _src;

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
