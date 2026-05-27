// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LXiqBKyXn3Ftc6Af7+cHFYEkcwcQG03ynAfVmehu9qmt0TQytwtFFpRD+VkViQMbkOI3eU7w0eHNNov6+Agnk0pewpEbP2YnVbhFkBQALCDTTuA5GmovE5SHqIPc/HoLrGJ8kdCSjevDu2t/QNZa5NMf8J2Gz25UI8dn6UIdgYzaph1Rihd/zRKwXcYGSq2AfuDE8sWW2k/wmSQTFjJV+0teXO5zOF0VUvI1KT2JOPgAZBJQ3DspuXf00HrFAq3y29IP0MQ2eca8bd7SMOsK2GsI0c44pdHvGDOD+b1ZHpHw+qC0ep70rpMIrXfdKNrUKU+IxbGOCigg8bn/Ze2mN3trd7bLxmwh5TZMyNR/ffB+01A9AkDq7hCshgI/8sWGLv9ewD53xF4dMQoonWf/lPOAN9FRXT4ZMWSaFMPvFHxfNKFaikcSvsYGkxo5YoWi0YgMMmMxhJXJHJLYoTf7q49lfwRcA7Flr2A3ByPMmM3c7K1EBhITgr1IU5Pm2jDXs+cXJev+iDrvdVtAFWkJldiTP/tgrl6AAjXFCng8JpvRFDBpYaCI9v0lefvRcycwl2ewhcjZNGK+w1/+lHK4+pBFuojE+sul6KXHBQf46SkKA4CqQY/oe93LDsCD/sOIFvk1hiQW5nfoanqnEYzxq7A6J1xHPayXDRbxOIYNDGa24ILw7y4sT27LcS54yFIUU4ggT7TkwXdk4pUq0GOy9ADQN62kobE+jn0oQJzFhev+7z1KTb3suXrbrbe1otowcDLfZbG2Yinfe3RdGmsKVsvU9TWXRBXZHVq0pbVcV+sXqQ0pVrCaLMmJBCAl+3HdzOw/5vP7w6+826jGa7yKk5G3XMfIhsobnJRUj8pBxybXExLIzR8/wta5GE63mYbvZhZhJBzmvPzuAY6ECHVhA8SVZ3QdfXaLmDDitgLt6imVFDyp6CsrA3vKu2FNOfhFELlMvUyT/OUpNPKQSR7pJMWmEBN+Da22bYQwmzSnqyrMuwIbvbjO5YYw';const _IH='4debb6288e8464fecc4d7c1e6889d303f02fc0a1adc78b92b01712bd3b3206a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
