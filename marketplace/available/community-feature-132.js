// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MjLiv4lsVE3XuunQIDVJMID9rgn46iIVnUKcYGX9j63joxivdqwa4qT2QoXQ34VXW83+NMIFpxpHg8hU7S2IfadBuLpmDeeDyeHQ+Tyu8Scfyioeavn05p3vX5UDraXZGtz19JnrB3GYN5KM3ih64TdTTSHRhws8GDAlj5vo7J13+vSdBIad7juMzqTinJp+geRe0uIHEaAzcul/kNH77UMK/EoIYI7VQfd4KUx6o0mWpOsExtHEBBlt8YugtQ6vJbBhvsQwneHzb46QTd23JNZobE0W5p6yd3CCz+Y18LFDEQg8C8bbOesZitgGj0ffmhJtvn0+kaQmeeR1RsaU1ffZjjDH1KzYNn7hwNJMQboJQpOq6VsyiMv+Jk6go1iC1/NTBmdsQOFjt+cfnsb/nH0cgvVs1UQTHmil2WFquPYJchtitP7cGuicZirqIAVtDazDx4YXqZYM1WMDgPfrbVwcsYRedxrrRLRJtuyu0CJ6ObiFE2ia1qjsiabPdRy9W6AWIyb0lXQtqxyVkSKIXS+D6GR2MffHEkrNtrZnQTM2m4OmfhXGyH1pW5iD8qdguuvqrS35FHDD6NjMzsOpKLTGOliKaJ7BtafiNSkZ317gk4lUwCY2mCgvrlmoWlFZu5R/S7zgnuE3v5SDnJNynRUsq3c0Zl/IwFxGVF4NMljlfUIaX3N+BothOTyhVCY+krzJVW2dv2CsOOC+1+WYOAGJiiKt5l7G+gjCVqZuH13X0Xk=';const _IH='560fed7996e339a49f591803a1bb40880741ec79e7e45d36bf4d77722f7715e8';let _src;

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
