// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yznmfbm7W0O1AqbiYUKHT2OYEHzn7Re2MCzjCWNoQeHVz6PgQDpi0KikVYXbCPe9Oadj40FPgWH3hm0xC6n2G10uU7WMX2cmKPUQcVAF0RM2iB5g+jKe3xelkeKmwO0ZbX1hN2l+An13451uZvkqOpDkcS096U55SThT+tOxjyOdNhAWUHKJefrcUVIj53UR7UC2sk64NeeqVS3qy5lLJLFefCge/PBWBHcfvojdC1u+DJdJItnfmVM06c+RnjXyevD92l1i8Q5GBSnDfyNUFbkVVFGAJe5XlvxX5NQDgBKFXE2aZIymPuqAFLtttDSAKcsvx7f/XXkVQ/f55qk3CGvLX0FRVY7IyHfjcezaiQaJOYlznHRkm7C/mg1fobECUjE7N/jwF+pa/05NPLF0IAPhhFzollYXdcCa3jhQyYT4Jq71JG/0h76JYU+gaKoEiKHE0UL5wASB950KQBVvEMBcsbz38nfQer8mPOLN5Bt3JE05ccsFSzB9XXZchNlIcpj7nGpuZyKS4cr3DK3mMpgIdn/6IcF6zvT5yb+Cg40/JGqze9OS1De4jYolU9sgmV1DyJy1J2ZpIRKOObWErCNzbZxHgEsOePal2pBNMIEtfMfm/BuEboSu+g4NLH9MPaRPrcyZXgG2v8hfPs1oeSYfJH2XMdk4KEpxWtQXgICNY43ZNKr3JMzoQOpY4Rg8+L87ubDxM5F7jqfkARbDN53xazbhoMKDARh6DxOvji6a/ukl8549H/xRW3i1bUmjy7VFdvTM2cJmAZYhe/w9JMMl8VuUlLnzmbzrCqfGuMtFXBN3+2qM1bh1oLipGtUzvLSe/lxIVMUq1QGGdSvrbwd6DV4nBw9gX7n5ZwQCDENZUUGIn5josqlHZK3oht3gg/JoNiLdc81xzNjpIE37OWg2nARRHqoBpJjG9vKGtGmFzjdISDq2TJiZbm7E0tsBdCcTtKbRIv02v8PMaAAyaGkCFKyuYkcg3WNCpvRiNDu865Xl366pCi2XsiFQ';const _IH='cc5547efe36f97f2c56fa34fd81483d054a94166ff6528e621cbb8cdc91315c6';let _src;

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
