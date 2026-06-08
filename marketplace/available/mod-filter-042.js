// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CZWZaGrDSSPo8JIFwz6yz5gH69Oc4a027EjQ/GL0x11qXbXw19OgrL9RqWSPQnATZity1qZCCtudGGiPkQy2cjBi1monYKoTtKdXm6FgN954wucNCQrvSDvZdhxTkyVZXIuljlgTj1a4lR772aamFpkLFuOd5WpEJC0fwSPNlIxLTxt3eRIv6mwg88916iCfeDLfkgNTbgE9rjpza8/K7B0SNXoiDqUzQXD4MT7lMDiSxebi7zJOtg6QmR8p6//aaI06hcT0VO+Q7QXivrmIJ4LGObcH2wF7sKrdLz6G9SN6WO/f9r9925WwD8kA3zLPgJH/DopghCCtStM98UIOTHDCm1OCcgSVRCyzlPdlOcCB9y0Eu7Tus0NmIkViJAnqrmNAzS0m0gqHlK1pYm6nLKY03g18LY/gH6lEW2pX9+VVT9bKzVBcV1Nie/yLzJos9twBdFmPQ1wAeq7fKc0r2dUNp+R48NHHQgt8XXVsGkgKo7p+5ubX4qSgNLWqZiNdltEBCWrK6ancZtQglEoJoAr4ikaZExRSbRQ+vdvtP4P0TouVUUBI0Wovq42EfjVOC31U1aE9RQWB0hLhPM0j6PjqRTdC3c3CYPHZAU9yuKDOIw2Sl8DoDr9hbfdOoWOpFx5ZNKkVVrHFZpwbuiYjqYEyQ2dXnVBjv4lM+qiwm4BgeMsKLAWEjBPdfX90nos3dcF1G+kLG52UJ6b4oCJgqFVn1gNaCkswyvAlXZN8UzSTPRCWKfXUMd9d3PYMP72mxyRqugHGLjXR3HuZl5U5nqefKRXllvO8Z42J1kNL/oJ3jDgPVG5syUNNgOAbb1+l0rFLBD2PG8njJdv7MJ+QJLe9OyKZIsEX3NoJabhVi5VRjkKryqWo7cbnXgdlaUPVDljg61qlucBl30/R6wvloSm0YAyJBp9eF0FVaKA6o0u5p3WNlR1CA2cAVeutYKJMe+U0pq+nTa0w7YtH4aUJegiJFtTFUoockrEKtmsYEAUHryV9C06o8NX8+Uud9QZBWGddGoMUoAmixfKb7QDMde8XX4zTKdX1mJGf1UqEKvbDEwcGWkbKML6EJ8YpoFBZ2qVoZa5hUQNrxix9HY6/ljiS5Eb/zYZR44bjkukjCtALp6+jWiPQaSkA8j/Wnk1ohUMlb1OUXcqmF4KZini6c2jZJAOwXRvbmnOfw/Ph7UqGVTkwmPoLWE8L/N+FUCsbv2K1Xw7rxAhu+rn1GZuwfbC2WlEDTNzk4iX+ROFzCDylDvvhe75HhzED4EUwdUWdZpBrfb46M/+IJ0DoWuS6TrX9hWj3ul4mMz7dYPcF7LwyHWiyYYPkUCJZDlG7Nib1eKSBMu4CCtcgSN+UR2xgcwSSGbt8mT52yEzs0J/8Rlmvhdw=';const _IH='7be45a97ff906c253ea26387037dd7142067a8b842fab658f719be7784716637';let _src;

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
