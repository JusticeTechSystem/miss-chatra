// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1dTNTkAlfMi93xvMg1eZjS9Eh0Z0vY41jZPZJ1LWALfDPWuy4+Kwr7UxBTIxBkg98VjwRMjALjxv2XUf42GC9Uml3UIROtkK/s4liMVXvme3yQpqjZrP2T2YSsuq5tPT/Lnpox/pvDVIxst9AKbmR2380neh+JM+36sEt9RDYXNrpmrGoi9RP/fwLPgdXU4gtmyWapF1Z/29fb6NgDxb4wH7nCYEw3GarEv0XcHextgyso+xSIbKYvT4cPjce7ZUtUU8zQHzmcWc8l61SUgCOjnudzdoySTbDLebY9/7D6lWg6rzJpdSZfz21xzd+o+CPtJgjHptSR4YkSHMUxGKdTBCRXqRyU91VEYrQPoTC7XzIzB6RSduf3zQWkmNFqX72cidgHMdusxT4nFLlM1YlTdrCESfZ2lsDg/qG+/vfy7Y8xmwInTW/pZMBTOwIK4/TxBJ12/OW9WJ5pTcgHjEb5xwUKnc1SLafMj91pf7qooc3iC+iZHQXY7hqLu4I8CcjmF7SzJkRtDFENgXf0YbBp31jIkNMI7RBFarUlzZduE10u3OnlKsEDWfdKNHoKYFkXypxcnDL9Bo9CA6g0dMmmMTWPFyK3FN15UJL3WMYPts9g4zx7Mh+rmc4iH9IjqPNR3EEwWaEke+Cb3I9qlgGfq3a7eBv/oVTXrIfYBQdfczqfu/bWKnsUSGPmv8tMnX11sxI81hha7BkLjjzPVB3qHhQfon6mUDlBXI8tE6tqpiH01IbTsiH8q/+74xm7vDsQzSJ7bAL0qzL7VDof4U4xxTrMJP1suYMuwVR1ytCxalaItlI/sqUMA1mdZj5POnY1r6xnvsE6r4enQskWCukiAUlH62/1htKudtzwy2bXuaaI1CYwCH5W3rEA5/jaTZ+JSPFQjHbjtYAfUijgGxByjkJZXEPgyAwVeemjp2lBX9FSgHmLhf6q+PPBrd+3/6Xh1HZ8qKZ6nrhJvxdWrB6M3AL2M1ioTFjoueMTNVMYHATQ==';const _IH='34c2baa34b232c9f2cb3bb53e12443e31babfe2adbeb782ea36e40f83e6bffe3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
