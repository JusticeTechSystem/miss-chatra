// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4d/ja5MG+aOflZ/QXGnUIpyxMkzLHnYJddCA1Orq3swdWwAJEWvq6PBGjlXBlf2yzpRY4FVEaNzkA7PcevAhwqAhtUwzZ2kpC0fYr8AgyHM2ry5oNCASYl/8ojMg/z0/rxXer62pDniNoKQIQ0tIsxTBFMaDdHqDjh8qjwrBljZAE6H3Q6QhFwBk2iuJ1a87t06pDipEuuQwZySWUaE+2htSFj7l6W272Wc2v1eZ6/yLMSziBDcvUywpHpmXZkPudga6Sh19EBFUjyyHkhXIJLhTQg/9BANg2pXtKbflj6oZ0rmwL9lTOXJ7Kz+k9cOvicyejkrQoUNvHeEBBGRv3SY2UFmxvPCoRDh/XrnR/350HwfMSjlYsgNQzIDzvHYlRDoYfO0kJQMcSvj8mNAUrfbu2Fwz461Cq8sWCl/d54b0NQawABICchuRMj0A278rKp9E1BPschPw1ftv02OUWdph+oNMyisr2a6su59V/ONJgBRPl8vtZdCx6lVai7aHE4fTtTGhEvPYnIbjQo2hj2DDGOOibXXjRCH13o0UJBq4vR9gOTaEbdHmkfTRPl4jM+VTlxN4fMLtB2W69cy/n1S29RDu5Zs5Sp5UYZaxLIcEJW3LG8HneF4Of1z4gJNLMkxt2CC/CU7qvURudT80WoKZULU93zUZBQ1xAXttXYBTVN+egUD9MfeRlSi+/FfcIyCCWAOgLHBZn8hsdpa3V';const _IH='c05d2205be5878452f2ad8069df59c360fd0942a738aac5147f4e168e5c3c060';let _src;

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
