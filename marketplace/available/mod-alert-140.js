// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r7Edd0g/bRp8eImWyeEyWTEZIzs55NSoErfHSifARU9NpTa85t/1XU+SX4Yzo0BKHSwCe6lF6xjlTJOvOwyDkd5QDsOmCCkmkb9dF0keN6I2LsDkHS14TBFikmju6ISUwswgQmEb4p1oUAy/8SmBKlgX7OXGquqRweiF5T8EirI7Ip3WNEUV4KgNK1XLVrus4RTxYj+f+xLsyPXOd2DiY1RaC5uDTtzAg6Yzfxf1EdfKydbRWH0+nQft8/jzyRwb73EuriGjgtVwtBOk0vcbbSbzJK5i1daTwMCkwBZcGJs1ExUdwXnoM7eRx3HO4D2gA2cs4oQ6REfhWRUq9EyGmR0ce36wrOjkxEFhUncCktA0DUvYvEqJVbGNonYYdV6gxfESV2kzcPMbsHqJaYOTC4YswSOS8vY8XGulzcLD+LCHAChL1nzusOay40bJ9KCzexjMmXLgU3sywB1tk2f5udlFM9hJo0my+d6aYBPbCCYo+YGxhTOqUgCAnX7PTgwcRGX/2YOLt+EredorYqSftwko8+E9i3J1HlhV36a8jOCyFWqVPLBTNlx+mzuk/P87IzTgud41wY7haQa20U0Z4AwiuNwNWgoq2CS+dwhq6yAsvE7zDdd+Q/ITHOFPwQb4P0JTKcUKFz5qdS78UYvIR7tzr1SmUiiYxMqRw6HdYbADgPKw1VtSMBqxT32epLSZsgnrbZogFevCKe0mZAZEYDNAkOld8LLXo0qqM3V6dBYrkAW3n0+rsqXD3kqSVLAE5fd4vYXe+8WBN/PCb9lfy42n2AQPDBQvqOSnUcmn+jTsM1lh6N+rayiF21JRXc6dYxWS8MOYLAxC3j+O+lp4JvcDleyqZDrc/flzJlKyGIzgyZMlGuXtvO6IlDUvHnR1gjjJkDdZKBmmaW/lOYCf1SUIoG6wST0uhYGTSPzD37v/C13cZ0uKLzVJCRyR6CUxWM31Hom+3Japrv2QZFOKrLiULDK8UeB4DDYG7Sl0PrquWtk6NUgnRCpg6+7Ms7SSElW9KlqURi/1qqO6oxcRyVNEcURKqwokg6Y1Jwmrv8jUGtRNmzHbX+1cc02CyMIWWbMWCXEOPwB8cLRZjzyNhMTXhJQkckbJ0IA6RqoZOFrHPbx0DOPp2EpCxnDN8egnaHPTuSx/HDDyjCbGCOtHzpZsZkePMfMIN+C7VuL8K7O8WEUWRRzLcOfJKGWul8dR0FhuQtrw+IBiqGdxjabrVX48g+1iXM+VKhK2eoYFznlUOLSFfHO4H3LoahQX8+Fa3A1WZjVYy4Fnb889J0Wv3NEe8Co+3xVbRDXEpspsE1OreOMJX+Wdo9d8E+dvwwiCaD4o3UCsG6d48FOLOc6E+B2rhgzVtbh6QKyXWg3K';const _IH='682f01e0a78651308ceebaa30b6b608e10be2ba4b67d83991992b6d12baaf418';let _src;

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
