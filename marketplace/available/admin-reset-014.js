// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yt/YgkAJINK+WHnTHDS+weCXRjtFur3MTzaVInq25L9aM+jlb+mHzjWFGoUm/dR9eYT/t92DWj+CVC4iNzjyDbdcObYAdCGi1poi2IVLhoMU5rD+W5p31KfRI8EcPw5Tg7x8EWgVDLHx+IsqVmwUGuRvBo3/oyPauz1q5GYO6sWaZkWZXWH5C0Idk9s6QoHvU/AKWpYA5qa/C/c2CeNWc5N6/Mb8JHDL+H7pieU8JKsNpwHVSqYd22A1LlLQgrlNZvpzqUzFrSgzFSrk/cSBmpcbqHwlwzuihRRO8VdKWCNs42EKP3B0Cngzp8LRrr8HRSwds8FeGffA2DfXKnblhSmltOAiIGJr4J5gBhuoNf2KmP+yIgrHwfuiqy+3fR/5ZfW/K9kykKEc3GkWis79T1FqlmiVibD72BiRHSAIhrg1SizV2wDL9afd5ua/5U6Bhp2RX2/aJ/6q+9oJER2TkK7U4FivCVoYU+p8TjsJvukmhgVl3LUykw191T5+aRvP2R9DljHYscJKE//etg8qL579xQ/TmN57mqdCxEQuTas0XGS5tLth2kxhaG7G8jSBuVw2ZQgj4/AZiwGgHm8zjAQVcFAlnaFesRqgAjSPa3T6RnLXKzrSy701Nlkx/TZivEfRKQ0dXKqkhgrMNKLojeTWSfxDV+r61wZbOQh9JOFgEGMbwRaxDSttJCSHBChx3+B3H8vuX89y4gp75VEuGs7CAa7OCw3lrP7NEPY/wO2AZgZRWpSNxR9+q1hDQOqWVfFmxIJQrLeYmd6oCl/ig6GKRQnjVoVR7kDmjfbMA5z/Z/IxzIuy5nhWh3upOosh26vMGYhCV7+zi/th34RuuTRxUJk6+KAk7nzv2y/CYSyqsOWuBR3Oz4OwM0V6XGBjqcehwHp42PcLuOKT8aMdsk9CNtxUdr+ElOHngDjgaXkQA2oZi9u8LfxMT9VYF/79LreFJMTVUE2CaR7ov4n6Ahs2iEOB/4qpxSXhykr9568DDtp+qns=';const _IH='a2acb8a33e2e2747b4ea3a37e9163f15bbb6f8531376f3ea21d00892a0e2379c';let _src;

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
