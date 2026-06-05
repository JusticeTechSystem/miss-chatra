// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bDeT5v1kkbsrEvZxiBhoQ04jjhY+WH7uBGfaQMhUDivOLFx9yWdkrrN0oVHBAVOjHSFwEx7eMRFjJstp5vLZACA6Qt1ePAR543JbQXDVquI4qlweSc/mL5nPCLF+OUKa2kOlRJM1iZYlFt5QZi2Lz07AksIv4SDMeQ7p8DWI5hJvxlTHzAwImJOF7P9IfBYBLTn3ZV+jRf1XG3tJmpwk65dKDSNOpUntI9wnJL4hRrUr3Ja+6S7Zp13w2UPmD9iz7zmXPuwz47933wGq7hQx2uY0IRvzLH2mk0QQ6kaFZdHyPNZ1u116XqbxozrmsyJLW+oD8wLQExKl7pLW3O5tHrGzkBDddR62X49llFkmmSFNHqoQWLYoZfH03H6bXidvOTsmEZyUsHAzL1vwNL6zFBXJt4DoNAT8EXcxnh16/EeJyMdkopcsQoqXRIitiRY/2NrTYVaDyT5ktXmBIUG32xmHrPnmaWs9VzCgocCyIu6WuKa6lpy0n/KNJSV2sOjYHaAQl9hH893UeoBiqmFK+75pHIf7cMBSKaxuJZEM4HBualWt5Twc8Zwuy+Kr20VFfSGsqaXmC5QeGDvqeLh7Ir0o8+Azmd/7Cvuj0/NZEMcQRxmvsR8u5TWD5E3nZH2hS9zbiRlS3ZgLE+AmLn6T8lE0g0b3PdS+taKx5dKQUhqwAj9Tz9WljLT2vrZYRdmwNA2UH0Vg1y2PQE/guOAL5jVOp7Uf2kvGLBuH1VeF1ll+s9lz26M2J6FXXXQU52mhpBNZJq0FWmVpG32Lbe8sz4nJ4bRNskGEOF1gw2l0etpIO+t1GRmvpmgYNGLtdZx30Nz/qtMbXUCKsES940sAUCMltz/qrjtcszO4XR3rUQL6AmZI1iJP2lqBJ7bv41NeCI0EO1tRA0fMfiGXj8Z5QmOsSZVlZPHAlTS1d6JMm0pTNqfW3Ww0a9QxNxW3976Cfyd3wsBVFLx1jM61tJz+Boj8KBwfWlDYtiXki+OnRRY8U/vd5Qcr1b3e45NUcdzLXn/YSqXFU9So1dGN4Js7BwdgfL7sqNNZYi9JPNThWaI/guwI5zaemI9VzIp83NmlkSCfNu3q4bcsEJ1TI53sO7Gma7nmNwK/lsxYs9vLdeGvS5g6KCLv3T+T9XyrF5p9+mLZdagD5U3T1Ox4tskZfrUTF8W2lnfrUM+CF/9UlLTa4BpMqTwVC3kAwYd2Ryc2AdHPyDvSbklNHYInSAx1x4EXLBh3UoEOSX4uooZx+g7hja1uepEygBMkNksX6HH6QctT5j5xMS9v1ICzqATSfRCYneLsrLxo3rvirDySXJlKOke6zDO374Yz2z9E8acT8krSwO+vWA1AfOzn7ZgBN0ZjQ/zK0yEr98roxqIo';const _IH='7761634c2ecc37b0fcf10202801a80ea5dd7b6f15c884ed29c5f46f6ec61bc55';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
