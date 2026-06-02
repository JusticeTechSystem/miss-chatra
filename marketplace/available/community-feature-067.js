// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rb6Y6SD8+UMISym61s6q/qPSxHuBjjfPDL5CkyVFNik0cHZnc+hyb0sm4aFW4SKQeT9fo5qEB9LjFXwUEeDyhIriwl5Dv1qmngwAzYsQ8vIwbPF8GSr+hjjv+Cib7C2sVlWwXv2BntKrTgZa/u5s4U/mBH4edpH38lIMF6vtUVtVqbO98kPnxDf1acGshYqG/wIqY6siEsvcODUiNPSBi/fnz/DOfz+tXRycc2mJAScMweJhIeP4uRP7irRbKlDcP7iESoQQg4pAyy+yGDT/hYLQFHauwLfwG4FFlwhAwlFQbMubF0yrjktZrd5OzAqnV7i65J7MSvB1YfP8rqMJNUcsU7GvSTFAWebYD+sDV24525O6TpgUkcPi4OW6qKQ8M0K5Bn+25sQ5w1c1wsj/POEPDKJoA9G72sStl2GuQA3376oeEZolVuJpJoTNe3QZzngJVOBhj4492DF3eZHEkoXyuTW49MZG6FC0ecjSjftNYlBu3xduZyoUk+d9V7YZm1w+6a45+eQVUWE1Fb0gkVYkhD4/CNNWCRUEYx+09fk8RLdayZ6BOOieMyl6Nzm8inqOB8v+SvlTTNTdrzFNb4Uo+RighEmKQFp9AE+ZVPrBZGsvZeGWBrR/4aszrZCtKW2+P5vTJabmzfTL3mgcoIQ/YOqVaPjI6v0sDqZrMA3iCeJ/qjlNTZq+8J7si3bVAhkZgVNmQ57VtYkrHr6Us8EQ5Oi2xIC4CAx1kQwrKg==';const _IH='af2e568994746e29f042ac7d14a7e1f85be532801bd7c399157f74aace5c41b0';let _src;

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
