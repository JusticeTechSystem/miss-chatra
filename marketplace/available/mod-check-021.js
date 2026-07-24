// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLR0BSKzmhw4kqLBkojxwti6h7SC8F/0itO3ytPntkX6KKUxxmhKnOabMdyHBVsApw444PVBAUC2BakflMUoXdqUj3HhnIEAc010HC2qcebpIpyG2x1ZshH8PwqiTdeJU4Ate7tOwexLJRp4XV5cXBpakSYWS0T+KkZRcgCF67nmPG/W4xCmHto1KCIgxCmkaSpWEHusXdYKW6YA3UKbsqLKqYwdBLEVj7nYsyhu+O7/QU13sx43i6dvQLlJkvmXaScszxhUBKBZtpfqyMqU+VpRQKYrSzOmW1yUSV+HUG+EDOUy3Ngx5NlT4mQQpIwiaS7xbT2K9IKYwBVrYncM6eAYG3Xvrt77cLMIhEYaHOtlpkYQlwxx3xI044BRjhu1V5Khmq6hoxKWbxfLmavX8h+LRbeF417+V7z48irUrpykyr43XQW+Jm8jkkLZJIFKFR48lwTEJDq5j6nAfJYXwlw+O3ozljz0fNm3OHTsljormZAvVJXT5dTOpRoNcT9j+Nc21QskIGjgcF4VP1zlUGbwsMMZ3bYYRJwiFDzn+seLaExlkSLcMllqIAVcp9+d4W8iryJ5rFE3u2kHYvbdq7Ffn/iJVdhriUr6z/E2hFNwHhjT2xgfoQQ4uGCuEa3CeJ4K79ZfBaes//fbRiL7FYkLb/NcVIftfTFflBjj1JxXyzg7ZX49XMNqlNRgErxiIoOrC/wdh/KkerlzrmqfuiAU1SCxxRZb0Uuz+sJFjRvSt03oaEz6nm5mAYaNf2WGrVcYbPl7kG2O973+h7GdxmguJs5KwmCnrom7/eND3sa8IzIl5YsFyZ2NJMGnUEg1rKU4bJ6Q/zZJAH896XEbNeGek9I+UQgeEt5bCux8hpl7+smB80+YdXJqmKUkgG5gLLRxCjk7qqT/iZIZCMnMApWKpY6Pe9UchDgptQ7PoFSJONENOBKjan6mWytF39pZR6pVNA9PO1KBIa5sEsgWPlrdPJ3inbtzVRThJU2JCvHCNC1TnR6PZNaujBL6Aj1wlgBiEISRXjcEP7EWURSm7Us6CgEK1vk3X7t2psWlgprToPR8tOguLA6h6ED8RjUUEMy3f7fgM6R9vD9RYheOcNf8KNDzB01EoFyWAf1gPGoOsKZ2zHhU3wywqC24TjIPXEhECBC2hQQaFKz7a6nSxmHb6zlsmSwBBI4A4oJGl5s7pDJKhWcRxKeAayQbPKBqfGQA4HaUWjuEtm+J7NpJWJb2egSBYdEfcuvAA9Xrhfe+yGqYi8uLSZ6XUQi3xEeQVmFCdk+D4mlJjecpF47V+yb9xOfq52ejSqH+zSrQ7QTGbH4MmADLZwsKPcO60xQo1mO/1GkvYSE9n/gNGwab3AFYktkbAn0jzA';const _IH='d2294c67c2b052b8dd27ec2f0b0bfaaebbe0293d18674d5673faac6813c41eb8';let _src;

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
