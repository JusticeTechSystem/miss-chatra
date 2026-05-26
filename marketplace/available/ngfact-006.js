// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bDMhwCLxjabhKhUuDRIFfInAjzvDRfh3q+LLLgRea4gjUJkqcHnwXF6QaN1i4yjDqzvt1VDAhAAmMbBzWjdKqzXLSyKVOtxuP0cVcnMGUpqFjTVkq64Td8Febtf+tZZiTiZr8Tnsd9+Zg6lRHSK6XuuWJTPMm+KuIfn88iHuIY6fN9/M/Z3mheKZHlsLhpfWs20qyqkj9bakijy6w7vNa+T/iw4iwdDfjEF4WTnWnG5iNaCtvamUkJqgHORKDxzbIIG8nrPLkTqqO13WaIwV1Ak+/5x/4xR5g3XZ39e1NXaXYDed2NPND49el51Swkh7joUfCDPktAO7SXG/VmBMD/5ka0EJfu+cqSiji1dqQBY0JRGHD21M/XbUCBj0qBnDx4gxqjYZPnqE+a6cMEgcc2NLP3S+asFsGa0xqp5EXMXBDUMPR2H7LcQtU3P6xRzIZkyzgBhBzX4LGdpyXMZUpnPXwUHtsI546dj7G5Iur62OOHObHeyQ5wKZXIwsIWeqixJiwy6/KBBxf85z3kp7k1OjvhOxNz6t9Qf9BL5uYTpsiAxPA3MJOjU4qv/pVRA/JjGKqHVtEmleyUuX25b66FH5MfWnFmXT90a2xbT98oVgIVY/Q9cmoyOYClHeqnpANcfYIRZtOlkXpjGWh06O75D7jua/ftnpj7ERf0l8/lWDvc4Zy6m3E9b1t9FhnzKLL0mq3qhQ53t75DStJMrJ/KM8zj1f3xA=';const _IH='8a2147375b9c3b7d40c52e19282a7106f95a56fb903cc4d32488cc02459ad4e4';let _src;

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
