// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s/VVt30qbgfZrrD9Grr61lFLr1unZr2I6K09g0vLFZ8zbj+jCLjVmevIQYSgpw+kQqG95BRSeWL2ksuDNnmmwCWoPNmPNFg2en2NsFaWVDTc8jikflD6i+HvqOe09jE7KhIPKSxuf8h6HI4YkbjjPdMjFWuuqvMu9iPWodyyVgt/IJ7fzi4XEAONoIJQc3+Wo4KvhCmLvcY1VJ7YBnAhU/RXEQNkvsmRyA+holAHB+zCQXTeMeaWhne83hCMRGVbVSuBaSs0EI55DUCBxlXw8LcNd+HcwSWLDmmhmbYB2//X1S0TOhAwB4hUNnJgUrFS400bI5qUalnpJ//0aPXJms5kkskBjawLjJYwkWMF5ojbk05SSZFbr9pZ7RceeK+Un0kQcbFWiZUZzajH0j5d09QRBLoOSd6zdDheuGBNR0lEr13be5V3IKLvKiHTrVcDTdpEjRgOpEsUZ5VjJtk84CHLkldh+FvbPMUA2gFPCDmSFWm8K4c8aJtapMzADT/ikG5wv2rSbUVgT92dQC45p1o31QsH1q7flk1+HsScVjdsbY+IH2qC0wSWMqPBKjUqZQmzap6e7bpuPTDzsrFCFDezvxLIq4R8Z9pLOGeNo6MeD43h3okGZnKsTGFiw/ZIFK221Cjx9vgBG4WrzqymNNxsxCR/yQ68nLMRvZIKJydaPy+jr9AN+esXoWO+oQDQ7wW5Qqsx+VZLttIWF3okfenhc7NvsMyosjafuwmi3+T5Emd9QjIir4Wl7m03z6ghBsxv0UQNIMZ/DIREocy7rBh4nUZbRCnqtQ4awy9qy4F4qaQ9z7soAIoOUTi5JcUvnzbsg7QS8T08WjYd90oSn3R81u0R5CCV+/q7+vqicLx+Oc5UZMTb2TqhWP6ZRoMCoaROkbOOKBMigy+K9zkEym8E48Hd1bXrYKCyyVdakSGuJzPVB/NFy0IGhjZLCQBiDAUMVf6dg90VyqZNInQfmMVckI3+Togb/YYHfcGDsD4UOJAMn3jOmDKARBJx1IVtZJjTtuz1eBnA/tf3Lr4TY4hAcpU2+qn+9SZsdWQsK80ESgD3qu/PYRX0Pbc9SGwL+JVjv9V/Pz5cHjc=';const _IH='76f8438eaef41f3a7690d45fa8d23409407eface213e1386a0f4096e6774a2da';let _src;

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
