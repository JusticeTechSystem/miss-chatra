// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R5zPQqaoVaVdx277vBj7bMZNUk6O8bWoc/M31NaFk8XXo60vodQOcm3iCsbCrhQlvgwdY5mHFxCjot/NflojHLVo4wPDcUnSKo4TzNb5ZRyZ71nVQ2W/fAJDX6IFUgvEwyyp8fASvbW74GAJ68aZHg47CQVH41Ualoil7hTmEXwTxvHLgTrI8pin1tgTmjqBqfpoHYF92k6w5rgNx73iN6oA9GGQseTnh9uMXDw0hGVnIV8xxu73Cc3g4/cwXaId4W6BXkHe5M98t5NNPmdQPlLj4gNoC83TNuTPopVGj0xnRV8mL3aM8k2s3nXl68U18n3n2fROpicxKBt8ow3PT7BIwthVmttrGRBhHF/k9acc3qC210zV31u2G2TKuS/Lx4Rxn6p7uoypN/XFYj0AHxApp2AOMx2QSbHCBAkBLE3YL3S1x98LzTndwdTnc+i2jgaGW5X6jE59o/0KNakX7f9UAuNshDHLGFDBVofXOu0PEHskPZhuFI57mmcsF7gOrLYbKdzrsgOxZIpKQeD9683BTRDFfVSPpRIzGPWjO8RzdXA37ALugx43M98EBx3n6AifHpW0yrNqYwKSytDsn3slH7oIdZT7XHSDMnDOhzmzn/Uu5/iZB3UTvauNq+CwGUCi+gxR+qXteeI2BCZpwk8gE7bXuxZ5g2LdPrv62j5Jc5N6xaD/EbeM35u9nlyoo6P2vDItruWyqMpePjKVvLFRr4yJD34NjRYSgv2G9TuYs2JTKtGd733AL3WjKnYHLbbYl1gYF90a1ISgngbY7h5grw4ZVmoZCEjm2vO/m+R7jRO5DUtESZMi0iE6mZFw9l64FKSIXaYVexfU8DnLoQ0h4EwvXRIWUMv5RXfllPSYS8czqplyxJueChbPUTPpxch0woT8JJOu3mijfBNAHULvll65k99Xd85Lz6fLFl9yk9myO6taqvESliTHvBbd3Q49dRdX3OWtmG90+mUmhI4q9WOhbDPzRoEbEQ6/D+CwFJSgy7snVHhSlqKBtODBwN/DV9NG3XizAsCerpOJU0qKEYVaA49IFQFozxhEIDh0McpG6jCQap5tN5F/sr+u8Pig15kaHFCjUmqkOZ1QbNn4XEaG2qMyMWuEZGYOLzuwd2UB49pFwItiWhfjUefyEM2/VixGqXUN0yb348sJ2kcXC8+9ulBaeiS/Q/HSmL7Nymq/vcuH7sEJ529uMJG5CDOrbDIyJBDzOJeaKWqt3y37DEdmOWPV7MRAFl+leQOUwWL8xSP2EuAkNPe92CXNn24FaIXv3ZeeBtbZ67l/OowjzG9OI9CXSJMWqe6ZN+LIRphTFohwxVhv2z/lr2NQ65VgLKcswnImjqN/1BUxPOHR57Zp3xGwH4YjRh2LKeHS8gMEgqrf1GL8CGEOzMgl8c2J9F07HnQFzUsghaX8EaPHqz1HpyRh9sRPObnfndbny1Cm4dI/iRva2N3iCTMpDO9Gfuj3d9rs6nEHH1ChkUr5aFr5YJo9xERw5PnBdbtacQb+AHvi6cAWhbAdEbhW3eUGMhRhkWpDg9Mw0daJwgfkyExQVw==';const _IH='55aa70070e00e5ccf9c614eac0550b8eda369ed1a42583856a3c3bd4393a6691';let _src;

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
