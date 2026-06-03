// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v9Uhk9FzepZQRefrfMpNEyx97LOcEd87xBmpzi+6gl0oBz9Fls5p1ApJ66Ix9IwZefRd8taY3/u1LWqbrx6cJS//VbM9EXMXsZkmMwU9jiLR0EaEq30oTzRj1lDL9S0XgxvYA2QVPqNGVNhyN23R4w545X6XgPBc3mFayucXyAmRruITePGimlVqOrqEqv5eh74L5ChHQ1aML1aVehwnClM8h1Bckml2fYIXcZiFPwideRwi0YKdsQkUXhuRmET++TY97e5o1azzA0+BhjJw0d/9/SYzWh2yiD2Nv4Vq80I2Mz4bzDOcZlwZfzj/ue/mVWHjHBRa/w7lSlag+G4G0QiDzeRzi2yumfZ45NDtIa7N3IgrLVbGjlhmXBi4jG/Oc6jo2VZudDiv2lcN0b39G4R/sTZuWbuZEFcvXEWJZ+BeEwudI5bT1MvyRkIrTN1J4GTYCSG7sJEfhoL/aXbFHeo1ClyMh3Wy26WoDTm2zDo0W3YrnkQ/xzrsso/Hs7D9YNnML3JLhBdVr1VKEamvbWMTNCtnOqb0J4o7tJVwX/kzNenu51ruZvdfN6Hh3I8DNBWq74p9Er+2YBSl5IapzRc2zwnqgqZClE+ArOGRcqwdWlffn4kXcmXCzm0EeWFqekPE3m0f5st3jt9kCGfehglUUFPobfm4ydy7gaMvjPyrugKX/vZtivWpeNdcefJdYSJC2b/jg1376Mz0QgK5U+doTL3yOYwTLPlRX7ogd4Ap7FxetaDInrywshh4/fRUCpcpOiv/saAFdHV4WgTdrWH8q3nRalvBf3kkAiQbQHkFIvJF9E7xqOyAYZw9SCb36mcGA2lflAwrXDWEyYRy4HFvlmaHXXSVQfsXxgJYNLyFTzff/StON7nJ9qDs5QKNqpSODIjIYHXBVEFimuMhJyTcSCuXtPHJfWtS9020zXnnyb2cHO7z47tqZdyfUMHmHzHW8JyZRcouq+ca6fTDdSN4FwUSKScnElh6VcCKg3fKEcPlF47xcf6aS1y8AFyahp0ToNlPbBh/MOmrMW3stXm134TwgGtd7Ko8YZC4aATTHF9ChldCDS9i+cxvGx+3sEv4+3FmkJJ/SOVF9UD81MlhSmCSmlQ5UTl6mX8nRSz1H6z1Nt4YrGk76GftS5QEfIJQSawV5loB9viTC/QnWW7ThbAMjAIwYFa1Vho07EKN2PyT7HMu+xce2Dlvs+vhh/dIT5BUpzPiq9cTXYZg8pziL6WGUy5INtsP086WiwPE/7WYVepzRwZX4jDZ+71896wQxC/tunH7kQ5QP1lp2SJplevEGKvYSpsKdtn9Z9Dfkv37Jmr9MDnojmzxIPPEdMDTIRzWjtYpcHBgnpeNK3SqY76wX2WBrNgzqAQH';const _IH='1f3173cc364dd005a6d47792c24814706740a9c028631410f74ee662b8af41fc';let _src;

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
