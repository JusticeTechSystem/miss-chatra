// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yodTni9LteVkyWdq+w24vRs0oVT31GcQxQeQH2djE7b6BNK1AYSJBMaj9wpB31lz68/zolyb9JFLbFQTCVoxw2iLVAlbY5B6A70wkOogIUOFIfsWusJ2ARVCifVIRp8TRBOyh1uq60fvkm70h+4zo9Eeg01pjpCo+JCdTzZOlBx3hCOtfB+nNEEBY7cB7LWoR0v+6d2O4qv4NAtpNDg3X0EHWST8cm3b8dnb+eXIw8pnpAWNostprtJHaMd/1w+6J7f71QqbyD2fbca/QSQlpGVl9eMWRVf7KuHFqmFRRgGwrxZOAXpt+oEpD9T26SD5QEF4hoRvijZ3YaxY2g2CRLBBAK6tzGsnTw0HGOVlYEZkEDHxbT13mRWpifsKt4l9r3qI3xPi9lQ+sV49Q+atDGH3hw1M8xLmDOsqxDuau3Yfs80Hm/YvCo5g52oRvfrqyVMum23P8rxd1oXRqh3ps46L8Fpa88GNt9tDl/WGA4NpwBq7vm0koH+ktp+20eG1hTTJ+0ziI8VaBFpW6OouM+Pb/fb518dhicMslNryyadY7DmeXb5jBj1uPeaTsKialMyMJ+k/AHv1aDr19UHpS/x1fv6iOrQ8A1/PmSsHNyB2shIz2/RGfVJuHE3xY9hEfvhGJb8DdCYpB0TifADuwKGnMU9TnDP0H8Cf6mDdPP66EsdEMRYMpwp9fyaXVHx9eAOYbts2f4H/EkCscvzR19hw7f7HHMEiikNAony73E/92ubVgFoFX6KFccrPaS/vAIvJ4/xz3e7B56b25eZmzo1zoHdaMB0QGxTxx1WnCG1EQCZ7C3+ttMjS968VtYF+SwAKQ00sCUncbVmqw/avyjUpo8xZgOLX1uFdFAkGiSrR15wEe8YWeN8Q41eURkWLDZ7/8flAICPjkVQ1V4/b6vKAWC+JhaeumW0vku9ngMT/lxlufyN46Xr/am8KjBoL9fRVRpzxE4SrcM4K1ta8CPmbJaaQakuwQdmjmJrPuXxdDwaNZt67X9RCmzqCE33i6Q==';const _IH='a71b27b9c5c312cf3c0fe726514d076751dc44965424d51544c9b59a6387a1f5';let _src;

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
