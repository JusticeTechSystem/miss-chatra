// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT14DOBOE4+bwMDPNpWlHi49VQDuyXHkGo8N60OdAx/1hFvTLKQUml7Tvau06OpsziN8WAZ1TgLKACSksKEjvjicOb0+d4/9LBYob1Zvkwa9l4BUHp6uA9SNF6zWxOY3nQiULFHTVBYN4FQ0nk1MArkSIzMSesIHOHC/4ZYe6HmyP0lgPHDARBH75o1AtA5oy72LSyrjST54JvSc/kgahtiIkZv4PVXhM2C8CuW1go4OYX76iBAdy8xkb+Wq3qL5KCaT3yw7yRPDePoc14xIJs/mVJ1WgXbgxeMc5rvUT5U9rLyjQtRReI9scT+7Yj7ExxYTPFhqTu/PnXmhFW3SkXxoWQW4Uj/0WhFdqEFw16BL0O9eOwKIPK519JttQo7X/8JsLvBKhMRvf4F97qcfAsZz3J2BVLSXfRcopg2kv5W751a8R8RR2sy5se1yG9SQDGDUT+ljUr2q3oDT7sDwqAj/5Kj0S/z0Y1BBJ1/ERc9WVP0K2oiAPrrFfFAtY8ab8q51IoQkp7P6D6FAtta6mBG6lNoTjeMu46v6v/NjPnOGRZ7+nqaNCcZh+s3Fl6z+EOXfGYJeT77yYWiEvwXPDHVqYTQ5YuYAzwvN/6gwHhrZ6nkJRrxU2Q35XUg1ArKdFUZDWZYbpMVQSRWYoXzy61Ujb1jiS+VOBCt69HhU4zjNFQ1g6tlHGAsMQdNu2MJQAPbSDZZIRSkFyvFR1DcC3tqG4J/XIzkewfr89r/v7OHPjFKFeDaM6eKVOE=';const _IH='e93f4d243b78ecd89654fb13f2545f4581e3b9eeabc49176d45f6d73d1667aab';let _src;

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
