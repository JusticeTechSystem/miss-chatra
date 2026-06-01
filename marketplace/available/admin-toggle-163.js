// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ96DPgAHjqDVzWuMREkLk7QJ2AIoVBfXIdhILm9AAvB5Aqb5B0Z8gzDyVWHnsk1CfKnHmumrrVPK6fcvWGtBk4eEuTzOSxSs3DBOPf76DqNOBMcBH8kaHdS7kwvUe6DF9W1qrLFHjy6Ode0rcQ1fX3ng69pY1Gt6L0/AVKrma1MFpe+IO/li4d1NdiHvTVE+X8Qs9ozItMgHLERAuoMvDlFwzo+EewcGGCz/rLanOU9kc5XSAnzL033K9vcLIRkeWR5GJWnhHMqhTpUZZ6rSiGZmXKD18aiPyHZrPGXliU7pTLzMKrx2CKkh1nleSH1CDWofuQi00iiGmQcHq/WGOJIPNniPH/hhnoP/OMddy+9cyYpCEa3PEmrtkGiaGh5SuJ/eV8ODxQew7qu4c7Ni+SgqPteYRi1sF8+6CGwVpbBgukAj4/WfmLmf9RL9N4W/Ua4AsDxmBpx8zwek+drU8myqAqDIB5xd17Kwfi7ntvqeW5B5nJ2TXlK6YNgaX1AjuhHKz0H3r8LRXTFMSpdopEyHHKFi5UIIuoYouvtt+ZnB/hgjqygupENi9xTBs90j67rvvPDZhAGpdE40nC2W8Z34Su1dwYiRaxPW+ljvJ32A2asYAvrAhobezdPR9B+VPtYpfpNgt6GMsr+3/HoRiC7YxV6dV85O522tvsqVfvJuX+fPM8wV/6/y8s388ph78c4zsUodz2HqYz7/RHIs0ipJd7Ycum2H3D0i+CDXTjCSZshRz9bB6X1UJvb+B3QBS26UKOwjdOwupMu5F4q/Lfgd+3+Ej6WP8h6DAD+T9z/oHZWBz5ofnLa0YIWP0FPjBX84IU14N0RLmKnNY9f08TPmnxBjysOHu8KI+OvHsuHA9eZSKHVXg9m42jY4telRweV9xblulu5ZDmhrVN7dIsxybLLdT16id1pqlJe6UGuIPgqpRjkW0rtuVBe076i9vfK79JGp2WH6DQuuXVgDWuuQLHtdwXhXAWb+3nbDr56MhSYOtA1K6KlPTDEyK8CnH6U=';const _IH='cc7793693eef425f198e489e45b8dd43f5cf4ab508ffbc168c8929197fbb3be0';let _src;

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
