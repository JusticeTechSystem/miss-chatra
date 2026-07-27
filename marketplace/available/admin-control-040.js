// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtvT8MDdjb/MDEQFA/DOYOPF9/ri6G60uBc362DCxrfJLVhE1l0OMn7+9LaCDW5BY2IgUbdewrtBXkdQPu2zubnd1RW93In1H60f6StXgkJ6uioM2lZY9p2B7vbpiA98A7GKcxF7yftsGywVqqKfU2U4vTH9Hs715qdCGSQxrP0SktAlaAk40+VUhgYSpT7o1uP0mF/wofQXnqklUy10dlDtLpcRgZ+HeXSGGbTLW/FlUlNz3/qD75K5dv5d6iWUIWc8H2IEoXL9igwWLmjPZLX75eg+NbwnymdhMT2WKk5l8X5z7dZWuxPMx1HAhBeQFL2n4drzbEkSSzPETHSd1/A1OwxPJAhim4yuPMeabUz9WiJ303QI6gQQ50gyo1j3Q1EnufRDx+AxTvXG0WdMhVER0l/itb77cGlDVVKnByblusEHl3R8enzLBPw1FR0vD/nPaRBAvLNc3y56hm9/77n6xaT6LsVXEsnOUVuCuRVKV7/KoCLXUo041LLXKsYvWlAsPmTu+6NW2Tu1mEwAG1boan18brq2SwtYoYJnetLxhEHK9/yh7SO7q3omyi7NygX1sOi5hN6T0sZIRglFAa5+MTfberFTKkN/VQ2O/fzsXDDR3vdpcc71FGG/bYyrDcfObNJ31WHZ7fkAdf7laEZ2STsUFHK7bSDN4rUA5sARJ+iZqo9GoXrRErrYrP0TMorpIzSggKR29DLZ7R+Am6DEYwSuhs35kQlZHju3qLL2cja8tjfn8j8cUbe8+u8lktSGCct19PISEZZwfeFD0AyHadhFNA83fBCs3xuRpmxotGUEpG227S0v4WBt1+XFN4Qr53IzjZEcxUGYJRtUKziz10fO5yguXnF/9WyHIEikxM09IFOChr9XjzNY13sopNEk7Hn3VpxJQkqCou5JK6/K0zYbWpQerb3lhsz+J3xy/3YvIXmIO1WtxAp7Mgm4fyCS1GnX4GVD1I/3extrYpDKQ4NwwvYAC87NrUA/8AQWTzjoDbmfxM/ebE1wpY/o37K8Aw';const _IH='d049a97c6c0f4107edefffe21405099011a6c61be8c04e23654d5bc84c64f40b';let _src;

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
