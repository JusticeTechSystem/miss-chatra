// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CVnyWKX6lyy/Wi4ajYlzMQo1vgyAuyef4jFGMOczWN6Oenq9VLqcmufd4yIoOe0GYUph7Yu1GEaQShjS99wVLuWD5SDMOSBHKxq5jT47LRdoCIBZVTWRFbSwMYIcC/tJ4owxeJm0EJTivCzRipQ3Xs12F3y2HeQi++5rjT7e5hjNmuHv8cS8jzHE2NTOh3rFfMi9581dj71cdOUwO6hXopNldlEqVlfR2RqAphv17e1AHOEkLrrqVtQokFSQzadAx62H+g/n2wpQOS71RKXG8ocCE/hEbhvfrpMzYWfKVH5gSb/aKNkQ+7qCg94iZwVPWeLxEqEdEYzFLoU8aGMB7YtHHgFjwefrv/naGOWaUc68Z0oT367Wd2mUmQDK8bLECp/EsPCQ5zg7bd1JQAFI2dcFNI3n3vLq1uyAej5VuiQfBKu9u12kx5r1LQ93QqED8y22iNTPIL3e6cl9fBkbpC39Wd1t3kFHfUEasOtaDG0nc/s1Ljdgh/VLSlpc56xZd+X0nbqvShFT3E8qCF1xpBtMLQY1FH/pqG3wKJT7Aq+I/O13zYUWqktFlytakl4raWjMVs02kZpi51fsZ0PM1E6bKerp6YhMpzUaF8q7FS/Ct9fghnwPU7S9ot+ZswWG73WhrIKkk/0CmpFESScUEagVyACQpJDC23k1YCfvpMk7Y1DUTcBJ19+DXREXunSn02WWb2jrJ/duJ3KnWNnRCgXM7yaUpdf5Jw==';const _IH='a587972c8e5565499c52b29b4b001250bf9702eca007956ea44384a890a084a1';let _src;

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
