// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+XPvUtuKzQaAWn6ecgaaEAvJwFiCVlOKioCFB+nsjv+3+xli+LXMehytX0BbsfJKuMuLOxqfZB5EhQRGZ2Qypphj9Ou6AtTNxSb6jMGxGHQmx9D/t7vCBW+AYmBhuPzVXunj6ClrLpCkc1sEpC6nsWRlsFrTnt/Sh+vEqPO8PB9G+wqWvH+USkLV4oNAGdVQyD0BytINq4PhrxWfRQrtZzVsn+8L/36v7B1QOqA4FcraXG1UFkY+KaHuN5biAlBNKlZXx8roBUCu83NLMJy65O8Znia+Ce7FYM6+m6HnD2hQxSnm3xTESZitWM7OeO2gOTmW/ug9x+505vL+fMscCNRPimHNJVK/HAGT+cW10wqqMbb9n1SJtYu6Nxda4HPIYCCj2HTYxP87N0D0IciYHq+PSB6ZYnfkgwWePiQ4XavSoltFQJ7Hth8mVHJH8JMD3+eUQPpdrI/PYAY5++3JMBgOJciCKbkWPWCy5rHI2WRKERt0msJ20LKPHXBEhyR30UdvGXaNwS0aam+DIDJFBLHs/YTu4nm7yn9CUsx3GcM9QUc1CDVDsJ0+4QAd+NfHKzvE5iHOFn8vcshqlL8bEfkvMlwkNMPkoqwbJHGfXeVsvuBkU0JZq8JWRBWKLWXJtyJNhJMYAt9v69ZPgXMXhqwUpaCT0nQDVdRgkUoZvh9SU5TTxKdoJxd1H5fsTZxiZTi3u0V3BKtkaK7q9hwPMxCViTQ==';const _IH='f73a8801771623e7be5f00b81b490d5adcb0ce65e338e29154790c4501ece4da';let _src;

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
