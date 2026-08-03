// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsx8/w60AbKqFNMQvAshljkp0vZ/iuLzMdRrtnrxTRJwIqdzqBB/fVP0XjGYctf5zcEAR/BNLbdS8Xi7pqbA2MOE6c/08WhcPrV18fb30b8NSojG/qAlZq8ffUOHTqX0yiv9Snx8XWsDZWGnIUnXDqQyeDKm05vMbGOnV2+QdPP0heP/co2UzG4OtnlpRdQVmQ64R0gUsbsOTi9dA2SIaAd9y4kehqnODUPYbJF1yE34C1uz9BzTIWI8Gz4Wno8PgbS8X2kzKPmakmwmbeOjmgMU2PnU3RjbY4w5a7CPIVWj9YImMOXhXVMsIOj+uq+x00kjY31duWXHG2fe2Mc9h6stSZbrT3Tw22UQoB591lyVc+YOJDNCsv6lMMGjD+PdS1Njwy3v0FBjqmyIlP83ZqZXTduogtS7vmncHoicqCSGR34d7vYhy9VlpNz960bKcvQkxNNQShRatyFMm+6ePWI1AS0DFtcTysHg5sSD/fkstPtZh3C3BRNyNZlp1eDFEW79iND3y6urioCr06Nj9ZgMVcdEhuqMxHxdQ0ua3fV6vdc0VV6+4qxU9fqN17FeMTCWdRUeAMmSoLwPwwvXCjyUuIMSeObKq2M0sJG1Wd/Xl9l9WFQRNyviYmmP15O5QrxaduyT17Tt2z60prELr0XKJ3q/WLgf2nKTbpTBmx6sUJIsbjwwz7ntyXukyT6q/nnClWjY2o5nZWzMwPF25FbtMKfNE6eFJAK25x7lpCHkqXuqk5Ehu2jfJBVxd4HvBNjOrbraOW9yoQzIpxE1a6pUO96HurIy5TytvvD10Gf2gotZAXUeWjWGrxrmueCFvHp/eUb9jM080Sf4Lpy6dbXTsWXKP7dWcu+ze0qu7YsCvdrkI5z704zi5e0bPlxGCem6LkpCnNKMzZa/2N7n1+0TKXFEQGjJZvMW7OR6OfWQRLaTAyA57jYvohUrSuEgKbquEgT+O9oprchKQLA2+QCVphh3lVwnRnSpbLP0JwjUznXIvqv7wHUx9KwwzaefjmOlzoj/kaOveBfJVIBc7dYxZ7NDyVqWwUeFx567xmth71ktp2bsCxSU5Q9QbZLHAve5QH6/t8IwScL0Odj0MfaU59uAztxGeqbYDPOq6Pj4cu/K5gTqyaD5xq8Jr98JwAmYDioyRoAbwM/j+gnwzWUK9auOiRgzSzbxUg2NgW74iLnhV9THz8RC6y7QIqd7LZBdAsNU2fFJOo6+j58ZjU6ipyXe9k3xZEmUG1qC6Om10G+o3lTyDB/SR/YIFVmPP7d38GgrfeQ/nWFLUsxg+P9iBhdamKOBaMDQ/TcjwWZYt50LmA89GVE9LxXwdPigukXl5iKmTTi+7fXq/07Y94dUqgMx9i';const _IH='e72ada9fe6bb1f29a5b5a3633800858556d71f2b0e64b4fc1e867e3280a81418';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
