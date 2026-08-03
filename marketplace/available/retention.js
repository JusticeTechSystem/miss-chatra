// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4ZAzo+qlUzMLpXMHnC7WUWYfL3bAg1skNP9NaS+KgUwC13ejFhxOIll5vjG1bZ2ljV+vyAU54HCoY/W9NT0aTKRMVsWGU3l0kXk2/hiIdkU4Zs7Pvb13ptpA4hTQC/53L+wJc0CM2YzgNSEmKQQE05mwp9NXjhkyNPOgYLTTeuP76QQk/TQ1jU6h31bGH9C21Ou7AdrZB9j0Mm3Bt3Wy/JjYt3HXipZ3QG/IRjsbAARQSLbeSuV8Gvjgvwtco2pZphkxY99hHeIai9nCxp2MA0LvL42rhM7TKzcxHsv4Pgf2Qz0L43cCmEzvKErjiBpk6WFKbpKpcEz7GZCnwQ/WkD3gfV6ItnlotBsTYWEijrCVr7NU9dR/ukT436pP+LckDMsJh22dS8AvcZpFiU1TZErBX3UeCXiQyPSWcKaaZfNW32BkIMLwBCece+Q+7FrpmgHRJIhrKC/5E+w0gr0eIYZcEFGMhHBwWLBo2A2Goyo0EmCifw8WC0rDg5GjKDBVgyS+w/nKRZHFxRCT1kwEZkgrDN3F7xLwsO8JvZEVpX1bqrXzWn8ZtvDfDpDiQQBoaTvrKi8/kzdizYuY1vYOuomr+t/0Eb8NdfTTq8Sh0MofWS/HuWLdKRahT0LSJU3uzhn98lMo2y2Ow4x/uxQCnteeBCRp4qcuhMlIKbRnREm+Z7XYZOmpcMzSZZAf58VpP91lTShTlTlov4bxtKwI2V9maNwOAB4XpPXib4hj3cTYfuRpVgJ7Il8K1Wa5/NqoC52rt2NQT5S5pj1wYk28IL3HOtwuQzYEx0sq+Bu8y2IKIeKpvxG4yS04TnwqhOVyr2LYLezlEl+uD3CRRyHFaoviBujA3adyJRKeQ/0IHZjh0HYeASxC6yE7SHREpfJbnCi2evEbgfI34P4g1kIXEZrHhFLoiiQSkRpaIIwXiKiTMnZ44mVLblUFcx3JT10USqr0V0h767WQfYC59mwA7Ep6b0Bbs+3i/Hs+ziGpGzIPnVfzXRBG5LCYT4Ct2CrtiQaEEOc0OqAUn6fItVVU8xhO/Ne7xUH082xHW1f5bbiv2pUsqf5UyYWsBrXKWgvdxB3cpnm8CMD8qDpoMTerTjYppNH9CeEu4wHl6xFtY6/6buH8DgTQPxTz1U/9tUwZ+JNOslOX7HsRAKS+cgmnYn2/1BKXIGTUlS7g0sirPTPZFDhSzl+SOtmYj+PYouy3wybFkEzJZ5nw9';const _IH='8f2c0469b749a33e3960ba363d276e5ba3050b545674ec1d43895285bbf42c4d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
