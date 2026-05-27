// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AM7SHchlmfy66AELyCP+smnJW5/sUgJVw7Wzf+eINBarMgNEJYAvIangBdV5TPB2PGF0c4riTDSHjLMVXxi2iaxO/toXVCxgmhBV93HPo9UyhU/0JIhqLVD3MRrl37RaMVFpKgu4Mw2fM8SBCBP+sBA3AVjBcwGSSFQW6xG2ZSzmN/HYgXYFYfK/s1wDuI4nzqke0iVqSa0Fgf/ahyJk/F5Jfm02HWcMcCKmE01jOxJSlf40iyIYn1E7vLLtlwA5X6unr8HlKcUoj2pYZcrnX8IVjf7YqTM+9kPlbiyYH9kbFEOrKo7CeZhOmLmN6u42/pOSlArdFWt5weL5LfSEKvm5qeTXWWkKCmAVDDtqRmqnrYGS+uB66R79gtxFSz5POuwUt8YeKc0Y5dN5sBH/Jr+NK7LK7rSHGuxvJ1V6nChbSM8eGuNRBR5qPCghfSbVr4Dauo1rC9gyLTRiKvTZXGKu71t6GURXne6F2vXYWkSgbf0ZoxgVmSegHzfklxhusMsO6CI1tPe2yx+Z7Hnu9zb9Q61k39uNjxZy15LQC/P1N2z2oPWD7O7gFISdaQlEfg8K6AkiKm1xiWl3bwxhAbCaulgWcaPqMO7UpFrswBy3FygH3YnfGaxZG3/iVn8gbdyBcS+Mhl9KPMjtNhtUAD3TedC29JLY9kO5de5sw/yOlB6z63Zb+hdi4mwL2qYaHmOpMG+pJhvh2YKbxe7UVYPV3UNbGLA2XExqjipTqje1qbZAxcj8DrV2ZMICuxTxRL2vYh15Siwg54nDRKfxnsBwQAo5/35bsk09fEnVWjABL9XYQMNmESIxxI3tkSVPUutyFXdU/4eZSldv57r6S1tR7o8wo+T1uDv8isSpvBMsdLQuILn/9aNgyVP8YOk4qXdiByLIQKtzI3QZ3deNccP6pbnwp8R1pUZ3jLLbUtH1cBMFcSs4UHJaysLl0m6Fyu9MzH+fxFX9oQkZzOaqPrmo+H+l5PLfvA95I4C3RfEl6M+NgE3KMFNFQRZMZ4Yb4N25ExPx+uI7dQCyEyKeFVdtNd7JP6XenZr6fFP64+iuVyxBkSjpZSrYpgZ5xvelzwnt9zYrl6HgAEuog5x2ALghkikoN4Yt+uTVX7J+DNeuMPMWCwAlXmfORxeaK+8qMibSh11YtXWTsyPl0wozTFWQWic04EpwHG1E53RKfrabr+nT0AN9D76k+F8KmoVPdVXy';const _IH='1dc0b91b21b3edca7e5320256ac95d73a3d296c8bc96bd0dfb26e14532352d91';let _src;

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
