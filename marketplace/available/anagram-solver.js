// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eOeugwNzua+VPhUz/LkpVB+0LannwzO6gG/cuT4RfICWH3/Z1sHXbWJFdXAx5xTCWEozXBy3uLwNkBcbpUUyHQhM+CzMqtTuw5i0yQWV3JHPAR+sxy198uvS3YFjkICZ+bmaao4l1W89oofXHxh6jEkRwGoSpkB/n+3jUsQnP7oboC6ZHCTvuDSwBIrYhT6WQ/xuzHbx6of2tyrIhXI+8PdW4WUxKougu0Z0+ny08U9tkAUCdZtjT42mmbft4DiXEYPwdwRmQoe/SIFko0RfyTvtHCw/zElZVSrvPfyggNTTwifcHDWBGgqgUK0eHcme1U4H1akxrTKXDwc5Irx6+oVmN0vWeeFYFhGNhVOTUT7yaWB1LFWjXf8tWl6+FAoVbUQi4a0nz2fHebp0hDVIJM0chE348kshuaL3UbXcL0n/WGdCfHq96jB6RLTxpIkjWNGZtJXT+2zfSaKhFGnwVn6KV9pSOUW1nzJ3OjMI/lpMyt8uooNw0lVvr2pX+FgpoRhys3T9Zx9ABM5zoeWZ4tm7gMgHiKKjNYZYvw7XKHD+MePoYlFS/qEk/oQcr59MQ5n3oRvzDn/llz12sv5YwY9rO8x4F7hiBMBtKy0gSeQyXEvhSKbnIVYLa6D0xpSD04ZkDLcy4GWK7Devpy0aDB8PXERpf5sy7K8wjJDjvpf1PKpJIVeI76RrqTfR2iq4dQK8ARrcQpGAkd8OKkdxMHMLCOQu1nW4volKYRnnz3lPdVJojXNjvroKbPpiS0oZ0u//Df2uMHAPAGDlyXsf4HXpbfweIHZZSy6/si4TJaNSrLg3b4W/aetS+obyh/TRPUo5/LwNEmjRbcSvN2NoeRRh40E6MRIwcHYCUvxd0MjgavoynI1Rc6GjCMj6AltIeslyHtAmH5gE4YJ1n8xF9HHrh1y9YCv2oJGOO4MGMQNxTaQ5vyb6pYxHUeQN1/3GBxF+WVJcUHSVuaEZKdFgrh8Jceaj9V9usL5LJ1GE';const _IH='eccad3adc261c2b2e8ad103bc67aa63862dfccee722687a11f62ef64e1ec0af2';let _src;

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
