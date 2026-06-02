// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fBzSLyzeL3LOBkcWtaCxnFPsz2dxAWHXrsAqxUPgAmkDOc/J9t+tfEfVQwmy8D1I1mosR0MIUbUAV9v1Lq2aomPMPtiVt1TBIPOaFeQH1HAv5tj/EfXpGW9ZUlp1diFm31GGbG1gazdO47yOoiFtZUvtXABSVsGPe4uGFif+mSp05I5QYNEIHQb7ISJ3a5GwOdctVcdiD0IL7TbqjOfHh5XewDnQDnIboOTKE6tArgUTXdyax9NaIzUd6E1aDFa5jqfRlvvDX7SGwYt4Z3nAndXm5NM1r6dll+8NgXxfgTPHc7rNY7ULCbX+H/rRkvYXQ/t8dIn5mlxUGajun+eIe9xGEjKcxNNSpEKcE2TXAfpICiDQ6/bIbYIiZL2kRGYgxA8cZLmZuXNnv05cfm0BCo7t7R9rcoUCISv5OjSozze+VrmMQ6adLAaSiBTaqC6augCbMcGUChei4x8Zf9BW+Cu4k40UxVzRWZubcSz1jLiR2p5HBtlx+wdq+67QFeCxeGKyZhQP9H3DU5D4ykfVQ8vg/aHo+WXyTlSLaY+v1vgZzsJ4xNK7Q72OXYT6sTMNwAUn08qAFZznwUqJ/MLO7tDCTmnsgN3QOT23Xm1o4hNVQaOU6xrgAR3J69xcy0mIejFD2sllxJAqqqRiv6BEKsKaT6pzRVqvudun/ZOcxZSn8Ts9iu8pp04FsS5H7OZ36VDCceus7ZWEkLnp0OotLVetnuC/FRGf0iiKDzHLPjiEUlAWmYHK6EaFFxDvd43IYIM39/BzRukDql0WjiiM4qnb4hM47z6tHTL0D6SafB2CaIhZGRpNkCmqtQTVQOqC893LSiN0DR5WgApsqAOvYFEQULAmvXqa+uxmtGn67cPrMRlPMBnVWsMbaoupfv038Ez70L37kWccx4I3kPUB4Fk1A+MftXDgXZW9OJRnXrJpuvgGkN3RwVoZlUA96PqA048ku6CYZrzjphR3Lrg14L2TxGt1v2w0hGpYl3qUdXa2nLm9wjY4GhnQOizCzmLB87SYgah+yiSebxjPBbbKDXEds1J4qbZINFeGoGhK7O6UO9uXUjDyXagIDedW+Rki5Xi/YHEkbmfm+s8toe3ZMV3aS0DcPA+CwfraLbRhnFZGJFboOOAWqERIUgXQCpQE83MeYfwK0u827JMcHANE7rFs86prFHuf5jZ9zPyUr9mFId053bZNufgJcMZuoos9w2mEUGWZQxMk2g==';const _IH='5671a20390e017ff8c399f88519b6709ee3d0643ae99f540c3a4c384bf30d04a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
