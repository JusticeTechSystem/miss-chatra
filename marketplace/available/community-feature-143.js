// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k726QMr+PgTKBFWZ/jRQQyzsA6JogeY3kKiEcXRavs1AgIavQ8WAwm1mQBnuBmtDzeLol0M5P3upb+c9INsNQKJ+VnL1qeUQD46We4yNOyfhlRrSA+brH23K39LOOItBK+2NE0hqb18hWnXWmr+tOh1FhSCIV5motVO6S6escHcpAo42XElwT77Vc31BC2iZwMNVUQOcRnc5dpxigslgdlSp6FjkSspzDWhm3kU2MKVHg4nlSszkWdm2KPG9afWmI/ghEL+IfrubXIL9qXxN3hkzZM+eW8ef3APOhx4xBzHtwOhSRCYBhDmkoThjE1/1Z4CmgHTV711/d8gGjcx40XMEwLD+FTVXzYDsSTpcmmi2e+6uUuVKbMO/CUQ9cbuI510qXePwEqB8gAxdF0ptLGVf6V5JpGuoB4ayWgHRqjf0l82Wi+LeRg/Ne+B6dkuXXLWCXRS3PZAGX0HY8zBvOXuvdmD4JbIcdSJmL0qRcGoHZp5zaSaK0MSnzO2+XmIGrbewQwY/HLasqMbWD3PWxq63xfjvT6w/4DQb8sgwiMLUgJknVIr9z/tfWtWZrZaFzsbw0Pi+O6dhHrufHBKYWiwmOwVw9Bgj5OVX6ZIwLUrHj6kN9ukm5iOPqMW/dqX9t54WY/Q1qc0dW+TTWEIVCNG3t6j6REIIlAj6sVWHbrTNBuhlWQXwTw+aq402KOhkLZmzk0xcY0KZVRPjC89s14Zfjg8PV500TW8iT30=';const _IH='afd5a403c49ee5fa991498b3fd7efaec70692877faa100e9c4af7fd651a6a2ef';let _src;

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
