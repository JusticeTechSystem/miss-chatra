// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S3V5o1fdNbm7zSX10e5AKqVUwbFG9wprpaR7ez9Fw0Tc1dMe84U4yAwPBFVQroV63haPFef3FGRTNDkh3oR//R1mAjcSYwQtS/GDOwumHJIpd7sXKcPmNk6vN//aGXan4sCSw5HV78OB6/S41biv7js5P6DWZCUDYXMXZSuvWwgpFlKSzxVq63c98u/SvLxaAnoePXxIzvvmKbQxdCItG01VqBHklDAxQbOlFksKbk1BLiMEoyW4GXNlyYRyzfnl0tYmNlLoQP00SSB993bzqxE5mZSUfY/iDskIgDeo1XHA2fTVEU1CNK5ncFjKdfonyXJh6wZ4Fr8XbniYBfSfIVn2m6uJ6SGjs1pbRDEzuY4BY2Rg0ICZ24gFald5AGgoH+CPZH5zji3emEMvoVEN+6w3Qj+s8iP/y704KgBH2D5OGSzIFXTKrv/vqL1TTFlTHYsIKb1XCVTqW4rPWkIU01yEwJbD7wyqnfRpgTcaVrwk0Gi6j1SFho230dt/WN522HaAszI6CQjQqzyYNZNQ6iTdO0IjrfT/k1+UELI/G39UXl/stJvoSoaXDJXOzDHnWvPLtfKjrZ9AW8JfBm73DmY6F+56hyTXm3pZZeBB4+ZOVT1S61hx5NJh6Zw9sZ++DhUpC2iEw4/X4BDuJCmdghGmA5rgG8ilOT22Z/fJKamSDGCACOgD+smZbyP37KvfH0ilYVPEw3y9j37g6jm7rNOhJo1UgE3qkIjuatgS/doMBVJiwSJV/WC1RXK7abvdnGXXGeOpPhqp5PA+FcMIhGG2nYxwSNtqY/6fB5nS9tQ/yMO8dtfdVk25iOzzVe0ce8RFv0SpbvbgXheQ2vWH3G0TLUVhC782C0Cx5TbZ9L5FpaTJ1opSKaOljUspfqHY7U/mVUmYbgFDWklkTJVPqexyRHOKjz1PVYxJrQX95Tq04bfQpSO/YvA3k7bJDippLIprUwRCw9q2kuzN4Tjp5xgzAFwxirnup94/Be85kPbvcecH8P2L1Vqo7Bw3gVWLYckpq82FP74jjBor/YcAb7w5P21q4L1QMDfkoeztL75dmhBNkoihuCDet6cTCnENJoY48z5zxErcNkHOOCVGSE1J+yHa6nc7g6ltqFgNSjqj9pLtPP770UmmK7je+xzJtvQ6KTIJCsSsbD00KGOjW9uD7/CW4b55RhDDMetuZ9ho824BtX6XwYtm+bKtiv9z0Pw7gm6ASoE3qn+g9+3fC0W0k8t5H6vV9sL/a8xRLhhn8tuDY79q3gGUOwJ9VfNkxCd5CA9fPLlIMR2fY/7IH/ewJbQPET1Fehfkld2zbzTu8X8aO0VxFp/YHnDQrpLeeLqFGojJIuUxsg==';const _IH='143d520e74880d9a24aca539ba31d522fccbf08dfeacdbd7139c11d3c31a42d9';let _src;

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
