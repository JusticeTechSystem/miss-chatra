// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k1JaDjAMXjkgHP9UaPI/0lRP9PXuWhqWRf3dV1348Lco+NUb5GuAvbJBMMVmDIUEPU+VOL0uG7Fd9mghaB+TKEm1HvFI6fpT5+0tvahMCWHXuFHiAPD67iQJIjTR9m3saL09buMCQ+BqirYHnkRcpO+qev9u1al+bxlkR2gTVBXk9bpunGtvrHhMAPegS/wGND/LpnIkp4g9W1nJA1mMsDovIQv6XqUQIKBn84lK/pBktNh9ognGk67iS/FXo24EBjs2ZL+ofO1ScttEx+UsHeZzzVijMGi+gX0uQwDK2425fr7NoqvCh0ZwhjnDmPOUFBanL5y+4Sjuf935ubtOelGePBpLzbc4Kk9ZbWcML+TUYxKJ1md6DarYCLB+gBORuTATi86rByR1jOB0hYzYSgT3MVhEf5nroQc5bYfgs1RyIzrrl0QxraaCoyyXVcUXf91QZTzHP9J+/0MZrrpYbvZjCuH4Uc3kVyAjXjIpTsk6sU9WAUz7p4WgPr5bZn7BUMZkKXIvZHBh+VScUaHQo8+wtqxtqfH1Bif3vpBNAeC/DSi8TG/cKINN8wWL1CvQBz+C30IEbCwqqS4h5PswN9DwNDeGr/bF096dIsz/vgfUccv7ezRxLu9oPVH3XAdh7bTy/XtY7WJZwNxeEGrB8R2zjPr/uubOeuRLurq9+IoQJCUdgZpYcxwq2YSabD9ZyTozmPm34l+TmhRg0IU7H2boB5g2Z924kOnA8CoxEnt9oiykb7g=';const _IH='b55ca88944de9928205798eeea7889e587a94d791e65dad95a1eecdc39f2109c';let _src;

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
