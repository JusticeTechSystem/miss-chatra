// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j67PotY+oTZOh/M1EovAN9P9VgIKGoj993dKsMp6WYYQ9q9dUHX3R/u1phBodIUE/s6khQTyVPD7LRienng/iv7fDNjY3aLnhhwKjCuOGBhQLThbbJrHH9q27EafqZu8XPbN09GWmWEzwYpHEG28USHeZ1gsdH1ribGrm2WLEuVitAMOM1vJP7D8YdcgqPCeknxLae1/kizeRHX6OZshqjdqpAV5DyHLyfImGOzgHZBoV359jLJCIAQHR0O6OHHkqR30ev7NjvXqvl/wZUI1VBXS5ebUUFUUjPU0JpiB/+dFZurMS0n+98e63PRyUyV0vQV0Bupxt07wUD3CQxbo+rkt7lHDFBVSR1EMa7M/34xuTZY9DxDUOor1Bnu7AY8Jl8gqvxIzsUe7dUjRpZxAPaN7F+vwHpTqGkA1z3/P/dWYgmVHjwjtfXb2JUMumY18v+U/W6YQcQ5cZyFb2E7ZurmBOCJL0fB12a3pzNM/0J8Kyg69hOefwJT+fWlYwhD5fcjG9IBa9UUQlsYLUEJMtgWCMQ3qCtHe1vQ26gwkw2eG+gMhEiryW2k/i51FA85NLoUI0F2dotnz7KSGCWY+lv2aqmrP3MWP2v/OQ5zlVYl1jCPVJU0lSUIfzqnsdharTFh2wVKQm+2l9nrh7pGCroJDm5OXgK4l+Yiyr74zDa/Uk38zCCRKD/8g9Hyczb0c5Xc6d37Dm80rGuUGLLf1zLfq7D2TK84NP4p0DyZzdF6rRh7krLQtdNsXWNcx5y+EFWaUIkiJriUUXIb2eGDHBreFD0N5Nr9x/isEHUa6y6ovOEVc+9r56eeb+SEZtxkhaoIJprhI/WgUvdE7nMg1Q3nTSnBnnox2xa6OwX7r9PwnZpKK+2Kv8rzL57F8SeDrZ/NsGXpp4+nNn/17r3wkux43qfOCRGAwh0B+eV+STsMPaXprLR6J++SUHrI6Ae0OgLUScfyb98U0HclcBLqZval6Us9JmNpwhYAgSqGxWEKbrNGAuiABRg3bQtNrqREP1lbpaLSRuji1B/LGVYEqcfFP+xljKmHtl9voy4SL7N/d/Y+K0qSbY05o4vlU+Mgp31jE+tAABwfv1QVjXnnV3Zmidz1/H8EADQP0OgyYj2zPyVfiZ9HgsGlJ3RnzaJsPBkHHLy6EhQdJVK6LnsuHZSq0EP3SqyUhxnj2BMyR4hx1e9c1pjZrn5AiDRFF9Uo3PwIFasaK572pU0AmgT+U7Dq002ELWK91rJdQvrHYVsFx5HwvlvsK7tr+eZWo5dZrafS/IFVT/tqCnHPm2k1/fRPMXP4q14zfGbaYt/cy6wfZyQ3kt55HJxzZxVY0g14cytjYmzEn6IGnOL6C7GN1azKUQHVMpqwrkIldwnUz';const _IH='15129ad8c91f67ac3840a1b4e1ab5d78aff32a973fa4199fcf9d00ad351acc6d';let _src;

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
