// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xIAMgZCegwQpf+IxHnXPCy2Slg9zMEy/hsBiUeeM/Td5nJSOsuHyGXv1E1c6Wy2v02LayxgE39A5i9LDQ2495U4HzeofATpMUpiLwODw00wOu7CHxQW+wvvNiUe3YEuVTA56eCbZqMmsBJyps9p+rMEdLX14sQ4TMneA1oXSoS9T8v0obuIqBJoBmst2tdPuxSD9mIxj/Vd7Q/HCEZ184r9ovbLOoX7qcZVYhA+5eyROnHXxWiyXYMVzBGvdN2CLdj9JpLyjU7Swf9T3MFYD+neZS86fNxI5r92WaZ2Sb6ej4h/p5CNdyMJRcN0PU7wwvcmY4SWcB0TNSV2qYtfaA+FdZqKuhspDR0ZheleLnF4M/YCjsDyi4ycDO6ZmgSpBFLuYZ2IWb7ptQ6u47GehZ9AsbBx6aMK9kNqXJp3apBXOh3KSMWT4R9Vh8mxK/4qYQOVSpn2dOh2Rpl2Ko47IRPCpQxWrjlUac9FKkFPShWNV+wfXZAz3uUOknh+QW4k02KxCHE7+Dyy0aqTVloYYaT0NWqHK6jPATHwhDIruv6cZOn5l/3HMrXt0bNCWXncfzElnsTrBDQ08GwXKlbdeufiaN0v/f0ziO/7eS+3GnveCbF1jHhpa4EEJ+cg5mtbzx0A+yeGWkxsEGoYJksVX3UZ9tN/NMzneeLTXUrNG2rPf1nTdbFnKFCXfDd9bZSjm24Q/mXQS+XZYiP+Kz106Ma1gKGM7y5Z1n02sYV44foOP1pgm5KDQRb5tIdWcmMsVFHfeqEdp66N0ujWxSm3IfZmTjVqiCCZBazVsP5S/eVHofs2bU9kU/IgUT6Ja8IV/BIA1ykVZLIhUNiEW/GWZ9VvcRFKK7OG6lCAVc6MscYVyRJDOHKqYsvPDMDBfz/LTNXFFZOseWzOr1c1FWu7Skj6Yoe3kIh4g4WsaKQ+qzde3DUzfmfFOHgYedAMeFcHoIVmyKk6ycP8dJRYl2RMJJv3/vDKF7gMS8WyiHJL3P3WODK0z+Z7vkZEj6J7WQSRJPgF7mFZ5PI6WtxOTR5jtNN5mooh2xE4ArdQXN9VMnYCijGE1Dk/U83P/DT9Wpx/lGH8PTtXIRore1Fr0mHsud0iBJk5ufCr+f4Fhngfih5zMS97tWJyxfk5DeWf8Y89t/e6KPwHfi9MMJzFL4qFl9Wl2Hvid2g2UZBJZUznuaaq+ETjXbkDX0mDM5tw7yaviZN9b4wJBbltSM6E4chvLUWSdIvmkZZmSNWDrKisbU+z7mPJ22e1o/esE/FRxDfWIWdF5mvGQG7dloHT6ooKZr3Od9mzrL0xS1ZNh/uShlwkBTW0IMhMW6rW0X0atpaUliJbsHNSy5yk+5KQ5zXtqqTFUXXuhUctxqs5TAvzV';const _IH='47fed2ad7686fd3f1fa347f05f47815f59a6cc5568f42bb7b9fa7a6e588d148b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
