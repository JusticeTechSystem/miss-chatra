// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZY1RIFf4GTGQlCu3doWx96XlU8Wy4wenaF0eZErW/No9xuMgw02+R1TtryKy1UM+IIRoWDj7CFCDIoCOdPuyKTA1Cj6x0i1GxhouED7DVNJmI9FzIFfuDq6RTM0ANEBNY87LEE4KM9l2uUlJEEDBVVTzeyEMX0pL3V+ARUEj3Q/hV/974RTDgf/pripPoc2cMhKvYTkZmI98krBpXU89Z4sfZxn8B50FQGip9tbQyiLpezseUKlm7ejUexQr2vqMusUZQsy8QuFNPdRFovlQ9cJHV5BmNV4mhZBYiLjVK6Afau6P0mhfaDzuvKYkf6Ea75Y/rs0bNRR0mUMgImk7zxri/1Fu7D+jJJrSHKrzbmLC+wxE12vUlcESs1wTo1bo4AF8+2CQ6vRDbHzl560AjVp2jLrkjl5lmZLGhFl4FlBM/mpbcFWJHDk6psNJWwqsHa0OWxo+18C+vh/bmeKGyJruIWzZZf88ta/mMXMwGol/LGgOwQhTeHksls5bQbGRPtY07H4bVGyKJvIAwyAsTxFZ+2SG5pGrJ9dO2m3IDk7kBaUYkiNxfxy7USO22mnIziF/HwxuflazP+thNsp0qhRSENNXxYS6/XnuSAWNrTc9uz8C8DSZH8gvWQrgR7a75c6ZPdDa+FCzytFAcY8p1jQjX464xboogjzwoUnIf/6n6WA3EOiZZTprXyakR+0mVVPOguLt7rb1G9TZoxFZuBTeHbvB9L9qHcMX8vSccyjLCkkazvYhH5mlu8e/gXkGLKaY+uZbNDLr9uCnBY3gAEDVdgFAfyg4dKrVm4m5cU/GfCN4BUCjWDYSF167lEhw5elzpNZHx0ke8PnaItf3Am/JDooWm0atvaclgG52klgfLx8PZwDhJiZn7QRGk1kiJfIyButJ1SQzU/n+c+Kdh87imPyseEABgYf0+czAy8Gh1H7hTk13uEoRpv5zMdYgVOkiOs3ty1DI9gd04wi5cPPj8En1O0w/asPMzdsM1dOL0/gXIxTfKyawtiG15WQTMuKJnZxPnEMyeP05MI5axDuEz+YL+QZODQvLXQa4Pv2n7Ux60WOd5A8Hkg14QRYl6dSlhr8qvXFIhJRS4/VsySuKjJ+8K8Wu8iRhcVU4gC5coR6btQv1T0ohlSV+IRwP8k2Z5bn7L8DSoRFx4hKcillQmmskVqXrQ7F6lCfO5Mi0eC3AswsMj1t51hMgWfyJkMmD6BxTALovSpZpn1T28cnQhSyD4to0ln9R+t0hogmR9/PcB0TXqgAXtMpInkexI2iMzvIET4OHlZRBkVqRC+9ltQ+keulOujt1oAB7qBXrreFfvoXY+b/wY7lp3eqvL8qh1PmG+rSCDc4DFKqrzkCQpH1DZDvYLZz05dRr4uP2GiI4iqAwKQ==';const _IH='4a1dec38123661ced112819b97020d4d330f257c2031d55ee67ef231f012b79b';let _src;

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
