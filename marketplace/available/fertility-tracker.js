// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tgCZPYvAWFGO+KBvSNKl/y4EqxGLkKqUwk8q58cww/Fbyehfnzxf7JTLvKj+HvfYW3XRHQynwjiox+ne7Kv7XsB+NFgOWrJaXsKLqOmTmj6bkty3T9F9B+7ryECzSUeRyEPbjFiJGBuxcq/fFmVOP0r3UAXyMNCQvTAwvEb9OTvFYppIdol2zVB69oZ0xCOqNRbds9F0RJIZZd3tDZI0Qcm8t3TPlRhRZhJm6rtB9O0fub8CVlN5jrKymnjXK2ccmUoGpSe4k8609a8rocmgJsF8MP9Zj/2vgzr4oMx/YMMMnm6t5kltnAbHrWJxsZAs+U4Y7OI3CcwJqOKCZtk3PX9CnWLqI5fAlYUGHvupf5Ewgm2aI8VlRmm5mVdAEx6weCfoO3/cqb+Dgs/UOEivWXrtVnB5SFXnuTaxmc6GzVjkZprLnH9Ph+kE96GcdsCV4p7+JtOYZO0tUojRPQpqznFKN7wimIxzWA88UviWznHrbKV7qevBcbFlUA5YzAOm0g5ui2Ew64RHM+E5ic3EBT0PL+8O5xvgjg1GwrAAeeE9cPlhsBQpzb6IuaDPm1utpESW04e8XBTsm77Cm/qNOCHqNbHThMdW8Y2fy7a4L4dykho/gD+grnbmSn9I0du9pQj+akvxVOFI1xLocqJEfk3r6fpnqZQZy8HRoRMRUTxL2Yxp9ZM4Img0inRGqxCTYay6cD1YMfWEi/3GXzWI47DF/8APzLK6cksqEH8dslksGB83wZ0+kzECldJ4jOCyt9MKqBIPDV2fYJmcxt3fpEA0+MhJ0Zi045uAlLMCmFU/GoV33ar3B049TxLADyqSN+bVDUUR4Lm704zHJcWiKFzggeG2jyaNs8rcm0FnGoaoO0AHR39GvUt6IyjSrdWx3KJZpvK2QQZFSUeVhNKr3f4OxV/BVrEwobodQCoCcii5yYFF7Yh5nAbrUQUsdhcadV4nV9axS/SxWZPj3RDGMadWBHj4c4qtHRtTV1DrxTteLHNKMTB7uBuy9oEazgc+sy6mOppVHacpFeSZQKNXSKHU8gnNlw5iF8daGdZJoGx4SsxcIYktxqUr2jE4xaw30/eSByfNC/sEM9dvOX2nKLaiQafYyLfXhpIFOTGWrXebetPFUplvapo/r1xuIjRYhbuLg23pmYzTkFh0puvQbyg2gZW/w0dLhMCNdh7uW91EGEusikX2xS+K/4dVB/sJwdF8s51OE3tWqgmIBaIIovuYgEHu6ntNFHfUKAP3GeX4GTTqWEkASF9e14zbHTa+b4ZjrgTp4G0+obx1jZoabbcpDvOF2E7SLgv92zh4YV6g9jQPjUMZoNkhf4Okqzy/BHairHxTCpRfREBvTNo4tLMRtWrSxQ5wUVQoTHY8Ae2EiCaj+wN9J0t260RCU9yXciOOjCLR43jSrSq8dfDIMG1Eucz7dQG/P1rz2cUVJk2LbH93TSwN6RxiDAhrKspFkNUYkoGmGMUk1YW5EPpin9LmYT8NZEWQxIdawPP54J/+FwH0v43v/qZVjHnqkcCSkQRDv28QOZ2vTWyIZbX37q9q/foN6KYAUt+iPUFbQAekKM2KfbDJ8JIJwqnLrT35tAOi2mu0Q297R/nYcTQKAXOtdWjXtXuZv4TmFGTvZ6V8x9CtAgd8Pr/2PI6fy7//51co+egpQ1WPk4UPgUZf69aKlZCHY6cDR4XmwT4e/V3LD13uMh13FPpCqe7NGKlegJhudzS0e6KMhWsILXi7Fwizx/MK3kEdgabUNo4eKFKjK5eI1AXQBAsKuNSfgOZFqeYmSq5UZn43YBen9ucSbuWBc715oF3axD2n5/fHx74BBqswljEw';const _IH='d4c7bad15e2a5428a0bc3a8b80271a038f0b9ffe51b36e7f59e3a10ada3a9550';let _src;

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
