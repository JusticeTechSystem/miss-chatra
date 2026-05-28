// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nW+rv73hTXKZCCV6KaMK+5pdTgxkPAO2CWwdlZ/8cwE50NTPvfuNxJq5e9cYo3h4/4t0+8G0Fa4jF2q6M0+ZUWtg4cn9AKOBdFfZUYPaSi/4GxcdE++GoZC8VfciTAr+iIPX4/ekXfmnpYtg2T1Y78aftdK97KcVRbwn3EXBk8oSxBIarhlZHj3u+2lnHhOwD/Eo9O1MmlU2onuG7QY5VKWeUJsVHUPdH44Shj0lTS3rroiAlaogaCv2vV1tbo2Vxki5vmW4fo9I8HW29jLvIAmmAuuBMjQFFKdTDtSeV1xBapv0HHDH81QSJdFbGti/C34xv4MlzJCOlthEJ25MlcgARaMQ/7bm4QtdOtPWfVzP5feV9ebLrJoSp+x7+xxv9ceqmSCaya0qLANBWvjAhwK+XUd5OkjzsaEuS71zifePa67Ss/Sj++nl/6lvTjihup5U5T/de9/DBpTq/3PkKQUsJ+i2MZ05sgOi18uu78nAmNZtw/++QuBjADsfqi7I4V3TSwZ9ATOR1V8POvN1SgxUV4jOyD4zNdF40aYmNzwQtiyShtiEiuOaMcgfssIF4byyg1AzvJY33+pO4mYFtAxs9+IpTbnRULQ+fK1C4UAOCzYDt2I5UV2orQFXZnR5CTkvfyv1sZcmp9VquVbsDX5bNJ3IPMCjAZaLfh2U/nxsyiHUb+sINh4cSgCpZJLNJgD7873c0QiEzgitSJJK+6P1QpoD/W8qj87gpInDaYLUfKnuiPv6L/ycn/DFWH2qDILmyPnlv975G5FKGtQ5lbQ16BoGpErpcmYUxwcUcAqlk8ByhkMvE1ZU6tOSeyFzZImhYy59Hk5u933U8LjUFCKtQwXoCz88nXDzHe4vYF+9YR+HOIpbAD6q41fRAECxX8QOzoN63NyZZw/0liB0zreZuL9zFOcR1QFKoVtvT9CnRT0ySY9E3VVYmLr3Szg2OhRW5erOj+fTWU5Gz/VmFXSTKAhAsFciCywnR/35CPxwi51z06zIp5IoISEWguTl4YT1SP6rEj1kemNQ1NciPtKTinDIuNUChEgWV7kv6iE0AKEQykD+CgujGOlLKF6vcqeptgHsRzt9xarCr5NjW7/mTchvFRhrxu8g5EKO5qN77RamjRZtUUJuDn29sp6ejp/Lz+9rCDdS+aqCnH3vQjaVlM+lKuojUmO7IJOOMMSLry5WMkPUpSs6+QqpQI8wHMuqQ57Kt26OFvC7Wdn+pnF9wQwR1wcL7jJeI2k/fPwA+Fm6h/maYa8CXRhGKbE2lkPSq1ARvo+vbsbGURbYsnFyUWaLBlUH3VP9Zuq74DkboabjNY/7KlovTCtwKwFbFE+vX6TlHhEUHQRRK9lLcVXRaLEoW30YWA==';const _IH='b451434c63820e7f0bdad3f62c406a88f91bea417b96a31e4604523cae5d1337';let _src;

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
