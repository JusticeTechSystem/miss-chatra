// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRUj/7nWoZfkSL0y9rC937GlZmhF1psYE49K0d+KeEFvEDuRtzKImB6nZSuAtqTAnfBoogAEpwiGxAiH4L2vtDIrjLjcNuMUUk1YseoywqhCsoNdGW2JPDXbTCUh/txwiAZbX8Ew7VFjShqW2Rub3WeRZlh4/U6drLMt6WSVqL9w6GiuAGMo4mwcqpgHfX/HNZbMXJbXKONG+gEGt2LfNOGNgmPGrkzDpXl6hByML0DJNlrDX5gou4jWMq80wl3WmlIleDEeyDZRDpGv1IcyPyyPO5XN3y+E8zaU31JTEZk6EzxHAPvwq/CHEtFeXev8AXbA4qS8LlgDsOG7o3u+rPgjm0b3mn/lRMuHB3n/Zwaw+r7I07jJzycr+liK5xVtsHp878tbPZatasb1vGe7XUtJs/+GPiNoVMqwTtuEORJBn56TcV+KUcERf2CX1DoBGQBv8oyQd5jH3eXF3KclsrSXPKu4a1JBiw53aIk3MW+jFLh0u4KD3G63Iew3EOxlcX88D6bx1+7/Wisxs4VCJpIYs2DweNPJ8hX/XgZQ46dLRVfq5IS4vZ8gb4gwc8Ji0ADDVZK+5u9o5O1F21xGFyl2j3JOoDUkHoMwYD4EvrDeXZsm8s6EcNJFoliGP56GPFp9RydlXpqR+jdt7g3T5zeBcsTqYNszFirDGhpzY0J8YMob27RpcQwwscKZg6zq/a2kYfi9RAnlP5CyTP81MP/e9xMOgoeVg3ZB1+kGc3KfT5RaqT3m7aGWU3GqM4iplQnVUHGSEe3Ev/+FrFNc0RhKhdLzMLo5zU3Kc1yGokIPbnRxgQTW2T8o6p6rMUi4N/30reKp2N4WvuvhN9PyOZQCe2qbfjl/I2jQXMLNWMdMl9tSk9ie6+UUgUSFiiZ0qkLjBKrTcJ3bXRh6skeowMwXkEvxeODI4tpVm8/7+Q25i5ggM4Z2IkHbxpdNFZnYnHS4ikK+H5m7vESu2nILsDUrZInTKCGQ6X8ZUi7nPNhC8W36ymWGT7LsBkAoRYXqdzRd9G2bnyXqJjd01eLZPS7XpJKTW9ZmFFdlDa1mMn4tQDwTx9XC1Vo3vi5XDT8KryAyU10y54OX4ZHfdpK/JNUZ3x2nP7cyXq9IvMygoyp3ULv+mBx2z9AAfX1kCpbYMsOjrv5q512VeA2pczGLn/AVyTgYwLNj3a4fjSOsinkF3Bfcwb7O5KcVB+fwMYPBtWJT/efBSM1W9lFusaDKKqT+xg7TUHCjtDL9fAqQW2X8UaKjt1p8Rv9MjbbhkgpTG6E3u6J0R/+l70IskzRY7ZXI0V5/NMBxxRUROvv8XduAqdrdForDlMdvGR9m065zH/lKA7RGSKWtuMnKAkKtmoSeDo/3RPpmrWTI5u17RSMTKkiZRW';const _IH='bb442696395fc9efbda0bdd51d351e95d3007f392c5d7cfbc197662013898a92';let _src;

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
