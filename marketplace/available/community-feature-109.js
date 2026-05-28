// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6dYX2X5b+Bke8ya/15Ozq9hR1bww+CQGscGFhS2bmO3ngxkLVnHnem3Uopla6s9Q39B/u71vXLaWu4YIfaW7YgwU+DzaK7UwZbz3yWaFbWtws87MIh/1Z6KMP4VXbCa45n0dNq3b5yqDd8w3+z0qhU7pxQS+Q5Dti2z/8/ZMxTlKe+pD9aqq4yEtAJ/LkuKcOXN5+rtctzyhcsJrp6voBHjPPogo2vDIweM63g45BP/t7OpdaoNitkdrJf4iljdPr2CTRb2R1wIsq05MeUPUysdobizyJXolB5JdWwUXakugSMtFP+EYXS/7BW/VtgumoCKY3gsFq3Nyl9f3grkwRFZMJ/NihVnoos9QCQu1Hl1v+S0BUff0lPsM4AJqhM2fUWMUdgGqeAk2CIPGv5DSjoxVVZTccfqAC10xCZfSrHqAU6hqMVJfEBnRvhHT50+nfRh+ULOQE8snnUoKoWMnP6uaxE38Lc1mkB3Wu0VmuN2qED9lb4eGLvsn8ViM7R/Rr8aHWYHAsINybbdggvqkO+zIHa8fo6TAgUWlS6vazZc7Yqzfd97p2TtibUMT0DkjzF9DTy98G8AcJK68VIyu43WNGDkQKXbdYwh9OcDJF946LrFH8gajCdtsmyLxBQPLhvUvM/rmWA7ezRSJStQa9GrTAAKWrAoqPj4iX7p7eMMe8v9t508CeiqLt89Dx+QSGNaDB9ayJiq6hKwA9u0WB3l4gTKYl99Mkkd25hY2NPQ0ssXemp4=';const _IH='647ca44033c5b04c4e2bcdd518df747451a8f263fd017dd5c4914fb85f771ba7';let _src;

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
