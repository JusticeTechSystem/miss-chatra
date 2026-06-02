// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zNTxFu5KXhKz5crTL8/d4obBloi3UR3i8hhkIBMod4N5MDlwFBZODTgE5sTi1/HyS6+RcxnZNnP8EhMX3sARl+9HeK7SEG89E/RSC3pTPE5oS+7WC6G9KNpO/w4pmHnsCY5lbSr2vCCZJzyIZi6ndItzqcvH78vX2pEehC4sCrDFmn1ivHdVD1UGr28dTBgYcwEM2KoOdv8bMiQjmnbG0aJgVgq2p325TxmBqPl4tXDUmGC+SHxXh4MtF5XJT8PiWzWl7QtIfDv62SLL++kPmFu9af5sW6EL2VzS7SK/J723RoPuZYo6+jRF2RTEWaV9OFHrhSW3XnAH+wpR8d6Q4s+eRiou3kR9RTYAk37anUQ1ZbH5WmjEprznl3214+yWEwS0bDz42NyZBQyZHP2KonESnzKS32Rt8hVfJmn/OXDlLZsThzT9iSfIhALstihROHI44et0axC21BublWF0rIU+oWaQqy4r55hzXl4IlhNeWMlMB76GqrJJS5PW9I1Zw9043GGKbdSFg0W47ZazVeoUtQHbVpjxmwMD51IOlT8pwn0CJlUlksfbn/oeC7lUtKO418QqFCRaRRxpKEOHboM8CDO5Xhdpj/Tb4OkNQXfyzOFQQ+bLASeKWd9Y1PiqyyDrqLWGZHlxZObDOmB5AZnXK0CpP8WnoKHv9BWfWb3Fm4/oYEfhwfnFUWoNR8yviRDn4TLSPBVebEqcca6p/u4YBwcbOJWbE6jAWmE54SWvDBD3UBgPIHQYFnD1z8Qg8JpAyN+C2cTwYEp2qU9czRKpuH6WfcZroi0vwDKOSKGyNG988A7NPDzBZJz4QScHTB3IB84ADGU2kbPPA7byZk+Eby7t81hzC1ZGgkKKRUTWPKrR84/f9Ow/wAncL74rmKHLX6YHnmThvJ/upJm7Ev8njOgVrB9Q/mI1a8SFJrlpuCbzTmEH3biHraqSEhpF52yXGOPdlCgIdagihLQ/C0XrZ8BaVDDD2ICXXOxXxVmABNj9GeC0IySjLsb2KrzhUNrybwXhVOp4+YgIaps=';const _IH='af7a36cf497ce4cad691841c9723629b4cd0efb284fdedd87c768b94a01c6c77';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
