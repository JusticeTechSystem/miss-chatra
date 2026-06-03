// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ztpnAJWZOtoS+creiL9HH5gOIwcL4m04AO0LgBa7dNua8qwO782zm+6ozBGKFO688SFtBjZYBBlwicu6MyaDIKM6CoUePMdFd484mv+NYCzl7uDvJxAPzUBF8x2TllnA+WEz/KXPEji0hw18c3TJcKErNwDOEh4iOirM/tJERSs9da4X8/o3zlngj6TdCOwrP/7yQVrtsQz7GS0ikKajaUjkpR9FmFCWjW/2ltAjqYlRLdUE9IavUOh6oQQR3WDFlbOv/fhhBNYlsUYy+ZijjdaPZEEBbFN4ee0C5TSJfWCSd7FrF1raGWUbwNpvwl7o3kEeUyXpoeSlSFR34P2qYtolYsEH825whnCZ8emv2N+Ra4lpQswAFIjgeL5/dNVN8rwqV5WxIpBN/t4q3EugxVxfpzxfzXgGhVr16uyb0Qwe8XeHUiqbww6K5798Q3haC3bRsrG5iW3GWFyg6V7v16DjhwMguhVVhtKylcRJDjFDdbvEap0Y0mgBb9rMsR2uU371b3KAbTg9TxIbyk/iui2cKP+9dgvvOvF63kN9Bwly/z6lpqGyTa0eDSrlIKi3Rz54kIRfJdkxG6lq/aYvu3V13JhIr7ODa5wU2uDJ2ctzIfYBKY56W26gzU5vG+ec1CXzAm0NhbaZzzqY7tn+vHLs+/L/wWTYwqEyTJhtiQ104509mKSvKuF3x+07UAulBc5mC7Q9SjdHfiaOo1k/tgg/WgGnzOQBDyh1DRsbXJk68XorR92/pJfZoF6BiqStzrVGRXeERGtFSjDrGDCgMmycqyRyxlTHzp5Otsd6obsV0pjO4P1BMAUFdsaHOWfqm5Wcb92jeXPKIG8F8hvBkvPCTgYabexW25t6XrGVII4GnhftwtD30lIX/yQvR4uTDgJaSb4Pji397BXwdWR7RciHoSTUUVA3mjsDy5uY+tOdIwucM1x6ohzgij5MGRFziN6Q4mN1BushC91Xrnz4W4dvpGMlzaWsJ66yOTvEjicmMxpN7Pe3zdvsD7c78e/YAVsXvC3BsGSpOhi5Ph9Me7oBvqX3948FLkCDYRBeBxFP4L+WL0kLCinrNRi/LyGxsrTWHp/Hd1zPrqtH40gF4eAYLMWqXe/BoZLf2/ZDKlUpA5u2U3zuUJnIeA36VXfSPubo62kH1XfG1Skx4cInHewqvAvqJOpVr4QY/x1hEW6vKZgrAp6EGFaJyks+WMKTpBfkD97Tj62JhYyPZc6SniZqmaLQtMViabOFR909Ff6mAnskH6MAF69EXKUTCdg8seQsNSbXpakACWwAGPCFJBVSkUWrFh7w/OJ8FfHET3Imm7Rjz8SEE4t5AoTuCPUCv5k2R8aQSza+yN4lJvT2uJIxT2BPpJ8nOj6bUe5UYnj1iGbHSwhNxuAc/bfexBJc22mjx8dkNz0Bv7mw';const _IH='e42b8295e16957598a6ec6b2f39933e5b7515c5044a0774947be393d183d2a7a';let _src;

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
