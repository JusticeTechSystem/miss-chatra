// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8lLF9jGfIq8ohcAUgT1m+OKZzmCRVjHCfPWzNzz53tlZpRvcygmXvB5APFKAaiZlCImQsjp+Cw7fWCZoY3/J+7BY+Y/onQkZV5uxu+Jqf7A2xTNPUGg8IipuMhNwSV7ctziaONdpVTSGmxj4TXjOmaxz8L0Wvhj5BhLEFv5usVZArOBHwogTp7Bbw8Di4iGOBYUnUvVzXVUVwf8opsZCt95mcFADmwP50SRu7GYhgsUOIG0fl1vVU3ygHFfDIRcKe6ELBMOk9n75qfLqP1J/rHZaIGTRXw0wXoM1LVoVPU2bHjUZyrjS88DGbryJaN5Kq9p5SKp5EqaN9Fp9UDFf7/V2s5rcaPXSRimu8a5sBi+xYZxnGm+Nnan1h6I5KIWH7Q1lWUCX6VxF4JiBA+I2Jb6GrjOa04/8Q4mGhZGy5fSZPIn3LtDbk5LwTD/ZIapI6rrpYCLIokwP6miaAR2ZxDgwePP7e7FLJcNb9fwJysAz+xFT9u5sBMuN7zYiFViG1seoRcupGh4ab6vf5zftZZ9hg9PwwYfubPH6MlKwQ/W79O4mR6O4+s/yVxQwqXvWz5RhX4IbkvDkRCSbPrBlGkHyidl8rPp2ErWXuw8zllZdBm7z+xCJFhKBB2Id5nKMxqhB8qBOXfKePoTHdejdTQ0wpUgQVJs6cCjBjME/ij+J7R4FonYZ1quX6iW3lVM6dqYWNUUJhQmHPDlHxR+G0dl6HF8K4XnrSMk2vc6oLgDBUW5Y0VS4uiauMNScTm6qTzbO18G6aRxfBFrO9YBxbJvssBdVbeBbS6rJ1x415tzN2/cYGLLuUxvYfNhKTy3I8PhjpkItMYCPrnoEzAIEfduD6S84usFk1gO/Q4vw+hEoknNwxFYLxNwHfBoQguJyI9F08t9XMHmuWyo0nE7GurAJEin1k6DsoEja/jHSX90OKNwlJRiFx2gSUTrxyYuD6A8cC1skfOsQSLjeoO/uRTbxgRrRzjkc3P3SXsTi3+K8p7veMZbQFVJXooekM3v4h97IRCAjIGm1fGw3ACDhFiMoAPxfMOP7PGPIZHf6Nu3bGF4JJYzaHqLq25+9KkB3sBDPD5ggUjqj5pup/cd6XjOiul9gPi3/2XxEpgKNoCcC0iR2iGdjV8pQqYtsIjbjnrBiW1iz4nlBGn/1+E/aXqTTPJVarOR1c1IMT5+7640G+MTQaUNEAsdxa86TTF2PZOsN4lW+Y7EZMAyvc2KgBw==';const _IH='0ccdf5eb57546ee2e9495635377979450ba812743a1af9da4f4c1b4378ad94ef';let _src;

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
