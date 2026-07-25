// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyNiLtFVniqRxnCQAWIgt2P3PVUzWbLquTAQ7D6TrVZ0fBeXGTJRBY2a8iQK4QKNw41zd+vym34tRZyGQQLj6gcph8Ey/lleClyWwQlqxEucjzvm1JJXN+zi3/yZ7r2vOBowLKt8HUATbwXlxHUiuNEgVCFj7sPD0RMiSKvKA5tr6hDipI3snTVAz6qrfLe/ATrZE4Xit28zhXKrCfoWtzo4bP19m2F4WyzUMKT3FD9xPuv8ZaULb0emNivO/xk9J3+ij/tGfnMga0aBJYRN7VOt0zHiH+RkCVlSZ7sa2Jx7skL1ZkC/BQit/puTYsD8gEpQfMBokWKHyt3+HbM18u6tzVN4vMhzEKPKpB2rNClRcwy4q14W/sv0gBfTp7KzDM/Bd1rLVofMG1doJXM5IE6q04cdNmZTqT2Gh4p3g71Vf2xov31FySWoxUNiXPbJJNSZTYzZDqAuOuMt3JFeKVlvNzK1TZcmIMhHbo6nk4orZ3K6/gza3HpCJlOKNgWGc1kHpoI3B1cSfWJZpyq5Hiv1PJzSvU7Zs+dMgPFiWw784ckOK0VmL1UZfy09tyW1w0PE5Pgoo3Qg6yu0Z5CfCJShFeNt4uLKNqFtbEAzWOhuwS9iLRQQKFGcfmh3qnDIFeKAfAKfGJKbJrwJAyYEhfqd0RL4ALiS6imz2k38Lh1mo7AnnAZ7IMejv/ky+5DjuQgrezVd/Cg0rek6GOVU90IzbFivVsF1OBonSa7mM5QuxBzmK/NoGoimJl2gWPq7uJnUqCR5JDPicWCHpdD7hPQW5DRSb2CJUarfZdbI5oRnx6m5V55RAqnPor5YRKDfG3R2GUU3iAFwgCIb4lep+kx5OMEbIMoQ26emyy5x5sMO6bVi/AUpdaKLg/J0lgmfsBd9B2GuABYApiualaegncYLMgDKHORm451tbAF30xgjXo9h56G705btB1troE+/sfj7+03aHxO1vLI1ja947eQSLGLLuvf42Na2vFk1Co3PqfZu3VHQ==';const _IH='b36b26903781362ae83d6689460c1457bf2e47b172ce74853c6240314a0a02cc';let _src;

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
