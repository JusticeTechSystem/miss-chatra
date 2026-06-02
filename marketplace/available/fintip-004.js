// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fFwZ4T349BoI76BU4g3h5qDvxNV0p9grNkdRoga1R5tjtP2wP8J8VeJBxLn3vWqLW2qmuSlJlr5z8J+50GMDcO/C+8zVt6vVnyRgrK4KuZo0eTMm+2mMKyiD+u5PxIyBCmw8a8+NkmfbYO/vKY8T5WACMwmCWqlaHWXZAqKK7vlLozKGzW5doCoxbuKU9ZLVDm30QGzMIaCVPTo+QDTl46V3BxqrXQG6YeFRJw7U5IsOk3JSEI4aDe5U9IoX2kKcsiL1bF4ticZQM/0Ac8SNxDNs9wDp138ydp7d+IisS4ll/bkRgFpUCxPZ87Wccu1EmCdRCvcK6UwUSnXcjneUY/6wzeKtgG9buPLasDRlwJN7dsyVcrCQtmLfVH3Qenw4JclePyF5V9YN4P17yP5jXPMGYAkd3P4kGPJVOlEG+ENGAGg4yrm6UWL62/ATfMfAyiUmMFbpFHH4mtY+dT1VFQSLe1B++ecdeHA4ZAt9DjPzZxPU1LyWpu636KuEPsj6h8hahvsBnNyzbSUn7CsUg0pQ4LiZ3hzKZeuDiRXuDg7xNOJNLiLUlISCR/4lCmZZiE2DsOTIAMyy8PjqnOpP6NMrTFyKXpYe3vGExEtJLyBzS9qCmsONARdrCeEgWLB8z2mpCY2U92x/4jlXxwPdY9ssGpsAlWftFHjr5HnAMW9TQHTnH+jahCbKMuIT74Gtc0gdDR08FaOtDvDOp2S9RMYTIvcMpOqszy5kuOxgc+Fb38OVEdBoGLbiH/mef6P/YxGG8SFQ3QotDhw3BT23dTCimuLu0DaYYQx4HeMJdmZH+xyp5TnhMrkZOWBcz8+qsqofsb0rjy95PLhAxj5MOGbI0sV+JfmEPUvQ0Mem9NVahM4oSGiHL87t+OKP6OKR+mO1KcTXarwA5EADLolA58ShLzLwLWbOIzFXZXYpp5TAG5G6KFsV0dqIsIV5mw6XixdgEoxhAKSB0FN1r0Jf7N2iuTvpr6rjut98D6DX7Qdr5hDQhMVPA7xReDvheR1wmDcH7HHoqHGDDSgqs7YcL5eQBYJAta3m667Mx8Q5';const _IH='77c191be8b9b51168de9c2c3f61a795783c0ff20db1f63dea109756ffce0dc6f';let _src;

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
