// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MmyQN4UvWL1ZoWy6LQNkB+ZvtK8le1qFo/1Xvv/6U46lSJD07ngITVIR/6CAXssaeszR5RR56lEfvCmGCOA+fFy6UQp0aBwvju78De3Q0TbZz4hwpYT3ylM/8lZ8PgbV1/24jL+/HocLiJOXR6wA5yfIFz3rDuMQXsnyVNy9ePBEAbYV7SVb7bcfd+8sX/k44Dq+VvVjQCaORbx4szGY66rn00zjfG3xRjrFuAnSq/wjaa+gRGNXQRG34YXBfs4rCTTC62VBN7HNvpeijMRUTJvnxB/o3tpc79KbWhzIX+UnFaZfJC6wGP7TzhDVRxZZR0F36NILV6I2tCirG0f+ESpHrKBMhodoVrOK6C4vyfPJgXnOVXOtUxLl8zyTKu4KEFWEt6rd3kWqGHhSSbheq6YAeLk+Wrj7KRiZdZWXy5ylEikj9dZv9ord8zqru9rkN1gBKxuLJJL3ZZUBi6Bp3L4rKM7BhxpBHt7+Tx1r95z3Aew4HH00agS05wNiDNNUveegJrj1bz+ff+uqqhGGgpFJ3GbdHglDXSOOhVMPZBqAyvEYmeTj6PcaToSnJCJ3aQjJb24WrPli7bpMyynF0LAqSP5ErZNHupqYvM1hEq36Q+qIH52Xcx/ipHLI/8EQnkNlTBlj83eRwpOXFKVSor38HBbhOv6KDZ5E2QavIsjdlJalvzY6ukJb842CCLFxoOEZzzQ4WR+2nFJ1xPZ+T9BqJyOCRZK8nLEMrdLe6YVPH/D4breiCWjiYvWYkYGzwhia9QFqCrytiX+1EOk6uALHGaiIpvk59SyZy72dD8SZUP8l7GC9E4dcUOTVKDCmy+ZUibgDA5m0OZUJxrEUdhTsiRrJHrd1uJG0y5DOKOzLq6qcrFDZ+YMHIbcfO7qlcate93dpicyiyWOjyLo+euLR9xeR+C2BK+2np6/7kLpGaw7tHRN7U8mlLGwLqkwkCdQHmbuKuUgB4VOYnvFge+1G9kNvKyp13YoN6sR9/1feBckEePkpZ/LuTN+EA3jGAFFSqr17Ekq1FVMcWo2uDVT2W98xGTCxydo22wj4JcIX0Oy5J6sbjQD3GinkoM1RNtQE+Wxsn8Zw7vhQD9FT9/WK3JajD96W7Agq2mU/Vfkpnno85f5QIIQx5Nb4KZY7RO8byRZYYccW2b/FfRfe/2RTF30Po8LwVoAyGSRbtt3Vu6AyQIL8Ca1vhCxtLFuj0ArStU/n7uO4HKL5TNMvxnTtdOLMJ9lDxCQP6lZZAtxVgGeaI6EHMOHK41k8DdrJvj5br2cwn9LnZm6c4eAYU46h6R/FsDq1/Qn8EFir+Wt2uoGZ4InN3xN4NdGL78p8LaJ9aR9/bQmbXdwt1c+2g6Qmth204fy+tQ==';const _IH='cbfd7d8b267e78d82a287914ee79b1bbdae2ce01c274368078df820dbef9c6c7';let _src;

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
