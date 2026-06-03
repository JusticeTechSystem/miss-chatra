// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='buokJJXBhYku85Q9PW4uDoponqfqV0h5KL+OoYCSvvkUeIRA5miZJNQuyc5yZMTa05S3Q265+ImlZeewn3qcUE9TbumrHGUn9PD/1fP1q7KLg89/wXSxdQr2d8oddulTcB1rjcIsVTOc0XBsg9j7dFHUYOE9QGpro6RmLZI3Gsl6HZqjuFdPVH+3eE9+LZkq1qnR/WVWf4iehnrh/AgSk9YYoipStwTQKVSdbUex6uQc4sJ7MOOTdLdamovxcsij91Km7q1xQYpI4Spwg9oqjqDAGpE2kWOfXBWjQfLc6+9Md11H4rJRz8+OmbhvSrFIvkrm7h/pTpgY5ltHhRc75DE1y3zAJOUZJHsuFXsosHr6QMAhpF/+4SNEw1dMP6PFuKMf/vS/CkBgjArZ9d80Op70ZkZNB5sGnv/NsFG8dn7vlCbs/MxpOIpUZ/IE1BH4ElIjwdZlZ/2obVZDLMkpCpLqxJdQoZdS8RcPkRgIY+sIrBqDoI9vlJlBNF4xCJOWy3YrLCZrG0IXqYeWYLXDi2URySfU4OwpJc8sacfZlqbwr/c+9R0h0xqNKTcataxIYJtgkslLY1OIiJtPJcCBJuWgY3hRYh+DYa5Zn/fTX+k/+fwBNuJvXbay6pK6K06JdRzN2+gTHkQ+Wt3secEVZHT9MVTuzKUSlHCXDu0gBq7uiKBeN4GtbkXWsNFKt9O/qkUZQ51/RAdvkk/n6Hr4bzSBmmkAlKf/8E7ibmWnCCw1tcbxLGNI1qco3DCx30GDQRbAhcyvk2dxYCtFvv86tiosG7Be7sXbAIGgDL1b27zG9sEPtqfno8zxmR3K5JCN3czJr7BqE3YYgzuCrn1E5HFLzlv7JGJ+P+RbymLLYmpmC3VFGfJmyXAb0Y/j4MC5MW79MsdGLkJ+Hw3D1ZmSSWQkCkC7zBO7yeEieA/Fn6bUt3ewvfcIwoc14k9YDdpeITsYLtLWz9Qj6rRSdL+UqtAWQce7huSj/94luS3fkwJdvOtZUmMYbjEFeOktcyYUWw==';const _IH='d94de647b92637dd3588a86722b07c7a97704ac2d9f1b4d2397f62f347636a1f';let _src;

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
