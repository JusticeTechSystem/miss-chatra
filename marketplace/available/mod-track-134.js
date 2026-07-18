// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQz9+Prec5YLtafNOftVEpMUspFeWC16M0a5qAqPV35a1zf4I2SNywlYg0e46zcPi/lJikcnxTqDVGwEVEWFOhv6Y0WwK8yQ0mJONhLqSXbgc6rJOYtQ7zH1YLX/4YX4q4KNQPozOi2iWZNqdbIk5/uRV5TsvXnhf9w4Q84l+6wMqYW/jj0jxEvDtSqNsiHoYptPJ3J81OumHnr1DU/6ZEULu8iJ4da7OPO9pfMrCxgmC/HzhozrUBg6/rlGaRgZT88KPGVa4wThHqAIo6dGkgVkJVyvq5fuO2f1LFKh2go40BlLZlHNLLrLgMLZp8UusRN+gASw64NWliIV9d6oMdvZAWz206M04osyaJ70dQg1qSRs3Q8i724RbMnfCG7TZwH6J3SGWVN6TiW5CIf2GOkY8fe5ucMi4lm//o86+iNgsVZn1WSWYQhSYieVt+e/SPuQun1nIzBuFdHc5WWkRCY3O1BRlMyqMlrYlKDcymdEAl158B4FoKR9wIs5MxPyNf0vh2/hWBnXcPfo2T9zNu9HJW8px+cT+x/MYBv2Jwlk/Cwo2Z6LmmDqsIzpGXp+2UxkXsp6xiUft7PLndjKTJHbAgssFrU+jAb4jiLnp59bYOWjke33fGPA4IwxKbDhK9kEKN7ZpbSzqyPXAHVjg4rOBZlzGx1I40t+qU1kk2VxT9+6knyso1fsKY8Hf0kioSvBgnhHsYYAqBjZ/E9oT2ua64lJfzuEcTAqw7LlaoP584BxG0nLlQCg6DIfheeT9r4kNNVKTKm1nwvifMBwn3GJ6N6e0DoWWl3+vhMZES6L/0pUKzby6/1rkDukBxbRwV6SJLYlI5tdFGPp+5yyNiLvFKYHd9wqLS47zsP2t1V+8WIUf7iWGfxwfL1BluJNw3p55NG/DrjFy6i9UUKYgzTFTPmArbLJfUeMNMwqRjwebUF8WPII9PAKXMm08RkaUKJJD7HW2WtlaX3Sr6A42g1l08EqhxsQp2rQA6zo8RhtO53UEDI51w/yttWRYPhSusna6s73dwPRi6SZIKbbDdVRvtp/hMBX+6Fn7ByFqeDc3ZDR1GQ6BXbK+FK2pRJWnQDxbianyFDRYUvyuy0KyuDj2Zuz+4SFbXKX6AnLrwqoIN1mHM0gbK2VdQ7n4gQm6V+Nl22rPO34QQRHScAQmBfC0sFlBH6Fk1ZP4a3C/V2Tlj68hSaXMBvd+ECgR8EC0vggPnyOWNj1PAWOKfwqZP0P0CX8FI6EgjgiNX5lpRR2Eeq6C8100n0cpQO76EtwyBzR3aMt5aekntr5fsVHrbql0bPm+/oGCvEYj31Iu1RFzr5SaxfJ4X+zDg0e1a4DC+1vNrT8IqVu1p3SMdFm2OVD2vBwiw5ucT94xadqSU=';const _IH='b707efec4c04e4153fae669ebda61fe331775714f9f5c4ed690deb772d2b05a6';let _src;

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
