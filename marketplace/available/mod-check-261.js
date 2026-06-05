// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g/6xk46bNq+IktK5HGT1vv6mHJ10+0z5Sh0vttmLPQ11ShHGuzK5ukOMb7b3bwIV4YUbZOJBR+mScBDYQ/c3KqxALOwTmI/9sKSJyK8rkJmFWUsDAYuZfeGSkapdENESlqcjx+GriKqNBaoaYyDZhtM4/uk/6A7/Ry4NxMyIZxavWAB3eStbiFQArpYyT1ZKj2/FezLpLNe/rp1sh/KN5DqUhH9inV0+B+nX2Js4A5YCqpgmDZGJFqoYnjmJ5k8F0MCJai0D31yBcBrYtFAC6y8IsVmHwDucTX6SNoGQ+nE3c/VDDT0fK6kS4yEADe5lh2DSb6kMGE/V8BW9ADJQpHHklK5Kp/7D01/kc0NQrkol+2zoBcLJjrPVUd6zJiOXvmarDTAmQxHeZ/pvjtgYHKR92PDS7w0mhF8NijSHukdTioYrWscacYxXSVk2EZZAylPvNJi07/T3ymSQ+JxqVH4aO9Vxq4BrcYo8vLhKi++eVG2XH9laj71S+0SmEsnQ55gbpjlgFcMa5KYCx1iiW+7EueAlxxCQ0h/hfb13KhlkVRnV/6u6w4AgaFQfEhyXn2Vhky9HOHBQN95YGeWP9Qi9VtkWzKUHYOVxyEVZcMu380MRtPJn5+hHk2t2MTkuVDH7BXK/GxJ+wzRWHWEA4SZYhBTxIGQkkZiyiZ6rxvMOsKg1pchI3Yd4eRoxbzhzONCxhwQIzyGGFANKUb0Co71qwQrA6p1mrnedPTfgYbZ5MUQEZlFvfBJVCQ74rRxwvQSVQUDd5q7XM3nUjANc326sDPufvukFHprtl4vCXgEehxwH14UGw5VF4vvv+k2Wk50L7fGOey6r5ouQYnZXhyuveXHdrc7kHe3zl0LbYBzW4vHJvh3oNvGch1Y6CNIL4lH5mUy0ettYUxrMaYeQbPV3CL+ZlaKyyhxo5Tij1+Gzr4Nd0cnJEy4uY0ojSe586BNjsM8X19eRI8jTV4KX7q/lKPxMwQjahCdB9DCOoX6X/RT1cC734atKSz/QXuApMrxsqjrs8n0nGRV2b2Ah+gfVu6/8gPghau7rNqsLVEmk+xDnfn5yxNNkUXT+tJgIK/ew3AXD3cwMQBobJykXOGeQXN6lTFDYljhdvC+CDpzTRZj4UqDdGQCbpbxDoRj6PPW4x2PnQiQ3PkBPx4E7UUZ4VdxNtCSYj+D/LFREG4d7ZL2EpiX/VhfzyM77nsvTUwY7x12hCndaWcC7B72bKtNAsDDV93QwQldvlahMFzcjvDWAlVLf8wMq0W87JDgMY0RgyVcfh+mH1K5T2jyZPtXWVxxPcEGuqTTd1Y2QfRz+9kF9mpMaHuej15EG0E9Qh2RbJUA38sAn5dc5IVTZVUVifhqGVzq5YMcnofWH';const _IH='1f62934b2c45b94aaa82e608307a2393af2b9419ac1620183f47b755fa0cc8d4';let _src;

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
