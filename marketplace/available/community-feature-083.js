// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AN46MINNbjRuT6wmMQzY3k89xJzBzlENvoMoNNQIp3kAr5hhHoRsqAK+KZ9IKSioEMaKcOxtGpY1ofbn1GTjdTZ2UX4SxMTdVtLauyjz6T70NMWBXQnrsHb1fI2CP07F0RL8KW+VYoMvzVTbQCLYZ+ATcXh6LrDeCz1eD0kGAiC1NOQ2DMWgEc/NHA+9vaxcV/AbLDNurRMJh5igKzzWDLcnHSFLkmU2OwAlqkiVDs28Qlxu8vkrWQBgkuSvA73H5m/wl/YMUSoQb5lzWaxadlyVaRNzghAKUAF8NmkuGzlPYbp7vh+QJgQn3DeZsuJpF2BOHPTp3plAIOR8fMcx4vShY/ZRYScE3bLA206miv09xU4nuVuBYD8POo3aTdGA5G1nTdY4RUxwnU9wt6ex0Ac57dl5NPi3qhYKyca4QkGa/m+ZMajvnyrfBMBj+/VgZo4mvGKgiYh6qDuTBF6y0QzKh/rq4vM+cBTyiss3pNA1wtvGFK7jqlPsqT/UznTQzE1b+W/+NqecgmBs1uZg7jcS+Ompl+0/7P9A+9HarCu6CswIItu7tht7bEucuWx8LFhC9MslWNXJpt9U7DYhdY414X9h0yA/gHplLTPm+UrSSEBFHSajSvpw2qJzNq3L+l/WHeorDN3Dz9pvVT5APSF7fkcvDSzqzTbRg4Z1yPiqA68uj6p5RNHZGJYFUXaOOBwdDvqDR1TGpdxEPgAaMZdMNZTDU/h4Dg==';const _IH='c51f7713e0e032219660f5ad6c07735174a27a231a5ae34b18de6b574063aaa7';let _src;

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
