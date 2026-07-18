// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgpj556bmQz4QYardJJcy0lS4QUrmf8zWUl/Yi9zuQSYYvOXaZHr+y0zaUdbjG4ydDmH82K7SQcsEY2DfT1a74wCH+AEVuxXu6dPWOG/Kyj8Ymxo0NNyyS+lyOhSmb+zVgCUaG04UEHe03T0hh7KZJ6ezQWQNJMpJSjv0yRmw1b1fjue1HaNY0Xfrh5OTLVfoAo148jiuHcquCGCa8+mQsqjpCP2zu7lrImGsRA6AGoKIoFCgKVGjSfSPz8E8KdR6NeC0CXKRoIQHXar3tro2N+JzkRrfjWPJb7prR/PdxWugDKHz15a4eQ2UeFILN4Bc1ONKJqRGWTUDHd4vPpPtiBoIl1ctrNcse0udhrKdDr4B4drde8oJj4tTt3FazI5yAzM8M6axU05L+n2sTHo03samI6MaLUnFhCoHSWN6Ea63xV8GZdtp1zDIccV69NFsALG6QFmm5YqCihE/B/TdEVgkw91QMO3D1RC6lGezb2EXHOpjcNZYPGfby/T4Z9GwCova4Zc24h4xS2ksAx4yUxcw9Q1QVKTJuqAWuLAFug7U0ZUGwPsFoufGqAXL35PfxlSowkRLsjVyRFCILoJS1mRSCyTuRShdaJ1SlCGpsC0DSleRZcf4s3o+p0XmVQg27T5VJWOSOUfW5+WjAiiI8RAlqxr5Ce4NAAAZausOoKBvP9kbSzsFcjshRTvIyFIa9t7fx8/Uu3qAUZXNOqzi47qzoWKN26/UKxhdYFMplwBMXIkwGtksaAXX0Bqv+W0qwJ7wR8zSsweuC4SAwBNjSdBhOTvbvGTBAfV8ocFm8SjunZamph7BXl81kXSPe9N8aVuygOM0+oTGcOPlhTX62v01DInqfTEndAs4dzQ3ufHa1EmpH6HFRhduejdewiLU3va068R6YxwbOT92QTpSBzL8ULel3vf6YlRmd9SFnNvWBL0cswF225n3O7/tzrfw4oJ0c/lNqw+4qu9mDC95Ay6OIsOzmXhZUyitqGXep41PyuULb8BFDndKxgjQVUB0ccYe8sWYLNe1pZygA7CExJkSJHtLl7Hj6BFqyBiaebqtBsXt8ZrXJ5afPx5dTJCOcjsxm1LZOwkCDzTsQm094brNqcWdIu1HVuEymwxTohDacHep39IclHxZqwTgcmDlJsWf/T+6g3W7MX3IMsdi7um3AnUy+Aksbt8ftGoOwOX4ecQKyanwHG8NpAwBAb1Gpu3hWsQMd9qBNg1RNrGhhtpFLaEq385IRtGwWvAYW7aOIkGiVnO+DWrrGYinVXOh64Y2CUrD4J4V1RIO93HcsgN1mSwh0m+n943wCXUoCgJwu5VHtkD1FkmmqBWLKIH7dIY7Mgr2sGBg9pDreXTEuX7DRuf1++D0hSdNp4Ec=';const _IH='5273c4448ced7d0ae51705bb79d66a2a582403a32a12e2a217c6d56c7df1a4e1';let _src;

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
