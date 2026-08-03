// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEGzF+u4M713QFZbFljxN2PU0IIC2n/Li4msUvOlEHvYnldS5z+tGfSh7RIrTPu9H4lGN0WCa7ELpO0eSVX0jzBgKqZ8iT/7tTVlGvy7uQZOavDkipkMnjXW9W24No+uNiZlVWBto8Jz6l7Bu1vAjLXQtxrR0NB5m5JeOBtMMqxwn+Z508EESIxfJOEtOUjYiU/DzN1uuKh9NAQ2IrhgVC1wqXB6mVS/BhkowF1zmB5q/+BjgIAmtYCE33kLtSph5ONfXl06ru9hsxJpzQ6v75ySZ5vFFXDg/Q61LAYCiJxIJbTSo5IZeYyIBDztzX5MqjI3Y8QFi6x6LOD5q078PMEiKebu1Ndgah6mA+lGNYHAJMTn+X6NvG9g3JvaK9Gigu6mTKAyGqFgdTNMq6XsNtH/b/Pp0CSrhtpQ8g8QFrcjKWP0OEvtwD28OHVqfpHsbVl6rS5os/f6BoMIzYN29PHnhHP/VWgTD1sugDO4bal5slecxV78Em7Wsqf9l8nJFiamenAu8XwGT958UbHRbnwbB6k9SDDYf8P6oI7rNbOF5vrbAoempZjOv9U0wWee7csUqBMXfVAYjnQZY7xomAx6/jO/aoFAlF8d95r5J3lgm1DDkDrkn9WR1OjdrvGojnKFj/nKeAudiWF0G+Vu5zS5IHEHktgeUMxCI1bf5cXk+b8OGEppz9pQG0E15vE1mcj8ulBr/BPXX0g6Y+8cDeKo+Tc2vqEjhozOMKP0MkMQtTBcaRAmubClW5K1jObYb/58O9nPQ9CWTF7hOZna51Awjd4acEt3dmGQ28SDhTpIpI/+cQ7mKa6UuKspbvMow0uHPfKS71mIShFNS1GQb7Qm43TKU0pBIIP++k7infmpBaqHwJ6gIoekZOnf/otSQi85IGZi4faiDJTcmDLU5msTkNVj9hN7+Z+gVtOSipVjA/34C+xxXZOCyb5k4Atf6BPrYMM1eRmdUUxP57rZ9SFJbki31t/N4MbbzRZt4bac5Gcwh1XiDcUnHBWuiEodiBB/UYulEo9qM3vvZqY8Z9y4YT9YC0s2l+Pan2j0Pn8s0ZktX6SGlj7kSOS7EisoFqIh5M7ZlSbfEj/ezBqDGKIjrRJTHc9PJsB1Ts1oWtjVBCUjMPRFH8t9KEBAv6aLjA9YBB5wGc7+PS6Q4ZZsjdJy98vkV1/lVJSSnYIhOGIkOXp6rDid5jSlzyFXbbWsgcv0wB/u1MScjChdLxBgrttetBO/k7An1MBiO0+CklNKnbXuiwdDUBG1tr9F75M3jg7vXqfaFL8QilZsEoOe0ewIx4gIjJkwUi4QUvcE5n/Ani7rRigugZpDE9CTij2BI4TyW9bL4=';const _IH='a2899a0a70d963c953f4ed4eb2aa01ca0c90d2b0281d93cb7081b62425f6fb30';let _src;

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
