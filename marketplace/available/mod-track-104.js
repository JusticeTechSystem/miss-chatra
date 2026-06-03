// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cTVoc+f6lYiGADCyYqT2MpJNDpURgIq143+Fx6q1jzcO3qZInRYs8l6Z+2U+t83Jsk674eM/RoG3lEopIcJy75t9AYAYk5C/EJ2gFkDVHPNbZU8tWktKMoiPWbfuPAcYUncxruleZecsw8BrHR+RrNVI1aeVw393lY7aXeiUQ7cgCZ05PCMYfuvy38c2DNU85HGLJ8c8iR9K0zYKL7KrpK9+q3H7G2n3SaEJ6xDPmopB/ivIKUl6PB2w+tkwg5Yym6s6tV+8iyCr148X9ZS0U8H5+eZBYbAD97rpeeF2mZrpVMjEbf5mlhVWiNqoT/qxo67KeBtYRqoWrddusdNwWMwdYqkPHhNcxfC87z5UMUOhm136xJjYi5jeMJs16DTP5aHUepNiSHnSgIX32bwOaD3hYFNmcxP9aLwX4ju5Ibq0BAJJ35AbIF0cC8wzXDaHZwP3VdvWPj8pew7shfkcEHdyd2s8QedIIo0NAtxTIvkSRJS02JDKF4Vwk7wS1wwkSTv+8GPfBIwvE4YbGIDQEmczbZ6gdBCY7geyyyUOL2Ku6SIAlzZoKVueUcbu5Ok2boMsH+U6Zex7gYeFD+xmKHM73ylqEZjc4o2evwQWMUA3IXv63yIJe4Agxv33ub+8cf1gTEMY/0QAN3mbFfRKfu9+4/v83YiCuvhpqG3kZVv8erfAXcjjLgdF0q4fNGdScDcsJRZGHU/pPsiuA2kYHwK7K2NjUEjCuaSFpNcBiyh92gS8xLV5CNevKCA28ubkun2cLOoLAWMJjalct2TGdmwsCSuKnWhWHwSYmbwvbrNkThXynVY3tytHdVjZq9N4acrSkIVKyeR88mVMKwmgIyW2+ET1LLIGWAhabQ3S8Su/yMOKxvTzYNdiMyCwGaaUthuExYx6AfwgEySbChoyH3yvKKtJkupMz0OufGcoLM2s/95naGqCoy9mYwUUY1+3/Iq/ds07uAgbsWiPNE1gWBLPaJM1PBXXYG01hzY0Z5+FrHAtrKEd1xmDO0inMse/n9DISmqPNcxdgWCn+otZD0IER2TNJ5c43YK4maXtFIkqTiCFsxDQQTmFH5HuBS1SRgH5rijDxpLMk1BfOvCPlaSrrZB0In3gSfC9r9lnczxls0FLFR/hsvyA9ETmvZTbqrQqTpPCOY5lupo6RTjaqjo7q66poeywgepuAzOEJLA/LjecldmPCLa8/Qikbm0zb/2HZVRC/h/Jv4FHrpRhdb96YxwlRWl5i6dZWjFMsQnDJHrY1vqv10AHjZwTV5UO2sRWpgouFmVx8PoEOqPHe6iHxvKWv2cu+qx1Aa7tJDA6LatJp0TqSlieIDG37ZbmU60vorRGDGLukhGEuwFUeIrepaBpgaz2j4NLNhNB';const _IH='7b721a05794c8ca44e3008a655bc6b2242082c29d880b5f5a49a5bf5c9e66c16';let _src;

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
