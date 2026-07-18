// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT04biU2XgN1A9LQhasYSWiSwyuOKuViokuu+O3MCXQV7lyU+Ak0BnW8a5HWcRNhWwmfWojuZdz0mjCrsq7WamBYVOHGYm1V1ywhUoS4whZIVLdr/UlTe3QsVwIVzhYoFGXe3Bm2noNBSv073mFeJg5XJXvn7a0Txp/KTd8bEbLwjkGAW76uqtnfhImM7GDFEelnb3P0K0pFSnsCxOJ72A9IIvJf1lYiXIkH8ABVtu9+WMNYwbG4207eOBDFzPlkFnkGAKRKpzd2zmNa+DNmhW6SYDcj9QTDluTyUJlI7JkmQgZF30OXkNE6y7EkTxzrY05Sg+TOFj2u9VKFx3EfSAcQL3GatWE0PelfGb70x/TpdpYYHXlNruB243/f5LART2zNrl6sSKZQa/4sjZ8nBliELw0C8ubZ4shzS5UyPbIRx5nvHmOQ8SwH0CLuDnYiwzu41HQ9iYgYBrSPRM2GF5iZqoUS5MUT6JfoRzwXrtO1vv2reoQo7qiCEsGiiWS3TIlrKkMMNgZqczUKuVx5w8Z8ybJWaZAUW7Oe0OzRoNMm57g5VKL+QZIIUjYcoaUBjpK5dreM5nsY7ehkyb65/r5xK5B4Fw21FmMa7RfgHZrGLzEk8IdPDRvfVclrMsY/aw38vxBx89syg2vkA1ZaqypOD54c1J9dVcxdfMDKSOfuxJtopbnBEfpxDUfOXpk4wZ4D+efAvdblztQErc8G3fQAkDVIVmfMqSD1KGkWE8UICCPTTqZRLpw8yEuprxmSKjBUcwSh0/h2e7NwyMhAuHDl5b6R+pQo1f6H6ZvosTMe7s1LDD68FTbcciN6k2yrt17lFMMLYPBiJiB1PYU+EpubzEeCrFDw/p7kNXg6eaR+wAtIqCORMSCExjKDhrz0jGcwWK1hSUmwV5OBBPP/kl/mtfHCkQBiYUiv/MNxJkGIglaUGdLHqr1sYq17+hA8STA2i8BNEO+C72DG2tcaAzqEa9hy+bFSY8796ozjYh3bn45Fu8Wi4qsBabpeY24Oe4HHSvuye5YUBOOeOJvj/pn9C5dRSIR93YckDwkYDp5347ClSqLFdvcRqN9R9mFhi54Ckpag0Ohr0z9Q3GG7qeMyW/h4lJznrf1T+gMZ45+Ui6F81mREcM2rTrZR7Wtv/PhXTqr+xM0DMqQQ8G1SP2IizWr/UROWo25cXwO5VXV+UddzaKhT9U/gHn0r+L+jvuNzLdk1CP0knrdzMY=';const _IH='f3868f878bfc488a5e3bf09df5897b4c777dd1af7d791be26a8bf67e48133684';let _src;

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
