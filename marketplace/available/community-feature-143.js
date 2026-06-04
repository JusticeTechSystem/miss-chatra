// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='slpiVQNeS6XDSOahONKTNto0Hu4J8qtaf3UoRiyhSgWWAkMfKo69jGODM8ajfy2jYXckc8YR/VFL+1UoTYEmvGuZ1CSJMHHLGuwaOKxg/lRGDTQ2oVxTAlC+e259Dj35/fBmVhiyfh/K4f9z8PaB7IppwANcNoA6ssYzfl+A1zRcFtwsk8e74UXgOSU+1ai3LTSyi+JyjrRe1LniqChfQz5NzzgzynzJjf9Y8kCbC8kctIUveJEIkY7mRhPjlITLDvZqTPFZJOSaGnN2bqSQoArdRTOVSNMqo2tBKx1OriOSVOytwF3WdnX2++u3hw9vpjIRed075nH7SeZK0ycOjPcvmpFZS+HZqKXv25AljRdGa9tM3rzTdN9Xr/Ax3De5/7QJbNIy2RR8U7Pi1pA1Ch6llo2qim53rlOPkjXU7AC7iBW6aP+HRnz9vCQy/SQe6MCmMl4QcgAmIYi6s6y3FD9tHEHXdQ5vnr0DWJ0c8odzhXpKWQK8fVWao4C2gsUMX+VrlSpJEbYNtzyU4SKHWjQfxmwAwtopQ/PTalTu1w/MzgSGODe5sUlNFuZv6KBjkze6kl1hXS71Ha87Qs2I/iskFA2jiWu3R5hUxB+ruYntXIj28x6QZEXVDypN66zGqyBDPpfKqEOH9EC/lQq7sjR8E1E4YkIWEljgrT6KqxbcUXlDvQL4RS9PwjyHHcSN3LaB+lmjJUFBUtLTtl33YvtZdRmnYN6GDPlLFkw=';const _IH='8b212059d2789a7268d096ea705ab5024000e0c033db4928ef4d079714eeb5b3';let _src;

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
