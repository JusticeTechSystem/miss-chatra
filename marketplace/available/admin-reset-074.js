// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2q3w3T+6H7PnVTSizAh8k4zz42jlbdUyvpTgLABPh1K9h3S4U20Ehk5wn1SRLYMCcSwun7YbTUbdi8XS8DIt9fqyFU6ShdAkLeCd0mwpJ7AxZTSM36zsgQmWmOv3OSSVAmx5P3kdTrkazfD3ZCF4f2GkZ9nXLvAymfHkYG+lgA8ydnE3Uqc3ifj1GQzeLJXqhh/fE/6df328uid+RUDqz1wygSWZBRx/duPDazIsXBZDuVwfYOJbg1oX5NeppqSlufTPf5IXjLN0F+sNxf14K5BjiddiGKIZwtAl6gJePXFHq6qjee8hupl0AZEA13aTUvB7759g5bLrLVMNQgd03PGyueodu7Ocj18/43ZVWBJXmcgQ0FEK5DBnEceCYhXqRUE8AADOZZqThGTJxKEpZfemQPxXpE2OG+uN8Rn7s+gLil9TzvAqYJ6XX+Q1WWWUlG6vvyrxH+a8J922FT3zZC4EmTcqP8Sbg3gTmu/vzU5X+JEIHTvTdl92DUeMD3WbImDIxKrwBxIyvOrNdQ6QVmzNep8wA80mb2XCA0LNJzVYMX0QNIvSPuZIw5PC0u9MVmT8ViAsPC/MLn39JKBP4YH/gyqvERQ3vfQE3eBjNWqCASa0cAmux8MtfiVPfzX8U4T40Tud0pstntoT2/WTLe5cUm83oh3qkg2CyWH1wnDrg/xK6bLkFx5T0NM4M4tDN6+zNjmOyR9AnxexCsdfKdojEo34i88EeI5PmVkImcYco1nDSfp+nB8Cn27aDRzJpwlW1H5rstwrpv+a0K1Hegft/g2ma3LN/vEqclKSFwi3Rvfq9KEB6dknrdftSp4Ngbrlq4uy8lnaLoW+x+QtNLXdZ8Deh29Qm9cqDkExfxXLinEA+WFlLXwjPzMCOrGaVCkR4bxOMSIplXuYrMvSTq7O21AvzjLhY35x5MycG5mjs9aN5NRfgwP6UC+dbv+jmYB7b62ex1Af9IumvNdaPTIkl61hZ4a/FVM0mTyAH1ugUTBR61Q==';const _IH='dd2621149bfb7d458d24b36d6faa760afc4950afa6eae187e9d55c465cae67cf';let _src;

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
