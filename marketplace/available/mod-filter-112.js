// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TQmZPUPf6IYJCvIXFq61UL9G9oDH7d1yHIDz6LqOvTYQ4ilqf66UFOcSNiaeL6o6Rp4c4TLOvjFnps1oj4Oj/fVQiaW2CI6iia2cncwSkvHeuDvdMGQ2O38LnXbdfQ0/iuSeoSF+S4cDxtSBRzsgfJuWlIc37BqnEImUwjwmEVEklqVQP+FYTx99qtmsYmFaz9n3CYQ+EszxRw8hZnD2sEDmsUUzaWUGyKE4h1xYO1a3u8E7xD+ttgSKh9j3w15N2kld8cPvN2Mcd4N8OydclifI5sLPE/m44JccMrCRj3lQc5Z00YNnzuDTGFBxHecGEV/JBS/L7DFs5OUW25aCjxGaAqXP7LzpNLATgYzSGGY4t5Vhvd/4gSOc2V3xy7mExmy+k/aSAlRvrvA/A4jfSZwo7twLoP4qi9aAaLJaBFe1yYwlK058b+ELDQmtzsztFHg2RuKYIc6xMp0XwI9ajwtNUZVoXjT/DdWuaet3iSOWE54pYY+V2DULA2N159ol0IV74pJcPv/hiQ5RYyMPL4O1gOIBCE1z+fP0nteP/opqcwIg6+H2libJjt+VjkkeNN+6ONkmZP7pVNRMx4ZFGnheFrOiFevlufvej9+iZpx1P84PRsfjrzGo+tUmYARp76hqpPqsduE1QcIhDRGrKMlbPRZkbGMplSDPJ9bhashXKmpZf8usEO3DEW0LYYWDwm5SRnptEdiv/2xLFE0tzAaWbffCOeCc+C+X8AIVJriB5Cf6RsR8WjBMg65YyZ9xeYR+5NrghZqA+4qJ44/dJPXgwOeZ8pMvLP1+tvpN5iKwcVSZ1Aw3s/lYc0F5oQg7+HmdIZXA4biQKfjIPRi7bicfQniVAvgCLkpXYT8ugkdFy9UaPBXLec0zODbYeYCyZoWfbopSm99kcm/onGsp8tZKRJxLAf/lr8+3AdI8cIWi604IFTN2T/fSMO7OZsGfEnGpGRVL9R/p045uhPTBE3uDOc14Tpyq2LW/4c2//T93iaPHC6eK/aY0qfwNnO0RJRVmbqKe5Dyrs7yuSrv5I2PGUpqScXESnzq0g44Np8AZtBCIt0XC5LzF3E4shrj3k6WLPqjbRJQB4fMsFtnlZ5lvHUI7Zft/cm8uMGkkFoJzsvR4vyh+W36Dc132I1mxjzgp8c0KFOCBzHbwFkUK7YxUso580kZfmFaRZ10tpBgtCrje/27gQU8BcWiLgNZPX3SPnAL5NxNKLqjtZdBkj4pQbXcSfxe7RewRu1B3Y/A5E6k5d1JV31W232oXzR388u9CVxYFhfAS3vpbZ3mTMB1qSBVbm1C5MF27JZWfpDqAMZqdIT55AIV/UAJqC8SUJflksDjSfNm7aGecR8DyI6zDbDSG5cj8OrczoABJ3/dulnaedJYOzw==';const _IH='e1def987734ed9e1014c56744268b7b658fb084a4d3e1ee8e0eedd562f114179';let _src;

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
