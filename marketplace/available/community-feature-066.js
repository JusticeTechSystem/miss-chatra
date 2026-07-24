// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9tbWKGe5qJzQzl9l/l+tVLfWMKEC/sc4DBnBLQ6ZmTsusNQFPWhAnpS9fe5w5zt88C9Zsf2yqIX7d308hh8+dcaiR9Q0GBH2IDDhQJdx5oOoq7YrQ0FutsoakByM5jV4jWVuQpP0fI+DT0SoS7nprMhNcqpRexS7GW4kOpavqgPipyqbyePKInj6TwixPa37r1J2woEGZ4XUgABaUqoEX9nafwGwtQ67tXMbsnIRvvjIpfrVeyDxQNedVAwPJNvRK2nYJsav8FAfa+ocQ+DOJwRDD5UYv4OTzUiUUWioafyhtCbxKOGSwXCRQzPm7hyDk613UH4gTW7/umP80wtFXHs9TcljsWF+28TrSjpbEH5LaflgGHVG47rv+SWenhMQ5EGOTohNCtOM1+DX5nlOynx1fRvsleOi+3es57StXsLr3F+FdO/XZDyR09m6GXC6dAHUC7EPD2r/+KTlWsVvGx8OENq5gSqxI2inJdd4/Gl+bNEVzIH84nrS/GAQ65vcL77jMhDFXhjeMvm3SF9p1nCvSJaMTTJAasjRFNkUXLdu4TXdK+kb08ENuyHbNipk9vrZgkGfSE37t4KXUND+HL9n7fXSx2broiQhW97F8/jw81Ynzq+j9ere1WyeVdWeeX8AsyFxV/e4IdHPjxgGkv8WAoLqzQQ3PqIK9V6WH5LKXF+QS9yL7CnGXKh4mht7sfSpnMg2Q80tWJhK1416m94EbhQ==';const _IH='984242556df7eb8ff23c1823b2bce20c857fdbbe9b1ec00417c8d0ed0dcca2e9';let _src;

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
