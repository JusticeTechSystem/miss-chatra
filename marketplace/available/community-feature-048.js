// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hIiaGqdPh+Q84gORTo34uKX1SmVeqMrywq+6hs3WqlVDVFyqOKJ5MKbqmIf1eyQosVCHMYG47OAVE5UlKQCiY0lwxFBfVWDW5gaX0cfb/3KKiD/zmdP7mkR8OGNkc8Kf/zwXAzLwFBOlH/ST915HnSMFb4ppNwbvQH7xe6U/9+nTJvl+YsOydmsr8XzKVxObEC2fHJNWD9a+gMeu8ta4np+4qg4whSLilFAxbBmJyMHomgwGHs3hmDFdf5RoilIADOreqB3mFaIbCuD5dGvyGEH5/+bg8YFPi74v+UWn4f/7uddFM3/dLiY79QlW9/Tp/C0MAwZaVfxVQ5QnrIkH1A3A/0Vpbsnh3Vk9bhuUfnkyAx68VRNL0Ug0Ri9SlGFlyDEOJNuvv1PI+z5qKHilRM2ikRAta9m8IoJ+8MqCS8Q5yJTtFEIfONyu01PZWkMEheu5djXyU3DivD6jFBTFr8+PQ3PSwHY3Ixn8FHpH9q7H8QBQGbWsQWyV51GyZVVdzxrKV2/5yqX+gohAPHdJWlouPv/DgPuUReQvj8/28Ywisfbe1CO9LBzjMiJgs801XkUdqlUqH8OUDpEtRZJJ9Q7om+dWtDaqnXqTYgiepzTTuK0yCO6BOHRvuzeaWrkAWBe3S5N+oHbYRfba2K9ct5eXaaaxSY03/GizLGfAO/pb+Cn15/evAueBLaoye/M4PWe2nHRG05Jo9sivDi/lOGdavZh1EueUZw==';const _IH='c4f71cc41ae58cbbdb5a50666a5e62fa48a40a3f74ff1f69adec8e814ad82df5';let _src;

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
