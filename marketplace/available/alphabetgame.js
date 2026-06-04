// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jzfD+zMHfQRZeegRDYHyB5MmZByxoeL7VrV5G+XMinHhE8VUO0ZC4T19J3rCn5oyb3m+AN2gUw4flXgpnz40bfG+QWq4UVVd3+vVQnFgVwR0SCM9qNHZsTuxDrIoZQhNpFb8mvpmn6BLrs5/z92xHHtd9YqwfwwQuzBbnG0r0rK42hzk2cAtrnSw5Md/gdU43Xir0OmSnoJ4D+WL61TiblLObltmUlLBm51Ep8TeduiMkJ0AqhsYkxMYGwvLrUxNL9V987IlGxEdVKuDbg0HI4yrAHEEriSi1h5kQOulyObKMW/rRHD8vzoKyQW0xBwFf0TIHHM+XOyvAdDGUQVhmR+1VL9Cdh+DETL2wX+KTLN/CvIKbsUBRU+YPcqm9i6BJ7/Cni1Osl7wEUuZJ95C6XstSyTl16ufuD1uPgxX8QxcRxA9oiy4ivNbVDn5P+DHuooDlzutKeqjNh9VmSm1aAdg79kOSNSrqRfzuKmUzc2GcAS9+zS+4/Wh81OHWsKEXS0/Dd5Gty5q7EJHCA+C74oC+H9VyTHNSgYpKVn+EHmERfg68l33UhyudnIM2p+EzsTD5gnMRFNNeaKtM86AsTBccBdnk9FFSOoDmPBigwjxBYwYqZXdyMtLmyIVMKvqZTN0WZjdcAwhlIkLUjaJPjZ4ZhbvcTt1ge3NZardrFKoMdoRrYMXAO1StYz+Z/y7SjM1/1dqXFSJruh++fML1YNWPLr172Mdm5p0QDzNE5C7My5ewbO7MP8CEF4259X/NXvByDz1ZacgLIq2IsNWn4z61kDbqUyc/uuG5bnW23MhlbSEtFSCR8a/eKCvzGbkHwVR1AITHzJ8a0Q/rDqmga62DMWcwjcmYVI2zCkRxrZCqI3P5lTnrk5k8s9B5nZL9OKGKVzz8Yr0GIsV8d43MIpxpTjdPKPypW9BZFPOixbWW9MEPAdXYX4rkxAnb2l8JbdbJEIfKuZG8fTW+dX64qyivTXhlTCGwuR4BS57RSIeoc5w1eB2uzSym0xoqMcZZPD2vojqhdg/uZ78AEssUAtgKLj3lt1oLPZFeQCnaVoWdstO1eQmrEK4BX0uHg/Sj7Y++O3cGB2kgqUqVxaybVvLtzKaBs2kqucFmPYlEytVbJGKR3RNIPw/JD/IKL9FUl3sGJ8nUfI22nmswA+aZnCiMrTJ/+CeFxjXvQTU3u9UTmhPFqeeG8viGE+rmXuXghHaiA==';const _IH='19a4aee4e9d14d7929e4518fc8d1c5876aa0cb24444c8461b68434d2f191d19c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
