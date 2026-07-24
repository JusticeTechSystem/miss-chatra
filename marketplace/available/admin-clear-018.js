// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ/i1lvf/iGrcoz76oBfSnG00jX8VeldgYGAcniIJMTglJDs8I+FNGO9LtgjGm3ZMarPmjjk4Dmx10lamwF+HOn91zXWPYmILw/RFZSWnZB/5QVMHiHodCcMRKBLQ0wFOPnK6Wg6P0AgwDzALgqAaaeMmu9LyzgrdrLeEAAlLwOa0zFMEFM27blG327I6D0prYjugvDUtGYbzVyQ8UOcEi/GkuUxw9VnWWHF4O0XZUURUEj+TMRfB78wzDywaMMaUL8dWSyY4G3RGw61vRkuBuFz2PitDteQ7fIlg+h/mjSloAPO7u3EZvuFBKzM+6fo6XFrattkzmk3x0GXaf7ioWWDvtGgWd4fqMYc2s3+avWK1dYzIaFVLk342N+j04jNJc2npbeohOVZCYC+0/XD/i5W5K6WJTYkaYM/j0ww8CRHUJKUXcdK2mXEYlJXCzs28qr4l2zoOg55H0dMvfLHBxNiyRICr/nVz9ykCynqkHf2cafNT+vVEqCxD39Q4sfXOWM26MbqzOq4aITr3eGJ7zDdROk0xofj4+l928lCY5VqoMnmc5kOQJ06a61UEHhzEhrr/7DYrM/Xmlx2Z6be1ls6SlWBDmvf7RgWYieaYL1dt0qnyIzxAH1nIlBf9NHamviVLNpSxILGawmGajWU+uIxDmgGfEzF2tuVh5VXb0xyrsowaREsek8dgE8zIO9TOtgwNjcAN7Vy6sEAQKFkaGTnCOs6/TgOvuhdJd5JtEH6DQr4e01+gymuDR+4FwQKddB5uo6t+OfwMTY7Nsae00N2B9AgO2HmNt6lQ1Qurg/vIycvko5zkk/WWjc+gZJn2zMvHr98r2A8YX9lRyTvVoBe3P8gfyHaBDHAoPe1q4ApSIoL28sRWn9aTszNVCdFGbLBEi7ozJ2HPaQlHdiRhde8yk8lGcdA6byDoEvAKUp9qWIaJW0tdlAijJ3LNBT4g8Rdw4CTE0gHqaek6RQvsCfI0HrblK++buseRAWgHPB3w+dQLYLA==';const _IH='48f58e7dd1f9b0f48063356784087c5541a1b6018e8642d9ccb1658396d22e8f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
