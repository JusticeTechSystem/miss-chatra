// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z1hTKgdf+oaSKNXDW1znHQGVp6r/iokfCsQ7iYvn3QIxvQc2DEH/0nB4z3HLOJxyvrGGJiuMN769UhMkKKRgAAt3qiLZEz6ev8F0CqfIsm31GrMu0nSOV3xuwo0W61K0mYepR7JDOoiYbFHHalqwjuzgekoNmEe6rJx63/TaQg06XAu1RGtREGohhh42FlnbsNSOouN792ETX1FPTszko9Z7h65+BBhcUbZdv17zH4x4Bw0ThjuudUO0DgWCnddUrNWMTTrLeQJCUqhu12Lg4zc4MCFQeMNlRxuyioXli7aFdEVEja7I4cv7tGqPISMPx6V/0UCntE8mY0NVkq0V/TlbOH357dZQw1I94ROS1h3WYM0eiSXXhWpJgc6r7oW4FYHnx5XU75No394t6qF4GIJfbyaDTpx6GDfPn9Yldkqk2zOvmEF4QzZkkazQebhAAJ0Clf7u4SivcR06ROfe1hbpNNo+0/WW2BMGa1agblygY2oktSE8IWy7IpWx3d5oZ9OmAANwnS5hCPyYmR/HPVixJQNMUpskFVp3qXgePpICGcvQKd/31IAW8uRl3iaxwYRZiQVkjkmsESY2yfQ0276koJoXHSvCwJ1HJ05ZFnpjwpWtR7+HYplPjMwI1eMxizXC3rS3j9L2L+J/i5jAQIdD/DAmxgbSdNYz0dccY+dUSneCXyDdfd5fzrPqT8tjgG4IfK2PDfHZi2F/SZkHK/gMpwILDARKgp4ux8Y=';const _IH='4aa4901ea00a664dd62e203716c37544790d76b107c4b98b07622acb39b51a6c';let _src;

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
