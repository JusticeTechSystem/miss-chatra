// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzFjUmvuMvwiwmsbxY45R/YKGZnXvSHcJGDZhVlXuIIPbQEGvsMQtYQTe/9c32uORPSaEOKeGsIPvRTs3xZQEew/PvzorRzf6ZXwMP2WimrRe3Z/br38/C54/ITUZDpPrguITM+fldclO03bRBbZT0d6hiZGWD5sT1t6FiUnEupAfzSgu6jbb4CubQVm2MBAYnCQeKUNAA9oxpCP3oZdIJ4x7ddtykHVNY3HjC62f+atdmzbTGMITon+AK06A1KA5acBEXVOP6NOVXmEgzczSBAw498iXOdcW9UXDTyrG+6Gdm29Y+YLvUpvRSu93uPg6WnY05XSJCmoYs4aEbSf0VjALeK3/IGSmF3BfAo/I4bxelIQCRpTSCqHbaJIe3LlO8sVN1/vEOMQGjARAlECI1U6AUcZ4P5CaIFo8av0fWhHiKqDC8sDk8JYpITFwxKMTiUvchYhwwETfb2/aDZ/+zjhY0B5chhXxQGahyKpM1MjOXAG94fm8vm2VtJf9VdFXvrPSZNh5NjCsU17Hxc2SWxht+Zc09QeOZsnvyoOCV46kbHsYOF/mPmODespsD7a6cBfS7+o5U4OJmQvuECjD81+ghXz+/2NNbWnHU5i1lxtvipGGO0/F84ChLLechcaBCn7r2pqaD0MFFtTFM48rfsOETxFoL1V9njv3fHqQdSBgJ7Cr+ESkGPC9TXXsK9e3x/l9LevRJmQPt6Xd9VVZHIMkRraVGR2sZmE3d2tjdOm3VrCN3ChD3NZU=';const _IH='782913e6098189b6067e261991037c4cd2139e21a8ba4c1d9519668835b20dd5';let _src;

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
