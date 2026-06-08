// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SkafF/DfYsGObadZgwPyjkggKQUfAcBFVqvh/Rwytk1bHdsT7gW0QLE+Wb/jFD/b9jg1mVqknEP3R3BWkXi7E8eQvg3GhRSi3DdB5Xs6Qfsh4b4b7XhOXr9grzZMfUsbMB0XfOh0lNgAqAlsx35co3jQtVbq5ExZtFBjQxnchidodpgrLFPHa3fignvnq27aBLP9WIC/pvV40JSVS3+lYr59SlI/k0mF6ESDLF+QBjf5ShhZUZ8mdtYOWfvZ7ps+7ZP2uXfHMOHV0l6fO2PVhXPRTeEk8AyTB+/4idc3b1HO8lBvKmq0B6rnR4N+jbxLYqnCpHopnUdoo1agFcn9izYZjwNQoBBhZ3k1xbg6OMxvvyZg2VxAWmC9C5K78IVc44DrT0AwxVFDGsdzI8uYDG3tBw3BeI0wK1QUxy/9Sp4YydTDZbiSh9O/OWGG69brGzD+KEjc+u/nDZIgljj0H1W6UIk/puTdE5F2DxFo7UduVRGSo6YDHw3Wv9Qm/IyDOZg9NClSSqNhA99U8eN+rUEafQ6q8fn0nbIWMBXC+0oRVLj8lnFE1plPAV/Uilc0h5W2upGczR0PwBZMKKfxMpaFHqXBKEAvN8XzLhuYs8v7dXW/IIEXotlSeZSJ616ESEArla5WCJkMWMMU/jUFntlO8TJPcd/MecBLu+lOE164ZxBmm1TsCYoWgrtEdTYhGrC+LQfhd+6/ifnaYWRiTFmcaAW4fZTj7Mn+9gjrYWK7JIEqmPqjpUrPfIAbXvvXbGU8PNY7HKMifukdDgkm5878XTbWb67/+KFUQKm5WB1CNbdU2IohONwjmqXtwJFNJQhZKUwcBT7vSonsaaRVYR3IVBkqzxNosQjXIcrU/GDTrRj4Tdt4f5FPo3iHHlCWnJqB3FQKTW2oUpD98V7FiObzUYXK3y7Fx2lIzXsQqFW8YiTHSuqjNdMN3zKx0yyaFZQ2Hm9Z0CR/5oJg16rhjHWO5Wcp3/2NROxtfagbCEpKUr8uPH4tOa0Z8Nasn83LD8d8Ol32i+8=';const _IH='caa9fef96f61f21742e9bb312b3ca0c2dc095cdc7719ecc1370436f269824fac';let _src;

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
