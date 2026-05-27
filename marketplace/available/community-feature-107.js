// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Iz+ISqjT8whqPfNcVQioLJ7RSWjBRxmR09CqoDBs/AXlXyjoq1IZjuhCdWGafga4fvDerEjwABU3n0MUR3MCdD0fJn7370c+0pm81ozlNDRjKvJ+QEsmHhbe9FnpeNDn4I/uav4a914amtVQjVV/zEfEtVo780JYiP2tHmYk4Jm2AdJVpr1ngFPSVJ25mVxSkEPaE5bam+9wY5ZCaV/wchafsUI4STw1YVVeBKX95/l6xZGKuus3EYA/1zZd+kdfm2tnVPXI71nOOhRyt7untefN966qfBUbAmGJUmsK4JWaynu/wL01thHP6/SHT+QHBYV20xXRgsfRvOha3dspPlgMRKrxi1E83SVuFs2ID0RndYKtSDB7pzF0hPrbYeEVufi6iYp3ri0/iihhSlfy8sk+WsjMH8mHEgT7rb1MtzFSgQs4iTdi76dDNxJcXyxCVmyhGA8FwgmDVDLjUquhAEt68m8oU3dW2FeEZhXSZDEz2qpWd6taq/iTCKYUuaUBFR+l4gr11TI97iHgHh5GLYQvHJCv8n3oly4z2FRMPA5/tWf+ibwCl3LNPOkfRdyf6DsNLt07nCzquAcQXKJjU2BI7UmzQprGgPQaCu/I2AYLJW/0uxznwBzgvH5utE8WZuehIMVxK519P9FO8MWoT4TQas9/2SG+0HvDa4PLlxf/kbp3mHKAIDk6YoUEWLP8JKHH87Z+xO5/LJIhpV0Byj4Ewe4ZmYuxgvVxlxhsYd8JGJA=';const _IH='c12b70f621c15919302349d89c0a59acd2664ab69565057c1d23c766ed2ae798';let _src;

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
