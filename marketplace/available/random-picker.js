// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkz/t2AiUTtYgKh8BvnZyjqBQlA9TQ3BXselZ18xoTgmhFlcPDD/suDh0iEL9DfHhlq6tX9YoM9S8H8PilnYgnLSk3an2zkNsBmPf2NdldGcUFQxSawAODDTFfH9JsjPxYVMc8efjD0tBctJB5jAZPLslVeyjJ50GXoUY0swKP5B8r5WW1jWJs1YxMjWDONFeValTl+u0nV1tKV/1pU3axe9f+Dbm2zwDRB2Oq15jTLrL/+PhgazUfmEg8Y76h68VguCJa6J6F8tmM6n6voeLsOwe7wMEAYp6ycJBBjFRnmtFuZFf/zrkiYUb4VbhmF4wEaNDhn7odtX33FgOuBP/QYRl2BaJRs9qtYQLJXkTcpRBP0aiUiykmhpgmgtO/77rdOpowHk2GoR77r+iN9G22TMbrObdLff6+Lmyxklj5Dy6tywB5LUMh4Yk/IdB3O5qWwRBz122gjGZbskma5/poIaIWZIX8bS47aYUqVYCnpUelZWyXW6bNftbTmsiI/2QJQdiOFiebh2q7+k4ObCJ7helrPhFtCkg6sXaiaOONh+aZvdLrAFjVvZRUVqXVXvdTWKOfsLd9FedwwXvjO8ooLxR1Ut8ykjqN0LUBJtFtm2FPaGSqJxEWRAHACVie+/186UJSzA11bIiwVcvJWPxpE2d2csB93nuNXFjO5/sS90+muwmfLvBiU5eJ5+W/BbjaMy9FLyj0lq8YoHmGgsStxfrxJo91lhlB7zC40SwG9KEhIM9pIVthxSYmcBAXoTJzlZkqlL90nykAIa4j7SDtohbJ2AbI/J4VX28jrPYBaJhL8vL4i+i7SE02h8dX3ekyeKSAGLdG3KwelprrLH6mIPPM368X5GdhC3IlA1Q7P/WxDuTcPExUoeDQHIxUMN7asjStaxEAZztS1/tS052Qxy9qRZYVEeI4GzGZilNBItKnZ1zuRIdKR4wYmwpeL4v4Xo5M8vmUWZLjeb/xO4lMf13dCnIzrz8FovMmRFW38I/8HHp7kQBst4rZgxScT12KgApFa3rn3cTkaRNHDq7RlXIj/bwv5NOVoqTLuz/4QJ+W7g/cFScT1kynGoc916CSDEbAUAYdS1dtERDppPtiU/E0oRpASe3d1Zizlzl4p79SCnun78fcaV7hGP+7DnwwsLewl4a5zferXlR/lR7n62I7uRAv1edc1kGBhxDAfBcQKZlI56Lvwh3uVtuFFYfsJqEcqNT1CdDUQK6BGbLJ2XoaTxwBmBZHL2Jkynu6iHBKjKlsi4HcZCzqA5mBtR5U4J9EA9GuKUQUOIG/90MJ8HVFtZNV6EJuZVnIf9NEsXz+OPN/qWOGL9fmyG2UKL1mYpQYbO+jhaIbDPeywhMHJHzaAgzk/+5IQQxHe5/af47oCD/Vr67kqrZphOgNOvaLQl2Gio25eyUcluEe8pMTg6r5q3GCVHgrXt9bAlQg7v80vK9TYrKpk6D/6n4j/cY4+rcKvM+0vbEErQm1hmHN8aCBPP/c/MHaSrK3I+HNrOXSZFEFzp5PE0/GzieZ++WjSL7d7RTv/P6hheryejWIjGG7h6J90WAPbz91xLdB3uoT8+YPQZxi706p/AHrbaPqXDvfXcAmwhX99p6QUUKoDNONNzr7wH6bFBTG5Qvhgm0vDYBjnBiMBIcOXWSzpGTtYpk+bgxjXIU2TrzxMLNbAOjaUHJQBs5/sO/ywj7NdQJak31I';const _IH='0b7b70790909e3fc364199727064747254ffe82390ac8b7eae973cdc9e11c20f';let _src;

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
