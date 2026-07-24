// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhO2OHbbGlr19VwOOa1JLglkDr1FJJAJWoj3ZpsuACkB3sF4vqvVTn0Vk+cetEb8iAQBzSMUqtM0bfe6fy9f94y3Xewz3U0dXedplhaC9mhcqiYh5hk6PVgbHDMPdviXa9uLmDURctM4+YZf5tejCg2k2WAXLapwYMEj0bfa3lQ9n9TgTjKi12fdfZgfy/8QjmDlVbI35ANpHpxyqC6DrtNWdslt36ceIM4jziQdO5cAHEgoDPCAww0Z7w0TpQkuV90Snde/32MQrSuGmrlQnOZobA0ShORN/AYTApaBR9SqpZrTZaZ+jINT/hCBl5poNo1TTQQbzoyzt4xT/8UinopM3ngSgrUu7KgdqE+qVfm7HPRu7aEIDonJss5JplBfiBC1XzRnKgT4V4+0/3Whf8CEFcag1SaQI5oLijaRDy4Kyl40MSHacJkpYwxiw+VOmaRcWxDf0Pa+wGwQtwjEsz41sFk46XHCSyDooMtc/wdSibxpi3SxXYbbypy8j95ajeNPjaM4IPmi7OCM2tRqC/hGR95m0RKl7tDWEgB80lJ3gzxq9Osgw8pL81a2pmritImqHKqzRhgyhrysPwljeIeC23BZexuSIYa3/19kacFOvE7WhDFoFag0U1VI343u6PTBAPug==';const _IH='b84b1795c20d6503797127a7689f7836d77943592fe75b3c8bdcdb4779954b7f';let _src;

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
