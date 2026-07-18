// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5UpSmrWdbuNOzI82ySf8ga/CKJEgWM7hS8/CIdrppgy1p/cuYb9sY5e3AzymXOT3pdmBUra8MN2qB0h2a3P9B8N/HgrUz3xQWxZcIax0paa34Kr8soz7EQChluoNSJsMSpejC/qoZvRtBopVsc5AXiAPrmlnumGN8Jgx3/8cKNHzz1CECIhvc5SGMkyvtAdehMcFJ42b5TNS7yQNMsyw+WUqp96dI0flE6qyW57JcJRma8n7Loqia7Ymb+wrA2+gB6W0XvAWiZ/PbZ1BkAsr8MOXvRt1rux8nIF2yCqc1B8C2wRMsqkzTBm9whCjep9pbwDZRrbIuPbdJfPCoe1JZ8KR3sb8D80D6rnN85EbgcL7i8CLx05rXIyORYo/iL/lp2SIA3iNy1QMdkDQXNuj1IEvfCzeOoOwql/9J9TwBwnvJKdQIiQ6neR8Af07LIb5JFymUpu/4Dhe8crt7oK8exU8bNU3vc26IMkjlhUIerqSsSuTcj6JEEy7h2ML37L2DDbMFZffau8ulrbMdwGGSUa3N+0deoPjFcJ6vW8z1lLf63mkE7rPXVjDKBDT2r2ezRLrs9Dgpy3WrEJ2Iz2wZTDoHfrdtT2fd4OOQRgyGfbzaQ4t5ihgQb4Lg1a9bLKmEOYJbFlrAKZ+iIqdayfFfpIB6AECPQezqE8ZPJzAH9DXsTn13DOpg1m8pSBIOmRJDRPRGNBdsWntoefqZZA6OzQafhR9HCCyTyWVi4K+Q+4cOholHEEaGCcaczgIj5r0K5Z2CJljsiD0bYspqxBVH/t8793y0+rb4r2HzD1Y90c4vF8mAI5wEeWyEDkjXzQW6SlZotQQiSfBKrcEJe//HemM6VM0z4HivVnw0FkBYSa35vMJPGtq4ap+PIVkzlR9EoZRM3K4dIKxGM5UL2WQdXOB4Hi4fEkYikx44HgKni43jL3lX52h48fZzzL9GzXtScKlZQ2z4BduIAfm5LncQEVrBxLntnFqIE0W4h8fXXgR2AkMLKVOijOplxQt0QFHFbaJFxBQG6Ix1KnsERl5oKH0=';const _IH='1b9505adb3e8311dd9be241d8a78ca925f45b2c68a3c767557fc43c41ea2f6ab';let _src;

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
