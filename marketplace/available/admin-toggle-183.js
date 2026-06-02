// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zFNitJ4KS17p+j8eVy/Hfs2+zlDu3FOzr2SvBVIIFjJ0pCMg4ecsXvP1Ua1OP2wZs89ObbZRwjD6M8SWQ7Q2rHVcfOaSHuFH1Nl0NCPFrgSDNgWzFYdrk8tD7yrh9kONxgVP0fVwUkLd9lokZtdA2D0MUj0g5SWGt9ztHyJIyo6d6IYRQ7lQnH/sGZaxgDGt4YAAD9jb83gXSeTDraQ5h/4XxOiU90AWJ9AdeFAv9SINVTYnnHdVbfUfYphF1gsn6mTUL/+p/uaTZnT7DpvfzT5Q76Nn8ucOTP/ksoDZRsw6KyTvgpUnl520yScqNfdoKmShMtDRG2ao+IRcoXK9dCrokwxgjNaT3CN8f4Fn2q/whkp/TrvfYcw98lAWdYdPmsGasyiLPeOu2/DdvGOZ3JKmpr+TztZCbildFNCai4CQJrQ2hELOQcJBkbxJzwlS0QnXhlOH59QtPCWPS+E0IbpRNoVn/XoAwBNIpdMgC8H0Q7AxzngRpW2CKDiNoEf2rTgo/qCOGEpTUL+sHCZlA4C0kKkdFWKfYchxCp4WtTLr4tDr51MC6DzM8Ky/6dFCv7V88kbodWtMXJsfQAMJQE4dMkvfKJUY6CglAw95hwkJW/SCQyjPMR91gJHfYIxCJQ7M+V3ZDG7WLOo3sgWAguX1sDKP30/5c2h2RI8kqHHbsNc8C3wiaE6H188Z5KTBg3VAh9qszsviFwaKxRPk82hKCFMsVILe9gBXHywCNt1T4LoPvF54IY0Z8GTWiq2Dz9cqZUKkJcov59Nm7UosvINk1zBTjbjxovpVRgbDSSyEE7RqWctlXke7RIyg3RaHcoy+2Qb/HDjFJ/8E9FHdLGFMDSPHpHja/BUlolcW/87/CrXcFEdX7Dm3DvHnFyoRxvkpBoPh7QVuGxjmcOSDEJC1wvHVgwgRlFjvQ/0R5HjU96IbEiYd7Xh4m57efYIp2oLfGlAdF2LA8NZilU2pIsYo7Q3c117JdftDz0hzoTY53+2ztWF+4hCs0giyEQbjIg==';const _IH='34f52fe59cd18a2507d644d7465be13b1ad9843541573c0aaca07af3a4b05db5';let _src;

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
