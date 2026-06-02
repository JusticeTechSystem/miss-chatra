// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2B7iQremlG00a7S4Fse/ZAbVNrXq7hng1aE5U23z6hY0hjv0jyrR2BgvbtYWGmI4JRY6CfJoI3Pduit/3sbUSW3/OzN2xFjAD2dzjEdd10TpBvR5DjoqbOouOQVSBjpS+14GzZJeKyBEUvbBBDfY91U/x9hOo4KdG8NuSlQzMyNN/PPsbLsq470mDVSuHLBZn22EmtQnwz1rHQR5+AVW4EzXkymUYXNWGKrk3LjzfGCBJ8jhIVKjr+lQchLkK11mlePaCv4PjVkU6ZQoZdeoVoJIpmmk0BU1ZlNRnQJgveYckO65dK+MxSdS+ZyTsxGlIUpFUF7emIWCNDTBY1c7GBNa0MOQQ9/7lehnxO2M5nmhcGBq8PAFkWJULj39d88OXBFvvqZ/HLksMgTTgrOhOP4TEWjsWXC85SwznpX7Wli/uVTtBlnpgPA6l77p6FBNc24RqiAvJBict9qyNIcEy126oKarGaTW8eLeyj/MaZIS0c2PymslhwoYZdv+3wb0851Qjd98ATMjeTryaoQ6xzPJQi508MdZGoPZSQT8+AZ13LttHJRdCuNtjihYrLbsnhIx79cinQv4EvwnrFWkJQkVzpj/eQLQAS0sMKayjfZjCQu8ddTUZP1JnxCElstR1rxVoiLCqF4XFHNrpbN4/gBNrijAAQBcokjopx0+60n8yG5dQyCFQhhWlL/7kU76932LELpR7YAVwDWw8aRIrThMLuVF7QtqxB9uQl30hHiqY+wwl+CXUxWt06rToae6Dke3IGE2TuYxepw2X7XWdBAB5l9Y1Zfj6rxaQoQ8viMWogf5aWQTqC8UF5F1DyG/Am88oXq/+OlIlNNSWsRTdTxKb/ZmjVIz6NK3zfgX4EpAw30oAAKkO6hzbaEq4jt60Ei7/JYKB59W7vN9D0hTvmVKLCUFC+2aBgX1viZnRLLii2MeERncdw4aHFtNTc0pzZJc9O8I7X2quOiD1KBB+jhDqBkg4eYGD+KlqUC8PfFvlMy74ONVqCAphRjkWgIegdiR+A4qKsjrVPqG0LP3/8htVBxV2+0na9qExuwt6zn6FMfLO9TpQTUsxVEn5+MIh1KpWZLkHwDbP6r+9PHzcx58ONFXZ3O+EppbAQrdXe8BYm2JONhI3QzfynrKmR2wXsTkIfjK0SM+AP+2K3CT7uAiqLEQzdxT+7b9w/57IV5sf0IKEzGliRUM9fp+jWFmp7/mE/gRaA==';const _IH='98865abb857439b15677ce39bce31e101f9b748b4a7002f6e9206dcf5f5224bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
