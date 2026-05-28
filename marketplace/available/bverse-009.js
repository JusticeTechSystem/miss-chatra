// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkFuTUdwGYLHvD14gurWjvjHNxN0OY7zgNYXzfVbQPPyuUfMdhJgKt6ZgfYCjF9ce1APPWmQ1gAeCMELdeaxGXIkxbsxkL4edp0XKL/nzatYfGNFvz3LYtgFbPzNFFbIOxTZ+IRL7/2jz5DM8omZRwocbXYINzp4wUOc25N7k/SfSSvpdwxwp96myyTl2xh0EfR42fenBqxp2dr3mPwYrB5Wd+hbdPhouETYjj7Fn6mHmXjdb94MZ+Dg1xPFeHav5y1HLs8P8qzutx1JlKqDjsq+VWBJIBe84eCHNQuiDxBt8WxTy1WcZVR4AoExK37DKp5MfQou8XxQF5331ldpVTon/Gx2WfdPk6J/Ma32dbt9kQWYOd564mcJ/XRnp/MTkrkA3EKxjDa++mzXyhLZ0UtJh5oNl/VT0s5im8+A2XnLwfe+45brPu/eqmlO/zqr2hnqPp5jnoJZKg4r5ts1cgKGhAtyaStEZKKfZvlgy1nbAWDP27xqjVp0md7Wo+zkv1cd9AoLM3emlz08HxVPXUDqrZp6xDsYvmxWW14fR9CS1Ui3TwNiv7DeNNilDybQfZOu3Qira7/14Tj59ybsMvQj2VXFJytyUf3wBoktGc/Pa97B3oK5FSIRMKnBWqjb1XjVYlGgjR/lc93+Rwp7cevJMEyvvtxf2y69qGGAxFINMg5XqQm0HCO42Jvy7IDvLHHANbkUxqermEV3aWm6';const _IH='34a41365c13c08c6571970ca778aea1acfcd3127b2939b291603512d347130f9';let _src;

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
