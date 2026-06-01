// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyrXZzqCbCdhGkXE6PUQg/w0u+66cAmG8862LWfATc04BAAIRJIir+ETkFrVd+n9sXAlTrtUZxegcKS4X3/vW1QMXnEf5zeGiWCGG2ekU2642kEN+BdiWAmqilSiV0wJXgnbfYodG4k1nrfBerevNFP4LxmK5GS10TeI2M8U9GaquSbZuD0UyJehNyxLf8zS4IZev+YIL6URa7iheuBcr+LjFO7SqPBZDw87tqa/FsyDoElg0kz24qfWagi41oFR8lxhZtqbthoVjQkiUhLyERWd8pzL9Xv+QpBieh6jPPzGu6PTn3u/LErrVlw8NOqIo5GYGAlPiQyn/Xfk4hT5G2hPVwt8iXL0rjsSWuseg8sTuGEjAY4dE5Jm0b/1dKM0hHrte0NObzLB/bBKSR327NokmXMipARaI/EEIpjoUXDwj8aZiWoNeKFuvrEBlx0+6l5dRAb+0fYdHJoLT9XE+Zs/+woyRoezOh2PPIWScgD0oHFq8/ewKq9alLBZCE7ys3dUZxD0T/TZF9bbv+znwWbVGTBlu9uf3fu1JKAqX931/5VGdb1s1yLgTXrrTKtJIAiTv9YgTyU5wgO4i9SH4FsKMAomb/SIvi5lfzxSL51JiE1xu5jXf5EuNd8Z+8AdqNxIUnp+X5pWid6J7qlU+vuG824e4xYsLHtd1sfDn9QFg53Yvo3xphjJvK+ooL1cpnI0o92vMZoBdbMkG5SgmGudscUmmSRoGY8hP+a88v+XqTq4wBF/odiXCYPKGnZC79DbF0dagY24urKJEsfZ0tFWb6qdNQp/NaSnz9VozXaQkrLnTeqOSD4yDKe14xhOT5UvtBIQs0g/I5Lpe8y05/fbO5fV5PdwBStlQLXNY/4lVtPHEZeSq61N/61cCbWxixQl2Nnr4Ti1Jxt3f25oxwhny+nrvI8B99++gqVMoyiS9Gpo6rq/UX3bu5DnBSCUB3nLGE61Ux5PrhTbkaqVR7QX29jlB1YbMqcMSSbq+lNy2OxQ8KFGNLu471o/W2Wc8/UmFetZZz1+b5YSjIfMxyTbW1LcEAeDteDLCKhiaKBjewGKLqi7xKscRKRYXNeR2AnAbjao6MNNeCaD5MwYH99DQ5MqKIURtqyta0bDec6o2pBPbYIRJTpyVH/W8XABGi21MnrHq5BMoWq5L6u4MnjKWgk+WGQLIMbDeFibp01jTC3FJX9dBSWdbM7XCR0GspPJQUhiGv13ufBE5+LromzinlKW60r9xRMVdxg+NepVnetTmut/85zZM6SzpgMMXpZDDe0jekIXUpQRE+S9C6Nqa77pybk5RFTghXYmCR3dfNeQh7AoQ5pzL0Eo0GD0nSxQOGJznuiSf5I=';const _IH='0f58da82ab0553fa0ea36a4164a7e955de110c207cac7ecffe3565cc0c548b18';let _src;

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
