// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0nj86mpwDR/pXYmaoVssMqMEvpCFFDB9eHOoLpTXwGlaQrFan1xYP1mJiUPM3JIAJGE+G82JTSTHmJl7F9Gek6YfmOxOIzQPrIU1WFtFujVTgzL3Yvr8t5igDbW+706ZwURcjzE2a9xIySl4U0Oy2d9XPyMasP0CGksqd1fm+fi1Hcwm2hKNdhT7pj4EtyeW6YCCuNQ9EqisiJk6kVIdWAY/ygcRb+82fAEh5+XGQcbrn69zjGWW3A+2ecJQuF6dLaNnRSUBkQADSIPYE+WSeReb/ZkSrKYg5NYe0/0vYHdiGt5ld4cJspTwtQfd8qJEDzbXAZPcdAMYNM/ISirhvgACoCz8tJwIwCTbFTZqkBs4ArXqaaez+HorjdKVnUPhnd1aqVKsUlgUyIfUQK3L4ZLFRjAUFsZg52jlX8lw6ejWbw78UUCZNLdRzVheO/COzs4D28Ys02A1RmtzzzR1reQdxDCDumyFEzzi8H+LrXAZ1uC8VUo5+vcKKWWa1c1VLyT1OyHCB8qFLIQykYrpqA9IUysnNltRKC6yKrszdXzzHF3Bu3U1SeBp0eRZC8cgoGKzOS/gXXT+m7cs5hce6z+kWl1eEvpR1ZDbT0OC3kBe6L1gLb1d8ECu6RX+dTbR0NL6SCgLMv3/DC6LZ6Tt0wyeB9Qs0ENTcafwGEdrRheV5KZ2rMaFmwlXfblP2piSWXM41pAI/SmjK1loKzOCmf3Oypnsuf+0/ZfaAdPV0sdqgbBY5YH22cU8s6ppwmv2te12fo2xvKWS26vhumE7nciEldRC6J0Os4lOK9R4BYg2MgZQ03lB8KDHpyrEQTDFw9EGbYAXtNyzOd/sJQO/mpLhCQUp7VFrz/bPBKK/RmwYPBwwHX2gSCfIOXx7sJso21iNB8/Fl5nfHwBEAxQ8/w0Bsap9JQM/E2k7qQihold3Cbln0gPPFHr5po2mctITEyBOJwB3CTD08lwL7fSZym2/v4PqfRj0V9RgSU0mUNcFOkOV4OM=';const _IH='fd1261108f8a11082d7a8114e1da97a9a6cb0a9f27e10624be2ce2ea0cd8da8f';let _src;

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
