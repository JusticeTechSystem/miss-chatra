// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hMvtSsNTLE3tqK7fg1nX/Fybt/l6q2bdMjBOyMDAyOvyT8kght9c0Kc9LcwEhmIr+k2sY9dLYEGu78Z5cRQxXTLrG9BkC+MxPFN3yGuMkj3Zo6aD7OB6iUSA6OFIjzpRaV49aKkEoNPrf+Cx047kU+5RfpT3b4RbAVoQp2hHW0lWo8USsUL4wP3uo3Fpillx0OuvIbjj2VDdJMwvqv/9saBn8aXnzdxHRiQFiSl771U1vX5XdoMGzw+wg0Oz/vs0SKDzZdJJm6eMspWOalwBu8W4n5GDllfa4Fc3gABrbrmav+o1AscjmA8jsjLiJQWtAxfKoFvl7TmBXQxtqkRPSdwoGCIqBqVjHzk/5B6PB6+MrejAv9dBnIwevDt6pcYPPxao9g8vYszebFaYE+y/S6LYXDs/jPB21BthKjGT5zJPdo+Rw3VORKOVlWCzX+Ob5Mw1oHpP0L3EnchxIp1z9PziV//KutaK/Hoe5oBfn9e8iF5jDGe52MoRbqfRjNguU7sceg+FhzeHn7NlmT5pmQ6TZPiPnzC1QpDseJ15NR/nFZfoTG7ZAcgBSax5DeVjMtB86cmPabEVQHayI/0FgIH+okpD8L6shQAqOwhFik32TBQpYdSZU7CrdJqzZ/JBXlr3pu0WkCeQorL1RQpMaKM8zfTjkrVLTMMLR3juOgn4kA3azyGL7BrCS0l2LIBOXwAcLyLx3vCiDvT8/7GUi7w7HqQe2VHfe3ybCFWI6nUWPqeX8y5Wtr2uLFLAeGzRr1gnaB2Z05cR4/00BMW+HX2Mc0JIAPD4sRFRIbkHKr9XGeLWTaJyypk8BqbK9hmSAMNMGhTEeI3t0TugqqxYvy+g2jJmbLHvF1izWkKMpe+rF+SqKtIvrLdWy8t1/E8FWT1RELqY3Wvj2yFqZ/oHvTjq6zM2KEYNRYrgwGH57cxVXKbBeeZqhb8fDNt2V6fkKZS5/OaLPykobiOHHk5HMgQWvYLa0yWuphdcH4BVkZXUMa0yherdt9lvQdMUhrKRcFdgQxocM5ITSaPXCw19DuDr42410C9NgQIX2FvXwz+5KGF+5c4Lu42JFpC6NYe4MEQVxJmEROOQ1udMmB77uC31ealqyDIgufpMnLpK6/pDYgi4New6fBHUBGB3Gul6ygZq+UEtm8NLB/F+Xtj6UaWAhTzY6ELBP2CS/5yVUSeUOEAscNDeI+WR6xTZLhg35fkylA==';const _IH='269c863f2cfb6ba9bf8ed14bcfe3a323480b127e78a8f68e497619671e934c8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
