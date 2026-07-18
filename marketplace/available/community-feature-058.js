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
  const _b64='T0JGdjTeyO2bC1nhnbZq4vOl5k56yIkaZZXoMeeC7Dua2vq7qobxqNCqIwDRcNxaEzzIWsydru/d6/7nz+AiG165jm1vKut8kArykH6qwrJQOBlRFGMQjM/v5awr4YbjhsZ1zIRlaAHTXABaAcfbL8A6QVphHjI/aex4oaupTxOiKYou/IsRgiZqvsyuTnKluOzWNc7prpU8pgnbbav588ERvT5fFykMkTFFCpZLgAfQkchW1ghcsdL0qQ7wI4Vv9DT9mdope765fhY8s4ufJdi5GPox3Lx213xjXIoOXMdy+LRScT0/FGlttHzb2SCItEFk+aaf0AIo6a5XyrV5jHbknWa7WC45JDl0xmhXy+doqoLEMciNET02T4ukCFauvZ0vxowEfVepG0+Gx5zrIY/ZbPTkxOO/lx3mCMqR6SqZcSyzBnZGCTi+GXBWTzovgxyTlof0U5u4DLreiIXBgR7WJS4LPpip++B4GkABkZhlyBUYtWTmA7ZfApiBFUQrTwNbgDpdl1XKpcFszrScEnGsNVSCHrzPzk/gqf7VfOcm01CpY/y2mAWVlh+LzxHJmxdPAJBVUekiKQf49hbqD91u3WsjCya/llXKqPmhqATrlSDUjRcYuvRHiZMkgOKiZzMgaie7svyoCS5mTaE0tBmNgiBUt8Z03ScPyMdV65olhwX06hsAcKi8J4InDjbQ0mhdccUE5KI5pxQVMthOYA2q6By+LlOHKnz/zOtn';const _IH='59dfe99097b5ae24e4d2ed2cb396dfedcf598c0d104d9c7691531691763d9404';let _src;

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
