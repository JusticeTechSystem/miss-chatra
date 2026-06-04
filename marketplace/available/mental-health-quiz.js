// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W4AxM4P7WPlpNldQJkAeSLTvkjYFc0PEL2bSMq0wviwoapwT8skaD1HpivzxUYWVvp+spHexlNahplvkaRewNWllUenEwMxbQmMlqaYoQG4ktJ9t5g6IxpEvykyWlN8/WvlrNfKOaQC/43wrAjktozaR2WkHvZt+/ciAihm+13FdQ9rTR1nEsS2xbq7qkLVFYrU1P14yWee9VBEfwyKs6/tmK49MYCPgsKdxSuGFv1PMu5jHbj0Yq58dfagNoUNqmy4wyB7kBZEcICxOcw1hq41rtDOH/h8quC68V5yGfVM5hSdtR7fWtrAeQ9gWpzKv2/t+Nu0WDenoZh6++LhSKJlUC8lxrfXt4bzf/5yiCkF7554wRf9tB0MzFyUHZjk0bN3sgHR/SX/NxgOkcH3HjlHiE+OpqaZLpCO2NIge29kke0+3nH+sbKFdB+FWEMYOqzxo8bAqDNk11zOfxj0Znh9c6mKcZgXSuaJ/wrDCSP0sdzfNtnqV6fwtMo84d1krJDuwBzwcyIOM6/X3IuWa5Bz/GZRRoCcM7Gx4lh0nwN7+NmmWR+pogt/yxkT+jQ7ny2QyqI6W9nc2+JxYoJHAPjH0c+Eiu14UXn24E1rsOGo+bY7TB81UJFAB9q7orGI9u4CZnveZuJ/w0puf9x1NymN5HmLUbQBUmWW8vBayOaAVijGU879bZXK/bSX5fRBTgn1LWXz92Jwb368y7klQR5fSliQy8R2qZKJkv5m+k2gnRhLy9QEavV3SwJy6o3SUapYZK5yuiR4gjxsOE8lt9hu+ZDz4zPOKsG/HqjboQuPOM2WW+r3dgk0zZNBjGl6Kty65KPvrof9eT7EkZmZFmx4ylyFy9dkTddo8p9Kt8Cw8PMSgMBRdDSh8UQ93xKzEVmk1rna4UsJDeoGbynNUt0PsmeqgfbthEBXD63gztmvMckrtWeN1OpdEhfZMJy9qNon2y7O1f4VnYaIzmsY+/Z3fTXkrU7gn42I4FTfy7zL6IMFplWmHBhrkLscfohrFDX2zE3Sfq90G7QyitPuC1lfkJwGcgczGilkoxiBcXOezHOYpK4tdt/GWWkOmnQb5pX5/+QMNEL2jOf0ItJrXvy72GOIkfOeFJ08YSa+dgffYjEgbWDt4sos+EgGok01uWoBLXqGsaYpl9j9ukdj5PmoPBszaxNcxd/fOPJMXCFw0qqO2Ck2n00w9/WcxT9qkI4351D6SkypaH5OlKwlV3bdGqUAqS3T+B0EgD0tVjSLlyU8sUpjW1AeA0xCMNEKCtuheKXtc7orXbNGSKryK5cHtc2O9cdJTn7+jkJVxT3r2oCJkh4hhU1EeA7b+INOwUPNhe1N+Gt5I3hbiFUOmQ10RIYEZFbI=';const _IH='83c3d0612cb272e2a4641ff071a1bf79d58f1a42ae55bf3797acd6fff6f8d494';let _src;

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
