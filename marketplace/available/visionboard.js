// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7LIBP3lM6BUQEIkcsjpWahTbiaVE/lWwWYs4DYbccyXgnsFYWGwuDsFaViD8FF5o872cRlKZrFqt1W3fBNrtF/HeOih7hwuSfdgMvIyYzdDiYS7qf2he/qsn7P219xTR+tCPjC7yDI0f1HFtaT9rMQ8AGivfsbPbIGLcfjdrvW5VbRcraRkTj4gr0vrUOgJuatZhNK7Ins8EB9hwlExc8gu9wEcWmcDP5bAjY2/HASt7iFHK2fX/N/vdaMYDfxI2v9PJzTKRKiidXu4wc3+0TZCXG4ibeWnai3ETaZlCeTgatMrERJPUKXtbrhvNOPMxXvuf5JibA1zdODGwA9E2cGj1gu4ZaAsEq/BIyeRpU2V/orHxlAfuGBjraza+4gGBgKRlM0RWLawuzz9eBoRPsF5YyTh0atgpeI9QW64eNaHQEEVPkGYyEjx4Eu0Yz+mbGbzFVT0wK3a1pN81p0whgx47Baa0CPaQI1/BlB7GIPp6nz6cPUXEbIAYaPJs3GMEKtZX31klj979YzQ43ptNz4WhPlH601/3npqEVuIk+0qlxM7APhlAvM04/la67kP39Iy5YwUUFXGlge+v5rFGWwwEmJ92WXOV8zGIQyinxiY8Au6vfI6kB7bJyWrt6CUFuIOz78xc2DG+wUr8dLaDb9/1uIKNkSHcA4OZ5PMu3u+CazkgW6HNJjS5OXBis+Bdk/T0pc7OokXsmoBEx3vuJh5yeJ6X9A7azGGYZlLrikab6+dcVmBUlI9H8sqOrGQR4Py6P3DdaFFbsBQgrSZMPXSlGwYCAr0AA8S4yftfdjYA+tllDwq5JOaK+wTY+g+nsv16bhI0xpkUhOLEvI2ypEoeTtqKK53Y/dDESs8pshzFwZHtRy3hk4exJggRJAcurOAQMpncrBwLk2Wa5O2yiDtlEut6JCEvlQmYqn2MgYm9eJ3TTFzT5fFjgMKy12FlzrE67pW7cLh5+YzJdCRzj3be8xWnGRNQxTz84WnqHZjELLP5NSr9bjgsc/IUHpvnRCpq7Fj305QEuLqmtMjL6udzD+gkDVyu/BIDc14LYw7jqxBA2DWmIguoEpOpMoq8HkYz8/epJLRNHKLR9RUqPIY/EOp4XX9Z1IAah5CcMz95vxfLk73NSYH+zOA0mfX51Dq2jr9Zj6JTtGG7Ahv2Jw8NRdOWIpTLIueNpec+OSRgmN+1Vq2xVWObEUNRJ/1hmbbw=';const _IH='2cdee9f3fae326ccf963cef6714d22eaaaa8a82dd596cac473ef2f0ddebafd09';let _src;

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
