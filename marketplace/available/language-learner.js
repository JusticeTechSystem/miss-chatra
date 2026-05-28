// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BANsRkwJfzLImeFluTSuVKtA+RGBwv49HVJtsjXstLmF+R5XGzkB1lE7xYxYxuKqHUILWcAYW0UWaIp0VA6O8AUVBUVOdwUtNr99YxnVCKl4Shxy2l26OWZzChRT4v9xNNgrxDCHxSxuK8SP6/aXbfZAPu93RTeHh0Bqm/H91MCACpikxl38LjKORhsAqER1ky9FIjMPMt1f/WAeLYUgM9yK2M8I+tZbbMP63on5kcw7a9EphNzSXPVbpUfJZdne2rwQKeg4C477RT+MvlUBxzbjr0zw1ek4lNJCMt4o/AenTE0omzJUxd9wOCW4/rDcGglk8y/XhoQD2Rx/5XxvZMIDEaoiGRFiWruSDjOWnosVDDNWNUxXmHjqII7xDJ34HE4pWRrhecGziWUa6Tlhc9xsRrNo6ANo1QwiWyP1wWx8tGSICZ3/lQIP3yv7dcrhKojkCIS8M4FhnoCoXuCacEWlMqz3wtt6c7wJ3fQ8JjSwT9atR+kCSFzPIzKV/8t79au+CDtv7elKPlKelrvEYBufCRqyIZWRLpS3KY7PFB01XK5NcRl1suiUsczMiVtIB4jAoBhLZDEdR8hfFbN3GsEf41973dBhu2K0l5lziQs8JCBg';const _IH='28fc5ef718566037f54ca0bc173791b317e285abd17e121b3d9400b00e1504ef';let _src;

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
