// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='irxB09kKeha6euYyUIHagiQIEtuLDK31SnVv6fvmfsIF0oul73l74cPOAi+/r+3TluKHwKPZm+WgzgaXLILOJAoJI8tLyGI47NWFduI8kSKSrVfaJYvfwMkk8MbehAqhGlQjtbcUEawi6PKLTDwnOvg9UNeYEbspUCiv2JiuOl5BbCqVRzJCC5xxQbe5Z7UcX0W3dYCWw8h7tMIi7d3gqR1rqA0UhEOOYAPvkbxb1FVOdjc0uyBxoOcwaoSGSTaoMJhsY0nLvWw0mqry4tNljJVO6Whch25bCgTK6exzVyr7rVraHOwwCKmZ/6Vtz4c46dSXBdtLezsB4Ek8GLwHgKrUHRo53Rj5nWrR2NSXpWfn9hHD9lpD0H95ZAqtBCf+3CABj8ZBxzxP94o7hEBwBVcm8c1FWCypEjtyQHtRsl2Qfr6iEY7b37I2xJpUkH0rybqpvIkDcr5kMY5hN2WNENtZUYG1hwGKoT6IJcaNQwS80pHQNqWKmRyGiMWJsshVjsZ+u1hCf0j0UMZs3gotIoyq4R87p2po5TDmp0N91Mwt3PENJ9AmF4dkZNax3bL0SkxwcprKbCH17Zh21PGIMO8eubH0f5E7CrBBJX3+hMrDn1EKCtSIHseLYczTFN/XBMJcQker90hcNAWU7QQ2r2lCO+rCU5zgOsLpi0rgfmgSQ090+z029ZDnTh0KqnggjnHvanypkLnDp4fiFJMZa/pR1ojKghUpneNEMLCanAxW28OVu142QsqBDEbrveAhMuI2j7yfCoo0m/735bSdkIjaarkB3ACAW+KWQA8z59LnuAqiWku7dwLCkY79bXLkqjfc4DOIsgfhukpzv9edIGcRhMrDm/OgKa9UqNK0kLhINPlnO7CxooIxweMRE1dwvFKyex4Z9RWPqRaZFSkx3xglzajmCPPQKfMtwMMyJbckoB71nGhZkKbY4Lhy1HQOKJduoWoHNTmMKqQCYur1eb46xngokrYPaAdCDvtnhDJV0TH3qHUFW1xD8jHk';const _IH='380403aa76919ff7c72dcd61510c4a66b171260de71fca08e58f0054a66fb668';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
