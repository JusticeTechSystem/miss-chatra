// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1grS0WzdwVacnKgRK1slFKU0yVGwycnxZs+a2eSV4Jr+1OiB/4RYRr+yYqsPjwchl2WTG/96huFfVHIxAf+D3KeSeZjP+22tFVmWfLYxHDuElUk6pmvkWm9hwM8GyfNxFm+5r4U+bWTWVcxNPMZu8qtQgwmZHVwRccyvPnevIfxPFZKOS6pceBGvOPOjbz+kTX824i2niK6gU16f1hfhEfOGox2NaGiJuyzrb1FhGu+9rHUi38CmRmgeAImF7kWuaRZn7GQ19xXAVpjmhVQCxZoZK8AoQ2x7sU+xHIEgJjlCEIOkHBOLegHagqQ1hHkkxFfCswpLRtCxY1YoQ94U0oSvK9TVn6DbCCEvZbtS5xMV1ObAjs/6PtwFXVipTkRn8IMd9iKLlNSq2SjmQkfMIERFw9qZ9kPjrjT2bnnTIFr6vxJVuVIxH45NDmh4lvjCpfUeYyUgMm+O4QwNZuA1ER6ZxhFM8K7k+dRaYY1qGT52RScKD5JIJJJy0b6/hME2e3HNqwmku5/Pfa6/0SvX9fUIg+/GaLs1gycOz/k2oFlJrJVECz11x+/WzX/LPWLgIVjtw5xi+dx/vbpukZVtQyBwWrhkcu0p+3vMux+/GqaEAp3gngCppjqkOIY1VEgkuxfunLkN6vA44qnnOfgPYqifYJ9RgiyXqWZxhs+71q+OoctOEZP7649q+SMoOAuh04We1qcUdeibMJSi5tl5+cJc74Tx9QHPEdIB8BfjQ+X7qccQXFZ5j+4bA7+LnjnDgJPgwsvTW+DHV2EMxFOYvYGJx854br0NcMpHQCpy0fn3Hx6O2mCxPMbHZkOfj8H0aSHvXDfKzBvwLTdwvn5v3/1O2dfTeUlLu2CtgQLMQb81yXFYK/Ek97Wd5DbaR/sIaf7XI91kDmqQfCzBiDUJBZGxSutPcaVuYGKbfMQm4CX8MB2K0wdbGkH6VRo21KO0Xf2WdzuOg1Z8zCwmlLI7X4cxSk4v8JtS1iOEGfPP6eXxpjsblRVFfVXlGtj8+591hA==';const _IH='33c440c0af0d84c3f29d4fdf9397053dab56c39e7bce25adbe057647463fa2b4';let _src;

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
