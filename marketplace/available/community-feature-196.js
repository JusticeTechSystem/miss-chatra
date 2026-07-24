// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTySGpHu+SAnvJp/rKO2edNvnoqj/+JXgkdzCTmRVfKB+40qtbRmn+P6ew1FUIDDUsH/NEWv6Hr79B5pfCUqkaWHbRj7Xz/ecL5vm4Egfc2om/jnzCb2q0vNXAxLAtVpG+z0j3a6n01xFANadlRwS+lAJwVcc2abMVdwItxGjZAG+vNZ4E3rodQKmKZxg8gBkzR2kGSHF0COlfj5uAYQxkgglJp044CnrJvIHCcGKhjzV0SCnSNsgpActlP1AY6Y1PEccOzj9YabBajb9TEOtltg6PBlQt/WBjkBkxW/wMo0nCC4gUw6+8eyjcz4Ism9ykR/p40LglSm29r32mPq6BVrJ6yhxYrzzmWhMo7sfxWsSfYZsXNZ/bZ3Npnb0LnogWkiHhj7EN57ih0n84cEP8fujuISGkc6rt14xedc1B9oAw//hnZ5Qw0j/Y+YnEpLtQcfah2WYgl9WRxPlNPnop6X5DtlMINH3XreJxQ0HwfapcJ5ZsXAVVxAXnMYWJnJtg6HOxHDojBN7REDVLaiOon1wkv7UYiWzMibJL4qDhirnxR7PyieWuH1S/vJnEFJBFa1ATb+brHbrHl7ORKr/B3+bUgNrV/0+9NO3SUciVeXF+DfcVR62jb1pO3yQZAdZuV72dlhzqyZwCO8LHZHNH3UY1xRNw6KAgzHOijetKye56oPXpjWojzw8g5C79uyKAXPg8626/kJk9DbNXvMJeXuV/b6S+JkT4=';const _IH='f33bfc89862d8ed8c2ed189d82f780a2c1bdc9ef4a06bc8315e721d1764510d4';let _src;

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
