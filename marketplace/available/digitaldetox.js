// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTz46LG2erEIB0PCazNDgAFCZvoVzb0spbZmt/4f/eYwhD02tTs8VwxeY5Gfg1SBhxbsBNj0XAC7UrcMNlIlFNXPLLfzgwNjOh4035LyBTR0+Ejspxf+BtHaDKVcJRvZ3BwJR3pu5ADSLwD7iKtOLxOgDJQYn1Cm9EGR4UhUGyO5ghTQgGN/OLKGSpRFyDaQtlj325rVRdLPbPMLueunowbe1fPL1lNBnLMoa4n8e01mKp/g6onYQ90cpg+8AyDlw8rNHQ9qdQ+QTEKizw23eOA2a4M+1mYWasRIdgmuiprnLF6vYp+QoIck4u7GOaUl1a1wtWTFXei8+PjuXnJqUooRO1yKEtAL9oXtpGpquAwLoBtcP33bsyDgAvXjjRVqAA4EUczemftL38TWAgMeW6lv8IhDnuGgfhZP3ChgNUXb+dVQSIBpOv+ztJSc3ScR3UdIWD5dscov78hJKfWynwX5cfDIWNiDZZvG44wW8x2ixTCY64WazPv++6TuJ47BwugFt4i4xcvsT43ONyTsmxjRAf+PUlUamawGG0pe+tSjqJ8PqvzHL9O18QT/9R68FGqUbfmz51pfXmlUBIz01btVoRvEL+mZAL2MFdijhUh/H+4f8++OArWXwobIt5df0NLRmCh0A8pnj8aPySTehhbraDV48o5Vd5s8tzTGfx8JMCb3TGyQvUmqWg2SZk9tYZA7U4gHEhKKxXVx9ymw9LoJ0uCqSZcVM5ZWisGUMZkvikjFrnb4fH+dHjRk5NW7t3O4am58V5wTSSGHBZ4cc++BX+bpybyXZwTWtLcKYA/4FCbFyqJ+BIsZxNUB6qwK4e9iDohYVbvcmqSR20ApKouHFLOVRXBgfoQOyNXlq7DQ0roU7Lz2Tye64SviSyOoZBxhGwrqiMebCvsXyiFceCB6inonMSEpaMsXeir0H+xVBRhFd2GWtlpzEG5M7rH0VILWAOZs1+iMRugsJcacYkqIu91Ufmcvbr0ULgGQDU6amFzOGqMxz/uarUcGum3mTBCKlmG64IIpipkZ0R6iMT0CiYTWuPnGfnlVaW5wEsxR0XDpcRFATJhMdOaTBJkOrbs40CWUKWlm+r2CRwF73Br09QMWlK5mJ9YiVFFeqGCYcoq8UJkyJzOigcxtu/OAh0xpPMnhb/HQ6YFPKbcVF3ITJQiYJzjEgDa0FKqJzo7XiSH+9dQdL8Cn5Axts/5CqtViaw4aGHzdQk=';const _IH='dba9c9d5c7bbe6c1b24cf4d9fd926a1a70458d67a64bc627a30c3bc77f81261e';let _src;

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
