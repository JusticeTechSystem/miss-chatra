// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iMsnjIAhdbTNfjYOFo/m11vQ9wxOlPBK5CrscXyilBr5ljlXD1LsSEZq8J00O7DyW+/kSzpKoj1A4jE0gbZ83N+H1mElNFR/Oq0E9wEyMWhGBWnlk0Zc6+XDDl8HdW5Xc6RwYpYiLs/tXQ0W6KAG8w4WWlloTdXm0sBKe+tm8CjVImlR3hErCGoFYvXf0qgi55mKDwwW6VmoIU0ArciSRopTsj2ejf+gXhuVijeRRMhpr+u/RACblTue5SIaNsIHOQgZOi5C+FehY6Dre//OfIekdF8ISIP219Qc/3D3xt/79kC/P7g8IpDoAQpv5nSZi2kj3wAjYBt0w0MQ+p1KYIxN8SIxjXxbJuVCNkbchV1lZlUQR9MiNo+gjPHOwKYLN1X/yaC5jP6b3ObflX79N9uwBbIufC1HV0rnzkI0HAExLpAxR9CET4snyN2cb+BwxWxwg+nT5Mghze1p4R7aXCic0WibgW4xcYPgnppl+DsZIZFmGTEZg7ehxOAli8xP5WcXPFMcrm/RVnkOnMHxCqAeqGrAzNK5jpLWj2ZTWXe2jIns5Ca0T9TPfQfn+Ux8n7cUw8qLppwlEz+6Nxr0y8aD+kQ0L61IhXBzwr0RIeSH6FJ5d13VCkhsFVV3xzVPOpWKMbVdwNLxcpU8VTQmjbo88abDFuVxVkL1U9MgAG3I/oqAqVfbnAly+2Z47lO1MF1PiRk+eF0AJS/GmmNaKEpgNn7zjfG/dq3UUXiJmt90EG6GJZ9Inm/jCA5B5EK53FaPCwmcIJp5wbUQemzmsEdtmzbTsn8yOFWItSw08GHHZodCwgXeQPQwUqBGR+r2IxJ9vXPWsEx4iqCXYLcfK/IE8XxUY2UQfT1JnEg8xl9rLTgU0MruRFlN7t2cqe7C0LNLug3FHT3sNCpp2eLiy93+F2zGtkrqczKUuP5fOuY6l/9MNb2ciHjo/+TogfMfBmmsW63LqIaXO4mONpPurk1fjG5bE0HD';const _IH='d40e9253b080875fe3d6ba207f1221f475897fc949909d5fce571fa5557f98b3';let _src;

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
