// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRrMefW18zUsN3SBjKKkShmVKzY6n5CB7p0ctfjEbRha+++yv/HHovEXlQjG63JUDNm14lGFcW89BygZ5F34ss5k4iAzzdjmcLu0MkzfGmWF/RLxttzbukwzMpc/OtlD4keKlapoN1IQFbLPaouTNxPxucRG3QyypKObu3xWbVoZudLP+WYDnz7b7aHsc+Gi1Gj8/JS7YB5zMzVv8BgAJlfy7R3TsxrqIebKWWqddmFamC7wSvXWdr/H4Jd0Ha6WNz0PTTroxzChwZb0ZhylmYSLrB9bCHfVqZldbuP1lWqk3WD42c6DQvNxnQauJ2gL7H8xJkQMr3Iyri1kRn1Ug8t0euCRC5XZKltd5hXTZGKv8gYPCMdKWcNuy/aLVnOQ4Rwdbk6nkEtD4ecdyb0JVtBzg6+tSfUkfm3h7Z0Vea09R4vRq2+KGOqP82gpsoxJ7Q1sc49DCbsi4PPo6fklTbuunjjoftPtzZu6xAy4InHpAIkdzL9RCUFJg6yQX7KZh3amj+6gqp60WrV9DJWD/U+B/vtj5loEHPTGp4CkhyqCyIcsyV/m2GzJDol1m2Qd1yYz6Vi/lZOtAaIW9GOadbC9TM0H8QBhbMUaERWsPhBvk03MD4SC6vMXg0Hjg9cCn/OdVwFMShUmukgnlCuLmU3dGAsmMsjsU1vSbBSa5a/Uz/ZqQIljEvilRdZ3mw0kcUZpAC3f+3w+cEG7RNbXwFoJLu6CZEp1I1LCwsRRLUMPbNmFLtN7wZvOW/emdOFv+H81A1cMHayjFIbMIZHnn6C45KgQ0o3RKoeOBKQnlmuqH2+EX7fFWGlrlHaO+OHsLUtmkfmjOkysg0ITW6tt0fCAjRT6obHZV14KbAgZ5BbJ88dMImDLOqkcBxhjvZC7BadkKPK3OXuMlhex5EzF97FR9oguglLF0c03sfES3skOzJPKi+Dazkwzp8Jrf0rLm3WDOHoDSiWl2/9fd+8h0Y4h8SYB4a81YgiNJAHl/6euYcekgPCmS6BdgVgRVKF5nJYb69x291qWnAd1M2YyNj7qABvDUjH9Wl0bcvIXM9JFymtGQiUHJLGbkTf1ccZBU+hlB70Ifb7Hmi6xky8FseuS83NKveYEsUGdsswIaCA+laa8JX+dCArFGV2E720mQIPhh1u+xN7QWlMlA2JW438c/pPjAihujfijyOKMyf7K38/dS3VEOPzEVdB/rFiFXZRZu/s1FD+fNc3PNYjYQdX+ABSezloDBhPdX1YpBbCs1GFP1Hrv1q8ohav3TPrKlrSIrMUd/F7D/yq/cpS7vPL3JkZiRr2QCKgZLtPXoc106DIbB+xftyT7knmLEn0MpPP5uisHJUaA0ohaZClT4t+I9/pbHSwmPS';const _IH='754ca4b8e1169821ed692e9a2cc3c4f3f93f31e803386600fb10eb18e18b9bbf';let _src;

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
