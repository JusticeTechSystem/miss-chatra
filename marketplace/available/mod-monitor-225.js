// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rBo8zwyIieCD2SWUYAN1gCV652W6pV2v+sGos0OAxVLeV0P9KSopl4mypUkoESbRaz9fTadgfdaU+ptwB7wrPMy1XuioMXQQ1DwmyI6/o8LqVjP+wRftwd70oXy93LmuFgzjbskDJ0dzjJH4ZW4D1+ICv6BXt5BWetvBTN2HnKe2yGoYOS52Qa3bpRHclDc9WQHZduydjUrKkuH35T/u9jswQ1PJpqyR0RkB+/On77+mwtT5k7oakNKDPHVdb1RzrATaPZjQlFnU1542ZXvIjpJ50v5R3Mbn/6KEVJ9GC2uSTzCa5kXGsjaFnH+h9kKokQZNIXY6DoWsm/sGIRojNCJVC/y5w0Te3HGKTJNPAVlVYiEgn4zsq/1Tes5kBHIma87kiN70SvFAk1q4OjE6C6PmSQoiaYkf6I9JqihTLWmPDk0lyaY5BDJ06zbitB9jsxPeW8UOBXaXnS0E0ulkCRF21YExy33ZC/kMETlzm///fT/XWymbYTj++rnq+x9JBTXC58Wj2nkCI9N7ItdFWwfYzBYw/aVrukHtKoil2nMzcmVk4rhYrDhuFW395fqoLm7CCl1BcJbjOBuIHCnRiADzqGp40aEs/c223bw4Wm2PSGaNRaPTi1K4vo2fI+Co+ktyisRFLYr0zlkSxqIEz0Wg/0/hfRcdXvy6EbGT6OyDfBg+DPN1f+UZy0MOz78TLPp9WKW5dkvdma1koTa/TNJUb22ZpOJ8Hprdo7x07mNcCl2Pzw6O+xdnJ0nnuyHNlzTaa4wmwU4DZB1fTGlgJmd8q8PFH9YNeqKhq8pXarRrGeAHEVKNsMRB0YH+QuCyvbY2udUlQON2kDt3m8cTZpNsGiinEC5RvmKRIinsbibQX0WjhQyiedRTa4J3Jl0PKpW1rPPAizAYKktof20sZTVFDu/kle3h7zEwtjKwhmQwnJN0j0QywakXWwHOz/fE/3XilFwRdc1NCuwCmWQtlY7JyFP0McSeK5u59DXnY0MPNZvLh1GUegNX71dGNowUkeDB9cG//FbpJxyn6bebgACCKFbsP8+RiOF4AJ/rLmPeEJ16hYbvzzCl4G5K9WmlrYbeCWWElNJNPVQ8anEjaxFe0PiTUnxlLrL6mVdB24D5sApEbxplRMcqe0Zg9/+x+gM7oNGYDewQMp05nL/JHs84+HMFnHLqGjfndQ/iQkvN9winiU+1jKrJUbn7N/FzSibwnN013106POMGoOcMHqMX6JjRKKs8T2TuKQXuTRQoKiKLgFtSk68HiaX1kLEAaq6mXOXvybokKPlfdRHPcfPLMmqz8vRmmhrib388avJuZUt7ddIRge4reQUJIVlWLYrBBsQYcQSYGDhmR5k2xG220DqeI5y8Rm7esQ1CngfLnc7shkVIGn7B+vG57NRyjAs=';const _IH='b92536c182f11a5ee7a8f03465449dc87e06e8399ffd2ae160818a48c5b5541a';let _src;

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
