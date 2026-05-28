// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+pH9T3194hB7y9XNDe/fSaaUdHtmv/8XLclZaIZUC1Nn6XivGYddUQ0y1DeOPOlqTOa8khFgx/jmhIYd93v37VuayPxbi8b05xOOYXaTcVJ8M8gGRagJ9FJfXK8VIVKqm4lAsyKYJAcK2E5jKF5TwAv+YWQzXEfLOrSroK6LjE1XLoVsKePb7R28k6Qcf80/HfCKc+LQnEP5mptPioUs07WbFKzXyRbBfrQLDbTofrIk/U3b+m6inl2jzYBtOcXs5zTtcpjnkK4+TNNivuzKuUzU43+wvy8CP/x/BivJG7OsFN+oMSVhkaaWiIUCApUMo2+BtwdBuuUR8RAYt5MhIwBjQ8anMFCHBxhxkwtJ5twJIMgUhTJdTar5QeNis4woxtd6Cs8XNu70tLKjNDLN+VUWuu1wYZ4qE6/dO57C74X84nswe6wiESDnAHmOWE8IZlxZ9Iz+PD+fXjdJrqD9gdO0vyTaEUNBqgd+3E/puPQC+lVmcRoTnDzhctIXsDaWxo1xS2ij2S2Vd3N9OigW5wIMY0sTj3SqkUYzv1RQ715keI2vELyiMM9hm1Iy9a34ezJregY6ZUatDsoYGrBI4J4OGr3RZl6cRs7QNeucDjnWAu5s3fJ9U0J2izxMTfJh16ufZ8tXgatqgWwfTZEscSZZJEqmRo4av8IbetUyUsHjWmTcpaim5oBxU3sf0cZvhj4hfbaZcFC+rxkuSxuiNB9qnJ/DucOZMaYx+vuQwgE8rUa4DrGqC9X4Ds97xA+a6mPi5ZfNfarO57fOMdFGSBjTsIv8m2o/pJfLsJZaMXQB63PedyZZVjJv4zh3VShqXoTj6hIJ+lWbZnOjb8keQVmM8ULicp+lw45nOcoHbWYtSikvys2clUcwO1tJhrpOBA7I+TkLi6ZNny7sVy0XV9dvqK871wPdjiF4ui/KFpToNsDU1G4t5kRwhj1VKo8lIHcTpaW9xjovK4iSocnhaON9fDoipEW1tueUK/I03xVDVLtW1foWepsl21VgVANsrg==';const _IH='c487a95fdf220d176701232ddc935e4477e56a7593991383925a0be9ab647d63';let _src;

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
