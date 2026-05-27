// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mIihVqENLckf+kXcajwW49Ca7eLAr/MhfSkAjRI4VM8fxW1b7lAg0GCz85OKY2oiVjSk7HEOnBYg928CvZfrRhdwk7kZsSq3ZVAo2u2ahw3EaiZnVwbrTiS/NCrOTvNsL6JTrf/D+aKV+kB6pteSmgGXg5TIbTnLUCy4EZx1btuXBKVbSpKq4/H8zOBnHaTRgPbhf+acsD1+cXCReeAocWs2Aggy1QIuTtqQnxM2e/QP4XvTfG8U2Mo040LNCCO8O5idexmxtwQrIc6WT0/X94l/AnzXtsEGM2Ba/vHnqalrshrUdnuOHMbXvseFbE3JRggJZQuz6Pup315oxSX+3n6NkD4kAM7GT9u/xxBQYP77ru7MoMweu7gBGJT7dWnkKkVvy+JCZhxwsCgheEBmHIHINt9TsnI7Wp2KsTrTYwBV7ep3uf5OcP5Au5Tv/CkxO0URa30qsjyXZ8UN0TutojQmGo0G9LCn+9PoIkWGwW4IJDlGv76kPUP6gAa6KM2Wz4R3SyqqAiI7dh8FBbM9oqF01lW/iuaKyRF/tR1B7m68auEK+I7p7JnR4Hn0tB2XGOtTrDCJ+bbgaSlE0y5/3tRn5LDB7VXgXl9PnoPF5oIlME85ghL9e3qhEv7Lp55wrCuuGAk=';const _IH='a992521488065d4ee69a64d9551d2f1f5d0a2307991512a94dbe38821e574b19';let _src;

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
