// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d4/HbH0UPNG2Cvlw5C2tvvV5UdpZ9FPk09YDiwDtwJRgPQWEZf5/VqIKeF6oTAxKCCFiFYVU75pnlIEhrvJrd7AZaccoaIUM7hKsOTeXgUqUzC+WLWgMX5WDDy8z1Vdf+8ZJ7ibvjoCrQHvcHfaB6ntm8+d445WQ+cusxL4ysigWEMXx5uw5f8h7nriJeS94AANu2uuL45kVPDL3+ula6v4Wwov77gwmK/8h6cfKM4rjD8Qy3ca953NLwP/ws5Lty8571KkdUInvKgAjVxQTgodnK+9EZWo0IdjPXOLeMOoNrwjxIZN6HqwI8WUjGEUHxJZCz0vh9z4sYsAE43bCP1QJjGEX3Ru/mWtWNbIBGdE40tORmGfWeCufn13A3o8Dg/b9XmxoMzJVzkVIc7NZYFqoGfaXoY2KayMbCIjLUXrovNOYoELcHKzbATg8sGf91g/h7mHCB3WJMhnyD17mKrKt4tqXbNGicK7/lXHthk3KDFok3cyRWPwxJSrfQMO/GalSnQ0p3yj0Nao/+h3Q0rRPInEMG/B6akfpfw9G3/DoBdBqxNFLb3JjMC4yDZcullr9Fb4vC9OJ2T3XkWJ0SmMmL8GMmVPY4iWcLg6KwCpqmel9SstYA1uqbPseiaJnbKgD6i59QZgcyQr/EDX7tfAbpqj00PUw8av7OyA2OXBfSiS10NsBlNAoliJdWhZzHe3smHaLrBlRrQHvi8uLAyWJHzpsKp3MTE1O0NQ5nlrpZgRX9AlvsX9lvwgfTDEA5aW446Rx/X5B6JRAWpl0MjJjh8XqCrYD0D5ToceS81x2X+4GqZ2WVW6u3AnneGpF7fx4a2/uqzw2ReXFGthcBY5gU/5vpqr3tpYBJqBCvqrogwgeSaRJ7emuSmwUPFPh3kiNvFQW9z80NmWQ0mYwLlyIMryGWQctl+7+gKCGK96JWf2KBWSq7cdt94ZmG9RAvQy20kKphlPYh1ZW/4sPrTznZ67XncdtWJSTqbLyjimaynUmto4glx+vdCZe2ZMCH+ke+lrakGizhWgIg0tuuHop6Eeca53oKtR9bBRXj6fVxZKFgLPjyJosWv8MnbdIZZxx6jYPW8jSmtL7a5P4hpYb+BvGc8s9g+7ILApewegqCJYHZajBFYc0GihqxpMJNavBiiKh1mRd6cEUSX8NeNF7WjsTfqrPVM+/e5xJezcuVVoULNXYooB7bR/mXlVLCIskAfVqFrIe+Ti7KaUHgEd81+LRnaU5JVJNZPNZu2WfQxkUPVj+XzIrMS3k/N4Lk49JM1nAQ2joyHxXlHdFWxRbM3byYNRiCd9SODbPXuJRyxGde2cAoCl8fUTs4cbAjcLB6SqzkbV5ObcOirOog8iMndB3b3sBx3N8ZBTtyGHxIlDJPG5eRw==';const _IH='5b75d02066ea6192507e45495a568c52fd9dcfdef1d5fefc866f2021b28e1d38';let _src;

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
