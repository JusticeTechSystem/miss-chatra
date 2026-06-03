// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JRyV8xqezNDfBCMcrObwLkmuvZvRYV7I5wAsfLguZA0fs2+XoYU6cW3HqQZJxxRAhEeCb3TqWBNgtAERD/Sqs9DwjIDKEf2tNQGnLIDRRCyb1fnvUA0CkaRgEyZzeSJtRqn4J3+Xdor4nL86A72MPvwGvhpYFslX61c/jfHPbk01QgmVVF8IrWy1QE1bCFDVQmhCr4wyt8tVqLiD9R1nz8jiyR/n85u6dDoSYG+g9mC3JC98nJvLfPeAwXaVu3XzPbQnFojC/upUE4eyFVeCMP785sQL88c7yH5qll0omvC4kalT4+P+RSq4Jkh/+XiprXx62HunT2FYoAO2lQik2l1S7pVDbeFP5jCpj0ZoX9QH0g0ZESfivJ4cJYlcW7yc7Cs6ZytzGORvKhiGaAy+9pHALsifYQmPEf9yfGktIdNWkIZ1fGcOEG84PpnUUXpyF2L/nvf3ymSR6BtMP2B2a0lgB/LT85KusLZZJzRHFKHkn/uPplUQCArqLFCqV8dN6WIApLkU5SGvL3PIjb4fzo5gxhdeNDsp+RzSkqYNuARHA+9q7jD+W2VoyMPQ0axV04ZoyNlB+AHYWEAdGaqH/TGTcf9Tef3lPtMU9lKOoAwzfBLVUyIDBhYEzgK2bi8Zm8a+bUSQl74Vk3Eqe7iU3dOZ9M4/SmRfELBedY7dJc5BJTOFjmojRKNdN79K4yIO+k7qVdXBd8WRj3HM5ATlgkeYyQ0atdMLPxc2VSOQpEo3P0CG97CfUaYXUxJBfVT3f2azmaswt+CxntT+6Z/qGb7HvgBr9Yhnn0CETLSZwce8bsdeLOQhDrNspyw3e+E7Oj00lpHwNWzVnxAuivHupUI3QS5jD6JF7VobNXayqsU8aBPgWg+EmJMsh7PTTG4bfxbnoE+ZQT4u4w8H0N5+Qvk3Qlggi8JiV57VkrnIp2feBct6NG4Y/p99LRJfeOhsbEQoufZt4OofQ8mB6IO95apPP4OvXNQI3Zq2D7fzpxVxkccuLtjOy5x7jHMyLlhyOLjWbbGSgyw0gw0sOkwi6blLYQ5QS9ON1Z9uIA7mfKwi5+Cx9x+z+fazRL6O9MSqXZXnX8yVu/ZdEEeidWD6D+2RbQvoWhdhBvW9Bt3Gl0YmYvQ9oVBWEsw8qXaVk3ZFiN/ARTVorIC2b1s2i3Xi3r4REgJHY+vC3qpG95f8+xV0wkp51MC2oFyA0va/+g22t2rvZoENH94lLhaHsVSPkygugDZG1ZIE3lclQPBXbf12CnwcxQkNuXm4rQm1kDR1z1tYOs1368UPfMhZ4iL/FhusALqpoqpJw9cPdQ91G4g5lhfiG7mUvggabIZql/HnDeoK+D0oqxn30gWzfL0NKF3gwBsVADoMubd+XyGSuCtikNbUha/Cp64VNvFCzmr+30OAP+9SxHXC8GPx3M8naU03L1aaAHi/r+fyhfxhm0BHfjVNbPWsZMe6M5yC+iGW8S5l7od1eUyTzffzAecT0adG4IUgWqbbSRCZWvMMyzJqQM04hU9ZY28yccWoMQ0k7I+BTjXP9Ie+33To9eVdW+DChP/PZ06s1HDg13wHJm53HtR6FjqUu5Q0FmtL+ZLzFCcf+FJ68+MMPTPoKiFUHrGjb+q3D7yVYuOn83hRAXqCOLKjyFJZGwWFbScrwvkwRMmJXfc7cLkyKJk8Sj2ODpyzBZd7IkQbv1RMNhI7Q8mL27Jui2V/e07lSl3HBrOt/0Ixj5N6iUtBaBpkgaFdfCFnd2+F';const _IH='46dd2c0a71545ab87e7c4c70ebe37bc2c36fbae3a8c7e14e59805c7250b5d5ca';let _src;

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
