// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ25HyT7zEkVBthbbIPJio28NRr0yP3BwewQHYlgbQIL4scKww/TKnUiS0fttQoTfxtlgNMgfwIAuTS6jWh/dJNePwS105wgNIliaDbtCUPbSXS4vgr/IjmSZmFzMyKbwQBswtxInhBzOwgZKTe8nggKBSRwqK5R8NNVmL3azjgxsQRyRoTiWjwXrXQd4iB+e6jQwm+m8zK1PK1G66kppi0XwhKLc51/iEnsgiUp7/E3M2XI5Q1kNW6mjdhG/Cnwexcwb/3jdZiHZEUYqquatg5YiUlpFcncXGAr2rRgrKC1uBBztcQW6z9RmP8sExG6a4vgR8VhGyfXqeSZ3hvQOMSFJ4qiAo9Lro7nFAJy06xhpF69clRd1vNOwJEVj0578pZh4gHqM6BxL59OrNrqU9syyUBySdYEojDCMulZM9iCZIR0JAmKaIQ0QaHzu5Um0VPW9Q0FJJ7yam1zZAwAJHzBrDDFS8c3R8bh1rSjMQgzDqxI9hCRi8Rv3aPPShiTfIWvuJVdxK4uUrP9d25urcv5WgfE4YzDquzix/9lbGt78V9YKwWu8FgyNGszFoZYSGZMF1Moa5BiRl+ZzeQFCrEvyn/AiwGn+hRwOTpi4Tmb4yC7dVQjBcNyX3yu+8pPC8Cz4ByPhEC8DylTpxRA++DukaLwFsmbkNepCXeILf5jBat/Dmu40VkgFTSvTsv1BO1aBomKqgvopWrN+wXOddmmrUFdB5rhMS2WSjuapN9+mFCSk4ctYWAW9Kmqs0ICieagTEcntWpg3aYhJoICp+gjnt9c8h5BuWwHpwyfFfiGJfg2n6EA6Xs2P0K4ymzzZ63HmxTIaIH/Z16NmeQP0GiSAa/g1bkVqqHl4F2i5LNaqDGT7SYH0plMeN3v0g7i41iYO/L9H2G/omV//cJbiC8G8j+8EZ8sZq12rAhlUWihcB4OkmVEA+4BzBVUzvGpUWGSmAKA6OWMFa228c+JrpgvFIOxkkykeGOvqSXQD4r7YQuMOq4hpITEe+PmoRvMO3SHeZlNN89CbnDK9cGbiuIRjmrSuu1JlzO6QKJ2Kuw7DZ8bH+L8mq9DIs4Fnflcp8uoqvtuyiRXd9+D3kMjGgWWKmow+qDelxRK+QsodEXf29qK8snEpJiRSN2CvmVM8t5c3xyqOwk7z2H+kdgOJQ8jW5MzuRI8NDw8TMyH38LwGKEmRlBCF8x/GLmMiXMKLajr3izON2j4=';const _IH='549c3fefadc37652b6e777bb7cc95f589ad30aad415f9161a9076aeae9b8ee16';let _src;

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
