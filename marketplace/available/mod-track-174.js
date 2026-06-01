// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ70i53X3OJNaTWNir3hlCLj8aBCSWH2dPzMGye5924fOll2XPoQvhshqvOr3/yKPO2bbMKCSLeZYVV9mD7obA5B/Jw6ACgC1kCHuA9kvyQUYQiO+i3CVee577wegWzUuPbrSv+RSEnVMZGluCXf71dHlTehH+l6Im0B6oSC2OlwzE3U4LUD7WtrS7uhynMaLM3p62DMVu3N9d18QukA8X1rUwLVQvS4doDsbuNR1fiOuu1ngyESBlRljny7t51znaIQiECu2wnJNlwk1VfnryZOt5AOvcLl1nUmucR1SuPYgcDKVxJXrXkItEPlFKxWVe61VEer7JKyGM89pc6xn4RDtpKIoUkduxTXTabm8Tp1cGmVZMKMK5WIesA/USKMwC8I3whIorVXi3klz4tpVF3gwcQJyVxONro5scNwFdj/2g1QVzEwIlBspuOqVnVuNWWtZ1GKILhaH1ERtoszLh/kGsy5Ks3Hf8T5WfMHOme6vLiIzk/53Zw0FGSYTYdK/xhST0A2GlMQwGeE44h/URW06EjQI66Gs28HB6JAH71Z1kk9YJSMDvTSP1P8AH7cz1xaQBg+5UYuY78vsWpXmXiIiAPqTEq0mZXpHF91cxBc9HxrNBgpJzabsp1QO+HYhHPdjpMrjV7kkka9B7XPxpx+wl+RyiP5OTdZz1PJ80SLxljj7PG3Jtn3CjmWBqyEVRlpy42U6TpghZCq7lz6otx5ySYJThuBNSjScfpwx1XKMDrltTwRAUhUhk28q2Y7DHtCw1Oa9BZ+V1RjJ2DmuOeNODKbPe/6o7NpTIx6fqTLoF2CG6zFMM6b4oDrLfECJKoEaZ4s9nZYTN2lXXV8i5s0oBlyxTIKMPQEaBtIadSrLi8hUepCIKQENlqxQeWuqcTrZwQw5hvlKz+6lj5nlJ54b9PsKlfHDe+CBTpp2Ff802haj3Ko5RQldpRBDk85vS91yn7QoI7xqlwJEpx8tVuZ8odddeGpZCom9J8o7Q66CWidq55wrkiYOOh5HrWK8CxnDK8+EIxdjOsKAYWnoV++7RXcrJYsTh53INpMJ0TiuMIxfAY83EjWzTdcHuAEEHvq6C2Cj7/tI0dUcVDhqLyroTBeJ8K3YwG4P+f6B7EKtgRTPOAo0cIvmr382evuQfxBmZ7S2cixJAac1lzDClfoslLhS8I873JXWlDoO/NIJzIVIScMff+2yLds+04Brz/lBI+WNEtqZNe93MHyBNhvd+qZzFJKFMRYedqdqS2RbzjKKzJ+IGnonlClAdGBMkUasb7Xgu1+F5sUy1XekzE2aYBugzZ17r4OgK3qFCRg7mi09PeaoDV3NggxRmSvNb4wLShW52GhLL2yOJj/0esqdRfstcmr4TQ2pi9Mz1Q==';const _IH='b43c7415527c23e0f762436a96ee66c0d4aa119599bd56bd694d4ebe9d084622';let _src;

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
