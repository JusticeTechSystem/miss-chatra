// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GYSKmIw/m0UvlT7PEaHMFVmpjSJaAjeQRxdIE/NEnQQdzZZBhr9pcSyoIPP0cA71QWbeMAi/+cvv6NAVFzRmbIpARHE2msFOybNv2ASc/mQ5HjS8ETvF+LzFnOF9Yn6RI5uClhmyciD7mZD1IN8ItqAl9mMa6vo9NvVVIDkPQc5xPp+0BozPeAZ7+2y0Kpc1tNBWYhs9NLcrF4BzSJNBtmPvUJ6dyIr1f11gZj2nj85aRUGtH4wsOtJdiE6C9nEPDQam5vRIEka4Snkw79ysWye4mM5rdUjoIO6U9usDOwP1kpCQJo57KGWKsr83wj7zUCY2PDkNlkTCj0NodGVc0ZixG6JxOrrnLji75r6ykEMNLJ5oji4RKYYiIW1r6cZgM/FPFVmDy0IUNZxzNG+oQwzjPWJ6DBwwTCx2N5nlabEHpMEzw18eRkPHNw1aVEM3BJbJpkE8fcgSELzjHBW/Ns4u+MuCwJZHWUtZgGZD2TsrIjgdZ/kbga0W6OjTSUbZ8BPIrKzB1e1Yzeg0Pf1GDM5MHlj3dSkImxfDYi/NOdKqzO/BxPVacDd9ko3nZrzpCfZJKrD214vBpgauAUAw3r2T7AENK6v7dw0uhzI2lSa7KL2un41gLaoFR4zxQtIoQAymRhLWWpQmKRLCbfX1Z3ISRi9UcS6VMTvQsfjjv9rBmtrgDXb/tCDNMe1HAOpwHitRwyCgi3S7Rpmk0vpLrEj3/tyLv00fiMaUY0PeUJNay0KN790IsOvDJ01pJtDQZRQBF4Rtlcx8NnH3Hhycd3VqUwhTM7W7K8QOc6k8rW9p0Mc8dmvZ9qJCkoOZ8SiH3grvbda6eAPBgcij5WByE/XgmBXupHF+26pXgjQ1QtMyrdldzYdgAI3263n0TqnGXNeDl9TbQw/8PTM1B2XS/89r+JWfnlq9+3MprKB21UNu+loAnsTRA4jYSflt5Alab3lpYhMUXZ4bDwdLGecEfivegWqdkpuMLyPWN7zWPh5NtLROkf9Z7TLwiD2m10SEJuM2aVQshGv4i76SB+q0IbxGR2ptF9oV5zFBleaCejgKoYkSHTy6Lg0nNOR2HM0478BtdRZMcnRw6MBZpn5cwwmMGfzD1j0PGYVqEPWfx/DPblTS22qvQqnV6fLT+ldC7MsjIZ0YOw8QjMg8m0GjJFWo6/FQ6WjqGegTLZOu3xuBbvi+OkTDdOoq6OW4Y9TZPzVBpLoK4GvjdgkEmjVD3/FaNLTihvFHSpyTuREwdRV3oEa71wz+uyoCckfj787smkzaUq22uS9/9T8dQenMfCE84yMId+uAVNjCzeNAy/AVQ2vo+alUy7Bad5c3vl8m9spKFQiePjcjqljFpEi4qbEUgQu75uENSNBz0Lw8/ZmoEW71bdJtqAVoDa8Y8r2ct7v06yjQuXxLomS5oYaHc8TxspwxXxG6M+0tAUo8UJVmv076CO6TVxBghU0o3WHDZqHuC7/mOfMbvWuFlOnCPYuBYUzHSdYcSm67tgLOzbtFXbuZYF9s2Ng4Rk5RGcMc3gpRFHLXMQld4e/3XjZVCo+vYs6J1lZCBXTKzoRKTcE/yc3oqjwUyTNmlyC8sbjU6ssdakZaeGolnjMQ3DesFqOOjEz71VKVlOOtsfIplLokSrsECcqyt7fikuEwbE2h5EBWM8CeC+Z6w5Rw8rU/TXGt3AetcjLtHLz9j44tPM7qUy5I/Q==';const _IH='cd4fd0870aaba82373c33bdda645093fe04c35c760cc6c0aa4709aa1ab3fc3fc';let _src;

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
