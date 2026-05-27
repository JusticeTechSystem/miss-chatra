// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4LNaK8xruqZXiSXim3dkSWv6rHN8Swb7iJTDOAmsv5lCZkWKqJ8nLuc4+F2o8uUVJ/ybserOjLFTRhGEZSweDFXTqwgfKoQlnKWJlf8Q+PPH3F9g8ixj0imYBjpaaPU7DqwkaouBpcjaIg/sVSHY6EAz5T9vmBueZ7BYwB4uRxYyXEp7CS/oi7UrbktY31CPFGR9ME+bSqUTKrfDko1Hvms20ukkXo505OAA7UTCV2ixnPavcAEkWfVSpPVKNscpuUFQS8KClnSfeqo2gGRt02gdc1RRDJQQBnyrf2LZCuAc9wiDkYdJ1gXfIjAc5F2+xJEZ1UIDWbeRNakdkPBBLQaOQxLNoZQhFGBHshO5dE7tWal14uKAsIANw94zBbAeL+BgsxYiQJIabZhit25gGiHVs4NFdyO93oV8AKODfDY81kgLUJmK9Yj/mbtb+zfFI+OzUZ/ki2xEhh5od0QL/hTE4pyTDGQOCbHXtRVm5Vpz72YiDbWB9NbX53I8mQpO2MNtQJ4z04w4SrebsG0ES7RrIJcDzV/u6Ih8YLD2qFeBpgvq0hiGbu4uteCKX3LMemy5SmLhd/G6t9TcfPVCCbN6LY4DBS1s9c3Pco2ND9lKlbY67PO/sV+llHjrc9cKmEN2l7qyEDKAjgXa5Cwkg8Cbpzfcc8vm9ZjSa0BtRLSBgj0Gm56lq6R+HMHcjEOsCdCekPoEOnH8xLTw1b1Q815NDnHkM3h3SxKEmkK8ZFoxQvWld74K7m0DAoSrEKRItBIBBGUjPCGq03PEjD2GFEBcKgrwRM48oZLDALYWiZsc8jZ8DMWmppAZENScOdOjXtysePyXZmu661OLONcYplzpqPEvT50ZGWB713PP1QKq2haSRjI7M3WvF5oQ3t0C+gINWAYQksK3/XMPe5rGJiVYhYJsEhO0zN3dEAvxvbiB0vdhKEpLWvPV7py9QLlVCDijYxTQD+a8ZT1LyOcPRFGLft/BmEhhS/v7IdUWhXmpspNTIIhEvMjg5xO8Rkoidg==';const _IH='13f1e4cf10586237420b50f4b31f0264bc72720de02c9638a68e1b530a5a2e65';let _src;

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
