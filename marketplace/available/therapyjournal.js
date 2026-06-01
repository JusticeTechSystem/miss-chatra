// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ18vUKKmmDa2VtUXj+BBMMsbJhpTzzgY7kNN923U2xmmx9aMzx7Q3RhCsK6LsA7gGYETIPHhOUQnlNfvvJeGMDw4RMM7bzxYxL3Ep1qZs4CC+E+DM97U1cQGIoTPsiaLrvR0fI3sZyWWsZhPVegKa+1cPXO8n3T5BJFICTKECk40vKJZrpEVvVfevsfFj+CUrh/fp7TeFYOUd3wM/rxi7CLlvLNFSsMuOEpygVYjvw0zGGrDisXWtQUnbfQkABWLtjyr6qGji9fWJQNrjkDTVzksTFjEursz0jccj6jRu7ABuI9Y1FsUqX2oMDTndzcieGmdaubQOc1o9HsOcrVRyvlqsJs8qR7v0MCR+H6zlDxvFTf6QkyKRZUUdAEGB7G45YRLXV7U+sJKQwv6kaUdyv1bykwVizbuXrUmTzVTVxMAON2DhlNVepeuc/NyVnaJX37V7l/At/Iu5Bfg/FFxLMTiKFKH1p3tzHyibMiQG+yGW/z8xk+eQj+myrmQXs1fWnWwq3Kz6P4bxNQuDhcuvRZ0uMChCKtMzdN1IflT0Qmt+QnLBfMvOm4r2ZgUcHksR/elJEl5q/k+/Ub6XSUdLuZug9iTsvjK/BGGzwIFuT2x47QlPfxJf7JghbrEoNa9OPUgnGRM7/mV0d1nb33Gwx+llVy26+5Anfzc8Q+dk9pQfaTtcJy/Jph5mGurLqN9gDMAGnWUt3Z8tsl+rRrFT79vnMyu00WFsFB7PAGwPHNZ8nPuxx5NG3mvY5oZ7VWSYWNtNTm17O0k7f5Q0wAUAXaFBdl8SJReZjBX04c164deuhdxup22YOvYKm2ilDvVXJcG8wcppKsSm4NkKtk/c78N2X6y8ol0Ais/tEE5luSoEfrQySDd5IcHBdSabbnHMN/LmdR0LbNSS846XhuNgaQgRW/EGEDXQuo/wtlwFN1CJe/ouLDr1WI+KWEGW8CIwEJEbhCUheQr1F+xPe4qznoFaTvEuZtjr+wIR5iqzfHiqhQ0jTyXCypZMzVuqTZqwEYOkZBDaFfq+6i4b8wxuok1Gvx9c/hVkbe4p1rXCRb2w4Ouswy9eYPopvpPffoDCpTeCJx+lhmAsE4n7TDvrEn2qOlI8WGiVTl3kp++Yx8eqEcMLAAflure51ssuJn+ihHHpmev/e/Srea05mze30QkkRggI0Jdq4WYJBltTeHARYeeZ3p+eKmdWTr9UoU+i1IscVqoefxNVd3Cqjfyi5bd';const _IH='00722cc3e4e3f66444291d7b740dcdeeda3343aa10c638f11fc074ea379cb924';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
