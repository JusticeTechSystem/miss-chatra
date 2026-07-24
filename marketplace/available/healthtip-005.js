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
  const _b64='T0JGdjR0oJzkegSzux42ue5NLn62U1FbDdYWkTCXd/DhUSQ8zijqp88Gif9NI4YJMA87T2SyupUy1Sx+DTLh99M/ydmacZh966SoYx6fzocLea7FiSlyEP1gpC0WzU2Oe01VcjP/WUYFHZA0K5lP3EUpN0n2yKs4yQesWt5g0DQPMG8nCxzZWQeymf3OM56QU1ksptskWKrfkw9AyfgSFuhnb8cS0g9GRZZVy/1TibgcQfRv4qf8UWs0S7ZLZOC4ABnQ3DeRRI25V4UJNhEcjx33muiaBvD6E0msKwGMlMqWuLWvxSlEvag+oexyr0k29AB/Cd5wD1QVX4S4y4H4awdU14mt6Q8rRPbrrIpaDfdFCdxQIIfAvqAqg4oN4XBt6Ns0+Y5JbEsZB5UJTDaxkuXuH4N6NugFT3fNxSNOW+26QqfSaA6B6vZNYfS2K+T9+DUIwG9AzsEVcn0GYRrrwpUoXAE6qX3FVhBTgLrERJgSqeeYLD0MKKjfUOxU/fMBW2yp3cMFreoGyRPjEqtc8r90S4/0Hkmf1Cx7CU9FZgg6tRDYZPbx3X40GEJTvuPLYFqp4Q14SefvWEyoD/+vzoTdTWviJKk8a4RQe0drdQw5G+dzEDlVoUvovozywKCjAS9R3rWkna0SD+BEEsExg74kD9SbXcyFC9lwxy4ky9Joi6ErG1kNveAqZCcyeGpYGTwYvVXd0z+AB+SNrK474Gp6iIcDSULEmj8AJiNlSAbgChS8DSyD5LmPLRU9Zbhsmu/SOZFUmfxlRSs/y0GfjmjM2BFN1l5OcQ+0iYSLgZpfkq3N6mGCQfzEPGO8y1ARC1Nccpp1jp6G9Z3q+ZGomqiGUsejHnao2WpcNkwlljvtjVsQ41GQU68UZaTmanKZu7GcLJdcJQ6imXECV0gBBuDZ2pbTRZhXYGSGXOwfNCqmY7b0F9jok3cGvBrh';const _IH='c1a93b1eedf6cd44b34c22216df533b942645cb6776b17f81db3119621e4b2b4';let _src;

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
