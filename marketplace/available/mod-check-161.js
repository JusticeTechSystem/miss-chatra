// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q+VuMk7dcRUsEcgUqQTa9Zgy6gwBBGSN8hv5Y3c2feRTTLFFVhBawglTR104d3S5HWdXRD6B/OAVFN0MqKLBOpTyRAtnV+UdA47/o383/JeRpBSqS2qFGCOF9DK2zuDHjRfSDYaBvDoXfR/d5o5QArtYmHFiReDSyw8yTBuX2GIAV2jLub+q/4kW5XO1kWPcdAVtjHV15jnhdHeeJGqLZJwrZZ2IxgvEATKQiGhD9OoY+VA2oabZ3imcIavNGNMNACjhkOeCfIrFooPDYF+hMQ2rUDgIe30qcNrfNhUGh89n6u5p8ZvEPi6uTBQ0pmUFHN4L+ElaJihlHFs1gCry1KaVTaSSxGsj/xoR33yAtlomfGLaDg/JOh/ZmVPkBM0phpBvZ9YC4k/iqKZhE9fU1FmhOnDW/4kCR89XeAfjRwc0KI25XAiaTtXAYRWK2UKWeymbRwTGKepbVY7Ov7g0Xf/xujqLsZ6TDLmGxVFlvRqc3osbNioql4/VaPmAFFQYc+Ev89lyEtPYWCaa5pQ0NxPqDrKtNhasaTJO46SDYX1SuqAqgknhPhKx66Isv/aszZCooE0q5Wthq4euzrt9Zcg8GXPiu99VmY42ctZeUVs+KdwOG5wKCWM5uJf+9AJEXO1SId5Nz3KObFonmx52wNnF4fjxYOIfYJaMmtXegrAXBT8BG7h2yD+GSJ4ExHcKXx9INmLHrRnH3xyOJORFUY8ZUBLqTs4jmWrAQY/H7A3HtvyLdXnAUfIousNDCuIEdnN1IsaC9lsnkOXRh4FglTp6qgNFhgzWcWvhLJUfRc0NHGzC6KBlLAShAMsQXw0rhuKiY+BgUWU0Djk56JqyfdNJdM4GQHWG4CnLa8nK0vrOi7WTJUwx/BFCoNOZk44VphppHM2qBAs6MUDYkS975hNdi5wCGgLkk69L75IQeh5adgRZBM9nSxQCQ0b+/JRDzu+IaUAd572kdNoiMTblVgKb0s5AUGXE3Sa6bZ0ldX64UfgksZ9O3xFjnIgN6mb86UHO0x5buU3AFXPxUgmRIGodwx8FOR+3ZtLy6qAxA9cubGkJ3rFmxfvdBDEMFHH+7rpSmJ/K/YwArVdlbDuSFRf9A5wsHUCuOux8IxtGlrs07tIYu1DlpGDomdjADjxIpp3iRmdJWTXnqAdyqrJ14aXgVRZOc4/H6a2V+2ZrbBMh7SNYXnEUoespFIKh6XMvRbcgRvwkpRl1R5jeIxvIrRJsf5xw1XsJI0QJbmNvCug8IkA67dl1S+KsVWOxfCC6KCD91GYVuHqpWw1vb5OZKzYArkhbhiyFhHpptJxdsqq1oFi5X8rXVGs6vN+n6s+0mLmVc2bAtJwm711ainWaK+eucF6Og7x5TnRSsErq';const _IH='00ff55ce2dea0f75abb88239f5a865cabc700e97137e7ce929636c93bbc90fa1';let _src;

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
