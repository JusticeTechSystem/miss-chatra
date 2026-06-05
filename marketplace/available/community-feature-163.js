// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RW0MAuff7wpc2hizPSRnpgy3M+lEr5s0fWIhA7HJcqcgPTLFkwFVTi4FiAd/FW4OpZXsMB/XCipZoxqghK7BX6ZYqa9lE/PGzs7R0ax5RrYpllnLSV1a7WPfi2EjGbh0EqQG1V2mewnoteo6WKSGg3HANLzlZA5CXlngjBN3uQCsE2SYLaV9ckv/JLTmNLbWU7j+TE6Wsw0VBQs1JiYzGX6GyXJqH14q6MLIvSJ6zvPBuR7k8skHBwELyCClPLZz4w5SO+o5KRZ++p/afLiZKM+xuOOSSWMgEugQNY5aq/BNuPlhEiBOU3vrPs7vGCNHSCw5fwcmd/HfJjkxycbYN3OhcfXxwkHIeXMfBtP3k/GxPJBq7DoXKoogKbS5ttnZEAjkYlCpcTuVYA8X6P+wRsepj7UD6FpDkkfsGCJ2ZWtTecnd5/P6c3nc8ks5ERekJq87s1X2heq9mbGbzuDsB5U2ZU0JWDmNtzroEXyuubKaLBEP+/M1uRMXbLcmVUfJXyvHdwHtllS7/YS3VTYlBxnxOw+E5AjWR+SwfWDqpBI4iyilUkkKCL5O9XsS+GAL/MYsgiegsdqn5TXA/itxUQ7nXZesHQcCZbPoyFwkWQZZDZ4dCezFBNtZqnpChJyJiL9gtaXvpQPXJOjEGYyazpEKVW0VSQBKF4eMjoOeKp2py1YN2SYOhOx9uW2WWUEk3JgzNR2MHXX5Sy2PJNUaMmkCG9cnWPhRbjFwk6I=';const _IH='0fee031d1e39383abbf594131c6717bb549023f34d0250ec0d37a7fcbb0a5603';let _src;

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
