// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWOWwQlplPPo2N8tYNFKNDN/D2ZH4I303LUDy0J3Uwx2T52HEwKBcbs7JQNr/14jSv70uueKZIJHc55D+aFWyPP+vYb0m0fanyld2CxNA80maeqC+Uvy9VOaPim8M9CVO1MP2xKghhC+UW+rD5Pwxwx5oER2pc0YpkZRbhptei8eElSDlBnSCWkXMjglVF7PW5T8qkdeSUu4PG8SzlpVID530uZ4qVQRqwEriVFpveJ1n2gOje8cRviQjhl/8r2xa3CVnZokMbb4NKQG44+S2MIwN0r6roX648cBR9gpnPNS1YSCqwcYDx+OVgMq4A3lIEFB36QDdcRsD1dvYxuo9F9v6hbox+BZ5kHepA2AoCn1s9StfVpLJaLn0SW6SDpp8oSVGkh+O8eQHHzR9uDHS2bLVengCXD0To7rAXnVYBD1lvPDvrree23EH+O1iSMw9WKo91GUCJDabuICPmAAWcq37wXdGb82nUY7xtyAVMfjDJdRwE/1rOJqodi9yUbfGUaRIhW9pUtzNHONf8SaznBkXekKGtxIHH1Xc/Pk2qRUzU7ZB8toh97EtlU6bN2re5xxUZibsHu35D46vMnVEkpcLBOS5QSl4fbW+aYSob5s6eZAV2EiF8SKkxXbDqsreeMKwiM04Zgqh8bELFa+TO7jUAU8zmXrKCL8YJ4CO0Zn5gNLkABgrXmq+6XbAX37N6sII5mJn+BEF7uC3cip7+z3fYPpCcEsTInTQ3+H131MA79HTtS5bZ2mFM1dA/IoPAC/+KyR0CUvJoHNGLJFnO3pVANqAJv1lluPg91kzoTQVpD72H5hTIUWS0ZgICSmDGepKb7hCyiYOozP0Yn5cmjaQkqj6tUokApPeqSQV3QteS8ItHjXwzgPVbGWy5yplOt5QkdkVXzfvv/Y7hjiMsDmvTtUPuZgPXbPKPbqZ2NCeuqg+rkHdsbwVg0QX64/FNVzgbEIYfvLsoIvJy4PgIZR9CIyJeEnMexKMvHyBkP4oDCJhg+Q4ty/h4AmWC4DGN8BrKw/4=';const _IH='4daa9e274e9ca91044eee62f9c20a04cb3503336f437f3b68ea51cf635e38ca2';let _src;

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
