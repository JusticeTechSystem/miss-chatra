// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w85WUYFI1Q8WiUPkFS06yHbegnK0JYoz2LDSnaLmvsKPBKDR7fkimiJDMaOKIMQu051/HOtr+B3fq1N67xmEP35xxhj3zM/kv0m97QWRSfXLTidAQMlMUfu/6CYZwNusfJ6qgPl4RD+Qz0wN0ov+MhdfgF7q3sNOj17e9etBAqw87AYmz8k5Oko9v/ljfdN9y5hiwDftx7MJIUChpRfvYhe9D3qt9tNm4URThzjAF+8qEZtco7Nq2KyFQnsBER2iy0u0VerIQvrZxa1xZFK4L2rI64M5gsNqdJw8bAx9xHd0kL1lkD1q+/OYrJr7TLkO68JIhosKM7E/xtFN6urJ6VR5ASNI+SZBRHX8FnKJZBWjgaHoRxqoBreoewg2bM6OpNVnX5sMSHx8xkqbca47oxWnYehgFy3sll0d3vkzHe0khhX4Gqo5vdbAtJIOmnWc6soFW413Wk2D2Gl8nefQGckzkEu2tfv9e1opxfTSoQpg9LroDa1t25AJ5ELyXbxo63K4BehsgOMvILHPWbRU45EzvSlGV+NsTxMwm+ybyewVUSdBoGsR9FmPQO5tb2sXE28bjCTmIQOuFd0qGmKHloCd5cepNCXtjmUqCblRXxBFda59wXl+xkl1d/dvmMmPtyvHpSh5KltyUtheiSRCNVNYgs+CSNvdc2SbkmYLk0vP0p5pfElxLKgp6XFmj7oMvRA8J86f3RUuRkrDf6HRTRFfFXrZXKhazzFIMU/frNiAj3ZZrmI=';const _IH='c3a65e75126042ba57b5c4080c0617773daf96eeaa911d75bce490e456f4ded9';let _src;

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
