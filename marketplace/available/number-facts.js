// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQS9wsCmUmPnQX9iienayewO4Ki4bkNJX2UqRUMd7R00bB9CqiLvlZlwadK7Dfjpl4CTw3f4Xi+zTBhRhzkCLO8GK60M3Z+rU5ZDmh9RW6hhOPMGx16C5UWG0nk4iWjnwKaspBqhiESliP9aeOnBerW2Kw5sDnzNLF/fsWKMgCb5l9p1c0D5vF2BgB2AwYQU6lvsOBnfplZrqCzvBO7nObrfTzcwKpVhVbd4dBmUKNsrX4O/wtu0rm00VzWpMl7zrSLsSefOHPt8Uw2MD8Bw8aarOz+IfJo85Eurcy5Zg+j3+pAVw8P3oHCw1Kjz/hz+L6qQ/Ll7efMBenlXiYAgAYAbj8UMz4fZPmzdpNcPTDByzedzvJ0/Z3imAuYXTdrPQo9NkUFXUqQsgGDZdJ66Qoeil8VmFSCJpRwFOXxevc5OZ6qUbzbdGewjJAq3DzfFYlFQ779wJ/k2ufxlE3dQDU0xpdxs8byUN0QuAuVTJlBqQqXTppnt7sqhNr5OG5mONU9qC86wXPH2Oag9Z/GO6djsUjc8mvD8+9xzVTF+ftQQ81IFsWr+KDhEXia6q9upB4zh3n/Zw==';const _IH='6a81c79bd5ca410820eec76a82b4deb17a587678e9d644d56d6fb8a4f902116e';let _src;

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
