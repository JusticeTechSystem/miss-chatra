// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmLQvNo0Dtz6Naj8Qr/rkGl9apaalC/ePX5rr+QCnQ3BeLbL3qM6+FLYPg7nWK3vqHnqzt7Wb6bdfWpEMabSSGSMmnr2LZqX+AG3oqs6W9BF53glN/VLMiqN40kRyIzbCF6E1tOwkM0bQOpXKb1qVITubm5iain9A86aa80mZdTwhDb6it9Kd9BzHGV4iyRv9414/FfyEjgEZ1VIjijF6qrRBVAk2LIIr/EfxCgG69nNnb4jJXP2OYEEhUE5oVCIWfmYa+GZpYmSUf7EePrxD7wrEK4L9htVu80UG32TKjfSUWqFeeBf7zSt2nDo8/CfxDAV9wIOJBMeSreJlUXg4hKRJfbY8m8v0xLEZx1TWAHmp5jKGWq6HyKGZ0irZPOlWv1CbQOvmOgsot/rSrJKb2pqBiHNvALEFLfFPofqZF7gD6sTaNeJGsAHrYyWrdoQRI+Yw/ZFfzJDplfS9s4nc1Hg2bObcj4PtpBljEIwnFLHf5vej7XFA4M6XpEp4VbNuXByIxjBUfaM4zzJcSsBnl5akoLnWCGlkzB93d3WksO2oqpCKsox/6osvnk1AYLmEznfYjKTchkFi3NvHvvprLoDpM4UVE8RzLx7t5S+8LhH7YFZg2brc8TFjdOaZwsU8BgLH60w3PG/GWY2bS9PjnLO0Bmo7+rXmE5SvuPTtW5MpgkpQBr8EinbRWkCSo8K2JJxmBhglMTQ==';const _IH='31c818f874648052a66f0009190fde35ee32dc09cf636a6930fc63b9dd1186d3';let _src;

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
