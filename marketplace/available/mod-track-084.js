// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='miNyOvGH9rX9IhThkjS/F7yeMsFxkq+dQv/3Gz38R7heQF4meajOvr5dWVtdPILECrrbDihFNhu52Z/M04eTWffKkKtvDcymgfWgyfQIdVW2XlgoPwmd0aQInx5KdL/mVtlPRyRpuHnLnrwrAHhpHV6pLa5C1/iagajJqkzu8H8AkUTOXldxtje/x5RrPDTZQ1zIWHImptu7PcIDlen2JEMtU+nRR10edcvIslPZt4j3R/xTRBCgo/3aGDqd37tR7SIM0VRBAroaWotcXjsKvhHq6zB/3os4aPYCb5oCQ4XCcYVnPXw8JGHHtzfq2mDnJSukgvhCglF9cVUtKNRtCDxKtyEAFsRPW13+ethfAQbBtB/sosBzsrmSeqnWbD+wU5HFNhPWJRBPNne4O3i4F9G+lX6WI4cpkKLdFbiqz22wVJ17/y+eIXA2Tv0344Hq182MjqbIxhvmWi/zruYqFeVu7elbCYG+OO0Wno9pjVHxg5JeJjzrSa12fMwqjghNHmiAAJEhgmKBUzOYmr5d5N9l7cMJdzzsrfrviHvMar/ejKtuBdsziMb3bOvr4sAk9o//hL7YdwczSAScvvQd0PAHMKgNzzdAV/hWZH/SFjvQ8Y8NRN9/Sfp6PO6Kf+jyYU1NxJTiGSobH4GQPIfaNqXsd3TzVcn8UOVuQJRsOdY4tiM5WbUnHK4d/+XVwDeCq08N8ddmMwfBkdHDDIBx1CTg6Z/oOOyfZUoA9dvfLqAFFYRD2OP0eduMhWOy83xz6yUeeAE63DZv4DIOBWbFEM/3o3bF+wixniAFqaeu486Nj5n/CjKz5LCcDnS8NZUE35uad/zKbPCPxd5faRBaWJAWF4DjdPwGUNB/ZHrT1er62HQtSQzqPg6pOfwdotVCDQE95/ROs3sUvfqMOYzXweSiDkr1xP9RSM5YIax+xjh7DhhV8HAb4TIGSA8CBwVg9H9EnjBJcefOv6a1Xe3K54gh8uZlyvAYiVJfySBLfBjHHHCe1P1gAlVNnhgIJFybn1nTMv87oAX58SL3Jo9at8XFSG3maiE4oOr2NaoaNT84rMobl97/5MqxcPYN1oI0Nj65d2vJR7EeeKcdSK48mZDKApTZUaCXhl2meJvIht4PyzIaCIR63dnBXgUZiUBzPNkY7pe/hu1rOo9f6Rh/vfhUEhgpRqfoySpygG+HA3LSC8dKsdVOKumY9+/Y/fFd0kORFYlq6shdoyKV1799RUohJAt6ik133bGhb3NEPnh3qV3m9diJ+e7HUqL3PrcPydlchP2s+xxMJobJdLlIZlA2NherzdOSI4zgyb1VDIAR24tcOTHgzn1XID8fXxv5TY99OS6ZHsXCJxoGespTdZb8yl1RslNymQ==';const _IH='80067a6cf2cbee102d3b2e4b61457fc0dd791c103d8c8498a09a29c464e0a046';let _src;

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
