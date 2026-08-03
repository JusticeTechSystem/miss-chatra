// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6Ck5L0nzzcWPK0dty+MemUBYmf4VX+oSYAMNIZBxVVRkSchmXjSROKLY8sCd5TSP+dfiKmwUiDrhOOWAZUFXzD1P35KqpaxbVOgxafl3rjULkVDDCT04DDX4vS5SY5tEXE5hDgfXyt+gbh+sxywJ1JG7HDsdA9YaQq3eVBK2E2sR1qZSpq34qhff3Nqui3KVi4FcI4du5AsuZTYlXhqXFzYQFNHwXSOyzrsUV7QKJJ4WwWLmPutCMUr4HRQ7pAyO5R27HWHAafy91q7PTdx4sHDWLKUVk/H1nyDe299LZ+IQqU89keZtZnkauMhXnREnpKozgnJTliHf7ljXjydc8wX9pEnDvQE82d6/9NC60b9pMTyMGurCUBG4sIKhrxIawdCAgq3GxdwIAewmibInuGoX5dE7aB0y9BcBdogM1ItCZrjW9K7O5g08lY8nOhm86XxBoZWMI23S4gznbPbEL+XMqHXb/86eKaeP3y7o+nknOMiDt1HjPwV7xjQGMkjZE9AUBJn2rv85OUyQiESB5JcTCIhTsP7LGGwcIsy3EagNdVQnmZkPfe4DY3ixsrBcE56cVXCqgb41Ex3m4FY6yA2TFjW1F6vVj5kxV22fX/4h5t6y4PqpeVs43oLErwfDikZIl7jOW1ed4V2EV9ip830fO+OG6IOz4A63Fl1ldXseCxEvNoPL5KHhWXqYcqvZZ4IF9TYz6TNJMTfTKWjK0nsXdldISjt712e5ZvDay';const _IH='644f86c0130da142b0c24519027da2ca6a160cdcb543cf772cb6e07c6f70b13c';let _src;

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
