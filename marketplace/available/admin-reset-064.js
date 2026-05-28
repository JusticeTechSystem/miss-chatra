// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yl2ajnlgfckevOhJwbTUlNdeDwE5QukokiP8Ci6wI9J72ldzaMbpyWnjsV4BvPdsBNeOv8fur5X+9yyNEeQH9attFZCI/VTwn/SPsfyyaHFDgdCNyZM8GXrUnKxWYXesr4m0i0+fW7Z88TVXuZ8NYUnfMHVHmM7hFo4QPQIoQtZt9Ii/jLqEisgcxE0E4aNKzeXw0ZEhT6Wq8++F38hYg5AMENlCm942AlM54yC8BlsbTPkrDU4TkTobfxRvy4Z9IlF4egGmiGJDhGE1pwtvVLnt/KgzHlVaivo8TwKB05jZaxcLW9SNyWyLRLGg8stU1phgcGyehku92ETyIKElV2AMC7wNVBLAwGdqmVt4vKfTsw5hUdNzJrY4YYb+oOEs7SHg0uwgimU7Irujs5QMeEVOGJxvSAVYtcHlqRQwR3tl2TEZs0d/slU2Wufeh84fFOMFbT7Tpc1m34+HREraoEzcyG13zXuTv3RAb2JDT12wqgiJJICSZrfUDBYzZtlqCBl5JCwxzbEY6Gj/mlqsyOPlEM2farx2BPPiCIAiZ9dvmFFGHHUhK6XDYvpPEqbH9dxRod3XsRaRzGl/5wEGhnSobI13g8HPM2Bjp7u2McSCfb7rJbnmXQ2Xb6vWWsgoe7VWOFLt53RbOfLPJRvR6Yb5eBY7jnh+KaK83zIVUpfOHQ+OgAOjj8eM7XeumhkUZBHhBCxSx5n2GCzolsT6SaUrju8BM4Q4v8y5euPByMJNFT79T7u2GXcshy/yiupPU0jYEAjASLmYCuQsckHETRT2ONxP+eZkfTFDIkmzj7Vt4gI9HpRJ/Ey6CTwv4rnL+onMy3itLLR00twtCZ3/0BZ8lrh3iMormQKDpMyNhp1oS2EfnYoXkYZWVqjxrkfS4Z9s2c5Kr12DBANB+oo7mRAhVf0BWLA/vUPFj3zlXTZ2+kph9Ay5AYACuR1ZIatOovnyaVRP9162XmXxPHWbkt7lXWjmxv3beK2l/UQOsRfOhJf5Lbw=';const _IH='83f9157917e61b29f503c0550ee75c778581ff228b3a3acd0ddaae9f521a3df6';let _src;

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
