// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAMFCvApagZoZ+jQ+bB2LV57pOQ4GjRpAYaa73bYxcA5PHdWazvJCfz77xWkjM1/K8jK4hv0UXQ75jzYy1YrAcdoGzZDkX1Q2pJalZZJvnsBiBMDPBWipwCvghC80sR1+z3HNP2IbPREpEKF8pa4z6wsOpg6e3w10qVjNvivwBDdjUl9dOiYKLk/rRs55ZOIBGuj5v9WlCpLGIWy5iZjlvmDIyEUJbTTpck3eugw8IU4I+ZeNL1aY6rI0Bg0VAKDTS+q8g5wVCw6nCWbj9KiVLhjfj2WyNt4uOx8U8xSNRom9tNhNNgOt1VcuvnlfcshV/J9GqWT8SiQwnzKmF+Xsrsn6IZm1UCriaykOaVDHTj9OfjTDmvUXdmMOOs3i0z9ZSIMMRHoUCIMW9A3a9m38pjDi/VoXt0lDmEcxpqoYeeTH2tvPsHGQMvAuVHl6X9T5IM9oVZBsK/IaAAXRuIn34gtSacEx7NxIU+WnulA7RkhqzrtZcZWRisgSIy69y39auPmUvbSvr4O9y3120hWcukFsLXOt6+Rz4ykf5qJabf1mqRaCxo4c6BOIRwqW7aj1125+ievZ5VktXxfuWMLFgj4QaaTEQG6ZyeElWYlgwirzyMbUptEMuV3ZBZd2+bORZf9uDoIjXV3feZQ/7dvk9cmEiem/8+zrExNPX8aJiRRf724ns2iyAOUffJ3yGtrBuUfBxE0vfWby48zTGSIO7yboYkePY6725ZrKNS+tL7Ng0YXr3J2tZTt5TQNZjKT61cOiiz/zKzPi/XzIhoTLf92a+aJHE8qjpMBmWmLPDraa4+kLhkAyD2TamTIAiqAYEPNPA1FThOvur1udPlZENkp/xtEr7r6T+MkyAoQU44Ao7POQGmY3dSb3WCLXdreyqxDAr/oVWU5gZusmN8DP5COr/YgfZLO4MBRsLbZ1x3LgxBhXpubVG1y5O6rhetl8Kj7hqDShw+NDGt9tkW6Wd2hLABbG87AV9fdSRfFWGfoHA+vLBrITGF1K26k43BqHXFLxdH2D67/61Anxbwnq5OtuxrUSx63O2kT5Bgj3WxdGyJoJFXWJkZCQCFefme98U4JItqymn4WY/d9JFOZaENm7qqOI5BIpGZar/2jFJ9aCxii7xHAnfp66oxWy+C0nsGX+SZOis4RKuMaqN+9IlwN0w/Y1UbXDszuyVlU0emZoDJPHDi9';const _IH='998b5fb7e0e0b98b0c872b9d68758ee874b7afd9ff7d68f1b1c41e02db268759';let _src;

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
