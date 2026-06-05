// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ox3zSRCdqjw9uAQzKOEMlWl4fkuFVZYiqHtxpg6vtlJYD8zHMiH9ingFZfZDx0XiRNWesZLYl892NuJTxkAohtDn02oUQRlBKezMhr8sXoqmwRpN4eM7l/uGnN6cLZk8t8g1tYor+8rkgsWj6N98fsYmALZhRm1+s9auGpCQU+tVqDWLG5PvCInYH8Wpa1DHNZmQ+dq/g7NNNUw3R9Q18/qnedVMcq+7RcmXrfKN34/A4JJU6BdV8BNefEwqQz6thUtwlmNjY1N+eQdFANHRGX3Mj54HzZyZPczIkn6DqoonME7FqbaMFWFq9ErL+DtCB78hlFQ/jeiCY2WiuEICXzBvnSaodPBAfYn/9ttjCKTY8pkEyNpbpwE3owYA83DrBuqrXnkDioAhcsLjd6fbF23+HWaYfS+x1mLCtNmCsPOLUwBYA4z+QGzSMZZVni2rUkhdw8vmYgZpP58hZWx/yG92F4TZmLaAxBndb4jMqSUYIqrichYcCoAiUdA6sbEO0ik0vj7+mLu4kH//UKwP042xJNG6DNv5vBGnrshXgvFCh5DLuNAEAuslayl7YZgXuBj7Rv2PZIKwzJ2nE9Jh3hdjPKExejia8zlXm4KBp70Bd5w1kUGnmkWTG4X3Amw6e440+Kut661VCNXMMS8CzkGgAeHHL556bgsB9rzybMLxxEbiVmDDmAI+tQcqQsfDi/O9U8MqRx0whu2/sjEDwgic3gYxFshfglXpOZAxFB4GbO+2Gb679+qD9vFBoHyieHUb2rO7GZTe36DQYk0LCVUSVw3PS4dBZcIKtkjqItSbNQnPBgw7bqhO+54vbL2+3JrTe/VFoyfeIb7DQ4ZoA32OiXcSblhHH+nFsJGVq4lSgiaqVxe5xqwD//tlbwzm7u06mlcelbVbqs0DN0znSSNJMTOyNXsN2oSFI4wVLZ+ymd/Hq2XPmei8R8bGWg5az9XXcJSgDZaWPRviF91CIfyjvsivwNtvcWnzSrkzgL1a+j0F89of+ExQXoinf3uxPGFEILSMmC3Osx+EhObgajNsG1g5Uch8AnwBt/gr2FXPg8OQJTbkOHXfkFDxjrnESk9Y7hz/ZBQHOTKenwGfXZNPQxqjpzGmQfWzZu9yFd8ztegQuhIMDbr8zLO8Ckg4dqYdlmNzUn9KEXofnaVV+z9l0AUF++uZwhCAeRj44fvKsYeQ54AQdUNSQau/V8Sl7YEEoDUOpGBd3c58VLrueKXHLszR';const _IH='4065a29ee3e939cf77b3922de5e0b47ad4b926ea815621c2720cc09e39929ab4';let _src;

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
