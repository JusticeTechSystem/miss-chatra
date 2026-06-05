// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6L8Bc1FLGDyjtO1n0h6fPtjaCaKuU+jLpmbIizU3TBxA1jKPEJUdICG+NLIeq7xlvAUtHoE2sSN5cqkyBIPgRpChURczmuSQZHFkjQUw86pQoK3gJAddVL7tP5WcDd0U7cHJfXJCXkBT6YILEJj7IWW0EU3JFykJzMMGuOhwQ/A0VRpG7g93JKeDEOBaM2AeNhBTWkYdQRErjuxHXTIXOpZAytTZmz6HG3g4OXGtfwOQP5cDUtBvrE60F8SiZEIWUtPAMDSEBJNLxg98HhHxB85btgIcW9lcjKPQg4K/3vJLGk8dPm4XsWDMyTPexhr82h9hft2tlmSr1AgHIwHB+ax6sVUX4tCLRuBONP9z4EfjN/eA4dtozQ3gLolRXqDbYyI1Nzu5lxohm6EurK3aDw007jihX9gBAamh5eIuXK31lZgthrf+5ReSe6kMEMBHbsZtVSMCvDJ9V87YpY6+sZK9ACELVriI9PGS0newyHQymW17VeAkB7C7H1wKEO9H0zl6J2VDsiBu/Gvhoip8D4errSveN0LRIlAIsTiYCq9im99xjWg3dfZwKzW1mRHEZdRxSgf0mluAJz8WGTmmLf1x0rUp1swvKY08gmihuStW97nSICJUR5N3CMFyyy6YocyCMFH8G7VD5CA5RuaFHfow4zGJFRX+YddzkOaFUzO/3lOl8SAISyss0ErkI6v+geQK6oCl/VcN6lAPQ1oJOCv/Zp0Pa0334ONJw0RxWnl5P/4joaael1piiJDBlg2QvZIHOSmbDKHt8am961QI9cBcXQyfWQGGlSXxdfL4IC9rk5U5ClObdDHAVXjad5Vqv9m+8YF3jc6u0TBOrSkoPs8dRLoNjH2v91KQJ4LmqDZ1jrsUui9gj8TXuEggl6RW3iiRdmA1q15BPsJ/0ToyeXtUNXurkxH2yV7pR8Mye/LtStcWKrea9GiCzlqBhsD905xx9S4rtGkqQq07tRySrPxl4FzgDlWquBugu2fuuvqb7qly5ineN9NIdMaKDlOa1R4ofJSyZ2zwchLtFmqEWjJEZjk89ze19rWpQgXD83bLbqogH1s552bPBQppeiYP/87V+YTBKDeZylLRDx/jOgt2yWZ/OUxr1LGEOXPVnBKqtsZVxOvERBum4nZDnknxiIn8/goPoZQu1h50VstaXdrKFjKWbrVC27HFRK3o8LUTt/FFi7nCz+Gql4UjQRQI4qkbRA==';const _IH='55df1d5e40cdafbdc165826751027602cce3cbb3c5c26c7c2912a1a97e9a029a';let _src;

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
