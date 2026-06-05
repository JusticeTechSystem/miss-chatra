// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZuMAta1Rkfdwwfd8Ss72Y0kzHr182BO/MoGaiWj87GrBfR3BWef+VXy24BtA8CeN+X0AFfL1IJMa1FzHfqtN0WCc5Zkg9V+3jyALDJs6gO5DuKQ+9e2LemcVez3hGqyhu6ADRI7zsaNTLgOn+D2eoC8G53QCyhwaYPdaXDAjeIQvnlL7S5CrBiFN4q+Otx9RJ4J+2qydO3biKzX9iv/HqpUzpxNucNdOQbv+nrxdNSuufPMA7tJ7qvhyCiB1/asRAw/G9vpHeIKj9OoDB/9p6otSmxHt03Q5vzI9GjFKTls0Nh94RKpSc7Lxs1AVig3gPshOYSQPWJhvYRwL7lp9F47y0648q2iPEVlLUxxSM47ThrGBPZuEmyYWTY/6tmcbyYLGyM3IaWrM+0seuQ6cFzM86e0q15nAS9yiHIH99p/9wioPIVAArRY93z0mQY+fNqPRaKgePDMktPkmH6cnXdqaKYujq8QwhfpBVHR4IKn/KiPx+BGpHqHmjkwyGq6Iqp4PJ8fTSxktDK/p8GjF+/6JEx7W9sSCGmCEbcZUGsa4IzAaQlzQBlNLw/IV1hcnLKwme6RY31zDl9X91+9W3ZEAMhKnMA/dUS2r2IkHB0/WvBmvaRlRwNunkY18CKd5FyT025YRGjZLQrTIeVS/OOWlqp5ZjElgv2fq2tkrWSZ7v3a1ujPbGYVyLXlUZfs4y/rIEReh4GpbXCfFRTM2Ik1VtSNiM3V6SL8cJDTOF3IkGwSuw/0TO7wcOKNxtA8kgRQakUvRi27g4YQKGpKPAWYKdTGs+I90cXbxJeOE6HULhZChCkGez8NRiBWjU98XAeLBQzJtcQVU5gp4C5sy15ShDTGRf/yZTgUFNp1kBK6YcmYzN4+hgbzVWzPfpgeq2/TUodQiIYcqptlo9+plpcjQXLEagwkyVUxEn5WwMzlogl7XnJ5hI7Xd2TUvsCzZ8BH5VddhGAxzR5aOLbgtA2g6h8ZAnvZp+luI9XHN3OEBclG07ZcG7wXOpk92';const _IH='730f292ba48d7947de0205a7d0f0e50e31cb9ceeb2dc79991d270d693da63404';let _src;

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
