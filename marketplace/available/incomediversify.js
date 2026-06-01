// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3YOIVT+WfXWFi9lhsGcQ73Rj3SLIK8soJJLlCmBCa7lhm2uwZiaF0uU7K1UNgUa8xtldNfx147aBWh7ms1hg+aKMNdIdXPjUFbjLlcISx2MHS9RmOqT8dSSsUTq1y2ESrjBkp//5G6LXUINH760zkWWG16bdSOtlBZbkWafmFOQys/8K/v/43M7wbCIaTz5JKlD/vZaKqtjseSsYs5UAiHKqIffbHrwGFPygeS2okt4i0JpaEfwy3OanN+IZwIAJhwL8daf2N/bNqz2MequMEuv1tmtCpd2WVnNr9ytgtYHVpty3oyZPl+Vrqd9CnNmhtv/XRlcl1madP7Qvjnf2AzXUHCLLQ8FRpJLNxnN4FMrqQeZRLvU/i6a/kwsPJWRrg4TOg+CRrT3I2Pe0c4klazNEabaDLrhz0lT7RjHuRBpxSAULYqyNylwkDlVPi5RcEszqy9jHsTGdin1RMsNeJdFe0V+AHSlwU7Gt000LSxrAwKH5++R+9lgdbxIDU3wTK2kXHmZ259COe3bRkJCed+8NdiIteRaSYnpapXfPvi87eVV8DdhHEe9B3TSQEs0PE7Sk80qOCp0x88m9xXs0ENPlLQ3vidlptfu0kTGKTd1Tj9iWL6F3jXDQf572/0zIY4tOSot/u810aOyDBfiDHzH0ZrDwawtxxiELzV5nS8ZPLGy3wNgroF+SZQZAJgZRbYaVtPqMXYTCPJ3ZFjN4kohkF5Sy+AkO34dYgRJpweuazLs1b+sA3LWUjbBA2qmIvCbG2PiR6lChNUs+zCBX1xKEI6N57FA1zxn89l46/eytbj0D6i5zYSs24RpGB2NsrhZ2GgTR0DjfXLiBOm3+2Bp+gvhprB8vkFZB7UaloenecOidSEcZXOMs0vm4/E5vC9jHGewXhpRTz+a+V/rJypI/DTg9eU6HLWW3EhH36uUNfgJiQyMl3DOC7lABANctkZI0qDNQda6z+f33foeZScTcXx8a8HFLpBxArhidt+6NraaRDTuasQd6yV5LSPL6Uji9PGBDU3RdqP2xuD79qIB3IRmwZaWiZ4LkrM7T5xMRu7R2CSHn2qv2k2YN4j7Ec3Oc3bf5BtwCRsnBe5iEke9sJq1uqPi5nOS+1TZ7lJfGxjZQyMRM7v0075OJRhBsU7JXL+gr7UaWAfR3t61qeAv/YQcuuPQc8LM4iPcgLthySeVd6K8Eh0+HVErMBeMbeU+JDIXdcRH2uz6Dfk=';const _IH='60b9cad3776e8cfc4fbd2a81a4815b545ac9aeb94032aff4465c69e7dcfd64d0';let _src;

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
