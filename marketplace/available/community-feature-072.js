// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxVQxSOrdzcnvoXxIXveTakTCRoR+1T/KawTUnd3zybVCJlUm1qnwI555WYgJyckDWn0TX/ulOvwraWvsk5AQj9Hl8dNDWxC3Zkb9If+D+0ON3AP2cVvx86sa8g9rUJ3CODVTNgRHlLSKBBDxE3GkbN8OOsxW/HVTYn9TuuyerJdXFpYKPoSpONb8X9WBHrcve58Z4/IJNwzBzdfwa5UlhDy5IB4gWQU+clDNDL6N4AbBa13VtMgI6AyqDSvkhq1RFY16RwiPh6XmC6wBfVXq5IDxFl30OyN95x3fHPk95wCSs/AHbeVJD2ZQ/RuFBSEt7jk5eB+QIDipC+GKd+TEydBNjX+EMTCM/icF9ESHDXw8Qq6NtgzHMIlwWCdC9r1ilwPZtlFIJCedGu8Ux/88xN6oyQ6sayJJAAUD+JEBZoE/hA3STIBcoUigy3sFBhEWheMqG3NySqL+HVd+/WSYkLdYAcGk3SyY284bA5fhQRmnJNMGz6bRZNXy2sp4h3hkV7aDkvayPx7naM3bDlmsTaVDv0ewhDgdX5+qFZLDTrTazd1XAxYjA3Ecwu50TY1aTBoCWZaDNu9nAbpiu4yk9S92Fd9tYOiHcyhnOH8I8UX32HSFED+s+8DsrEsxjMAva/zLWXzQF141S991edPUw8DoPg1qkg4hJA7dlXyOikSf7rLcPheArW3oe1MiH6mr+5gFaSvydZ1WO1DR5mjxM++nQWJZEAfHldh9K3lXVc=';const _IH='d531bc927a092c78ce0725221c4537fd88d08db070371cd25825d3d185b42b7f';let _src;

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
