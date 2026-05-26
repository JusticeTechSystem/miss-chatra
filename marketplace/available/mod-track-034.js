// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ifNExc+5yRVYtmTEmJUYpTptvMZo6pvGZBpN2IzjXLT3v+wffsa5Z9/xpB6vF647xO6VmFTPUXVK8XOKv3mukuZVHYNDwafcbJlD575G+hHqi6fxFZ5A5WiqS3EACx07X8QtfNHby/Kq9cx7zFQbiWJrNzjBsFhFW70IsC4oZeiFRn7q3gS6j13k2gsX09LWsTz1faHgCUh9iiya/N0R1RryBHO+W23OeRr6yqh9anjgNs2Hnh0/r4XwUUlz8R9OQ55PiOGf/qNVMMo7MyTpR0rgIEPATtFK8PALMYy/fL7FGAQf0n03wYjg9qkT3FOLWhyH1cwo9Z6eIVPNU/kaFEEzAVsQDnTQbmY/3A3d6CeJo/IvfoV9puR9/tzpSqfVpDCXFqrOM1Vt6FnpE8mswh5TF6qSIl/7j70i4A/lgW8xnMrYuXLDPzHgPF6r/Y3qX71fxn4NokfKlLOWUcTll/Y78awnAfYk/OIG49SwcRKCNo7dWNZwLisAN3U3sm38vh7tkCpRSc/coPlitEhEl5d8PnjL04sO3IiDPXWONsxAtCgfRBB/yWmyMVFxxSUThZfqOXr340yFE05+2/hYLdf+kAmo5QBZBbhlAtj9arkOMJrQ5u8P4grh0ehBlJBkoJ6pRgTlWVBQ7n7yZQC4BSunTqK4MCls5TrVa6t5V2IoT0afGm4bBzDOdfTOPbCZaBah1a0jwgIV7ZTW6lkUC6aB9sSR7JEQYvHtu4mwzJ8tZ8xru18qnshFvm/Cx20AT5L5BbugP+q6jq3MTWbHjFWGvHSRm4FfMKb/xEN46AGgAlBoNJlKEVjeF990LpNGvqC9s6KmeU/q97ylZr78qjJ7RcLHqg4MN3yti3+X/IkL34z+NTWbxHSCb2kBEhBEQ+ZwcLYYP8sxicZESb/aRNhcPG763agAfmJL28ya9NuXFFmDYUAnZIYTbXWPE9OBRaTgzsqV6iw+8TyVn5MqDAAU7fZLLEEJ5aFNEmnSyFDEmnBUNMeDEqas+zXxuYI77Vv9+7fHBXaxACKwgXNoMhPFtmvbMhDE8YEBeXlijpftIV3VS+KhIzzRSwOMMHfIP6k7DLjnwFsg1yWbweMzhMlK6TggRK1A95dpKtXXFx0LeQYGPY1Q087oY2O1oM9lPNMx4KpDrlzBgtL13g6vN4Z6UPaPpwUX4zP5ouDPiXDMjUyPp2CxpJiOP0AVrn/kzWH23GQElrrEsKjf3Nq7MtpNmR5CYQGgdSfAzHrK1J8ttXGRU3wjclZUy90KQgzJkDjIVqvqGYs+I4N3zzbGpdcPeaYNzX6v/coHKu9oww3sGRMnkTqF8iBtJJKt8RT9xQMYRaL5ktKE45WpRVxbuc9mUjLxVXZ2JA==';const _IH='ff4d04559b6022230fe551d463ad23cb13a4640f56e612e8ec1255c6b605941f';let _src;

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
