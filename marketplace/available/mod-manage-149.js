// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCqP9N3b1SAIBGCOQ4imi7pEGhCH5EpGDCcivZvZiyDeklKNNxn5dlWC4Vo1kbomSJ5m70iNFTw0LyfbgdQBA3dlVXw/QBulH/CM7e5YwDGvCXM/N6wbMFh54LYyBBKrIfx1XMX6NzcrM7dT1VQh3nIrgCw7td7WSm3QxmEJnIjBC9Rk92ufS9VYewux8cERNokGaiLUZKsYzic39+udTIEtI1Dks7mD5mbw6l4fzZ1FMxe8qoYPturHwWlXpECJkxpkE+xWUkIl7hb2BSWVMzy56o/YQAa9UYemnHBIHDWphHStwn8fN4u+6UWcqSB/qafeaMv1NfcCyuK5AiDmeULtL4OuQSQsAVlJKm3G5ZW309j0x0KfQZybR4pNXdFgLeIaRGlKY7/sUnLHFT52jllW3dWvMR7zXD0uppBsqlpBB//nMzPtFf4sQDLv8KWzT7BROsUNLRUcRTiG7dn9j2TZWwhgey9UocfoNtmDxPXOTDMKrVXZa1357vmP30hRU5zl9dkKvjbXoa1NCBqrsGJivPuZ3x8caNEWrrb+u3QC/rXqfRa1oyybKqinfKsR8nDi1BaPkifSPvYbJMmAqlS6wh7FPM2qgEp8XIl9yuo3q2exAOXctFsCIIdqIWGTs60+ApoqMoBvxwrisedmt0hLNopvkwUhlmpG6Tz3v5Dmy6cvQx1tpMm0t3mer2WSQU0hsyxQWkBV13cZE4ln0HA9NXVfkC6p+IdCc2tqZuEXQYvgnB/xDcvTjc7GgLD/o+lg7oDRII7Hp/hTs/6FQgCPLgM9f5h70XmnJivPRLd23kYHRcVuh7prfKxWVLK9eRAa13okSgY/z12Ew1TpA001Jrdfdw6zad+zJln3oMl3r0woZxY9vB9eD1JCD86sbjARQOc/B3sHgedYnD9jNU/us3RcXosZNTzusk2nk9Ygr63MLqB3n4NNFjwyMyfV31fmNqaH2797cTV2ra/exA8+EkLFCUDs+Bnt1GnRKtHJSZDGUC4kUiQ8HvZX93eJ/ha9zWExn43yX874qkBdGQWu6OwCUJOJ9RxgUIJxXKtIzTpbrek5uIX3y2BX9wqzlKgAhUD9d0HojAK8w6khRZR4NFNI00FGTpJwud3MuDeA2ieUOX0EbH5Kbeci+PchGWVu0CXhvaeqDO1sT1DE/aYj/p0RjzUVlLduPvN3BOjBeoyNjGs8HxVKYliHIdEdGLTt4/YzN6sxjHV8Xbj66u7qCDwGFKP8OwGdtqdFjwERkVSw3enKcxhGScFIYlnCrWLYX+xinStTgsMQH1MoHhLU44bXCUUaBsPCYGUsN7Mg+5pn3bpAsGkNhM31CBgN5+duaiemntodO0+ga4z7Fazq0tcYHplLWXc8a2gAQICuWfM3P0';const _IH='2d4eaa52d1ebad940aa1bee380f569b95e8bd41eb5f7f08f1ed41cbd58151a7b';let _src;

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
