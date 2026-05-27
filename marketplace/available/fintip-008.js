// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aPvbk/w+TB2dHL/843sEAM7tkgQ1t030EFmeIMIlNP5di4qPxPQC6qYVIm1Bo4ojY0dKvJ+EbhNMzEtVqXB3YLPoTK24vFdbyZnCW+Qkz/ivvOGkY4SrM+nBoMT/uHF7SspJsvHBh6WNNMzkICLlEoB8jVXBg/qIS8w5oJPfYMYJLTvLVGUQBN8QZjWNV+igU0P43QS1g2Betgb9WlCeH8qA0BIjs6t04fxz//fcEZu92REXi5hJzWEiQqG3yVKPLep2O6B9hixbn2kQeuSlD3bsLwobqXl42wepHbHtJLwiaycVxPpLjft+igkxHkhZBrx/ASVkZ6KW4lD9QV8vwyOOOKrk9uk/mvriyyIW/UWd95Ki0ZfXVq/PVNjjzkMXULEObkqjHoR31bmIrmIcaoYPJ4huJKXefv6XR+6/XF74zj3kwdhO3X2KsjdkFPzwA4DizVfo4NOOfnE7lBYHSGt1DTSQ1X1/mSaqT4JwanKzPaGTIgFrTJmlntKxqpaw0eHX7Ho+m44niCh341yrSFqHiGO08ySG+Dj2HUvTS5D+lC3xBwgDmDyxX39wM8ihS0WDNcFEXaDmMlQJbRIgUcjeP22yNW/UsQ6Ppc/Du7AZRIcN57RJ5+fMHPx5fLJyadQJZKS5qvUCp4HFxO3Zmw3mb8olVO8IYgmJYeFlQsBzto+J4Fnv+wi5/Gv+7cH5WODCzvgXnUofEAjA02PTENHy1e9K1QKOJuZylKTzY9Y/XMmdHuJDiCrCm7zf1wK0OGyT3W6H+M+2sIdvTs+TQaPtR0rdHx+ANetD9a4k6QmmwHbDVSLijChAQhi4dZW6bQCQEsK6iYiIQGL82CA8+lhauNHLo5tk59esrLAWsc2XHSW1FTwSepQjxMO98hxrONJdWcHGwAASFpihq9ieCslyEmCtWD0yq/6MU7WPacq/wHknYOLssS7JVgFo7fG4Bjnk0eDaeUaRDcc0qNKFjY4pKzRTsFiN8baMm6hQcCsKawSBIf/+jhy2NuHzTaWhNqPwrLyurjjWEuHqNf6RerpgAPBMC53ZHnc/0Y1P';const _IH='140dbd9cf99b9c0fadee10ae4de1d829ce86a72e40b6436d15f3d1540259a45d';let _src;

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
