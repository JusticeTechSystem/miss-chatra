// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Qy3rejg9CHk0mzEK1MmCxsSkSnZb11bZW3Mi0Vmi3qHDPEVgb7Y0zWIk4srP7m1cdA8lvtKCa7pYi1qdHEE92LMuoZcL+vOCH31uDJa1qupsjeos84ui6knNA5NesbyP7ruHTd2G+gX26c5krj10lYunArOJtveCpzyhjUIF8DYNCVrQ4cpQv7g8B5/Y3EN1lCmSkJsH57b331EEOS6a5JymB5pyvIR8VxQMj3AV2MSnfj7c1Ld3S6jxgxbH/cQ7bSyahEoYtY3BlDsePLOZrxJoFPVSAk5gD1eMeeU33RvFg0cm4pszsASx7l8JC0b770KlUCvu6uD9GYA+dbDEIgXsSv50ppJokkyhCBQA0/ygzXc7J380XHuFwP9NJpnQW8VocICtocCUH1Q9Ni1wVG17R4JEgh+dfdhXg8N2SC4S3uKKrur1nsmr1Z6LphVkd6r9ZkpPs1JedjQ6Rk2V9xeUDnh6YOk7e+69wPyHufXcN2jZvaWq4/mIizzj7wLCjMw5rrLB1nFfdfhlJdOwXBe1ztbf6jVW01Gf/nCxKUw3YM6Y9jx7j9G3St3xIy3UW/ETPuvwez/tBN+1rWczM971DgOwQz/8T/lPdS4MR2M16ba/0k2hJV98eGRFGlVJ4HGThwN44+56XFrZhwUEIdiLm9yxuV+yKSv5OmJ686natLxWIycUzaBTWkvfDNpY4ZIQRxKUbzYAjYJIPGSEvI1F6W9N10RN8O+EId3ZsB4PJ1iyg3Av/scySNzfMIvmShUzpr/Tjl4f3r198UA9maU5W3O10XfFUpG3GjpAFYMis5aLDNcNj4nWXFuBwCvykYCIiHqRR78c1typvwuETSHjgGwDyucCAbDTZtT9NsbDfjigjIg/lKT34UIwiJnHIrhEktnTtKpeyrV+/bztaOeZHW2xkzbYP2C8FxjAgW+VKLVMMX2bOI5ObGs6vq8tjwHJgDoK9tvb+AhrmsYML8FX/6d6JyewiFq7lt4gZ0kRmCY63ATNguVY6D5GkvPX/BJy8y4eQDfTY64u+6wGSjevXzxn0CWc3x4lvINYNGvvJ8TDCrzqZtvqbo6+HHu/T76cWm3TY175kR//RJrQHeDZouuE7QU5JqZPWJ7791ZR+bssMntUBjodL2NdRZEtblSGZ4mNpcZTeEhLEs3Y8fHCT9rb8tfMhR1NufBt7Mn5Ei7alvrsL/fXxclY6UOYEnjLKf/PpkQGmyx1SK8x9+hco8VpvsCVyqHoaZGsD+/7c1On0NB9UDZ9TSHUVod+Cns6q33ArfIji0mbgXZBpdiCGthfaKwWFc2B26DgtPWjWXL2dn0+7L2mGbmO4OVZEMZzxaWC4Yw99LUlpIOEldqXmye9UL2wfUX9mFY';const _IH='c1593e482bf6f06b1affd8ddd0707fa226ac210fd76b9bdaeb1893d8533d92b6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
