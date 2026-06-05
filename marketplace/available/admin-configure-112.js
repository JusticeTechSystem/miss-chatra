// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ENnhB9UOn3MiwZ2nH3rO5uCInuUOQqjf5KF43ZAsant6Ec13tpBIiFa9UzFrUOO6e6fynZMndraiL2bqD9Mj2cPuETBbzUr/ihCrAPFqmVfP2vZs9Jxy85uEiMjwuKqI2qJUOyXsvP0l0+fl9aa3sOJf9EjLW6lyvsGaIA0DawsymKctr6akUW1WdEdFnRGTjUAtjPps1J5+XTjI/HKluQ4Pi93LFYlQ5WQXokobylpNyux9e4zhlq7ohZfiuq3O3UMVi41SiQMFDCcjwe1If5PNQxgO7fK/Mb/MhNvU+l1ZFH9M1bq8XbAoPiE0r+nXmJhjLXvnKei9U21K8aIUU5a7m9SIa16LsO61EKLZv1n183DtNMy2f/+D/+fAjElj6iYvQYLrvte3k3aetq9XxCnNz+IJwC5m11590CYL667G36GY17qkhoj92GaHmf0ENNVGIHBCTtCa8p0pNlSzVyduQsR+9L+uBaPWgHGhCAG2VTa6/lryCS2rKPRaH0ZFmY/mMIaIjLZmEWg7l1uvooN6P/zTQA3nBLYRx/ZRkROPk3qKUDPnQwQfia4Uf1YaSnIFJ8w7StNMByGg5BRaGOg7jfYEFodDe6LvtVo14KWq9sJDJZBSzUAGch+3fXisqapjUEM7A6OIEtYHm7P3DkMaQfSHUQyZYKXTZyR6RUBmHoW91FqdbJ1s9R5YiXoGKe3FfQYwB9BIpNJZbwtsMGzSFfBsCM9CAXMjwo3nKlyAEqgmybygtyNuc6gzYlaY1S/P9boKVC3J2O5tysJztloap7HHBwFqZjpZFUznOn7aXq4T+U64n/cAdyo297h8BpUoxndk39Y0fUAlI1Y84VNqgyoXX5NWmU0irUJMm6YmYtjTz5MLajwZtxlY0rFTjrF8PiFJ2+cdtkqcAvdXEQLypVQ851WcQsCSJshvtmz9F0y25qN5+iIQEg9x8o3rU90Pofdx+5IJxpfcdLcBUJyNnPsjUPRbWqDaMpaF2EVxj5mXqzhF0fY7bXax/yDb8RIMPzTjBaR9US/Q7h5LdvnTo+UVHw==';const _IH='d509caa2251145b98a2de915d0c7192236f9480e2f6a30524cdf9dbf22d60225';let _src;

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
