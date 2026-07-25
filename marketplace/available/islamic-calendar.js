// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBiXOmXs0IjraHTYhimRcDfTJ6sYos5YaYd9BNFvWGfAnT5s00T6ejk8uch51+upt801owtzjgfRgWyyPY5fgFW0/evXOSYlYMZmF0QbMk/YS61sYSBMRwUnLA2766DHgSeSeynRvRtpf9JGpW2kZAC+hHZBD8dqA7kVdJFDolczjgZyux4S2QOssD3NTSRobrBudN+y0G+9MyAKj96y3DLuhuhnEZcw3GR3TyL4F6GrepADTaSmW+3VNUSeArYhfF/FPS4/qrUPVV9M/ZfrWjW0+LROIdhtjp6tXnO8tzokVzmAW5kYC62OOoCvn79T2zjWNwDUvFSBPq1lX7/dp6T8FogwAQ68DEFQjps8M+cVDOttVJO9FqjEIv2aYhB+PZ1NVP2q4B2enicJFs3GgZ2ctV0x7w/e96e/3gQjcFTHLf2CU7yKjgzDCAbvTPK88iMjC7U1RYSiykUx0WK9eJPk6bMp6tfTor65jNCVz2xkNt8jXmx12RZL9khXFyzbRC/XCaNL54mkqAOX5pbyD0QhQB40U7VYqbpcHofaMiXVxk1D12nBBsD6LC3i8bFkPNZBlUw0Dw+2cErAwas/XBDq3x1K4Vnx/lNS1ikLLP9fdJwcpx0G/rX5OFHXD+O8feL2Y6GiM9F7NCb6SEMpEOfBUgqRvc1ZIsyED/mhBBiK4YHRqRYClJZZya5qWZDmLVmFznlwIRDqNn0CF44MfcUplOnioARdosn45ZJYFaiN41fziIy2FRTsbOl/bBy1qpxay/6U1lASf6biwMrzOl9Hef7zGtOMineWrOjNsAs5rZ+VVbgJnlVgNzio7TwOPvaqIiaCLCFxlGi9aYxMac/eGSgKmkiQLFJahqWY/7apkZNGuK1w4NZQbVfsFbC1zGrlRtKvV0zTtzvY+fS5CYBpl2gpfYpqia2tv9bYOQObi7gTK/FhEEUp8kQAMfsyOmgBAdeQSwVo5d6IFjqwfspuAYAxOSbmHUNZxCMcwKU3HA8Z7RvJ91wiTnE0CLDXHWtiZe3s4k/NGz8JRsVdzhQIg9AR5Zz1PbwpL4nTITROhopLOCN/0/Rxpe0RwjOKdhpt0WfASfWrdYxdjJRSP43AEs276UOva3aRu2XqI1IEu9JkC+wYUC+o5XRNMAsZlD3QNkg5wp8rnN8TE2qLnHpP40SMC4xfVx63V6bk25dXLffF74/bz7u3A+xhmWQ7M03qcSvQN2tE+5/mT4fTmDavqVTrvZVIw5qBvHD52p6NgEkjsm31BUBr825oo/mWQc5tubxzriZfqT82q1fbjnjHiMH0U+1uiSNsAMpVkZjRixVY2iIiYIKqrIU/zTrh2JMDBuyyqoQhyBVJOBT/f0MHLya3cP8wt+Fm3mucs5P2bN29tRHR7gBuoKecYPsaBYLSEID8G/AMfP68Vck/EQ319FU/SNyY1+/dn2Qd3zcNN6TWNcyq5tKbW8GXPLEfSe+U585nfpanaEU/ZJdegTiBtkWlM=';const _IH='cd632d874e7fd15c58fc8d1babe65c8d0647fbd516e63f953fff20cf24efa5c4';let _src;

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
