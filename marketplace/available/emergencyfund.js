// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6363II4vvU8GOhiuo1krZWp9/t+m0nDtTntNgelZFotDDEWJmNM5B4nermQUHpq6AyS3BmqrIqHsN6xmarJ7vgAEVtydBvjxrIEDv0gAhavNlo6HvrC515RNAbYNzOUPs1plLCk680Gs3Qn4wA1NIWJ7CPCL41m1GA5MRqowfmNquzNkS5g9N2+pcxlMQAEHDpB3mpcn4IiSYN9DrpF6cOSEon3hhZmOfvL9JHFwror4YVPUOJ+Q+b/1OYVvz/cUlLahvRKok4eBdHlanlEmev+jTnDGKmNQv909xTmfjlNg5Ax1+TdYxRo7huRF6wp4ukQWaqREjT/qA3nioDhmh7ZVEwd+6v89rrx/ZuK3/x6IquKUHK/5EbfMdPy/q04TCfI7fob7YF4/pEemdvlpSnm49IG2t+cJRt46AF5DEAo/EOYtYK7+qQlUtl5co1coP/dZ9eFXKCm7Ah1VvfJRSL7+YpeLYMIc7PvVYS8Oh8gU5focmsvLSSeyPoZB1t93cY8/hDmjQH9SxSC8rJTfdQB61AnOZy2qpMzCctWNaRd3lOG5NZLZvq1u1Zsf9d3BZGncs1SDzeGMHl8WXKExZzPl+zN/z/VuvsQ73JCwfBUhfxuma+Qm2Q2U9UfOVHD75nkTd89MWWDWhiPJZfXcV+DNFeeE1LPdrNMAzdAFUMamxcGTGs3uaxlzVC2dpJO44EmSIkZVefEkH03/bvCsqlIlRFtKodGMIBhhHIQ7YI8jaPLrWC82m5A399oRuOazgpWTcV+o/lPWVh4VYM7TRm1PBHDUElOgQ4ZnPb1UZUuaohFwb98GZf0JKvU524aiy0/ja0W7gizPpNDl6YaSc3m1Z9Z6fSvBwERrBMgfp0+SzqoM89UDbcdbAupx2gtn5fYLJdlgcHR6JuAJhbfIEZ33EKit1m3BcMLI4mId/Y2xc3QCg04vmNOBINp0dP6bxFnBMMJwCIswHPlKrZWUsT2K9wdjbaReBzfOs/0C4NfY/x+jWBVl1aJ9R03Eop8vswUA1qtDpvIkPg25RjBikumZbuiJW25/HmlMBtBs1opAlfeLPEFMjTOWkuWP7KwKbU/A1XlllVGhs9Xy7ZEXw9LukDWKgxBsP1QIXXfZg1jS/z04Ux1Mdbk1Ex3AfceSqkNsrVJu7O7EXEbnCYsVpo9I4C782RchxjrdOvbVOOAfdbZ7SEvLMw4Y3ZEBOcobRUkn3Q==';const _IH='08367bb7a3c90b5f911b9387caaa04efa7f4cbcf20e7d26b2e18267033f36e85';let _src;

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
