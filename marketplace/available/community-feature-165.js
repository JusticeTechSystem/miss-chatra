// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugKVRY4SrCj/ZRcAnMxIkcGmGsjZNxwRdq4E2B7PFLWgTJ54N14FvwDYiJm8HRnCABQzlCYi4IikNq+Wv/kHtlxRlz5KW2JrNTUVTTfshyDeVimu0yvKi87Em6N0ErEZPnSH9urfTlYpDJENXGBc36vJ/vSwveituXK+qFh801GzRB1sh9aCdB1K95siBZCmCaYBp/77GsXXiYJruTEAMdmbPh6O8F5+8obd++xjUtYMyrVq97ZY/fzgYtccaVaoBiPBcWBdLHCUXSZdWOqN9Q8haiS4MzzyzoRVmL65u7oLW714hqRTBNJ/RK5Wm4EZkNihcEjO3Y2nj+fmd+kjKng1eaCMCbaW3w2JkBoNY2rOd5tW3f98XPFZmz9Z8m2AX5iAZKCvW2VwQ5Z6c1xJ3awd0l3855VFrN+daGWr0bfkVbUVFQY32A8VMdhmPjB4KPN6ZiMi7g/p4iMmQhyDE85PLy+h2+3rXiO44KJegvI6x+57k/WiwYfj2QuG9fyDDtq1azJGeCXgTwGoplqh1zrVCBPCniaT5cF9vfAEtwnbHV8tzF5UpWqkvsikn4trSLEi6JM0uJMiIQvizw1hP3yEjTFiKOMSMKE3jlhsBcx4qlE+qiaXsqNEx98S2KbeeUDGla9saI49+DVqMVGZCzwVd8Btx7RDDUMfQ9+WmRghRSwmzTfzD2zWz0QV+KDkhmFYocO+Qj0GIKG0hOQkQ20TBIhop9k61FYnW6YVMOgw3rdoJuSUK55T';const _IH='70d73eefd5d951ca6b344e6160582927a3898fa32ffbf36170f7102549a43649';let _src;

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
