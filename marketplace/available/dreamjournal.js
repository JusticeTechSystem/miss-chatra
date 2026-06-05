// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cdsA52ED+W5qZo6xJPkw69ZbEYxSJTN1ZYmUMwmgrbO9Y11srenzBN80ILk0MO2O/c7V58o6W2kUm5NRJ8NPmNg+76gWiOylES0dVQiRF9w4gKnSMT0LoG2hi5auJ+dXDfa2sOlqOUIqxsbEduFGki8cw3WpbJTS/AuP34TASynQBDg2kYljRPvHUJ26uJB9WkiOvQ0yjw2+UDaX5MxJB5wzhFbAS3m/2psDyLRlRq9rWhn/3a2hmFa+eVJ0rHe5yI0tTxp/grUpw2SxCxT/lJoLczoe8EYM2SZaqL/htF3I++CUIowetM3a7sad0DbMXJVOqWe2u6UbT2vzO0OCVZlc0KMf6/CSvT/PBpr1Rqy0GhhgO/qURZ22rYdBz8KCd6q2E8KTpJiXIiOTOrrs8xnkXEFxSNcnOPiMGVqj94w2yEvGirCvO24BS0WxksmYmIrlZyWCzZEcHZcijaOVBFJTSGfJoYblm6Wzl6Eh3Vvlg1CRM+WiX3I4yg6VbbMmc/P7NbBapLj1mS/aSy/hHsLtqwcArPxPhdbLt0hL7C3FE1PYl0hEqMNoLLZcmvnfMLvPN5Sxxq33lm89SpqPPwjQwMGz5b1uVlFQteLkQ1voJiHvbT94248IoHmcWbTxZ2uui2uBBz7kemkQi11+nHFzJPAP1bNnEsxpGP08MuHgrlb49Pq9d6o/+0+nwV+Jk0GXRj404VwASH+sWrJfagSVRtw4sScvfM6Ao3G3FOfbjJTeS8fvP+tc+F7ArFA7jPCBJ/YCRDPbTIcRc9h6vOAx47OoKLuGl0lYWzeAJqSokgjxAUFxkjGzDwI6KaSdRuiqAfiWAv39xv/Ks5ZBw/sNLYM7rAwMP51sY3t/RCtnhxPO7uKQcUMmeHsL7EcQXzXotbfgioYsniT2qOVg+vufzIYOMohrCDvQdqKlGtPfysEk+jEPCG8zf2r8gk3ku5jHm0ciWQWV6BRT369poSre3V3RkeW/Y40SUKl6GpdpSNcLELV4KTURTxmH74PCENMhZGTMvXCSRqQKb8IX2qHLfiv3fjcGyJvJAE4EpffJyB4PYmQeC4Gu9Zz+9MqTdiiC4y9bUdztZ5c+jyNs6QfYlNdTv1mUQkVAqRsY6xlSFSKBuRZBDUJTOIVMLYPeHqYeZE1lHjpWn5/BC88njODr5su8m1tCsYzZweEpBiaYiG53mr1Q3/QZoRbBYCcqy2DCVw==';const _IH='14cf8e9c478db2f08287f0967475f33433e22b43baafc7e0946212f39473ff30';let _src;

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
