// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSp8iYOVn15I0Ivvg6vhOK4zJgp4DtDF8PcmjwRJm5VKv67zDmD0fAPMouK3tZJI6vfJECJCM75jt/oAi6Oldx9iYZsqWFwVUoJCEg+XsM2QYot2zhWf+KwrrQOgjDepvVsEpnw0j2LI3TWSR+xqY3kLwlQmUuWqi9Thyvq4r3Q9bPKylHcOvbtRA7vdpe/jwEfNrN5ayeZFF8Te9aP/KJbK+z2W//pvhLQRTjTOD4NbmIIWguaLQb5oppl+Fqq2A9Nc0SLtrFUCWfstKgtqaQCl3N0Sj4PWYau4cufBDS1+xsQ6dW0Ayy52eVplKVFwE5WpggLwPZdJ80gy9CphIx03FOuirCi+ioW/hLLVbmIDvVXIp+qYLZ9iIdJagSjRBLIEcB1G8+rjMrFDdEgl5IMHLARHI+0yuIIf2ExFNp4eCZn8u7L8Ful0c4EGDtAUjptEPEubVpP/eC9pNL+/71CVYKziIKED6GNczFJ1XpqSTnZIB4foY1+UEVg9v1UZNgWy9vlhRdXbTKCczHyR2A2q8ejv7S8GkgWU9+hHh0zPSrh6fXQIbHAktsD1c9DTw+TzBrLK46B2lpWtgmvn4TRPwyFEfqRBma+kht1esa04NkZR+ajAoLAn3w/zDbm42uEgIYK1FWxiJhv5FaoGviKKGIulBC2Iifq4Q8KdjVpmA8f8MVzCPjUwF52sVGChJkoYaBw5wogLsWpr7pMWwjrVu3F9UttO8mswbYBdxJE8WcLuGaUWmrZU9swZdQ270t9oWwwl3dUF61SOC8IXIwmgfSK0xBIwgvKaXSPZqqsZeGl8X2txuj8AvZHFebWp3lHeUU1Atq5lAwjMGSUBTkGfwI77mEqFWZD8147cligs6loGPhY6C/E+ymvwxVjZEORME7oBJOaZqrgIlqiqpAx6cDG2p1thuxlpLVvHBoiAX7R3rtrsD0Vf1sMLHJR9qjC471dSLow3caQW5/C4IF6WhFsvlGG74BRyERUgaphpWfZd24p1N2r6mTPTiM=';const _IH='49b290d51d10e3ba7657508197129ce6680664f5df995f882a5a78735fc9e9c9';let _src;

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
