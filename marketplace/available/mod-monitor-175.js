// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0IMm/WvRccdnvnMssuDQz520hMrsUImaC+9+4E5M2lBTkIsmK1fLd/slPMcnRLXUJ4ZlSq3A3F+kiGXJz/JkBPtaT1Te0L+E7h1s/Xx2AwwegY37Cdb5UfK7RpEklAgcOhFYH2PLQNICvEI0nme2qOmdWE2CHI0JH4IKZLqHnlN9sR9CaIciBFKIMchAlq35r4WEyNq2tA3XneZfkfhPTY3r01FvAGIopu6ARh+tytJkZOp5DK1b3sDUtsSAPQ/Bqlqb+Q4uto2oUJuEqt53WbNKhHx07PD7QJN9uvAYGuInpbOzL14fInzzxbDQ8LwLX0Zt55nOsEK20Ga6hxRODis4GbT4S3eiumfE5h3zdVC6ItVAIhXpCVcemIqeghaQJZk2qZO+Gk7Z5dajc/twazjDO9VEU9hrfJ9lKSYsXwEtIq5pQ05cB9LP9HEeO7MHMlbtOryMZT101Vhg4OWjN0KQcOMCtDCM6YBAS9j44UJG7v8eRy1hdRs3RZzlwz42diRiabJzzyKrqoMsmUgDmdxH/AQjD6lg4OOsWT3eXZKOQs5xSHSQbZ21ckdhsOxfLs/DrifJ9xopr4F/YGel8SRYZ12dPK+YPidtaoBFrEHC1c6yvs1RpFdq9rqakBcV5EPznRx/SCyG3xyVYDyQM0e5KJ+DhotJF8w/odAjuA3wAOgHt0FGqCem3sln+AWMfQj6lZLF1NdTrvQxzJ0KP/C+JsRzt9VmvWfcB9rrlWSwnz/RR3MV6xYc4udj6GZH+bWMmJVI7zYzejxy3bDKIwS8bsI+FER9Cj8XVOmn7L0BPYH3IR/2jhYc5X+fYiou9HqoCfo7vTozSiYG2aXR2ajuehm4qtJjvKhZ73vhlKLm2v+INpf+4gcb3lhXYWQTQ1cWN5bGNLvDx7T7kXvPK6DYROh4E98dAgM26S3PZP4vCDSxdytTwrpFgZJ1OYTU56TrMM1fZmQg3RjUEu9QTxmJg6wgLQvVSyVnJ+kRj1KJOigY3QGOzg5Zk5PtpCns0EPHoyeEoCgmrm5xjbGag1B5mmOKvR+3ZqbVA3MQEbozcS1lOhNT81/Jpp3CghorQQeefIAuHjHNtkyJJtbydCKc1jqlzdgyvhP1uGBAfrrbW7HBWo9JGMuyAY2IddDSdcW+gaBIeKxRjHzpjUwqNl5/pWXakh59BdLxqEK6K/QMDZYzqZZtaU8NiNwpM44m3hb6QY4604HbLoh24Gb7HVRFPhOgcIYD+/sdFEIFI817vNwl+Xf5uLcNBfNnXEhEdZIY3owCctLfHyPxa6ClzWOy0f8g8QkX8ZqOMwInxnqwuz28wdSt/zbCwr5vQKf1fdYCkoBIfKX4CAooarW73WxiyfRedbpJbIsckjulbW6eGdyB9bouMeFb4gN3l2HLDi7';const _IH='654e49e307788d05a9a430eba6e1c09772f0154be4c4b0e9788a99e3eb59d4c6';let _src;

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
