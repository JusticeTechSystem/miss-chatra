// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjPAdxjbAuZryGKwEWDcg2b6qxTXCQ5f0Dab33hVHFMOkRqjvcaGNiM60/RT3UliJCM3xMt8N3lz1AJxMMIal24MWfWuZnD5HGbuOjWuWjsFS54tMKhCYmmYLcHJ8K2+WaxTmuSrDKxwyvQf7m4hme1v4m+9dNM5MNiKoeLAOdInnoXOLmfFoFYz3szCLiF/VWN/QyeyybLXFBBC2M2fyDAdbwcFycdKM0L2eZwCxGCD86Ggixken7l9CEUNUXaTDhyC/kyXOOVsGgm69nUt49B0ARBKDUmTaaKbGmeUPDyIhILkLQZMC9b0V9v7t1/bKFzyrRjLX5y1/GEdHLkQGa4zWDuMP7SbMFl0BeY9zrBwOpBm/tqQG49MYZpJK79P+9nSHSwq8cET13VO6BkEjiZSe6dZqvRtU/x06FsVC/30q0jdA7aQJY6OK7hMetSBUzBSUxqbackNuT/COhyLJMaGSB5H/JpiinVRnxVVTk1lkfoVdUGcyjRUiqxtKxHxeetQoyEx1ysGPxXvOASLRU7JLqa4JWJmTIasdoAzzJPHvvUEm7NlsM8wbGbc7U8pX9pdP95FiU0eG97x2t9UumBygfXGyd4ayi5YZk3wri+O7Eo8QMFJ92nA5O2zTbTv1FCDUsK2tpyzLhZPMpCJjRnuL1Gca+WEAM5eYkJDwQ/c0eyDrIf84GFR4J6ssVvKEp+c/jO6d8FF0MeuhadmK+RHcxGHtObsNQhVHd5fH0BmmGSQO0xdUnBsN21N7ql3EHRpMS8og0GipUDIKQoYdChJaI/qmBpGkyDyPiI4cHzd1lbRSGr3RCD/txeV1JDsbs8KyxxAaHedkTjhgIYTIu9ultLXoRQuovpVg1VI6xN2bH6KzfchgISNeUVT0H6my2DN4uhOrCQGC+N6/FeOSDvD9biLZosan04ngaKra9+SksJJhaMgeuH3t/xrKtQOgIlpaCE+FBsYDi/zKFFsm8YSD0d0HzMIcoDKAA3w8X10u4ueN9zgbspGmXOwayDnuPHX2yADbyKKzV9fxVzUK1I5aTsz9Jb7VThryrVbT7pdZV/Kg0est3FZZNuduQIrrn71mTiQhN32uniEg73+ynWlf1djgvC2uK67q8mAZaBxmmpTnplspAEXwyf2hsSktJaY3oDA3AlMeB/dus2BZ74s30wA5yyct1NrDk26wraQm4DMZAVfrCp8EyL4+xtwBIDSNPN3jUKNyxYzUyFdGUJlrRd00hzzjhLRCZoc5DPhkJ0QTMXZKXh3PAaSwVzJu64YGxE7yEVuXdhOjW7b5wnrkNnsuvGl+HlRRqP9M1XpWcaXGwRzwU46cZvGRXAta0za1KKBwQVQu+BvT7mcqWfeoj7RTTIpQ4HSK4/HnqNi86ZA==';const _IH='14f36159bd86efdd41a0b87d49c330e3d98dccbabcec7b3d14dcdba9fa50e175';let _src;

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
