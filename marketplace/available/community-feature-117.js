// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m37X7bCEqRfXbOBc7cXc3oszimJW52xtkKEpLRy5PES1siHF8jtCQoiJw6LSKXaPuIraz/PN89semGYCkH1eYxCHU/O1357rcoanmUFB3/v29CwQJgkpD5tpqCfGx7dry0SHHgXHXCBMXjdA5PvByMXvSOA9G77DYCdH9Se6eeqIQrfSTxD9RCkLEaE1tDIr8FNZ90y3MNfzWVcM9ryCGQuSFrUbXQoDMKfneDoHO0drj8OgFL1Ec806dEBOUc9w3iYl7PAWdJY/8D3GPSq6XjtL1fvOmnd46mWeWya+tL+f/c67wzQOPXXlwbcOoL/EHum7UV9c+5aadk4sc2x44YStWH1kDwtm9b3OYwmIzjvjP9KKlSIsToWcY62Xta4AfLjarOHLg3LE/HKlFFr32bwcp2dabbmd1F9IW9eKjh/CADZGuAVsFHwc+a+XGq66chQzcO5mCw7qiiIzlwVQ0rN9q552d3uEcCqaUEqDejrRfF7mfPeUigLBieMuQ7GZe/6u1Wga19H0agzz7BcgEXAB1emoIl8OuHGtBjMZxLHRfJlwGJVQrmn8tLzmjQzQkoEhoAGut+GC0c5fV22z0DPxF15Qd77pcQlJZvjEiKmhUHHHYVV5pYkdm/FPBiBXFvBU9BRSiBCe9+79dibWC096c7HwK2R+0dMZDV1xJuTTKR4P7pldQlPLEqHn489z2rc7ziZO5sIm6a91ipzBz2tal8i17JFyksiYeMxaKb6EziM=';const _IH='17c45af73ec37012531126cb1851dbb314f167aec6d615201fdce3ca63999fa5';let _src;

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
