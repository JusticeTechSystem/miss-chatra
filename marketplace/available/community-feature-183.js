// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hIBCcy1MlpKSsoErRR87Ab5XuPAS2wZ9y5ryLXNV+p/m+NZemLkJvONo6K5OgOmY8CtEeqM8sOplPkuhYuWnNL0UG+elevIwMs+5BO7xiiqvsflTrN8oaMQtkLnyAtqZSAm4FlyZ76sTBza63Ljjr1oHqu8Gaqg6m7k75moXhUJBb+z8WpGS09lRmBaNoN5YG8wr/evXCRFVS6c7pnSjBUnOd8xCHf4vANMHpXkbJunY/DfZtyKXnqRwUnc3G7pvyzSdY7nO4nK/xlfLpHxUT0bq2uz9cWWhmCLreHBJ137a27HxUPVeykjIujswe21hhctiubPmCIBZS8XdGBYlRlwQ6Y+9McNzF7wut0nnC9Ei2J9OXjXt+/efXwje4mwdZZcToAZCJC+POw/x/JiqWu5ZY5IxtXuq6GjCyol1TC7lNk60YQzC1If4Fo7EWYb2wuf7jCsXJCxiNdIyB1adqfYleF2ZPfJuMH2qYORx0af1PC9xukGNh9MjEr7H3irhK1PDuOep7M+OW5wTC+8p5icl8294+XU7j7bZTbzF2zykaI2tfBton7/qiRK+HC7Riy0bsbLbPCWEHOY9M9vu+1JJQWkpsy/9CqmDe2oBTavBigkC6qmDfehTshTNenvjFR/lTLrSJ5gkMNVpnk+AKbcx8L9bC+28hWYIjWcT5XXVB9Y7efGzG9JnMYF2AC+ddAzFSUWkNZLmeZB02AyQQqSgO6Rm+XaQYhaWQfA=';const _IH='a0bf152a3ebf7cf62583ec4cde3d97e12ae4948cd2c37517671f851ae81ee431';let _src;

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
