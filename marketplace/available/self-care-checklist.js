// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aQ5yzeEBV1IIqBuECQsOZsUUrZ+fll6u2ipkhnRAyd03czYJ/5P2vEbQFo5yAtiUTCuDzSh4s4DzpLqmIKNIOuVQUTwSzuTlzSbJqXr2hFN3d5fYJY48Roqyu/KU1mp1a17quD9RL7nLew3GIc3LRhiZT2rlNRvjWLsvwgs2TN1rsLpAaE/4/8jrVKUa26qE7qY2YRkU4L+ODJ7UK7Z4F3A4zcQ8jQKVCvj4HcMtORvql70IpwBvSDQzF3CLTS5Aw+A3tERoU8o5GaGJzV8ZowL0QGWqLfGmSG35d7hDk3Uoz7JR41f457cg8ndmRljUATdH1tJopEaXsftcw4qp2bnmTZoa23FkYGDbMIZFv8td19IjnuNqplbTaE3d29K8q+0mmVxS+atopm4MUuzzPBRZjDr3DeTSoVMSEIWBM+JeXyxBs/u/hCE9VQdP2AAyFnGNUeo0XmmkE67nOASq5YscFMU3BN18I9XeG2Djwu5t+jvegz4r93EImjIksmnkMMV/wzddG4GXoyDfK1KQcUPiqk1eRCDg5zxBn9Gb8hRuzhVujRjdWt9BbYK6kKe4Qe2MXYJw5k6OTFsP5CQZO+br20PS7WKT4emScgk+iDxKg0/rSOMhppQPiJJR6ZGXfQg59BVjtF0iarSntKoLcXBDUVatsTMOI4RVQ/UbvciOZ7Ns2cGWK2AN1ORCkM7ZF0IG3cr/c8zN1x1rap9h6r/4naXtyx3VM+Z/CyfauTo7GYBRB/dd3Uy6zBfmjF8gEXfEdhkvoBjvXhOkM+1BXYEGBUUv20h/3Ked9roOPdu+/6V5MMb+WiD1GvKrQohYtMHuVxMEjbgXY6jDplZh/dA7+H3pC/u7nIxQzfgAFwo+1FCPgG13jit75k0RKq2+k7gPenCkGFNN7jb1tLBKKK7eQQ2ALxDGSAPWotaC/sSDOzQt5t1dnUl4DkxGzFZ0whnQhWUM6baUxE6cXe9gclIksSa3JTpVdU0MXPQEEg21hg6ydVi9zlbuSi5NQK+PhfpIwHhjEeHEMW9iTsrgE2xZqYPPnMTqEujWR2s8mQI7G9ic8g5GUGrkEZH7Z3ENDZJNQuzy1cZBsCnvh+MqGw5HidcGVYc/L7EkXUyhGAVQMB2IARN5B8bpW9ntbR2z0BgM5y+1LOdjwpViwJZ0xq4Fx+5fPaCAM9CWyUtjgr9v9OqW6Tjk4ADI0j8zp7nKyr4gyLIAXTM6qPhLfZPa4LdEbXslq3+CxTeaDqwnJdUBXSui6YwRR2QItdVoao8tbHTw+ARCJyKLTlC1tU6rcHRTVFZKr+I6i7Bu8DqObgSF1m27kRTiT0PI5EIxEa/MJQbQnjL4VFqBIKe54nnV6RglMR0pkP8y+W35NE8N2c5X/3ivNp49ksxWT9CXO5e5mjAjnsV90SIsVphwDtVJMFEqawOIlnF43n7Gi82fhDLaaowGmpKoSNmHF5gX/RPijdz4UztKkdLDXEr2uCSIlPnCC7DXwBu0mioy+JTiItncT5K6uNuJIE6D99AlFa1cgxSGtBZHYLFkpKX3';const _IH='c3faa523c45828bf6438350206834e16b68e46b21496c94ebdee4cd31f9e4d02';let _src;

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
