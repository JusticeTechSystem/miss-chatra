// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yhEsDkuG7V4LfI6mmD+dA5mtODt5J/PWswz8t36nwteFCwdef3qGCvtqjNmeqa9spi+Ti1HgEOfjYRZ/vZ3DBIAMgiLPUB/mV+T0tD4sACwHUtROo/l4atdtUOGa/umgufet6OD+B59xDMDOqOFFcrsqXxvL7xfbultR/RIIFlz0b+ZKFyh40l83aoO1ahOpxdUc9d8s6XmTQurrI7IJwp2NU0mDsHxHqZBnztR8b5DUNUC4XJ1gmQOjNHi17DhAT6SbGWjg2EpxWD1Q5Nh3dErjGTwVaPHgD0yBIhvzkuSwpP0jYgFIPjxpq31DFfO0IrUfHr8eYKunmK27AjIJEKWZod4jwgZIqgOSI4qbtuteSD4bmv86C4OrzFnu2j6/SK6+6fJMAQ5DbZ15rVwmoSrK3WNG97XDrk5IQ/Ce9f88vkvZ1+zJQZPBIdEDqN0a5KBozHe4abmQ36uo4OTEjIK5EMUXG+FfpC0GqnY38k0kFsBtTakuAhp6x5vO+CZHTtIX3nlQXl+fHDYi5xNPJvyX+BzVNb/zmiZ2c8axShxTEraXDrFp338jgXQPsInhSBjOUSa1zGkJSHdcui/5b+i5rRfxJKNfJM+Im3wH0cFN0GBtbF+/sXMxi3WTTHII/Tov7YxUIeqXzF93AWFbnH0v63JCN5o9IkqDeImp3TgJ0+ROw0l6C871g/ea9FaG4x4A2hiDzc3rnF2Evv6U03npRK64g1JhZm1PLOyy93aDaJeK0L2BXPqsIC+O4UCh55iDUa4nIaCYXv6L2EfLvtLe8K0IXXbhozVHaSgZ7yUANgxc1ltae8mZ4FmjTd/jb+PrKWwGsYDd2sqZHD+YKBTkr0wcxT/Y31jkl0KLpMDi+AW7Gi7pbTcv9d41HijmsFweaGUbrg+86KFrXeyktKVsYDucP3LNAIf7HkitiaPpgAwJz8loUSNru3ZvtivrnJXrwfYdkl1CZLyvp2aMkeY+gG6u+4HXMTufg2vzwJknae8YVGhHWZ/g4Ogxy8ogpDB+79QC9XYzYM5EOwDgMfgZyvF5Ms4JX2+1yPUZVZWeJtMBOVajpfRndTzhb9L4BnH76CDkbZs2cKLlW0DvYFKvEHSs5kNr3+jQyFUPTAIZyq3F217FFkIp4Lf/kpGBvEXG46Ib5m0snvfzqyCq2G4ZLfuVSDMkofPJAjjQrhvF28PjsBIiMrC/i1d29cWAiaZHZ02fIRNYsriG0ILNBTa80EUrEF3oILjn21/W6Apwk344nIdPnJjwIWbClKEZLOXej/wR6PW+wUHKXJFVh643yAwmX5H0mV87iMw7RdThvMXV+MQYhxKc64JY7Q/qU1zxpURp0UtKhx8T2XI56yqY0ijijGXmnxvUDY6yNBTDf9Y=';const _IH='ba3d480ab5aaa45afec7f2730fcaffc80e1f6970b1ad3ab4210dbad3c4480e4a';let _src;

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
