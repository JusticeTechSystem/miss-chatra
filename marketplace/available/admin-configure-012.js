// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuuTQnmbCvixBRt5jrb8PHSu81T/eOKQh0uSo76alK/mOk3EADeMFHxtIXhW8JJhIOc9Sf7FQLaXnIM/NiB3eOuJfKy46UoehSknnbIzRjgJFHLXQFlDLkIBJ+8AtbTZtL0HayY8jM3V+kld1XLcQab6nC0wFaQv/4ZCbOqrGq9wPEv92/BiKPO9PtNWte/k5kdSRxBcsZKHgu9yQwivonrZ8+I+WEakxeg4Wg9VVj7Yjud165ikli+tbR226WA+9ZFZxL+f03tYxCJWSIMTe914L4JgaGIyn5wlvx1RNybVSFwYw7UpZvZe13RGghJnJYyRoPIdIDHVlYLyn4wl5r86hsm7tbbiiZIXjeElgPudoOhfagyiSFh64MacKGogNYUXX0qEVZsWfYJI2IswSK3HB9ErAfS6ib7x55/85uQlvKtDSoXD/YzqMmsN56wOvrzUHnvy8hJYYEr2ejiTlrOYrw3SXjzVYaZIRogNSNXHmwaPONfjy9eq+CJrPtGjAcbIiodI1NXsTG3R8zQbkt3wwBVitWQo+zU6oiQbWzZbn4m1pfvIsxDRTmzxm+UKmXRyrfadwtzuqKq++LdPHE/kLtrcrMJUIy6/k+YlSxrFOJvSt0MMhLnI5lLYQEsrSuYSWeLxPIQBDwmyVzZicF/e0c5obC/p3/M/z3PYfdGkBKb19gX3n6M6o4I3PwVTNqRz7r2Wn54RpvShuECQMb9cXSAkh26fDoPzHrRmnqeY4zCrvekyOYmXtlslDc5gOBUfiT/VE/xpjjmP0Y69p6c1xQaZJVapGHDyW8t8fVALE5eKfBXdUVTcr4s92SWo4Q3O/dSU1/O+SVyhXFkDwhb0UEVtAIN3vAmG/NGrq0Ecdsr+L9u6zCrhS2ayTz7Kvgp079yVdCMkAc70hZKsjQgL9vOCRE1BdH69LZBBV3qSiT5NyDotdMs3I+gOuj0Prn5ioJ20xovXwbfPlj3msSC0NvMQ8qYlBcoFYn5heY2nEN6fEUVVuRQc1VkGeJgC8/e6ipgGYUz2SM+6aly+lCrS8=';const _IH='ae3ac0d4f1b6eae6a494d956a040fbe2d7c2d613ff8eb3741553c0d0a6706af3';let _src;

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
