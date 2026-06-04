// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jFUHwu460gLiginSnURhwSf5BNM7cOorTIrJaTLyKqqyGmkLkJ9Z1gjbJWkO99jtkFK84ohwuuyWOT9ZQ1gZ7RsJ2AEZC5pjbnZ+Idquv5fCbwn/FL5LSTmrttc2B7e3RF+SGl+BHeBydQLzeHUy0dR/OAhoBA0FnJOTxVdmQodr2Rap170swDRFmvLbcHacyLPVudeXdKuUWWFzRQmqRiIL3upklH6RHywyoHCd9LcI6n+AktK7H2wR0jm++ipelAQW5llYo5tu0YLuC8JQvq5qu2+u0cUfNVVaPNaeRuNrU8a0h1jjQtOYW9k05T57YpEBTm88+901w1I/ZfblBZ4azC0W+/pbPfpARp7wp8N/qW2qBzMMLmepEsxZg7KbFrHphV5bYwPa9ExNmF/xS77IGTHJ3pA3g2/ZiYDzyKjw+O8xdXAQBiTZAGiU85jtw55q2521j6heP2ORCmEnCPviknmDNoouleVu0tlfp0x3100wb11j4fPuT6a0a3tjeQLOaM88wWR1A9oqebILV7eFWrBziJuH6qZXzefnYEypC7kEneb2VNKaPt5ghP/4Sc/zJALsqe23pZvbJd0TiSP8/5MN5PNU82S0d88ItlT5goQ15gWdlsWH3tbQ72KWBnpQf5GQIhSSMgxUZs40EDrYlz9GUDYBeldScsXY3dMHuahD/t/AebqFsYF8t1Yrnjd++4j4cebOLebPpeRX5ui4FUBaraa3UScRdStNtdbvOPAlvqpSS/PZzlIRta3bO5t5SgLez2gNqCEFVBEvHv5HWFvscBGFDz3D+huiZ43ILxse4kvTpK26JRX8FIsfsVzfWjp59ENwRSrgGPQAmI/ibVMDNv5xTi4VsgllMeXwfLiH7RE4oJ+txGpckpXMkzlWO5keCkbp1q1HAQO4ONcF2Yrwuk9TABhn9MSIr5Eevqw7YC9eJ+OwRQZgMzIXsiQ6XKNDTe5SLafgk0y2K4RmQLNgjsH1I5Y1yL7XlNREuUq7R+2y2p9S6HI3rG6FdETWfOe17Tk0E2ARlblQUGG0jBN2gJf2xUlympMaMQDQ9+Xs6JclQsttfZvDijkXNbSFS5Nd5O94KcO9puCx24rFXZ5Asq9VBqyRT6s/Wf/0zsfLl138fegXZkK/OhvJ0imHbGvB4TKIlKlDDnugQojhNzYVKm7bRzZGGcjDvzwbzafoeGzvW/PTBjKXuzsbtGsuupTI';const _IH='3414763f1d3e4a218f4dc8196c6fe408b01b865e35781754a56303571b390cc3';let _src;

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
