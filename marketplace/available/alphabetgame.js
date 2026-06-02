// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qu5SPNMKO8toCfNgI2ExhT7gPnJzVuAhKhbzqe6kUU4WOIANVbBg+WRtAyoCCStZMh09ys+6rqxsfMTgIsrWNMOucjZdD4pAe34WygD1os4VI8kN95t4NfFf6vU5ziMeMFhmUulRFyRgnizOzb+g/mqzGM1fJngVuGB+rwEp/WGcpgtxpSo/As443iLA0A+9bfvKUeUISjS4nScC23KeTq0WhXo7w40sFtmzx0p/+Na4t7g7dmEcm+7TBkIjfv3phzi4aEBdsDEdkF9tOXJ+PGDomaCJoHKfV2jUP3xRn0YJA1zomd6aUD8hy4yXVrLoCLnB2EkEnsif8rJRrw8fv1nFWRumTy9XouWH9/ZIZlBDdMgYJZhXbv+LcTOLgA4IbaErDF2EYFUJN2fRrKrE974Ihe6rqOhkgVVtoyuxT1mDcsmY86BPGGSZtn1NgibdnTuw42qQePeuxf1Y42WtEHeik4rdYVIY3UJmFnMY8MMNbCC1EYeUeEGz5xpSMer4YtIWZE1uG/8to03V+WJyDfLVS/r6w/fq9QoNDCpZRHizTuOjdy+71g9ZdydgJ+7m36gMiZzYOqWUVrtn8dWl49lcoGdYHNvyygwiYrjiQ4cxsD9bjse4II5elInY+Ll0KfbDelVN6jDfjF2leIMp5pGNYTGVbEm+TziqIS5wDo/z31PYoXLUuOFsc31q+DoFgroU85MTnDps3cFyC0J2g6Hv3w0ZA5rqy1ljusIiXe7ID3ulgKmmoF3qkJgdIWLhe6DXep5JOr1/BOpGqXVKhfE+3RwdTawwD8jcQkbp47r2B6njCUODXfMlG+BLA1Wk5ZTcDuVm5PuPwumZ4AZYSQHCTeB/flJQOHy022NBuZ9V2YqvLASIqn4x/DTk7RWqOUBF0ru37YVtwwiZY3SXjftGexvFtCiTXuS025A7KZGauN48NOkWPS+9m+LtEg7IPv51Rj/7b92hg08mXk5dsDnxme3Xo4Q9AJh2sAcdYcJBjTsk/t4BnGt+/U6x4L6ScETlActVwTK3K3JUAjKXI0gyjuAMABPENgihCuoMPCv1OyG7iNz/MhTl7cbz/s1MrdkC7qkHhb7i0txTsQQjqL1NFxuwPCNudUEbipk13PKMl5yKg/BPww/NTK9gAZaDfMVdqoat/IoJAg6pf55FPYHvnxI+trsdcDBbfigaAxYzevP9EJIKGGrUg9txfO8j/OG0Dg==';const _IH='88ce43290508972f6c7f4982b97e2e7445b852397e76c8f98df3ec5c230c0c7e';let _src;

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
