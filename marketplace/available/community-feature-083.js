// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u1Wq6Ma4RkwzTySGIdoLbFwjbk7fw3yNeA7PLzqcY8hW65RM+TTNggu1V2bKND3wvGTlhxDuzyPcHkflb+PjR+SbbDj5lQO8TiOdf0L/bZFfvlknj0Xb32jxgGxzx07E7XUkdRe+xBo77II7IXxv6VsDq/TjVsOnFMtb7UMvhwe4w9F/DfSIsbqfsMrlX+g/n4PphOsbOI69pudsFBZKBn1Gliiap+HY0eGHsSzCK9kRJBcN5bSmZmJpKZgGnX/x6mrDoGuCbu7UoSuq55vxg1s2fGyrhcuZ4XGr66/OPEXI5j1Hl6ynETg+XvPyJ5ubmJineC7Mmg9dlmemymFcvV0eud83Y4i4FGtYGwT2YwZ71rqiPVhX2+wakTBSIMx/AgCRNGr7DRsg2IENl707L+TKta8FpUSV9WPY0+NdfIdksOQ/T5xrKlA+X8ami3jFAlqt9GL3NFxD1HQ4+7PRKyHwPF3dem3GmYuosMCmT669sfFaWC7vysKejGr7JzO2TIQ6MjIh/DD/HtDOdh24JpJBySDrCNIM2Cq0aptFgxXDIhwfMWshv8o8q8TutGPORk/Ztd8s/dihQfHX8WFq2LcRCYqMWH9mGgr6I+16IAV6clLvqrQ/BvbNjgaS5p0NBTdw/wpxbKzAYOJrlAG7ucYFPtfBLkPj3RKJ9/4E5zKTWsP42HDWlaIoCZgtOmzZztmf72rfdp/qZGSqcCVJvBtSqhFKtKeGNw==';const _IH='de2335c98a02872ef12bdb8a0157a550b489b7723469c78fb5a29ac81753af30';let _src;

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
