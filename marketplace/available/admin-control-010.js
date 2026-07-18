// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSBipa2cXVMwt6gdBEcmAwEztdYmEqKEq9waAg8X3QkAFM1tJMnr/hMKfXjbKpHAhfHLN6rHu4rLcT70c+DdRxlMie+pe+TYYSEtfzAfoF44YdqZuqxsOPpH6sJ3KOWvD7KoCC7bt7Ip2JNgZ2bSIfvQE06ddA/B1B7B/Wi5HLQj+e2vhgouCgzKNB9ZqX2DSAWxS3nUZlT2/2dx3dROMVHTBr9AT6SZNQMfHVYeO/L+7YJQKuy97zGQXtleWB4c3EIMXH1UVh3B3g45fdPhbX+CcrBIJ4In8znKj/OUcAyk9igFfM/QTShO+vz2bqCXjNH6UUysy2QNHQZ5YY1zIFn8uVal99ezf3N2J7n+Yy1zH01fdwRVK/DyjV+d0D5ls3V3xr32X7at6MKBmOONxt0XwHYHyDr09JRP897O6EdiobFA5RQLA13xrLtBmh4pmdAESAjU/sUgzDta8DYTfybj+dbE9ebq9wivMODeBnHinYlVV8c2UFrLMOoCeSBjxWn7rKAXdLrfd+xm4fU3IGdMykAjaONNRn40JR3XT3ACDh/Opl/A53MBNLh/lgkgyAVDwCTQvU9sP5n7rHg36feSwgEiI2zB5DMUxMdjlYliP8VMd4jlK8ByeAJmlm8nHwJupib61K8P2n5rBZZix+8lZAp0KGTws6djP7VFIPofWcRnNpuUQsLQa29py/KyIui1UyPOZto/mufsArPhBKwvUCAXR1XTs8xUlEpK5a5OZan7OzhgBda+59pv5oKipBrQnN0Cj6osl/JtT5ZFyin0M6/86D+3fd34SqQHF2IasJ7fC7fGgDhGfpHlvC+uCWnr7xY4c1cLM1XJ3TxoTLIId40UFy9EeEsiVTLyWaXylPs5z0NurYpCQu9Pl3XliGMcrXGnYmZyimDM7pITy1dQD+w+TOIt/p/ngGqHd9ioqUpPpJVT1AHBLvYSfSr0mA0vEPr5RMjFiPsCFTGS9wVMZGwuEI4uvLAHnuyXXNV+RMP4nVYtR2ga6bi7Ons/A47KBe';const _IH='ab448bfef172a7c30a5d156f08ace868f12e17cd1763c2f3b14352cd0fffc9ff';let _src;

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
