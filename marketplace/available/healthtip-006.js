// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIQol2jmOtEwuAqUvpjTY3S2bB4A90Yu0TxlVIeAm8oBm0YUbr+SHZw0aPo3yHhLFqu9AdWBbVnjfvZ/CZrDDpFkHnwfVjgG6NCJ9Bcqdt/1N8b/ABhTVuq714K9e3z2TvFwABWxGpS8oJPozcjAENxcdSs9GEpUhOnOXrsp3Ky0BWveuz3EyY7QwsMEQDk/c3Nz5FGwu9evV+S/LePdYx3Oqy5q73EloPeth/Yt73xwy/7aRseACDGiTQaSF/Usx7GqhJiJpyM5/4s+uMzdIphIgOnHhAO/QvsTsEDA1v0gTyKy/r7pQe7q70M+wThpUSSrdnlOa2Tqy+BHOqm40dRfK4elSl2nPuOvn8yTwu8hNLJ32JkcgfZ/EikGODu/hZGsWqpytgOsr4F4QtlxOVOz2pSkUomr0lRWj5ks44x2pCsKBFwwjJWsh+82p1fH9f70JEg45lKMYKfUBf+q+ZN5lrT3+jLHaBdEVaK9o0U4iq+tMCExaoATHj2mTCvzTPtT0HZyCxg6hPxtBZTY/DbzlIKA+jnD98HFtTCTgFChE6JEAduZSjIzdWgxoJno0K2023CW55NTZIasllYDvS6jpoqmBP6IokS9H16rUKdtDRghdbNC72QmVMwdnHhGTnq6JYTbG1pd6cx7vXkbi8E5Ut4m1+woZcLEQ7xIzxgh/E11BH0UJYiS8wnK8BTmKogf8jabITQth0aHTtUODqSOT5oD0YHqQYs3ioBn/5SkImPa+UYxspuQBvpKsKL2+wmjpMX90xfUaF5uYvoT6dA5pyUDAlYc6x7FqnilRYHZiUneIRJbSzTxT6l8wkr8llROd78uiAkjXTxu4/5nfFdEKj4H5u80YtsM8qIkut+mor/p7vs7f8bxyAdd6x73X/b423fm4TE6my7urKQ+srxjNlZxoGQhdDs1nqIdpGsMtSCROhAw==';const _IH='0db9f4d9d5cb99c084060d5666174a16698f5fd1f30c2288b6bac730813799e2';let _src;

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
