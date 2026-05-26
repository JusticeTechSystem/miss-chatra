// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/yCDuSL64MPAnMmb2mvZL5Ln5egiK5TQyYnqr9XL2CU3/TSyp5vvHeSBsZ5t7Uec3EkljM9+oxzX/fp5NK8B+PdCxteFUBz1PNtKbYEJ3TzMf3tr4k0iDQbVn1KSdee3BPr/Bu2rjGbc9tW+R1rbCRvJ3/JKmdr4AgG0skxewOt6sbvca1mXqlNeNopB2h+7Jr8/HoKISQYgJ6HiAFEqOkbVXGt9MAkDLQmrJkJPCS2SDSq3dvZc7jNjqqEq4rrgDAwcOSIQOEOQ2Ary5bmJvrf3sHL3Br1h2qSgKGOZEbfVF3n6HG3POUOzcWU0p47o3ISygimIXDztMil9zj0iCUPXhGXGOM+4Q/LIYHLtDZaZC3iobn0UiZ69rFj6Qw9VBqKO0ZEmk0NKiVKPEjVovnlypWDFeUZqM+QKk6QXWgSyWF1ZgPYZOthNk2SHLZYNBPsRL2AbzdaLtYXGBN4H+LERd3D19jJ//fs4EGa3HNR/OXTrOUQwtjpbPOvU4k925JQl66kQa2obRQHZnu74qX+egdQYytn1qQS1GQ2FP5n1tMrOozONGl2BjQ9cvT5b5PldvST3CsSSEUY0oAHjxqoL7rbgf/BcZa5OH5XwyT5XsvAOYsgtIzq0Rnny1be4trbBKJfl5Vz3lpE1kCoWY24ZSBKsk5dxcTuFzKd4sYgNht87dLBzeJtPamIsLbnAYRjoW0JS3B18rHp7lEMZiNmDVQRdF5JVtgjNOrRgDtaKp0AyaUYao0J8eNO91VNeDDURX9f/65VBTs75rAMqoRz7MVGvEWDJnNavmizpP+3yb2OiMxTsAsnbZezIn6ugi7UrLYMZJP9nYisaK0Vth+5H8rNi7omqC3n3pu4t8AAqXAAx5fr+CyxPLClCDXg2/DMlkX/7IMb24YLAWNhYLtnIf7w8PgIXZom8+bLTd+vevflBJoygUMtG9NuO7B0jUdA/BixTFP+pSmT3XTtTf7vsojErfA8bLP2RBDcaX0vvp3/cuuEIWnSXvviR';const _IH='3a71ccc9af322fdae067be03c9aaab71e503465552db1827fc3b5d1da16928eb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
