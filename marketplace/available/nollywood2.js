// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F1WUa1exLmk7cj1uJjCM2vUfiH2Gwg9x6X6H11Fz8QmhNME16t8JMb+7ouOksOWgw/ICtDLAYWZDg2fHTBvRwzCd87U6mMjn3Fp28lu3xeHp2b5gQiFVFLo/ZHygJG/k8TKJTNbS+gEyKCJYfsMsZ6o/RHGkEHTxdVs9V3wgTIKrfZFiYehcdScaWqyCnsvBXDD19/rYAwNpy1okzaMh2D4I2xYFy5oa6B+eHPtCJgQ9Ia7+ENcHnIDaKsTfC8OKhu2nDmKGNL7jlTBanrZUTQwlPdu48qfT/Zkpd1tXNMSCV+2VO4qJhpkFGzPOI2Z5D+qATO4uK0Y/0T+2Pn5NL4lGAR95KgyVgRnlaxaJSubC8DlRX2obvHAXcgFo3nWolEbOTjvarCIiaKT8gqUp072VxYFw0QzJINmWocUzcwuOsj8d1CL/fWz8bOfiN20hM/jLm3Bq+tE5U7i2VnO6jh62DuISSc2aaQSQvyWgbKaDdw2esFSaxMRozl2odOT8piG8SMJx2IopXe4OZCsOpdgDJYzOmE8W2c2pTZNFEOSppVlnIQf3Dk1a3dFztsOcbrQX6AXvfiJ1YpV2ObNLiFP5Su9EBHU2u4CMi6Dz6yUvXof5BUSFBlpDrgXArt5TTXsFgbiW1ikaoSoLiAgYK6RL6VxXb8l+2GQ6wBxJl4z7GAr8fCdLtm6Q6PJR3uIxuTP/iMaPcpgcXKrDObtGzynX0A4dGsQiRvXT4c+p/AY8Xxkm+zt9TweIS7Tfc95pXvuRAOBopNaBfl7rhraL7B6PEJ6MQRUk+eZr4Z2ZPYcSYuF1GnY6rrg1bxOZlL2HFAJKwVSt7TrEdYPu02MK+JY9uXfM8ghd1MnCqURenic5AeASm9IqE+/Q5HZ7GnawltPtbt039Dpcslnv4HWcMBDIOr39xxylPuL4/DpjgzE5xhXQyB/0+ZfhLL0cD8oIonJ2pM/jM1tSkpscF3uVS67IK/kmhiL0O/G03N9s8ZB7YE6ffpRc+9pfVetKdEd5UjU0cW1aE8ux2V7CFRttOtf1KvYRZzAo4enxUCHhAZn9PBb4gGdZvk/Dk5XJJpP9cQDNhiNNCTVWK0TD5G2yc938Xs/Pg0SSnrbo2PYhqrW2VkfEawoRdaRd97qHDn5quEKYry+cEwMuk2A3/khT5KoG176wN/4llCah2KIIcr+Hns3/BhbpNSB4m/jna1LwpMzZ4q3kdiBVTZmzXNA=';const _IH='b683cbf94f3a1062547b0826bcf901862772a1af4f9ab3788664ef8df7e05ddd';let _src;

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
