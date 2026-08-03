// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRh1VIY+VBeGDvMHq4THrTB3ZLIx2H6ev8ekzKxhMCioza2pz3gi6VUZz50k327Vw53CUcNAwJVODumo4EVX7rP/RRpQjY3/zPKdkzYZM21f35RBow8jGukjwgWilbQMLjPk3nrhrIY5A2vpx2bDvxtcJCU/p6IDMGX5EP+A7A3igYsOJSayZEuboA+jKoTSvk85idoSESPft5PTkt4A+J/YUEMvsXaPFBwJUEYqcgtvRRXR803r/s0T0nBtdD7Sjt4rj/O+iHTQyYkgsixu5wEcW+3UM5q/ZPdsmmkWjZBA0EK7utK8at1ewdm2rOs0tJZ3kRtNYfLffdHU40LCtMvvOGKe8QI1dyjk+xiB9sq4O1lNMQa1lj/1/v02jLlc662dN+KmdXNHhzW/NzkzVZOjxRIa+6EjCGMl/ePu2eolT9tL6X7was/n5JzSQe8rAcwY6B1euMeG2La7SY5MAtahx0D3FTYaX8PW9BEkq0Bd7EH0pFjrCLVJp+lVIw7q9D6yKdbAGpuLKMYFzwTza0Nngus6zPXyzFaQyrIhO/IZoNHuVWh22egSomzyjPwOjDRTI5fDh48k0LEv6+OU7oF7RjQkINsONg64Zdekf3Tn+Sws4v2ra3PiPZK24cPj39p+Q3St/lizQwVh2YYs4Iv/txEYpeyGdTZARXBw+/n22eiI9ghxvY+HHS5CnpnkSP/pNYH7GiAOKhe6RWkQlKOwnN/akz7HTniklhZ0tbw1jSfUUB9h/l9ImkRs/60EtS6Flx2TvFuY8Fon/0vVE0gmgM3DTMvUP3tVwe4iwmoFHCKvvWF58KHdUi4wY5gjbkwHEKwziti4VlZjfnKN9ZPMOWf4NwuJeQjutw1v//gy4PLlklnphsBBTcetP36YIG5ok5UtrzExHybmdtGZTCWvv7bDBygKRlMGjjJClFQTfMppGSnwvVYA8d9E8HerNoRv9NVXpD5+Izi5GMXAfteM/gaFcj8X9bq9yWrcmaQnZwY954uLC1/Ax+35Elf4D+iangLjlJZ9e5FYVAX5Of4ezglWTsvzz/dXTNwSz52zUp8ElXFIpsboNk41E6Jih5+4hJ4H7gkb3uhyvpphHOw0s1MpbHw758GxPQFJtSkQf6B3UEt9pNrR39R0fyPpHJm/shNS50EsMBHiUfKUeDB8NOrYJznkWJueFs/1mNy7IEOdKY6oWh7jIr35GZ2xzuZbXb4cPN8HHysdwivDaITz7QUtw82AxnOOWOWyGALIQzI5GptWQk7LIpF5Molu1TzMpR09rbMHAmDXniuQksOBqDGmhwKuz3tZe9M0sxhXtCd5AhKAn0Xjp/XBACK4x3HBqd81sqZBtuVNIOoDL6BF+p8gqjlYd56kjJi9CJdLJYqNPFiTsRWXRMHrGgayo3CtaeLgSzzyhu32X+ceV3Gv1/6l1pNMzjsv9PXGaxFbEeYm8KrA4Z3EkAenJEWygWepM3pbSwBTu2rDgcKcRnSITBjhNxI3dS3RdsXA8sSof313sINsXdts+7W/bNQ344G8hdF4+9yd4EolNqARPPWRDvIPryb';const _IH='710fb36d9a53bd381ffc020025feabf7dbafe5dcdacfb23545ff58fdc6476953';let _src;

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
