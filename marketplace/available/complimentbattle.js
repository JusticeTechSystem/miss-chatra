// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n+LA/4sEi9CAi5mKYp6e8yxELm+uYY4Ams4XrE52zEtRZ03dsUapDBh97JRFyXLglTh82CxM8ai7PRiiWctLslvbNoQxCntt3YxDQ24X+lpykHU/+jFMIKJQQuI8tVl6S+KZT3AIaaL7DLTXV8BaVQyfmVXYuhO6I8fb5i3d0b5oT1AkJaz7oWUIJsGsuwa9nUw55sc3u8nbzuV7pAOYisIYhtRIgpLSlce2p6PopSljTT7qR8in+soOZrWO4xEQa32BGe1LscTWfpD5ntPXNF1aEnwgedtHGzdeu/0V6vjcxoyfVeekZgin0/yzx6pM2KnecIxwIWWShY+pD/ZVsBVS3CtDfENY+0LwX5SiyqX4e8Dse4Wotq33qMjdQ2hAXWw+fRL1MaVJxiiwoasVIcF6BSt14tLIfOead6/CJdfJIGlPPyzoO2nZ54mUMWuBWuuIXjT5coQLOQTSiQkuQKvJY/NSpBns0PrINp4WfN6FB0I9+fo29IiD+rD3hAZE/r+C+VPVhkFQ2WNkI1NGbyjpzdVD4jXI+aHiLERCk7db3D6xzjRo8e4VYLfRlV3F4tODpCVLfZ+9zLyjhhjTh5+iu6Ki3m17zGP2wIjfkU2YzMAgoxfCrGM3DaL8COwcgPlgxol1w2+V23nYn6hSYSagspOTXZj6Wh19qQ+b7W9YeRDiAPWkmRh4IhILj0BeqhtnV/pUGnZUDJF3oICCLQZOExf9x4rAjdXx5sDvbG0xd8yW9RndCfvQcO9+UW7Z7ZYB0o6fdqrLS8Jr+ZSzN6LhQ60303/6LNMTqOzynM9O6/vtRg3tHW0jNo1Rr80j/PHhD6Ce1gJK57IYyUjkm0iCpEq09vMrR5B8NUDcKXmCBmaul3iwtBdghjFVe2buR/hZRG+axdr6+xjJy6QxR6kWo2mpqT0YidizSfy+IpAEkXHfKUAgCRLx4KzfmXSzk1lbLl9VQM6oiu2M7J9YSkC3HHNAq9MSsz38qa2v8QDIcm4uCYiERzBU6Cru5JSeu+pU/Omr/seALd0tFewfXjBKlxR3yf7G+UjF3e/ph8OyWg5PGTUzWZ/MC8d9+aF8ca7J8wzQtdDzoGIODEduAo9r8K1We7a7MBPvnU2NfnZ5FSd78VVwmkDZCxg6MBOFnV3YGsuO6kOBVTyGK11kmmSlZTh23rPduzuBwxgJXsNn0oedP1Xdvf8fcvCJP6OBfgY4kiNz5FAHSxh6b4Li6Rey6e1kG9k=';const _IH='01c536c65d4e55c0f5a7eaaa9d2331b7cfddc716bc7f8be0300bda1aa7b6fa8f';let _src;

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
