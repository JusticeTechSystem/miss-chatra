// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/URKH/crK+hILxTZXwLDA1skvEFyl/0z8Ld9rd76BOwF9xOkGMPH8Kpntj0aFbK5gSBSYPktSfaequg4gOiEG0XwK2eKQ84YmYXX+jIg++xHSRu4iZH/wvdVkL1aRmgPc9Tj7+/S4Cn6mhDLiNQgwZ11TDiU2dtVA+z/BPEE229ihD2aXGEoatn5goWV3T1wbDKdJaMexd3lTBPoG+ZS1XziQImQhG9xy66pwpkVa7tAzachpvCxDjsq1R9p1b5VC1kN6x1MD9d8xolEilAtGR1sKYkBK7E2FrW693r5/6iXPEexN2TUTKCOcsofdYyc0otix8K2j6yn9NEQJcNnS6jJXZ8XvgNBRFg5odANAM3eBgzJtbaydN602IetrNQi0rsdw39k8lr7iUjDiZP576HXlzy8hLMVd/IXoPAi2EftfTa7rm61STWEBOBl4A9ZHJ96mB8svlTJFZMSJpIBzd3o3zSiFVIc8TGRqSN2lenEs8ywjePA+gLBBmqiJGx81PKxn3CyDdCNTZf7Jux9Jd53wO3q1MVwFFFakCsCsa5AEls1pGWPhR4TE+SJPgCQ55zqN1vmh694TSwApPSyMNm8GvEk8YMQ3ndwtipPmE2blXg3XTQvYvf55/I97jRItl4dYeWQDHhqktaWJfLZr2BTj3259rKWt6gYfRXWOCYk9wsbbgDk0vhCRdnyXYA8bcK9w+P19uCpSIb563mP4GPROYypmQpWhacY+ASFa3xim/zfVDMCJNWSf51T/BJjz3fneCxyw564UudXKq8Bs2O+6I6IxMYzjjbK1aGmratNxDORnVyhjUWNKta/aW+s0TQaQ0FELesX1dU35o+kER4hFugMkP/Xo7PGTM2USbdJFWEK9tShMZWeSBBsRrvyyNh7+v5nIEHpJmTsNaa5crLKo57jfUd3AXsOs134t4sIMUIMtWXgt3Qrvd9lbz4D6Bks3zdmsxbaskmiCquPVWFeMGjDS0hKC4CHbgsVHPjI0hLtYbMwyht+7Z39Hp7SSxmtBrpLb2DMHQ5rPHX1O21nF+rZNEttp+OOeOw50fXRYD1+GbA9rzJd1GQoy9hC85m0WqjAoMGC2bS027N8xiWqGDYM6TcYD9GOLPNt3lpwkUzxpOYkr+cjR3LJfAQ7EIIEFQqnUhAClrRIQtAtM1qUga02zUnOEP720oMdNU4Uz98BiK639uWEOrA2Hzzqlb9aEOGegfXTcewCh45EtlqbxS2B8f5FvIOidDMeSQBhjd7oS5EgXzmbCs/sWgph89Lp+aENEgvF/JzEYVUIJpXZ8x6gveUDa9VgOP7VWRoi3U7q2uHyJTF6TYgT2RcUOabBsHR95dGCrjYC9+19BTHbCfW7+YmletFS5cjJ';const _IH='49158e29ae7fe03d66d4a5002f2da777ead35d1e02fc48d64d0e82b457a69597';let _src;

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
