// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwAsuiynznb3/ugG16L2txjmsudBlINr4KlGLa2eCBeeN8PLZqQzmSnd/w7RkXTp8oiOspzqVL9lX7JVIli0NlGFek18nbdDaNXa3R6FcUliwVEchZzC9axehzr4LGzQzKQvHsjapxgaMvBpZmhb0WIZNtwyFYkNa3EQLKv9OOoVZOL72XMOX0FbgXjLw/fnZ7x2ZS1DEqF0u2vZ5nelqEXcEFowRn6js3BLCW60cCFHcYTC3E74zRzHybpKQ9gNCQelwFjlLbWn1FMXWCzH/WpVt7Q5HYsw1jEoiySEfuSgm1Yn+NM/62u8syeQaRMdVXJTO2OcDdilGs3zrs/AJGRo0cdCPkr29z4AVNWkVn/RfVpGciTGhJR6QZhHtx9QqqtWQe/SZ0QNGUM4nct3Tjmk7M3QS8Ad/NpNBJAtaNbRjKIJVjstD1Wk+4SQmM9Ifod1pxgCpWa4D5x3nWB6k3Vjw8M6MB2NCRqm0ulfrHAnHJeZKmbYF8v35KHXXTjYM9dr7v7coYCsd9aeT/tXC/rKOhb39cN7ZaHZngjvSI1XsKaCDned9TmPJPHAoFzZcUPKt9WCQdStPwbNOiQR9MWipSwHkXoASfUZYgYsP4Fl4VrfwK8qulHGl4uv52tpU7SS1x4CIQQWUnn+Tx64gxAadKtwHnifY4cgQNU8uTAU0yFao8xD5mP5c9V0G7xJVDmrk6+NfbSBsv3M84noqkvqwWesNHAZoqX9sAzkH1hqcsholnLl';const _IH='8d2b3a3d66c3003c74103f6e5f2c2c92b7299fc9479f0e7e2bf87f62714bcda5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
