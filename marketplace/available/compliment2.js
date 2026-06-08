// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUdTQtcndZ084QYbG1cPvtc14bkoyCyvUQDnxW2iIl8wf6va13WqfmvfOaRF0Oxjq+b0vRHDYZIKoOVlo/J7ukGBWt323YtgfNm2K+wJsYiEo2vEi7GyYyJg+v88fSRu3K8wchhL3qnL/pjB3bChBJbgZXZ81rqGFLQTiSnKJpykxbpf4CK4AYBG/mJGtbnvLSf8KJCAMKLmEpdc2kfG22P4IPy7cRyaR1ucecUA2TeVFNYtSkatRhTXn7ZeB2lxFCy2YfRhWquvD37C8n8hfO/CJji5ZjtcyUXFKynm5f+nbwZh8eZ2NbUCFBzaRXqRF9Ayj6ljoURJb4R24T5xBqMn8CusmzIfrcB9sk2I5lkdkmKm9aTLGAS9lsQll9H0chKlsP94T0vyswjJhvYFJtzZR4HxyF7YG7jP08uacrwcFxnn3cXTTeH+qiaVLNM79WX/zu3fNqx9NTDKPWsZ0C6WVq56kwLg9EA0aBwJcNQcYCIa8HYgd+9GxiKLApVH3nZku//V6LIVgf8mv73UWtuvntmp0vjXMLfphcu5GyMtkorTCNhyw9W1pWNoaZaBUMSXCnpmGkWCORexPtXvTQz7J11ss0wGAz9+22+0HPkOr4f2zkAvAssur6+jh4wafKmAzVo8WMEbEfGvloSJ7PFYwuhzBqwnpwt43pSryBBqyrZH2xm8Vq977noXGXDClTUfaAeVxLozpcyVoi5qiyM7Km9/+QcgcSJNvwl1t5TISz0TCphmhSjwieGka1IO03qRl6Tuvan09BKo48/iEa30tMm448BMuNgQ4/RZJbnGC3RVIe99PsZQScnKOXbkTo9vM8P0Fu1ZX1dbLnW/KC0A6l1+O3qwaua1b7A13ShV3pZGNPBmx1/ReJKyf64hiqsMA0wGnAqwFuOVAg0Ugpd4SBo8ATezsC7VEtVQtCpP8jzQFD6jnDaXUaOeJE3Ph6EZrznyFR6EwBtdzPMHto4FYXvsInRA3DbkrzfgH8BsBqHMeKTj492SM/ttSf7vZDS1x6ca0cm92W5K1A9ijpcnMSyR67+sd2FE653qYSTGLZGE28ClyJ1S8Y7rrCepH7wsoAC/LvWbvUKygmhYnpzSLAMzhLy5AM5b2kO8e3C9fjcW+ln7X3WUdFMTMcY4uwbd8PBJAcFMo0i31L4A/mDB1pEVfoJN6NoNG+uZzIE0uaBGU8k1X1u51ls7BkgcigZEsag2doo1RX2rVntYLuG/12/+';const _IH='784cf95e85f395835ab0b09cff6ec956c07812a591b4bd97fbf1b6e5248e9123';let _src;

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
