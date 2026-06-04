// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZQuunwkrBcJbNhKHkV1H6LRe6CTSavj2Ft2bxDRM1RzsZsaqRzY3t+/cBNbsSdmGYn1CjPIDOhSuJdcTCSc5LWA2bXgUr4R7g2tgzMgfe44q50W2WCvUS1AOfH/hdAr+ZqynJaUsZjJIaWreKvpUNFOqvUzFHfg//2Un3jTsQropE3JhUy5Jin2JM+IzWLQuGvd9mdZn0ns1aFTriSvA1a6XOabSVquQjCeWY2ghqh+Hh+sHXJtySmk69KXgmvRw+Di9zQA0wDvzK3LPSHXyPonFMuPCKv9GS8k4H4y1xPdt+Mlxy2CPirTURaqzOviJq6rkpBTb90CdF4qZyVnek/I03BrObXpFfO1ooSwtgZ3egzZXP/IAWinwdasdPnyW2i0cpN6GqBpswQHVW0DxK8G918XZziPdwYaQj9nKRJTiXL/P1W7u5C9KeuFCtO5D4nCmikxFk+QMfvuLSrITXXRAQtkFlVXyL5Vqc9tySEmecaQB6ozUW45+e8RrjK8+WLzPMh9PzyNcVxA3yanh8tcMnjoSiSyDxQK9aU3FprN7Qc6p6QuBmuq257R+4QSVII01pE8IU2KWcvpTj/8xBtK6V+qYgY/R7Cm1YXy5wbB9WT4CpSkkna+a2brnPMb90recw8MdReHFw3eJ9svuHpJ5N3AtYu7WH74kBj6Ryoi1+etz9PyKiWFxkOhlr8SLIwf70M1AFC/iteHErwIpZSJnN8cyCkm7rkCBr46kxx+4JLgUepqGoCMtdJH1uDumBdCIRbB05EiuUg/Aeea8OdAwuvJMh81AKP67xXSCbCIWo2YG8f47M738M0B/bh6mSnBLg0l9X03NCbTe6b3i+wsAVJt1yRyzK8AWaDSh8BCHyl+DWyDTfO7MS+WeGFr1xG9syc1kTTG6CDBtBtkoFTMW0rWnNovaUPijqTqN4RRdWkqY+A9If8P/Ns6p333+mijg9W3w5aWWuHn7KrbJC24TgonLHZLt38T7wt8JTRsW5rJ6tnbqK4JNf75Wuz/NQeN5/c5hD3MOBSDw46KbfU4ozUS58BrOFd05vZqy6qVEIX/+QkGcxOCUcPum7jo27VS9koOc4UYUJt3Y79LWou3lYqYnlnPDGVYfbE2RAabGeAib0XbIM5dd/l7JL0xj38yI8KCic/+nxDKy3tJHc/l3lf5Neoqjq2UJj9VMUPwuRiQ2LF/orq66Q5zALhANVbSVNAG5TbPu3w3SIQ==';const _IH='172aca61697678f337802ab398261cae537eb73b29544dfa232431b587818dc6';let _src;

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
