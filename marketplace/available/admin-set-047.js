// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+VrE8gFt6zf9twh0QtpC3f37Vd3/nMC9ziu0d5UJwxZxhYhUcKv0u4UVhzF0mCmXypv9Sk4rM3P10Q5jZxbn+F7k/vusqEo5IS4JF/cVs1Rj93U8Z6vsEtXDNbf2n79F995hMsUDRTk4v9PP7gvEuEA/3f9ZWosEuOnJEtMfUhl1yA554NZb6AD4hxrJWEGzPwZ6GFXfbfumer7fuMmfxQSZExKY3ZTOcmEsQkf4HMeTLT/rE3B/omLvK9GLdb7Gq5GvChnh/tLc8U98eUkJ5X2qVGPhnIexiqhuHVPmNSna+XaTnRRwZaDkwIyKASTxiSA8z7UPXedaRZYU0sy26yFXcSfGeDi2VLA0XY/YUmlqI8ktGxBFcIgkoaNBbgHG0TQ54ZAvGkd0nJ6d6xv895ZyT6tbrM5+V1X6OadlrEOf8qZ9/B4igTaBO1PlM2PFavr9LLvDmMd8zVMQl0t1WJWsQk85FarlgboQlDH4zzDlyOcRicG5Y3vlsJJxXscaUlLgcAO5DDYIgK0v53UbtljzK2LI6DJZaeZf0EsYzvVv6BxVPynYRAwSIsifM0V6ceq1kEtMO2M8HvBVy2PSYKzPvQvUDBA/k2ykuCPryXwB0rRXJP0H9B5jg7JTIPe+8a8rki2Opl23K7oaE+Lw4L5CwgOH3s2IFmO/7AibXiHAlUzmGYphpGGH7xMaHfRY+ifUSvRnR0ICiIv3HS8aWuC2ne/x81KmgJyAVFPOEKCUBP+pQ5WjkxSWbaS67VuImvs7kyaBOaw91xDo5xcAXPpqmelFw1GQh0D4846Bp/viAP5JJVpUSdTzgyBRcRIRmx2XYKBLWS5zoN16rBNC4GwDw8lXeOXfLNcJ1B6tHTuhZFrG0nkLR6zh3rThHn6uJ29gmA2rAJzuAtjpC/EaV8d0fVj4lo1WpmhywgLrKR7r9lVu2dUP6dkDpermArml2H84JHw0Tkzae7Pj2ST1sANNh7BVZpx7';const _IH='da514db15daf7de7ce07cc98782080ab78ea09c22f64dc8e79fd741f30738f6f';let _src;

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
