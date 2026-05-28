// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gsm+67hajRjx0CuQYnp0uNyzS7v1N8PlCYyOgc8f5cwufvJsdt38cSnTeUkB6njRzEr4t+ACWRvkysXq6Z+wAzywcQidpQNpDrR/7/ktILuBAOVHE1MLp9excy+SFF0LjSWzz4YhKuI+67K7PYk03PgEdqdQA+1F2zb9pLNTl+dDxmtiAoQqqtfDCMUiHxLxipPM4vblCYvzOVd//1oyTEFlIHXYVMd3Kn9f+Cp3TH7HqpZznFvrrCc0+Xjwo0Qdkyn2dF6HVPvA3F8DHAWvX1SpisSOJzebd6OWIw1vHfBPgwVpiq0Dv5jx5bwA1pOgB87b0TQ3ljtmM21pfM+2gpyyb1J9fInULRBNRm2ymAw0ioSum2bFYH9F0eqgrUeo8+t4d2yHgYZWlStrrP8g6bKecfN3kbDcN00X2Tv4623B/9aYxwL1YjswkION483b2d6WTVEpeywDbDpQog0RaJA5FfAJD4wvo8Vm2yajtlCFUdtv6u82fgqkHbk38LWGE0QN3QvZPiiqhKGVqjXi8WVeOp/My3FShH8jJYIOsIQ8CQIKnN9BPFSicilKlwWEUD6OTiIOy9FXnLHNSQEkB/XmM2l1uCBD5dQfCpeJRQQZg0Rn9lZ3hD6gGo+cuFBpq6aielVmYbLQ6SqFwo43G8dYiUHUSolgXA==';const _IH='a40f055277196d0823c6d6b3b1e3fe3ce63c8d4185fc11155858e3694b263561';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
