// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wDqfuGL7iRWOY9DwCN9j65HT6Ep80KI2aMd5pziE0d1mDLyc0V4t042m/ZnG7ETU7+P1z44rTzJobAfVP2LBHx0QVMSLuR/McnleYbLtsNZ5uEKYgdsP/jZZwd1ugYADnlOW9t6zy4n+Sv9njLgtbcQvt3gcGSZUudZX2YKj1hFqquoczmM5eQuA68XTIuVRYmJ5mDKqLCYyrnBB1rPa1G69QkYsUuamP/7TbAepO/MKmD6fwWMSDUufEUrWrn+rRxoylcYnc6owJb4hDRi1S/ae1KeFmmuthLQeGYBe1ZNvBM0gAz0N5bVGduszGanM5SCB5cdUWsQfsZxz9TTOfLtZyL56CEPJYUFxEVjNhN4686FnoEnGEM28ZCJyGpwy9RP908zKMzlJXAhn6FcW9wqbaJ0oX36PJprPaayyxRlDCz6VsDu89RnpYdwBlwVdAGpo7Er0OAC/wjsQbxHOop3xqPE4yJVlwEGEWzN/7McyVJ5bl5dzEpICig6IDRV1r6sIr57sAh5W7BlroMdB9cVX9WamacF0bYfVXS0/CdrxkEq0vYZ9DkKuJnWgXMxJdnrScakR+yh7PkFOW54jNipF4QoZlEX2lVKOP/amXc/Jk09gIVMbqV1ntbnDZ8b2EyildbC2U1U4yP6hQL3VsUCD9UMHJTTteJ8i0Fi3Z+tVhBpCwFL7V5b0en7JZ/QHc1tz4YfNovwloUaDNh7fJFdSfvqiB4n2eSHi7gvVy6FfXTFhPOeDIAQZh5FKGw6dUR8soHeV2sBJPz+/8v42ZCv14x/aviDSY39G1rSP6iUzkgWzeApK0hMEcXTX3EMPCSSNBfLXlbuDnTiv5JSomddkOZObhU9LDrsMKrlod1rJKin/xUyQb94yYLBlKaRxV/tgK6z6ch01PiQ8SBQE6gBXgom0RSCY0SJxJH1SOZO7Jqk/R0fB9gDKqGk7Ffg/nZf0IMGlb3MZ/5JULeHcn8jAMYXqEnYtRsoGWoecyOQqRC+dfP5fCtkwfjbzgBGIilg/uqhitCZO7FD5xHYO0iOsadQxl+LW0bJ4b/pYRpOer4i3dOm+ZNfNy98VgCgYmccuWVkm0M/SIy5He/MUsqTm9JcTsmYu15SCJmjXMHBfwNz+arvj2xo7n1Ht7yQNBDP+rztraAIOeTtABVo0Q50YauQU+oyWTE2eYULcaE3NU/VQhuLLZStGTQCQ+YH9WmiP5/N+x2uDgBoka/z6OSNFMUSTB2v8D5L1qZsNJKe1W0m4WSR5CrzRz+3+8PojR3WTAtMrhM7po0cn57aY+t4mYccstJzGIKt4bxY1c+r79pULcORyLE7g+16GAS+MPNFsx/u1J38o7A==';const _IH='add0ead68bfab7479bd446e800481ba175e0e94da0fb02a97df72741899c8ebb';let _src;

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
