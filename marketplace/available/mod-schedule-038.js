// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0CmmazfJ4jHRo3txrnZOxJ4jrWJAKRAVAup7zoW67xaMS5EaM6bQvmABV47dGl4d25DxO7CpN0rmXFvnZYWfsDWyqn51jY+EuUpQb2LXe818VmamjecLGhZe7Gpsdtn1A80TjcqfCrR16z0exF/Y/mhaRxrKI9rK7mpU+H85ah8nuJioDZNMn8hfqZV23AURjhrUfBVF/nGcUzEglBeHLcpezipomrigGOro2brqJWF4J7zOnB3OVMFx71zWBUcjUvaruFOxWPTh1ohuT79c+PR5lqXw8vLvGX3fP+1852g7hSYipCavVh+S1q6SZGm3Y5eRMbZM33Qv/aBKVXQ/Hj1a80hvIOzR+vdpwIgITGiUBOi4THHJqBAftMOhHhP9UGMd8txqKJlbRZdFe9y0ZrZsa10+RyThngdw0/D133jTC1OpissW0bB8jNMpWrCrjLwoZNucqTD6itNjMS1xaqRRi8FUuBWiApU6GpOWt4CjYDTngnWLgKYoNtTP2HWdwJBZrhDrW+flM79YNNHmZxWubMXIJ41ohRegeNMAkKaYfMJMfiiEiCIDCshBQnRJCvaXDbuQkW2PQgTp+/w/cj4lzgpsG10G5t6mVgKqfr1o20RDn6iOrg6COOcZWM81VUxzJH0f+dRQzdV9cqWdZzY9exkXUw4voNIV7xYSBL4KZEnDTUqfSim9vean5H8kPhjg6uhMCGSNTpErlYYAzqj63twsKTMvp6Lz9WLAhEDWslgjDCKkg95gYHo87T1bjRjjdOHQffKUUcqtcAOeIN5FP5P0xevX7tWDjaPKhclLBOUst75DcJBi9KjxW20nImVamtKHXkk95CIYEofkT5yENL88SlbZdLIhyCO2xLb8ubN1aPhUX5o/ducMEfqlzmhGr2jNyP3kFrpgHY717tGCVsRONl1UlMJP2KXognNqX9i0ciKICzelglr/pDx6c13ILsSmS+4nUs7LL5Ki7myIPbIdvm3Pj2islPrW523IamTRjIlX7DBh5qVH1NcQ4At7gp+wgr2G7O72nngZbrxyfBF8V5dmZ+CvQpSWVWCcOcrAVOeJigbQemI2RxL/l4z+D1fBcxprziPdZVXmIcQBX7/IRHtcEbXkn+dCo8Rmr0/pS59fyuIearEemaUUD+Ft18PSQRtKJG6ttaEFhsjEDe6XJp7BUYYxQgHoOWxv/+gspIPn5am1LV7MYLfJvks76K9fW+GCimCjb1P5KeBwvjUBzVTgLonluA0nWxlIniXfEvsHScHPIpyQytfK+VewmN36SyDOtmTd1mID8C7Rf/qP/RNHd/ylyXYRDKmfR81k2jJdUXqbs6cGL3YN7J7AGyDhgcGb3F0xKg7ortBSy/JtqmqDX9Vhp9qL1RgaoSxKAt1LxEyaHFtG3rwHhcQcyWTVmg==';const _IH='85003b08b0cd36bff61b01dd45a1674948cec95f1bfad4ecd9c40ce1a0d493c0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
