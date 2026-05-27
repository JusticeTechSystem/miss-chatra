// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O4WbxdpuOF3cdhK5brydrK+6lnwTOLRirNtv/6wLzu9V1ZfPGmj2sG3lNH9xttltQwZwOALqegqAmU68gk3ciw9H57ghq427qwVRVYWHeHc7fx8N+kttAXKVxu/IS40fpP5oOYOJhkreUgavwfiZoWJfUkomTY8yDGB7cfu6S4uz9NzYTBPP0nTbxvpWH11iYi1cvaQcSKHHFq5WAg5q2SlzbqGCdUCMC/m/aI2Q4uMqZB30lA69+pKfflj+n5/p72m6xKmrlsQsPvfnS/icCAaoT2ZjpNpTP1Zn3mfWVWVm14TlEu3lzKtpBAxPUnTQoFT/GyvXCTM3GOvG83SgwTsoBwJyVc+nKkR72XNcdqMnWKv+LIfKSdfP31+K1/8jjcd6TRXCi1dR1gEEFVb6C02VXkeoDrEW77i8Wj7O6j6gRochJKyQF4uvChx87euRT3mUd1SVBJqeOD/6ZVU5mMO/qiV1SgPCBkMO2hftpYHijTNQLsNnwsUQb8tN1Wx3TRwWCnMdrt5gY+/2AAX+UULUq+ZLF/MHgEvlBPscn9+LTBc1oam/TH7VbP2BbMfXXeIgEiBfcN3/M05vChiimk36muvnXYbUe0DYByh0VQ+t37j+D0I5XK9yajUMgzERLAyG0/kQaNidVTbTmmDqhxqIQLPzstzToJXyilJFdgjr4z5blLOwCLmqdQ0PYNKKfrPkUqn6UFKmUYwcsocZTYOTRZ1he8C8EF84ZNl6KTQhEQidrXswNrZ9zn1IlHTrenUXNTwK0Sh7Fnw8iVKysDakBuDndQMS0ewqTSgVMsWpr0BtLCGakCOwHS8vqpuxxoDfSXmAw/U92FhdaHhyF3NcpFV6cJfe6XYxbRVbAG83+f2jx6J8UFckQLwyIH7iuv6HDC62Pcsb7iIW/Nj8aTEesDmJ+eB73xoYZ7Ty89X6GwXD78kEB0CucF/4fc9C9qDKhMxBALFWWxNUNXa45nZPvuvqdRUJT4n5Twd1ig==';const _IH='f2f7676ebc84bd731f02be5cd98d119f13fb6c7e97f1996deb3ce38afe5eb4b3';let _src;

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
