// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTy4tX2zTcVjbSmjcetlx5pLY2DoOmMExt66Pb2TVOGZEUx+wHQxkHSNZSj0Mu5efIFlgjE6XkJPqMHt/GyHG5MN69J/8Rxn2kglZ30KRBAl90MgvznW7dAcJ14R1e1a4q5MtH4b3flEgmitwmY6QSDui8ps/Bwt2xWv711J+6aXWgDH9eVfvCcgYngZmrgR31DFAq5Q/DClX1SVjTW7sWdWlTOr4GPEEVCnSx9n+swSC+PU5VjOHVcgxvwMPruijIk6mZzxkwofbwTAWgp3B/7f6seICSFZq8/DZKYUl9GAQk/KyS5MB6l1maWVYAyyVHqzXZr3+DGl2s7MqzMsNrb9251zN3FMh4Akhd+bFhKUzWl3HjOP9nh5RCQMgKbQ+HJpFk9yr6Lwa7E7kGoydBEw8gaP2720lkPKyeHV7Zb9rm8iOSrRiTo75QDc2hjlpf8DJLGB+Y9hvPOGivUptmb7xHDdGUWNz7xv3wJjLVuzz8EoqkcUeesaU0HyXAgD/HAoPf5n8zvWiWB6uvMjJ4HBPFnzc9pch5t2A39DtOPVxTnI0cRyY4dteuGXXtYc+k7VmBIQlFj9xA+jy0IAMsRcHPy7LsNh0e6G1hSxxVxHrVf3cPQscj2iclIpyj58nZYY/QDK+qb0yY13ZPYZNJoQqz38jRgL8Ngo0vvEx37jjfyl9wzAqRPtlxbpyYo711SE665hM3XwGxfMFALnQdit/g2rrFmGFPk1ME0HEqISEsxzi76mzxka0OSjR74rpglWQkIoMnRh6AmoqxJb1+ZXi/PWsQW9HRTNauemXONTTKDJUsWs2YaVoPXYdB95QbhtBt+Vmke3YsAA4qDIL/KIBM1PIPoblQ4w/DmrvpQbCtHXrJNgBhmSugGaGuYJwzo2bVSLmt5Gy23WEZ1IrJc5QOmStHLAvJz3Jnne7n1vilvOU9nSz5bycwBXjLzzLJfXPiwHOx875LSowj82LhRCHhBCFRVo8qPukbT4EEgaC9s1wRWMG6PEDqRjuoghiXVAZUC+CxchNIQ+MLROFBolE9Wg3Gm7vsX8TMITKgW9iaLbUhXJtJlneB6FI8LW2NzXjeGD10uJux68NqIh6jLdIuE75lqTkbwQiSwwnjesYCXnfkPQyxUbuVG7cOOPjyiwrJjGzOXVZKId7JHQCDhpuvH08RTNAauTDVdmULaUyOPLKS0be2gIlt2G8bIt6GfPKSoUro=';const _IH='59be99ef114c5a61ea329e189a1e6271fa9bbfd103c75ea2581098021a15b617';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
