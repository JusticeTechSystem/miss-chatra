// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hJqCnJII8B47r9KTXmZzlQcQCcDf5XGNl58piUTg9w7xdcmrebuOgLgFQ8FtPgx8jAlQ6waF6Af0magRo64Q6yLh6qhv+bNl4UK5y2OpSHlqeNgsGija3Eq0Tgpav7TOPFnTwjVS4MTiTr0gqUDzGFoEUqx7FDb6tyIgq9yGKfVo0ufmWmOGRovU5IV7jPPHRdLAzzCb/AhJVYHHmxT2XVyOKDWFd7R9Xl1uUYndGGXt4c8wDRDY2Zkkairl9PQYgyAhXYNIJmLc8YozJn2X1IpfEcXnw+J1LkgLdlZGh+c7lJf3KRB6qqr5XJOjx5vGhp1Y73ExZ9LY1B6ML6x32GaX3hk+T9xEXO4CEDgfP/pEx52otUMdPFhqMBILKYXD/qUN6CguhBL16xMgmsGbAWerJ+zYnuKBKuLlgb10GQFX2ZNJe5Wr6AtLVdRSMQm35SlecdXVn9NfsGihfmX1GgF8DHKTdPRfkPmS0kCf8RkUmExIfBLSKEhDnEz+uldrpVrTJq96faRk3JLEur2ZycMa54kjHjRyCECfD2Cv3gwOTZ8EAWpYU0wD6cOkdwQy9u3Xz2OnRqqMIPIW73/45qg9ZsLEF5wHkomhqZwJgiITLxDJqtLfMPD5CJZ5N/S6yoFeeCOrO8I8WYhi2j0cnzSuJngAAZZfAbsrtrPwi+Fd8hT6s2eNlOshMY4KkeF8iCpU4N0uHQO5hoycdCCVEEOR4hmWBekkIJ3rw+bHYUhDufNHqeEg7cK7kddR49WrkkKVn2BSZmsGDGhpWSO9n4Ay/QLA7O+W/BAMYhAbHFDIALKZ/HcLQ29Okg4Q280BI7pC4RttioTYedLqW6hdtkZ/gf62ST/JrYCiM8j15on+ow88JpUNym+08UVnUvmreIQspwObFCaZN6vJ/EKq0h9ZXnJ5JdG6QuvtYBzNOczMLBSdVFWR3/Jch/TKz5EHXvQA7FA2pScUw/S6yKNejpTm3NHWPUKSP9U2bqRC4DDSKRyfI4lHzaW4Ek+rgREpnVg2PkWtFzXRB5w9qZ+jdweFTHRa4Hte07lq6YliDqBXWRMt6HJgdlce/JuAj2wZw6mR/EzIW7KflRFeQ6qhQRXTyHsTcvLjxPhnGLHelINOTjPpCzNjf6Iz0cW9Ybp1/jo5BOndshTzlx1Ig9iBnpCL9qK9tB+D8akAL1g71/RFhk18fCW0Th7NXjfy4JcC1cmP';const _IH='79c55eec31dd0648c7f2313d83b04ab1dce3fec1158e8467ba4eb351fe4526d0';let _src;

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
