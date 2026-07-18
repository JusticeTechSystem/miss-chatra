// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT94jldlTTmoL3fgPPdHTV0HRSL08mmh5rFc4F/K+OxEpAVDzjXcg85YoZ/UJ82D/mewFx9nYjPrhUPibWvF013501KoKb5dlfG2zSX1JzrnTkSqS/OU1CEdgNoXUIL0fJf8s2wh5zfqsmf2h4TTOO6k/M0nOQKnRPgZa26N4coHyec0M6r+tQ4vdAFbTbOVc7zlKMiJ+bii8ZZoBRL2EcS8OHC52NiMKFJFTPYuRKLyNDBWfNz8vMlVdn7VKuMwNL9o/fJGeXJ9D9kClPMachCqc68SJs+riJEBTnjMwSanlTVEerhNEuJFVj6Byewb81GmeU17ab4jky2feVTiZzWscFu9pkLHuMjJ0xgQQmvlcfhqPWyKH4iZTbW9YRKwM3fYkPIleNWRgE8H5qma5lmRD17/WY9jsb8qu0aT5IqylQw+jcA93cIbfDHxZ/J3mk2Jdg66zS/SCoIYO/36bEEJeWoDekseqKTWcruZkglJRF+IrDzWp+6y2UA9Cnzc6ESRM2+rtAqhlW6oL0FjaPDWteEmV1FBDHBQlWDJFFShA97VPeTg1u7mPVKouDciFElOakL7leMwBv3wOA5zsY9jaPIyOVqIvcSdeMPn28ZtAb8GmH3XYMDw4dH/wdOfNKDQN2Xn/xU9dhjLqt29HkJ1MvvRTWFuCxG41fMwdRm5ahRTg2tCaHIsNYFhW8wHpMeJFVyC0z7y+CXieRc9POj7B5GBgaCz1c=';const _IH='9ff12d2d454ec85b40449bc931fb357afb9a56cfdd2c611c086adabcb421ee24';let _src;

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
