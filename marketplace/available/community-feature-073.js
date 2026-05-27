// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KmL3neZQpK7uFGgKrvJwaFaZAgMtQxHZ0qOfXAkDdb11rTSnCZ5jhz9Z6P7UtSvSFLLfVBwvG9qJedz+0zQpxPBVk1UhqV5wXA3kQ0knQs9KN8aEyiQblTRDZDs1V6GMKq8ihOklOLhfDL8wCJCl16o763XKjvR+eFXlV+LJcX7V648vLPNx/f4nAVKy8UU8/zDT3snhE1TK7ab1f8anfdxN67NQwfY1vRTjcq0bQqziJoidr4y3BkT4yb/M4IAXoh0/wgVJtJEtk+afasE4dLTnDa591kykoMttTTBFXnr0qpWL6H6ZYNhCtnnTt2HTFl1nBJ7PpMMTjotzrH+ny4Jh4sQIRrQAZ0UDKlTq+KvcoUZj9OIX8NK/WCMYStbroBKz7TRuMEGLgw5d70DUq6xOhAFD1tg6kF+r+3/g1e5M5LZCrJZC7t+LZDjuahhSANTnkie+/fvXO7Rqh11QDDHNvvUmAbV2lIV3AG4FseSVvhOR2gNS0IJGYIRlurOq3sx+w9aqRqyQKsLlYFXgIkgtWOw2UD2md5VLGM/GfZzSazNQIb0wj55O8cYwpObmNOX9zUimgYja8jsgb3mOWi9ofZHbqgLnvjUjuExMmMzoR3i88I1+3ynHU9Cd9cPhp4+xec41mhlZK8X9GHubmpy4qcJ4BmmCJDECjIUnPvM36YCXx9XwssOzcLEOGzvMTq9wBNw5Z4GqAVDb3kPFqkaLgzo5xluogA==';const _IH='fe986072e5bc42412e80cff694d44449ce04c7cf33dee2e624a0424af473ec49';let _src;

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
