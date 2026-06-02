// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7FeyRjj8UriAumuMd5aCSd1joSqyt9ovrimjKq/6J8mcoL1Hm+MMbvFF6kda5SOjvx1dfSLazQQ7QcGTkXTW/pVlqMFNfu5+Bg+VYmytwcaDnloUCsoEFC09jOdZsGWYBxSR01Po7I+k7uYvzqDWKRlE8TxLLEZlVtepjcFh+LoJmtybVDkTV8bguWz0K+hPndJoUKaColGcjdy+g5PKs4q/wmV3XrIrxxi5ugoaDSts1/iAvhhSOlc7KJo1a91zoBemytEJTKwioBtxC7RABrDXuXm2ho12hICxZiIk6UPwMH8CGM6o3tdTwNv0+Vw6HDvx+9lCGerY6fTEHSoXEmhS5IKMM95YTuPEDJeUlpYRVtYcH7jXrcFcpi/mbIXh/otzfTquVhfXV1bA2CoUu1IE3N74sZlb3ArxEmiMVG85NFIpEgDNwjzonA41egSpOnrtmGnqqo3qGfEEDofwE7S9Qg5RCakCaVRYeltKrVVEn80t8js/FbTbzfYG0cb2K6BC1+7KFgO6jKldq36VHErHcJA/OLuVtEjX6BctQJDdT5UTGBQo3nkZDW3p1Xh7FWgXSkP9294d4ayE5v446Imt/TWRTwnKG78WnpaO7vtKMv/rDjzV7bz5oUCCm3NveHDwwqKDu0Chw6gReAOE7isYQxjt8hEAzWQkQe4tLg0PT2KC43FPtLQicMsZ2wV98yjc4B/JjF9JpfNxUx9uh6cN2DbCuyJBthTzJcGuSewLlg==';const _IH='2de52a3ce59475b8d1c8722b7d5467ed4fc3a609a8f4ef2dff6386ac5b1ab63b';let _src;

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
