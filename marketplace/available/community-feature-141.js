// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7Kxe5vzvDOxKvuRIFq7SyMzyB+dhxPMevUYVSIJ6XtK+dunK9ASJKVaY6jZg1k/sgK4X8Qqgy4jAW/QC14hAJBtmQlHjzg8amCvrwc1M7Y6Nv/tZDDQPtiptBoJ3IAxwWjhbWNIeDA7N1B2orZ7ncA+K5khF69AMHskz2XGlVfF8kJIO1Veq6JIy374YNarOjj45L/O0Ad4bRgszG+xwZtgvdAuhDOWDu3PmmkogB5aoi4voITxqfHmIRKXfpeFv6mPClppMGrVue0nyf9moqg4SbWkgbZVOY8oxF3C+JRUGaGLnXVoOI9fKfYjvAbasEW/BKOGUNT7EhQIPoXTJNtC7EyZAlHx3mraxPJfz/+3hDQ8Q3Ysubxx6n7XLxrVLWS0QpkdhOd0KH/OrmJj+5VgpGzK1PDsDBW/EsdNYJ4/avYOqP7Sr4vjE7X1ATUDEc3krDwEHX5Dv1nXLaKJCg9A7BDvrQKykbR98wBYj0gn4GeCQxJbWKLv71p2ci5F/Yw96WoAQDUxX5dmzSglVcFAnnP52GYlCWf7EedYlIuHyke09WgTp9dm5OyGfqxO9OKc2bu0E3Z0yxOC9g5/TC2tHPU4nQ5Sj7+TiLitUrJuXQrRhfVJeX/RsnfzU0ln9pjsXigANM3vJjq0/7Or7A6/TZu5SRaEyF9LTv56unmWPaD9iKweiw2nStLoJkR6c9jhXORDg1CGgwf09paKm+EaQPkgWNwck=';const _IH='8d8d03f948c7732f4da88e6180ad2dbf61245af85f0301311033442a9db93798';let _src;

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
