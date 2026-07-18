// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNLvKc+0Tbc7RSi2pErOw2DuhIt1E6y9ugd8iADsRX0vzkGJ7gPQSyc+rcvjuJRV8XsCJdRYt/0oLCrRnW7qpqJk9BEhkv/UjltNFzJeQZnQp8vsJdhol3WYa9jPCawrai7yKDiwA9yJi4cNgeIdUrZNFN9dF8F4rki4YENsSBG3BNVm1usDlGdx91NLHqgx3iqqfl5mkY0KJ2n1Qy21xq8wqLEwi9xHYKD3N37cBswICJkY0aYKe6M1yf8yAYjCDTBggtLsuJWTZWpuyapoirXyLWoQvbykyR0a61rfP+GKb5ZF8RhiNXLr9d3d7Eipu/brykQzVy6JGP6Vqsn4+RNItD1KVeHVuHSPItcECWCzYaPbZ23AAQjba5b5XRZ+gloco+cQG1fiuI4P7+dksa0ccvaOk0+gEx8fPdNNqPTsvG6okN9oY/6ntrnVI6N8nwTQ1KdxWQxkaGZFa40Mb/wAcCsoVpwBm8SqlJ9IPjGLIp1sK0x3xkPSpALFfvUt+/+xJTee88rPVK5iJBQBWOttf3FC2HGnwZ2RYgRnTEKj1qmEJ/n06BA3050jKSDmTM9yzTg0DEieGZxTxve8g+P4f6ZM+7E+cgess2eKKQiPEwppGjDcp+9Q46eDKluMy5kPBOtW+/Gcl0YBSZtJ/Ohwqr3yXD1rFlfoSfQrRZ17wMr59JeWaf8g3cqPVL5iI5BSzdBbSe0uXSTzLumF/xZfMMxLS83HY6';const _IH='5640dfaee6ce55e69f55bbe51f7dca0aa759fff3cbc4d8304c980a861529b81c';let _src;

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
