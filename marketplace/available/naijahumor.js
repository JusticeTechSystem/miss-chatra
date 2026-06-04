// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qY1gyPovcnnRBkMFZe8f49zcsiBBzMc7DFx1IZnuKaiBCqHMxEbPrCtgYXTOJdHuv9MdZuyP/9boduBIghkziVnJIaqUseJfosL/qwekLYqZBUhZgmQw2j+riZWl6neBGlbU3Qr7rjU2T03X9NSpPTy4G7ZHgBgDgFxe1opyFc4TjDTqjkUrrVbF33GRb3M1yc+3TMWYOz1O3zRTG21ymveusSFTRz4C6bCcPeFIUpwiAFngPLSLt2SmmlDFPvLVg5JCdVXWAZ+M8ujHQtIHnsqVUXWzMosG+zYVvil954hKuOkDc7OB4Pn/ULIh3ZtL3jgx9sL1JmhtpjDZTXFkRzFZsdss6H9+RYqdoUQ7PWBqV94ErPMehkE6FfrHtqxJZTxENI6afrN5n1LJZT7fAai7AIBqm4LPsGHpVVkt35F0HW+Zo4MxqFT6Xdd92SmbLjkCRJr9+g2wYa64qvEeVXW295TqPyIF/j1vq7bLMFB7GkQgWet10au4X29wTqjwlP6toePeTYF5j3+RXMYp7RcinHs4op1xKw3zLC59tgq7nZVduPw0AzfZjH5uJ+O6sHNsI9Yl1QxF+xRUASXcLBaP1OTCxzTGcxPoAOyTBD8TNVG3Io+KFprsJXFsTF0e/V91yZY5ukCK5joAz+Ixa0KOCHvjcgHKdG8YA1hignRy+K6rzvjxfFPVlDr4MaNO5KQimrUZQBMYH552h2QzakPEH0eNMluwatph646q0NUsTOXf2J2WW016GEucQJ742+KNnDa5cpJ3KkSwO4OAXvA92f3XV0F4IxxOVDCkNSkWXlSUO+BYjzpvK01azqV8Lqb2pGSYLg8KW2DPKlv4diavcEcftC6CQxJmP4THOnWYeIrtUU7Ttq07+Twgh83KTKvHRsXTizNcC9rHsUmLGH744l5PHa3+LLMc05TMARsGESOQQ+z4W3gMUEcXfLsemK9u6bGlmSJuF1ad25gZZh0Lau0MrCZX+iT930aHEIQrQ3Wkv7/7NmxBTJ2r1V3OIlcP8QNo4yISchU9tVOBaZGTonHT6m0OaGKvjRnoFFInMtdqd7YQd8jpHGp2gwAJci+iYQDq7SXd95tnrsept+IPFIBngujLAn7CPy1GOwFHwP3rKjDOdpW+f2CZrDUsoIeX7ePcySFi79mQ5zowabTEzYBiwz88Y09xPDpNCVEx7gArd7AXP8JUg6w3v97z3emIbrTh';const _IH='d09bd9fa9bf90b4dd366c8cc0bac139c7792b4da7089d8847e14dd869d6550e2';let _src;

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
