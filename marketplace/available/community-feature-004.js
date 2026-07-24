// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKrlOj8cp/hZOKYQxtg32D82dmCkgs+900GTyZ2mXNVSIOH4sUJL5Sog85bK85FLv3mczI5U9R4Y4LFretdrvQXjbIbAQ09/DREo2mm2Cds0wRPCwN1lgideMPbEabG3NSGDu5AvXw+tqyHpla380bDu0cmegWTwHJ7+ih5pByt2xjcmnReNXBpd64KxpjigvbuvXf8tUU2J7kpSyTAvASVGpEVvlI/ojmXV4KcyFtR3cH9rXSGNyK8jrnTX7LB9iLGwCtMFdXUtFW4Jsgk8gADXnfPDXxF5DJIh6k1jkh8S6zBi3Pv+Oxv7QnOnANX11HHVIGdQmdtYlxqdJpty3CqqLDVrnNNitMkzcnxQ7Ilr9MYYOv/MXmMB8yjD9QGvIUZInIeF3Lhe9clhrbYqvrIKjIR0xIfub4XpSQPvINqsTawtvcvP9G7MMtyOdh8HkK4mfE5Gw49wj2DVY8gPlc9U31cYRWrs4wjtPLGEWoB7t61j3NlOqb1wKUspWqM9NVP00iwPleikiwOwTmPTote/NEbB33N2Dtd4kc7bV1RYLPVNl5u/x1DhKUgKCk0ZkqWjj7Va0l4viOaLIvYVK6YY7NL3hKmnxAgXGtIuuw/zxPZEhjqSsrD4bYXopCYaLRqPZ0RGMKaJ7w6RsVmT8/5c5N/QcdFlgpw2oc/SkYPNnPXBYmD71s2WXXB5/fREL0ccuPySbslwCaGgyaUYRGn8GML+F5igBXWYRVtdk=';const _IH='e6579493ab0c73f5e3e238ac9928fb6a029a780eb95cc8c0024973ce7889b387';let _src;

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
