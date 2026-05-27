// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6nujXlnrl/jKVZ8okGO/PFmRRtgbIJ4yg39IeqxXoEZfQOD0QamBIGRdHcaPyBjAx1R+mBuMpRVZtFVI0QPRn26ivKeK+mtpDltCrelH9FVPa1UMA/8JjcLYIIrerP1ik5sbsB4STKM5ESuE5ilGlnrtZ0POx7zHDQlhn9H54u6KCRvRu+as+LYE2IrO+jKzDqd2uVmw9mty0eA3D53B6EDPjmrfc5sgHiFdSqPPnGO0QZPBC5ixe+Wh1uaA0UmqpLLbyDPUw/mgbrqTuL+tPexTvZUcptqX8IKKOQ24Pl/K+D8ZYyrDgSJtvmnevYBYdpJj52jIU+cGew2XTof5BcIcuOup5tlvG1DxgRHvo0NsJaUskr0QMZXlA3gBigskjVOYBng3Hls25y5qQBLMkhPZBL4vtTJ3BxAYra+NjeaULLvSHb7IiL44OVBTc/Yz5tTBHakNfKTsaDLdhuLuO102y56RXpaSwZcZLTTYllgsfxI6SljwG+dgC610X9cvG7ccDDYVtQlNdyCa3HIiBBD0fPe2IWUw6OXcvP2dA3hu4RMSWI1kRCoBry9zOOsZ9A656Dr4lhY/9ifzCPEi2M1E2Ojhy9igDqE=';const _IH='c8823af1ea4629392d26b7bfb693c991cdd05a0274ff4266b3c84575eff8c8df';let _src;

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
