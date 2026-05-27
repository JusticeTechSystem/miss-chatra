// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0xvo5aMLJqshF0YL7tIJOivoYLoKQf5mcNOHWckib9dZ58KR+B0GORPYMXEn6v6KmiUdIRNmCDi+N6iIDnxv3I6dTwac0p4JBMJ6+LENQMZ6GlqFXXeZ9JBcYX6MxtzxJyE+O//Ot4+AhCwZmgCcyqk4MsaEdjB3LgpHqFh/hX1Zyz5DUvqIm5b3J1BW4sV1+mKT1baNNEXIYwfKBvD3wc8nnd0ds7sGdlL5HfVBLDIoPTvYiCEpSQoM96GA2vi8jjooZwJUgrAz3lDFq6dZeoRaxej3ri6qZydFfw5BY8Fxam9TMX7M597UJQI/yJyS2WZp7TTLAPAnNhaUim2JE3rccb9WlcgPhXTLu7SyZIhKtm07U6NVKv+jSaML3G1pPqryCnLGp9+OyfMBkW75jc55scGo38m6Hq006KvR2qMVpNjrcFD0ZlZaWkc/bvHjunen0kderFtTyJLA17e6KUVU8G3/f7Baka/7lDcB5NLnTVzOzAErL6eLaznk1Z1lJkWt1tJ5Dz2cD/NJaoZ0kOocMsIanKJ+FNWhX3OIX1x/XuPgUBVQL3JdII3JjiZ5ihMqPUmttNwP9lUDRa3mwss3WjSTFaYZm+ak17UuTwuqPAav7XyWrc63AMkeFwSItaviK+W6AcsYkJSxfHS1aJizKlvCRT1gIeXOtmVszC0DA9qb1c1X5A0GOWrSD5TAoY4r3TTMqfbbuAZdeUWrT0UKp1ph8eVO/stO6bi4Gw==';const _IH='8841bbdf881743e77dc12c2ef7831c60bc532cea5fb3e289e4e4fbbf93402c8a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
