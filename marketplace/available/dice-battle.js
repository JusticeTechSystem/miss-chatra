// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vaTIH2coLiRaVyt7mey0GtnMCGIjIvjOYfFsk5oz2RAvy6kGCdyMLwcjioZjeYhS6B9R3qPr33pPbZtYIW+uacdbC20I69u+ilJ67rVyySo3fZhIMad8Gxdj8FVixxJKXX5RBdvQdnudnoje8Spa9GJv/Z5eZaqhEP65xAn+Y3uorALOIHOTjKLO63LuveHGYZb0iwGB3f6BqQSOpVMYnbVP7AXUogjGXD183XHhVP275x4B3E5B6QDNhL7HdsFPPFQLbMH9kTTn/nv/72m3HgCQnDB3t9lpt5EKdGSdC0ziKCPYtGy85UtIECngsy0INN5bf4/1GCvgOP3bkS0wDJrqhXhGYNSVgcRb4yqRlWhQWG72HQy7jauOBx0S+Ks1TiHEgUSHyT/Jw62SjSGJTFmku0PQVATG1mC2hKDNYZTJq9h7Fvhv9xcEL0FwLwWIN7NFZNJFJsz4nn2VGNgackM6WHhDbdtPCdjT/Ky0cQWXlM2brYp+wofnff316KZGbZvJqttosWY4DBLrcMAm0vz3Yvu4/qiPThC4IqU2ZW9XR3fCbWUXF8SkKT4/NHUq1eyIuW7q7bzks8B8wMlthrYugz3z8bi/Vg++l04E6PqHwB8I8nPbww7c9ajmS1BZdKf3pS8PvL3szB8BzEg7JoVYW0w5IuoI1l6QI2Ev/O91ukiEGgfBnpnz51bax4m7vFiIOvJOXT0ci9JvFVfOQDJG4P+9brOWjBD+eqdGMDytJFl8+tr/Hlimbf/lLgkLYlH7hxwEzG08opr9+XIMM+P8Z/HlTFYOhZcwZvD2+Lx7PM4IwvoN5ER0EVIMoVw2G1cGLBUygltVphJlh/Wb23UaarugW/Q2lGWID/5Ugbc9IewRKmhpKdiykKTBeisgg3wsoAc/KCbn6MOgyeEW4ONaJyLhcwl1q18wwY8+kxnoxYwCHjsIatiTySBzym4ZSPNKxtZhTnbHEo1gGnZ8Lvt++IcRhuuRtEbWZYUEY0yY24GHMBVzTgF6bTwrb0lykSTicS5IMagH7D7qDhstJCb+W8MsRl2BwG345T+Efsw/Ewcbs2KVvQHGJtwMXAkMD/EJXPF4QmmNyvlNYPs=';const _IH='670481d4d6fc92694c2ebe2d9bbb059450a8515245978afa56b3573c5861be3a';let _src;

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
