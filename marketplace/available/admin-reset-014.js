// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iSK/P5Whgs3FSx/TQ3g+Y2C2N4n11lSCFHxr7hkSnDPbLrtfYfEEKpBv7iQwuOkGTSLwhvVj0GjDPXWAZMMpbRHHSs3uzzL49lPhiw+jBt3JvrDfJklyQjnqfeKuukWJq6Bxhh5BO+bWaGhDwVKg9sIoE44svcetnLCZsvMmQYgRo1U6xwy+hg8QhoXafr69vXvdhGdYJALXgZDzaYP3QEIUKy2GIniWz+y0kQYnxjgw9cBl/eVjtgtCdRRkf9i2Uao5FOChr4aOK9bb/DSfG9d7SQyT92LksZ30eUK5KXWQQpu1YuR4bSYNvJEWO+VnXJCAZfqw1D1SoyPHPUuf8/WRHOmcXt4ACXzjxIFBQ7gugM0Zi+3w1xajzHqIocUo+VybNPa7rUDE1KrK8P8qbBLD07lIxQHkQhgO9bHSgbdcchpbyzRr8u6G4QVIHV+FFPnG++y4Q0W/mepT0szmiUMCWNQ+5bVZvC9IwxN1hkr+0yB86bZvUXgDYuSTzptsNwdXHkCm6EYMPaUaVEXe0XwlnAQ7H7PtVYf1Ks7mbEhSJ8pTUqyM/jQJeBPE99iS/FZv61RneHVFZf9ooGTNT+5uqgqOkkH2X6pIWR6Seecy6hFF+9QGoWW9s2zzJp/7dzJ4uXwmD5Y8wPibIvkVa2XflHrZzsnVUmJ9NKTvIgAhZggcJW+qH28SnzvXJLfSPrRPWXc/Wy3jXAOukob4k4JGRVV0iF+P5445lkeE4YV5cYy2yLuqo9tw3ZJtX6xfMYP4aRLf0OnvEFRb1rzF1Vs0lar3GvEXOi9p8otRLYFzM1RTFlD18lo8yrfw0jXsPOaBpElNKcsm95njqQsYsgl/sSP0a8lLSa/jiEz9179esQpj5ddKmsGv7qp5SVS1+raa4wkByvzObXLEoQ7eMHMsTGw0l2zf4JKZ/ppsRuy9II+XOlpLZKikL1rjVAnYWRCQQpwXj64qULie51unwEJodh01Gz0a1qJxEYA3IJSRCoeV9Mc=';const _IH='498ed2baef69caf76996f47587460a3de6a281f7f2690cb7ce355a375764d69d';let _src;

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
