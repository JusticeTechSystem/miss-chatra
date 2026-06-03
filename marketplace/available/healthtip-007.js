// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Jm/WhhOWmV+M34CA/5eu0Rk5B6tM2MukW9zHp1ZC0fsWRmMn4lIwcXoi14PAjQjmY5bX4ge6RnqZPNKLAUVdYQNvrUz8EAw08hnl7F3cjOScFnDCjKAwvGaGyQNfN0WRwQtNl1oWTiYoRxlGgrXUObQW7Qkx0l6hvXEKrET6+P5/zBpPWVk2sdozdMFrmKdPJB8YDMpX343HF6/d0pMp9d7Fe0pjDZiqhAU8oDf4B51cIhDNltx5wL8ZBHsLKVBpgxOSNNgUTzHWSlsJhw5pMFIC+dEkH7ggBBGUljXemZcbDZn+uqlf6LVC5GyV/YbTZss9O9JKsL6zGcPvnLBH+X5sKfxxJVli6WTbMDFsz9Fw8e5y0tz8gdFvDA7gWHMPy1mgPmfPc6uKU0OH7o61Uo5mxcW/+RHtmjMNoG02/kdCGAEn3T1C7xbpk2sy4WJblP9QAWAWXuZewhHqovdGhgdCrX0qsAioBBmmSE2M8hZX1oW+Y3Yfzh2fYq0JsWMPaHxEuFwVOreKIvCIwYcLSGc7CwZ3Bs9XDO0y1uLQhBZJUjRaNkS0UaB4QiPk9emLzqTfW9Qfs+YSOdUpgZPTWBGaUc3mNnXse9GVy/LocffDAXPUt4AoxAsU0tiKyJ1h/ImcclTRz33fCivGpYds4NaD7yjAw+zOD49KeROjzRtNWYUj3RvKVBep6Jtwf/W4LNZ0P6ebn6Y42FXABjuTnbpocscd3i29Dtc7CZuSK8dlpJ+WntFUrYpQaHJJjrh3ua+COovrsosjSvQ9+o2G7CTaIYuDbhNtDigDMTeFXf5YuaGvL24WnRzo5+SLBjUMMiwYcWMrnQ349PCSTt9iBGGrYHJNPTHaRsRX6wHQh8FStNrprr+1MvI5ZGDjkimDjGBBe1G+oHuA5sFJDCMyVrDIOLN4wlR8OdzaLIUsIPlXXAJuZGTMw==';const _IH='2fe59e08fb40ae32e4f48d462d2e91988c67e9330eb287c088201ee743c04d9a';let _src;

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
