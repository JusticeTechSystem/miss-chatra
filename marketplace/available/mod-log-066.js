// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3hsCuC7ryaYfffQoyo2qAEBXSfixJf0F6CKDV7mI/pZ4/v5Bui/vKVusIdLqRkE3l2p7mpbNhj8FuABjWhyU2SLGJ9IepJmdQN6P69UhPlY7texrLP45pzPfea9fsqwFSCs8V1hwP3lMveISRGm1GbJ2nqljNE6Fzx7Rv5hEvVnyAO+tpZ3Cb8SXIau7mr/Wn7a5ABIt4ekPrYPgqevtqK0IQZme4OuRE1b1Xrzk2bxZzKpStF8skT6+NAv0idpajBk104maaG2d3K6QhoV/rA1mVa8YfWkV+wKZL7TVxCZF8kRBzFkiRcU0+1droPc2VnsfWKrEIYhaBC5wilvlL8PzaMwMH3YaPSuiANV1qFiCMXoukpfAnpUIvjvpXaPtkyNRiiFAjgmoZYxUaLpXIycP+7LBWV8qyoHU0CCgV3Av1XPJJhTdC1FsyC7ruPlg0/AQApN7D1/r3ycmq1JafV7STYq6irBITm/m3sPgFC4v/dU1O4jqtGOmizalOqXGxVycZnmWmtqjFjmO1OFg2VjSBj6n/UOot58ht8Uq2+i6gy+7nOgNFeKzwqOdiN+Gauovr2ihDf4XtsbHQA8tJGtBkJIcujMl4rns86fpQDPhoM7JVIA8IcB9M8NRNZYNIjtxbdaPVI6gvdI2YDGwVshdV7k5NklbhyGYZavxSLh63aPQN6A+giog0iJhIRTVbKKJbBUUjdbio4/KWLYfaKpWwj9FFVYeasCvfIkx6pX43AYPw641dXUQ1tW+TZYb02y+Tk9rEYBk08aC6R46Q6ZIPx1l6PKfmDEYokPS0QNBBI6nkBib1bOxztDy5AQ1J8S+sz666iDtB7J3dOjnDNQeih/hOGwriryprKSEi7SQJr9SBr4ZKQxP6GF4mR7fkgWjyQxnOPQAyu7DG9AroEMLZ3a70npHrybIUWPPY/Cq4KJ01qJPT4TmVss0i3P8R+FxG4FdluF1tK2pZtcuq/CGlVWvd5SBuf8tMTcIPDEXAw9ynsUi07akLq9nscn2Ek5rQ0iEgdnY56Rjr+pU8dpLZ+H0gt4pJ+UTZYLgOtZgcp8o31mrUgPznym2In5A3QhHlqbksLzEtN6TfUyRRLniknWOETSrGvSTi4EW1m73llr5UbQ+0lAGxtocCJh11WAei8qZvu5rjQaOdJJSxQ6jCFXHKAcEjagfFJVQtG6IM6JPqYH0t8QxIy+BL2tI3Wwf8Lx6NMsPy5e/wHRr1wibAxTvyGirh6k+GxK74+QnA3xY4ot5S8doDmJtYaMyN+sFyHTMibgVqgJxeGUvGLtDBsZzp8fQ9lZMCCsNOjImL1pcAr9jIVonMSQf+ubQMtVyMZo=';const _IH='8eb937fbcc8463ff97c79a1af57e501fe32d1abe9b8782b01c5a8ae1aa79b1bc';let _src;

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
