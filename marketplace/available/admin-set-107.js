// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD5+N8CPQtXuZ6/4PpXkTjoklP06oI2H0x3WMLCLqe8YmRokZpM/btjIWpRa/NHl86j8kaMSes6FIG73SOd4KufdMm23KneeoiMVcAGNaUaDWHNLG8HW6/zzzK5Hjaq0I18G3uWHFacksEZ76esg52T7sJaU7ZTBWyWrOiNQxIVHZfL/gh5R/yxV6TV3MjqEoY/n+rHheJgAIh+OOtX/5l1r6B6FdChTWxkJHziWEVTQOGoXV8NNz7Nzz1S2TZ0Bxa5btuFDwhOp1Ae3W5H89jIQ7iBDLX/23AN0VP4AXmpJ12VuF0eiIz64UY/aWq5u2hpGIQeIeYuPBfg7r/0hP986sI+No9/1iVBp2cjWPBtekheQhgCYNpFl4mjPZPwFAbvKcVPjRHZ+Kbh3u91iKiyeVmTftg6g86vSqmQFKEueQkcyK8LOG0Cw7XjlmKTdMhv04Hz2vP8vA5IkbPTdJ+L62g9D/gjNqQRu8m5hqIEfXSJd+k0ZYzlhpAOAFHIbboOHZqs/xPfVox8kRZWEfiMb5D0xv2ZD0OGmOj6bHO3xkcWBex/BD6SZeacNc6vjh5KxlxvNubORG8eBy3QPIMWSIKyP63avYeVXWXSC/gP9AI8/YBB/IxTy32MBSy1xvtMcSmqEO+xVB8iZ7b/cPcVho5NCu6I4pu94oLqsAS8CNj6rlr2b9I2p8CYzRP/ogTj8ylMBX555m2EB8uCjkHeY2FwUsZrJhQ7puZOEhZ1oHxhnfbT9ksr0LTKWFmuNTazMpLCsuoIXDRQ2EazPDyfBuJmtB7cmulffkGsDbidEjo8jNoYkIVfsHwJErbxw/TFr8nPfXPQPFgirX22echHXnJApHVgiooQ+fnmAfDGpG2o6zDjJDvQYVE559JPU/PivMrogY7suaPU2RZIddUZ1vaUeLDiCD+n/ODqRO3C2P/h9dcBzcPAVA+EoEFFaB+f+tKbdqJp1LylDmYp7Gh+CfIqUOKAJ+3LBXr';const _IH='560a93219f6b5e8f594afa5f1e89f9ed9e18671b6cc6067b5a8edb3e2a8e845e';let _src;

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
