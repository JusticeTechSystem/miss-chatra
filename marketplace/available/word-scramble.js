// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NczAXVOsPH/cOw+O13NfkXcu6xfsNg0L57/+/qstVl50to1Brgz8osli4YKQob1xEAmo/rJ6OHnIJ0DtVWVgUsPP4hfpVLGiPejbq8Y5QytaoT6/giUj1/hAz0qfnSKlNwQFTqvV0iU8c5mqekZVwFyFheJ1ptczdIB+Zt3Qq3L0mNgDtlzkxFccr46eCf1LBfA6AvT8lW58goYk8J4uio8bRS4OOC4mV9PnvHtIujxVLO/z1D1OA5Yqnm3Up3LlSdWWpFWXg0VHdWCUH6ZKFmckniKyowljEAu/2WGgZOHclIOw8nl8GG+fSIukIn1yymWRnc9pk1KFmMkGgHp305t/di8FzwCaN9tUk62S+8dU15cPmP+e+E12drPEfA5fOg9N68lTMUQxSqluQN4ac9wMjRUouvgu9juYTXSjMDnLHcd0Jy98pEz70ruBW2klTVodCSdYN3omgllt3SxRdIHuRxwvYoBLft/LlM6d5NMlKI3zXxGmZT0j/JBDq876twRBFhqr47DZMVbkXwbOtMXobt1xA+HQrZvNTZPPoV7JKEYgyjYNLtRIH6ojt3+/XN/pZMWDQV/TwAr6S1qs3N3SHLk7clxEnJloMCQu1W6GcHxDiNBVjhIJdb6Pz5dBJgaydR8mhm54Q9eu9aAzWM0X3mqkseh3Uhh0ng2m84omBzIXfYv3lqWjDMq99sZwmU1OWJWUoWwfzDYSUdJAfvj4KgXmfqz6VztfK0VpE1Gopi47IQuyFQ3sk94xXXXPT92N/Sabcfeu+HD1ps7JUNW1A7Gv2Z9VagyqO/ISlw9GwTnJnCv/hCHA/ab1SWV4Bzq+IJEouwQaMu2H3HiyIX1Wwfik316/kMJBNO2ZimH9fkfzqvcj79SbhvtNPDZwR6s6VAbLaQuelqXF+LM7QtcZFiY6Nd92tPFnTi0lb+oH95OBCOF5Xl0LRIjkEv/U0YZCSR4NjUiST12TqVgZ8e8d607B35pAHSfySKvZGTPrfwWX2wNiVVu8TYajIJdaFXp0mlRs0tZ9iJ3lTPCnRsLbJNyE+XEvBDadDDGPderWH8/esQBt2xj290FuEMgh6CI3TeBKh3SSi4FcSQctH6jEAjH+bA+8bKbpMm3CCy+KM17j+zd+kL8CIkJOqIZFCN6OMxtgVm2MbwXQDZh7WswoyHlI/pmvABtdqVF1IqWSZ6zvHhbRAyeNxQmLSdTDTM371tFWqU/uovYlvbS3pwUWVwsMh9beXLx0jOeE6Dva+Vt7HyiY5Vc6fqGGFstLOK+XswkOiABOwGMJuKhNjxUCj0OjeOwmOVMyEpbOo4lHZ4Pg3GzWhoHl2d3POFm6kAU6071dWtsv';const _IH='3c79b573859b2dfaad5c105ed1181b0893c6302f9a1005778c6fb1adac46f6be';let _src;

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
