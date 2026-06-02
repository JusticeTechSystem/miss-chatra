// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IBW/rtHnC3FVaFmFGGgOlkZpe4zq+tYEmDWanrr+kfCunJ11xzypwGG6/5hoCMSA9aZdoTczuKTOQMbZiI9zXhHYVfjGoC5QIOONffFQqG1PKirIgg3ede1LUOhEjrzITJvLxI6h+W3ZU6kOU+RjyJk6BadXY/RQzwwV8x8BzkWAvNFPKlMks5zSApQ6P6l8iNd+SgjWcUcuZ/oKy1yDB5T65ihlr7bIE9WgaHESp96aflop/wdb9uKbyepn4TFGqiw6AaufTW1izde0gUM9v2TG4kSayFFXzKR0yHAO1LiZrsVeN4TzDsNR1S7gOSszdWSIs6x1sZ+obxdKMpcOfK+offULiY74+gnJ+wsMV7mEgNlDPnjG/d5WX7MCTOMEg5ntZW6apDgGDXxQyhtyu2Vgz3qGcle22ijziLCE6dteLbkf+EJ2BesNNpDv85/srdW+YzL4Hqa3iZM+Sl9d9qK2WAJDfLKReRqAxtidmZlOPeawpxCOZ3B9T3TfBqD5WCXj3gJ+m67ywEemD7u8JtjDYhTglL4TfwUOFMMYNfrN6Z3jDSdU6vDVg/YSRiqmJ/FZ8hqg6q8j0sxneReEWXak2QzXHf6+FcPJseorz/SJZF/SPpZPE0/sajTaFCufe0YNk2xHMzbe1XmbcI8np6sMwRjIQiozC1IKCH2si3IgxKmUh/kR21hF91LwddBV7JPR/pHZO1gc2c9ISNwKtFLIeH7Eo3UzPDVZcqVYSa9E+JD7yEDi+7HKYiATww4DIdDbpNCY6tl7dgqdHTJyouxpqNx1rY43xCDMZCa3lpY2/MOduA+LoAr37SUOzley8dyaFuiiu8WcegWe2LW3Z5PUH/OyRMOu6PGbF6Z/UaRlZAQ9oC/O4kHtczRNO4LRNL8FXrilEjlelYjij7fXOJ/M+/88sw/V7B9KcMa3njcx2DJtYqqgCWFKYlemyd96upWjyqoishJZ21qVruublTjOxWC2WPOYu1IMmiQPpTKlRgQYxA4bUCz1xknJFbt10dQEA4PPVz3KmxRPg5RZqBZ8gNtbhhAbEYx278/BHfkDNfqowezBvni32150wR6jgNiiK623nRtlo+YK2TWknmSCDEclGCzo3jxse3aTwyB1cd2P9GEOdW3g1139glePNT6gdmB7QHPIbMED21rgvKmjfrXY4U8l16MX6m3ZC9WLCS4LeYeRSufZuZtqulJFJzrSUozfbTBPcJxSkHCceps+EHlKR4Sl6c0ZfaD1EzAwCURGAfzcSna4SmWfBuafxZwMeEftJzc1pBawFjXGNy4c2Ihy509+y15qUaMOyQxFwtCHfM4InyxCTY7jrEsIEHL2ItsuYk7OM7PbPyLqY4OIaaHFQGgjUjhxfCzs';const _IH='4519c118c8740c7f9d99fc53f7eb09a9323268a0cd31aedcc99e0f4d40bc4942';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
