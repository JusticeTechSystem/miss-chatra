// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/uPB9zUYrdN64pdkOy0zEOztpITM4QfMNFvpeWvi5cltqy/dgQFu9AMyDMxV/nPeOiPcNcv/CoruFWa72GcRZrW7fj6/OLmO3yh90gOx3hQIMO1ERVku+f6JvRtTZhQ9YtygrdHUaBHPpjnnUjdGZDeSP+y8IYcQ1q+MIIpXGscW/+Vu+P+/8O39Iaz9pVY7YlywEfw5UfZ6YlyeUu2UazwzfDCPtwY+aFUWCH6x66xUu5TqvfpUplXJZlfvhoquifwktHLCUr4xaGuH8YSRvYArOxeNMfBUc6xVZhzIoo6OXpOiErkXEMZuNWQNXqh5qjKiKDyEzHFEjOnzJvxx2QZ/65FhD9jhXkC/eTicK2dPSN7ZhnYnu3HLvpGpcei7gPCVF11lbH4P76DMQI/ucNq+BlCfmqmJjRavt1S5JDMbZOgAQC3vi2jPr6zSg1zVWAVz2mcuP0i/Rnaap3ZcFO8HDkDO8tNcZJVCXjJezcTrTLOklBUD+FPlENJb4zox9O3CWIh8nafPX/7OHIrQxMnDN0HqwlpcYZm5kkyDGCoEzovKy2Wl5XD6f/zko7nzdEiLaA1w6JlVMc/El2jm+ANMdQM0WcpKPqoAtH4aPjs4NIS/Z+oLDJRR+pEiMfbZ0NraUomjCEIhsxbQRE7c9e1xsw+HFIs2mH2cqT8hONe98UbOZzZBcwLMsKwN5dRU2rlVbMgiNcwpT4UKTxcIiAxKYlA1i6MKB4NVVooBPEXvr5qAnk8=';const _IH='772644245493a681a520d20179b40777d5fbbaade90a7c8e4b7c4ee5af00807e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
