// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQp3x7ayQDX/7cL0sS7q/3pYCPgtMoM9RarPIXTfzlZ9F8dO6/zNymshpDB2G5f01BX9QKBzWtZf8OFWuMzo33BNNN1kcjPZJ7CRMkHaI0SVyqTHvTLB8PW8STlEM47t7hiBvkHxkUYseN62Ow/lbWv39hX4kHaCEb/MT9lPur0qnUwqLs5RK2SbtlXQJwL6I77nmSoiK0lo5b0Fn8JOkxnHO/ZTpXZ5mSInnaE3rbPD4+OcQBukPmq0aJMfjnFcx4gQ8cnugE6/gO6T/iUP+IFPwye2XC6wVvmk0fZF2qOxKprhlDULtAq1wZJthZ5Gr5W2n/65kjNnlmbYcFmT5cHepeP9Gbe/JI8sIGA90+r3OPM0M9nqkw0Zrc1VLCIh7hnEGQLEa/1hYhx1RLkiQ51K8czllgU+vrV7sd19Qdl8LB1QiZgQNUprBdr6AKym6DFfL5GlcllTixgEiAf9E08ITyC8FJ9+aLceIKuLWd4xr8wV1puxm5D8J3JtXaoHaolzDToA2k5Tou71wZtXhWDp5/jZ8sGXQLxVgBfiXfSgrLTbS1DHf/+MAhfp4ydGMQC3GIBWwUawbH+vMxDgyHOyL+Mftsr2u/FNF8OA8u42zRsk/LlAnFrpOHnBTtYpBS653yzT9WCWjyXozs/7fnRjvgEmflZgyo61HntrQvPm19+s4a8Bn6YIXyA0KDLD3v3HTu9hwYA4Ld3uFR9Io1zW/evw648ZcpTHwVlU7vvPOQ1SsQqrgECXPQwDONODXpH+RYWQ+hRDZcrNusiRrrZhuLcnr7jytsxxo9hwXj+ZjnixGVoCccXem3KErTgTAjupVGjXXrsRj0sTrrGpItUCsiujUG5/6CtjBv5WpyFC3GaQB50y5ns3ELQK2VW5ooWGb4qb0KcjnUinkzxnME1hB258dCQKCJ4B454H/Gd3T7XK9wn2R+t1rwSQGtBiK6H0A6KwGj461MXaIB/gCoyYov2BP9H1gpuocQGwJnY7laifC/L3TjVjyPv8UOMxEcWpIX4yeScYOyX8ZjNNxfa2RSLipWc9ECevruYpLJyYWRv3KHUb1pEhx3/g0fz3Ko6XlaXfTAS2OZvyer4vnF7tdFRs/wE1r5AiQnRgqWF2PwthU9md3Oih3dQ8r/FGqlqLhoWbCrZ6t2ZcJk8/mXA4hMMxNFkxiYsYVdnZfQGe89eCCQRyPxlkXPXHknvCd2ByUjugYvwAkmRe/cqZfUHPMG4Em/nbyff0OnzOegxLh3vz+U60fm89zU3aq3RCitbd66Jxo0bZzne14GJlraUgS4PtmYVqfEQojP9kdCY/iBUpy6UgYCh+Dd2O2BvLLrV9GsSAKr7P+VL1HJJY1KKkfMwhHWzQSPP2zI=';const _IH='0976d480aa524cb58e1b8b8f0ddcb25681688edf6a5f9894c98833a4c6c0aa2e';let _src;

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
