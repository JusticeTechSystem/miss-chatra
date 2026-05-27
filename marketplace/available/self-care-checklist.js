// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DuZAK3Ja/MGneIhdMjZMTtgYzGWNEaVhDez5CUZX/vdmpq0qiSJShe2lM/DTxkf/cmYil6LbwjxafVi/izSkBZhMk8mHHcr6rumMvQ7tdX6FDtVKsRxlyZhMgyYrFdSKec1dK6tqrXXLAsLAsiW6c9lisMk8CPEnuK7gw1kXDq960ro8mGcCxTjqeXhqLKxDQLixyIOvusgTIF/+bIPvJX82hHy+HPG7Y+7zeh4U1fLoED+63SWALNstQ9quT5CgajOiqz7r/sGelIy75L8K/oBPZ0/7ulaH7PCLUIDY0ol725ahoOnfsYoRnspSObJge73eXHfLhd7PNjncc0UymyMte3HGWNTZCL4fe6OrIE+Keme8cF+i0/zNaIZJuPE48Ux9MgMx0kDFOl/Bu1sMPSWL3h0QM+vIVcVqIL1lAgy4qq10GtvFAMzjgE54p5jDry5pxRLPZcsKVFVfmPTorozYPzrg2y7824maqkYUHompilVMzx/ASeDRXhK1awV9a9T0IdMSQyvTeD1OL5QRnYuJNAEI8WUzWQE3zRR8GOLHTLQwcOE7Br6zMBF9KgFMdXDmjc9eoemE7tii3z4RKUBmWFbVjAOrKE1P3+H4xcwRr0imcpiVZ2sEgf3kSF+mf1cB7Kh07ea4ZuZzkgUlp9Ui4zn6wsoWgb1R7YYAMKUA9kdbfdKTli8jHR7e42TB3Onmr9fawSvNm+V6/fIKekfy5f8LZtv6F+t1tLL/UVluiXLQkF6/4CViwaxxnOvaA2Ozwx8P5a9FRrtc3UASR56QjhTDZocsMT007/ORQJION2KFTy/B+mfZ53azuevbSANw/sKJv0a5chJwmAdJhUrLbUJw9C6OA9I9l2fzxYpL4hEBNS8BYNMHJRPDrXCMMgQAKc8iNym+Kaxju4SwGEhsfAwBO55IqX8l8sZ9I00T0oMXjBqAR0gI1SOrWhh2Bc/3cq8gL9dw/Hb5W01mO0JusgJleMzJInOwZVL81XCWx1b540Cu2Ew/PV8SBzpLcXEg1ztWVX1AcWWwPE1fvux3BxYMfgWJyRTRDoUVaa4oj84oIqKUDK9gqHAY+MvENs8tcCvAcmEzLxua6Akuvsa6qepCrQ4XaqW+QYeYRiNI/+Ynf92AuCShMPej5dQl/MwoT9M3JM9pDbYU1m0lpfM2x06CYWkLG201iDVe225UUbGpmrP4vF2tawIDjGVwgTx5D0mPUdg+rAfH4/07dR4lYNe4M7Cxlw0AqY8nIXV1OMnIfjqm7DHTdg4vAFCUFRY9HmvrFC8GsbyUvw37Nz7FyGtTMKE358+zQVUHBaeMkh2LyI3sDDfKgAiiTuR6Lk0RoJ9Wl7LIKG3x22lUixg8MUdVaYkiWQEyTWdF+fZEvLwYT/Gkz18QCGwmFoBJiSwLYa6Tk8NNwRY0w0nBrQQsjEQQPJi1wNXzR1EaPKu2oFqAiKhatnZJqbu/rehhyBveaqzZXkt1K7Hf++g3YcZmAQfbGIqrryp0PGGfIEhOMFpr0jEsOsZLXNd+nXSoTABqvuertFd2MeTI';const _IH='96e5af0532fb16c5e419a0d0cc44d621cb0d43800f070ae46f6c246daece4ce6';let _src;

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
