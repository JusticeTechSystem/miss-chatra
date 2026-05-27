// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X33iz6TGdclpxk8VPtRAAmTpJItVIupkE1LwdHPPdgt/q8v9pbKyYQNhlS1b1dzpx37EFjPOS+qdaXBk3+m6DLhNyRl0wziHRaV59pRg38HcCmaPYPaSp5puU7cl1MactLuk0tLT5wMcfvFBsrJ53Ej8e4cgHp7QJSsbAgOPns2zey1IK2K5x7G2P4Og/EbFpnV3Vq3+gj6JljGRnSrRNcwqr2FJoAGUnw4Jnb5OgFTcF4MitJ8j3jrbJkf9DDceZdoxhDmufrs3voVyCvbC4mVHRX/TiCejPX4sI62zYRUqyQdwlpKvCYK525woFvVm05ZPmnlwyW+GXsJBo1wKzDY+ea72tGcJVU7D1yM6D0hL40f7i6bqb7OR+kL0gN5IQ4fePA78jfB7tcqgOkRoZfdoZRs4jgr8C2lmYTrygV0X8u92u0osGUKmeH8HG+sE3y44TtMNK/dKxQk+QCl4K5NtSJ9O0O+25E0rLg3kzBTajGYCvpRdyjZJ7Rx79iwNy3MQlOWl+KucWJnBkKdF9MVyQ8CAB48QNxm/PAnouF1pQlMYxS1yfcECI9mIhfXfAyoukusNuQZDGzQNTmGu6TruLOQNjZwySuqSRNugg+NVQaTrmNCWcwd946KtlR0utN1SIYVzeDEJjlxVbQ9VEAFGD5DBKjx+tI/pm3D24ceh4Ck+nwWcq9YpRObCagqhQ1cF1+opzqQ056xq8zR0BSZpqqiXkBNwVBP/5QarxezxIPs8JZPTRjQ+/SrfM+LARZfMT9vT/CJvap+xknCIIxpUkffBcPXOxmtyyeDsqsgFS7L9izDMYtJXiCH/pY8S+ebzrnwctf5JByGuwb6uMTVIDm/w2cubz1lGIiZEaZzpDgh/CnxQorW8MTUYk/yUu2FTeO2m0h6k/qXjmzO4SkMUFa6EZgr7cBxbbO/dw6AXJmJNq8bhs1ck03GJODDY4YzPNTLo49AKZyO3uVIwxIFn1izaxKid+4iw8rU62WQVdOeyDL5r+bOa9hWr0w7bHsn2s5VmyFljDfXvHsV/StVTrrLwV+I79bDo/E5hA2X0+sBu+Oo7wYXsfZexZqdTh1Us3zjdYGewN5Lyu74+LrtMe9gnNzC6pz0TpGNeIZ8UzDMHrUaflDfGqHtPVSUfaLsHB6rjwqlRQlthU/3T9CzE72++aTNeJbjEODMTLk0p3UpyBoI9LVMN9FOr7mYXyIjY2NOkWB2r8Qtmb9+ZpioEbOi86dCoscSPaxiEdZtRB9Bl98qwjQe8tIAXVnIXiEHH8842g8WeogZQhES94el+ffKQ9egXGmeOYv+GitTUDalEL4YoSai2wpE8SH8RY9GoPaYHIzQRDOiUARp1anmlvzMiJRMYSMYE9T2L';const _IH='bd51a60a49f6f5a1ca1f95d017e53eef2914e5db2f62c8db22de1a0c1e8a8f9c';let _src;

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
