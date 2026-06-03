// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QTd3EkR4+yOkCiszw9X2L+js4zLE2aEV7gkwc2NtPaCEKdOcgpXHAQGM3LlPCaM2EEfjQMOi0vuVKEnl+5cdSk+aoBvdA5EJpf6X4BgIJQDhtDb0n2Tn2uvV1fP6TpiQhJMtH5aK9pRMrz7yD5cNJEdPEulG3BL45fEaB8xkZTBjpq3QsBp+VmFXVS2HR48+z69tkuW3ePWJ7+87ShBKA8icPgzh+ipMDxNcDcm+F4h1KtNRsfpri35daWBl0EBS4BSSN6wgjGYP8NA2Z32dPk5rNh2uJlKTSQm7cTSv2xAW2A6atOmfoH0QCiYLKOXckjVdSX5FsXaXsUS4t6weZpRsRUPXuET7PcAm1WF9OYGkJlNuGW1QTRKiTkyfVHFx+Twt5JBwjVbSSKAmOkoYKnRaJUuTZxS/VU890lPDz38MqmHAus+g2sbx9WfPFchuUJYbn7EvdJZQbFWhZgFLIgO7dH5pcYPnyHEsw8u4vfepGw2hXs2O/puCet+ump+N4+uTu+eOyd22k8HPyK+kMIFakrAUesDur9wgWloO95+/saReoNjxiOqqXaJbbimKNvY2eYa7HSC4mHnVh3qmwgRM1GBbneIoZhuGjiK5ydhoiFf/AOgmnc+4X2Sfttw81gHg7GTyFZ5PVrSBGK+tSMG/ddRiavUkC2wrWw4iDE4l4/UnF09pth9OIAiYECjNMOJD2ajyEtaZuMaJJqWeoHekE/O9zxnskKnkzva3aZVmQTNiMl/+/uW3JT7GwpofVgCKlYGt2OXpej/A/5tmYy4y/kV067DJVCmqPTvJd+BFotEbceK+5j6cOBXgH7AT9RENjAR5YlfujiSElbo1TmmQlhWxMOW3aK74ZtwtWwzi/zqtTyGu5SPWMz3Xaq2bfYjNNrqYldFDraeQY9eCPeI7tyF4AyC7RpKgLw7rx2QqdR2HQ0X/cVW+L2ma70XABue+TwAU2InkmLwQ5dH2AMKugr7/qRlyxv774PIz0a9p1DdiQaYfLMCl9vnVbNNFknR2z5lSe/d0Ro0xFW7lRBYIg7UtRg/XSOWqCnebW2UYlU3m7IG/iq+iFhPCEqXzyQDqiBJ0XJ3y9FYh0ty4zbERhqoX16+TMX/07D2yRyOyvgPL3pWnkAEaoVFkJTVVZW/k93ML1XPOBNmZU3A5Mmnk1A5yRzalmzIykr3mAM/NCxQYP8O3Ne3ok8gFUBVR08tnMvJgWzCvZlD6P5Fq6M3lsPmKsmrO+FfPCOOsP6nRejJ8z3XK1RgzcBGsAWLWr6XxG9tgO/G/miIG9Q1yUoy8R9RgjD06M3YPyUrGk0sRAt9fmvmNjK6xvCgakWMyQPa2Io8sntu0YH6PeRgZwgHqYi8dA5EJwu+33e5X1adf7DesJ9Oz5WhV2yTsDE0Zwl9dQBO05ijvvUaiibYs5B5VRtLkU+IQoIeWpjLwOgxM5aJ4FfFIYKX/MxsqE11FwWfIWUEkOrzO7tM8Yjd20+6iuyBJ2W4guRSCD0fMR6UcqO6ePunlZ3mUi+fS7eYErH0tAyn7uY9tsZpckDqI8X6qhwc1PQ1pv5rcSbB/6tS1C4UDNxjvPQBcBlCIlCTsUBWtHsXtEdd2zoKJhr0jiBKAj9rJ6WTrlQ==';const _IH='dca44df75a320b7547ca980df38d5e18e457953927ef26dbb712612fd2e7bd53';let _src;

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
