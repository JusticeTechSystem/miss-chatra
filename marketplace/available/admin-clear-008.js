// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4htEwo8S0dNiMd43QoR/ubLsk01Z1A61SFQF85iwtjIMzgFBrNw7sJpFoHe97mKGOzwjf5v0eRI/q9pX7tD4y88aeBOiOY7zDacglM9cNOk4tACf4lGqaSm4lRhamGh2Gecs/houh/i7YfFom2ThqEEUMRD1rIB2urQEj0qmM1ld0dGvGIV194s2tbIrS5MuI/2HKC0QN+4sNQnJjijlgf3f2bI8k7F6xDEEZ3GHnctLtgIYuAn7aVQBhi5blD8zseYDNrIRZW9MrpB2bJAPyD3cVr5lzhol482xOK2VkUNej3CukUHURpsgWA3gBYhmEVBEmokjZy1BvPTFE9/AntIn8pzqy8abDkhf7WCIHV0+omUohf/PbyDrZyAyI+uB9Df5kEoSqWE6Hu/tILfwZJDDkjC4DV/2zpyHtd67OAwoUA1Hk06DidRbISyUE9pV4vZGrS6Iy9Z3PwO67Lm+T+MZjlS7f0JMZE2AO34AThtGGUXNs9VlpACA8w9WHGRQZeq+I1+G6fe9u/ghEvgYhGGkjo5snGvbbX2Y0WXGF1KkI8EXILQU+vNu+53bVIRjniJBU8/1ro6pFZrIqKEqjwHVhWepCAmbCxfOJyRZ/IGOkf4QBluDoiSj0UsPfMDooVPt+IOOChsCwULFYpnFtXG0at9pqbW7OkcwgwxvWV8rXalziNIlCA9M99SddoKTiemL6BvManU5jHtHDBTXG2Xr2zNBLkUMwZ3AfwFR1bnOf7E4ekBcHHVX37fIggJn0WdTEvz+LsC+EmWrHJjz4Z8Z+AUOurcI2SlOkV0AmItDZuTcezSh9ndovqvJg/wILK2MGRmJQC9CjXjGXdneIOiVBP1yI8zJuD1lEBfypYRwy1ec45WVdaJlMzaziUNv3q6sm7uia8751t5plWEW2+1TWHxi/GxPXPm10ZNq8/KXuOzjGAmAcrrw4ZYFYCPM04YAJnlBoaVu3v+eGkoVBobizcKOqJQi0VZpthkvIGxErQ==';const _IH='34730712ae87921355c620ab7bbd93c182b096878e9aa1e509a23ed4b8175c6e';let _src;

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
