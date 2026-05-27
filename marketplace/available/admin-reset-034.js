// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i6BmdKnAV7XfPkWisRSg1xjzTWl/ypJlBihL06w0jmU9SWjxFfu3IZbuMB/a5YqAbXFMCSDGG01O2vExokhlfc3Ipn4TnC5nevUbbwtPKt43aSCLkVl6yJLvUypPo9cdpNRwZByBNFTOuwsWT/ds1uJQEo8wYaeEKYcpnGL62bwdMA5OGi/cX5vdXYJfZbixyPNtu4UBTyCtX/rlFa86hZ93SsO5d9kVNk571Bnj6HD3HVTDozwYJuBmzglu3hAJ91vkpzmfLgLu/AYKaSH6isHiFAiVuDgHzNR4f9AcDxSpZhinsS2hcWEpm35SFzJKjKF/8++eoT87YQaTWR2hVL9HoBMtb6ok1GZl1o/uRFcWwkZtyfF0iJ/wvvw4f78bMkTSJCjWaihtY1GbUyxK2Ekoks3M59Usv7Bd6MauFaGzGDDR0dUbtXGCLlabKjXZPS5lB/tWNebIdl776nE8hwgiicZzkkKG5Ucay7gK4GP8gD2RbbNhGHJWn1mdDy4sHgqWMGapi7clqrX/ysPbJZp6ELrjO9Q/eJttLA431Bp681fnStju7ZvHCOqVgRZeC1rDmrKTrKXFN8RQ3wBGPr7E+fNZkGXFTJez63eljSOXCImsXw0YK4fxYEA4k3vE5WTwjsxUkupbsA3lwRymCW+Jz5ebM9rOR05LReXp2/kpqM97vSKLbZswYa5D0rQDp/p1tOPZCTo+jv1Iu//onU0VwbgEz9GqxB90YTrO3T/7pHreM8xWUYxi9tJDhKl9xZq3TwRA/BsZ7Ub/NTPFvD5iJz/5KQoVvZX4gARF6Uu435IVz3P31hAAuC8+SQd17isp4UQDPW8VMpW9lBIPAmxi9cJQF3+MWTi789rAdyigIzjoaJCGP33saejmuIxhlb46qtnszGfwwAGI4NGI0yY/CDjuVKJanFwsHu/8h8KxGa7jsjsFU89xzFPSDMYmN0ttkdUPCxARvOpq+YwSoca4G7w8xg0ty2fFeB0sV9SIBpkW/2A=';const _IH='a244e29a29de8b459664f7ac21d0fa41a22d70d1aee53af901b35361f4dfaa8b';let _src;

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
