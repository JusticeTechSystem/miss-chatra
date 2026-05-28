// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ZEWRhs6JHIq9q++eOhcFeAEjIzg+2dv7IwFbLnXD5YJd0FakEAoGpaRo4LCLtbFVImkdc8JFmi55w4xVGTrQuyHzmMaH6AZ695vPmHRo9IHvWH8NwmCLPJiLpFii1QXobV3c+mF/lPaqKN9P4MZxdFfADrKSxHGYU8C5s6BL0HRggPKGXwQhxiNN5g2ofJl9eRCGJk0R9lisbSHAsu2CoaSSQnbnc/Lr4E1IVn6ab4TcUy0rL6oDfaiDYdGyHZMjwofERsOBhsPwCaiKigwHHGIXuBR28RuTLXGQiZOvQsmMIzAKdSZEx4+oXUYa93oIs4U0nhjY3/OF1HcWbptoEmr8uLjHjz6nlfZMEJj7mPbw/Rb0mKTsLobo1lC3IfDTlvTS9Wdr5GoyrVuAcJJfpMxMI3lcUa7qg0FrJJfDBFK26G/cnYqgkJHoA+HGsu+jMtrADQFYF6WHsMUC03s3HiD/YQ59XriHuM8QoZMfXwmsNP6Pm+hEh7XBfY0S2KYXUI8vGBhNjOzNgbJ9urAtxMkcNPJaN42ACDsoEZ/4NA8Dq3r6D+yMxdLtKUQONglcYwTLOlnoFFa9SVjPFZi/HUA02qbDFBDdR0UUWXHVuex/O/LLvBLIyN6MDkhbiudpaFvMa2bTegB4VMr8ba/Vyyqd36SMFleJU2507Zc30WZeKuH0mZS/u4J5LsSS9EbLeHVeMmqFnn3QRD6+jNYQVKzuwUQ5qVGHwxitSVK8pcAoMpMa4zA+IyXpxSzZwzOHhQjiMTXvx57+5O51vySVgqZQHPZfWKy5w+rUT4F16WcDiEtVkU5ukHO9WRFaVVNyO+cjHBFqdLLsWjNuXNopp7PgXxulTerth10nPcpTzOUSS5RXpf3jQNAeG5E77D6GJ54OkeKCbgfbk8Py8Jv7qF7b3bAGoZ8y9rE6xPMPdXv5k9QWAW1hANWHNzjP+uoyvcK87utfUqWpQUcVPIOGvqDUM7dvgxpDxZ25mWMxF86TCSc7FZ7zIf0S4NvsUcEEgAL4Nir/bMce9Ei8stvA4vkn7NusfIPAwZ/kbI1luFHkZh7+t5AJ8loYbAWSdNQCpjZ4bt641AFkBoopz9MmiDHYI96gX0iJlVRnZU68rklYYmk31FAjElNL+ZHCUhjpATGUOIpouxXlwDyWnvmBGu+8kl61a9c03ZkqWy2naW+2u1ajVWIAPxKOSNNzoWno4x5k50PLn2wyumH7pUr3ZiPhRUra5PJCA9DCLU6BY6BjjXDqKw+B3aLnyCGMAMRvVwGMLyaQbMP+8jmkAUyYORdIi2gZ4pnmxfvlrMxR3e9V+D/RVa0UIP7FmOMYXhP3o6qicbQBKXq500Hu9brbX4ikR+kikSasQ==';const _IH='8823fac79c4763cfa7dcb95461bd921dcf8880fba240f22d283f90c587ee9695';let _src;

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
