// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F8jTWvc2ZN/9PurgLhmDoBOQa08cAHrfqjEK3nbhNFJe439KUS87m3oefx/ZbJqYUoUIRdcnmsloBwbCo8UwJBEYYiNsE6JHuCAj+kpiZonuvWJlzsLfoFAxE4gV+TxB12nKECG3BWJw/JEfdFHWu7Alej+FS1rgEiv8SYdBvNnbo1yvyolCuTs0ZsX5j3Mvd/ostzZaW0s120ImZSXmdDs+O2RMY9ymjNQoZIurXmJtYYO4hJv7a93lyvPxaPWJqZtbjAuyFrD8k9fmFzr+VjkG+L4+ML9jvtqYEEYrZQPsqcuFA3O0MZ4U9ln3yZ5AI/0fGcREFjJ7RotkzBS3t9AvcqL+zB/warY3k4q0olOe9WSuUnmd6e/kcO1wJEkzWwLznYf6R6fswtSqsD/6eHRz1die8bX8jYon9P/StEnAJGV6eTHrknMIFyI56R5mpqFkxSbPrtkY6CtbG0Lxw8Ki4tjWVUTuZ9F6cxFz8SZC0YVd2Q/Bc/V8gZIoCGqiTwncP4jlpTErp4+kdfOK4jPaPzQ/NoPpe13tBZR6eVftjvlgkP+Wj4NZbcgOjp1SXEPPFWLPLN2O+1WO30fx6xO8iNj5ogAolQWDznj2hucaxvlCQv52pKolxKegpgpRP02lBY4qK8WssF3QvTD/Im4OfSgf21cdcysa/aiopWjwv0yErNUAZk2v9nJSLS4zD5juPOnZTIyroZHI9HXUpCl1OVxCstOxBIQ1tug8V7Uu4ORYJEz6v5SM';const _IH='25abcb454091a9f448cac9d39643c14a0e75084c676758509278ee1577f8f14f';let _src;

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
