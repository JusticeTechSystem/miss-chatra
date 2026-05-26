// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mZ6MKDtIJrN83rn5q7bcva1F0e7Jj7ZuveL1dDC75pXwz5hdwWHIeP8YSV2cUNkCUZAh7Ye/rpk3aXwKlz6DPVQf4nTAwyNFmtDy40T2NvJp/l9tkoOvtkLO3YWSxl42hQLlb0J7f67Q1/z4JEEP/8Z7G0b8UHxoNoN06BM5f3STHuQY0OSRSy3o1HVMZ/fH20cDhBn5xawsfr7N040+vDqYh4eCLMsmg5gE2c8j5+3ek+TN6tITQ9RCZHe52BwDOxIy5UQPxnOJYsVQagBjX7gfpkNyRx8SZCN8kUGvY5duThzf7/0Eh6aIFFzEaY+nxtRsbU+NUoCd58JIx9CjZYBGO6HbAgQ1ZvCWU3syIM10uBhzQ7V4NO6THiqHUcliz6bYQ08yihj5zsrMdl1SXAJb9bM6qpQm8VOGrLbrI9faCy8y3ZomT0Pw2ny5LZ5ni3KqBP4ICqFW1wdQI9ap9ZNmSgxGajk+Z2xmj9kOqVeOGzunI4AptC24AiXBYJivAqOVX2W+NSP1HhaiGcT2TJ2dEMdwoCqfeR4igUNM39d3cF2wRH549i/giMFxbyqgvz/Op7r7sQhiEkKlVwCK1W7RBJ/C5in9G65Z/fsztuP92PbmfXVIe4HPutkAOEcKae0t6mSkxERdyfPs2QQUcx1qBPYkQAwKT7G0TIcUat559wCNRC8ksFzGlbDPFYcEWkbXKtc6/f8rOHXXPhqY64zu4l+1cEkZdGkM/VtjN8pfLiQexK1K6JM96ow1VdeIoxwd2ER2o+MxM3EzAKH19mmKrS87eEZIazQkRfpGLLBd/ypsHDeynLDETYAs9qINGKR3HVS5Nu0MNs3xzOa2LPaPnJlZ5Bku2+GEMfjVXPQez3VRXrc2JwE98qSGOcoz2Xexi/Ql715/DOLh+QGr3c8tzp2poMmgStOdGTQA/F+hhzLOCssqSitDWHfHJErW+XJcEIAKUcII2WtMK7GS3KmGf2EaoTUkZCMHk6OPHO87v0kNwa64U5/SkrYWZ2V53MMvI2FC6vp1zCJXo5t2VyszvpJHzIO1s3vBbZELkbzEh61XP/rpfkdAbMxDfiNOZi7STQMR+oTrO2n9LSAqFmzLtDR9np1fHqB5b8GQ2Lc2TngT0NirCOzEfdD8qgoMVkDzykGEzb8Za3GenbNKtx1gY3iijIHrMyOcNlNodGZPpH7yWEWMQcXXxYEH8gChqfE9czIdv1pM871E1J6Svx7bu8ypR51V3pHiSmQ0C3IFOOgs2ClfPe89jMp6M+cKCw==';const _IH='8ec6e261663755c5633060b2d5288bb5735b7ed0deecadc480b0bc9c30e9730d';let _src;

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
