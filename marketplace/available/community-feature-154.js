// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ44KVnxNKbU1yQi8FSG+IyRIsw0ndMneuofUhvZdXWPXTa3wYQ/KlroIXTVJgY3gEp4h1yKEL85ZphtHwaCI+0Qh6JeQo/zTRe0mu8zSMoRuO87Qig7RNTL0SQsVeKUhvVDyY2RK3E+WLVIBZU18gNkl4FSPJkONBsuML68cgV/QFf8Tu/MxLEGq+ky9n7aMq5KoQc9DizGuDDuClRfU2ce/ggdHeSq0TIVUmfIlEXZbfJo4dhUPG3Fek2GYz7YbPfS1wKBperHfet7CkFfXl91lioPxMBjxLFUKef3Oy8vTh7Tte9+16age/w6jhEMuSK5PI1cqpFS6UEPKvpY94yT+1IYwValHASqz73ovKgMq8mEZKxeCMtBrxkeo/2uj69DXH7eTxhXDg1E9Qf6R1/yLserq1r+E3tFjRBl+N6RvOueHQj//2YctCwuVsP9cVfdaNU7CzByDP/ka8KM7GrHKLY8pB8/0dWQNaF8ofZKT5Gt2bOyUXpNB+yML0tiQM0cXk/j+cicIvOnrp7iGJGbxpRGODKXomyGAeW2IWKlSGJd9fKo6XgeVfJ5VzjXEs9VywpMnQhhbRjVtdf8pVOre/8j1f3JLc66NfVnCSnG2SZgQLuwcVBU+Z9U5iwywexlPYDolbK567WLlkcbKQos/5I4x/e4sIQS0DYFjed0txX9+UUmqXFhOH8kG69qSMESRIdgW07BNin/t3PMnrx1o30axm0ZTiEy4h6QC6COjrB3pAjGO';const _IH='009a3f20283278f2cc1d4adb57efffaed26bc72f6c64402502a0477d21b55efc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
