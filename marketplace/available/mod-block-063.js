// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeivsnWZN88yPQC3FGOwGuFQYs3EqxglWODECKY88hLc/DZbMJG+99Ur6pYo9jX0J4QKxA6ZN7m19yFsTiLs5yBWVoACstgLL90TOWsRl5MhW6v6IdE2e9JcApB8fP4dutW5Giy6zN7OoZs3wMxIZ0pvz74/67tscrvn1Gch7c5KQkiz1JvjyeebzqcNLbqpyhGDb60wMUd0aQgF+m0wOIbZ6f4kxPRDz2OZZBJrlAazmfBNc4IvRaU9YTbqJ/nrGzy5eAnaV6seqk9du9MjSAnxiY6ClrtNl18s3rAxpF/0zTajzK/VzEXhlIf7x/LqhJV/Dpa8JZMSq3HSuxJov2ChMlanQssKdAiotn+KfxfGILsm16aZvuiCd42EPF7pWqrlUznlHX3j4OvqfSrjxZFXtrEE6r4KKYUrXmtjYyW/ehKkK2E33y9CCHx0MWMdgeqXml/DFtIj35ECG5DnY/fEXPK4mYJq0b4IVwnEF0DCMDqWAZ2G7Vz2MSb0I9MkQpYO0iI2oOnzvdnLcVtBXj9DjhHQ0EkKu7aiKx0WP6MIEQ/07xrpBskusXFiS73IG/pxW2OZEvrGn0Whn0etuYnWJMgJ/m3tOrNDubI6zXoqtiWu8lN4I0Z/xdbBmUVRPjdQQww9nfjAccJH0xXT9Bi3vlYdFnusTxcFOnxvVvBFX2Zr9CBCWuG4VdxDKOZrQ+4zaIsHvRCKdwJEEoqkhxmijC+CTeBwIIvtfUmZc7HtsHtEmEcn2ocT3pzFe/CMm6Q7z7bOjPceQaSro5ikETK/IdHsmB7FWfdxXaQjKgKf3CsIES/0vCQyH0avtq7UCUGLvCjgu/uN6/Y9u/mGO0c/20o3npsGNXQT7eueucaO3aCdGn2iEe+pmMNjmY0NXt8P5jn2r7oGYSYcix8YX70Lq1YjS3Kxrpjm2oqan4V4JT6/sb8JhClibKjv0TWjd6MEQc3WxDFLkZz4g5v0uJ/RBTIoZha0QCjYsMdgPAJ4wzLj84lzCuvG3jTvvVBy6IQIxfNPx7DjLukfR6FEfeMCAmq2tXmEUWocDmxnXgmqchqb+kNdlpEEccqFUuIrtdFJ5Zz4E3FRA2EJFOZtslGGocRTE7wgFTNV+41f67YEBK/AyaB5RDSWgCihxUrdL6RNdcRBDH0ijwRTdaA0P2tBBg23kzmS5muKSaWnfZFJSl3+UvHRkr8vGdjmJ+bOQb32ATlNvCAFgmW4y6CthYMLswYFIbAcaGpiCfy1nxFJ9dCDahfGyK+P5jhUBXbYcfc6cTRmkjJBMK+uZ2h5hzMB7DnSoS03XRzMLDkHeuWmj0+WG4XuiSNNdNhf72loy/RDxFEBIPFhABZvGMAwH/htrfydHUrCDr';const _IH='3b777cc2f04b7e8accee3746a4845db5c92bed4584593cd38195fe84b7f3b34d';let _src;

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
