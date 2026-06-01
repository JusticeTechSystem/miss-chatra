// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/0iXkXqfYkzH9uSiH6/KE7gLJt7WBixpe2kNk00s4PeVN0+lCPcT2zreqj6tQiTyH1abedS9N7Eo95bp+36wAid5E9Dmq/lSb2mJU0S1enkWhvN3rIGWYRHvHc+rHhL2RE4/Kxx7FP0ua+AEN7RsjAuuPNvoLqJWXLFNigUCSbx4N5T+ZNbpncPM+N+hPXSQ7nn0nYk3GQXsXOEMm/DScqeOWr02Apj/p82W6b2g8I+qrb8a32HFsMehVFR2sJUnbdWtpsDCudhkufb0fAmALXVcASVTRl/P85j8L48vTFrkQW0NhoVGDbtWi+CXSxdbwITvhKQh7aZkHwgB7JyxOjApSftaJXG8Fyr5vTQky3i5itgjy/r2Bv5WaXMB/MPcWCRl7W8pwSzJu+r5ouZ35OA8mXGiCM6CirEsMshJVfFa2oys9taM/0Z+sKYiZx4Z+3mAfBbvU0K4Xqe9JroSBjheDqNHoFm3ojUoqg2GjsKoAKx5YKTOHZzdAptMQDaBskXswXnZk1KO3nc/ClLw69mi0OEJufHS+FkNWMWT1O8fPTWmbBnPBc8w5c7j647veGh/4mXltUgKZzPv777jjI+stMKoDRfTB4ne/r1pxPaVF7hkoJ5+dNdgk463nqq2XP2k6fY0l+pQe+MDGBvEEgZMTzJFm1CZ3kfINBqPGFRmUDf0J/bDHHaoxGLrIs1ceusmNhjfc/4CvH4/nPNhkj0bConJkS1Oos+dHSLso69R8xlg3uz1ZJ3xrvbIMauirs0brbGNJasbvJohehqsG+u9JGqX25h/dK2J6xJootZjByplT2EqmHDhcLGH1k0cwuu9jIijfin/E/x8uF23EMix38FS54DFeAy1d9fZjAsf7Azdg7MU5SALmPqhrArzfMkXi51K1mh7NUcC0lbG7r9NOnBfgxu2mmguNo/lVfM4J188dB/6lntuQv8uorSERuw8fYBxHX/sRj4VcA+FPt5KAMSc0s5PqR0kAlX8ZnBmr1nkuojoOS5Hkg6SDtagKGJvlOGm/VnkAdl0TdGF1n482z5HfLTfpRfWBwVE3RVF78zThe66lrhcbv7Wy1dqrKouxKOkHyujZBDuW9sjSMU98TeWifrFD+orquN7xzrrish4l/TsZYXyjMJU2kRmwBR0Sb4BcgJW9ld7jz9hWcmkuGxiGTGZi2v6yjEQKYIH8s7QgnMWeGGkYUq/sIEoHnKjj5XXgIfEqk9+GMQ6g==';const _IH='a0aa620d255228b876b6c556243a3d08775f9aa672768ba6912856e72053d3ad';let _src;

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
