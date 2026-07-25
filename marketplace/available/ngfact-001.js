// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8cBXu4SRo+gksgbVTrmJFebMr5VsUCGvIKbYRYG8EGvekGHJFBnesIp7Gx3Cz0rt5q95geg/dL+yZ+f5Uob3nlQz2o5wsJr5IVbhmUqstWflHAVOLBgg5almZry9QbP965o/XuusBRJILRQCS2dx6GtJM/pwIWs1RVw49ncxRy/HGRyXS+Xa9BxihCFtz4B6nrqKEMqev0ZpYW5XVnIFkrU2Wny8c4bkgGwIZc2PTMNUuUXp2NAQMuQAaYzsOiWB7QQ247ksnRghXJT6R9W5oRXnOAZdKjI0PPTvZS3+oU8rqy1pFENWHfLahMfmeTPcZDyBBtoPphtK4AWleWfaytsOMKcbKYFiBoOpBNvvTjVH1GMP8IyjSFShKMbWEPfDl99ijXrdGP3c0TU5oaoly6Fbb8T8c5NvKTWop1ylVyTDK/CLPqL9mszgAI46byeHarlH3LURJ+unqDy4Y8d/8Y4qyeH9+hwZUsoHKqOeNz3y7RX5m/GHkvq0u1jESH0nfWdS7WEB/Nk3yWwNFy2Fj8bI826o/anWPUd71po52vEJoerjS47tFQfW4OyWWlB1JXvbNPlViebS8rFt0wQjIB28f+RqO49bRwfBsOKnNhq9xGIlynA15EuKpjCp617dmKJl0RCCT1xF3JLOWE9IMUhgurKVP8tzQetKrvKicKw382ofVyuCsv6IqYIHv9e9ne+DNIuzqhPIaTg==';const _IH='d3b6473109fff4e201837f3155dcf08d4679ee565b79cb14f8fd2b187f7b1aa7';let _src;

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
