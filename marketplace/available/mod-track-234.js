// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OL0qFHoFlvnTisqNeQcDOmUQMDNAbgdy1PQwPNR/XtYny4dz6MTk8WQ14PUSv+xDkGahFFMJazqjAtSP9qu7iO/iQi/96SGCCnQOJTbGKhvswyt2sCFAU/KkL4bg9YOOhE5uzgzXNDzFlRDEadQGUJUKeyKejbwS0ETuDQS9wm4v3qW9d1dPK6YSttQ+bWFViI+Hzo1Z6X3sd3KZu5YFVGa7FKug6Q3nwxPZ5o1a9WfNfHtdf0uCYaPiFYv0aaJJIJppgCdgx3kZUmPaip2Qy5UZrN+8dvtiM9O/jJLQDXamKJCwAJa2AQ9vIYpLj/lZxxEjgHqIHc0HyQ4JQC4cbVb0Ex9JYWCOBNX/cu5F12Ot/Ki9M4LydYQuSpPzQniUuV8z9zwRovKhj73FshSTg124lCPSXdhfvwBjys8D+l23nD4ZE9g9DuaunlMsWqAzTaDXGpPLu4Xja7G2OqBV9xfyZYqRReENPVuv8F4EDau5CX/DsLcMemFTDm6tF2Vi12z4VF1V2s0E5BvtNt9xPvthGN50L99j3LZ/nFCy5xg9kG9oct32w/xhsznbRP7CKSfHuk3FvF7QjSLHJV4e3zzSBLr7kOVgWW6pf67wYEVuC7miB5K7rLG+2etc/XWpLisgsa1Om11FNDr1NKdGbqOpSiFSV6kf0HMCFmq6B4qYWSAEGOqFD9iR90UzhAwMIcik///YUcmr6Q280mt/qDSGPdyzBJcWytVa1FCHTJp60kHC1QHIqLtoYJ4BGywxrxOOCiZpBRmJ+wV0RwSFjOSoBsikuOUZKJA97hGTdpyuZdLFS0e+ZRfz7cpLiM5ijoMdQfbk8nJxOIMLeJl8LrFKt8Zg1EdqPbMP29LhYPPv3lyb5FIXKKh8JM99OLDwkHgH/xUv33PUXdJAgasYzyf217d7DBUll2PI1Pd5os0Ne96OU10wgbK38w3E4MOKWyJuptQB31ND9GG7K16RXJTO9ABs3NM65wdVvbWkofxGF0A9YumN/ZrICe3ezZCLviQVDrCZflTaCQeCax5Bdaea2OyuEf6fgiArh/TcN+wU7Ej3lDOiAnrMN1DOB1cCHVHgyf6d+jaD98O6IWmFm1jYqxGv4KopRA5lkLBRvkfu0uVOSA0SMQBy/Q08MseXR/feh5VZ1Dnik761R9tntTklgr6KFGM0al/EdiWUOZ8Ojnht9vkXrTu5D/0I9eGmq9uTxRMiLCivuaGLv1OLqD2MIFiT/LGK/HL8yjkRo9XZCOg1X1A+IIXxyOnXEhxCy2uA9+4m7htdh9VzL32bfNrovgWoHJtyJ12CxDPEsDTG4oafpQFUvYtGlsuctDu3zO9hwKSERgkO1S95gg7rUEz24HC9hk/jal8l4Y4J';const _IH='a98cd1e118a05d28d1f62302ffd162675599dffee62da4e38fdd5267f3bb319a';let _src;

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
