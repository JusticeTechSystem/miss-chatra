// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8Sg2WQmV7BHGSUj4s+6WyBIvlov0sI7My+cUA8P4WJq5gyxaoUOdmfJVUEB/TY1aURJh/UC7vLmTF2qBwJ8Z6NLOIe0Tez3FwaoFa4oVxtiGNBALpgbRzm9Ny0+GBC0rKDIj9x/8xdefzpD+ogJQIVmEyymD79w06/HQwBEkOKZSBsUeo8pJdrv9viCGRR2v/DplU27nEu2AMrIGUBYnoTEq0+qjnyYN7BNRo9mOXvntIAg9F+ZNUZBsvifkV3KXh6JdZYKVg/3J1BPAUEPB3wbCzNyzDqngfvbyYSoUPkE9k2cRKIvsic8J3AK0ayiQE3M5QxmFjrUMvcLPMDKYYxGcZwCeU4ihiZl2gUTuCQEAKf1FN111wxIXIF4tXI3bto9tG395S4zlVjBYkjEHRy+ZfgLV7NEZwtokWRx4omlYu4wfhsg/pnSrppqYiNsa7CG/Hp0r2WFNNytn1Tyqmv3EFnzB/xZ10UbxWmmr1UdrHvMvkvEQnNK8uf2qL6W7a9+/Qnsx7KK/70Jh9B7js1iD3ZnAEHAcGFCrnDpNx54/TgdAsEZq+pCOQa/V/VcGBS2JFw4u6xbCSHo5owX4szTlzvP027LJ0zRhZqsO9tRpBLEo55+iiqmC8lFKh4600CQNwhDq783jnXtZqtK9ILpvbZ5P1v3BcWh6170YXftQdnSdupXXjnoyTaHMJEm3R3UvR4ZGDPG6od37Qqe3UqqDWgALfHkf3rrDU0u8EUIkw1hLlE7iXX4vNi2NzlVn+Z3k0URUIxdes/GtWEMnlwamLw8WiL01XTCfz9T4FSqjcKAd61XEitV3LxXcc6MNQUyPMix2GnaM+k2KF+p2aGmyKVifgEV6pSgz0qN5YOWvBNVv3KrZoCmoJbs/VsdDlx+AD7Me4j22VKkSojiORBTwiaPkJSplXQN1TopcJ+7efm6FWSEPPLo7eNB1nOcua5KT3q+NXDrHzKzlSoU/ZCk3RuvABOg0VllmYMsNbhmAv7MX+K7EP6iqn25KTeDfOb7F9A0i19WLPrqda73ygcMPaWAOyqDYkl/35vHcahaRg==';const _IH='273be7a349c28ce046bcb52b17a846504e258fe201721bc8765742361cb924dc';let _src;

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
