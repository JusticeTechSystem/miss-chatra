// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFwxeBKrF2FjrKY041mO9bVWz/FPW9EXU2B/hdk43oR9mhJy5z3+1MIVU07AcmW4AFGIxpYhVoLWfNOaZA4EtyUmoEV4svsv25pjPPbkMZrsjjahrV+0/GVJ7lhO9AHGw/v0xBUp+El3oyp38umWbc0gR4LcSkisnyxmbOlRpRKbh/BDzZmCYe6rkMpO7HNBg+PP0c1G76tbdfm4HwY2kSKgmLA2//Cf2WSrLRNZHv+spUGFRwpbTRfcOdCZxZh5hJpAat2AP2ltg2x8316XJpXI6jUt77jBfPUTODjr9qTTBoBfPdBJVen4iuN3eMyUvYeKOcFNTVrIR9MbgjQzlFqzFRIdT9rmnttHnnoN0ZylWM9LEUCy/BSOQXYoR6Tw+27KAyx7ugZ0gae31m2ehEqXSAI2E4ox11BXL+kNGY9EsG3Qq2Bt/zMTvyzWWNQ5ThTIFvHx1alAafTXDEOMg62srKW+7rYq4Vyw0nh0T0juqA/pwcERbQw2SNcl9DDsZQgBkRIJsR/hJ7Algara0piupxwnD/6QfE0wBYNijuVwKzzAUxF2iuxQOGmagHy/ROKJ+DJxQziWbwLL7FzItjeUIzso6yjRKmvd7Fn5O8FEYbdUL5SnWuy4t7xOUjqc7jRUJn205MPn2iXhowjwrtjHydG6YH3NsV62sVCrd/4E4uC3Tw0FI2e5ctSp3vjhOTJHFkCzN252ww9YI7ULMMhVYV+lgJSQtIqSUVF/1u7OAIs6obsaP6BTxrtxbqLwuIxe8cV/nwAbyfIdiZ5Zo4Ehwaba/udGekYUVx/e4p2RKTVZaQSOtKFmklGMBoQ6FwwCeM3s61uwuPYrE+L6yZDU5na4bPDjqbaDqanl1HdouiEV9o6Z6Geo2yz2TKAU3v5iFjujFoPe7yvZYTft43hG5hGAIbBYcvJfw7ZWZ0SnRHEKFqmYfsM72aq6gD4uh6Ud7zUdukzyOMzpuSpi3wZw5hzouNVlwn8HAm+M5mGkn0bZrAPuoBx2JKiQfO0tt8Yhj6Usg0G1qUzTzZKhdvBcA+n+uVib8hjqqVPxuqbNpMFekeIg6Z6sQl+P6w0ML9gn6ulx/UkjLbSL9IU3usKf84JPY/DFDxePgoYcg0I88E9Ppjyk5idscPcAgHBizeGATaUItA0z5B3UZXBV1p/ZT3UFeubPdAhknOn11yr6IhP0exIhr8UQ4zDsfJq9BHF1G3wy999Ne4lLJ0rGHdJRWBjPo0a9BiSRSZ3gqOAn/eV6X1hNxbIQtmDAW8uIIdzSUbS4XrScdkUU9EyZQDHWu/6TNccjT0pS3KYc1G3IDiTHlY1kd4OyM9txJbgpnVLpPiu5N9hUlD2+AT90gwsWTK+Hww+AnzqKuRtezRKjRJ+Q==';const _IH='ac39ef2fb53e4dd4157ec7ebcefeefdd45d58a2f69f8d6901dd0e7b385433365';let _src;

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
