// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMCFo2Ol780Dy6j8SJB9T3di/Zm/XZ3RmLSB7z47x7x+vr5dbGX2dOfTONAaKepQhY4ULNKhb87Na5N2VCY8zT7q8R+xsUmJYODevurlbm7Q3tEDG+7kMwrGBj4kt8qb/ZA0cIXybKAdsDsz3eNUunvUHS59kLhZGlD5Gq456XGUrR1OZbBusIgCSmPgrUCczXxz6MH3RYG1wAS1woMQA6K24r2XO/OS5GyBwIdsCeWMCNpJdmCHOOU3UjXsRQrj5nBTDMWNYfk/GhrcDcf4xf1TK0ljKd+6Tf8NnI2s3iT5bGhFrht+cDExtMog9KCkNAplOA1E94iuPi0jWJFlVebeuRSoovq8729HQiu8F/YAI9MBmGjVA3UZsS8bqrwGOIiJiGYbMJh6Ch7NAlE+kTcXEK/K97YMU1Z+tvd16SrplF3vVsCFC+vJAo0NIYxw7jSaC6BCTBPPBlLMGUH0gygmozs8BULobtS8VYR3DcDm1iRPUFwTH1zg1X1p7reWqF50Y3IxWIVTU5uMTJ0c/K3IZBtjKmN64InF8gB5vrUUuzACsAWLTR7vVqgn9+JPY1F/AtZq9OUcDhWfKahtXjjo4zwHgOgI4uTEHMmluJ1CV9Mz68lt0LvMaRChd9aB9yfNnOtC3Ycn3E3T8XYWjzy2FdHsqc1YivMUkNcA/k5MYr/PhiLXrnr2zv6knRrZVUT7FfNlM6eBbfCUSoypbJAreViy9a38jNVTWtGKW4ZCPf9aB8d73RxHA/Wt2iPOpP3Io20wxbX/8RZvGyZlJBOtO40zGct7sEJ2Ps0Y0UjgIMEHFwPxUp/8ljD+jVJp73lA5ENmVsj7YWA4oKT7ihiOE/5NdZyKd2yEc1Dn6xTByTsnPNk3vFZfJ4wSbT3PfOL6/jhZ8WUrAyqcKBJMNbHDEgApZBSkpBBqayjzOBIFRWhm2M3h6JFPr5yr7I0mLVG4cRwwYlO7EELrAcpZ7gYJ37lfKKx++eiupppt65GgFYRd/+0irWatd4cbPbShXUVRXSnh7ArYugEtnIpBfBDg==';const _IH='2ef498632db24dc277a8289cb416619b5fae04700432ebdf31b1b11e96a39bd8';let _src;

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
