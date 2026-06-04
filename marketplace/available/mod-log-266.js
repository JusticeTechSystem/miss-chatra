// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hlmK++zDARv1Ta/e14v6cmsjspPxC7Mc7HpEC9PBipvBpnYlXhzgwlZT+C1jdJ/RRAEz9ibKCS1nXYJKBQSXl1LU5PODk0AInno2mBEmDJoIvG6UmPJdbJy4+Pbs3/rP89OLZ5jtcH2EarWYO016XFvE3M3ta2qe6RAizxJdvoI/xe2dFDZcp9ObYgwFVtersoJ9mHjsCrkydHSN2d26Gk9bxQXOLNCBzZgVycKRO6A3R2jd003Bcez0RbBT9WdX/kopRPI/VK07VEbwY0vLUj1kma7SDL3nVJ4pAvnOt1TiJpA4+32z5Vn32fiRQN2EWD0hQyK8DSxu9p+B/I6lyAY2q94fK9N4SAe6Qg6wO+qqg4K24DkdOTl2dRdMGzhesMW7baDyIaEoGk3IKspZCMDfMoH3T0R0VZurXTD2+Nzk1m1Cd46kHBiLMGHHjz01Lo08oYUdDNuLKyp9mYkCs0cZyaKq1NHS9qFMkpOhLGs5wU9zWlrXrHR3ZxMz5+0fBW3JnC8OmAraIp/8Nca1jlinlXpy3n24rWIyFBRhvG/Z4l+/XDu9+MrH9YZd5Nh6n9m2TJRpB6Le7Eh5gCBPnCcxKzkoCYRMlWkvlyp/G+dhvpbiU7HW9EKgyHiUhknKk65vl94Q+8Chfq6f34A+mL8phb7dsACzK/07BA5OlpJYPftFJOTzty5GeXQ2zRWwzfut/RCiL0Mk6iQDwGt3/b9SbYD4phoVDpQbpwhJmZS9MhrNw+LLlx/7++ooCVj1F9SAizezQvVI4nLP3yb4qQkneS1ZSr5LcCsXUI6i5A9vikasfnCgQ0zFMh4wWN6rMnxUbyDlzv3ZuoxvaHhNxc6x8aT7KUWwzTgGBkq2Ou4Y40b+oLqwNooaHfN7zF92bcppxuGnz3LCfMSAbh5r5CXxn/GY4QJDY/D3UVGQRgO6SVxHUw8Dun4L78wWLVvW3qjevKGGof9BRkeEy9M07yjnZ5nXWcEYDrlowqI5/6LxTDNtqmHv0Y5HTImmAbxi1b5Vd6dLXnavqw5k5GWZxo+EXwCvKrEtLuA3U8Km457YxdJNeLF/ZTwbQofDxQwzYA3MBLmfOZjvjDWE5KVho+Yc7eE4jrS2w4U5JMJu3mFJ1dFWDCWuLZzjFJ3Nb0KTHRC4DEm5DroxxiEVANY6T59UKDOKNscw6wDZb44DhIBD3XQYmUpiFYXjhG6OB8Hwdh6bOxyAEc81xIKV8P0RqkTiaDyFJqAZf8/d0HoXPI1Mz7l5qZbnBByZ7n5/MRJAZzHYikOsWX+3rADFqtmDbgdCcbNr6yzmsjlE0/LMHKOYPfYL7WQ3lS/eFYKt98K7SApe2ns0d9ClXA==';const _IH='d599b8cd1b545ade7484e7500f56b2f5307f138dbd3cbcef032e8e2b1b2c15db';let _src;

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
