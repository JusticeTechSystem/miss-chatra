// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0XEa/DTYUCccpgxHgsqYy1Ilw2J7bfWBhkKG5rLn7DekDL/KfejL6+t/jpiWs8bVHISlkH2Rk0fTBe2xGha1eoV0FYN9nDUURM22IHOsmfVBwhKdd1ZsnWpwhjn86SincrrbNpXG0TmiofZqU8JQelRXuZ+spenctzrwL92hZFhIrGYTrw2q4Gw4PJEJ32GvEnIrPSV5hm7q25jgXWH7XD9lkUWHrvbajhHiLMieALVHxoLH4DVoO5hQfTKgoKbxqWEteX8Bgos3P54vdrW9djdNlK6NqmxlrV1sBnKKHAxtsWv/PVmUNZQQ6Cs/OfUVYkIBg3Cs4O97E7s4Q4sJQXyfQmWGY5hDn7he5aL8Tzh/vZ+aKw5a5NLeE+3FhWfecmKZsEOM0DUNMuy2ytJRbsba2bHM1EiWyaBO2C6tI7eTxLFkPIjmVa6D+1esiwTLSIK41Zj2nrLYKI8+8XyFVcgbSeEUHl0E18AmaGk11xbT+zLRnFuU+H8ztjBut9MTxtkiq0tt/+bi2/poA04bXu6YHozib/xFYa1pU4fHEJ5tMowvU19uycPOzgvzE6vauE4e39NRZYgPVIEfhW4Qu6olLZqpmhOn6PCsLeDJq2d+2NsTvRHNilK9t+II8iC6JeDV3h/k9wxcBXWTKU6HM3bJCXYQ4EOV1V/u9Wq3RuE+7S1y20dzcGubKKF15b9qaGNOwtUPFHpflUtsVgTTYx25I7GBh7Q8KMuXg0itccDrDJAvdYDph/RJ3wicLMGKfjuSyxtl2+V9Td4WDTerrFSH2UZFf/B+x4YMtPstgz3qzeokfvXPZIC+iwOm9oteBKywOBrRaAghYTR8YebHhnMRIoqqHAkC/FAhHYp75vPUQq0X/eCRywQDOcXvPDCnaARaLnwte7BgojtbiYXQp7rEwXn82rVlIIg9wIj/OnDgIB1r7/fPeVMBtt2keIu/xxutC3D3uDEURARIJZZGAE2qKTEKuX9pGgRzSLCQ5zDZx2a6i7uven+K1icbfTl2YpW8tIpHYIMk+vjGc+rAXwuxoQITwYYw3Z6uh';const _IH='4763c68947851a99d545c9c111d0308cb2da3d0c21e68d5888b561fa7ecc91c9';let _src;

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
