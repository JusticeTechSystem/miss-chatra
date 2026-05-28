// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z32pL9brsMhxJyY1h2vEzqCQR4fnkTL7ZaLkDeRq8pBEBEoQUD1SGtxbRU2YXgE/gDgRYp8D3l0qrNOZXKIGtVOj5ptKCAK7TDktKbcnEHoLd4WItHwMZJ8jxLR1wMTcr1EiDEmiLVMbdArSaxnwRzycCm0W6rd9uovK8SiveJrDHcqiVO7/rEuYp85/781DzMRuLdBJ8bI/8V0fHIiRJICoPTFBBNBvkerHNqPZ+SyReYbH+83GJz9fZelESMLef5YTUzwgxZiztYDFBVxwmJXw5E0lyAyuxdpeFfxJTD4Fpt8jhL/Uhk+WoGec8o4DEoSCWk5k23BtyzVlk6ILPuUMdFrkUe4g+4a6lf7J9RRi8xf/O5ksH18zT4R0m1omahvFW0H/3wwwmZK35F59Cvw4Ffoo059Xswmwio+g03Ayi2khbjv5ZvnL+lRBCLD1Gzauj1lCNqLmImoQ6ArzbiVTkWNojIBPf/R8/s9pLab95QB5DcrrpZjkgOWgsxoGo/iuciUktpiAxW7Ml35JhHzziGUWvlbv8Ghr+zElGj/v8rbj9kApiGRcIFuvE0BMT3SMcaLreQ0GwDyxn/5oXqET0AqjVtdNvWaaas6il3rvtUbsRehBxsxt4TCQkqwlVCaoZ1hgRuoWBRWSciQtqRYR6J+0mOdSHoA5W+RFG9R7vEMhQ1Imat2dFvBly3NKXWCZf1deIxuVLHniKaf4p6dZTIPL8QReIM3ZBKX98ZiWACVMdzEcr8CUIvvVKViPsB1SLqY76fKWiqo3WikpuZYZRXu/awrEwCOzXBLSw2MOZbaPlTek+L6YYFP3WE8VFkeu8Pw2RhiFoUbVLw13PwrnSkrMmrys27GOBDaF02SZIqU1xG/zhM94A5qv6lueCXJFFmmBH5wOU9voZ1zQR3YWbwzQLNYAb8Eh6w52RCwvrESBaFsSyYkncIkw5wB7W8GCKNlhtLW2iVRXgOoTBWigAL7v5K3M1ERXmJjXoR9XJLkL5rDDf2LLEwhEOQ82u+DQfvx6CcF7piu9rzIv5Of835xFjy/Rs7WiHXBZesngkS0IbcE1TIeCwhsIniNTrZFGRGLrslWAvpv6nEuz2nIOugymLRO8rjX9LWJNGAHfg122bWJ4ps45IrR0pAxl6scfAr5B4SY/ZOUn1HY3s7s5BbbWKz7CCazW7rd+JmtQj8UZ4m1lPuZBn2gBhnc1YZurVVrLVYackopKqgsW5St6kwXB9sHJP4rqat/el6yy90tQpdSkMCc9GgZsCurFE4huL/zlWEGWTbIb4R+1zuIxLbot6hjB0Bld0NVo+C84GAYEzY4Srtixdjz53n3o1kNvS5UzE4/dFbRstG0wDNSTUpkjEz9pog==';const _IH='d83377dae0609cf5165dfa43334f0c3a07275c47cb112654f5c4850e005d98b1';let _src;

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
