// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FNJ/GfztLjBu/PBsu4hRrAd+MKvhiB6flBtJ8sKpMTmqn5GXJirhR0wU+P56XGxlI+bCWvvwrEbpkX6VFZrxzMHDFvZqTmJ8vZgRpfFH6Adz4QKJtFyIFWry2pCdiiiGqRwRR1YYtRZPAkg//XV/5opbTXsN2QvhRCO/85zlEDQqNjGWy3AGujhmsy+bODBf0tZFZj5rRmKQOFT6WM4HVkjjH9vMJcYLFFB+wEcR0gyYdC/BHPH4ASor3UF5XKqsmBPBEUYa1n37lTKc2KzHnwn8R8SqNjDQX3HhSaTSkpuUKzs/onmvgrC5cCgXxwfo3lYoSSHbsOtZTaxouEJu7ftLGiIL2zANgDQQ5VjUjLmonvHyJVmWtNjznhTNsK1g6DrSUvfVQxClU0R9cbfGdLhM0cRjPdCayDv6owwWSyLsc0eA+7taRCq9gVRrfMJulsiqqDIb6jdFBQ9pke5ndX1cLv5XFuQ9C3fJNStRumIorliX1rsnOAbBKg4FHTDorkINZfTLEOh8rcesOyAtZUXuCLAMowQmlxx4yB3sPRkqQyLYKeSqoNdmiMGIUO8tDTjY/GVlDvuTcTjJ21rtC8/19pa9aIwa1D1eIV6FT0PRJ0t7ttAMK0Y3lyseLNc4AzgKVrwa26WFlhyAquexnJyqVg+fyakVkmkI7G79JnZFxfn/0Oxtcx/CekLUBCkC3HTOE+T3nmJHlFhReL5qkJDbHgJNjU/Ju1WK7Y+iYEEUJf4S5CtKWP9UoI0kQWZgOoObloyIggsRWrtG4P86ejrG1cihhDIYozHL/Q2K/Z0VYr9ahauAZXCuy7iEgpdsbaVUd8BGbWR/UEkZNmas+rJkPpu3cvojRauiFxuJPZWQ8H88wK0TQHZCSvWqfixXG6YySHtXZCEPFU3IeIHRe3FNtpvoB+gRsGbvO5ax9STH77E7RzwAkO+5I9CzS9eTHMqxd5QKt6R33RICH9aIKPEGVU+ITJg5V4w2yDEqgmH4AAc=';const _IH='edaf1d4e83b129a7f35233e89ff646b7251772200ca7540bfa61c8616744e2dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
