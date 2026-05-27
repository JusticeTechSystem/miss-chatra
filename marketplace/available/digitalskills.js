// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDVILoPfTxn5rvHmwIThxHp/W9mJBAVDfwDLi9aasIgmkjZlgMGG8adaBEE9qJD+COj6r1jAp19twUHHQQsC5mgF63SliUdBwTWuXL1Xbb3XHckKe5ofGZ825fDglUt6d7CnI/4DkfBEV1wc4d7uzZHAZa1uehFe3USYTVuWHxzIXEruIeQib+8+wjBzLtZTEZwjU2NLUYU+mI8Qhhxy0GGJ/Q5BDdkqyOmjtlY2W7maLvjjYo/jBM6e01nQG9f08pt0GONHc//l4drHwKy8WXAq1XyZ2tGU/dScje8aQ80fu/Oy0CmwB8TzvhTMhEagA9kUf6gd4IeKVMb4jMuCAS8MTnlBi4nL1SJa+XgPShjeGPANXzsKUEBcmoVsN2pu7G2tkaVLMlnAgjm14uzVRh7DoxX28+4ur/MUoBQhQai2BbOCUJt5TEJJDdHjSceU7GviTLb5nqK19Df2yViGM2t5U9EVxJeCjjV7jd76qZ4BnOZ5W3d0v3vH/ny+lLtYBKtrAy0cTdZyNJbt0FdEDBqhQ2lUnu4tEBPVNBI4YpW25gE2t59jT1WJtWtlxLWa3ciNSW+88PSAWpMwZ7E3Jtyer3fuTD0KXoF6IAOqAe1/0zMZrvRwLnkXRS1DV9K448EIKiKLIL/m/Ls8NjvYgN7D1tQgDD+I9RR5gNbVxaGyw/M4ikgkFZZiCCie3H66i/cg/FqyQaf3Y6fm0d4SaNrnhmDvjlLHTszrG1uat06cq1CKBMMUhvfGY69rwXO/JN9U+OLB6OL2X5axpFbcnAWu3pBLUmM06Q3qu8THKoV/q1BQb8Pk0njTMSQTECGPrLRA+YYLmnNoMyhbc9HFsZYv1i9iQoCy4KUobSqubWUNO60H0qBxPOOlt4NsI/sheaB0E+IEqHXdi3SogsGHuTU6iHbgsQzdRs9sVIk/fhf1mods43IS8eYeQXdbea8lNfOgZMncoEpTJgmTORZ76IGlecq9QyaEN/b7+0NTohYbhzO56XOa+dxQ2lnucZUw27SpS8SpTfSMszrA63fHUPPcs1O9q0jKJ4J3jnvbTtxDaPL/2r7vX2OgqnaaVo4H5IwBRr6Em4t/Ni+xfo6eIjktq0k3Og4tp8lyLMQD89GY2acIqd0xvilUMH/het+aGyESpNbGBJebecWvZh+BwxFldub8ahI0RvPR2eQbHlyie+T+q8gJJoCdzg0ObPvp1McnA6B+XCybKxv7/U0=';const _IH='af401d6e2a4b90f3f6d500150af43dca56f5d91e5bbfb4af93321eb119de4c75';let _src;

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
