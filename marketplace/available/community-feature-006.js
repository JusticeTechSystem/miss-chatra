// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nkNxd1WlSedhUTq9XqkoRQGu4kpTKJoWcMGFjZCpT5kjz6Fh5kI2tSZ1SE/CSCvSL/7jes3BinfoADday0E4Qfkp5Kxi2iazuoNOmCvLmNW1wAK6By6GotMyY8R+lYAhCbVy+dP2JNPGZolaV6In4Wb5tuQVH8gxmpxjH8jq0TBZvzvmzkhUh3Vh54yMCAMiMaCQa1d9hkeigVpJMXDew3a3Fqm56MbY7iCXnY9R340T4l/24f3bxRfJsFm0rhXMLGxPG5f83+ypwmD1FRHAEDoXLtXYmJVCRXjKQ1v5g5YS8o75YJQimj6Cqv4TuR9jw2LFV6up7nnenZoxwbrwfUWjvMmE8WhU0+520Ydqi0IdssZ2Trlw3L5X03IwwpeAABErqpOnE08b3iG2SKE1d0nAug5UWF/GRQgs0FszauLBCDh45xKJadZ7Lfyy3sjiUGG83VYNOmG2ewexormRc3Vgn/wQqixPws9VGfERSvvVNVYE1A7lnb8PAjhFIEHjtp5uTWrQZZUgKuJoFTXkKfiidN8+LmxHMcBLxezWwAg070V346RKBK3BQcu99WFQNIfZ8YVA9CS6IHVM7cIxC3vZa5XaNV5VcCqhd66OQXOFErpLdDlX/CmpATylz/4dhg6Pol1tiFfn1RYX8VOr8Zfl2r2EHsrsAlzreSqqt8/Nn1/Hj2gmNGNPqIBZKjQFQG+cMFhM1QmWJOGAQk8sIg==';const _IH='92934afc2e5a3701bf313c1f6a3225e1150a87a82ee5fec1a720ae8a2bf0db08';let _src;

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
