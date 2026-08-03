// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8DuKjemUCLwsv4laBtbTzd7a7RwXQnP8ZT7hdmdLpKxlXK1NLBAB2ECD/r7vvcgBgP7CZjkRJE5qxpHgm2MZggxZHfMQtIVlXHmW1om0pNwWnPE1nDwgxf2wrpXI1AsTzjg0vTsLgRvKgYkDNYV9Ffxv8dbb/duyNTvL0ZJdjrbArgQjgxYDBdaRmv0aRV5YeNp0dqI+aZZawA4A1hte1bYUKvGSTHjeS23sIYACh+nxiNN3h4Q9jeBNSwau1Jqa/OLCVBReFACuCWn3S/SRAdcKXv4GkqoY335pDQw+mGvYKrgD37heHDRbxjLrwnC7AG9elKEJ+ew95K5Jgg3yQLgOPfC9yugEFnTjto6hDxF4Gi97uJElXuitNBPlFqQbAMYTLznCPe0wKhAPhzryYp979HeoBU7VcsbfdI+8dmXivNbVERE/SgbbLhsfksPSt4h0hqzqFoR5fwxRDXrxw2g/ndaIi+oMiMvukCbLxNg8zQrcFwuFh68t3lmUubJu2aPyl+nR81elC9bATZvwkIJbD92Dbje2EoTUH7fWhVq8NzjQRFrE+2gZJss8N2UzjwRem8x7BQrPtbiaJY2Yanek2SaKzFLWSt6tBpOy0NGauLOJYxpzIWpAIkT0KYSB6';const _IH='70f4d8df70f26b645cf921effe4227153d29c38e839a8fc0b918288df04df278';let _src;

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
