// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5k6GghW0lRwm1MpLAFmiWTSUQ0B96CsE7QPig4oLt/bsZ2N1brfwGA43WSyLTCsfBQL2pJ+5SHLjz91MjJdIfpyUKuh2YJ99NaSIs8zJdsYq3NWjJlAhSf9x19EUPstW8QykDrbGLfmcVafrMQJ64LubsC/cu2COmW4XrVspPxBBI9mF9DSdd2Vb7bNHMnNVoCaFTSK/av77TanP0c6WHC/PMRaaGE0Z9eV304NC3IgauvoCi9RuKKylBuP74IA+hYpINCziSb+pjS4NocDPZ7BP/+Mvnwbip+fPezJ/V+yi35376u8y+sxvzkp6BlYudFOydrhLepBjv9APzfIi0glOeZPuX3ns+RJinCDRiHVtw10fvFUbm4TUifWk812r9G5uE2vZibVvCq6Ll6k6DFlbg+gO0L3aE3udp6bC5H7Aa7o1kL0c1DnVucazKIT4TNysku/9dtVKbALmr+EZp2iQD45UxVgaVkZ45DufIb4wklPoHFCOI2KTcIDIe3sj1L2oBZglWFBwrs//LoarhqP/Jl7HvFGx/M7+lDUYUpKPB5pGLN7X2T+uKjKXnR7stQ2nkfxhAsoHdELcIRSFuDZGALG42sqRjbiyHTBBXSlx5aozRrB2a+ozBP1xMz5ZK+05ujeKNcB4i2VNN3tV5USw2Kv1/YajBKQprfL90KsyROxlNVrVjJ/II1UIZpvzq/DRMJbqbzwcvwNyDhn4WIuyvLBUuGiMs+qakDjcls+YxBC6z1w0WMohETMkStq9B2+FTJ6A0SICgzesSMbwjfHgQFtuAaVPfvvkT9xZuumWlGiX5H3Uth4JqYwvuqAwaumn53HzSiyiCO2e4skOyPGxG1rT6FzTAurAkA4Q7fQ45DOD0ToakDi3nmnc3mmQDZua+nsGMSt/XFC7alhzm+3OojwcC4qr6lTxmKCEPeYAWpK/QWtYTVcB7a9RWvUz/FPsjWDRcpZ+US/ird7vIEiovga0E0PgNwXNy76gh/QJLFc3prGsjdV+1mUC3sZJD1tDQeomh5k93rOw16FOjRWhvejCLXBIlQz3knaJHRRbwxnPx6KqfIBUsB5jTVqn8UN/slG9deaPWN1Pjo4B7gDjnorsmQSrZc39R4BKZ1Vl0M2g8qns38UYlpbYZlW5WIz4YadPCAJpFPhvawOYtV9a1hzUdQjh6MNNC3nO6qD9dB0f2c9qbHKvW7ZoAbmZXCPMwuW0tAD+ZYYW2xAd3tlkLJTmweEdTRJ71t8GqcoMF52F/b0v7EqcAxkiu+oWQQCnP3/o3IoQp7nm8JiFONKFtDAXR70sF0B1AkqIldLDTfICwf7ZCF/2H0npRhIxk9OsrLQ=';const _IH='90f1072c0956781a7da307dbb068c350676ffe074ccb052d51c38241e23e4a4c';let _src;

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
