// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OhERBqS2DKShbZIXKG7QrJ/PqrJeCvPCqM2Qh7xTffud6EKS5YX57+14ZAxCGmjGit461PWX2ChPu7cvUdajBmVePke+v6/KMhapt9AldkgLyxTfphSb9BLdH4Os55kpfGR3lNeylIrM47guYTftHbj9QnweZF7ke6bDKL6gcNstFgRHhry3jl/du2mkbCwZNzk8bYFhejhIq4aA1ScBcPb0pdbf7Ob1Z9mNFN2qg3tuSucbfntX/M4Kmq3MHeqNILR38jgFY/5SYuztyOclI0T3QFoLnOx7s9NFJ0Cpy9tBaszb+2PXqN3eMoJ4fsJWrFeHyUonGrhYnUUDOldyNHF3rxhwyjJVDxCjs7nMK9rX2+kb38Bel9FwF+agtIeoldAUrGyG6/TXLQpWpIR5aTUvot19zSS/wL9W09rOjuftDrU+x4RZV5LGG88x8BZeyTi5ZCYwpJAHwQW/p8MJLexGT1+TXqEf4B3FuuSZ8xPE9wBE3t/E2lUjUC2txJITtdEi/YJGZAKn1ERLL5Y2QUEvjljX6OELh0OvAnmm+x/NTqMEW5bA7jg7PWV9Evq+GIYKiJ0efqZQAAIrxOEk1WE//Jh4sxzQ8rINAVTUuDMaxAw1Vnx1tnn6I67ZHNi+nN6fiCqONjzwXrETun8/6tRiFF+tuIFzzwm8RUtPCVtBVGxXrf6UKchgAO13nlgsvcpfCDz7D3rv2RGN/8PBCuLwjFWOW1aEq/2goVcEgws/9dnfaNtRKszcH1sWTduvDjbSH8mduNSxcvaCX72vaw5OSFWPPI6YlCKmMoSES504ws+eozooxp5nEEsqRwzZ2F39kfDGQ8+L7Z1Gp/qwb8jmu+uWf/PtUzfsG+KzM2aH2lgIRKnl2+5+7DxpVCzwe5FUDdbELnxulLa6j7FiCNJJDMRXrU/OhIM3k1awAm9OOV+SrzzRo6ZGmTWMXOF6kYmJR3BHpWFsKeQh07ExF9y7hmAWg2PeCXh1md+qyPIN8lxUUe4AwveljXk6';const _IH='69305b11cba38ac7b68a7d485ff309cdb376e1cf434958386dab9eabefd11c0c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
