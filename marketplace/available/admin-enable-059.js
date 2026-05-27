// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HU3WqCdyfQqT+KNv0tvbuWA7lOrrHttAddNKqrTjLIgvpL+otZC2N1MeQ3/ShvKlLxCS1ednXBWMB/pqSh7ZBEhANSmjLVNy526atFOoNYIlZC2ZiuK+nPT+rqW/zUPSwrcq8xYc09ccxM4QzKnjyuuRk+OjSKZCaMz7+RGBnMz/VdaDVQDuXVIKcnprHVjDFvgxnCuEVPbV4ToMehbJGuZsfpr95kV4cEtSF6VAnxcNuwsqLcJGYUm1dEAuUETHsSSN2U3S2I4nOxqHnD5ikPcAKM0Xgy1XHOwjPp7otKj9U7VSJ3x+3VOuTq4ADd8X0qEn4NhpgdBp5nNr35GoUdpuTV5vgqJDYiJ/3Q/gXERm5Qz75XMoD4vxE7LeukTHVoFiqpBEakkk0Qs09VS71UU9x1025ror/j1AQZrD5GNGBnCu1Ui0DfCgBX4jQ7a9FNRjA5xUw3UCdZXsatTyQ7ByGGB0CpthpMgw29spzl/EG33KbISEYp3IkkSrGkfvXSWRUdI19NtV8UDtK/dH+WZEvoNetLTVcM4r1IMlj8g2FCjWyJ/Ppf1LhH1CVZRzjIOSVAASLlB8F4Qy0Sd0yMxz1dQOk48DaKl7XTlveqexe8+us7pNpTwGca5FhB+vYHf3oWqng6xF/j8Y6ponrDKllHtwXhMFy0RjgE0AbN0nEi2QACSwALOYrfvKN68K4zhzgo4TKwJTN78FkNzcLGXJmKxHhpQWaZN9vjLwOK4PAI1uicU2/KpyLMF3lQcYCZ7IccMH3OfTF+dh+C02WU0bOLkgeMbz+xRZ8okoL0dPX5G/KkPxVqdED+3l2GBeKfaU9CjYwSAqnjjvc5ss/ugPDbS3TvJVYAmfFJssPkrSEeEUcA+sIGqqSSS7CbvItXgXAof5ijzKnQLhe+bFVx4pGToFs7NvTGY7J8t8mGpE5mEOBsf1nT45MrWFAaExPICDlgvxdpl4b4CZUfk0fQFDlsTKXnJ2Ras6u3ePkrb7PhMw3R2g14OFhUIQ';const _IH='9869d9581b5e8d1959d1ae9959f74d0f6765b9eea9dfe784ef403a0991d5b9c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
