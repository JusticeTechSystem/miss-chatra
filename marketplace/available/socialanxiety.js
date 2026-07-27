// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZufxGZiB5ruzzqqpThgPmKxVLn9wPx1sJCC3lCePsZFAK9bPASoPZmYugfIk39xcLzgbq2W/SpZyUKuNl1tGrpBorhwSCXCq7ESDHACReTh5fz3A6H9rDgURiFt8UoWbnq3J9HoFYwcaSLhyLDoZIXn22k6IK+14xgIgL/KgaHxWhBS9kpl7N3fh3h8luJOX8/QSxWJ2tfh3ih1IfZXk45VLQIxTASmkO9WynNi1f0h2CK6RD57rJsjejF9n9s7o4vKvF8PmzEt0hcXOxR0/HmPwMaleosGckw+t3Jup3spDHKg6uxJEYtnbzpl7rEMR3cVLFhvD8wlLCk0aJW05WXHe0hkMDxKNY0SVh/uJBQYMZT7B6DnApPxxg4fR1mBziwBLZ6mb4b70mg/gVX5wDIb3y/cXmy0LPtTTIBcYOqe5zIwhAEpca8u0Z7e97GTLGbgHYpQBqlZ/VbJtfZOboDFYhzjM+h4GiYRl8xuU5wmwu3Xq+H0pyvIEcC8XntrTc550X9eFhz7M2a0tRGcYFtrHUco4EmCbMEaFx86YV8fHHVuLP/89FKaxydjJppVHionymszJp15asuDYBj51F3slaPR4h4Qa7imHqggpYf6heQnSRo/xhRGkHabWaSB3jaJ/yD7Kw/5LzOKMIRRIXtiAh+0NS44pra8nnieLQNxwLRm6fH4lYkZk96oVKBp3g4HMbOx/PxncGJvDHddu3Zvfzw2xeqRboh35KE1X7gHxhV/2DtKmhv0zhJTr9+g3X5G6hglLBbaWtTEabq6osMrjwKTJRCyLC4tOHHHMFkOlfwVt/uW6mFM4bbmWhfYh5gHL2Zu4uvrWvfwh9DSDE388eqpz5n/KYuOKj+wvUhSAmPrZZ73w2YLtb7NNV8JQZtI7RHDPoLrG54WQQ/x/WKcOqi4kN7emHDjfzO4clFwMTF9Jy6nllTp+UejhmqC2QaSyAnguNEqX6ZqojK4ZPOCJ3HiumWw49og2SdJbKgC2F3S/veJRk9KIZmZG3zQrIRc4IxXpCu0BARXrMVEWeE9uQYYtmouDFcD545CzoOIg8EOIlcGi45ckdbXVrVXB2MenjQix4IEaU3Pu3UXp/4XoA82jKT6bUKeKRfLAj/iPXSuPZ3Yufw4QUbQu13X1PrnFixAqy9YrZup58YM5usowimb4Z3MVrWirueR6yEigzIyp2O4mKdsThof9xsb+mdCPZt+D4';const _IH='14e8d8551eb82b252ae2d28b3f3c44f00b2e2b617196c32429fea2baf6369cb1';let _src;

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
