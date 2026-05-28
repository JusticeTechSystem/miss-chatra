// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4nRqViZX36AD8TLMLr5foPyVXKGvEanSh9AF9v3iWVS/+UR5BdhkHlEePFsFaf4i7X9kWrPdKyj9QdQAR1cSrl9xhmSCfWVSbpfyDk3Dt9DCBNbT9NDrt0lxh27yFQozqKyKqBD45zu1JkNItB/STU3umerW2hRHQ9+7Zt5Th6xALhmTKbAXvuEOfErTcLlcNyuIv+QnKBIEUQ2T7G9fMGQMfnG12EpnXIKB7Lhxkawh3ytUvAK3u8daEEK/4YNC9uqmkCZ0JH0QvuTa7/R3Q4tHDV54JNWwMfr5Ub5P64hvYF2mgblboA8xRKu9m3xUVOiliuWp7fE5T2VgQPRzmh2B3IJPge+fqlFgKxbYCk8i8/Yp3wp6ZZLL+Fw/iSsmP9/Kmmc595G2AwhNtqAkeXBMwqJQGIKyqPjZVlQrXSTCh2o4GtMUzZKUIPLFXT42TmqZixldh602uSsEWIG7leuXzVvWtC1EkKKrHmneqOjieBag+3kMEONK8btw2xqO19L8wFYvgsOKuDZRxYPrlVnvqtp5KTpHqoqDGrkcQeB6b6reLtGeYnl+r02LrDL6Jz0Vylq73Js+lW24iFvLyYmIS0Pz6Ced/9OTmqvm7TjW31P+9RzwnkXb266oQVBmTpSwtjn3RWdJk0/LJbTzCeViUG+LfJDrpB7wbpAAKCMmAxXbwGKkxkGrXKdGpV92k1z8uGYJwW71ar4iTxMtS2ZF4IXZk38//++g2R8QjS6Fem60FIRFjPz73H5ypqu9iQAkjimuBcWyW707QSSfGz/XqQAYsyJhZzrLlBenaO1et5Ny3SivgQpwXZoF70UML6u1vO1Hqx6HaXluGiYscWpkIFELHICeIP+bzCDAWsK6RSd1Kp/ssOx/mUK7xuxIhJMf0/cA9yHwqRHv+c9hHX/H+yoKooNqv1lX+vgViA1UsEb/yeU4zQ==';const _IH='c4caca740a0ae928cd3eaa1ee212dbe961eebd49c4a8c214b326e68a847fe6e9';let _src;

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
