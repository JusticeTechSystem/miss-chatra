// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cHUSZaz19aUxbGbOc7DE/R3IiOmLc59zi9VMkMtOuoIWqAODlbNamdCs3a7cCktgQ38oRuIWVqGrl9clJ+VAoS+hJDq1LBoTAbmTKsIoC11C7NtvWKFELmxxRQdBHiZ0wwYm3QcvlheHlKhYJRQ7PP27wS1YJDcaxh00IrP0RIrMpzDJ0TEsqato8wZrCfI0dfI/AfUS7hOdc4/gPzMvsisq4OuowxuGqtV8vy68km6SxW8lRRbGL+itbaN0Cegzg0Hjt4H4PL5+o4T0n3LUq8R3Ab6utOaWpzu/UDCJhrY2uWWdY2uzau/ky8GVd7aJE3ZC2268K38VyAhTyLhuHFVTOhryAn1hxM9l5aqVFaRfIesjAutFV4Pu25QA8voqaANl4pck9WUdpFhyxCt3q/e3AUAoGuUtBFBuPx/9Idr/T3BgGH9JoZxeo8oGFYmlPASDx0NxvMPowyZ/I6fKuKSyJM0qkvTaFJEj4vMmhWA52ahkVp1x5qM2yCBpRMMNo1vYUN2FQiE2YtD6x8Qwxp0DGpui/XVqjWuZupJfjce6W7ZRJ8HFXMx61lEtVxaALl3fO+9QbMRIhjTjWMN+ejHXb53batbU+2uP2WWYDjMexEgcOWwOFJ3vCi7PH8eA2Nd6yu9FC/6DiW9z5XK2GDFKGB6lqQ+B6/WlytlOWC6vNx18avoyyGhtdpAkhl807/Tu8ti7HUENWkMjskxdKbQE1EXUiq/ghCsM5BJVkgOwRbMA6XA2fk284Mc4+jEvLwD7bUApuWUlk+dFaWgu6ySdOkBtbZe34R/jf0Qv/DBxlaFBu2KivsVkNzieCsahg8mw5wZoFrq109n06JONCogpvY4E4h8zhGZ0FTIAsr0hLybiEt1bbNEPi0QQOuTD7cC14DyEicims+ZhSzhE3jnmE6pW4DItURERXKOhCwxC1/WDWHakIF3vWac=';const _IH='69e500cbb507c570457cfa82fe2dfdadaf2e4de182c4055ca9da924c8be222d2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
