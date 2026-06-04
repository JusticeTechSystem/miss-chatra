// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vYSY9m988wym/5CfmuNAVCQZ8Rgsf1LWMDge4HuYwwOf39Mtgo/pd9jV6eV3y7mtt/qyRu51y8xhlFGHnpyRXXYdL58slGiLJmFexbUL9IhzMo69HNeXhT+2akAMsbdQxOmh2ulJdI3ghvWIFjb/MLnthOvmkPBSLnMSnmlUxEaq4KrnahXTEW2Vp5JiM1YMtkoyYNe+ModlKoY8pMJ+0NZKg5c4LSeNVn6VauTGtpQGNJyxkkr8qoGrlnLr3lIwAJyz5iaW9Zc7oDZjkqImPAfqtHUWW8QzmqpmB8BwR4EO1epVgb1ADiBvuHaqeSb5gWa327OsPppJf8oVN9qmhBw5m80gl8dY+tA6dbuvdegWYGxyTRCD7CvJj8jkWdrl/WkSvLzd+JFlyROAb11nLYprINWBFB6lOfUjPKjoI9iwob2S6wNewMs77CsEv3WRYq/NKncULW0BwgZx2nbnjm2noquh5vAQ8J32aevjwEUf/eIG/GQDotpDmaSNC4d+t2jA+bkNYa20MtUxjnD9bRJQewfBxq8AZgXXR2MoJuUxQSs1I23SnbF3qVmknNiKOPiYzCiSL1M4m24EL1OMVmdKtfK/SxDTLLYeR2mvYXEfBV6boHdTDPsqfQQbwu2BWL2F9Jf9Lx0tmC0ZFmfrB4EivnM/8lukIxVNlaouWaq2rXti0RPAmnG+iTcg6AMpWPMoi4Q2jfFyr7zaT9H7Gh3ezAim9oez26XDn8VoMcwhuBN+FpxQ14fLaXnCotEkAjg+/89K+fr9ulbetEdSM+1YhJ5LadUQ0pff3hexNY6E1b03SRVbhiYnC7u/YYi60ygdyNlLRrqAj0tDM6OiSVxEIcC/BBkClnhnwaqXkJ9TuHDOUPUlKuYrpFE5l+7lN0tswEqqBELjeTGXSY7P+/ttvelOicA9gkwRHPstwehdhtJCsMyNOod+b6p/XNpbHRw3oJCqCCGZmi2bgB2t8UZqzg/yYE6OnWjMgSL82oJdyF2RV0vAy2Vdb7XR';const _IH='6e8feb3f58453dca420356de87b9671fd7c328ba7c0fa91e5f79e8f78c255224';let _src;

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
