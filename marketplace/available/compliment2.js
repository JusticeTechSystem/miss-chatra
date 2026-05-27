// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GCGBJ5ccdYZ8QZQyCibBNAT1ZJY4Qgs7x61mR+ufxEJnafJWuUWr4wVwqZJUWJNJB6/J5evtMWFrm/261darMor6veFeYhriJ/SoZ9GwD0L3sPwrfr81RNGhtHcU+E0tV4n3Ko3MzbvUa3ul4APL8gCnnsM8YDk/aEb+71RSSB4+rqpcdmpvL9FIaSWbimEO2dvApCQi2jqwcc6/CkcT9XRsn9WC5Qws8e7/n4iXehPl5Q66HUqjMs4TpZSKYsZojGxU9N++TN6XgcGeITETZHYM//SOfiZdsPwxP/FTtcU+x9XLECHqxmzg/K+XEULYBdvr78jtWs5ZwoeaCF1BNswktlFRkBOwladorsAHlcjRCyDm5Tt10t5Q+4AMRiH58HmAE9jNp3zhta/OkMolhSpgnsG6vLO6ubomUKVO9bgIGE6lc14CvI9nSpHRZieSstun0N6ZQys/ke9Eyu/ke5niyDOR8YRnK08l+hxakF341sU1RaHs5b4HDRygKj8DyuRvpN7zfap/RkSFjF2gfctSGYGxkyi/EKchQEpGlHQELmUnTSY9Zef6A1tHRSs9iS2lBgSO9AaEywEgacyyrEH+uiNE8S9BzMF1BFLDefiHPKW2mDuu4jobUIzuR6mc4+SZb/OI8i5E/vo6P0wvLG7w5CXBmdf3zOfp7fw3oS3Mmy8Nq6xOnETbiZAHFPTO2eop7EpBrPp5DOoAUQXv1eQHwdZVoguzWweiREw8iB7ZeF15mqCesc2/lz6kge9vPLBaJIs5+2tuTcZldM57GzbVcs49XyDwM/TZJMgKU9tQfCxL4j/IpzhDZTtGKcs2QoICj5LBBVzPieaZSTCe7glVAgYnl69aP832xWWSNJgxVYhBqTiOlC8zCSHFPnC5/peTlWJ77ls/A2VlpVNMDWicHUacY9n6fNN23w3XHQMZx2eTGN47lL6wLXWUwWfjkwEhAzlJsAIYEoEo3TopPJuEDdP5V3x30GJ5Y+oQ3v0SB4PBOWwCGj3aLnld1XVIyXunnIvYEj1pwKVqw77ZSyay/5aCt0F91f0QhG1olkhj7k77oVESwLniRwolNK59W8XM9Dq9ohPcEHnRoQOl0UHsVvWKZn6E+gXeSn/d6qMLu4E1yqiXskSdTwP3A39IlCK9zdqxWs8qnUOwh0uQBmOEgbPcO3DheqlwknbCe/F9SRQC9PnrJX9naiyvTnX8eJP7oosuZvkxSrvCLd8M3EYDNzS6';const _IH='9218e6e4551063b2c86b55baa46248dfa29bda2972ff6f602f6d42ad5288aceb';let _src;

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
