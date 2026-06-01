// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1cPaIbYyLnoLX98ZqIVX+nJMp4GkhLREKJMg+ZA9t2o8bCDh74or1vvA5Yg6EmtC7eDPcHNy/FvpemEbpahT1OyBRjBHhI6muz4r4B3yKnfUlV54Mv0LIA2qjPL/hUYjuEb4FW9HnRdrGwWqUqv7QFlOvrz56HBcP9cuyg/pSA/4gQHIjiNtNaHDntCSPcxo+MM2xdoOkT6b92K0wOXuBCZL3IIQHKM84S53PPyFz+jDDJdjhDbdFws+NJFnNwToG5HgBdcYas9vkNlw8tpP29kivQ7RucLUFZp3QPNhI9K5zQD4wxSCSg6LW+4sDf8wIXNaIwCXGYzrRHGYatF3gNt0vnnLRkwMmGUu2YJ4Yu+BDdGFJCLT+0O18cE1DXSmQ+jv61wiuDNRexu1ABS6+87JiFpwTmq0Qr6nM/j3kpyLHdG8PwnH7/Mkxy0PMf7gbT0wAVN5bNZZbxe+fQTttGzDELqAis6j7yM3dkBDQB9dfriFh+hBJgyvwVjO+uia2r3IMdOVZ3Jx1Ff3gim6eCeweq8UShZaOd44ojdKGp5xiYkEc0IH9heaf6eiBxrjfhE62qPuqOlmSQPcnPvH9nPgmx8kkQygppOv6tMRE/B5EtmM7O6f3XgbdjR5MWtOjNnC/bv7p5bU8cIQCv/AVWiv+msaSnB738aoZXS1tC/u9cMXRxdwB6BhR5Trph+TCmSZdE9c6veXhyemHE45kNZ8CZ0cGxOyaPEM4fIX1u21Coh3or3gMGahdkvMgaFAor6Vo8S5GabWnfkiG/A0fNMepWD3KGGkn9aYi4+2wuHoDOTWgHujJJ2Yaz3Lz0MIGBVr+SZntCJjlPI9E8r9tbdRk+3SlW3rDf0T5Js+FhDp5f9G069Latn8rUoDav5O8SQQeHqGFU5L/LzjR3QvUK/D7DFSZR/vFyKwAbaKvkshLcBUBB/uYUAgjbsJrr0tjHwKKY48e3eW+vzfvWjEjS/yyw7UP6IJhA231JLutOSP5XBTUpg+TxXQprtQZXAIPKK26wsDviBLVjHt6x6D7bkMSwaJztFPbnG+/i0riPHH5ZJ4JLwsCsYPvSJ83eHnoHu/h2Wps5tc4XPdslRgYsDecvrSBTunsSGdcfYETHAZ8pAaI6pkbG5Zkyl9CEUYDZBT+bHcSlibootWYbiQWCCUaw8uhMOAHbEMptirH5XyVxmiT5XUdS7n8mPOtQGXS/Yxfpt17lwBcOgpYIni1r+ryToEF7QxaDfT29lmzOFVNN9Wx/N/bYTNlErdrKFjpdadXpShBxJTZWI3FnClKAfPiXaSL0UlFeTTZRTHmhaoE+kRrtJMDj0VqfUgS2bp34q5I54Uyjv8ZbcTB+o45kAu2zVWhVOdjzCwGD7bn6zcOXY/aYw+NU=';const _IH='f14018209a8194e4b395f52b6a5e257c1c5349dcee6bfec1d6db837922b077f6';let _src;

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
