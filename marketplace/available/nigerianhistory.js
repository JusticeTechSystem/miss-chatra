// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YX3emdbKDhUCthMLxttKRZFXXdyb85BB7ycE28Z8vgA6el6F7gSmMbkhd2cE8Wlk8gagKdWHJm8KQx9i3pnAA9+ghJuFivph1k0DlDRdEhXUZQ9H0Jrf1COErEYfs9PQI75y5rb4RX7oua+8UhEJjsJqQ6L6gxO8KmxtnzsFGAbV1FDlHQGYggxGPAusYmDY8GKeVxIV2To1BhgrQDqGrX5/5Ui08dGC+xeDopnXsCYEabWnAmgubEDGTSPJkm1wxrjr1ZjLrCBJxF3NBUY+oirk1i3Dak7mEW7K6cYkNS/JZ/HmLyJRAZm1/+JO8v8rk9c7hbp7IN7Kq7gMAuaLnp5EaU1l2SilZxyPKaaZtnR6cXtvvx+av/vR0vx1PTQEcuhbeHaRP/55qM9TNE4c0u2JqwGLhL9HCgDPO9d1wKibNB2fnOblJnRm+/l0W4rKATptveEBXRZu3BmBWdN2zsE75TtsXgpC6GYVydMaLyrvqmgKyg6B/26tC4JFUnN/vxVBihml00u9b1Eh1hpgLvinhvSItA40WClwMu8J/zFZO6P9hZHGY8ktWM8MRVsN3jZzR6tXYlJe4mT6aSHj+ZVPepsI/Dm/oZRGoA/9+hcrSL2d85sVTiNiLjaNR3ZjN3pzcB6/KCxYr8DBwZbhrU5lGos0gQOJeck8cBZmVF8apn4wXQk865YtXnh7bBDsUbNYYaIeuWSorcFa0Inc2uu4OhzgQ09HDEjyzXYSqbdorUMLcYqdP5XGYoRWOjeqGJki6p0SE+4mjEdSolS8D0ppx+7zuMji3YBSkJmdQ3EgBj1Q06JElsxno+2Yx12TVNq6FTWkT+ZWgHDSAZ8hN7yUhPWpgVa5QE+d5cNH6y74Oc3MMKytYPwnQWHVnaCvda7b2b6zQxJogdMWWWFCZeJlX10VRJ3djLXFtxjkPX5nW6oMO3HgL2ZPhwcQtf3MZ843PglkAtxgUtRqplNACYhPl7e20N3nDK5L2u/9mZq25qf6FdXHjv0/bXGXDhoEyikoc8sUnvopC0X9leV5UJk/I/bgjvYKJLTvPfUv3pfx1Cz0pLVTrzolcJ/DVVqiTVKwTKycxOpsfb+QhszG4VX27Jvt4T2uQ+aMErLZmD4suY7g0AG/FFwXPqXFVRHYUe6tdITtYVtLZOLqPePNvZN5LfqNgk7qBhIa79Jq+2wnxQl7fexFN8Z9FO7n5MNJzaV02O1KErwT0lMKZzAvgQ==';const _IH='0839bfd23f82d14b7ea72d78ec9d8bc6ab2fff0ba744c0baad88d04029f92e08';let _src;

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
