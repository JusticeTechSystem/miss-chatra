// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eWiuPcHrJoJHEXS78uhBpxAEmRltqyNh6SYsGM7nqhDKdTc3gH8zYGSUBWGl9xOH+hYZexNAJr3K6HX+6qWrwtT5Yd425t7v88K/USAdqkcgQOTp87iUzalNk7MSVBFryPcFrt7WPxnaxDDEsFMZnSnML2g11OCfEv03L+D9lUzHQmWiiCw66CeSNjXmsxskhK/4Od0e9Y/MZH3vABHTDhhcsPv2EUSa0J6Dvkt9ppRql9TJ2WW7Tj2qmG4a8D/wuEMJkoyF9ntk7AuTGo5jXd8gy8a/GI9GuGJejQUfpbg7OmBTHLHQ18FGxI52Z9Q9Fei4PPwooCfx1YD94fzdCGlQH7IGGZDFLpSlqCbief7tKgjieD3yPS+bsInquDFQUFhupklYSsMbMPAVxShMxOndNsLXgeejgRLVsRbh0d7kbVZUuPV1ruhUqJwHtkgiKaxgQ1sylpTFw6K3DOGmcM7SfEkcNtsvsEJSnELC5RNIoIqC83dFiboGzVTUVbtLOePw3Q2kmx6fOo1OpOCvoXJq9RSKSDj0N4eLfCvvAYoEZtHFokposNen9ubt/NIMq1M15q1WPhITPMKAQPqKZ5u51DuMkDK1Grd0yeV+Gf3lO20xaVa1MGddZr4TJMBtbpHrpsrCwAUzUKh7uhjXr89kIri8L2gaKlzp6lb14l0p5gHgDNyAww==';const _IH='908e4753f7e7a4f76b648d45608fe2e9fb2e8e820b654dccf20fb8ce694536a6';let _src;

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
