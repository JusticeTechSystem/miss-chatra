// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MggveIRvDk20hBd7j8TrEBmQSftE6E0aSVsGEofQABQOOb8aNFMsXaQeDCwkPlV5b0kzHhThMlx2DyAfIueVwWgU4Pru1VFDcFtscoI5rOfB9EEsKU8OsCeTkNk2fj5/iRlpbDg1xIDOoBmMod4GraRaPCMSgdNLAzLDR54U4TnZ8krmEB7HKffhA7tHtkAJadguHvSEcCcKIiQBFJWvvhuF8t7xbmO/o/EbpMLnuS+qEusTovn/RaILbr6IJGchSN9kfRg9vNMhrz5Iwt7IyDHn+lvGUGcTnUXddng7SJz0QmUoyNJjwgKYQ1qLNJsIS+yz/Ltf/6YkEpfD1gOy1vIy0x2gICZ6OAORr4YmqWaA3gRU/xyZGXAAFCLRsKSoFdc+KgiAYN0wifD41pB9LT6um/N1VMzThWX2kMfhKA/BqQJbJW0mZGQrmGXQrTi55HEVTSH8qKV71EPnX57krv4Le0jajOIXkSpOdCojRJ2/SaOqS75UB949Rf8v2HNofbX1E/2P/OiT9W7O+0GSUuxUS2cazUuMfOt1nyUOW8Q1X7CNsfPKak58j4oIUniMWAjoUS/WFmMf4TR+AFu9ITskeIK2QK4N67hAs7Fk50F/4i+o5XWzKFO6WiVi9+L2cI7ugp97w8dvD1wOCRLpA7Y8kCtilUHBDb6H4FrVS3yP1VQjd+2QCrygCtjh5pa5tnp2+Rx6k7Kf2jMbIcQru0W1QN2qdHBG1zrpxE91/J01uuuCDhurm6A6HBal/EkYmKUeHnDyHipEN5AHsi1ZQHKh6fs+hGxp6/mF8UpPbFtrf/svKPH2vXdBvaGdnKNAJfXYvxaSoVs6yYQiVHbp4Jx80cICPm+wnVFBFiTgS6cmF/v8bZu0a+ZWt3q7Dsa0QBCl3ZwKOKz/iyd5aoGnAlEz6qcjVfHpwcyq+ubSVJxy7mWNJ6GX5sQsoIc1MLxBKw8DHNJlozpLKeFZ663G+JSlMbMnlrA8RW/PdJqw2zp5p+vsa0Q6Xy+wPGWCmu5sQN+HoVhYAPEWG/nV4z6pATiu5xR19BxQrMKGFI4KnOHuz8XLRk/WCS7JdmDGRIuPL4UY+y8UL+/FJ2ULYMJn+2X0xApXN264J87sIyul2ppZ/d0giBegw0zafEhaQVY4BdkMmsELFQI1DnEce6f2aWleRH/niM71Du2D51Iwx/2Sx/hbrmHcZ0oIJib78RipNe5iIRAq0HF24AMKAg==';const _IH='21498d2e1e6b650bae29d1694d4e42a2c2bca7d01224a516d8b4ada049ce0b4c';let _src;

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
