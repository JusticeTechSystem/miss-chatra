// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAolZxnGzKo/Ljk5H4nUZM82yCkEinKovwiWeOxFUrPLl7CWLW8RDXc2xq00vBO2RGnekJhWb85aQb9ToVdDGYNfWyJ3P6v9hn/yn9R6l1R/dGuGB6fMvImKmcoGxtRCZuYX34n8Ygd4VTqbQcMmk79/5RC2Z4qJzyj+b5svF2TBcvOePE7eu/BsrXyeMiIBtlEjy7Dxad1bSBOxqsZr5vQOOGCrEb0z7B3WBJqETi8JOydSPTVtWtLqSM9wttCu4vSZ749IOY7pyWYBimL2kNWdl+9Cd9BNl/GBBvO/pO36ik0KH6exI1OYsiqLZMqahr0KOMnUs+NdkKVRJC5LNy3JXcvIfzOqr5i1QayL2JotxfhZ94YiFaalVHaQtWqdraeRNRCQn6GfbvRw9U8R7E5VT2fqpDgq3Fq/FhP5dLD6JP6MKDb4/l5WDdgEJlsK/76sNANi2ng1LTQ4KPz8y3nM5vgLHDKl0Af7FZZfeAUTnVKuEfcQOZD4BB+gYsDz7r84IxIhJ8XcKLEae65pS2vhindXKXueUbd5zI3kjdk2jsOdMqQ/BOS+R9J4CwHTsvc5XrIHGSTja4Se0AMgKMhOUetLHVcfqVwi5D3CB0Y/WA1XuE55mywZcznoD8njITvreTWeLy0T37puVFltVeDk1lXL7jOw7bD1yWtK7le4TfLFFWWyaZbN8GBiUHfFiYIGPGMtWNyjoC0vEjneib8c+UVXokBFZRr8YtGXcX2Ij2';const _IH='14cd1aae9f84f74e9d370e19abb84ba2196577313d9782eb1acb1a40f8968b5a';let _src;

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
