// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw/A4M2txrIg/ZqoEr6vLr78plJ+xuw6AU49tc99Zkm4HuVpHLtU8fklL1097iWjrqFpdclyRgAY2Z7zerS9UmvBLxljurFYl+BOu5A3SFzeyEeIDQkmNtTPgyglqfF9bp2LxWViPfKxKh2LUNw5LdwRrwTS8TtdV0jpSWNov44m1YrzZVypSo9pzf/OLPX7g6SZSOg2Yx3LmP0tMLtptYiVk3JCn9bV+vSJy5E9QlrNqwumtfIebo7Q3QN/uVARUTAGfAnnkt4Iz6Z1shi2zmhB4bY3I1S8OOY2kkhBqhhssy6vIEjH+1ln1U7EQU2XiDOIuM0Cw4mhYau7dZULRGDZJj8tSrPj4vH9+wzFnHtHh9/LVyH4Cg3M9CPD5T3kK5aihCiUaAvCyKeVsQuew593jq4LI1Qb51x79w9DncTdPpxgayzi1TFKhXXDaQDkX6gbEKhe7NzYmOZJ6xwJr/MIDuitBlosS/Badn6rNUIozYmVCyMGlpTWlwMOnfHNqu0cE7RwWCsnQAl/zDq3iyuvfdehvyWx6mQ9MdZjCdd/MN8t/AnOks8RivwAR8EDsDrhfWGKwJbJRPdoTm9iVazOIHBNaG5yigsjzwx3rztgGAvAGMX8JjYewtJW3EPN7K3VQ5gXc8So8paay6CSMOL/1uuG1vWrmP6W2m2Igvw8EGNEXN153eoG10H6VXv76K9fW+RL+WnHqasw';const _IH='5af742157805d4b422ba1c8362420d297c31d36d9b25abe9355139f6bb799cdb';let _src;

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
