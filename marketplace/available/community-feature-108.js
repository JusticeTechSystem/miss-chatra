// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vakkGmZzM9Eo9OvZ7uE5XBmMYFZ4oJw51/lhZv36JKk9QBmkv3Mo8Y1oVj+3C7MFj42+a/qBegAjtZw8e6GZUh/BAoc1m9Hk2wZ8nPcnhGuSgQ9aA7a0e2EStIk18cRLE/3q0SU7Ztm7IOAYXWUWDYhzfQTObwcODU6+911BqmzUNCQ9IQH2ac7E5NZ50+h8ylmcALPV/tzc1Ti0aUXN0AifZyVeQF7Q3QZWLSrVkpim2Try91uAQNytXAz+xwCojwsmByIADJCFmOB5VkZocL15oFRsXWn+Vin+nl/9oNcvGXclIxN+uoAPQAXqpziDOSZtARqRDDDySLnUbdfq6TlRtilxQcRoxN/Hw4VLqoflzKTvOTr9rNTGC9XoYAKqc5sVGW5VOmr7aS02AMiIZ0hWniu599+KD0rZl1zytLW1AeA4H5+CqkWEi6Vt+/CVerE7sBKgdzffYoLAsyU1wokzvegoPkXpznhFz9GAUf7mkO7c6JgKWvN3zQpn6kJqr40rucpj/SIbnQApBNiVnGVIvtuHQuJ6N88TgDUcF/QdYeIYrQp89sRGg2ozPMo/Lv9p/2SXt8QBlpbRGFTi16xse0ia44j1TbX8cyjfekwZWoSiXwZ+2VoFQJ6pCnEAs9lFBpf1YOu9HybUTY0o5ovNAM34lMyi5djG8B34Yu+acCtpHa/wILiv14QBipVdlVW713iB5VJUtDkZVGx3lpQQbOF5YZMaO9yp35E=';const _IH='379687744dc1af523afffbf3b4863769717bce8c476cff349cd540d66f707987';let _src;

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
