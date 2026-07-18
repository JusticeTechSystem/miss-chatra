// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8Z6ph+gj+e18hADB3gRk3uAhvZs09tZ1vHne4xS+Zmxvl7/X3SaixN4iaBfcKZp7BYtob1A+OAaidKWZK3Dqoilde8HyF6Q2/gbnpTRibhMb78GNRS/TeNAlBJ8o9SXwQYhT/pz2B3/ldCnz6GwsSMKU2AwGnv/jR0ZxYk8NRj+GQWuFf0crOePh0dwtzsLOb2cIhyOKopA/1Gq7HHXiMkgdYxfFvxudnO0sCUxyg4YrFWotaq6fDbUBGGjE6PrCxAozkV2vJKRPr3SMXE0tUEVMLWPXOV5GtcN2eg7EFqxsVhcIFnCbuI7VVnMrd8xhvFe6Vcd8ntBFKbXkXwz6mk02bVfAirxyxmu/nTiD/1Min2Th/zIOMO56J/JRg/eND+ldKkB0m4HjZs+LbuAbH9NklhSLd7hBaJ+f+APg+rdaS3dV0SqDOgQwopnoAnepflr1x+BD0H5GFQE4JsRIdWZJ0VURtPtvZanP6ILHvVi1UnD1GYlZeo6g42kJer0L+umaTnkv+ENr0pOmajl2NVGL+nUxPRCL7c6GVhWDYzPmLkH0Cz8ycCIGUYifyGF6gArD2CmqmzXzxl/pib97Enqa/OFoXbPrvNM5yF9v1Hpm1cmSRH5RUoCFoejeN9WswcfVr0xu7Ajn4oNLzCC8JEpJStfdSf1DVeWqfl41eiuKA+L0Pht3Wsx2bQDxXJayoFej04raZMjE1xEJRFz+ZxgHML4TrhGKzZk2En13Uk7tv1MF6GzgfLcesUfJcskfp+cwWdmUAVY6iVute92FOqDRMH8mYP6D1apTitWT+q+GVOmiEI++71QE2hL62vUsVMSS126oJn/nCOPoQhpXl2axI1l51MhuvNxKQHnCK8ZrnmBCmZSw7lgxJY5eeXb98RqN+LJo3LaJOkjDZtyKo+xbakQGve/BJJDnBRR2K2LvqCOKDDtsRv4Y9WhTwTyJmLx/a04g+Hp/yBU33S274L6JMwGZTieVg5M9jcq7p6+LK6/u9UmDic1ducXCXiW+Eu5t8Y4L80GWeNtzI8vJsGYk6sPOKE54UuN4ZPo3lqrZZtInJHRNRF6YBO84kXbq1/0EmuWogLSyp1OhNCEQSgCCpUg5TrOcvwyPrTu6qxkXXOfx0hyzWdZ05dn6vx088tUrKBNdmJVQQt7QPtQIlVhXhVZi+tedwxgLGLQUaj1N3793tQur6blPsm2YthRHC9LfS';const _IH='f3b7f41eaea5772eeaa95059fe64d0d55ed83fbffe670b61adc23283d436cbc2';let _src;

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
