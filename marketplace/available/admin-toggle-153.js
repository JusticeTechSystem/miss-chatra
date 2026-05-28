// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ylEWgMIUk1vjtjo4DywazsdqRscrPncov5rfFOf5VHKlQ0b+QDl5wOAQG3ZD2xAXjIyeGesnQEjdEdxsiwF6QIxWhz50em/5l1HofMs+elYtAXUyAr1G8lhVnmMv9mA9e+vJWKv7CepHu/nvFqtE0H+wxGk322r0PFRg2ivCzI9MLz6z9PB4oqGMQKW7Wx3Van5j77/rj7OVeOONo4XVcYcvZ0PChBS6hhxBOGDisMJ+Z/XyZu+xFSzUa9V4WfPlsENLHm+UG0o6j6q63uPDxeRoheyotOPMRcvB4memPICASXtHNQE0aaCVqcHNqglIA/nsZ4XdNB2tq/OKQk4ACDnjEK2omX+i4zXOw/vnnuBlVQUV6Np8zm0lsqt3LkiI6aDUV0Hie68lkTbkXpciqYQACdbG2oZNQVG68mq3nRd5JY5YpYByEKOfODAfijTZisgFoKHnYUFKw/y0bmJiyzapdeWd0d3OVvcajlJ1DVFO+Ch3EnGxrBJH8nTIUtkguYX6MyWSQpZmolchsUeTN416mO5GZiAKN+LKDk1bC1xdg1Hhj1MH5Oa5UToG3tOWcT1NsIrMJAIA1E7pY2Qwn9U5N5ElLcUgoCXluT8MLNXSh7wJMtbTuocmHSHlGM1MVWNML4hueKJv+IUU8XPc9+/O/mEzgFm8TZdSizrw2HTIbzm0wlMThFkwpVWXbM33Gdk2713ZEdwZQ4HBQK1fcCUX09NkO5PbpyTp5elpwIp7A1TN2jtEjeHaEx/QD7YnanAGxXTywqQIw7RAlri8j99UHYTI7Dw3gMxX0xHQ8TSmqXal7nztJRsZmV1ptDAmYh50PLOnwaH+XGnWODWNLVWji+fXIJV1MUjWCzt41qIHxDUW1TBAjooSgR6+KfMNHjzG4eWhtZi4nAXCTQtJX3k1lx3ls3DLhyEzqvtTh6SIUMbzOtAAEZT20OFqcEXwX7qah1oYvblKtl423jNpgYs1EPC7RTLBaq22ZMG3ME1saa2ddSt3dQhe+z2YVIYh/A==';const _IH='1f8cc37d96c3d62dabfd9bd69661834b6c704608cc4b9069b0ea20d99e42ab68';let _src;

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
