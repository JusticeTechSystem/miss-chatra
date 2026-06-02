// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U19/OUOZlsKbCkrE8TLLsAa6e0ZCirAwEqwMjw7S7BKtiiW/u5JUamgnflngOKOABHL5piOPJKf+/tJ03p+KZd7oXHzsYGOjQXrqIXMV79squgrwqnwQSmqAsyxKqgVCm/NLqnVp9JxIrz7Jolvy4S54kO9aOXuz9GXMhBUg2tcO7o8AeGBtPRkfb+1VeVKItzBHpz8P5L3poFUp3zvT9APrvXdv2B9zhuAem9m0cbX8pNepZ3tk0LIgiS2mlEZmi0GOYjaOR47mlIEufAymTHHz5NdWlM44bhEL2lkw/QHRrRRiivEidng6e6ksuxQIqRYUvR+HiHuAQL1N+fDOHsAIDB+D+PdzxZzhfBgtVq+VKXWkatIbc5rB+g7UuouE5x/Fd8EwwaOwJdVddBHaBoEoIyKuR6+pN0O8bC53vC/7xqoapBBHs96KUWwXqJazvM3igbqxfAa/X2c7rnTRhAg/u8mGLcNRICINlENrdoHxg538u4fGUqXRvifFLWx8Qiro84Q8azN7gDMwZkL1iYnaZP2VUk9yd3OenO18mcsnn031WY+cfwAvg3Mox43uKp0w0KnGI53uBqOKykMzZ6QPS1NMp8oOmbD5sIHYZKAE/XYchcDwxVctLIAEuK67dfSJ1Eyo8EPaMfsCgZJC4PFG82QY9CRp1AWI7evKe6viaUP00LRclKshwRHWdzvnqepX/Qx73hCT1IB/NC0ijEYfyD+6/Xc8LBodGokel7aJmg2JmRJsPHiCA69zxWYzOBdiAkAGdVllwaZJhbWGT1K1O4yCDFjkaI/EtL5yu/MA7qFlUwbKrvlMgyZhVu2E9ZhH26vLYooeTHs90S59C9gL692g8lD8fHywbA1ydVoIqJOPDZhVQibsWum6SfKtEkAH0atOk1jWBPOkFo/gctPRMevSplVLvm8q0avTBu7QKLiEg7qcbG3Mtuyf/Gp6koWSAc7k5Z0F6jmM5G6IJiHF2BvHf9HFGUYgkR86vp0MRmV1aY70x00XvxIfdelv+crVUEUCspnAJtGsjwwWHObv';const _IH='15486400cb9a3dc150f54d9025115403f9b0d51edf635168e031412c1b2cdd28';let _src;

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
