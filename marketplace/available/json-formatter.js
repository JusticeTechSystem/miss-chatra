// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EpzfoLqiHm1h5SNKYxfGtWgHv0qlY2ZkiNI1tMOkueh35k5iUEFH1rTQWU0WIyFCyHsZYjE86SbjWfGwQ7p6bq9gpuFI0jZstH618tCbagMchwGeDsrWcYiJ6k/0EgxtEObLIllsP6DbDqQpurv3iLS4CEmWg5yvlLIrVhVSolfdwnbYPO2B2U4U6PgDevlQsGKP0gwISAoFKvnzez9gih3wLfpVqNRhOoVxfX/t2ioqtEEFrxRqfUj12yGR9U8Z3K5oeSuv0pw2vh5c3Qi9PritgsrrndmY6Az9R9/NJ24DK8Icq/+0j0Z9nzmdV0E8FZRE/dOGAfQN6t6Inobgnr1AnCEEoIjAitH1AwbDqxKpH9U+ZKQPlQHvR+q4pVgs+LCuOefTnpTX3/pJAXddau6ANKHoczHIgMzEI/+WcSQ4+BCEdWs4soH/dth4CjeS/L8GPZvOJ0tr8/sqc5c79AQOnrI4WdBkgnCLahLxp2zXIkkaNF+xj5RI9R0HLLZfIGjw76OIPL//HyT72Q+WgXiUUdUzE5beL/WMyqKwBes/9j/aqKwWQ2gnZSKE6y64mXVPHIRFNas4o/JkLoA++XWRlXAG68F80h+BViTBW3ag1qXh6bk908+Ln8f+Jr2g+pYPRsDqhtocFIUScUipcPX/+trCnwMC5FPF4uDRWdP/L/CQQSZcmnoU/rQE++3QgC3RtKXAnDaErDkmtV6KSLp7yPXkdM2Js9J2GmwfIg1u50hE4p0MEqT7GhtPAbIwKu/AonpR+rfkk/nONjoJniwZkn7WD0FHOynj/ZSsZZTLYozaq0ztFpDihzF2ouTgkzgubmaTff+oQWQDS9zCKb/RmiTizsM8SR+KkLvtqYD6P+25N+Vai7Vtoe/C7f5TctmV9TJogoymvTPPiWzbnfcc10l9qKBQtP7WyPua7ScRPl+VIrNPOvYAbtrZUf/uiS2Cuu9WXZvZr7esDI010n+AfNkpollh6X2kfPVKnDSQJBCxqzDWUF3ohtNpoducpopDnSS0C4onqE6vRJuzdkZlJYxY6K/HDjEpdJu3l6PENyFGR4cTurkmKyaNpA+GOUFhh+/buM3WNURXnAmAYCa4GizdISAMCzkVZZuPkhCbrWTu70cRYNylcx85M8oBedmAnYTDYskfkKxYnbNvnvL4CUwdRwn9y78VYh565zysyHOCf/uYN+qMfLuQoLP50SS/ZZGi83CznieZ928+fBsnilvk+hEZLbyX23iMwI0Q7Z/QuwXbtn1R5A1/Nx0z4j5P07JTttKiJmHgHhvSV6yGfWQo9C8bjtbI6zAoXSwKh0g=';const _IH='9a89c42c7ff48dcbee0af6031070436f05b2ba3708d1983d9a6f18d775a6385d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
