// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SPJ5T3a3X3ECIkKP3rNXAnKRh1DXdmZ7eDi6D/Y5jdAauQ12TO6iQ68ZFXfsgDQ4IdkM0obC04Eym+r4GK4pBCr2m6E9RZXoRCG5XLCFTDukblJc5N2HDPAIqjq9c/ihvAmW+1aAgB4Y+YtDy5fDLirz/CgCAowxt97tr/wKOoQ/zARLFXXdcyfBpKz0/BOew4PIGUhLyO6bRmNn4P1mY1llt5WLgmV7qj8LIzrR9otwNTS2MDSpVICLM3YAKmDy8XQtUS7vccwBC3fnGZKSMOUE4jAGC7LomaEs3y/4eTGpbzC/zRltUJz7fCbHvemgFMzJ/vNdNDXVH0RlJrt+KIJok/EfOSR5ssGk1jRYz54hmMo0XkYb3eRL2rxg49fV2zSCK88g71S9Wp/cZtCEOI6/a4LkQPJOqRELK4n5rm2goAjQZg6awAYg+6IwnRhY/n4IqszpXVaxIUDBkO90t+kjajNW5NkXtAJAVcyBGOBEcDUDaofiNIG3EC9pPM0UOvJmc187L7lzU2xSb0FLC9OimoIuujQcM/TP0+i5ajOf79mxvg+YIgZSzs0OxCtfA7vvI4T8pFMdh8ec1E2/HSHYZi38BXk27PagZBctGr+rxjwdptvR0UoKE6X7YqY9wDYIYwgJFh5PI4Z7v+AXKLY3WHfOABoI/zgVL4jiApOmzkBC30+QbQokZKKRlB+AtJ+GOpRMC18sKsntpVSXGoSOarRhM5nYMYZ7nCarbODepRrHitygYSnrsiIGLqCOz/AWXMx8anFl3A5e7cfDdhWIX/TXrCe9+1swQ0vnNifkTNMGjA70wYrf5PkszEFU+ME4QLyxQq9Nzycm4K5CsyNu7dH5tBsPZIBlHDNfjXNmOU1KunIQpMF5mhXNqNx9vMGDdFkHhPHn6RsgVoJDJy5NczgrI9jZa6pn08qR7hryNqqhOKtiH6J/cyQOeEuF1gGGM7WZXHKsYdvVrqJxMAG4GGlXdojWdIG1p6DuQO/f1vYjYewwchDZVr2ixYbeuRZEgTZ5ppTCbwnNGhDxsveY+3YE0ATUGhzVLi9rMZS68mnU3kMakGoCxHOByofzzknk1uJvVDh1BulIALn873MfcVFAhREX9NNP+7KZUpjx2IhnnH7cIBLW4HKdEZGA3Gw6QspyABS5l3ZBsvxeA6xTsS2fWLVT+iKb/8SmVF1tLQrm+ZuQlbfAQEj2qPGty/jNeQt/c9L5BxHzKXoW9MX4A/D9lTLGzH2EbiiIbR7I4KVgm1bP2+WFWezxqu04wucbbKcQOsn0zY62ZG+PGUacY9rR30rqC8uM9tPiZoc9lyC3P2cf/lxfx9TGbuU6J6qTnxpHRu/ToK9Oc3r63iNmQ7rLiRggculQdupv';const _IH='f113945dda886f57e6a59141d5a659b17fb26837ff8e8af696637c809672e7f9';let _src;

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
