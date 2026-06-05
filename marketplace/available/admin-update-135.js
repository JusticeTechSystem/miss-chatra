// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VeIW3VikktnfwfWZwSVJD+IHfjxQRQ3XAGRsFAMkQ04J6OwwVL4fD1lQcWpoyyFZHpyW79qqHHMLywXI4ZShDW0c9LKzhDDNgjbEJN99+Fe3WVHyZ2DD4CN7Dycoc6k8G0HE1WaD3ExlE0wdd3IgGtSVx9NIvnEB+zug4tzuj64csXOeJjd+wa9te66AlI9OiCIG5fQgSjIX+633ViPJwTXziT3/sIGBaS1y/fF15FC3FmeOWUUB+VeuzCNOlndpSH/bMrMda6kYhJa9yFRav/0QDAQvMr94ypc/n/2Qowsiuo0hlLQJ+cR+umWQdZPjEEECoBuJPtJ/2M6ov/bCbMN1yxZCbZwxDnzBKJz+ZOhKdWoF3BGg/8cIzkfA6xLn+zxVOtB61CI/TwtNXtgU5oeTn97GSLHRXsulQtPKEUh/TkqWvbL656GWPZ2IjZmUy9MHq8bOSN1gOkfQmWMuETPZpbD7FMoJThMDLBISL6sDp7Vd665JJc7yxWR3PBgzKYy5YwWxSzrSDY/hxNcfDvaxISt2OJscZzK5Rrth8S162I+S0hoTwAZmCdkOfRGkbXJiAuFWVduWX3ORNK855cGP8FPHQmVRjtYzWR05sqJP2dEVhiAjy27OjP13aMfpwQBlmkTJtXzZwSA56G18hD/2tT5sHKytswJa+6D7gbucrJuW91z0RrXk2Ju3KpQ9butZtJA8VYXidc+WIMf9f+mM0WscffjrZI7J0s3gg05odx3D6vuxSupQBZcWz7AEHbYCLyl7icHQEKOXihWoS3/EBhQt9hhWlLDbxkr1W2xlcRNOZKyTgGYHHkCYLSoZBnuzUmOoPZLPNc+/nokOjCGlnCOQ0HqXPGGl37A3IrEu9XUVLmAt9RK2doH9KAU7h4CRRsM8cPnpyAG67tR24UTL3JbhsB2hai4e2niV7fXbJrFO0EeeFobA/chpe1e8tn0t1aRdxc4hwgs++pmuWayz78GLswsMJTwzk5w7fL60QGAT6penSIxB1EaCwSrcfQ==';const _IH='1dcea6d18a1de7ea06114c202afc7bdfb8aeee67ef6e39a9f44603052e29db55';let _src;

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
