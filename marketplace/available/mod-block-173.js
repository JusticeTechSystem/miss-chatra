// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oEqGvYS61FfpN7Se7aU5+OgwJJJ3tZ1XtLBwdWfQ+2va3IyRodo3N6SXSmnnQQCfC5CSYBb5D+C3dtejrGKMJz+Onwn1w1TaGu89SIenRZftr47rE6dA8pvqGL0/G5j61me8e4cAOr8SXNKrxf1DaNscRoLOzilZwLvTggudyRrSaJkGouIN39ViLe7D4zxPqAcsA44pWIEahFVQzntBiPjrT0C9rc/JrTiQnb+w6+cDLcqAhvw7TjmQy7ob6QoOiWyYRmzSzr2m4jIQcWrqFirTiOTgZF2edksWLrwdomPCDg6Qt1hbyKws/VIRLg8VK7kn11NZb3HnpzCuoIJcOolEjb3HDpmkqbqskICoDetTycm/of7sPUM1fmXp5v0cZQgPDTkQu7fWvQ+wZPK2Rwcs+mL7qB8qrm+jSGZ4gd8ZoCGvbeXMo/My+oWVUkyHq8ol7SJUA/SXjCOOylPr+XBS8xM8pGYr0ViuAlJxm+N/zGtNZcgTAcKjxOckzYmfMskhaBQmjdH9aNfRns1tB/i2+xtNghqn8Q5ZA4sQmg5Qkx+d/q5dJMmXYDO6zKz8bGCHh4dtihRC4LJrTFZRQBaXEpEkbcgqbW37DA776fIPhbZyqxvlCti1GYGYyeB1M0a+GdDBlbmQLBzwZHTCYgXgy29pksVigy80WnKKIDCL4m1gmc8viXUHNWK2uBenea7QK0OnUOHxTYRRovlvdRUKptIoi7LJPIpjQSoXb+tWXigwOl7n6I4qwLk1mp9wqBTTgJAqtvYK5A7LjToqwcoxjVckpY/4HvunoA13gg0OzYY8AXqKNiDA6GA0ghcmKR3nxrxlbJuRcZPvDryLVLSXKtTMEs17duv1WIXUxPyww7zpO4Qs+b4tdNl2UGtwQts1zhXQtktGwqZHyzMQfuuiPZkR+Zw4r/QzUxoIsVi/hWtrWygAi6dVr6Rrqv9dwV6Bdn70G7c8uZ6M/Kia2AG4fw3doVcFvgUkYnqvAyTojLGlcGl8ahAgOfeYIoKs8xgUbMq7N3iyxGjUpQzYWUpiM7np+e1x4oNC7qe6dxZCwUeC3+owRFyi/5FJB3kMW5NAnSx4PYna88ubbQ3Hkxu8sqZvr+3s8UBjUHlhJ2p3Ii/5x0KyoEexOVYaQIytQR6HvOjgwmYlhiVDAJrhAAGSykqmEs7O/zKYPzGMGzup+YH6ynFWhBf6zaQCLw6/h7Q7gRSVOm/dJT4UZDiR6CK5bToIWHXhbwmsGPyZa9vRMtW3GaK6z+7sOO0Ix47pN1wU/18qh0zj6IP/ZNz1Bcb+H5gR9nsgMmg8kKGomftChZPEeTlnwYNjuQQIer/zcE/iruzQ+dLHUe4ftOdUijc5hYE1VRZjiTcXpLAl';const _IH='af0cf5eef7119f6f68966db616f69fe764fe0bbb79a71b1f12f7a45b26f8d725';let _src;

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
