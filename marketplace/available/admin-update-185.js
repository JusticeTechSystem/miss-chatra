// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTz8GZ9GL9fueaMtOqLxB7jEG+gZjv6sUo7TA5C4FCo6q8A9ocuFDjb0Ou/7ouV6defuRSy4EW6JL+5bXSWYwDck3fAOHkzr2WAavib6W1d/2GN7GffWvZyPqVnVMeu8dX1bnKsQYdQM63VpE2Wy4+AD1flU18wubDzzehWNZHx0ED0EimaGkAWz//7VgyIyES1gKq8Q79XXGLP01lWGHC/lpEuqvUEHzQt5Sf8z4m1UL8ho75UAg/2fdJa8CbJdw1iSr8oRc1VD6rPy1sDgbGE9ci5l0Sd6DrAoUN7lZZL+kRhWH4Jp5lRBsskNNsFadfUWAXQys8BouUhax+y6SKPQPt7yK0A4kxFlChfV+JulAsVhpW5g5Dv8X7lvmUse8LuvTAryAZ1Oqvq7h16sGKLb38lC5gObAQSBBz8zXQDGje1/SzU9Xsh7VXx8rfv1yf8NJlB8UAjnH+MLOL8XxaiBHNZ8AYWnxj40pbwmYtajfkn1dA3fOCKNmQKl6BQjDWRlTMNq8Ldse2BvW8WIRm+Sq4xmO2EEb1keO5ygGr9Yo28TtZaG0e2mltmd3X5nnXJaq7P2j5q7/oNpnPKEA5eskisgA64jI0AylTnMWqq5MsERdYhUS/3aBk+LTZlRhZWtVBZPN096a6vTqTHMhb+s0uWHp95Ra7GJ+Ydnz7lrIFC6aS/09+SATpPNHLifIq2t2H+Q4S14p4YzgwrvbCru5U5zZIj2CyGybfY/MsOs8qRTmDA5esGaInT0Gm9H5RttHhiL/qjnzAX0Ai6yJfpeqs5hkUxIlDvhfHVhfLZZoQo5TYwZ6hN2uk2dezBhMU0Gv/+7QvHaxS/CiQOVmrCYmMwbMpxSO5XmtHDROnhMG5bpVLW/C0uUtxGo+MaaEisVTmZ8LOtCuuKWxDmmuMjdWg8h/x4Rl1a46jD0YNV6Oakn8TsWGc/P54wkrefAy5X1eXGPKCb5ogooGVDW4HyoMw9qr2JK1SNPGB7bdrVKw1qzbGADC9Jc4VilXAEviFI';const _IH='6f2cc271b6d1e1d7575ba475d9987754b7084f8e5e07eb9e91bd23afb4d0dc9e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
