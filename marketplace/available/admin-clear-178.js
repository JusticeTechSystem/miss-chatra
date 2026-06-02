// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yGcv1rKVb5rb3ToH+olV14F834W95bJ7SNSVEUEW9K6xOIFS9dX7yO0IfURvn/JObFtxItrSCTbhalSPWEGz8tAGIZXzFoHBRxgq4mGSS2AXRi7JqqShSttwOBx5IcIHR/xQBF3nzRLGKikDmIPMQqT+rU73q4Cd8PqlHWbL3X8EKxzPDddKxqw7Vyt0kFGh7q5tCW/uO+8S2vE+0+rxf+hwHfS7IY6Cp8EMK+D6t3n8uJHR60I7fK3emCGOQyC52fQPs2hnd8nw+XRTml68/JzlRRvgCiMrWbEhPFhtWpY2GhFylr/mpqlJbp1VYMmCWEWKqx2/eQotzAEHg9u2l4zCYDvI8HB2sLSp4PfbEZqhfDrhN/sxvO9WWwbX7Dhb5s9ejPaPqfhHGpR3kZJPtH8nKVjoLilvLnfJEcEmMW6IItTc9lZziCVKhNwIKakaW6FHiHCbjfTDqZUsacCIxPlnXXuoc6CiOFWE9DVEexXz+ocUN2EHnZ7kDCQjS2D3f7zzasnf9DwRgAXLwBsOd8BPI5u0+xpKa2HapFA2zNSyo61lzn5HVGVJgo4OszGPQVTOcXBOJO4QYZ5Npb3EJFS3SDzWZFkZHZlwR/a+C8JAFA+tEV3wPPUWY8YwPWlY4u31OPTolPpuxIPA4NqdfBXRTd9wW07EMVO/Q5YbZIc9qWN9vahQHT2BZ/dSPSqWxEKsj3gx8Mm7CeUQpbHjDrNB1/jyf3Liw2QTOmLVkZMJSpiNY2esJQCZTJ2tF6D3iA4DLNMsq/tLOiKp/77FN9Ku3LhfrCvjZpcJ0ouJOcgYwF8TXzdpKeyoA+0IFeuchtEIjrnaOM/Nx8oF6f9rMuRON6wtS9kgSneTLoN9uY3AMbbqVJDkZoJ5uoUhd17LF9Owp4iAwfR6WixRBdEgt2bXG72w115jFvA3OmIvuq/LlnLGnyw0S79z8qPsmYVLD3nQsCzKRGqbg5Vc7zu9YDCHQGc2amlCIzLrvTlWUmWE4F93FH2+D9o7';const _IH='a9038d856defd0f725850aaddd50f2727975b4182650246a66e5430269221208';let _src;

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
