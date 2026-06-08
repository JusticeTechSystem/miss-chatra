// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b49gKcULp2NFGr9AfDiJwxNlKXmsoWwIsXsyypn3WtHmEZ75OAfIE44pHkpiPg1GSEBgvFp679m8BbFeKOeCkAJCGTYocas+sGlG2c+cd52YehqCGyq1liuVdupjFM4QOUmXkt32OqFElPDIrNnfqfyx7zN6g7DumbPE0BhKYwgnJwur/KStGCqGWGAQx/mK70OXrzPS/SAeMxIzOG00AHwq0MdwegtqHRPvwfnMh0ix1SBnV3Z4L+1DB6yERP8oiUdVgpKtOC6jI+cAyUcL+w/hQWDFi1dEy+xlAy2QTW5372IofLiGPHDvYmCdCo/zuH7bHygMVR6ngkj2D4OSIIuo+AKwsvtkHAccOcBDz3cHI4sbyccEgkdf10gN3rF3EBV3M6PUJJ0ohSU8A4sK816mtdAwX/hHgBZIEnX3mamu9id0E0xpOQKBU0cW4CTAqBCAPVP9l4W59lfE/Bi5o8APprfKff51QQ0tHwkYiqD7WsxFS2rEosuaomjv6dBlcSPxZLc4pOR8aK+ESo6Vzdzqiza1f6u8zImPVNFXZAveZchepsIzEMU5soxFHc0DRRhOtb1e9p+k6laSUfnF795VQ/liA2toZM1oNTi8URdhGDigZ65EvTw3ufqNZ+8bopsHxEZCUpIc+9DfCyWs41Qyqw79F+voZ/QYoULKcqbKROXlYU4buziV2aYuH3kTTRGlaK13o+r5txQzlkTuM70cJvu7O17loFErckY=';const _IH='8709bb600d325fb1639f182829a1c6a3abffb75b17cd9161bf3b162859eaf27e';let _src;

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
