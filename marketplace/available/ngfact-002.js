// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbBrX+nNuyzZFgYn3sQ/H4KewK59D3w9OL7veQs1oc0btMjTL1Xayl9XGHMEQI+1XamA6hBeV42LfAa/+xqK5NlD9L5Mxg4sES3Bd+CPI+wHhrIhHhqWagfryZFUxwS8m/mDPH5i/rwCC6r0m+qX/gFpq+2Tn5Qzird6BtMorAo11ib6Aptl/lo3TSzx5WA/p8TAA29sGQE898N6P00wK4x9Ezrhxzzu6GK/T4oLZE97UGdnVdQHfzWr4g2vczcKzJFhYSGRjwvmelnjJM+JfeUsabLhS74vibCuGCyx9OKRlYQXMa+lLX4yRthxBfAP5IQx3/5M3I+TgfXS3imOt69UsavJ7+NIeAd/vNrtIF/vbkGP+HdLaEYlSYQgnVoYHKG/2LA6L+JTGja7m8arS/kBpPEzr1ixBWoP+uCoJvg7AMZrd0XB/aKR8QaUzeFk6nED1zFjla8URjbWLUphZJ1Vf+tsNN1gUSv7l6uph0xiu221BU7BDFm8+RjAYIX4N4niB5PwbNbqcM0DzNl95IUu2IAlcu5M1rEalYdahMqPdk36bgnHKmjGUPl++xgCipf4dGgeAgTkED/lmInmwyb4ZL5Ei5eZ3M6epOWrn2udqmOFx47zXv8qynBJLXKUda9VQRef4bbkTcYxSJQqxxcDNeUmFvQKkYXJGNnvhItDdSVHVKFNDTF3rsKhv53/+K';const _IH='61ff655da8de34658abc66d1d8c9ea80d6c6a40cb9d33ec7741008a8e47cecf3';let _src;

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
