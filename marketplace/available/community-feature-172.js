// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSw4KpkteEtX0wBJihhdI0zBCsgyvvldot/+1JE5zU9VWdq0FfiCPrmmNYK4njBiwGetTeikCWQHFqXHQIO64yaLLdHNdaXUZuWBC7ptxP77h7EUNeIeyYoOSCte98cwnrgdWISHA3shC91Rmi8iXLqCYI2u/Ee13c14a14B/sNyO4VLTxHNp4qnN9s9/5/ZYgR3AY6Va3i+4fFz0r8vSNFX8bgIyhMtvatcrCg4OgiFqnOj2CRwzGE3aN6ZHyMsKyogpskpObJsDdRBfYLcpBgYZcEmTnJIp9Epc9k5GTi/u3OpUM1YcTEz6XYonfVmNLV1J9GsB6Cw/2oMzc7mfEqc9IbTbFUdO2K1vWkXRGoNesuh43yk4Lu/HtvHhPQtqmEsYFqnRjroXPqKZCOE9zKH4MOsfsyS3vcnONpPNKmjm38Lcsxfcw1va7pw9XDkgAfoQM116xW8FO2jMqwXaQAccSQvSzLJT98fZ7262srhSZANHuREsqVNcXnmgohDgLgyQEsqXAgRo7y8wWt3r1myADutvOvrNbjeCru2htIohaxJ8i3siKg38Esh8mNTfY0QU8kaUjvMC/aA6ExpqnSDrrEDrUU3Rhr/Qa37JtH2IGuYVm5h6pMYDNOf6dLTYP3gfnyUyOn6Md9DUDl58iz411EZlyICM7KSU54GHgxVeidVjwcFf+edlnNpZYz9N5CD36LWbPvAeNIVZeZjgNNR8CXHMvuZZbqF1nI6TuDCIPQJA==';const _IH='1abd1752d65dbe2974d3cde8cb682e8194d46323e77e7243f7aba8658a506131';let _src;

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
