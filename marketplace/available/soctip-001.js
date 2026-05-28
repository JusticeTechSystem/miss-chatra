// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cclGHSe78lz8tVUgEMfw0MvnSBrpt3MYksmt7KtsgRJ6sGzLNOdmJckdPWk7CdDcE/lJb2HK28SqLfyTrSXauoSg3dG2EO9y3p/D0gmGo9oUYbGg+pol0R3NjFlBau3PUqEWioxGRgjtWoEMTQl9Zkx7LUUsXZb7QcVT8CB1HA4Bv9r3JuSnRweQq8iah2Cq+aJbWxbSf8LJsrUkYFORFop1aIQEj/cZu/JRQQ2fXFVxKSu6HxmBtIW6UODSEpsIqcRfWSGnSzw6LrJu4epDdhOgilt4RfxRLUTw4AjPb8hoYDQwKYm3QjJ1mL+52viwq7Gqk6Nnx4HODrb+V9N+3Ahmf1dseW0O0pajZ8cTNrA6b7nbZrB0dcJcw/xK1FelSmfzpWAyhue2z1gRJbEzSsDRzz/EoAQuvot265SYHxBej0wWqRGnpMX1b2iMvoh36DStcdJlapUH3Df8C8xNRNQlocqZoe1Hy+OtxS5wTax2qkL1/OX/3Ns9FRfE07DPRD9f1YCWhGdfBl11NVUNYpnDIuZkcHWdxiK2mhm2R55vtltA30XogoNCFmNc67dynNgnpUaVabXDxgOPVmR2TVwi6oHvraMIxfaA/SyxK8fo723VZ5jC8LiSB6eN+tSbtKK2wvR2Uw1qEVEUUOz2Ok60DK2t0ZUTTx8+qsINy2Sxv55jzZdDZENc6QeIeNruHqDJbo3W43imRQTX5j6F1zR8OYRiX7vhuAx1LsgUk3nkj35w8iGOHVJk7zxYH3SQGYHJKoYz8oFreA9dx8rA30+qn8iF04SkqD4439is50XSHILbGjet9bz5QNJUC2ilQ4B/vyyC+n2bYl2fi5C+pNbf/ZuAWmA+k0GpUA7pc/FVRqQ6aOqk2tATzmA5O4lWEgNp57HQvX46lCyltLgBNdROsjJJmk3VPtP5dE0gbjcUAYvNaMwZHrsCIt0e/h7/r+Gya3puYlh0vcAf0wA3rvkvlfJknDPH/g9HaUoesl/CMoybbUBae1cccoMcTfstNq4arLZtUoLt83j6gjkKcya8xQNhbg/oym49Jfl11ybdamXHjlDVYMGPA/dyKn3N5dLE3v5fNUpdTGQ=';const _IH='ebb4f7be850dea4cd9ac74dc405d4acd29ade3c0ebacb6908eb1017c96571a5b';let _src;

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
