// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJd6MPK0uH+k8+GLRWOFtjCnpSe2rBrl31LcFQe7+TqHSpT3oJpLbuyRb3QSRO2Sn5zgHcjJ7CcxoPonYKk5fROYOuIiwbu5z2MEmyHGdF/kpez+HQEGSdt4D2qp0l1DlgdZR5XI6CH13fqDm/z05J4NXEmqIx7PLptPrFDr43RXZ8L3u1WOXsvbjX0XihJhlsqEiS1SNV3n8kkwPjrOU1Y++7WYeRm7v5il37HU4ABcQUuvGtsL2viujbGA8kwdRkxZlkm8W4p9CPchoap37vGRtydK9nYRbb24nvQd8V7fMlVMolmop1T/inoFxKS60gfukRvd29lv/kwaP2XOhLggr1CB0b0dkf1VwaBtrYhkaTaV7/a0+i+/AgyuL4j+bVVzb29anQgeMkSuH4EEj7e/73JmUP1zSt0XD2qvSB+E6f+KOaJ0xuhvtrbs85WGftBZ0fyhgMlkth+46/ZygR2KEZ/NUXfZb4ejKBN3c3Gein4lCDhvSWd02iR5IdM0RXcmwKLBINXtaEJAm166yNyoMxLuN0UukDrfl6NcYVht9D6L2SubfoBkbSBu4C/FrXNZZAYwlnanIRqJIsYfIScjiTUL1lJKGg7kv8rv3QJjsQGrFZRmcFm3iswh/rinNHnk0FfJUpOyG0U0PFifQTWxnbQQ7IHDO/6MRiMXLf951ZV/cjp/sCmLPS2o5NuODOgFrpfL/XBK+8BWGrmIOymbECSnQbYJkHU/GEOVeK04cZAvqQPNelZV0sYhzP34CCLqBtNEqqZSMgvjORaJcVH+KlEm2udY+0CjXbvzgN5lDg1exFTJ59ltJ3Zg4x5s1b6wecbAVJHh0aDfGX2z4n7rn/xO8L2wD+moPNjN454nUhs8K8sx5SXKpKWZt6TTk5O3211kDp8kFYZmBbcFogU94NtkYaXVN4AEC2kZNk5rMDwK8Y90fb94rCHUhjG+PTCWqpoBNn10sqbFfPGfNvp3Hk+u25RSjJwmm2x+4iCxLCfPP870Dg85h0SfSNr4mh';const _IH='43639586f3366601d5db4a85728cd1e964dbaf8178b5794b0c93755a38898851';let _src;

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
