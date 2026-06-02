// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o8cu+2KCPoNh8yzz1pZ2NagfuwgYhkD6c+PPiYZcW1gc58wxDby1C53BEV+BXvL+CCW/VwpOu4e2w3ZZ89IhbWl4fQJimEn0r2ZvFwVb398iCadmd4QwfI5PC1O2RMfD+oRtZE8HgCL9fGbfnVDg6QLvAmewYDt3khvF2wcvIEJaFR0RN5BfP/61LONhzka0umYG3DHFjKsZpw30Bg9LDzsZd9uNqbooQWJA/uGc4H5X7mV0O7V3SuM7WMsChqYdnavCNe5KYhwxFqdygSv+gtooB6ow+lGRJLlG9cJDDoYE/voV6U4+TXXaqkgj1eVUsrJok6+5cauMKcFjmzyCaE/DXxJqMotkKi0Ost/5SoevPKgRVV+PDTTs6HBEjf5kZOIioVkHtCXb7sChJUV8r2Meg4aeFbw1IwDtZRSKI00v7leC0GYaayJupFALBg8LPynz1I/uSkYdOEEabhfBKUhmO7QVh+BE67csfWQGdkCx7fbtQrQv95yja5fQRtfPxJejKd5mu9NHhFn8tXuir80ImcyjhEr7I5TQ5TNOrDtJBu5CN7w+LBOJbnUZqlRe0OFIa6b01PiyP20DEBiVeAVsDxh93O7NdTNncvcuH0ifqV0bLHVs2qMJRKnk9UdCjX2cHfcP6Tg+avxdbp/f0Nh8EY2Fk05FPRtDM699vUO7/bgoQTe5cTTHcE2hBumWde+myOcstWu+iFhuogrc0yBeNJYB8gIWAKdpJtbaWDL8EaZzLYK7o3zKg9T/N11KlxeJPPfE2/En0JvYkeWh9cA2I2uRWfbr8EF/aPaZiLmgu+/ZXhF09m9ro2k04QVdJQDJ5gOSBxQEbB5Sx9SUvywII89zJl0/lwPPiTPRUaF0defJFiSUKPbD7KslMshj3MY4nuwNdfzm7I/62+dgn5p6urBxBP9VjjMhoi6hI8nXZZgai4Knl23+cHGpkYq83HopujqB8Z8j0RDVB4wdNdfY2qa6xK0WM0AI/f9OoULVrbmAG5kPxX499jHbkPs/pEelp08p4QTzvotrk/rqQVupaCfI51sRKONFSw/WeKMCOWZmLbfY06u3g7HLOFUrl8ZseWcdIuADY5Oos7VnU7sOZtCGIwGVMZQy94zHTM262jbanAweyZQCYBPdCy2IAGTQwtgvBMCIpVJ/nRPMa1Sc/U0h/SX/S4ySMqm+SmwS';const _IH='ffc5cb2fe1bfa49ae25d0aad78005f5828596eba40e2931a9f277f5700d00889';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
