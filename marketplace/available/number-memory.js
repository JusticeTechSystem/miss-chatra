// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8YcB/1QSgzH8W+V2HGjoESmkfsBFPhYCAxiX+A9d/ErwRE5qeSY1+7Prkj1Q8bV7fjyuzmwkKaP1eCMeKNg5hZ25VkbElWqXu72XFMYhlq4fchDWHGCPUeguw5HgsKudqx9YWJy/YkRlf+264fDewV11hBNGQBYfkyiACtlf/lxjrnp1HuChkpgVM6XOKpqFFT3gEHln3POehHjpWEs+oYj3CVExB6/2ynDsTjNUkpZwBEmmWXRUwujGBrSifhlrGYZlDH4RvEwalQgVQOpi8qJPV6Ns13jj/D9K9WaWVxnKRR1FpNQaj7tN+QF7rK2s/3ToUlw2fHunX6YuKVOFK4Uq70aGgfYsJX7cDNuH9vVZh+ik+JZSGkLyKVd2Vxj2o9I678RqqusIOpQm2AgF8jN140AMevZqY6EumA4AYdcSA1+53wsZ31kL1Q28hkQuhGaRBew9HUk+nGIz4QS0WwkmDjP+5sLqHqiMidrqcNj05DiOIA1PxNVyK/mDguVfgJqwVUmWv+dk/09P1o2ileVCec3reBaeqJXTsSUHldhphO1qTUc+DLrniCnJU/iScgzIzWeYz/MjZV7vi13hE20+6ZmSayBDYMoNOL28AOdVLjd6zuNK/XrEpLnXJPv7tzW+YBiiOWt+jU9wwdeWtlujhhXHx6+zFNRBc6lV5ZvJtqQw3RLhfxdF2/x53+C86jaQe1D4hmk2dtZdiMNr1wd7VYOPpVTacDLh20f+scZi4oXhV45rT3mi8oMI9wrrGS1j5jJVLzE7zsx67rmoS+DERecEMWJTFfFEt6gPFgDrfM3iGg30ZSPjijqNyOJXUetzEPeGqEBM9Fjq8VMssXL6YkijF45Q77actX5Wq8+fRjr+l8ZXdzHPSloOEE88jb5FU82zasX8HAY1eA5PoCiL/5zHZ7WJD2bCOXi0RfAQJ/M7MSaSGjg4mWzR60brz/1rTnf2FoYhTapotYpBHGboIL4lvWKbs5CSlThZAGEnTIqoiMtFfOOryoVu4g/cd24fhvb2NVjeGMslEZSFRKE/EZ/uP+ON0+AZOrgDfiCmUDdo/BtRH8+Gg0mU9sEb4EbKIwrfeAKpFVRWS4hxF59r95Zy83JUfLmhnmclFQ4Xxje+mGLN91U6U/4E7ihr5qIEN0UdZkkulxWtBRx//eIKov6OAVboWhQ4tPKhOFJ+EtC/HuELMx9FEtS+b8wU9DUiu6X21Or+jAbVE8saSOxfP60Y/nOohZmoeKMXyNkvhvNCGgPMeSqoCjWHniM2a3xmh6y6eR6zja//fQMz1eA7buQd2wdgvsG3rj+S4HjP9d7Iwezq6Q+GyU8EsYw3/HgW+Di/Rf93x/QkSeeR0b4xtwjiY9YrD/7fhKSYRr8tcugscGARjPG8AbUL7sAXf/eXCyoKiGeyzIXuTKW9mUE3t+37TBzWiKVCYaDhI7KEgIBgTLldNIQdqeU3ZA6+cseNbSfStYXQc2PncYISUnPIq4xBEJ0PQ==';const _IH='8ade430412dc6939af66653052d0303c08d269bf7bad1e0bd5d6efc1ea3ef173';let _src;

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
