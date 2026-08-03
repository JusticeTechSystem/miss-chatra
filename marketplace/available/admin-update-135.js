// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBzw8IArCjSg7FKCvtxTEEly9w4z+0eqJ7rK0nh8AqurdIEiwpnl6Bu8bVAAlPUg+SotAhTRe6af6pfZmKPTUnZbb/xx0VjSbqEVjveQpiCCDssAWip8RgkAbbmyd8VrO6Nk15Rymcv6qnMWwMk0jdFUXKD8vAvsytlwUrz1o5bG3pt7GyYNsTgke3xu9FRSVxX84K1oiC6q2mjLkY7b6gINi9+F0Wa7CO70YpC1WlE8mAw2HW7IQj1OqKuJuUdd0pV//C7Eh5Oi9R2tfL/uTBm4kzcRJiwQTBr7+fp/n5gZ76i7BAB+7rp7Q78zGhwK0d0o0n4Emjgu0Xg1OQ/lykUO5W6vY9Q7xl1hnToqvQ+QX1e6VVRq1Blb97+Ya+fahYUWJCPuwgYMsoNnmL2gtMJNX1RLN74s2aUiUk0fbMVNcbdx1oW3HwoEQH6SUKq3HypWJtISelKCc2KQargp/yj1Ydo0nkqZZB3t/IzAVxbXjRyoqlMGmeDhVurY/AzJ5LESpNrwGBj5HnafwHZx7KdXe4T0DqeiOOev8vvATCSuEjeUwzjihGetHnRkTU8aynxlhDH5kpOh8im369zdGJ5hnyY9HV1UiLpFXgQWpZooGOJC/SWKmFO7gVmrk/+7Dqtbb273S0UY7q8A17yZTw7d9JRI30w19Sm5o3nkEyhSOGDEjvYQvlTIysf+S+a3+DaDrc3uo8iGShM5U0vK06Osxb7tvjooL1hk6wx60K7T9VlGsTKQjhE1Kx4/Du8Awzc3q/AuhGXlKeQm1MOthVWDCWB3O30JB0yTSj9jkvAl8Z7V4ZqKnA2g58tiJ12WPhNDEVgm8I+nYHOZc9WqOy+eDJuPSp1b7f2E9T8ve3rc16sjQX6fOEMLAbtYzyCk7ooPGgnGnj4vimq50OYBNnSNaIUEKd/lO/triSCeC24UYEP1eLo3cOJ7hqYYdaI0jsnvtTNuX41Ppi9v04ZZPUfdcTu9j8W5qt+gyWdOIaW0rvrglGw/VQhBCubl9srw==';const _IH='2425eb8a09d7502ba1c273507abe524a0383ea4f1e467743033198819168c37d';let _src;

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
