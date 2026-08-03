// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5wYDgYcU9XhF7Jsr2WXmqipkoDNXEL+T2PUbNB4BuZESBsCyO6kmR6o2/nHbIV+EKZ810XLZSK3qHLNCs66M/sRGdIoXQiFE0s8z3GGOwZ0/6O8HCwk/neNOhQxkDLD7HFrAAsMV0THmnDcYaUZZdu7WIpnahdS1n4re8MHqo/Yl8aujX5AUV5lKVarf2qvZNbqHQLNO4A1q821T4Ph3qEpP/QejJru7Z9jyDkpVLGnbOiZ+Eq7OHHSN9oNkNOR8YkndqUBetaNRk9d4JzB/+ixUqkxPbHK1tzTlRu6ngVr+J0ksmIhJ/rYPZSOG+JKQhHCWPBPSwLQ5AflRoC3aM69pDFuJDNhya+IJWQZX/wrRcX272cUpYh3Z2gV6tw/yxctkE1KOfk/rIQr9U6zkYXBC1ss9J4U5OcXxDg3DDNHvGcG11AuqTAfue3Qfx+/CmDzNGvVD2YKB9prBnbFgU7lX6O4OfoyXSqUrrknz1xw/Kmno3Saksv6SyHlqiEjm7s+EvHh8de877ysK7m/o5TvuQ2pGoqebZ5EJmYCGXVQI/c46TW5RhtsW21iW+CXz0+MVeEYDbYSWG4WjI1q4OMTiKI8koBzOGHz6GLebPlLM0ceNOayKCYlvGEW6vLcbWVRH/Hl0t2FyGRrFpuVF/Z/u8wrGbILeurgwHRYWJ7wn9efpftdf3E50GZdupbgT+0XxK8ZAncH0z5J7wfDUp3KNboHjEMnl6cR4PLbg=';const _IH='a9f850342619651481722908163aaa0e008ed859150d327278c494f1fa7043b3';let _src;

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
