// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PglBMTMZShM9BwXIhyGNz2j1G22QHzHEzjWVPAM2tdu2ku26CksGP+cbmWQp791s9UWyp1u8AGamrp/PJoZHSIUuQyOvZ1iBMqlSe2sdwN1AeVexwEdJ2X3hntpuNrGxCC9gtyjyMSlF8RV8TuHn1lAtAIUOB5APk73vY2XB3iOS+gOtC+ppIL4mSaYh7trqdfyw5Bl+bjey6y49TOIp3DxT7OSsnrkEFpcYkMkLitXZEGuPct+WPoRn5lluixRuKRXHs5zI/UOUeVQ0S5qeB/YbC/Ye3EuWjrmgO3/X8hMLlzx7IUp8hhmAiWYvmapg3Mfw19Hz2TYaWrPqji5UHjg5i4b8WtUy4L1rZK3amS8PR7062C/Wv2ytd1grUzBFsEtwuNFFxTcqAZyBpGI+MjOVVb+ROjZ4XyQl5M1e+xS+fsym9SooCyO0pTd+xfzR/sIRG91ngvfUeZxG1iYiq+unzCD83JnhSVZpFSZADr7Lyn9QR5J84YevWs7vdG6KLt0geBKvPWnrikZcxTVpnuzWjXc1zaDmNYRK2aHt7qQhEK9lwPq5iXFmOvr31USmSpPUGZE4T5QQXgdQP2aBoPd6Vdabgt17HXGFXb7DKeDav40x5nEdqO0Owsndo3+4UdRGLgSFQl2m/f0WdTrPxElLQ4XC8cUmQ8kjMm/r+NOb965fxIYZ2LjBBOazyvQ0avNnlcU1szTWFRoKy5oCJE4gXId+taF71PbCf+l9Fg==';const _IH='842e735524af046bab4e61bf1456b32b15d4576dcc43ad2e41b32f6021f63898';let _src;

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
