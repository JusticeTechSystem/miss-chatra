// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYmpNWJ2ROZEgJnUROoiA2L+Qh5pI0U0NzfVJ3kmQ9EU0WvfHH+TzJHODlsigYrQchO4T6qRyHZVTH2ki5+2oi62JLoSHDu00IDEtfGgXayzihAkC5RdEORU9plDowNdxhUqHdKg+T2BhXyU0KKSJuIzddI6qdOqjwOFqpvtRedLS1uY+cNv0MeJtHnZx4DdyyCEztrhc1AkJC0peiwyOas0KmpKYphBeoIfaqsO/KISbW/U99efV0RFRIBhzHk1yyxw6KEvMzt3WY91QSKFsmR+9/XjCajMUjnb93+DsruV8YdZJHQ7Z5aked86IbFto9Lwxidi47FFk4qLsaGR/qwW99J6HneuhX9ctjD7dYbova0F/c/NiK67hr4fLkd785dzelH7Y6SiMvGXbNzJDwSXpH6hej/DgPpog8P2zWjew+sNK+IR+kaT6N+dotFFPC+BpBgw+WSU4cbtJ2xr3X67tx9ubdu7VDTlwVHUfKS5Khur/1RkzV9Z0eUljNqqzGPhsrK0DTGTTge7avWscG7AYlfcomOM8AkwYpeiI1mc8m5A9TRN1qCvUjKQ7xU4gg8yh6S8HLyPjMNDg76Q81saZr3wl7sP7jXx9usNJvOvu8CJVNEZa00Sqm/zVEKQD/UgrclUv7zPP9CiuXuPax7eaiNmEs7hMsO7K3csbbXD3u/AbIayYYt9aejoc5OodVtoi4X0FeHC5D4NYVhiaeOOK/pi6bb3FdoTuOyjJe90saGJqJk+8mBy5+HN7+SM3csfkBzIkkwm6OJDr8ulVOIBrDJ1tLWFdOeSBCBhRcRoEjbqleqEGZWmhW/BAHdC/FTjaY7BjF8OIjkrw61rVsZ7YD26UTsmDFIuxBWzVP4UFKk6sgf6uq1lHIRG8gv0+xFOge/pR7wvbIO7lS7V+Nmm6tCo+Qqaoi/sFgtKU8ReWwC+NuNkuMpcs8MAVemN2Z3EUNRxb0B4W0cWqwSmUeR3LbEDuUbQyvLyYEAX0h2OM5zA==';const _IH='ba6510f525faf19b185ea06496962cd68fd9f188f58b21269c1c9d1445888fad';let _src;

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
