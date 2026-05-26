// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6DYBapb3ooURLMQppftUGd4i5MeV9W7fS3VWJsPhMq8yXaqdIxhn2+MoHhOl7ZdIJgTUcEGUGcwv4akxihHIgMvFUXSWt7QQl+Sw2xzt74zNPsP+e2VgattRiYNRriFgx05K+w3emheH2c0cvlsPqM5/HNU1RXWtv8NclibJf4aZ22a2XATjPUkRfDUyi+pzrJOQ6sckcf9r8JENg6szRTVrkLp2qhLoly+mNGlZ/7Vj4vL9t97NVCA+hQqd7bkZokOcNkkGd6L+xKsMsd285jMD+CVWUoLL/TDgOiyzH8WDPBl8WGPYss5I0dEUPwOE5zxcWT+n9eaX8dRVSeo+0a8fsKQymRGHP9WVnUyU2tRLf0AWp6v1wKbHphL0w9xCqmpE98lFPdy1hWLYnnwnK91jR1Dc0pZi5tmdIgQq5KM7BBFShGXa0/AfzLZdQYLIo5AIfaXhhjm1pNBmZIlDIPynlKFCXjNvUls15ev5KbeImmDr1iIJnuYFlNGwovUQoZ738SCDbfginPd7SMAxrEmTfB6CS0qihgQ0FVqrinbuB1FoqbioSb19Ctbyp6UJRq/fC98hRLUc2xIwLTy5nDrnKK0yDHEBPjqCnhB78y45SgFGSZS2KbX43Mm0gk49IX8izoDTGtG5tHjDzPfp1bdRJzpc5hIsNa5kJyB4t1//PHJ3hUBizVRxb0XMaeTsEovcqgR7WTyFYWi3gRZqVQ0jGV+wNns=';const _IH='37434782750ff8d96ed4d26a483cf1505030902dca291f36d6dd140759dd4bf1';let _src;

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
