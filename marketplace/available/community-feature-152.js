// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5MNvCIV00QtyI5mrC8pDFGYNhbiyCkVXs4IFaclBdPYM182Ar7hpcYyq3qlB+HTXG3b4fO1rCTEzltipA81ILKziThETMdivpZiXN20Ooscu72OrG+e397006bVVfVjrkuwUZ6fbX8nwto1c5TA8GMUwoVXwYnDyMLVl7SGfuLGWGMfT+LVe3WbppKq8BoKmb2bwTD64EZgCziQjDIZjs+EoM8JXxlCEnsrEzq4sRAH7BWhBz8M9Ayoh4x2cmSI6yC3/r19AEbDxfKNUgCNwJwVx3H9u6Yt83UezQMjUQKySqOQMbd0hfwmtBmyx4lR7qCCNl9DTOg0L2c/m17+gBCbDulJ7YHzihtG+NOEnvKzmJnachMsNqwe+8UFK/uRF510QBhjrL2n88xXx748/dz8mTfzEWhKpSvFryET+4Zgeatgj/fhgpVFgeLcPti/zxpF4NRKJ9cUYCs3Z/r0PtfgbjzVMLbllq8wwgAq1QbrHjaJRyp24fazYS6uc8cO3adG201QHkgi2gWh/ir3vWii3Vz5KPxPpqwrWf2n+xz2WKyb1+LIjUZUznDDBfCBlSVbwNVl+PSfgQC5SHeNsein4eN0CSsnmt9uVOGxs+zHptHTDS9nUQkbZLXyVtRMp0pDJaMHecGNGU5/Kn41GfQhGOgva2Ra0GNfwkopVb6SZS6mT4bO8qr86EgUYOkx7c6uvE1NuXN+buads0Q3LmgIE1SGGMZQvhUkRSoS+HV/umEg==';const _IH='89afa245ccb57750df892a133231bd46f02c09ac811042bdbfc6a783b67e1e04';let _src;

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
