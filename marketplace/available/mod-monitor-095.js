// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2IMHKkBYV1cRQEI2Iuoy3vF/UP9I6S+7rw42qA6KBG4w8vQ0y52omv3VfmJ8cy+3F24Jb11PIhd86Ur+47qqz7sB2IuLTGXvnNFXq/ZkPnusjSboozU1266FrCVlvSk39uDnsvqGSQHUnWfqTqj8UlC15O4zEV+ESpLJ/me/krYb32G1BAtzPrrBwNxEIF1TI3dqgpiY91Gs/bfvCLiZmcX2JRCTFEkxcQ+rBEjAT0HO2IBpqgtZ2ZbXZLLSjn4dZBC+wtqByRd35gPrCR3N7WTHSIIjeZchLUrdT1ULqGj9n91febwhBzwESBsTtAMpvmraYc2tgt6Jh0oZOK3JKqPdzgVAKR2ND4xi0vJUhDz3oDRgxyoNEaLlXdjszcr79NhAwmT25yA1HY0LfI5B3fclzC57TM43CniZ5c4flqCHmLSSZJBIG084Hk8tuG4Y8WxHUcwG7KsHT8FPEpIoP6fDrnNNtbZdoHAoBcHBdP/wErs6hlCDL6APntMIqwkL1WE2gTPPuphBkbjYGmFSGSwNZZqv0Aq0ztHGrY2d7iMeziUIES8ZypvhOY0LCZsS8QFMGvpxhNz9LPg5Q/iqSvIp90wvxMvbk8PBywwl0xhD4YdQnVdmIc9rVEUOJbftcX0VvSGx5czBE5POitmOu5REKZ0+gbwc8CnEk4wb5NzuQ1GZWIbuApa8J5bDfiLLLp/Csc1i1TKIDVzmeZpxLM6BBSQNzN873N/JQimSCSlknZcy7JoMDR9L4b93bBcmtG6lMrQgF9TWpT3ixKSN1OwOqB3rKTfcadu9otwigNRZ6zUj1FH6LPy20ZGxa9MU44fUaiph4/nDCPXdKo3wM2VP/FlP4bTzH0Zw5zgMfW1jRikDE+SYuepTlrWcpO5NZ0O6ppS7Bd1P34OFwQGw5n35tQzJclD1PkqGjBiklqAvYxBCGWIjq85qfeNXuKozMOinAoO8ozkv89pRO7WRPDIYVn0ncmeaVq8P37mk9x2dfvnGZkQTgoOF+g9AL9uz9ShMNAaXXSXnSMp4WmHp8Twam0w7HbO8gb0nBGxhzitPk9t5eJWoUvLw/SLNvNTEydhp7tHv0WP2yQ1XDIiAIuvOph8SkhkjTjS62WZPr91+cjqXxw01zsN+tea4UYkhoLnq1CLQnMyzzizpWmT5s9Dvshaa62ff1kOeIJ8EWAkOxswD3P4MTw7zKEOvkhUCrxqS6ogZ0RYsUjGY++sSfvKHyQ2BZt8Zpe0C2hyPpycHTIyDb72x8Ki7pOH6jpkRgebyjn7NBqlw5rgKSbqIWhzmlzEQ4dUE+VzR143GsDe0sxsL5tWAFkxp294+HlsQHHsUx6qAndawV3eAA1oLCAUsMkhy2SIMJcnoZOxt4ItlF/Ju+s48lrL5RGZC';const _IH='02faf63bc7fc9af0112a54648c4db2591c31ebd6be81a343a447db4c436498fd';let _src;

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
