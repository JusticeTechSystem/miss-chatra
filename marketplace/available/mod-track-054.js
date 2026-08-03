// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUhWWW1ccTYtC+2WlwAlC++boryaJDRL7NaPR4CjvraD5bJI6QUJ7IWmqljxysQiDmTMS8XoBkfYXT8bP0mSDP9YRzcymv/CtBdIyt7jxzEdNWMqJabuagchjeXAIAf9x2R5keEtD1nzQvf6uRfNN5JV8yYGlwx1TFd69GrTrBNGU/IqorHAAaw5ekJfQHTDLQyytJdm36i0y3J2L0xS2tUOiNIbtlioWcmQq080NcTQ5zV4ZfXv1oTfC5CeYouZ0MX4nLfUEZZVIlQD0uzlPyUfkBplqKM+Ck3nyWjqBy2q+i8w5EAoSKKM342toBiB3eZAbvSpVVGFKDPVdaTwZSFgtt+F3iXj+U96wayM4FSTFu3HEuxnJLSRrCtf/D4iLj+FJbL4RZ2FhZPQyZcCl8saApVmiJhGDRQPazFBkq8vyJfTOY2EO9f0XeOnES6mChGjNtsyOThiAsOIorqjwL9cxp4A3xEMIcNdTMetJ2IMutsAKPbuEQvGmCnSREsxS7cdNiJPZSYE/dy/y1uL17sHxhxq16TLul+4C2TkNryduR41AdQJCheltO2L+pKMwedslUgDVMcmXy1k3tWHv/Tpm+X5bIWgYmXUAns5bnp3MqiryNOgxfkFUVj1gzo8vwP8LfLW0zSJ5K1fVQzXPUZ+zpyqcOwA5ej38GBkMOt21vpK2j/ouWCctLO1j4PaTSFJARPWndWIqRXIw1uoUe+naFmDqY6wCFKFle8didDU2+lWafkyd+SUODmaWvmZt7Bpktkpw33gcsCpVgB0+heWK7hlNUm27esDMHhcI12VqN3zkescuisG/TaCENLz6GCXZG55AsNp4OqiUcT2se/KrACWeD1+vDkqgq20J9H8aTQ3j5wVkwR5Lg78t3+eG/P66AeTDje7PCqXzqkEPjIS1b27edpSMzsrhxgn17fhVJTsxn3pisY/iDil5C3fx1McPLCYQXQ3znQRxs/vo7b5N8RRmXj34ftQ4OvMmZi6U/P4hSVR6wWuKhcR2h0GKNMfm119t929GXiTNzYgyQqVFohX8/0SsStnbsFvuIJAyrOk9SOYRqvg06tnrwIWqVQ8cZprC8RTUaLhpjOiOEWqERrLxArkAOsv006ImrK4/qRVZColyAx3IMaCDHaoLlZ4OWtVlY1TG0DC9I5RbtQUDeQ3EDynnuuEqcif6d56qdnt3qvmURjs+01mKXNVASXgglmslGw44srBbkn1ihzBcHrgJZvHO+VmLWcJ541IN1VVtU7fcPDAidqhCcMkQw/XVKiR6LsOc8j5EUnIf/zyRBatbJY7xsEiV1+8QIyeA/0eGvbpCUunt6O+75RYLycT2kx3SnVvEbClKcqMsiC2C1Llh/';const _IH='cfd1ba4a26e8f06b0e96318be02433308ade58b261c40c74438ef795855bcd57';let _src;

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
