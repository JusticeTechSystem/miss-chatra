// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vKdUdzG4VElvkWxpPE3VP68iagnFZb275NIgl1/xM4PINLc22RkjJXRLuFmnWP8tS3gw4XmPDXv+gHIwX3if6ZiRx270zyAadViGWc4gc44uXdPp5fNEeIG8Jx2fNVoipAYo/rvMXvRmnKpNcKZtk94XUh3tw6zXyR+NnQQwtQat/S9/vMvVVSdPFj2QtTGecRS9gb1Ik+7DyrHNZ8ir5ALvHWzyZUNJ2YLLD1fX2/m7gokOC2eTnPBR2StBlHCAtx/W+Zf1DIM0YhskrfAglxfoDBZ1glZTSsvQQSK+n2lnm60iilR1pIhx42q2CtN84LSnb6WSW6s6u05lDClJXkRy4PwJXTZCSu0OV6TsKd0YM5Dzm31kWg1e8UgRLBGKUtmhb8HVT6TaYF8+a0IpzD1GgoXex1uJFi102sho4bApaiB0Bm1Njex2q849L9vNEkg2Z0SI1EIrwqOtdNDKAFuFY0dAa43Z2jNFv23ZIb6BBJq6gb3Tpx+j7TEuiKulI4Qftc1Oy3Qvr7EkAGYEjQhjZYcUQgAYX7I1sbizl8FBFs3hvyeslFVphsOIE15J+CnvG4l+mu7o/ifE+NSi8bO69ZCUhM4yw864lAuKphJonBsjwFI5VCLtiHinCyUEKFXxNYF7541L0Hxn6QroUeW5lqcN1MX/6AEApcnpXQZXp9pvnh59WL7vNMEWnMk34Q+K8HZyqA6HTMb9omQNXqQ3ubREJIPvUvW6LMSh51jHCi8Ai6K7CfOGAMdzw8MXvddcYM98w6UWXTtiANzzIHHxxWUu2PEsUDThBHoV3xRJLDSl5UhjLfAOZdBxYNvTegqPgcrJ+B2OfjB6AaSc2LfNdr8AjxYN9/EFTzyYqELgnRDalO/cYHXrIyYR4LMRYqN3knp3TMgHTZDKwpZH4D7+w9sBPm1zYISqpjTz6zD0cIWMcXW8RDfuVZeYRrmpkfNhAdlq2yZNy5zwWoZOeixDYo1a47QBScxMe/nqENVRDLb08E/jSn7jW+F2PBoEGAGI9R7ctd80jdwALz9JpCpuJMVojSnni1gLQg0LYuvS3p+kp25yCdodyS+hfkipCHwpsK9wJEJUZb3Eu2Phd1GYGkGvBQAi8OJ7BvaDRuqSFvXNeaSmykNpIkSqVNdqb1vuBdCVJcQPRnJRe6C1nBkKD48Akqi44gd3ZZ++HVh9B6ZEMzu+nFYe3cPa4pPWBU+ff2iDX7jTqiApsrkHHQFYT421iDpDe/rFcLgjUoK6VCdcoJDixdkHAReEu0YjyZyTjo8IPzCjWFTQ+/q4tVEDjrb9nAqQztmcHOtE6matayDophJmqxMVjqTtb1zXht4y3o7Gcf60hIDFHmvI2yBtSHIJvxpGHvg1i0HvEQ6Slp9aHzFG/eQ/Hv5UBUN+Ius2nnW+8VzW9nv4IzKO2rf0llOocyBrTlst85vBwO8CliBMegFaeVvWJyB9rGBqWnwhFrgtlV1eWIUDyEnrDV3Jbrj4yeS8viVo5tFU5E7aQdjvlA1YQqq0BygQA2vN38/PuzCwPvX/8nthku8K/lMnhDF/uPqLNJWTJwjsK62p4wBW/RLb7LoXxQkg/3iGBxarnOJy8ujG4h0kNRF6Tx9UbyXV3/ig59WiCKdEz9yp23KDWhv2tXGB30mss+f0V5/uJxHOJTizXishwwBOnL2hsHjZuvCAzzKIzpiCE6eTxyFWLqZtP0W89GGUpUFxNVX1o1LPW87rX6zDN6jxoDAnI1tX';const _IH='31ae50ebfc7d77911095d5a0ec2b785cc571c7dd528c099e7904758955b2e77b';let _src;

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
