// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v11J5ptHP5hi15+wk62SHH/J7eTSczAsLGBNL5ZxDSOkuBW36WUVWe7qHMzca1EaVwwelFOPK++z90WWypoPxP2BditZesOOCxwz1znLqJKjyiI4/7lXeq6QaQGcHKYarniKEziifDYvLVjM6Z5F0mvKFxRvnDlvwxRHzf0GNDxz20j0NudpGgo7l0wlE8ivCYv/o94op6zawKOgWAbdz/QrmYlNUIJRkAiTNjVzADbuF0kyEr2YTZZYQbypy+C0vlsWTNSB72Vcpj1EnNwiVs/AyMYgrX0KzvTajfWoBxsj9KSZh9lHLihHzy+Clm1P2LfuTR5Bix2GSHwUONr4YUN8Oz7YdfPD3VRgVHupgnepBb/gw1B7QsP1tyRC+g7ykboo2+9PdOqyi4lzPAI4luLA2T/VB4GPZwWGDLu9BNtD0N2TsMcokoP/GLsPulR43yRSmFXstDPoECHXDzYhG6MoVFrpeZ+8XZG5bjPV2NIfNhYEJ4kGATqN9tXeAlyBv/r99IG7QV/bLaa6B+pBW88ONQY3pPqffsT+LRX+UWIiIUYV73Vb/0/SLKuk06LZe3vMULDy52LS3fMQc7z+/IxQCcz5VobA+QMQ8OSKblKyzfZUwFv7PQxEiM6qzGh2lOu/SmWD+r4910fDMnoZrN3mN3PkmvAIyvHiSvICSDk2znrq5s+5ZIU5IkBX7Q+SJmS0Qn/tJmjF5rjTV5Ct5jAmkFXxF8aSZuUJgoxhVMmoufFw3OWVmIcZvaJB9BW4zXjbGV7t0+A7O39l7TIKxXhk8pXRllQz74IrOvnvp5nU9u8uZ1zhoWWiYevGTBwhDpCiAE6RnuIdX1Fucbi/hew9IyLg6WYxSpcmq8/V895BAuG5Ea0tcMwHgPvrE+Fo8GWDlESun4xwSnvoKviimEUvnV1v6oSS8j5uS/MHDxl4Dax92fg0XLmjwj5yCqPy5LGZL3ijJr2ZEaUv/JndcgCT+o1gAk5d5PcAWy/pEwcAcIuyQ1RcMQkdS7BtdTy8P2VdnVGjDeZMubqftNG64WERN39XKtEC293Ol2/zTjG2t7XXACeV1VFa7JcbhyPNe2qMOYMtq8aM/hTg1jZIBzf1jHrfqWY7BORR25TSVTPEwQl/hL38A+8BiLNoa4jUa5svl54cscW83Ve313T5huQaAi196xS4aZbiDOhpzqTirUVIiF7ieY1UTkQbdDrCP2SPRGE04yswy2bERC53WD62esU/VhX74PlNkHPNsvix9iZUA+vpiCJfktGV3wvEcyZeEahAceGfFxFHsC6eC/SQTrWCQ+LJ/+n2/F8qQf6DmCgkH7YgHFHwaEygPKbGB7TeU5EalJG5ZKboqzAbKugWr45ANLZvVpAYDkpbECyMuS5/hs0nY8zwRIjeCzdkq/E=';const _IH='921f8792051de412fd043c6955b84a24cd68c9d507bb6fddf2a2a94897136bbd';let _src;

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
