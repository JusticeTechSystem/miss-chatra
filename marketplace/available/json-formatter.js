// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q2zdfk6ykJN8OgZxQLBsmZBn41lBzW6OJ5EqjucE5ftb3xh0T08e7leX60OsHhOpOvzjTCxJpbuRjEWxXSKtux9UNN+IgjBkZHjD4Et80NfFVHc1TP95JKc9te6J+dPHUi1mHYt2+mgVl4RdsSHt6/FLczzDVhYtSyMGF5ieKsouOkcTN2PxVMidHKRLnwoCT1kuZDAmiApnopdK5+r6Ww9szthMmDF8tg9LGQiUyVXZC2d0MwO2ilMkXjy1QiUb6Mh5AF0ow9WRHFxl5hCwjEPiMCLhSFf0kMCjvnTouNG4a3Nrg9M4B5tF8dpO7ZL0hKwSJ0WK5w3T8Rp0du7FGIbiyNFSRc0sZLBUDTAekbIVCK199LiNne/9w1fKUKHHiA31D2dJ2mbVwcl1BrBJFhF51OxjJjcP734zx6PRJZCciezO0BHuavcpJkzZyQUoXQ+TklDO8ikgNsVko96PvumYB8Ymc8f92oARm0QcdfYaCE8yVrdM9LanXsWuEK+xSzmPEDmkPcRl2GMqo9epagQvNH5xXTCz5RWILjgWU+HJx7unx3gkHmufAhRUQpQMGj4LdFWcioOT0P/sv4bQMv2duFKjliuYuPCNbSwiFoOgBM5jMbnOzUoFaSKDmBvFGYeNckz4Y5IIy+hiTDkUhC3Ul+WcIp28c0tQlpglecIKU473JDdip8N1VUc5+cAFoXB6u6p9vVRJtcn44w67bzWvz863R2BN5xZKWfObVDxOaCUiM6UnSCNBdsI2w4m2KHBjz8XkljgVGed0c7qxpHPzbbCVJj083WJvhirAGGkOBWfaCtwDHx3NPyx73NgmeeNJqeN8veYk4LhhSBkxtk2u9LqNmQyrMenndgtugfh20vEQQDjKnDkXYfYcf2IuoFNeyppfIFHXhq3zHdFAtMKL9crycO2Kn/hS0AxC5gazak+8pe/L+mca9MHoL8AxgRKlIFGbBJ94oI9XSZOfPf5G5MNsiSkfWnANdOyDpD9cti0cjujmT0FaPD7MX45P4PhmZZtaYHOEgIIOhhVmHbwIRT+oQ1camjg2OyqdvmKFwqLQn20bE5rmFAqjd3AS8KgJ3D6I50hBL1sAO5x2ngslYp57Sz6Jl7NXqT0uCerBNiCi+cStdpQhmjvpfnnw72U8rHSqLoskGA7ll+PPkGjNarHvqSv3CxomjvzJp5iSOtk6W7Jqiwm1FfJ1LXJMM0pY6R7vrEoLgE9q1zstp3v4makc1/QD054b5oKvA8GIkrh5xDioaOiYivYp3tQi8v8dNNofJWUhrqOU9tj3j6MFoJtPkPfv3O/wgq83yRBc0HM=';const _IH='0bdc2e709e9ffcafa345088501e6c92c189f226344e7f917ce898f84777b8692';let _src;

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
