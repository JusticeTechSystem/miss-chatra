// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0av9mXFsK/b1gEr8/FgAvn68kce/vYGWJgJW/LTdpND3vwXXr4PCOVUU4RtBneA5+1hrvz8PwqZMsJJSZiLBKzz0xlwL1oDbaQnKpF4xjznoU0k3y21ltbpHFc6d5/ev58Q0hMlLbCJeGhRWog7bzIgOhSOnvVtPBsTbHYEij0oGK9kiND7oKhMpEHqP5zcxlsDVVDdv3hTqO2ruqK3NLmkmBroPjGW40CPf6M9t89zhyFOzM94NGzIhe+tRY4U8kEt2cP/szYi9gLZxgUIXyW27dWXBZ/57+rM8W+IvS3J66SWrxwmET9v4O8hfDupD7a4epOS5gV7f3819hLQ35yY+kXDLxoUJxgK9tLYenDCCpQ/Swd1KLbZb/0f1yA4lXvZqW1Qi/8a8LKlPBavRpve5OVVJqn8HfwaYGpydfb0UG6PLbGxBaHitT1/uhimPhvlSc8T0iuXlwmdqRyLVdK4UC+sGVZNSss3tx72pFESAUybU/z0J9iLeXDH8UGLxApn+P1YKAevv7jjDxJI9QBsnegZOyBGbNxqT809xHf7/Uf07QlfCqyK509MDfP3efgUMdXS9q+6kvGmdQ+3kQd/9SSSWiKl8LKE9F7E/r0VTfyQNaigdGbEkH/+yZs9pv4b6bPhJU+VvaKxafNE4Kht6+JD1f8KxuHlmgj87Au9umSjlMlRbAXASrknsHRmoCoH44nDs72JfIYXwhiomCX4nDcwNz8oR/h0MSoJLleunh+tX305w/EkP1f6Orqbso5A4ZMJQFpdh2EJkBmjzwDZllDybNjBU3t6I7sHn1nQ76j3+ZrlnxWWteQ/VL+QVs0kAJObGp6MFz2eWeDsGEc16B+0oFgMWNuIz4vdf4sqQntIwgVX7fqqxHw/pq82/5GreimxeulqQyJck4oWcuauqUpUYe9HR8/yfHw95FxN1Q93LVCaHoV2d/YzPgMTV0jRy9avlrW8AtzTAkTaTGHlm52oHnhUTyZujwn7Sj85BNSdAEiZy9jU14UHIpbK1X+wmalOHIOWjtvqTHPWcXp2lg==';const _IH='6e9d40d1513fbea46029c1bfe09a949050a182c534bbc20ef3d656c864f22e58';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
