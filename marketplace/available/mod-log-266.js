// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lcr3mTgSeD1t0D3AQ7EV5JuLyWIUN3ogM979YyuNEyO4ls+0grel/P0SPpStp7KAOGNClHh2RXT3ylJ7FoPrTvNEPKG+rXAsRJLRQneu1oZFl+JK04WV7JuUlb2XlNSG5obGU8FSLFZ1XCYBaqPd6j/dhCm4oYPNgu1/AIJ61iiisL6/PEvZQlMDiaE4SejfQBiBp3H6+J7NcZV4ETzazd/mdtRik0rJujTAsq6NB5JimhlebVveGYvZ/tzHM4bUWC1L6ju79IZnvxYz+vvbvx9Nq/EhVelLj7naDXVRT2PHjcFKmnkWwEJZNBX1P6nxsrxddeLk+IGhdgT8sBLVi1Y9IwGPImM9bWAypIKAxomrka7v8AVxaYloBQT+CVKTmpLhjwld7Fqom4Ftlwpr3GfAVZjE6p96/scDQqI55dli2ub1HsB/CzaQC76DYcgs8pUvSz8PQW1mLh4P9ZPFleOEfb4UwvOu5r3LLFzTGFd7G6CP61mieFap6haF71YoDRMBxoUN1kzT77Ssg2iU3sM4e+73PnHFuOBCtJX+0vv8BbzcbKis8jw/OPLwXRcMwP4P54PX7lXeVMKs6ZaJxHgWDfcOOB/t1VrWNtrY/YTdqstCDw90Z1FAu/ysfnFZc5Scjq9u1yYZo/zmpsvVe1YfCDijWtpEKIVN7jWvhz1hUnoaNfuA0fJKLeAsgCBBWRWvYtu+xnQ00MgvbPo9D93H4GEDkiF8Hj91PxHgoBFvfZuNARoKpy4DI/9JB4lhwt+QlTGF/T+HxZjmauhqSF8AbuKE/kxrodEX+Kjun6GRSuICGN9xdks3WnvFFJEtEvdbnUG8gsydUwc58kc+UUvZsgTYNf6VjPkTwlspeEvmWOOxXzp9KKpk4rtfjhojdjDqhk5GRyFGcbubAChURQz5OLJ1Gxgtg4yc2AvuQ6hPNSw81uZ9PpiD0HcTFHhCpSpsVXNT9BumRLBILq8Rn7oKHS3b36/dgRKdrua1bOxzSp3uD13rzipoCixT6gtI3x39bWlzEx+xSTn0kJqMxdVMRivV9W2riv7u/LKomWWrg1VU2aDPz99SnpiRs2VauUuneBkXXtaG267u8ZrKZZR+U8ta4tgsxKcp21cujz499GjdEKWOYVLp+mCMlXgdD16aUVN1EzZcQPiVXbIdrRW22/DqSu51qUbP7Jy82viO1bKDqPbm27yBVeBTLwX1t+hciGuR3MtF3kVjVfsaWGkbLy9w6aG11gBE6FLulBO4vB1wi5tyO9sQXOgVsP8hzclZH9uCvJvhP9rwg25Nn4zHQ5Wwv/R6SImTggasJLIKgN2Y8YTUqBu4McDj6YHxFs02WrNuWkGh6w==';const _IH='2458052a958a38b017024d74773937a831760f431134b5f901a74138d44c999e';let _src;

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
