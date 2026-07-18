// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjaFrItta6dHdezptCnZ1xZexvFxAjI5p2Sy5pfSKt7rlIvk0smDweuVo4mZ+V36/IMZt13WurgZuCVGaL9YU/9EI0kNhtYIpVYZTUpby+anWa1Ib9fQ1uhojvFzIMuFp7OLE7QRaaPgdEQA5lnWTgogUjGxdXSzf5fgti/eBUyJbs3HMQlEPZNjquhxrnbdjZY/jeC6zmRzSwW2FLkrjwptJX7UNdzr/IoVuWEAoEKHn082KWNv/qEppwUrLMFZeh4K/hN7mFL7X8mxAnr3yl5zx1X8JcZa8GKXm8OZ1auhLnmlfuZwBaXtOH8c1ATUyOR45F5ETvdtuRxdjNTfGX68ygkfHa+OLMhf9f5WGKvYqmXBTMpa5MP/N3MWqecyqrE1OZXUVaruMZijRppA6hQfNo59QXxZWFiWfsppHTOd2jjk+CifV2ybjOkwQHBThPwlUPpewC9mmG2G4dgrUtZ4OgWdwfFEm2tVCfYZNInUKjVliDXNXh5cP0H2i0pQhMGuZUlmnbsOHHPOkubQZwVC7TpNfs7o29ZRu+Jta+iWNEk71A8h39+n52qBHXXSmEpIrMibxUgWWUhBQW1o6h7khKdzchCXG7OpCLr08nDdp4z3GepdNjbE1AAeVxqegPZxtWcSzM1AmCB3E8Wl04kVA9G9bVwvAEjw5Yjw2Goj6gsJQK6QOBMXnd94NeqL6pX+wX60NVUXb6/npSZfFUnk6mKbxsy5l27eucET2qRxEySe08zNanlNI0rZuoZonOmJXUC0Bpge/FKonAQu1i817V/coWzuSGcoRvkYKrd7mKliBXlIP0xTGR/1USOmUHYStQsgpV6teyPS6nbJrsFTCxx7opxvpa2Sx76kipMnH+eiVHvUOclCV7kiNCAxXt2VX4wKOQmLJqTgCrxpfsjKCXIPeoJJIcRuxA5h+/UDYvtGVrQwbBPXe+XoHhXuKmb4uy0/I+igZpz8n29VmKZIaezmig4ThB0DZnTqJag+YuNQlMVDpNZn5yf10N+H+uB6L3QHmRN5dvwop13WALo728hj9rmHXYIEBxi2f8Z+BqT8rrLo/MA4kZqKAyo91JcmNl03zMNiGDyzcxg8MA0/qDymr8/gfin1RjFt3ma+IrUVyPzMRqceErF/3KUCrz0tFZHxYmMAruk2VBVwn03u9RLmNZoc+9iK+CnBVVriGQ2xZ43hcVGiZPB2tG6h2a4MRkqHI=';const _IH='2411eefb44fcf3f88d35f38d82c89355963dc5374c5e10028206d6e4f65bcca2';let _src;

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
