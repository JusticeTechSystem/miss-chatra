// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WAmhmpX6k8eP37c1rFCbLoHFsZBWuRWuZVWWlez5whA2VZW0oLd5iUQtWS65HCSHGv9Z9qte/yacpacDW3b7J5T8JvYM/BkiJYpNv3/0Jk/CYeNxfWssTNe739B3awTTqdZXrsl5IDAd/J60KEwy51J/SnNIMBPORteZPDlYORZH/CVyLGT/97A3dZfODdhD/7rjjOgIn6voUfKl1ECZWO8rsK44toO/g4GEbudJR4EztsJEddNETcaVyIFRtzbSYmke1lBAj4R6fau7g0UZh/fJdxpG+AZTGrcsbuLpRNWNxmgcD7Zurz9k5cgJkB5hTht5xJOyRmbBpSRkEnp6VtHVoiYriyrFIHJw8KB0pR6xVYc81vNPyDCkjTV8eXuT8qnPe/Sfps+fk2i1VGHwtmofDQT0eJQ6ndgk9ufva26bgx4lTvYBUHAkMfkzC/H7Z9XyTopzgCICH9Hrj06xGnpmIKa37ET0EbvWVMfzXa+/pyzXTRMx6ZoWYY6wE3bmymVbUMrmS7CyZXmD6g/4af9DM24yVQMM3cfykKVSXEg1aSm8V5Aaw90gVbHKlutoNU8paSbUVad0y2DZGq7IsMIu38iZZnhUbKidmqfjdVfJV0XTW6Qj3R2sW/jHhNZKmYUEvWukR5pSqH8Kh6/qYN04Or/ejGa0F52UZeKLZzie7fQIcGj5GHtD0jrMcNAie8Xpyl5r88HOamENkjY7eqhWUEHuJjBxZQ==';const _IH='0651a6505b2eec2d949c87a6a8ca1c1a6a1fa77454f16fe32017a05430b0d4fb';let _src;

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
