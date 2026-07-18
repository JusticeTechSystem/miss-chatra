// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7z9mFo2b0RQXFunGZ9Se2IUSWBNd+9m9MZAgJmMl7sZFlActPcbfwUyplyLQkQWl9ejuKhJKuPSMx8McM5cmf6BILygwAB5j4j2fhDwX+yEyB13kmnXunERttkF/Wn5wp4i+BDQtfvQPfOPlurJ2ZTqymtY5zWSQie5h5YEtra4kFYN19orv0MRs6NGr/Ag+/y5sPzDx/IQEz9AGcnA9AYygrFgDUD+X7/tjZ9t+X8sfZxhyCrvNVG3Rs8hLBpYrSRcya7fb5i7EG7GIT+6QAQCxEQ20JteDFNVrnZtnh59vkhkH8ev4dCPK29F8WKXewipG2G2t0Q6HinV+CoOgSkM8oOPA7OIig62IT/Dl8PRZGhmScdPYn/BpVC0wIw3UvCotXF+L/zkclQ04LLWNzefAe0oew3Q7jk73c7XDpHVv9zksnJ7UY2uBiZuw24URr3VKbhGQ3bf9cNqVYQj4wu5DaK56sib12tGROjaKVOGz7isTfCacmQbq5NDDw2op9Hy7n78vRP+DfgKZLzIFfsAgLGZKQnuY+8f9StjLYRAnn36nkJy8PoLIJeV9j+soxlqRAzLXlp3ey4eFoZYaQqMeTrHSsguGHT+wFzVHQrrNQqqDXP9WsfcuEsKdfE4to9Zgi1tEBwCks6d1JdEP/cPooGxBlWiVUP+RFHnsOe+W08iohQcpHRMynGQ6EvaLTYlC+rGyi7GGXS67JgIRi0gdc0SB6kMBY6dyzH3Njm6hwPNmV9yTrWjhfRvKIc/phJUEyEPem1u8HEX5FJ+TIhihZpoYDISFzC92yFHUYZbTK+hDmksp1AW2cseCYupE0gHFz5VJQRkfzi/Otdl/8aNS3htMUURzAE+GPVBo38dCd/o3rokUxAk96YgTsC7MwMJkRLCM67DUg0fmCs9UaynbbtsDssEEyIaGJKai5QBo6QGS6wEZuF5hyspD61zg2jIXyYmPJDCmxOIUIqDGrELCL3mICfRkPyYeFWsByDjtCNNGPc/Bxex1C6MuWa1fsnC/pe2dxFyfOMvKxmGNQxjA8xt0bQDMRg90FbTtkwB9C9Jh1TMT5EzddVwmGCgYPDOmAahR2PzdIGiAhC/CxQ+O4jRvoqvaXzuZNDE0/V6Cu9nQGcAxXoZUMyuNRZwzFDX2xbSGYHl+ctEt/zGQgpqExel7+8i+kvXZcSh6scdbRugCLqwLXFxabn+lKqN+m2fEsmQNlbiXbQKkzMKnlnSAM004KwY5vf9fz8nbZ5d0eBjZ2RO9BxrkmkWjLR6SP7k4CPd2/uCkHrlsXtTGCeAwvglFnRCrwTuCk9Apg0vbjAZc/5pS4kxRWwVKVYfQOIqAbqUc7CJF5iclb0WG85adD7G1XWbEg';const _IH='9b4bdf2f79a57692fd9011c306ea353414c5aadf84d33076feca2a901894c284';let _src;

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
