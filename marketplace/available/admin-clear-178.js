// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1AuEA/WAxZb4/pWEHUG8LMFvKevgNs+ZBvIGHriBFNwE9FzlLk78uZgsJJia3P570TAJW9rKhcc2BEMtrjT1OIsxt+WXl3EVdYbj2v/MTVT/jDB5QGO4x9saFI35rCUn4AHllBL7enP198M1EVsbk6eygp9lkjqkxKT/5KYuMs+45Jez+DsdhIEpUuO9lV2aqVSDwB6Gtncjk8XZxC+rzTDqePwwwjpSdZ91rxWWJHJdAVAfgFYb2cu5AXBSe7dJAFdK710ifv/w3y+yFqB2FXCdmncHyjM6uUykDa+bB8rTXHuO7YH+VEps96HHPt44c6OhmVLWmt5SRhGJTuKCndlj9tgllts0cA+hpiiIv6ge11FbOyfyDcJLxKZQBOy3bB0gYLepmcyhbdCV75KtVKUs54td9aYn+9K+o9MsEUp6XziIV7fNJftlRgrp9xqW5ukV51B9SpeCWpZg16vL9J0zXIHhaI41LwiAuW6F3HcDqvb/Xf9pyZWLe5/zcx/NiwiE7JBiFFfje9of4taoqBbO2279KvWiTBpPv2Z+S4eRwLf1Y9ebaRst8znpohnULqiv1gShABf/6xL+WCtyLPvUSk7I5e8x3LCYMij5ItbP9JFP7PnM1toPJPakpUyy6iFhtRt9Hz4Xh+LlCabAiAh+zi9PuAYzoxpVJzRLeeggWpPrAHFKWaxLJTQyE8PMcUsM6WAtQwvOn6IiK0ooO4pS+YV1gbRnYNluPXOCzd/5Y6B2J3vViBK2euhfYqESA+Mq2LbZZB70FGUSqIP92hoT7qyYItJA0DFMDFuGLXm6rvcC6i3KxdGLLluob/+9l/Oi49fsF6A8T9lC0R46CrRXRWP7aO98oKC2E8j2+ynp5P9qevIpKxtQYacuRNtALRx6XOEJ4ksN+eJ39TD89WRFNaMQ0xL9qBKsBYS/H47IPWoDDFfZ2X7BJZLjRIQQaXsXrcKpTxyKl0pUC/An3xVjhNnvzxbBFjEDaS5FQgaiB1nzw4UAoc30Q==';const _IH='667bfc71c794849fb3e180c1a46d18f5cdbc7b9fffbdc04d13808a93c2a24f89';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
