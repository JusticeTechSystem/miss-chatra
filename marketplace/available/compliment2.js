// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EZSYH0wt1IPxB3FbBQme3lpjoXqg8ZsWG19KAMx0ODEZiKPqzy9XqUF3BQZFn4ov3i3hZoryh877wkgpmZ8OejplnSoEoAnttv2mbvyueW02RK/8YLJjDbpYND4ETx92ieNTrbTHOsMgBB9qJvc/GZHuRu4Qk8416AU34vRhP4zRiXygX/derMmgjt+rTLMfn0CwCRwy89Mr26/uo5VmnJMSMu2c9wVaQDJBaxYNrEuUpNDhRiEoEY6ScVCWJNtna52/gRxxVhQxnZO19c/sJ+bHqYpKNpW5ZEk3TqRnKfnsgBxvINvvVDWkKjo3M7cJHoEE5Kr+QSjflhHmrKVxPfjZ+Xliv4zbVNZlYVPo3Svdn8jzswx84ywVY+J8NBC27zaddeqqEIcWgktq6ix6wDtRChvnYWpxygmf8jBC98IC0Hx3S7BhEN5fCBHXjNtDn6zmpf9U931lUYURNScAXkXA7gjSNAAMq0xNfPWYOkd88d38vlfUPz2bmb/i5kS27JeFhSdGL5cwRF0ctQD4sozlTvbCNR89XpJskvaBvYaipbHn4hdQL00Sxt1zbwS6sFY7jhpLvYqt/H6UCPRAKxlDxParYJ3GmOOmZV1aXvcsjhW/7wlBaOh7UOFA2A+NkOrhXGrH6rEFjtNV3CP6wGokh6DR2si/9ST4Lhi9sskyHLArr6q+Oud5edl5XIQgEVYHScusdvdMs2/fCAd+2YRaDV13/7yPfqa1zRNncqyAiZvw7+WZFUrGMXOMwyxKAWMIoKABV0wE09U8q1CPu1BhU1vwTXISiUq4sm6Af3gFnDzNz0m/M0OVYnnPP89DIfu+uV+0IlApSfR1QUYRKq3UNdDqsfMXkTBY26iHwNYr1poBNGSZeh4T3RQSP0Jjpr144Cu2BR6VwlQQZEsc69K/xPepDKwc7NElKQaBbN5U7nfbSxJ1gXys8wT2836GsiI7x74FZWyR7bx+GgEPCusquqD7FE91V7enNHCE02lzqCjo9OcaxCv1GWqlB6+4/dMvia3jrmRnXv24D6vHS6m1ys9FLadfTOFdaJ7IwUsgAVIelJl3C+a0LKvCVIu7zEk0wLt82aFvG+tOfSdWox5o/0PlxQgjbQlpHlubNsxVg+sfUbg/pxNhEiNi5Atr/m+x3mVwmNqjPgFjLr5YTfzHxJM3vXBexPFn43EuE8MZO/4u/V9NybIDJdvyx4qqN4EyH/mSoWjn31F1DjZzWVqnwzmJ';const _IH='f4eb9d61408ddeaecf8adde21643ba6a464367d7c6d0274f7c1d0e03bc82684e';let _src;

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
