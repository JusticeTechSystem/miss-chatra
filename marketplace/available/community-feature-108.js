// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NNYABbqW2NNlriHhanl0UwiWzBu6NKeKX0BjLN4YIPcLnbHGcn52UyBVjam45+2TUslTWVaKaK/vehwjzo5kfVz8ZlSVQlk7u1zft8UJAFPXf1IaJynJ5RUwaNIb1uQMYCCb719PEBrWG633guCtYKTotLiGp6dZjxOM+tkQT5b3reg2ord3B9LGb6Zq/WR0/9nXMk1w8EPM8Bh0rrg761vrHxHpOeN2/sEUBRhIfZc/wLUdznil0bASALlgYiqt8br0EfwXWNGrikvmR+2tL7r5AkIpqKt/KpJ7tpqhLEd770+JLi2JwBsiWy0vhuO8DrKyE21jZTVnq2om5xyM2sBottFXbrDQLGHFZZzf/e/+/meFB9scYluMGJ+ryY3Ro+JD7v6huUHPS3vl3v4JqJUovmgTu+g0X2zl8h3SmMs/m1gOvfzk00GgI3WHot+xG3mt48/0Zisja/5ZJwP92LaAzQdBNuKTsAT2jwA/THny15+W2EzPMtKNXoCDbEdLwTacFlL/hcnUpScFOB/PTqOiGVgEeHWv6kng4yzApl3Hi1RxSYkFRAO6dIBcqxcHw+FMqJwNkz08BZgLYk4XYupRPwVL5/dhPWsFWaik1e9C5zL/wYHUqU2N4rbYuLmKuidFTwz0bxupk7W4UV2rPJoxFDXqQ1FuPwtOofpbUJBqXbRHUiIyWKRx7LniC6tH0FwaKQsC76bHWIoEtcCY7dxIZQgFPyef8vigx4E=';const _IH='981c8c6b0d337d85f2e10a2f1afff53d38984fef6b567209dc9c4a140b159d95';let _src;

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
