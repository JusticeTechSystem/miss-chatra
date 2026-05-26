// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='917Louwtq1nJJO+AzndxDZl7Okdaueb6ddPIT+vQy9Dig1xeYocqvrVet7XjqCYN0j/CrWr4YhBprFfsGwEaIFoBtKMAtERKsCSe2AgH2iRB1yJGW3E+pKwjXEQHvsmHuW+ekDALYksa85aDnXn1Z9iI7MAWINozzvqdTIjHs5/KLRm4r49WsVNLf2mpSWB1gKeD7mnDzUu+Ekf2k9AKjfd3hEZpKDBIvHgFF3SJm/n8PAYqC4GfY+wip3KSpGWeOKDWAz4vQjLvuRdYfwB3eZaFNkMvLJYRuznvGLE0tIa2g6ktwR1XLXMifATVdchE8oPvfH+dObh+fcr2JTOS248bPWKQoOEg8X6y2RFAJj4tFRRdnhkB/xPOOCWWGPq0brnPbzMMCIKUAUkhutifMZMW/fxFam25S5Pkt+eEIT4JBEusymAhjMZ7lZafc/heH3SYw26Hnv/dlEcaqmXH/OA9EhoQ0AE60zSQN5J4WouE0LR0tz/vx0eN+PG1mfa63RtVbLN7X5XVW8QDe9x2LPOEGbftbKz5lRl3FkOt5QACpcmoG5bJdXMkPYis2dlkilZ3Xp+3K+ipUklYv7V54oY7ZegUPUE6DnT6GWK4RKjXxAh9tRfLPsmk9PnFk3sFbw+OuEhaq/5OipKmTT2HCHy4s8XnKHQAO/GF8LRJ4kQKOwYXNNiYyT0Al6sCX9W2DiUKhjcMPmVXxn/ie5LyKusMTA/aWJj7NMBSUn4DhcH+25SkVrkiXGL2';const _IH='8b86039cc768f9b77cacb9a610ac0748ed9e751d093bc5c08d13c5ba85cbac1a';let _src;

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
