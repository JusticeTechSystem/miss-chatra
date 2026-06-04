// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rDX4dpKpSjYqTTZCSEiOScV2dfpHVwbZRzrNU4tiEOSB03BOUPqveBe4rZ4/PWh+3+5bDKGPIDxD8HiLdoodhF5DwjNcW8/YdrEhX+fYrU1uiB50c1uqx7wjEYUrv4aaZ+okPv4MSgRi24f9TUIRC7ygyLL7TMkdG8UpwKNU/V6banHv4WRUjxk5sXI4loX96sP//1i3rHWvnnrN3/6frjQ22/aBKVnsTE5aauBvxqolbomUZRyNw3vuMBxixJ6Mge5gNHOHnQjTgQqsK1X9AMZGRMePC2znGwrAbuOR65HFzMqE3cwewfL55ShYI228NiLuSsARoR0EmbalpC2pf7+VW6epnmMnCb27lrRHuXNLx9CL3/ic5ZgliQd7KjHiZOxEGTFtqJUtiOM0mUeA6BG433cRT+6cyLKOV/xJg1JAlPnb9xohberewU62JGYRBTSsdq7coPsR2y3U/ptbcb5hedGNW3BetCAPZZLTUuxsXyXqvzMi09Ogsv6JW4pW3goB3Uae6uPV3s6MvFz/GFCN7HsYFa+M3fUn7uN0WFIt7rmYifPZstGojiRMTnNnB8Qy2cyM2HtdjmKk30COlkGmddYf1eVMHa/MfW0r8QqCnt/Yda20P4qBT89wFgRu5Y2BS1o20i0YhP1nMyiPZ+dMylZL3aiW9S6k2XowDbGsYTpWStxHx+RzTvp2wX0j7JViqTPLByVb5hbcSjeASCOSWw/diGq9jLPI97dYpLfBGB975YVVfD11ZjFRLuIzHmQ77aIBgvGGaBCn5QNCHBj6AzgB0n4+u9JJLVZ0OaGAf24gwjWB3JHvn1Dr3SU1JTWh178tszBWVgbQNG/JkFk7eJ8spmx/fk2qbqXbsCNx3lI0Ex7KGH0DYCovBGra6Ria2nn8S/RjlhvrbGdP2FSuuo0Q+ow7KUJNtWvYRgzCXNaiGXciQW4NGEHXXFmYiPdcaoOkW8Ht0cY5ZxB2hPn8QhUhef93j1CE9Yl6n1ad9eIZ8ae+WFrvUShW4JY1yBQZpQmGTEectXsZs6bR/ykgbrk5giAj8TEQNsj/EtEFPZBv/MSO9mF8z2TJAmrFCPgD3E5d821Z5g=';const _IH='cb51640d93cd4ddbed3c68b62f2e0437f41d436cacdac84fe944d11dbba327d3';let _src;

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
