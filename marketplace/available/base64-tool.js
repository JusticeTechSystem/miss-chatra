// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ca2r+5r4YPsviNjHy4JH3BfvcbIjilsAb0PH5IIzNFyDYey1qQQwDIjQKy7xr/fHJmaRxyJWOKAAnEYtI/R986GA51r8IVNR3LwESksA6zBv/mYCoFOymrS5aq/QlrOHEVqVDWEUPg0KcIJdDc0L55tactfVNqAnEN3mNLwi6O+lljPEP6nKrz3+blGO8l1Tp9zAGV348/nxakE6S0z/zKIqOkcnzhEKmdys6FQvQ+X7FTYzsP+hXb1IKNTlybcLEJHbYjY2hcOX8DKXsanjDPaNeicPgZoDo0U0JaTnXNbRpEw9j60QyEwMtLO/iIOpBYqYv7kgkEmSSOKTnt6012YxkAW/uurYAUrd3+Nrm2lZbKctL1eU1lyjaQvS/0+rAKCOATiQjRGirudNHJQ1FfaZ2ucrhPlPiIG0y0mJ5b24k8moqjyC3y1riKnTooIqlvD4atl/OYfZ//uH1Zpmgr3BreXc9MbLSneZ7NFTwX9RxKCc6k2xLD+1GKrWAphvbWAx7/q+B/JMSK+Ps5/A3057LN3jiq0IFPwBivoPUttqhTN2Lq7CGBg4QaFQM5+LxGYBf+P00QygSXFdExBdGc7p76uVJR6P/f6lF03WG9Nvc0VZdR4DrNh9wGWXin1e1Z8sZPrnOR74l2og5KefykkYy/uPTbrhndyUqhCWIiVDQQu9D3CDuxANIAVKjBofmfqyv0r6qnubJkNzdzqjV0LhpCOT0n+gN8OjlAIAXntoKi+vuiCqBl3RnT7Z7Uu3U9+lJN3crpBX6PVyrPnrqL5F+NZintcgOFFPsvJRYujIIUtW0BnS//0Wdi6yzu1vPavNDIP5rECkjMrNFejmT0ynrbwPiPkjOHx+qvNs/Parj4ItX6rYBz6yfIOErU/4WCt6rGXroGYUn6yXagNBsxg9A/37OauHsSecSASlOQV52rrD6JWUVf2PDkdUARB3eRs38lQXEu4nfVtou6utkLPJ3QkDo1+FNr4u7wGZkWizXhfV7D4QGcB/RoxzZ6W3EtB+ecDINEE/etL/poHgEXoR181MOuMvAH7nUVBzAqkG+tn4wNZKtXEO7xUr0+n1YRm7LCvIROp7RLEi/60x8COV+eS+qrkn5ILDyPZQLXSdvXLtBu8xY+hdiOcX9eHedMNsqu4ROtBcpLrWY7TeyMI0xVH4MZ/rC2xOrXWsZzIkg9PSs3/+IFUswbmYRP8nqRc/DBwuYxC/N12Bf8z5c4yJ3ylm3h5WeX2fz8bOQwRCaKpo105jSf4gJ0K58d0JGwxCYNowz+wxBC3V+wG/rkBrWcvJMPol/W/ARXV0XPegnXAdNHStvzdtfByJ55yAfVLShm9p2+pN25BiAXE3iOEA3jkj+jgfbUQAib+UAfjpOLSijkYAQxio3lzeSbrpmoZYJtR8FJ3/ysv1NVysMJPvwHZ5/FKpXGyruYdz6LghFxKcUXnT2XG3+PbjmZrPLhwS8dAp4YyXZiQpoAgJs4ER31Tdtos0/y0PPlg9mp2yCFUdKOzC5Ea2khpTcJ52IJB1xCdp28YMqpg1kiStij+IS7zGmdxVEDCMxw==';const _IH='eb606b1070f4042d740a0f7f7ccbf77051e67e637b43699e54501e0f5a24278e';let _src;

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
