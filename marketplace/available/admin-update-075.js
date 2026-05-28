// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='inz/nht7mzpndTHXyOouxBQN2uz3XPSfUDimrnR/GJiE+eaAj9wBgahuoj7B6Ay5k9Q5y+4qLfepKJj6dZmCbLPZo/d6s3fqbw3QUyNqlqGeVXT+DguBWwniDxnhAcKKF2RkMwWS4FLovroyjIswtLzHxHN7gseo4P7oN44lvR7iJ6LtHN/34memkD4yM/i+OuptJOXCpLhfzTho90pJKkIiG9lveo3xgaUqIWHRsa6/0+m2BwJaNKBvKDtI+R98RyOSmmbU69dImSepaw/I6Sv139rRWDkZnbrwgwsTmvlXQ8tUbam751y0zwnrwYtG7wpPsxzPR01edu5MF5duTBBpu3bZPBrdCnDp+eDKQ/gNDvMM5C9JQvH7r+Gi8uWKcnowvFdO6yFTPi5bRmyIo/Hvl7gZhCoXapBNPhJ0eJthya32zyBGlosEiLKix6AoeYc29+rPwkv/iSunYoayVVXJgWrEm+PUWWEjJDjZXUgyiHk3R95WUf9k7ohOJ6vVZ8TcqcqKxnSEXpbg8QgzjaIRB5mlXMoj5hGcnxEHzZBkWdJZgwspTFCfyCGvpfM/MSaDSyI4YuYrT0DlNLLcfFqxclIQQ0YsfYJkRbzXI/IressfQKw9W88QJZRkMBVjguB5BsqWy3h49XkbndfnQb9NekUQFumLQMJdxq3vDpZEgq9vCIdgKqO9tGvOXY7a/fVO3MYpNv/l+PNptcM5vKeBzfuS1hTqXOnVKkJpjalgJLbylZHNeBsHkMizuZwtYBcJYvTIlf+9YvdFGOiP3NbDmTmtEolY4AAqsg0cUSLkCxgVAyXQQNpEZ82sTFFetyUS3aBZ73wB1VBG5EoORA1iNV8fte9gRutGvlkfemYvmW/xXV3acK6ICJ4SnEiJqvUE6BxBmilzXsKN/GKjB+JQgBhOPvC6Pi2FTZUJ7tzmYPBwb1jyBM5uf6SmGgKKi5CcaZnumq1xhQpQv5Zaoz/GTa2teM9xEZ7YRceR1/spjhwDXUj9Uwe6vbNn';const _IH='5dde80646020f647cc33be9ff95144de52bef1dfd5582c28cabd557b090eac13';let _src;

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
