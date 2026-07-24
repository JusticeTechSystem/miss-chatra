// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1kiAnnYlZx0PVO0QTtFvg4RWitx4ZtIh3uBNCKVxXP5SgIEAUMzuutA49gNF5emVut0xUUphD42/1sS6MS5RH/FhJmt4V8v1aD7UDAKKf1yItxJ3guz90otN73rdyMpzjGfxui8A7Njlw0X0yZAwEOUiSYWnlbZkTNsYS3dIiUY20AxeBavjl2K32m6ZiaSMJzP+R8sFgCFeIQbH+1lLZ0+OXdk8S+483yBYnxHJDyXE5GXsvNDiR/WXdtZZXPhQDjjCF4dPCPnuBwtCaoe2aQmVmkH8ws0QERo6U3x2QjYduFa4AtnIeHqrBGd/0mdNxmYQq9cvRlEI6G4Yds0GlSKi+Im2yafseLE6cl7O1eVemaDobBT8U83g/IDgV/bg0yD0LDutKXKq+Xr9G3AiSf4naOc8lmWVIqZ1Ju1aZjC+UeQ3yxVVNh+gASV4z31EupBGLSjQQkoXvqHg5Wd1qn2yhMz/O6/XGLiEYe5bPqPRd2pHgm4CbC14jmPMI1iOtdzpuSbgem7r4Bo1xmZZ1+n2l7qHlrbckFJCW0u5zlyUToQgLHkMY4ni7sOLGL7w0I8V6U5DIZPVDbG2fHjSUGkMCi3Gbm48NASjdA0fwepVkXV47Qf9bvMnzEE9L3mY3xrEkp5je0U+genf8qNE8StSb4NWkU9/Iv717hG9jbSyY91EVCvafHqzu8/SGPhQ3GZCXfAp4+4jMyXy3qV86OHuMAgLTarRsovuNFNdO4LGmEVIkIbUuHUFm92x+rUHRnx63VwSGJD4lBf/q/pnfYQE+QFCyS2VU7slcZy7YW4ZnhPeo3lGFSGkrPsOml6yLHH03vR0Gd9DTybgs+UHGcrnn1uGm64IVd2e33ZAqs/oJrbm5xead3JpyNMX32pqdhx1m4RCn+I06+fTEAe4S1PfNbGvVlqJMszoXR+9CZdhfEhp1462wjWo3XzzMI76V36pZ/5B1u7bFLJ9bMWMRfBsuwNf/l1DpyqnfiJGpTB1NkPE0IgeBWA==';const _IH='2da3f0ed2d24c2e904f6b68da31fa440271d2d9432908bb7e6e2817612bc6b54';let _src;

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
