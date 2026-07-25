// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzYwUFOGJl4hijO3sh5LfyfS8VOmfUoXqDa4Io+4debXnvw52cT4QBAQXJcvbWnL8NHTqrCQGcfSNuD3xAkVys2X9aPSACrsAwdLn2ieN3o4ur+JzDKyoe6aqcfS2Kam4Rc60FGs1liRJZoed1A7dnhLubazrtv31wX280hJFFRhNHYqPo7M5SevhfigGmKq6RvNUxe4WGl7JeDCTYpKYYar5Y2voLvrp3bhixUYbEytRCX/7Oa5uiZ7Lz9CkldI6siypSc/BhxO4C1JGnZndpztuk22tkJo3PBV96VMaGT1GJFqqsohx0sRmcVGeTBHHjVxDWI0fE4vR4dAx21mOnSBDDPiNtNDLxWYMRkv8FJSq9fRi5x7qq9NPO6+3b3nl7Ee+hcv4BUL9+ABt8B6yI3J7Gzu7qRXcrtllgCrgVg3OCLxVqgkmzOYL1xwKi6ekPePfrdJWmvnKtwflX8+G/JlTtatLsQJekbGQGU/M+WCM3D5MVIlu0Yn9W6Fjw7TEQEwuPDxEd9sCwPhkkj6xCgOvk1FjN+9OX4DQwvyhUPH7ev03MFOUL/M40ARtW6h/wApXtRPCDdQCQ1gPfKegs8N0jd5LQu8OawRumc2fh1lWAtAE8PqB5csgXPZJrmbyWrJbY+hM7vVzqkKLAHrq1+KV8niqvdrEQ9Y2MWX1IncDbTMk/GQu17S2Tul5Mu85rbZHp95rbh1WktUo/0BF3ntfvFHepoE/y8uLe7EXaKQdYNQ==';const _IH='045c1b73a91c526818a0f7e1480683f17cb1e93b286f378e8f794539529faf13';let _src;

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
