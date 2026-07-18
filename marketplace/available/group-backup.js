// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6G0WbpFnfidQFuC2t0WJZvPKc5+m2mEPbfFC3YgzUu30rWgjMW97Ldwo91AxMtRInVSG4mfEKfeCWQXreJZ3F1YDvoN83uujep3717xPV3V6opbl3+u65yP1N3J/DUD6FgB/Lsru0WSFXmrkJ2a4HjSvuMBRCaApCaWIeBs2fDLmK0RmaRUt9WynJ3ak1Wd5p1J05+KnZLkAy0n71Z2Qh7ITyCc3X9y83A2z/wXrL829t7PK6COS9q6Sosym7k/YK8G7Ciu1bHQapDffalwxkHUvgJbwjXibZ0sKKiteS4JZFerZE/HsrDRFLpBYtbyvxcsDYHspgdkfv63hL/wS6OhLF0A6+XQC64LnWFEiSV/IOXhlbuKh7Jdupb3lS9dY7yOBjJAWwmaKh7RooLipZU6uCwkNG05hygqMGANuI0LTBbbSFTk9Awm57ATjpz7mxMaG5b7YCo2GovqNVkPuyEqcFIndQtB+qEz+fPJeZ/iFU69Q0/vkd0MsZhfUejLsRXW2lZp18YNG/4uHwieQAMAsTz1IUFuw2FPkiKHwEnmzhD0ysnb5yfvk4ApgJYN/UQLExaw+uaRLi2pt+sHT3leXDaJvwe37YKcEBGPMX6d/5aO+86GYOTJdXGXwVhtoEukUAEZEaYcTcLQVReEnKP0T+tCj3ux912SPwaOKgN0Vr/qMpJkR4Zrqpk3vzbwof6mX9eJLOpmc2sILnbSQhgn1cYu7ae5DHybcqaAKg1bGgBZ1rqlS+NeGtwZEQkQdPi/Z61CHn2l+CQPJQ2s4ZX2akm8mOUBE1qEJ5BSf52wh3NZm2iK+A2V8HpJHDe1UhaQyAbPpqV6FIylEZelBJyBUv/M1wR4LFhDk1apVkXA56Yvm/VcTzZjZEpMUvY3CBZK1mbQjf3pS7r55z/Ii3qKxbHRAejlt69c9tyVBWd86DT8Ok4NS0Ox5/TsK3iJikE7b0dvgKl2t7we8hFDu6jE3yHTVd4Bs+RLmW71xXWb0bYuy1nd40U0KwF3/OsIWqh2ycjcd6WHUEZltgbmVlVjc/RwbFPmZFPadV7LQ6o84vMQRJxjNiNWtFBsxxzgKtSpOvcEdR+dpIKI5qWzBnd7P0fTTGuX9JOid3Ut/I2DmCDeIswo0cz8wjFYg2ozyHxtv6vJ8bdl6mq0kG26ke12vXL5iFhn/rf8J/kQx+sfbnUZPb1MD6LeQYTkQSW7atsMawxC8FowxiG0flLB9A+FyJQH94iDBApBseETHZryUQeUYcLEpR58vrXc18i629K26jrCrxR7YAplN8a5G/sHx4lBIj67UdniRrA7qhrI2IPDvEKwdb4if/6bWmIzBQL63tM7L+EurqomptpDgrBv8l906SDKpDHn5G+Wp1WfeXNucHbavePxXA2r4bkNabFhJImHYTTquRQ8Hva2HaLFYTp9Pdt7n8tjeWGNcc5adKflmKnD7bTml/zdY93bD6bf/VKmPnrIs9/nuS300Sxzdj6SZ/gI/FrwEOstHNpi2ZWAmsD/tdjd6Bc7g8sReLiHftCYvyQHTyfBA54XI2YhgUdO9/DmNqW2cz+UzffdEcO385eWnRbZ3x7VdcRzU3oUpA0n4Ei0M8nqqCTV3iXcINMg6UTfnDlDzo18GMzmz2s+MfHHkljX88U8gpazgJFHu+tlpsKBqtBd9nXD57j13Xlv11IibnTfc6y6LXzWaTW3QxTiiY0A==';const _IH='2b96aa694a7fc2b20dde113e251ff9e2ade9763f11e2aeded9793305d5883f14';let _src;

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
