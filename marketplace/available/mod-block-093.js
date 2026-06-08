// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2oTMiaDudQVGASokXOI2o8g8OxG1ToJraUqEUSu1dFM+29jh5gABmo4c85lXf7DiiaWQTRvJeSkEsWpWWxCmTyEcQFeZNlURX0yJR7AdJis/tjeRLfcplu2TY9dyYv/R31cG/tbQi+/UmKMYae1kb3WwxxNBMKvVt5ZUkDlltuIjkHoGauaegEM6SZXGA5HSLJYlVu+9N9T3ffskZEPL446uZXzUObW6wTX4W5m8X1pWzbBtZLeAw4ez5WhuSvz2fwCaTul/7OEwNgjwSvHIEb6Ro+OWogchYx/UtIeEyLT0BhDS7x/McBd7N51TNM9ug+bE8SkWZpNu+UzjV2jGgHW8B0Ti8SHpbXzg77TRs/YjcU3yLE8ycR+JlO/KF2ryYmuShqdVHxYKRCFT+OG6rF1hej8B/5NFM2bIpMDGf+Y8+BK1o7CClDzw/cu0d8u24QR1vsQv/v3UUIZJrBe1dY50zJBi30ju4gGz9MYk99+uh1ldDvPQiUB2c3adoZm7KR0djJ+wEsgSGdnxJ3reXUUDEU6Dg96pbrNnwIZxgf+LuFZeMUN90VHEsjNsN3tv5Y5WmUI1mW1vW6b3h6YKC6VzhN1gcECrvMng35q23p7YskUypOqk1YcBM4mqHKClDNT+U38UUF2gXzzggWLK+sRXwGBT8Kdcc6DGHr22lHd9DwpAupAJwEUm8h+56f/WioYDUpKM01e4lgKcwrzkROPWCe4Gd6NgQU0N/T2WEtbkvu27oonuiYHtrwJa7u91SNVyZ7mUtGNhAd4iFoONWgGON3WZ2uAJ74FMPxVA+OQYrQvli5vaEqb9R4fIbR+MOJeg96RUxOGzf8yQupG2EbEXZvq/s5YY8HgX9gy1u6lO3a+xzxokeqx2f15TTMzvtOuxaKP+hN4ooCXohBs2ds5vL22e/vXgvLM+sbKgRrtFcqUsJ9h/X9Z7Mhl/rLIur7ZpP7kcJ4e+sNbDj6zLtjs2EfOFZKH2BMnfbWKK1GNOROSDzsT2IHDG4XqIB6HGBdnIOP+j9sYK/OP29ARjaEyIR2SLg26uJJDTk5oI9ZdEv/98qLgXIXofI8Gdv4r72qOII8g6bcYI6pJr4QOwLoQ/0ujrkWPt8LyZ008ORGHgi+kXU6enHgxZzllFEl2DZ4yjitVbq4bPkpTxwv0Q2p/QYhN1QRSS44/zvCS7REkXkMwnUrWtY2o/zO6UlSr4YquMEATjnj0W9XywHMKsOvOtF11bp22G7qZB60hQWsyqnkIiSP+5HbWzwDD8d4vIw8d0GJJnfwtA3ub8KJnaD9glroof8yctYV+hmtNewslY29N5wNQ6PEOHJAIPomfibR8obVQi4sbyoKia5tOw0DtmYLyBKtDvw==';const _IH='db24d73ea35b5474b261cf3c192f87b4a350532caaae4b5269828d39782e47e7';let _src;

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
