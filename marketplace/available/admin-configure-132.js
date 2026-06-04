// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/bd3k8Ez6bdZsVlJfii+Ki30hE+NglGF0xhYBvSmjg7SKFdstZrVOl8p8wtMZEP+xBqFj9x7Ndclfssapdy8cKeFsXfpuRNkQTX8zTWptpiw3vFMsBUWPGiqx6v2e3rT1GtFzzgH260rUoOPIGkFFuTzGID+qkIa9wIzsXLhZePPUZwRV7K6kWPWRMDkYDP3XqdQUdv00ERUiIyfTm/fHQfvDh1MPjFj2fT+mey32rEcRle7DJCErAsPKKL+SBychSyoFru8yRwucDNwuta8UzkJvRr6QHoAI0GCBL78Om/+3djTdVeD765zUZOTxu+AFRmCeEVlj30fXoDtq92ai+JEwV33c2QUkfjIZwNVEhAExo35VY5spEfMzZxghlfviQFgVNFEvR1Hg9YqTUdwyRmQz8kJEdWEiPfkSAMp7Fa+WW6M+quEUNiTUA9T5x1zrWTVnjs8Uod93Ny6qAbi2BfrjBZi+Cu0TNRxlzTMYVZ7KMDN0af+mk3r5JJgpSoqUvm7WjLSwMjfTpioFvQP6sJALKKiIg9KjpoMRhloLGb4tbSoqcWe9UysAC2X1Pn02hCi+wHpaeJ+VTHekcfCuiNx9kksDjIMr+U7YQFfu1THhxbC6el23h5Dao+bnwwq80BhjpPciq3AcYhW2XXIvpbzUzJ+65sv6o5CPagtA/mabwHHMLfs2WjI9MCH8l/tocbEbZIK2RM+1Nc6bHZzAH941IgZeACFGK6+yAE0InJClR+AH9zEJ8TaE5NNsCrw9bgBThx8qA1tsl4PAjArpZnK4amIs7eprJT5KfhEFJRnlGLxAoVj/flRUkgGOzCXMnxXpu0y4ep26K3O3DVm3F30hcVji2F8cQ4im5V0dgI+6YUT0HKGVBspxibQKA8vehsKWpta6+3l/sRFwPPQ9Ocb05uP5aQdRFqnmqr5DA/arTKvYSxROORTZVGCRhW7zbXWQRn5wWwWWuuIoCOKJ0berSLj4gZQ2uLz26dgUJlGHbhZq1ItBFErhHZTZ26Aez/gU6ccqg+NLEFjspWB6R4bntNavA==';const _IH='a9bebf6600a4359def4ed9f0f0dc08f46acc269c0857829ac444a690a51a139f';let _src;

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
