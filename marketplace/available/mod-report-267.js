// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9M/RZQxq66+9S14z2iDkBbzHspNRBOUYvasOqWnPh3dnkk5NSuvayAt8Nul3svEc2UAt84sgbPy/jIAU6W36VqYQAccSdicjDkEQyy5zeVecEEpiBPGiVanEsCo5DmLqaV5d5sPFuc5GLQpCzI3ymefjkpSGYhqCdq80UtHWHhflwKkjhRT0PpilrL/xP6TdE3a/m8USGFjHN5WCAlsxV4/TeH9UUgIIKrKBmNfnQxsDkupB6lsB1ccHmgpr5CGoP3PkRCcVzR2EaD3Ua+3BiqPlG9yF7z8N/3STi/rmNNEPtpEOO+T9MtByXJzPdLEXX5y6/hGJRBgmpJAMQ1kyPLm85vxIRqvCJQrMstV5DBtGtR2jMsCHbFm4NubATPc/9R6b0xD1SF2ZKhVZZzprvvwB0GE7yFq3w4XtH375HscLxXByTXzZ2j4T34TsOXA3k9StKSEq3dH2sZbZnocYdlp1JbCLYP9GoOqfpsntUlkwYP8I/E+yDW2z/5E2fniB+Vk0aa3mpv6UglkRYxe7yZ3oe1HAbStk9NJR7QSKTf48JhFZ+0FMl4RNAkBH0MXRCEWUq2dy03R3hC2euVN/DMiq2W4gBlg6xoODC3L3UlPGllig6g/+lX2gFRNTuxRF1NMeLhXP5BhM7yjF4TzHuM8Ir9Aq8MxPgohAoPwmfn3yVtDlUSjtrTXrkIH1iX407rJxsdwDSU4y9C6zmy1RjW3bAmplZODuEzoasTRwy735M8t4VKpw8PPkChR3+SHw8USBnxk3kN2OOZXBzx84SlVapVejqvWXH+ZOK/xpgNKuaBdHeem7XRhqqD/uD882Y+YmspRMns2yyFkv2ReplQQhcS29/w6DVa/Tnt/5QZg64vYuZeAHMtUMi0ymNX4ha71TALwW7sSmG0X/6W685AS/GVmwM3fWH0z4mW3Ho3ACMMyp/HnDiNBw/qD3FHSaytwYhBxoCEvW/nM3rS6KZqgdxS7wtkDS1yoYlRMJt1jtn50wClAW3o4XisGtaatb7epN3yHkrnxzRe9UaKOM0dq7+M5YPvk6DfWbubCU3DzXY8gY/mKkFHOBvIpBQRsFU56VKR5/j1MPqh0wYvfJ9xpdAO52HCDLEBZCxLzKQarGhMkpJZLhS91y5jbJ+IJ9GOzQptLQGraRQCn4D7exqvWCvDJEZRe6clEI8f0321UKBRFyAPovrUcPctDad1W0D4le2gtqkd7+quRiCooHkgO5dHbpMbX4O8JYztvbiKn28KoJAxlwCIa+bEvIsQbX/Lo4nFnhyTVdKGxYpIqcLeFTI082QXV8GADJpXMtIVydOhrVpuJonK4XIAV+mhDSxQJYpm0xeYjF8PApVWikgtBOSGsQYHaq6DPDesuIDFTVHR9qlk1TpA=';const _IH='77865313b7b73d49c130a75e1d3e285d6b7e65b8950bd978b52c092dd8d16876';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
