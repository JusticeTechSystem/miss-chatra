// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKd24KhpNvIq+izFoNKUmJgeZSzdwFQP0/KeE7b527qiA4BKC1TFuP3/o+ZNp3BusBGeBGb8n68wg4RwMOicqlOWOND17209pmTQxr//fBrFXyQVmABslGiHt40u/xSRMTJ4Uat9/5HxBz9ZVtRPsFxeXVcBWPoojubv5c3noVcH63JIa2WfPLwviAlFnh3DBLGmPnbXQuA2pgtJ11/k64JG4I95ex0H6z/Db1oeV1LPWD8tcIg4UQpM2XWNSW5ILcGZs1+PrOfJriu+ywxwZweqoSGvtd37tSCp1ZPETZfiHuIxzgEPB84z6XlN0HeI6MgwaM9IAiO2HMITyXVMJD9h7wzuueuWg/odGqpM0g1G71+sgTC3e0op52FanvUFrx+L1m0HWsLPRhtXzUwJ4LLyFCEc4ZsIcXGaIlbVsCalzCP+N3M7RLHPYbTgxPOG/eaFpo6K46TI776+m8eoG1xfTguK/gM3Oj60YvHDKjWzxtSF3xKrGsqqQtJVgpzmuCbfbYn4Ggnfqv5EUWVdy/gs4UAZK7dLAPPmzJRqYp1ywiXxq09Bd0QhemhCQvqz1vSeOUWDcXsQ1nhYt3fTUkGklmiyb3rJW7dBQqS5EKt6wQw2PFJOre3cfvzMzNGxABMGAHXIOfn/cm6DBlVyTNXp4YKTk8uHLUk9qKS0Zw4jJ1wNLO//J8Qf/+eNAEm5hLRkIi7eXnu/Rre0DaIHAnW8mPJDo7l/2JHIJEX0G0Sn6TxITBYpXUq4vahWa6IlRQ6+AkRjMaprBC+XBHgMCbW/tIHNig+PP6tesK3YUazeisJ48n/vPsa8jvwFxTjCtca22gxGniqluezuHidkC62Gldx7IrMmbCQ7aga6EnIqudvfDuW0oBOiprXH4ExAGNnhZvmRDIDJ2Hc0u6NtQr1iI9ByMpJuzUTGS17kIUc1dIcTXH6CijD16Ak9vxBDe+vP+o1k2tK8E5M+2M0hJ8iWILbd8SmCEkd5z76iR+WdIPTKWEZloGy8luWcgjBlC7PTNbN364otPJSJZ9rrzmAIV00WVxxD+0ypEfLUddjomRL6PuYR2rGipM0RtvwE1Lpbvuxpr9dV51zXNMcrfa7zC8LAXyXXVHxAGWdHJm0xoWnE91e3fC26ipctlzklr+S/dqo74IAExAoiwvdqKII/yf5HxVrykKJqA91HXX+IP/Y02vQKBdR4G03ydrQipJdACHOPmdXWeS8zYSAZSCuGOOgs3zduvfl/POhtLNa36zdYnltYP1vMxZp5wbt4hdFyo1jvyxS0HiDXtJCXTfB1KvdJ0QReHrAhNeQY9DHkMuq6h82z8/jE0DCw4Rkzzawx0Jistxm/jIKsfJgOhJgFFS6Ht8IPetM1pgtvDNB/tYyjyWotMxMR86vp8qhZlxSZHp9860cDruxkc=';const _IH='6fe685678352c376e8b5a654bda8316ffc26767f9f8709c8dbfb2e3af15bfbff';let _src;

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
