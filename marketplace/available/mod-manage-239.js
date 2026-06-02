// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJuENiJ4aa8qBkqTvl+uPMGJ6yXmIVWVsCGVu4dEaFW0zMV/zY3yCrW7OOkxZDKUL+TOwPxzjCYeLmGBlmRzU7shDd5BscQVX/F+HIlAtfLiguX4yDCTx9TgdDLjgmznhsw/FBsm6YnkUBTQMcjPykWgYO5liEwcO+WAHEyCwlEwgWMA66c5E5a6OQrJSpWHt9j3lPlqHqnoRh2Scjx6jeKOBcfzf8CLvLx1UCinR3+KHwflHOU73+B8RUTpNYCM+5SFPL/qCpte8jFfcNn3wZh+yjezqwG7s79Ldi+G62ERo6kg+b5fFiVd5OLHx1aPYPo4ClFqobiEVA/0MSHK7/RxUAoRu7PIdbwbppj3WFE4Doke9SljGFq3zoNvIHqdjPSXif5ML1NfGa0C9fjZK3k1orEbx5PpnlNXw369M1EYdhtUd60nOAQUls+l9mSr/5S/+tsfewFAqEO6SruCe1Pj0QNMfFliwIfG1EWX1lsuOMLyVYcTo808G620w+fS5BXoOfbz51sS6RWe6fDySTo3vhf7z/gNzA0C/KVsJqjLqBBSmzdd1k2EMDkORQH/tcd87U5L+q5zrwE+pLAMvde8EsOvIZvPt9umD6601D7MOhS/GSq6lNT0lMVgqW1vydu3AKIFK2/IMul9ME06XD8v1cd+uHSxujN9ah7OoY8/UwlZ8vW05glEaJ94AR9Ws8Ra4BAvUSTGdzedLe+kwUVzkOsq/HKb+xPOxozMlWC5gY4tyOqXRXPGNGv83bhGvLpk1vRjX1KpSDXsgm++cef/fWJguTp+wZPOckDUMXsxM75+cxJSeoNi4qwov4BCov85MX1WcOukjULIqwAxe2/Co5UHDlbe8sSYjt3+lyQ75oXYFi9mNB0UTI4doEz3EbLv/YyIo8HA2U3LY/sJxwsQVZu93yeES35Tko06fH+KA89izGhAsoVVe0FwkW8X3mbSB2wDJaiPI3Uj23PofTsovvelr3DaVUmx8WlUcasHDBP/aoViXxA6t5TYbRLNl2lrhUzhF11Pn+iQXy9ni0pPoOAU9pzqfidJfozsvadrziDi0NKkx3EOEizUvTkK0RCaR1r5rt9OW4ihNlbL78Fl1YS7dsfUs5rHaPj4Wum+nZiSSiIYZG4uCATTX5xgOAsAu09pCJZxE49m6j1+N+3QmWoT+qnE1u2O1WV1uGdJQJwcwqSvk7dr8cH3Z70MxSfh4DEhjEH1FRtFP/OBFlqjuo3J7gSOWlREnyf8sLlSLIr5Vrg7DhmBeWafrn0CcffHwRNuOsfQEhOdCn34VUWrnYQtCvQpNQTx2xA9byFzX2fBrpejNW27s0mzDl6QqvDx7G4UPOm/+aWFNjUYGkdpdaP960g84xi/le+cZZmk+5j2OavYLg==';const _IH='203f631eac14fd8690f0a85e392f752cf3bd19a915a28b10f127533cefe71c73';let _src;

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
