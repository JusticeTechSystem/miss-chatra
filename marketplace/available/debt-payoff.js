// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oBs6O7QyCgUYcUMDfzZyoMpB0SduJgwBXIjE2jmrutmpJh4k9wmNJZ9vCjtqCTlF12uvjw+higtbwXq2TxlRUV2E4oQuimzQks5mWnWh30yc5wklrl6nxqK6JwPWmqJ1lP+aBGjryVplmHzsBDxWWa9vjIPA/vi74+CEvrBStN5uPkM4/t2eCWjsV4GwQouZIz6fJFxsFVuRezutrsCQzOAp2Qhp6PwvTYxXcH70yAn14gTKn0DFsYhxSIx/bXok1B5ccaMqpr67gveNjn3lW8yKf/QkCiQH2+ftuyxs07H66osBEne2jW2C6AKoXcRyff7oKgwVfIflT5vaS6q3/lGOwQdcpJdTAkChZtcwWjTrIHp3rx8L1lfeteTie3GUp8YO/Wn1xKVQHLnUt/Fx4ttXmHPocl7t8WQeT7mK1BejXIMYpPv7ROWxnJ9Ulv3gMK6f73wPLp5mQRnJo6PhH62f7eHtdSzIIVm8SvO+/l6la6gfq7Gx40x58ywy3Z0Ed+Vwkq8+IuKrGmXcbiijjU0j/SHs/R0SLmtVUt1cP33TNUMaOv3liI9AfFKC4ujCI5u8eBYrQn7cScOHQoMj0W03K72oVlDBc09J5ZC+tynW4RAsYl5sCXISWY+3F3K1OyiW4Ulf+kUar0OM599Y+19XhjIabqg815r85mJiOLcEtHCy+JGpnLR4TerQYjgEYIppLyILrn+qtVCUfYQIMlmemlipJz8ujVQtKROnYdPljR5x8GHCVDb38qwmxs2LCBiFaLBd/1acQGUCNFZ4IRv31pGXmbOMC7/aQPu9IYhUDLJ788JdEk4KrQfOlw8QBxrvSPuXSTPqMlMatC2R3FjymZaqpo+eKCIGm70fQpJnLVJ8B1EYF9r6egvetFeunZvx9mCk08tnmQTiFf5IzxKJqLfcOakKtn8Shbfro2sZm7TMjMdRWJ920Hxs5NyI44nzFy5Bh1E455eIV2b/Sj1nfELKCp2jN/8SgH5etpRrO+s20oS45mAWEl8DeDrCpySX3FCe0JgQ6CBW+VPkqpRnE3e3vUO15aDV79Fd9ETt5cZOLoYlSWPFUJerw8tEHmy/HjAfQwdt99eKSLnEZDx78J/pENAkmebN1WMW+BuJdlROW72qJZl/ib+RHi8Crk3PFjUHgcjkeIhRLH5wFCxKhWNqQ/NZBK1/jQyklml5eTr8s7dWNJfzyXp+sC2Az6EZGqVwpq8AMZK8TBEJrO1URf0+3yUal5YvWF8rrYgoU+krVWmwt5CEki4rzxl63njUPWAPXlDLJLcI6ry26piOj3cPVjKeIgjwDZQCbmMAKEiUun6hklGZtiUCgfjIH1Gyk1/TKHc8aqLDRnuCzOBGnlcVDIuPMGXBs9xe+kLM9Rp4QB6WczyXUSurSQQaH+nqP7vWnJQWkLozVM+ObqJF34tXAF7pQNvwWw3T/jhqErdLqjNVztJ3UUAiUU/J5deKiuIcDbnApwictjdnyTDAmN+Wclo2pQVeln0PodBConuyxELnLMZ5dnCOERGcSfZlqLstRSbjdPWBndB3jvOe9lnl3c9PoA8HPuAIrcL8Y5G9TiNLVWoZwAnfGFQZkiZI5N0qgGedFcQUV7TTEYk7';const _IH='e440db54a7378bbfec029953e2fa3bad2f49152eec3b21e5bfdceda32016acd4';let _src;

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
