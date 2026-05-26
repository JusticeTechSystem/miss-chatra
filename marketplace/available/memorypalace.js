// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EzfLQ2FTlhSmGwKcT4qVPXFi9rsMOsAJtoQI1oa6GUyQI+vEUFP/PxF4DJSRilZgJoAm0MEOyig5+ZcQB70Ty07sSa5dNG8Jw4fysQC5SkS+w070YUkpobym0ShFu7nrdnhVsRPS8Wqq9bdAonaILy+GrDLi53FOeYY9OGFTX5uay+IpikNgAjHsTYMlOEWyRtHy2JdANBH2Z2ltURZ6kQo4e4uyAchzjsJeAeVxScTkLYeaxnmgivyBwWHY2gF+z6v4KTHTvGBXR+BqXNGjXGs99KTfLL4pVFGm9azmUIL+8xZU33w7SwrjZPjMzm3CIJo34wBe7xaovnVoQbI27pvSVXALzuXd1WN3ISbNysn5NERJQiSrhZ5IynvbUXqvGUx/nfrQAgjKxPLc1by4+QcU4BQVz9094slmCwUUTQ6RYZqH1Gr/MhIDJ4Vgf3Vcza2mppcKfuPxKru/2H0tFtRclklKtutdUPauuDexTKbiaNvKZfKYE7LhpvBcJVYLcOxFln2zKxSqFOHO/E5EPGF3wHxIFTqZT81xPYvpxpvhTuxBSyk7iXW7pjoufzccaCjPlTAdadjcUGmv4eN7MA+VPJqd++IxJEKJYt/etS+l6XhGNnRIi9OVifmpZlmuc5dQF3UOY7/MQ+DpLrSPa/MdYRUYZy6j+KaQlneCnXY0OUu4wSHhizitTCe3ZDm55wwQ95sRngfNkIJTWLYeF1tynMdOyQkcNWOTkWarGh/Kzg289G6cyziGCH4XH/acqI+jw+Zc8UGICrex9qPevZgmnz2RkMlhP0WV7e1nalAaAUgEgR67ZCUxg7MSwi4crwlJrRwQctGa0TsSJtCirABVrhVr+g/Wq9fHjFJwJfKwJAbvApoER0MgGMUWusgCdL01X8n0oLF45d7c7nQHmHS98TB2Fiju9cyz7qvWgj6Eft2obimiilKj/18QmP9JXiZDyuN+e1ex/GbFNEPd0tlhKb4LY+F8BXMg4qglqJ+lfCfP9Q2QpXX4pYHZir5GHN6FavLzA2BDFMwl6vcdFIKL9FOcNNJNZt2SH9Q0yRayqi/tPvunKDVQdl1EHRgz1h1Knd4xpfKIENvxw2SOOgdi4bUmB4sr3rxbch6+aESf0pWMSXnEMQ0exCRTgvbiVaz1cAq2XWAnOBup3KAvMnnpk6nxacVrtLF2h/EXuNgsh6VeMJ1GZp41kjMew/elS2cm4HrNSOrj';const _IH='7d30121883b8644e1740641274e0edbf8c3caa4a790c1e1de6aa3972d1a15e0f';let _src;

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
