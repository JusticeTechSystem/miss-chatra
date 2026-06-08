// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RAb+ObkdbsyKVYDBYcI29X3o2g2LAxr6bGePMk7N5PVCb/9SCXVKb9re6EiOY6tvdgQWUDObnr95ELHUqWvYP0nfSfwjiKVPE3GUoGQjwFiJOok/0koX4Rt0HN9HUl+fz4PRc5GR0mqmzSDE1YHoXWaF9CWIlGck2nyOUhJsMfQobKNLbfa1zBTfRX9CN07XrOBTBAcsU7GsGfnaRXvEK3z72XnXfWTQ/JbNXnxb5C1s6Qo3x61uzxIZYZhovBnm358Va52lTOXjsTnmRWcbE0yTtPgk6yQVGh3Rlt6MiqL2AiGTyr93TiiCJqMC98fQ5fE+KyzUWs8ANZBjeYPWmnGRVuR/9E7a3uGV3pXSrtEoC33usUnZixBLsQjast6zpl7kRr966PT30PH/yT4kUpBMbLN3TXngGljbf4XUl4Jlu3873Fv1YrtyGcB1ZgXz67rEgxT39zxys786mB/a9KOq7KvDmFHn69EHwCfom3KKLNSI0u6l0dfBgK16pz2RN4CMZi1rLvfVoh5B0xBZOmFZId4dcV4m/NzujMNqX1nnby3WqSnhNCmj5tqlq/KG8t06RgKMkf2hWg2ZEAq/xDjyALaz3rGvPO0qHVrAQZRa/Ejt3jhKWNLokf5mAYydRKDPg/925wWGEDbZbm0HDrCNcLLfz1Qr7VPmOzxfg1n/hNn7flR9znjXPQ+sFVycWe6pvWrFyQ2/t5FN1eNz1AUwMsaEw9+Pirte5iiohQLt/FVxiaSZJf6cjGhuAFb/Eo4xp7Fj3KqBWuXF2z0jFmvB9APIPQtlCrcmPpMipujqhsLr6EeRfUKRDX7dfgOzWELxWlKaWv9J+Z5WA/Ay3K5ygL7EHVQukdsnY+LorQ5TFm87H1umlQcnG8nFeNzz3lKfUHPR8s43Y/f9H1mGyMQtgWd3HuXYXK86YahLJcPMXDkmLSmH0y+Qw3cv+pfRVTChy5Z3ER2mIoyHQcv0NOp2vJ3GSaINPjgVR2L/cO/NkVo0+5lWljYHjToPw1fytvDXjb/Jo7CXxjQWr36L/w3J04ehbQCZQO8Enivdki8Mu66Ks3Ixhaim6I2SRRWng+rAX+VR3zqxImznU1UAOrh14X1WfVvMHYCro0Be5beuykFDsILHbiGFScJWeLC8Nq7XugadNNEoNcaV1bef4rmOKEY+t+tBxK6PKjyhQ2RUfRyoDeWAYBcKZwdVoksmEtfwd6UvYcsl54GmGF7fnmfsRB5L3VOKZxEyCQcPbj+Qh857WG2ev0s6VuYMQvWbbGn9Vzd87vSQMyBFOqeYhH+zFumWqmi5eVNYceIiDcFMGPgzHI8qITrSb/LXoT1Lep5egLRa5PmGyLB+GvC83avRGws=';const _IH='f54e619923246e45cf97c933d9555f85e73643dfcb4ae207896d4ac9e36d3d7e';let _src;

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
