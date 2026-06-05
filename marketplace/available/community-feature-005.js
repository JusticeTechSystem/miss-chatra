// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LUzA/peVIX8OzIuwIQ4sLMyMzeGhvdvirQoa4jmoPcqdF+ztUb7tbnSGu+AK2DmCEnlKXPF8XYeH25sflV0PJGqx/z20N8j08R0UmHO3YtgOw/QWzfgCeSj5BvAnP9mpqdeEPONr0xGVVrPoYZfqh52rESbHJmApa5cqC379xIQHWk55/vEe0L5pl/LPErIYeVKd5prOOPDQICqvycfcMQSzo+8vsRnxulYagcefsQSTFgptb+VdRIU9GsNLe0JNTF0tPmNuEqCo8xOavSyPty7DebvmVQjbAzU1nO4jMXqGOli4mklcVwEfNyxebkFhCpWi43C4MAC3ov2BjDzR3FBREZFva+PaSRoxH4yw9RX0hoQfLzLfFMN9RztqrXcQqxCdjyUGilY/i1nCgjmG/n/3xavnZ4sTEFQWr6vkFnCUiYbLYkL8888dB4C7xhsa1GiKX14B0cQLLWBX9Ki7uIfGWIWBLVSxNOIKmEli8xnpJH0l/GGim5MDuyzcrFoghiFGoCmYIE6rxs5Qp0NvEDNrCzolRromZG9GgukYuJeMn+Bzj8RV6LXyFPEFuQ0cnhSN8U0bBvx4o6vU9W/0gdgmiIRUJzZ0DmaeGGvKDtkThZUzLBikgQDcBBUm59PF9eR1yAhexJYYoEsDkX04owizeqrtle8fI2LBaBBhF7bBvbPunj1PD89roN3tK5e2ARRYHtpPVgjaP7dO3HKAVwX0j75sYPW5gYxrwALdNV3orA==';const _IH='b6ea1e70ab244a47607dc4ef1e770482373eca48523c2eabbdffb9aa9376d336';let _src;

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
