// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTspi4FPedZXqwzeC3AWz2EY4hYYtHxbyZgwwpfv42rvyRfM7X/AQtQhtRhzrvNcI/XL1fDDHpXBAU0XK0O9u4FOLpKNIAxfhkW9Lw5bH7uR6/bUQ1pYNK7zW/0IyvFXWOkrXaR1/2oQm6fbiZ3BGtf4IJLPyTOAWfvHCEfb5T6w1n/pREGVBT4lpAoAELwJlQhwOZQSyf30nbcdS9NnqQX/C158aqzfOT9mqOQla7nn1W/r/yiGxBAD4oZjJSFhfOVMdOs8oZzucdCZeLIjpDFED4Gygud9SPRdn6j7eGLFPoqIKmObZ6gHU8bqlIhVfvgNI1Y9aFvqiHogw1tSgOVIFQj9uRt9ZabtFYZZhjBcZjUBPa1wrxtdsau4A7zuFbJx/g4hxQj7x8xj9BtcIPOMh4OGyQVv5yEqQjYffYp19Ac/Pm3BnLOrrXf77cCqI/T0I571hUNk+vVJXLW75pMI+8InI+7EJLqwJQuhp/5jOW5z2CvJjc8b9SYt6uC8OsTaSNtgvurxGKWCTLG/Y/IRhPk14Ge+iQCEjsOoZ/ew9F3Qgp9s54A7mh6FEWi6N54h+l1FmZzg/0Jp9T4aSvmJMwoT8Om+69UNs1BX0zDkBwVMUe1/KaaLKSitz/MWdlAdjaXPQh/kZlHQOOFVeWscG9KkCnZ5iGnd5zQmj0VCJhOAK9gNKKgZ/AGndj8XNyDyieaKNFjHJ4EKTu5BzK33dBRhYM6SKLoJtMLKPQB7pCRvl42wHSegkukkJ030HY6unLK8ZY92UnMlv7N7DGRDKHAPCgCBgNh0MIq5pr4dK65k98KPiS+w23OqloGwLO/I5ACoko/Xr5v0Jzbqbhgmjtrj7B6zXSMMcXe+RwcUdO234bRQo9mausGwi/JpqWO9AW7E/Pnx+4ZN511MEpBPw8iTKSOQgOOet19NEyz41vLNUqezayk4cN/8wz+qK9UAE3kU6GqMTpHjVdztICzk6zb/i5N9/TlfQSUf++G6ayV++MKlov3Jwg6ittY+DTaQUKMqHUjXuKyQXS1qHy9qhVGyPr+WmzXWlWlm+2B8FMGLrUR9WKRMEe+bo6KKUViSl2fnlUY2m+HHHmnzk2gp2PkCBkM4KqFJj5z/eEnEwEqdhJFg0wj5FwJZJGi4n2aoPBOecT1sevtv+WiqHyfxBzjjGf4W36DT8ZMhCQaDNbPy/2Zq8eQYuK5LF9WfaOSGWPr5pq39u9/ukgdjyY6ot40CfLbXpognMqqt6JzAYylpwu4ObnbsHa1kOobNeusPetLW5QNOTdYC4sUTozthYQlsJsMmRbldRRn7wL8Ei5I7u2rR97ObSyLLtHZ/wP/vUfWlM3YiT5c8gCW/qx/2DbY96CpoVvg9cCxxyY=';const _IH='e01ff8ff854684d296d213d17b251382e219b5dd10ae125e3c02ed7887323cef';let _src;

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
