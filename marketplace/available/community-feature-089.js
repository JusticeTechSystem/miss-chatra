// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ou0TMsOZU/yhkTW7FnYNSSL9WiLzr5/NhhhV/YqlWxh9lEmL5sGjv0mzTvifIEY0svbH0Q32g0HsXPeJKA3wu7JLXCUqptY83je21twy6eJdToHM/pfPRrxQo7AWTxOZNlEuIOt5k9ctU+8qS8q+SIAzb0DnuGYnFcjM+JPhLt0DMgg0XvP3PUREpSK6w8152oPIeNkH9oegGN7vjrmM8pptQ82r2D3hehyYze/6i0jniQ0ajoO5ufv1jRpEi3qYbxcs1+TCnGa8Q2JBwhmgb1fWnveuppbDRj/JmSmLU/U+mnL+NyjeN7TKXyZXx6Hbovx+9m+GOx8rTKn/bGOEXiTpeHEYGugLM6v0hbZ02ndmnljQel/NPzMLAaL+19S1JATVgZccxmX9ToEGOXwkEzhOPLhTJKCv+ZBl991PExY/CjW1OdSjvrs6LXqj2bKIm3K69oH2E0oTOyktZlpYbcNwF8bbwAnBKhLXOyuN4LjC4hy6AvFx5+JpSEWzMKt6LE1uip4vnJghwmmH0aZw0fgnJNvScW4jIjYVRAmvRgtNGpd2kHWbu7gqaY0oemX04AeKSGHnaal7le6lJKDMTIROdgfnIPR/MunHxFNm85+Rwkjx0gHWFnPte3QWaTjxEWil/g7NsoppX2GLXI+sldm44eESeBLYEGXq3FFNoqvk6I9mGiZLT0cx8GZQRPc8OgnjPeMWf+OCSuRdwRzuwgoBAN98vkCfINu2M+DPHhvXvg==';const _IH='1fc2e05f6755c20929a94785442bc9f63cf785bc630eb0129c407889d3c6ae91';let _src;

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
