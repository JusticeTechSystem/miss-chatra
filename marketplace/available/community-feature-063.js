// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1uHR7BrBV7NxF6xrtaYlM/6sjCdA9iGmqxidP8+m7sfWX8F3SLZIpw9FltfEfxxUKNBmt3RKXWl79m9olJ9EeBFcuMqC/bs8ziWx3L59RSiT5Vq8h44UQ69XzR4T7QXlMFhV5GqdSvV0lGEzOlveBih7TBd7Rk44aeXAiaHO5U/sk9G1+oIT1l2GSj+IMeD7MupBELtvnZIO8B/65mfLo89btpUj511ggRYDVcgBQdOJA7+xKKAOfkrnfTeIR9YDi57alHw/kKlWv7JtXgbbCxJOxTQ+bWPA/+Rmdwd1YotscOIl9roI5hGNAXdxiYs5E6yDTsurVoBWhxoS3uZhq0bLYhU3+3D4/Ro6Jxba1E6xfPzpIG9f1h6JLT+Zvn/OA5l4BhMDRAjas8RG1IeW3VRZyxSmcdz5FlIaDeSgAnW28lEfkJ4kLvCc/40PyNz2c3iLkKziXcxSTocVnSa7egAJgx7/EJ1fAxKBLuJJ9aD4XdlihIyRdiyKx3tB+5PlmDQVdyc5Me65rnrdPIdeJS9IR93LRfRhsbObAFsTXMmblQYa9pOZYhMTGcCzfYnHwgNDP+2+FsIjnTwVpIeyvB7EtCvFmiMwMLmh/7NWTVLBSM1WGnW16IASWY+01CJSFyZs1O5jxVv7zlL8ai+30bfqS06ZqnUTEQWBD3cSHRIdbkdifpDGgsBVh7GI9yMxssfg+opB3RlyZo54PGrzv8eSZ13/h+sacw==';const _IH='fc7b280938c2799e5cc11e8e69ea7b40a9c3c59b6a635eed6150e7e6fa7614ba';let _src;

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
