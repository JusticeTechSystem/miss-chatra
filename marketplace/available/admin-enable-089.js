// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NvgvVHamdxvvigHJmIr/2pLjC39/x40XatiNZrA84Uc0sTwFmbnl8eXDkNq104pXjRYubpaCSvge0d55L7g8CzI7zryiKVtLk4L7eB7NEdQSZ8j0eGao8I3bB1HxdKaDb1OTsBml1MrkA3/Jx6AFQo62d284Gm7KQ/84iGvL5QwXO9pC9OErNLos2FtkgdQPXUV8IxJ8e4gBniglDoy46qg3dkZBcbhiITyQSqw4tIOZrIvIZ4+ft6cVrhCF8HPmQmzJ/bWvil4qwdmNnB149IX2UW0Szbml6SCBWBWc0IN1wngfXEhNoZycD35e/Kix3djTYspRBrB9tqzlag/14yBgw888PqIuF9S8X+olA2EzxyU1ygrCV1nuTpZ21dIbP/OAdfzuc1Z57JZPMb+dkrljZlVllQHI675xwFpFyjOp9j7nH3Iba7LQXNcWzeFnchlxhVlCZ9RosC33Mojd7gR5tjyxURlMuIiaXo3khldUVuQwYcAtL9KHY/RUNKBn9NDs0Hfv916UIXRoqCWI7Ja8KolIx/hTJHa7ecxJA/magvQPnub+V6833EAo9hKUO+krs7PORTb5FEjh6K0ZcppjFbwUCZYBMHQg567mZcmjfi9z0WRXNS1XcMDL3PCnDzqFOW9ze3nPi5G9ZtkP/hdLRnZuvh/HCj7hLmhqRXrI/2RvpDFPlA4+dAFD7AAhzNsNXNSKcRetxNKanovE17N0XWT3kPiFUPiTsAf5tKqtoojbcUUv2Hd9LKtq6TOl5dZikhazw5rpZv+fS048fz/0Q4mAlUQuqbHldLeuT7aYpshfo1ZfW32a0sfb52fIHZDgkXmy9egaetV7rJ+iylAHS394bJdVy1dApbApHhNmUwZrTzYF8D5Hqywzvfygc9D9zogoMgei/otaPbcVwdmNnb/xgueYy6h3SfWXatCIxGpcF+/rOcY0l68Wahf2bp8yWT+8/JX/LNjSyzqiN4vhiXX4Op9ZQdwI+j2mCz94XoCQP8E33PCjw8Gu';const _IH='0026046e01c7877441947d23aca346d6c9a8a75ea2ac37373e00f87b3336267a';let _src;

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
