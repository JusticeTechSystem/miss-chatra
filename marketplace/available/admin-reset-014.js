// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZtDcIysXYmg4ZGGTiDDp+pnIfiHG/3IfFOcNLCf38c80ujtS+ba7w+MvS5V+6jWZWYmH9P31maAPm1C9EgytxK2KJGHR4H4bsWzwzwkdM4AljpM+sgFsTQ6ktYGdhdJ9CjifjKZI85xvIJ7Z8b0gY8ZC8ZjiK9klQt3UmtT5VmmE11biqsnPrEkw0IjGQ93Ex58n7Bu/3P9DLS3YqK91JxsA9nOY1BtOZbvtKzZaxUFnG3btE+ssRvGdHCRDzMbxNI4sL2xYraL4Hu8l4BXO0vKfWVMWwvo5up1r3prZFE0F/NKM5rNBoIsyuoRYgcagsAi8jaaf8ONB1SBVNztU3KH9463XKbRncZC+M7tJ/faicolpFq+hNboPJOPr5oUKIz6xMZXrXXm+iT3THD3HrYduyQhtbjzDPKQnjR+zHfGSl3/IBlHjuyqbpT4HEVRF/8DBGQ9IDicswBEyiCylzgK6X+8ytcrUs0aIdfch3xcscOKPpxMvHJm9T5HkLSuJzrfnlIHjLTKOdp5xOXgJCb74WrruK9hqkHbzD/1T8BJIqUr+D7t08q6y3JAqB6k9O0sGyZUf+0S4sOqAVd7H/UYXaCjPY/Fu4TLjG4OU3l09EpQYNOPdSCYEaONaLO9YDsHqD/j+2ro9Kx4UNTZWYDn26eGi3u6LjUcQI25f2syAeX5bzN/p0YkZhpGtl7WLUjVHvHbNZm1m5Foai9e10c9j93x5LgCIkf9dmrNTAKg6wnal6RFPIWxYRgqL2GGmlg09OSV0qNJVSXXyWIvi3OCU1gsZ0KVgWz/pu5HkZ5OTetKoo2W3gdXMLwjSWby5n5NQ/+mW2OnAlnSEEkWdaVEzbdq9w3gxk1fHJG6dbn9+WJAAh9WvPjQDO7UfkKBnNHQSFyEdTQmACgbJ+85+jZ5IpRsOvWxmTauP2SJmbVKtQrXKbA3Gwe+NBfU7KFcKqh3SjunZ96XUqI2Du+kIYFjA/Hkrnfl5RxU9EJAfJR/bDZluPhc=';const _IH='b477af653f0003b9336d1dfd855e6abd8185b598bd4dd471359c446c8050381b';let _src;

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
