// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NfxYg45IAk18GefEZzzSU4mCyo51h6yWhqksRpbK/rgn+thTIwPQQuCHO3kXKdlBviIQBWI9nQXEUvP1NhYLGbKkO8n8c+MDnnkOGMnRBMtqbTzuxfH1fSRIy2kmls5yTL+dGTvJpcuwuZ+Fe0MCW+LuSQg8j0FukYCsHzXCmc5cLEp3s7btQkrSuilOW7zMP8/+6uNhsP8eMuVUvSVFIMrroiOM5Qg/9kPFp7l+hztlbKdbEAIUJTRA9Nzqh8c2LUCoDwtTuuXoQCmrIfG5WhfiSrS2CwpLWhE41W/QYKL8duUXJ2dzeVaWgBvoRYyjlAv4HB+SQ10Rb/n0rW+QJpq4b6fHPJVj93CqencDNWToIIeKXKI8GQqFruCfd3JXmoULlDoTkiuUIZBX4TyGF3BAbPufTZxcqd7OmCvI8BVqCHsBJcFQuMq9aQOBjVwygLOAFjfyUtxm9NrWhb8rsl1huk5eJs4iIXa0WU45cOMhwuIiiNG894C3lRaWrB5flttVYqBzN6jEbWXTLs6ElRQv70lA8tEAazAqtJ3n3ppQu8rN6HRmKCHEj21yOe9FXIETY6toisAMpGqKff+XJmOxkAdOipG7NdIfjWOm1CaKKAP7hBhdkq/3MRuXxfjk9oJb4QZJAJXXfJsU4yJg8I1j5Tyt0LgcgcXplXsQuJqwWn9dqvyH8EvATxwfmX92ppWWrwuUtF2Jx9Lv1WL2MdoXoxhX+Zrl/GoLJ1LgGTnMSYXxjWeCxPOVdNNIIG73HYz2KPsJFg3FPeDzJQKkDuOglx2BUBc7WhAKJeTqnlKDJ+IVXuJsJPNl3MBqkIgSga7b2cxIUQF5mr04dFnpox0OHFkq27qZJzgnr6KbH6oN9O3ZFQKg/MOUNxK2L6MoTdNcz1MKq8iZfmpkuntDQPmaKfnQLyE2gLm1nbyBY5wrJxNefMeK6BQ9CnAUJBjma3Et6sdHudBOohkjvX76I4Qiws0BArj7f4+YcNl3bVShRMk=';const _IH='c839821a984bd265290b7db9781258012b82e442941432c26df4f9aa89957443';let _src;

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
