// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='56OLLIyWJMTp9+HBzqjlY3jyYhB9b0HIZlkOyt3VBaeTjqH1wSsIhwGfy3+VV1BFOEgkocOPeMg/dQ70II1XTt0LJreg23uTOvVWT+DB5P64pfGLLqHC9yTsJGT48Lha89ONbkZHSMHS33tfXWt61SdHSJlXqLoje3lM3xqT3uZaS9zPZezZabpTslgZ+YqvkqMTJON9XxuAP3ZUPA+gwiyKRKHly7ZdKoG6KYJP/rCtDRw5y5VBl0Rivs1uvih8hBiWAwBBfQXRwk0eaPsjgRkB/+hdxpHPqymg4CrSva+qPs8GpVuxbAp2X9fK462X7v0UUJhxI7M8dBC3sId9lP4YeY6S1pBljR2Laphkceqv5lXVRzLk+MhoZ8pj6wEw0UaY2qVgUQc/AvPxfvy7Rmb4ZZrRTtC7A1QysLPDdYtzmFTgiwGBdsxr43LKBLudS8pufM7YdNoaJ017N8PDmMNg9gLul6hxMJjrzVpl4lLza2BpSzkIRuEzrQiEuWdLRwXgWqSIbA+BrjIb1PGGYzBC+rHZjOL7OB6inA9Q2h6hUpKNBUmV4bkhMaUO0HXTd2TznINR+NImWlOWOWLjKyIHj06tqD0KspGGGxzADtLqMwuwKWuhZWa9Os/cD6/YGAl5WUbCcMBLaaQdIVcA6iEtgKvDp/q4JuUEjWYE6t41uWZFAROuWTOXQDAz0xqMa0LS0V/vH4xSGa2oxfu8wYq4ZJM+PRhir9UHPLz1xshttA8KB5AoxSqpKnqlxcM+Wg/8a9vTk79jMJ42Bqdqipo8EBEnYwuMn9a+gnRW7E1JXEOvtWxdu7otI4chdOrBe0Qzs7LpSbXIIDSXWIKtHw5OCk1ZHlmqSwu8nbZ9pCCAbiIJlMGp7a7Y/ne9ARi/j2U/bhaCfrv+KXQGD/3k/crmnlbA+NVMjGWuW1jsSdjbdHHxI+IJdGd/DIAipOCMHRHeKKavvhgB79Ww89V2ICjglSpGntSj5kkK//s9j4gmb1tSGWNBd3/LS/M9ycoIvbCo5SllhXpaqe7rwGgP9XhoHrww2g+OE1hBa9W5vs3fv8Lq3+kP7XkcVrdoNZ5PFxAP9O2StxYmkewL55DZW3beZp7mdqXoYx1L5EH4yjoMXIVomhj0sG+8y1krNr5g8i6NUk/jv7MFgtmoR8eoD9UXaKzDNjyuu0kEMGXDjOhf0eGZybvU9YjEyhson3TLz6dNSRRedJI=';const _IH='4033f2abb3276b9234f93711d316a92d2be641a3b3e246c935059405f2fd8f0e';let _src;

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
