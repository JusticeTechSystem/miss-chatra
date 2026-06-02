// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i7EDngn/elgZmIicaGb8awf0Ib3xSUoERsCoWUonPivbLRihZ3FyAh10WSOTikJ8MWneKJjiHpnU9uKs7TLZBEmbmHR1dgg/Orsq6JYTbl5JicOkNdS7MAYlxV7kvWy/+eWbKssyJkcps0nQ+XRPbfXjza3dHsJQ/iaOYFsnta8z30XI1ARmlDN7HfWqdCk/oit73O/pjGJOqo3ubLsJu+HPmpzEvpOosPsCSFBOvfDpy3mcQPgy1sA92QVGkSaJ7F2UUVn+WmMiCNixGcg/GeBG6Klwm6lQCMljZxZ6gsvWpUjcLV8CuSZ+FRc2RySLhnDIKhONZrhlohSqAcSnb768uFOZc6T1Lpc1jHVGBLMTIxhh7z2gxK6lvgNT1fBM8I8ZUgkdksDvVk5sRV0shDQtOXK4mJcR7zMaxrjlz5ixOU1GNFC8zUET8rETLlJeTWFw5a/VBbnVk0qU9COm0b9bdUGDuRxI+PATwugPutb+9Ldr7myF9eglxK/p7CwiBFp8/JfLxpEOKvWD+hXOR/LTowzndl7rgZ6i/tyK7+EtuokvONiTU85mPvLDhb/lHGktlw2oFme76y+OSfrHmJ3a2mxgSVCC0dvj7j3sf/4mMT+xZFdAzYaGUM40ANQnkX/vO0dv+aL2IiH7WkmPwBa8svmHe+eS4oT4w6l8GIKE7kW8muzIHifWl6IwcvMFWMOOMksz3SdURnUcltHHAv096qRQF7bsjp5DgFyzcWhATDr8vAiymQ+Zas7uc6oraTR/NIcZ6CPHhSbOT6g/0TQp8pTPLfQzxiHMVp1QTy2sBoRQvlpOJMoxK6fH8Lxr9VTNj0WTYQDlMS30+bs/mtKPQO5gpyNqAgKVgL4vDt0zDQs+1HH5VVb4jKmmyTAIF5tOh+M6XOvw/3mrUrGiA7dGdL4h3mbUPrp1sHw3kYmBr5Xs3dOE3hfoxQW3UGCUl32SD/4XTlsbMcgNAzyQhBrKoS+V1EMPMrwqAc9S0DOMouniC3WsudxdVUVNJV2PHsZnkez4MG4zgdrTkN/WCXnsxxIv2w==';const _IH='2d2a956b68be9117e962c6b87fe218e6787fc103554e028b93d23bc5ef6b4beb';let _src;

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
