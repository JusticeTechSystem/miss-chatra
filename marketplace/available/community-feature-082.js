// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ60r0bQptZYU3qXqiHdOAjd36Wl+jiAMSISux3nhHKuUm0CGB/QyD7GlUwoub2AZeg68z70iwHisOZysr8+3EXimVvG2d4iHhg8KWRwb46SjmwATv3KvXQdMv3JjVMiXbq+OVfPTWhl+pl55zI2/wUGRCel6tvkSpgC70RWO8kSHqlruPOl6WO6eW5HAnWBPicWtshwc0iZche2wz9ynEzxLzRcHMqpCO/w/Su9CYiWOrkQA3zshOfcimpAZ64WhNbpto3LOXumehQAquSlYn8+fXR1pKRNDlIBmhY0sJvQ+utK95uFt60ujIqp//ApyGeN+xyNEzkU8TWu2d47zOAm3I/xuQTp0m2bygPzlb6/Q+hPh/KpKne7Y1vIUz944qf/iFDaOK2Xr86AWTGUwWj9Culq70joZUoRJQxQs7CyUGDK2UMlXv6vXzKPavmkKxhbVg/uj1C2wqj74BFDsO1YVybTh9PUu0Px0ekpQlrwtvaFAUpwxc9LJ3lj5VNWV7XaaLO/f9vQMbFm4j/FHwRXUuinebaA780PHGaj+/jMTakURuzyqU498G1AjrjsqE3b+9crw2aH3hAlc6piqVUwaBMp4N8C8dS7YO26Ax/0cF2BX7kknG1GC6VvqCWq2Rd7s56eWCJ/eh1pLqSsCLyPzBKsSWesedcWQVaL3ODQoe1Y8NdWsJV99DFjRZ8aGPK0+J1U9lys0zZis2j2i37C1GVhr4Y0gaJTICG8cFgs=';const _IH='b7e4628cbb9cecdc135910666bf7d881eaf309c3e47f7a46a77db33667fa75e6';let _src;

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
