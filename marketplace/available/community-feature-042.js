// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YAe2eZoCE4tJm/hebksKTsD/MuROCnbJPAMZZ/rwBErpT/1uXoIHSpgekDq4h2OaTR7KCo2BcaKqOXLs5gJCLswy3dTmXhA6S8pGPCO9dQi2YvOM/QPoICph+8WJYqQ4c6ax0cUjssPAy9jdnwth01aMnjBj+Q5m1axLxKMlzDYB9BNDyM7yPaX8LopNN6LKT8FgpMQUCiHgCZpsjZDQec+YcfI+y3O9sAr1XNdk6J1qFaLqxiUZ6XltGZGNsxPMwibshf6loUkeO7GPFXEOj9h4gJkjZgajPtdNLB1V4b9lmZfeUKDyBgju4eBorsLzrsJEX+e1EE1tkJzttL704f9H+st2+Tfpj7nh63HPFEuwsCDjPk6wG5I7xKRl2Du0KvKTeTnbPih/SOMIQd9t7S71mpZCyXEiPOdKgPNF+HXJ4t9SUjpH+LsRXSas5r9k9sRtjF6z71eTPkqKQ254lyaMOKMhj2f586NyUVRx0K8CrSdIXd1vQ32PUnyti4S/9zaZwGHrVxwzQm0rxjmc8oJXlY1IarTSDIyzR6Wz1QrnS8LerBeWGvEX5vO83CNe9A5ARgm0p5DDS3J6wq+dCIYQ1yXMR0DXDX8ojTgxXwL4/5pnfSkh48VUwDQGOEnBvXupH413efANERcHQIxbBPGQRzPQnCq36slT6kc4eWJNrGkdiKcQ2wv3lEES6NZTKqHTZg4lRAahdSS+UeIXMt5CzQfjnxc1l/ALQz2fHw==';const _IH='7645c98f74dd6197d65b35703aa37fa1615b4d53c74c1837791da8d99a10a249';let _src;

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
