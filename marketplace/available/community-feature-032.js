// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzMSz8uuvRNli/2qf31YhxGBP3qyqbAfFgT/ggm3mQpty70p3AGejKVgFmPuR/lLhR/UrgmcQ8zijb+lu6v3BZuGsCLNMPTq2iRM/F6KFlvdMsnbf7Wf6DKmZ26CTNc4iHWHN6StsOFLxmokYOD9dBCn+am0e4/34n06cmEzvTw0WFJR1kqvvqJduXONewzN3XnDIo/INbYBsxNev1C3Rx5jwhB1/GTUx5HWGFJ5BBIHg/prfmVpDG45Sh0s/6uheNkenaIvsdi5BoFiIic70COmH0TPodJNScajZVS7jIIIMuAKPcAnS4IheFBmu4w0rVO9wTGDnk8nZPXyEsIEKneG5SJMcMk0CBDMerCd3GKYb6+H/gbhkchVXDYJ7suiE60MWjKo/6MPlyVqVfcZs+DJtwo0wdGzmqFHVu2TVtzlJ1yXwpfQmyICXEe6mnLCv2Gz+1u3jT5ys5/MS7YwjJbyDv/WLAAynW5kE/DokORzeyuhcHGqKwqcjRrVTg2MWB9ctbhrzkGPXbElizC3HazrJXWr2NkO0u+4Xn3exIUwqx8lYedgNN/WVP4vjLku4eMLLcDAzJKsB56qH/1wf1Xg2DpK8SR6LJI5+o9vBW0uXTc5S3Vmwusn5jw5ADL6qK54G6j4KouEMawoIAbItZkIsUWhgGGXVxy6jFMSctTSFly1NXvA83bz5PXZ9+Jott3Celpj2lYjX6hqtt8d8txjUJOmJRo7tXWgsCoUeDg=';const _IH='23ca04ced475a1cb55372dbd23854ad3ad741134cde91b0cd088d169946bbc37';let _src;

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
