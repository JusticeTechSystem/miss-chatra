// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vNBZX5D+aoDE55pnY/htZvUJkA1PW1Z/YLWqr1kir5it8heG+sFB0zugptaj+XzP4iSmvJ6eRjL9Qbr/9PW+PQM98Smu6vYKrnmOmtUUHwum8EACD0cxQOopw+u7v5rDSmk/B92WcFD2Rzx9ux8u3UUW7t9i+4qxDL/yuQgsbWWMl73CzEVWPQISgETrnTiq+2ug9WTPPpgmf8nMSosLIBDQQt1l04YLijTvTtz8vG+X+qKuS/Y/LEcMvqpXJUQ6gg8AsvRrArqmoCwVCoqGy0K+bvLtWN3afOovIY1jmNxzp7mAfXFGN5LlsGMbwOOgFWl3Aeyp5Mmqpa2mNGNkZTpyw3xkPkAQ9tAKI7eVo1LefXfOMcQnCI6yp97jHudlfbH0VgXg8tY7LicuzhiK15FGAJ7PBf8fv2jxhdZ0FloHZn/Ut5JLuYt6nBOlTCQCIRBMvMj0yDhpbLwO964ZJXY4XHoWN19tzaz2Y0Qk+TjLS1qvLwOxlXeDUYHO8qlHfDPpzUmLDoqoAudGgEChHTtsbldXgtQnck4eimPeN+5QY9UE/F6dFPGjfmPvDGVbBXH3L62oE5ecdZ2RDfpdpWqF8DjfoC5ggJdS/CW50b+6KQIUHjOos7LTQIh9KBoHuoBI/BaNeTyWDrAbS+VyYpzk/SEpTioSEuh4agnhuQCzti/c8ufz5HKqZFHlhMXQlWvZLrM4fhW/lYppG+pIb/EQcUSGRIJbE3J0hOUPbpikYpKdPGrQaLc4r+EOT2IQKI9yOtfk3FTqTR7dkLOacyBmBdNLtYuorf1ehoCv1EcdVZ76pnAP+3XagReAH/0a1h5vGYEAASGCuW6ohqikyHZvtOw8pfl1ofvtZoiVtuHfj8j41x7gbckkh8hAiJKEXUQy+NihGPIopZ0SiKn9M33/9Z7AVhSpVHZnLma8QmxNjIMZWNNX3ZIAWyYugNvqt2tvgEmj3wUagmsLeGk+st9kmsABKvxOeOG6r4zy2SmS5ZWNa/NboXsTegE7wzafhM4DM138bN1CSGmcGTLvhmvkIh3TfgElc8oN4jkZvhsjG70syM6Xyqb5i3VjTo3OoaxTXurj53eyLvwFsrYMu6LW8lM8ps2xxMdJioQNBgLEj8MZLBivlLGs1XIbDqcXnv/1D2P78otH0AsXMnbMkRU8JwvPHmZpcvhOrJKt7JEm1P5cwEY6kio8cbniTIIAKtH1vhstuxKsBBjB0uR26+hA';const _IH='4aa530c611f9d8660fd0916c73d025172656b5042b19a6ae13913e907156e8e4';let _src;

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
