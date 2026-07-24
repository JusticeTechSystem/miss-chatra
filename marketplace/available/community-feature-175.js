// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSve7MVpZDZyx/RvpATM+2J98ghe42fno+vNtj+DvqsmnwHLsztdVu99mO2QHi7zCMzi6gD0k2yus9leu/P52AqgJbaOi2eD9oReCtuY0fhShzZhvjOtya6kEeHaBImDUBUadugoF3OnHcyNMWNoxk8s2ENKf9Q3Hn1y6Mex689DHRtPPcSbWvL6ueekqy1DOx7Ik0PdVMqHvpte5gQ1dqVjRrMSWkX0PLHY/lkFjwDt8hSw384+k/zdxXyRttboJMv+2l2C7fiSsx46lfSYaC9nII3Pj9h/tTpwKdTZjoePY2ym+GF2TJJkV6NZi68GTIOtn/S8fj0zG/AMkte0qTR4PykBMmaF2daLmXeWwKu9uFU4fjNwR+MHvdvCghbXWUcgF/bVbzO3PBIC749NryZGBgWyamC9OvIkbsej1ob8mz9nAJ4LsUHbxyLmdXuJwp3i8KcE2ImbpTXrao2TCFYgGFY9ElK5WAvCh7ew+a/zIgy31VPThV6k6Pd9wtBSW2ezL5iXfroZNvDUS2fjHrAw/uufWVp5KIUOuQMRTjJoE4V5I9m/xlYwIZ5dtNUAMPjlQ4rixtk7W84t/KAhNbysN09ijxVQsYjXSJqUY9ghbVSjgCQGsTzXOQAqm/ammopBLQaQEwgg6dxkukQE7uuSsbEciMpHvUzcXF3mW5WRY4VsPpQig2UqVi60rxKU6XrcfJXYPzQtP8GcvAboaYaSuEv8nYC1Qda7so7T2tRQw8qFQMngizLjgw=';const _IH='22fa6e7a0ac96ba9ce76578ca8f62849aa5afa4febf02c3c05913590e986eeba';let _src;

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
