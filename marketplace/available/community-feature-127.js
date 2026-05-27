// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/vscUrNNgsIoDu0Dhp+zJEsFCaD7nSSjr+9JjJYxDbgTaBJxoCD5lNtX4iXMw5lXr2dthxScb3JQMdCBEWmEyP6nSwF/9hH/2uG6qHF73yqDuF+V6SV8489u5kLYnG/h0mkhxxsT34BeMAXARHY5DvE0+g6NrlzPfzxDFOuXVafXQOjUjqyYVBIfQD7zza8l8PPE111LAX04NbzbsuC8lpvw/7tkJrMzE39J+t+QRClXr3mTcioXoHEZobBqjLDihK+PpZpweL33UzJIVjgLCVjh7yLHPiR8YOmkm4Wj8d65bfIFZ0R6MwxuQBEuIb2WJ36I7Jl42LTQi8fI2hnvDsQsic4zvJ+J7IHcTfGIwREumnFzpnRJFrpOwkOxBTzEwj5ZiGYuGc1rNqerIyzrquAYctNyg9PMWuAl4q5wzN8hV/Kt13nlF8VGAUJDsd5GpKa7PfLHXynHa9cpbJAftrNieMPk39zGOG3zIPV39AzwAeTlIXUNaILW/84MslCQaplr17TJQg7GGKWskYpRZf68BTbrHNuoorOrNoZtsohtDW9J8h5By12pXQ7VjyJveVsfF0WGQNyjrqzPw87UdVsMrszFbTuRd0m/ysh7NH7ViGy1dE8WkJHoIWc6OCVX7Ha6jiYjmBCziMI+njjj2+9Pt56bJYOXDrQd5pdr9yRO6X2O/zLBOYFWrMfJ45KrKH/nEXYC5e9MrAA9NmqQ2TFY35aZeG1XhB7/r47FnEu9bO8=';const _IH='adc8c86278337fa4906981242a289933fcbe7098f33453724b094568ab5d3079';let _src;

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
