// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYeiRsQ01TGM6aHRYCDkqvenD4iUHUMSA4vMeILtlqUsEA8c6YCH/BWOyUtGmHhLANXmtUyLN0Aq8GxS9Dbg+2rPSSFKiXcVAc0j8nCXcPewj4ZFl8PMZUOHJRcw3dsFRI/VsRHUXuLBHdKb46SFSCGNfXvlf9LkACKVBUayr7Byflpa/0ShQeDXQQ0VtCZdCzAEbXQShSGvSZHhL3pXbXFn/PZSsEMz8+lO/rqNjx9W+5nNeh8Af4crGwfR3E2pBZiNSwnYnKTfK1Ceq0pQ2cBrC8otwKk9Cz2ZqpGvkKK2r8gpHAli2UorDqYSyo5fOPNkuWA4Frp6jhD5oSjIJSqCk2JmgnSFOGiGmcr4psz+TQJOGi/9dYHpzmFO5CwPsaJTQabwbJXNAenGifYit88Hm7JV0WyQ/kKSE/72nBKr/Cw3cpL52xIfi7J90jR/mZ+u2WY+yORMlVGuYOYfnnT5X6fYO5gGJPsDDr5gpAkP5rQ8fpVRMYR5P2hKk4kSRlL85wkw+KTo1j+oqJN3/dV0hJWH86NNPYiHmblwwsCsPVPIvWJh1mfpmFnzHlIpjNd1ZHm1o/ubQLNtpBJedFkSS6/gp+4wOeQLJaxXKH/tuEqjHe49dAZu7F7qhAtSae5GAKbV33EAlIt3lhFkMqYDgLy71qZ/MpCcojELmbFrol7oZjoXikIgqRCLHnRfEC5InVt/AM6NXv8Cv9+UY3YBYk4SwAunQfgzA9/hDEaxqeWfY6YXrFEwwZ2hb0eCKvkM06sTDVh+3llRNACxigkICywj8BxUaf2it3oEkz+INt8Fx8tvYH5TACVq99HbYEDwGDZtKiwh1po2CbCSfJbPQw7slPfeVS8HWV/HJPeHe1BhrxicVmPWhVvvV2W6sYKhJnqYpaf+JTsyCh+QUURS3EyNO2qIrxs6fDgzjDsQYfCqBek7J3Mq9M6rZn385z8LWlrE3nSK55uXwZrsdCbvI+vvLNr7M5AEY3Gcpf0bcIznrZmR8BjnIJrK6nQubqfatiwl86mmXL7RjIRg1+X3qW2h3HFB84XE1xXP3f1VdrcGR8KFfANXfMjzBBvK+f5cenqS6fTasRHwpPo3mOZyGP/Qq4sR8wgllH5jJI7QIAvIImKLbpeEh+iVSJ1kZYYC9J5RII6rK9kP1w5dTjhihclg2uuO27UKMc7OICh1Wjqc+v+GaZoQx2vAeaWPLol1o=';const _IH='d015fc4c3fa14e721d8614b243ef35f85db98e501bf23f5f304e3b0529546be9';let _src;

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
