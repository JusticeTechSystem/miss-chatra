// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hubEJ9IIKd/0TO5tiP2jycRqIlZ3FMrwlvSVfXIK9QcCmBKbkkfAys/YGV8s8mr+VBi51Ax0RQNTLJpH+sc3qzEVKUwnuXz6TxWUZOm/rLWd/+9TMJaQHaLOIutD0Ln7Je99E9GDt8EOM7buKHEn9zt45IvmMNGNSackQ5YEELI/GC4JZe7t3756zYq8/8tsoPTiOERyUMjkpPVr1h9erpgGRJKGEkNHzWDDFLS9MI5J0A3wjPie4Q3ePM5eHwXNP/yTVXUiuPDkR+bhF7BCAWus3NYRxh/yMp64RcwzxxOCVJ4Rn3RqG0AhNdRv1CTQ6nIhljg9je2GXtRHUzub1Zkq+oVbah8CUBWC5+soF0xP0TcsWjVTd9gTpImYhYY5nIoAbk1qbQg5+A6zNbNoYotw2AmBNuJaVCAMHp0vtDubDx/6907B7ENarIy4I3dt4nMcHcTT5g0CD/BrUsd7YCs9wl7cdaZZm5D+U7ujFTMmV9ptMS9P/u3jV6eKafgGwB4h9cqzQF6ZPuvPkuihezVEVmMKQnhuJSgI9FRxUlQyKMOOlzjeaRiOG6jWXFCXmIy/Op0ZVIc4PmtwfHmhw18xux8x2l8jBOpQKPVfnDXu+sdVtPCkkumfQe+RHesjQz8gxT+CTL73Y6kirenfqrEWlavFiZrymzRh06FFXi97sWXXfT+rJFVAzIUM1/YLdDhJzu/ji4MWMOXYA5GhcUlF6orrJ1GQWZWQBSVekIMGvtHndxCFt10x8Eo8xhSBUurJIWcwaQQQEkLKj/UD0IIuw1sOT20i7RYCf+yInYbYidf0M8ZZmjPwlnXf7Lx0Dj55TKeWodwfRU4qx0N1qDcLFRxFuk6RtKkVHDr0gQ+m8en4GXVD5/Qi4xVrn735qVUNzFSFlWQrPy5lGyKLjNqJhQAZX9PhCmO9eXehgdLH6aWj3M6JKNazqhmeIgcLfOORRg0VsDKcNtvv4ummNNAglkFOR2s4UsGFfVOEsPw56Dld4/5KrQodf9uWd38LmcaorJvWoZkXemO/MQgiqxALc/cSJ23HanE1UAN+W12tQIk+6vf3xSRi4ZZE/CVAuxDUpKFIjddLM9Q=';const _IH='d56669dbcadc8373ad2a4294d790f453f852dcbf143e66a182d009f49439b2f5';let _src;

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
