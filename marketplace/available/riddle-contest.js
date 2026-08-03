// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEHE3zgvioookQVBbWw4TC6m6uMwBaesg+/j0FQuPZg/3HA1oMHnJbXYZXvZmf7qrz85Y4ms2SHjWiTcoVV64DIxUYEKDcri2gV8WO0NXCS/q5D1iFXwqUj86CaY1AbT3YLe/IU3fdDOS/0poVYcOMueTJL/m5xCtVURCm4IdwBGUnEDv8qqLB6nEA3KFD/wG8BT2HVk+ae+T7qJcpHFZqEeIXZnx0fmnF8lI4jtXcg5frSJqsgwTx2ccxgoV9l9LE3UG8yFbx3+g2LQYpEknQ8lWwIDLTgozJWG+wROE69TXZBTULXRNTsXvEJrtIpS7bU/WctTDAmru5N5U5BKWm4VD/3NjMBPa4ffYFOX157LZztQj2PAAdgCXu8gR+b2rlFKFYC8Gj6SO7ukOAe5wKaS72qsnaShj9UeFZmHCDkGdw6IndmvaRAiaCk/dNQkZ6MqQB1dc8CxZsBJZ4epYaQXdo1zWzPhYkjz2lsd27z1XOuG9TytClIFwve1K+ZapEoExBhGVnrnFlJUxxL68g3LmFk6LYY9OHxgoqpUfQW3zUvuHIcdGPMTqlmVH5bYTNDmeUaFFJDvcAISQrFUjfwLxL5UGh87sapZDclm8/9uyKT3VLBhKqyjrGq4lX5PplxpucJz7cPnCgUcOj7tMdAwFHEZSTufc0l3Y0NWVbeK4l/dVWsyw4hMn5wAbOS/BpIwKIUvSZOrNujdo4u+hPFznb34LlG6jN5uRQb3wvWN+cbBlNkT8/hjRLjhCNZCwZYhpnlLmVBO14xL2olJRphFEimfYP641SiKpoBZ9ilQBQNK6L81cmkbZJ+LncZqqHdehX6wBFvycpN3pxYIpmM0pJuK6ckkHO+CNanaqoko5UtlVKB93sNOTDMhn/Ml2933FOMEtM2Bz8U7IxvhkFa7uQYppUuxZR9gOnStyn1G9xcDWuqHkkXS63DuQ8DOoW7YD7wk4EfObTSIuIMUc4wTVokvROFPIFoNW5muacQuv36NriUFzyYnyIoeYi4xytzAhJWf3ijfJQzZsJv3y/AtG6GWxpbIRZwbaIAcQpW2GWXMloJwAZ61WPKIKtbqBhD5wdNIjijLMvbfZWmK5GZVyyLQkGkOcyUJjuuADMbb2TyR+d/Mmhn5LODwQFdcpk/mrr3mEecdkoCQsJMp+dsM+h2+oxIr1NdXMbq1abeBbvA6z76BGEcJypIt8sBagzu+BJMnQLXSZm328eGXG/kD4gAiGvSH42r2j9lcv9izEMsLkAbwI1QfjbzwS50JPhdUMVNMfUUB1Tee/5v4Q0MHYFoUv1h8AsDl7CE6GaRKO2NUUa99Z2cGvluwv4Ln2fk2+t5yA01YRjO+N1x6ER0SRRJwA4y1xWUuepp93RDQMhZ32M9LhSipA/QjDLFU3qJfV91QCg1ncqdyCP7S+yWSxlOJBJNZewzWiXJibiD5TXJxNB/+Euzsd6CGhBRL4xw4QMJUXD5BIh18TU/PZcrgzkWSv+RzIOqythzDle629DyTtSyeff/U7fsvD8lwYXBKa1rNEavsZMijzrFbgdYg/IS3pXbEv5D3iul8tSZ9bnw/QyhlxRaLGsGbdw9kCEonH007FZM6ELfNUXdxs23ETy7zQtAXnyeYfA1SbCiihz7j1rqkC8WGSWSNneKylyUCo9hfUOvrrztWKmb9lAgJzShZCQbEyYboqMMMx9HHmJ/Co8CuW/SGWCTLk9fJ2OQjFavllLRh6I2n9UKgIUG/Kh9qbCl9sO2TkAZOLVTPZtNTy6mrC24LoGVPdh4GrXyM5G8aA2uw3+C/JqiP7ptpxgmEW4Wjfwo45geTYqisD6gnhyCwUXciRDLx+7jk9iRSk1mELp';const _IH='6e93ac9885adbd8ace39ecb736c0e9f199ec864a48e7119024cdb3c358ddb882';let _src;

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
