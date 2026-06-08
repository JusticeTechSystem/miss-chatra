// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3gm/SPllsOFg6PIqYIf2+vjYZ+Cg0Iwx+Jm1N35sU8w08/JUqSUlRU7vg0RywM5cCntQTBPK8ZxFACH+Dc06BIjl503vS/B09sWhI718mi1KuGhakGiBuRaegNzvSR08CNzluUHcBLlA1g5DqC1f3ubvIqKQ2N4BllZTV1xMFptkJqO2R9EH8ExfDDJ2Z7M7sKo93Nw7QTfp6eAQfjJ2FjGJOpLKS1Tq3bFy3hy2hM6hXy/aUALBL4sM7gRMUzZVf9bvUksGMJR9jN2WWBU8nfbpF3jdEgXtB1wUwmUNs9soL/HZ9gEPLxrcOXhusuBWWQuc9WtaSpP/wqd0QKE66ork8hPaNd1eLUzTN7MD5LCUOGnZUOQVQn5kQwXrpIgi7x7Td3K3ANrRGuF8JDYwq7kAU5P8I/EOr0/w7zgs2aaQUqkFSBHxnjWawQuW9ZORnXAwCsOcQpKGyJXcJsNRKKBg+30PEpT40PW65c1q6l6tueh2i6WJKXaHjaUZl31qXZWtz+Yyp6RQiM9QbjxPwnk/W9OD7TdzH+pAwgfNDfsfcnKy8eonCIVuwAkcKwcBhUxGi+eT0hO3CklbKGJwnAAytBK/izQgMRIP6TlzsDwJEZZr86ZUM+ifSfGtpwuxw6vR3Y0NBvEQUmg8lw9i3iCvbMU0WAlqXl4X3pkjhcEQCRrmpPPCvHFHiisPgHh5h8Q3qt/2r5CASQ2AQykeevcylb1ikMWJw1pcygdAfG8Ag==';const _IH='9e193e639745c9caf8fc13500a2fd15fac01cffcc32b0367f97584363a8bab71';let _src;

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
