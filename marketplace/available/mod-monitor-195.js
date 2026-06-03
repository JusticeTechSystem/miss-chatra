// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TOdmIJ/GjffqyPNgU2tLngYmh6Fob1PeZHxFRI+0MUYqE1F3A/pfqdp81uy/D5u8zyp6hWBJcemXarkWPaM/5CDRv7Yq+H1o3rWF0DaAFa1Lf8KTCpAFwFTR7y3cCSjB5yWoqxSmCNmV8U1xnG9nck/x/k/tRy82C2q/SLLKR2GdxlfMsPZuGWUFjfTtDIt1jzlJcJYMeyLZ9C47dRXPnwsJGdU7m5agyavsyUr0A71G/O1tU3i+GQun/4jLrC9Dd/4EuK2/lVDLZrx0o8YZ633JTZQm3AH4utaQTCNYe8vpMxMfHfFzCo8WHY3ncDGZBQDCrI5M1cdGYFxkMA03Dp9vYAgAiHZaL22qf0e2S1p3a63qj4/uMUwBZ3/H0R82pCRLUt/84+hQDMBtHYlYFNRWrCqYxwj2UNCGmoeQkytlJ8cLORCoOdD5jMBokv7Vh6L7VIUSP5qWwaphqdcfkz2Lr/TaKmpuBItbHfL3iTRdOT1TAs2kqUokhLdSxmhq0bMtaumiACeUWVCdOmJhH2iFCgii53SbZP23uSCTNqpub2309bYc0ZzOHL8guScPFNwVU9PkQoboshK4XfNfP2Ln1a+o6mV/qf0kC6bZfBB6dw46fngOsy7pCKw+tkwT+S88V9sh6y6mPgBPIFgdTxjltcC22qPa365vUieXtsA4E6K2lT13gcuyUuptuZ4+GDL0q6AJUumUQAFNQ7G71WdraisRe92fWnXj4E2WexcvE8GGJN5+dBbpZsMeIskJoAMqj/1fynYrz3jb6n9QfFzDE+l8thFE0FjalC92CTILEUR3zpsHyiHcFy+ag2bP2JPtfviDqEiMG0bz6B3B7ayeF6kTFvVYGCfqbLKf5C5Fr3lnsSvWHYLLiYlgxJ8l3O4beTMG394sqQWlCV+clMJDUEG0xp8W6vGU4n0FZxB8NyPBH4THB5KsColVyVG1/Tn1pPn4MOk4AhGBW3N6Punb5prblcjnqIcKrFpN8WjTmM7yyCgA31FG0Wac5bVDBBr4lpLeYpezBDdguW+O5cW75TYAvS90TiX+TzVgsPvdGjXKFathQDJxeL323zLrrcu1Uu0o2keUw0N717Obi60sdw8lRCcjgxdLzEwNYOjlPuV//vAt8fI6cDsDDW7zh/01VRqUHDQGUjHtKTj3nx1ZAAFtD5PI2cn8zc4YWnga72jrTarDtrCqiXxpqL947U3ZLyn9gpfHhZPRDydivagPhL7iAqTwHWCCnWwOMj4fNkqtMVnEbmB0F+ABvI4+GyDA0GAJIjLMhFsLqylDVAFyLlTRxpWo0WI2d8nsCuWl8atGoL+6AxYkCiYkTNZmYWGSds8IvAU5oFth9QQftp5I+p9LPBaG+fXLA+1Uqkw3WoKuGB3XC607Ope7hQKFy94=';const _IH='9221e6c444ac292801576e7a5761c98044dda1231dbbfa0e94ea00f282d884d4';let _src;

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
