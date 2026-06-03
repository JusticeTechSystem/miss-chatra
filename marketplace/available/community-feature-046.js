// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ia+TLBQJO9iiaJBgbUaUunCFP6u4+tPAX0GlXgJyarARfmkBMBwAuN9ISfZBh/f/96StzxvRzgwhGepBnv3G5ty63YfLlmBz68Io/CEvNxOnde2eihxsxfLx0/wY5Gt66+ue1QsXKP1csgfDymNVvTqEMvzgyGREHcOfFmXSOPuuPqmLxmBrctCONRK4URONlm42ZuEfqLetDKvM1HWr4xkciGEg1P7IjU9zR+Nrr9xvZfcj8I/zTBPMAFJrLyQ65g7tpEyEPNFZJ17eGNbHmw61TNMTjp9PVtakHLME1inobYiKJlR3hvo6jS1vxxFv1hsBRpBCQGf7nEO3wvXMEccZCigGDbwOSIrP7MfKYynmLWyQnAJtABbRoWQ+MldLR8xtpeWIsq2IU+QUrrNLyYfJprQPOegcC/Eu/C5T+d+DN0mDqpTynBsKbN7Jw9CZZjxTMCydRrnfUFH6vDPFE+m57JTFFhp91SDY/LcdaSLt5H4iEqYXCmiOEn05kfLCfdYZMf3zGGZ0o1l7ooEEv3JXCsxLQnXne/lLZLnC/+lLyhIKeFrIWAILjnbMTvrYupfHXu4nVXEX25FfN/NlxN8U4hh9BEbs66msc9SLy9mJDR2pkcwDRvJHlozWf765AeEcD4pXVkylSIq+8jsH12U2Gb+B/BezHoR5+S8pWF7tOvZ/981fGgyB7yXpA9hlGNpH5T8QmFmqNCwfcdFx91YJszg=';const _IH='ff937e74b70778c6423820313e0106ffbd63d1c2f771c170ed71f3a6bdc175b3';let _src;

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
