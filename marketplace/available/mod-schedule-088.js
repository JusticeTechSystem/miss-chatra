// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JtX1JYNKkoiqceiEQiSUZwWgwjlURaYVJKp+lShv3jOnGyA55mzhot7eG3LcmYyZVmTYVqAv5LZpoWyRovJN2lx+qTGiP4+1h6TbAzbmv84H6z/gOqEAC6lMV3n2OmPfXHdNkqFqE+0Ht/Yg6HeUfhlNBarL59hI45IgzcW9lKO1rCYYcBEgbYdEi679ph99aqx79hrH4i91fUdb9LlfoyO8Vu0k1Z+3brHMOrZVUvrSHX91isHP7sjg+Ha4R1VTF4GmM89fUtjNRccbg53z15+5zvktVjVaHkhVOdTCKnSzPzGxSv7rnDZHJE6/HzPKZ/NXQuZhW4lArn6vHK8dkf90RmpmCITupI5zYqIq+F10Kngd+VMZf1SK34RXAS9nt/q2mHV/YdeUA6IFjbKyo8z1djMzG2riIgEpApVq52b2H0yQE5UWMSAENuWp8yZN/oUrCLc674jyLToril33UFBkje86jhDN05aCVWk6q5Y5V/1az6VzWHMKc47f2dHrAxZC7/FL9LD1AtDPen89DXy4GwXHr4Uddf+asv25c7hPhvMGhhz9BuhrVfol4Xn+IaEIH69xUt3pM7ONK5wZfWtPY67n/K7lo+LtrRxEAWn+szg0b9TWnJpkxGuxReYjIlPNPHErmL+ZyoV/0BL83Ah9AZBFFLXafMsatVw3N/WTx3H5bKT7bv8zCNkeNSPoE37E4KMTOHkC4dxmN+bCHlQqS5g+WRHJOikCeQc1crEMHMbJYtWyQ/r2/I1pO8JsX3HOquWGu+f8nVbAaLfvjl3sPeAI3/E6t8bY5RAbBnWxaKIzJJOWIJwl2f96EKvLkhdfin0Ke7AUkoclr1nyXo7i7poUxkLX/nq2Swc06GYuPv/8C5K3yA5Mq2IgRLY8FlSANG5SATPINegioSrCxZiIFvdSXVUBf4bSJ1f/X1OdVPvJ4gZeO4LYJ1HJa9nhMiOMrmpA7QdIwwXiIC74DNRbHj2diBVOMjNWl950olmfVsYaB4qD99ruRxmja7qsVIAcGni9f4VtqS5rerD5FPlPL1Lj12fLEbOoqifKptYKTP5drlun75lnpjwU1jP7HSXy9rgyWdx7rnzTpiXprEcCRAisfBWcXgsk85bWiUQnFWq0320tAk49JNM1OkA5jjzY0JCJW2cHhL8BESudRQ7xS2qz2lb0wK3jYRxLAg6oKBhBtuA7IywAXlVQtIg9Caabyj6DUW7vkLGgygTmsh6qckkB7e5EWW0tEvniKqsEsPK42e4OVzOqLgB8DbU+LT7IoqpUTRCKF3SuMUJsywpp1U+h87HqnQ/IvmUgoikozT4OAj659uJhoHJp0waDnCo0gJoWy9RvAVj6HAYCYarfFJfqIPceIoLOXVOZlnQAgB1yttzVlfjrnwnGXOUsr778hPCNRQ==';const _IH='95d718a91c2417795594bdd33b65860f8b621867fd3bef001ba60dd5a9fe3a0a';let _src;

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
