// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0XWzh9wEI39GZVlHq517JnmTeJBBQ/6KshiLEFgf0f8gAoZb9XE80LIsOr1rf4kJjg8MkC+XRr58gRWKi2rxiCnWDXxbUknDfgQcJVi6/4fhi09FU74b78WTGefb+kI0QcNQhsm7Wu6jryclPm/L8UPfUEd6gPp7g+hLv4keNqLRN+WGec3OiHaiQwzW2EaGH/ucvb0DiGUYICSjMBYiwpAE60Nww59dHsfdDRp68zAxncjC8kcn7x9TlPWsDK3+WbqimWC1ZoRQDgpOEFx0opgFB/hcak18yNT+KZibBZyzdu1JM8Scw5mgV03K2wnNFWNE23xY8Uji7my7udsNp+fUS8ebSQMAe9SX2UlAGlXqOzs7yaU4yuq+ESEFnZxjww/nfrdsS/annBCMje3QhoUDTypY/TQzmq9JprnfMDcybaIn9j6/c5hX9u6RMHovOdSOokDqw+hnOYsr7a9p/xTA2jZjy15UKKN+86+rOh5HF/FenPrlbmwhqYRsulvjl4mmwVhp11dgh4/D7d1S/50cJ5RJd7htBzWwRK/Tevd7W62tR6hZu2/UybCW54asIrMwtZYptCbMdJ8fly6IAm3w9SZkMtADZjaZtR6m+N+6S6OmFNjVq2CTNwZ27+9BwUpp7T+ZKDc03CBczklkzSS1EgPTORjnlo24OOzcHDfcWbyeCwn1At0ffvkIr8mO0mOeH4D5mHoHMicvYMMoyRRooel4LZZ0wHjzMWGI2Qwd+gkajtqsu0ZdK0WK2brCecJ9+TaXwqWodVoNiJ1/0/8LWQpqIwA8FjJ+Yx1oj1Lp3xW63HM3rosJNiVODWKMkfOGVu/io7Ij9dMfcIv6hKApNwvr6zQLVSyj18E4ihexwxkJXKaLL3c2Vb2cnaM+JobLeyrMCzYUZNjm7t9UIuhWZycYg4PMgJCyxriyZLv9+zjpGHXgnJShh+VarWdSEFF2oRZD+Fh9NO5w4DKaWo68rLnodmr4gAuu17gouUnCOnxKtKrgAdr9y2l0R6rfAxF3K1HYTgQ==';const _IH='9702e35bd11c212f620eb502801d982aad79bcc3ab47a9c605f104324c4334d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
