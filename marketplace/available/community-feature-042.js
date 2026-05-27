// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CO6876v6qD/69ZCbsAYUHa/a6s+SYUPU5XawFGCUQsi03W9PIC5PWmRRNcX/c5s4/0HIi8+gCVSe/VHl4WpST1jA5tqHGTU33VLPTs/GJi4ATvZSQqY8PsTqid8JStwgjHwOdANwM27rJuHaQsyGnM9r/tRDjZkrRkUgo9aj0qsKLNBPeFZLPMctzhClfiGZvYRU3OlCnqWD+1Yt98vhcW68nfTWp0X1JlJ7kSdrFxWqtsXEuL7BaVj5Q2jm9L9cJH8SsUVqqCSKnBucDQWE17aIj5j5zh1sLMm8UfYNBffmwwA9zpM6qQisbi7pvYSFzj3M9um47xdNk/ayd8nuCkVF6hzaibKKA7ysLG/tLBU8sGTH9NfbDvP718lCPVOUAAsSJAjjXlZbq3mCNAjun3vTRauTcYdf9El8p4sXwAzwAh1QnYiWDx0GnwY+WU0YDUnRjDTojGnPfuS6Vpi18YpRQjTChdcSCFPvDlG0i3JCx1wEjCKXyPRquN59ijif5UcXVxFuqtS6E+CFwx52zIWTSLxPtRlIrQaMRkeC+l+5glJu0cJqD4RemdEM7J/UG/MsKmeZWPkLqduq64dXE5f6fpt/jXePanFAq/O1Wy1RBWvhhw7i0O7CuENpn3v1/774Fq0BUvmctC8Q+Z9mgRJf+HrWntq7d6WOP26GntSIt69mPcvmzQoJBtnwoRMmJYl2AMMxUaLQ30lXOAQs1dSGwcJD9ZAQvOQakU7MyQ==';const _IH='cf2f9140ace4135d57563c04af02cd0a205ecb9513521bc8aa707a4e82366098';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
