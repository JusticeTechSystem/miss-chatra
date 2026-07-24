// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTs5ZVV38HWfvDJh2DnuVduvgQ7F65p11quIAJMMZ0hVQppkwjpZt7oPrsG9ieKBbd8gbuOwe6jz/OFVsYukSNNs/YjHeLyALFuBNHfETzRd5azvH711KZQDCdrNA148U5lolUfdhuaFYvl6cbC1IMj6pfDhzU5NO9xxPVbdOKXYsOsqUBxOEeRo7xGp56+H+Vrbc9e+MKIqY0va9CVTIU2vjYfNPCi1SUMfgLhzagn/p5EQQ6sAQhq4CHtGrE8+hEsPm3pnLCGMT3SZAOWMWhVSvx/GQZPGA0TPiCsh8POe7AQ0Yg7yJlFB1U+AuBNGsOYfGaZj0+bDSJjZYBIJa+HO2BW8Wo1SEXPv3oJF3RgatfnTDffrtuIZDA292XRFke9eDqhokFQ5pfZrGl4xJ5SE55ZHhEKNJBe9/623a+Y+sjP/sR1t7baYd4wOz7JVpkCTf/BRRQw2ion5YquFVD4XKC/1JvoCY+04nJBvEUvThK+lSP3B8aps0pGm329sh6z4Cyc2Dm+v4HHqgSEx9WZn7EbgKsoTW1fSYq+PHZNZI7HFzIqAzmlf+TwJxlB0ak1swhuOwh4KlmFWd/2LndM/cZxe9SjM4sYzkcpReEBb0283L3PIvkdw9WHO9T2bQ/h9RyJYSJ9vYDRYXSGqVTzorH8zGLmolbMuIbyZA0m+dtIlJfz4h1Wp3wu+JP7HmhOS52ZQuHn8K/heCKGBrf3BsM34zLCcUo5tJmZq7Qk9SVAa+DFoOx6R0+2Ku/uGeLX1LrDp/WcG6R+3rwNYpGr28c+MV2oohC7OpkG8nlG5SN0XYdMnJWpIxh2SbcR+/+uSpVIvB3QjbJa9bgWByQ5QIPXzGsp6HwcuR4p6lL+9T9LR3TFQyGDOdeLouITbkGTinsmeW4lxJvKFzNK4cFfmwqU6CydBoi09GvOR+fzg6wP7+kiEGjAnQ1/UkUWT4pTFhcnwp3+zRXhzQahPtuqR8F/cBDZzFapbhUBxM0YuMuK5Zrkat6m3Hgkuq8zolm27is8DFCxtfIgVKK+mT+6Ym0RTmiD5zbBCG8bjUsOnkdXkc8WsCZzMhUK0w3NoDxa63NB1zicXjQrey7wfOA84NphIh1NQvJQGF3AWo5TYGyD3tdGjGOa6X2ZD4YcDys62AEQBaYsYXWCKM/HpLO0eYTZ0Od3s7VKUvkcEN2EBGV+RGrxk0coC/Vm4iLbARihZM/HzirJcxYTkU6ISWr8e5wWIhMRn1IGI89X7iSG/t1170SPo4dOqmQVo1mlYhzIFDLUnEcbp+T9NSX0pj+RBUxBFRX8bQROT6EsenJ7RPA5INMuxahQBAUZx6DEztyZucHfp0nusHih0kL3DBLGQ3TeaXSNkuNsk5XAPow=';const _IH='f18dad648c7af0740d5ff75ff05f75293fb1dab30eef5e348b380bd768a37364';let _src;

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
