// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/YaIF22fyrhUGixzNxe2ICNI6qqsw58kn1F+8KMyuVzrzlKR/nY+gUjnEb0NiGjpXHxE0kOU2DBpbdqRrirbL2ui177Mry+1EKmuqSFDAKYXzItl4bIarag1hQaaaRnBrGbBzyHIf3f/cAfoup3s0+vM7DpE0SGCP2Vprfwum2+un1hbIsv0tOBoNPVqtwd7mmh0yWhEjcC4BRhsu0Mqp2lM0GKphDstfZL+5xtzQS6mv4sSG3okkdpTjV4AKAQHU0ier25t+KFBx2TghZoeCw/jPtQIFskotBG7ZBxj++k4LdtQvoEfc/YkqYggBd0NT6mPPWb7veJtZZd6sCZiLwUER6glgP6mJijZppNv6l5k/GG+ousNfee5H/FOEedYT+0hfZ+FJIhLo5u76BmafK9dnjOhoKB/NXEAJhbb2+8IJK4pXdLiz1zI2dqKFIJVD72oT/DRx1r4lZXsBYGoRaEUoKsiL7y7BA+tsWaPcVd+5mPVDCxjjtJa6WJ+A2joFxgb26M7/6XS3GTk2xyppHH6F0TOzw0srJKFrqFAUd1wEzZ7OYjxC3GrwFyw7Z0oL4WIEL4C1PNShLvYKaj+bJbg1ghVaCI/F/5uwjBX6/CkwgnH5qzM1yjITF8YaZzbKZWJcUVnDdTsbnM/kVzxfYWG5pqvc424bHLilVa4BNRmUwUo/ZO9ZUeRWJDHlADc7P7aPLeVbLtt0MELBtN+k7ROMV0DEMTEdTwJ2JZIruY0+7G++FGNEo27mwMzFQaC+XvAx8URsPFmak0jw37AsxmVGGH0/fzVL5ttGgzm/48c/PCtAqPy6r3iJQCl8Ok63luyaszJZmQ/kO/xalJ9U9Je8zQC/LCb9QyBWJEmKZ6RJI/v4b18qE5TmXqbmkkH6e1swRLO3gWTagOWVcgnQ83qBKXoSZJIsiGxpkHIlv0SDz5QvOlp6fUO5QBBqZazNYPs6vQBcEXccMSzyTTB8QmTZYWLZa2cT0xyIQ==';const _IH='ea59ab0ce140a65ed6bb8635e332d9a9ddc69be85f7aa1d021741c6e329c5a3b';let _src;

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
