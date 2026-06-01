// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6bupaxMHUmigvbdBBHfipvhEM+X9SmheAybw5xGWxeB7wB2UsbrT5VosLep54WRm/wUJG+R3fJ693QaLZQmX3/z7Lq6keutPHafDSMisOMRdIscktX8FS97O9868tiZE3G6UdC61Z8xJZ4I+7PXHU/NTn/YzMCfY1G3sfpzxh/7OOaqTMktgEp87c/ZZAG+HB4MejtgUUOcOjdTIWYoLdbNWFrAI4njawzhnhuEFdpPC48vZxcIzicGLW+50bGw7jIByMD1CaaYVsRnTfV8NevhXL4b4Uj7JgBu5ekW/Fy54lHvvIJQtMDKFCLIGKmU0xHgYweiJQ38mJKMZFK4tIsVDg+VuQW6GLnYALv+x51QlQV7zXBgoOuafsVvkMfcut6TU7DTlrJN4aYdRUG7GFKYkuFPMIYKIxK1hcOu1XiX2AjHE3g8KVUho/C7o/xQ5IOngYhOHb8JVgKRKDrBU56mgCWiUWqfInvJd+/9aP4yzJkph/n5lTq7xHsnM5bRj4D4yOaoVDtoNjPn8gZBr7UxPqrg1ozMploti+EhE8lEhIPSPCyBD9l050TFnq7pby9vHY42jF1s5Hri6HaHKypD3j7Odu2BaMhCCwhhsulg73znpeMlimcwqmtQh01Ck4M0SGuPht7AzA67i++8ZNg96/wKY95l9qw=';const _IH='897caee280f3ce64ba3cd034860fb31bcfc60c14d7fa2e796b70dfff5bac66c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
