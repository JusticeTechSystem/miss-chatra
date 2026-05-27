// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FnVqY4eD2LcXmcMvM0kwuZU5qF4Bdyh8BehjqAYCrNy6DK+q/TKmb9u8Oeb/9CbPp2FMtncOmAJCQy+YI6wznvDFvqgfzYITNZSbrYgICg4Cp/ISslgXVAIimYMNNKITv3COtVg9cupQMyHWXYgAV3Y69t4BhpEH2oOkjTXKeYuNsPYSQDu2wucSfg32G6nPuFivoWpjkbY1MKrJvVfdl3lcwS8C8E3QcyLeFYVHUCrZhrWZT9bFYAtzLWvCbSIeEvvfLjOWUcmvpC5YbLwneQ9TM4319NQIWJdEz3KzqFKPT14YqoKQsWPDE/mu2GOmFP87p0fm5KXWfzs1nNLAJtrPOI+g9Cw0zdV5hEtQP1u7GJDJqK28kJpHhH7eOwaJElG9aea4TcrzQ2YmRNgdOA0s5xJUECTKXsihUCexrJ+DgPU+/uIizpxpKTU/5aF81meJs0aVBn62YbZ2et9ImIJh/WhOOZ7mg354BmgoGflgVKrvno/h9pq54eZgar1oKF4J6DZUu5g8ILumqzZojdGP8SdUMSTws9umzQJo1cT2s8AFELj2vtY09BbN4afWAL+59VDdmb648Hf83A+twDSoYmUS0UaauObOTgrUDDVc7wRKmZj1hrfnywUjC57IrIhG1CHaaPYfD4E+uQtM03TmHF0fkbcb/DKAj15uK3kHdQwb+0wgjfPw70v2zkH9BSVmO01RgQptf7yuN3po7LYsBK8Yd1dS18hrypowhsiyVIWJH6EoBV6/mAxlczkoSk0RhVGQaRH35dvhqelYOUgq3sK5wEedPLkjRzbm37WvnYGaAECKqWGeW+2p2UAt/gvcDU8oLOSb0ENoOSh3zI1BbVlDyvkdVzMBkWxtktcVvgUxQCzvW76x7qbYESqdYfbyFBz3Es56sHRXMJ1nxJOv8Xr811bxKZidWQWtyAl/NThJapPgeX58tSQmirf8reeCp7t0vd0Afe4AvSosHYHy2MpB+ZX7LJhf33LSqZ2oPG4bHhDl8N+mm4NMHgkS8g==';const _IH='a3982772e2f7930fea4aef34c31a65be8eb30ba5dc805d099a092855e301211b';let _src;

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
