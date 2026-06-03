// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HC2Vbi53+WwUlPlWu2u/lYLb7Gs12FAOmvPjqa9aV5sQxWtZzb0cEFqi2swSJz1KJSpHN82V6RZjFI9XOaxkoBoeCpbJ3JtmqSLBEfMCIQo9QCtzDYs0NEVMFH8E2619OJA+dCSqeRaaqDNNGDjW2vl9ClJEOMobjZJvHCU8BDO056ClKSYxf1EwAjm60JBEy3b30Y9rj1Iro+HIfa3X9rBVPJPMrUESiD8SdN4hDLMItdTw0UhUoIrXIygaMDp8PlLcDLhNjoM1Nqa7hv3ZA7uehAprJWGdAQFNxmZkmBBcuPCB7z7oSg/I5Pg9J6UlwRVPgD7vGHOsXx84LOcQS2TGP3TId+cK3Qx9WiibTkF5y9nv5I3cIvJs/CUsucLxQgO/dp3BUAoAi347Foze5mhXKWQqlnAvWbYCHiXGbVdSl/Yi6XDQ6pnbDqKei9TXG3+dP6lJTsqYRBxKWMjK+up18HWYNP9hqA0tmroNKdP+qc24R6pOEhE0O4cjNpWSvkI0jcdfVlHRbR7K5AzUdakG/QgfVMV9ntExhCH2ZWDMeXIImLy3z/NPhFtpFcBRNjr59QTQ6B9PlmO2f1Wv19D+N2S3VlYhNGZ9jREt87SEOLwB3AJ5PzDg/+IJqSvYNWR7rOStn/y7GieL9yS2NK6nhhVVmlfDYyBHqka8485Rx+WbXVn+E1SMdZLeGBihe4h5BGSQI23XqVYkHIZhSThUjdlTUvw0TrkomTutUjo=';const _IH='3099b7914a51c2c11ffd7c26dee2b998a3b8e1a8568444215f5ed4c967e94c99';let _src;

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
