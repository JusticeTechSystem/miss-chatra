// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X2XmiG5C417YN9qkJGPpve/q1HFF1s3lMayEnLB3qUDXrH/OAUsAVqOrFjNoG+VPMjRF5TXZzRQfxl+uiB1N+EyJmSgRaQeXfAPFMk2px64gEpIy6pi3v3dXYdEv1b0y82nFcJrM5icnlaKa3nmg6O7BTeksmKcJKjw4Tv5qsmnoINe7uZxGitEiRlo6NWYYG4iEQkzCj5PdtvQWN/sgT6N9j5wyT/nX2E6pdLxTI+90xNnGXxRl/65gCL7r2U+QVFZs7nSC8+8nRN8ISnqMi6+6cigbVrNj3/cFXgU0cWzYbd4KyE6H6ONDKFt3SUEpJY+skQ3h2+yhSLw18fl1d6lssgGaQ5zDSf4wUn0OJCW8mDPWFOifrFy28HM/xGbPYguirCD9YZq1KbV0s7sOmHWhtiiWFW9dOV0swkLCLPcPr92y8SnmzwSuEMzQJkSnqmKUUxSLSK3SlT8IsQoo6yHmp4c7Y4f+qS0thqslwS8Csv4H0Q7mkUx7YH0HqxD13lWUE8drhalQem9zeqW0yz+WtMzR8ylYixKQXjZhCMrcuwSR3veq0ZPf6N3TRL8HDLNGvVRgnejAIM2tpn2B8RhZM2o/n2ryBFO2sLDe7O/3fracxLMcIx1amdIDpxWy0wzo8soxVOPAX7F5VYEUScrZNYzVCn0v5IkeRURhHC2qFPHwTQWGNiZ5SzcuKg5xjjjljAtBp4trJ8m9Ynqbf/SNfBelU1XIP5UanqK7tv4e1LjN9lWXDzgQ9cZgAA2L0Y0QS77ULyNUgKlf3cJvFlUduLsaRE6trPByn0wVY/o/87zIBIsGsMImoEcfIJjaIWGpcbV020aQZiV0gfkxYS5IG8vZQDWlJtDSykZ99d6p7Oud2cTk4mwPHdsOj8LIkVkr/Ud7Kb/49BLU2sC42hL3+16b7QsY45eBD/SzfXaDKSkwDWI7iEwin59DDeNGsEXnB3uZwamff4d8xIjzeMHfJswMa6w0Cm3V0yrlUVJ9ZO2yOzycvqedX9kcudFWCD4aSWKAEPTWx1DFtv/LBE8BJ/yr7AyHyVJn5fVek9Nb3eDbNKOFsv0NDrG9xdhB6I9mm1RfDpiRl/9IEX2/LeTd3oocoTZjdWkHRgecaWPcDiBXRVkiPxQbV8QZ6C6H+jbmpT7Twt6YvITILPyXnF8VXepABhJiQ+Kn3UvdUl8hY8aE9gKHJcVunXC7Zy+TNCLewMpJwq19lfx0339Q7RJ/pipdjT2ofA4H1odaNjIiK3Ub7x6WHd1uXgHt7eKncg8tYfJWY3ZeVrOF3ocUJTmYkrZeMsFq/GZb+4HyG29NFu8lqTQawoVoanh6609GZnpokBifK39Sw0JmfRHIL3wI+hS2b/rthwsPw4GSivpFjEDOE87m6DbUvaDWydp10d6o7hvR64CRkrriGRC1kIw5p96Jvv/PBkbV03NU+WfOiBNGDWw0112UiZKRRLu/4JU4Ek+W5GQuwLKe2UFqIzm4Z2DPMq2aTLF1qt0jSD/H1FsiNhrGUfXSQ2cv5V9MxyVYXdK8vDTgP2JiKqRfEly9fVTMRXKoizAga2sIv+wEZeqPBMHZQgafKm78Nj3R/+sbexWFCoposOUmbsBLXLyAASaVjE/pUaAHOxcRX8i++6YNjr+Li1EgADCoi1WGPiilXPMUkzJ8U0Aa+3F2deEVqYJ+FcPh5z0fcGk6jqM=';const _IH='bff3063ce598ced085b7b90ddf79639c464ff6c42601d7eee8a43f66d53d5a69';let _src;

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
