// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hyWjwwoWxhFNFo3naPGrQQKsgtrtLJNApBETHUduzWosAjlH7j2Scw7XyHNnmr/SfXaU2L561OOrLTxx9nQpjDCiKee6e+5C/JNcGGjqaQcSSa5icdNnsEUFRrQgw7j0DQRKz5INoAAgdBC9j4fDNbiG9w3weohnk7q5VWIRr/r5AeWPRJiS7x/+mLuZQ1qPYeinBvxSphrHOzEmoX7tq45zFJ5/TiBkXG3/Dak3pNbxHruMdmy8yRp9meXuItQ83CtvyCEMZuO15N1n9op0q/FQRfWB1bapwOfySsizDGAHnCH0iLuhMTRzOG5E3315aZmOhLAq4USuiH22vbuAZINDT4pvy3EPXu4RBDHWIwglLOXBD+hj6a8tz5avTouHb4Pre6PJ9HJRpLbpv+hS2org4cfowx3w6WkZTO94sSOzpyB1mXy5MkJdlXiS8VtYw3B8xCrDiTeBgUsu7S/qZfxZLRKeSjhKVDAo/5hc8Y1uN6J3dcUmD4Cv0OX6jtAsDR6AbgC8cdWgEPXHszNZFgVQ7QzkD0dnfNgYSqG+RMeiWVKXQPsxu2cwBv3S+YE6C/rM8FWYD1CYeOTUtU1k//X0W3OvQEVEkit6OJxvLB8hdU7sg0Fnaqy8QNEtT9gj7L1OXvIWvXQN9rG4T2O56qLC5kUfiWHXu88e+fzraAHw40EMy748xDkDnZuwGUghjRl0tG+j/lLfi+UOnfq45/oGQzvf2tTQhfv8BZ5wNNoiWCVs3HIE/v17XVp+PdATvx1HUgHIR3jtwx61FeYC4axs50XflFnoXtqhGCqDK9CtFe6UJ0pPciKh8kymVm+8qFUN5lGqJV8ReTZQM6QvRYrhx7G5crkAMeK24qjq/5WX/ZkGCr20gXTAh7EbsSzjLivuBsv4gIO7IYGy0iBtAystFvNz7KjmTmn3mDVrWE7R1uDLJVU5YJsbDZecFwnRnlA4cYJ1tF3ucUJJgDshZQRh8jJZ43Oy0gu+AqjF8rPQFyA0ys/Jq+j1Z3qjvfjl8pKKo6l1qG2ilPhSKZTOIQjNN+4MO+cO7GFKtVy6eZnuyRuqLpaSlzSydiWhZljkDTEeXEy9XvrMmQWzzsSAv3MWQCsHoySr0xIJxrY+AmDriRhO6ZmcsE+kmifPHEPrU+Q365o0v/E5UQcoywY9c3Vhre2bKh3vo+1WUJXE/YxxgMO3d2OhP6Z2ZWevZZ0WSSE6SuYCRdcvwGhvnLAw8zHv2MzpQCvqerqo3G33RSG2zssmwxh0CMBzRdcdlbVDzST1litolkxd4DleUcmnGpv4q+aLcHKi5h73MKaH/FhKhEMjjP3GvQM8iIen5n91Od4fOiADnIenZYab1dQf58O3+5N2WWLp8dxOw1U7hwhj9QYela2/hnTh/79YMl4DKL/SMj3bxO2QZ/n+9N4R11q1g2Dx+xYF66ThrFfeiaktPmn/xS78VEjce4lIcBQpaBdIBJF0nvKijdX0HzLsiBJGt6Wszj15VYda0P71wJWOYBVi7NkfTR3HY1w1MYl8MvkIXbssh6l/B67fiQ8HSDUhXSJUYInS9IBwP6bgU0noRm2RjLKYMvrVaUC0Dyvf4U9n8jeA4gO0h3LbMrIYzYO8gToLbaLYBmuO4/bte5g4Fync+6lJx5WGQ0EC4sXfyBJKlQAf71m09b4iDhXSdSVeeyVJLofJJCofskzdgHOABeY=';const _IH='b64ef4a83b45fdd2a191d7aa17151ffa7ac02bd281f15aa6954cbfafa2f8365c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
