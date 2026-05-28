// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='55takofo25F3yoaJ9UDHBfCueV7gzC3LECfl/FSSDz5edSH1fMVKBvXS+NgzeROwqrpLoPvxSnMfqQVVFPc9GIIgQPEPlIXHsKHVVrDAUy89lO7FuLv5JFx7E5knlnwYBY8fJHyrHK3ZzOSuE0RS6yryoqXNAMCJiIwXn3SL+tqsyuAqOuyo4pwDUwg+juk5wuQ+Ra5gem2nSCQniCI4c7gxsYN9Dv9884Ox4JCxW4Nf3WclT+JvUoH+T9qVSxLWOud6eQdXoYn4NPNMD9wAyrDP3EVTRK6IZXqB7ZU9U5GiWsX/lJSOxjFwEXBrX9oSDG+iFnUTOgByTVaz7klMmPAXbAaTHkFSkmZ2Q6cPIWAY5eRHkjJb9UNncSSEbDDZv+HloLSqoXevlsI5nBMCG0CKCwNN//tU6NbAOuM4frGxMs3t43kYI1yMD/XlYGtXfC7Z2JwNdv/ff5ANuzK8hwLOKO+Y/aAB3aHJbtZyvsfDjBUWAaFvnH8miUUBJRHPGcNhGHY81Uic6kd23cV0sPVZc69BkPIAx2+nDbuVzTn2rRDkfsUpPwI0DRBl4Vuhn14jc7oK4cxHLAB4yXcXg6gB/r3UXu7NTwMFv3xMThkJYm/4PZkFuhnXjOWbPa6DrEg4C5HhY/0Oeg5NFem19RSmzM++b0NcjUdnomvVuZa3wz/fPdqaeHfw07cd744w2/w0208qJC+dtcKRgXt9oMLks+zcXTRP2BXGOK5TEEDXor4p/OMA9QID1Ye94TV7TzbN1eOIkFjAp1k03D6S4LBYdCqJGW7TXRTRAUGy4XetFh59uhjjTVVc/2VtOs49Gg9COx8ApuV0Ke8sJOZYOCFGhblQvDa+TfCDAIKBcXcTiEp8Fm7pX41hs/PzgpVqsRhxaIjO2ZHVJ9sHxPTYqJT/hnr5mH+oL+woVSoSjq63wUHyPfYdyzO91ts5jju2DRdMVXjku+/VpuHXfYKDeLehtZEg9sUeQvNswQJfSJIKoFiDuRRkSmKYs0cwxjDHxtABg0aMWpDGb8wWn7boNPf8wDtPzbHZ+gs0pWEYdRMaktZetP1O1JAUJOI9TLX8qwcfsAcyPJ1EZtbNdPQvStJGoJTfYvocEnGEVE71HbUdbwf+CCr5MOqqtF1CsGSSkCTVnK4WEnUJYEMoMZRDWQuq/jeJ7L8hOHtsahrqJ7OhTvASQdqnTYJpdYM0y6jN63aFK/QNXlgs9GsQ5fIh20nilJrmocaIBcY6z2fSmrHZJUol/zz9W3BSwz1Wxkpyf7WlQq44jOJBrbapSgoJwfJgBNaCDew/UyNgHicEp6iEVLSFth6Us0Yws4UvBKzGJYiDgu2dR5+7HkTeCJJISRCenDT84OoiHC8+EbGQrbpxXW0=';const _IH='2eb19bd81d3dafe7e9d253d771b999ed2e5b01a2edbc938bc62d9b700337227b';let _src;

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
