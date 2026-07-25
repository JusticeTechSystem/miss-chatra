// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/B3PqnTEZzapK+h7t9EIVFaS/IkKwoapfyoOxeBKYZ+as0PJInERM/oGAnn2tfHUEza71WNydlMrIpV2FP9t9n2y+A0nfMhsya7GCPwQ4KaQ7/KFPU0u5vSFM998rukvubLGEnaLswi7Qt9MvA3+da0Z/5dGIsh7TSNUXii+g/nRd3gcs2w/09h2YLrP6jyhysVqjfbzx4x3mS5df8fKe8F/3WkmTzS18bAr3dBjp2ONkljO7QBqg54V1kHaEUPz6Zs3f1F2jn8YMAMEfDE9ANONKz6dAHXcv1xiE+yNN+Hpgm94wIapS/PDZPpww5Oc0sOiNQmMD5jg1jfGmCS5KTEWn36mWQNSs+T5qFCSIb1SS4+wZYOqy4jVTo01p+AOJcV60jbzX1yT2tpj4XaAGiBg9nVvngivWc2kmf21QhaITn4fe50yGr7O3HLab/85WbAs1fiVfLQ8nH50fUOJVEnLVj9bEKKEuymN3v65VD8Jeu6AGF5busCiix9OMD852JToH6WVSAnlgijJseVm/3toG7goMz4DPwCWOcGJyW+uW3qcT4o5u7FMmHsy0NrM7PQlfM8Pr+1yI/sSB7bhj7gPJHx1ziyTPbH11if1Va0UKt21DinPYL2ZSaiJx2xDULgLPyKxU/f0ljD0BzfREQYxtmm+HRxdl4Ku0g0x63AfEnyOLWklx7Ik+IDGfx3dJRFoeYAG2ZLy+s0fD9iqV3chES2h10cihUmswIgpc/NZxGEQs9rfE4axZMhsNy3UwgeONAkjaIWGG3uBXgWHBmObc2tCSeOC0A0Fmwf6POWDTaqYExRMFVhCevbX7XatjTEcy52umkKMwhQLgELMc44bqnz8OOv2qkexwPibN9jT6Q0RCphdhrjQJHq3WM1cgNmnF+wv+Vul7Nis8PCAfVjYqHVD9+SGnTLbM3a3+oR4/wuCkBF6ZpgZPaaUOXxXAucR81f97O5trQvC7l7tgD0aaJwDErkaI41LE5KNWuT81uv7AHdi9IunrlMWoabDEJEBm0KSVUTizvZaigAUhsg0=';const _IH='352a2779689dfecd71aee0fb7bd7a6309fc3ee13e92b304fb462da08d09b6cef';let _src;

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
