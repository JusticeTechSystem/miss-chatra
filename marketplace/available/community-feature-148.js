// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J939z68ruy5vDKGBmx9l2aZ1DdabASnJcEb3DXXGpvoI3dQXF7fn29JuxfV/PXui9AeOdD5K47sgWhOeknT3BLCKxihtLr9sfAXdB/Rnd11p8W57YiC2iRMsUT5+W2IUODQ6+6Y7njeOSI1PpC9TGvoMpMmZ3uRVQp7nwqzFxVl/6Xlif9+5Dkrl9UawUMFwxPwKKRqDSipibH3yeqz25cOaFwl0/VY+TzbfIPN7Pxd74U0CCgnnbc72BTiv/BMyKoVLOeGaxWM+GGfYunfo1KxAyW/exWBDCmLmi3CSGwxzsS25lpjDMwKO71R3pe62S+q7HhyiZxh3vPfla7+75RgjtWCcaCGA5O47XKCqM8p+GJIO5gASrvZmGJ5WvdKJQ0W36gxzjaK/DjFn9JONd07KvuvnqezhVLtpuxQWDHpH/+oNbZWi/13SYeiMDnMc4S0hhR+4BB/3t4XbZk/lSBKbl7rg00NDrOkGlxjVe9xGkiwxo5Oy9iw8eu5WDt03XfxxhgjsZateRJ3DUvgxYmWutJA6vqITuUolJL2n+OpLTqOSGlP6/Efw6o0rEY3HGbkZg+iLi/CaGKVaUYj6H0//9EJT3LJOt1gihZtEanL7GAL6/ii0c76V6pJKDtixfHT7L/k1VF2+4GHASB4w+mmwd1+NX6f0nC8pOv9P1qOJwD5iX9yk4op8zWm/JBzsDhteeQQVZnNk4atAYJeib6yPwrB7uQUQ8XpzTp0=';const _IH='e768860b6d25484d2acd34b454c7403a0783d36827822ef2f6ccef9f34534b33';let _src;

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
