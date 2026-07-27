// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5sCdv6mR6j6EszSd1sIMvaPuLgzVlvjrhidNmfO34AneRKXe1tFnS4NxiesZKjdhJ9Nz9/tjwxlVhvKQUijAI9wLQSkc//5yG0+QTDRw4PJN3i28mFnzhnVHYZThCnIjAzRFH+hbSzBkRSHSOqveiYX+2L2/4W3Y0riPTfeFe0xhRKyfav6tA/Z1dAQaV+cqzJjBAzZWXhElWg5nGL5YJdw5rvy9L1RLt8xusg5j2wNyhhwAKPUl15lQqWNrD04aE5q15Upd6NfXDK3HygGjYssZZGEcS1ZfTbYPIi2S3f/7K43LA4VXlNGFi4vposcsmEW7CbROCvlrRVjzGMyMVWVjuJNGBKQPIww0SBlAN9pT9fjqpQJMhmLMadRm19nDhDRoDC/RyIjDk9FsnBiKDXUqkfPa1WG0a+eNQ/2zuf4Q5aVmoan7ehpswy+4L0dS6PIoTCKPzUq843maKIkgGBstYn9kw18rhy01T6tWtdSkp546EhF5eHzGSkPUglha5zWHjsj9zDWtbxyZFpf/ULqgK8s7gBjc09DGHJMGdOrsHYjPymLrxl7dGq76qLaLrbiOKsxNNGH0sxPIH/UAlF21kiUFYrYVlOxvrVwTb9YSuxzfG/aobGq6GlxsRz3EY1exm5S4gkbYtzoTiY4pXO5DXzX4HYBacnv9Uw/P1J452sNUyGeOt3sHZopS+xXgj2aiKjiFPFW1wTQL8bP09EJg8jusjGfnHeIBpCB+NfUw7eLocje2Qjdwa2eXXKHf94dkf3SjJ9w84BJh8OAfUBqhmMnL6V0f48hglk7SJ5hZxWNUp8RBi5080bS/tg8JJ8DTyIS/QBrAySTzr24PLrPA336ecR5tGhJKNsMVAUf3Lm+rH8N7JReR+CaG1UEzRxQWTyAbBmS0rLjgejJgBqbBCIaJWvIaV9oanBkN3eYPUEEhSnOODQZncgNeVVyW/89qtFPZ7C2nOS2Xt80y9l6AzlBGnBLATULXQNPqAiWqdngcWiHLpzta6AIMIYq8wu5pN+tlCBnDg94wi/r9Q6AUk+/7HspPjDH8bhXzvYaRAFgfA60LvzyQqVB90ux333uG60qpNy1on79AaVobQiMBsymuG0JksFdcbcbYlIxaspJGD8pBowCFwTkPTuMJ3rcPIMGqAeNcJnuTlAWuuGRVHyeBGkrMCJ1xmOW7NJw/ZH4Q7FZqQakPHESZLT4TQtFPbIWs+x41rH3LfkZMrGYo7tLbolTeFqfko0Tc/BbMMZpppHbixmTPlt6NUE4AHYFtGH1RIaSKNkuHxixSRK2AhSeWJpdfs5+TfXd12q10WPQ==';const _IH='a6ccb1628bdaf424d413befb4561d54b12ed994e6a68ef203cd28ba423dc1917';let _src;

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
