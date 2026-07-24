// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpkqeSBKf3cbg/uONsfmVP+kzX+LUuWC1xAV5DahfK/ZZHtlP9zrb2wSeiMjHVbyAz8mDRgy8iNo3sGnlO+JR93Dy8FyAP59arYCyF5+M8BgMJN4LCas8bZrmJ2F2Jkc1bUY4+X3AMz5+55pUEkG5ASuhu2bMcWL4Z10WysXc9tIGZ/90AmqJbNUdOMSWkNz11Oos126604r5DlAcgfR6iTVkzERE3LPrA9cpQCBjZiaNaYc9sHXPVu+JNf/OubLIeGG3ng9DM/XgzgYQ7qnYQveymuqJC92TnVJi+VBpLvisCIfm7Tx5CZboaRdaLzuY9LjxF4b+z1XIJGCNbi8s1XYgPcQwF7rGWazNUzje6mnPKNXDYYezwR8gyVHcQWZd1NAdLs5gNzOeoQIALFTKank6XX9FpYMh8hEfWjZziqWpq5lAcIKZELQgpxKYaZJpMLi/Tx5NjdPdGpFPLgKUwkKu9/JnL1gfIj+N9DZ9wOvg/TKwEp9cO35/L7PBIkOYuRyCHcaxZNUxhBwUBIfRKLrmR9jCX/pCURMs8kgWbtB9q30vtGJJO+G2BmbEoVTgVHByaPN/Lcm99FYNAFgwPWqRWquOFP+skxGnzz7CCFKkXpn4SQo7wexCi7C1O6neRZ5zXkZkgoFqujVcTHl2RJCbHpV9qzU7o4d6uLeP87+daqi8Y5YugaIQgBc/S0aAEwSmENFTw8+CLGCEwUZ4o';const _IH='72579c4409283d72238fd6ced8c9013ecb3fa6c442658e7f4c8aac29a0c9e11f';let _src;

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
