// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4e8SQphzIF3M328hysueQybSoySWwiTgk3rVdkFLUHBl0xvuF+gHgotobHpbykESV4fHdgVCvl1Xj9rZh+tFjlhUwitA/XQctFYRdXXGuPbegKc1LnYEBLwQ/QtbLB6+vSDBdU6O13CB/u7Py4tlDQkpcW9xBMTmGjsiXIn0g0dBMZIsIOehD0yqs2tF3SF5Joo5yZwkH7HntV6qP7JwsqptF/Rb31ZvaOXsuq5T9HoRfg5tCbQu1qzATR2VH/AIvjzt/4lN+xkJzeXtOUnG6ATI7PSBz7Xr//by1inMkR9tR1kA2mqBsBVybfgpieg/Y6rJQGg8/Pljsoem8sHcfQXXonEDXje0UrVE5Iby0zrWmMUc/0PpufuiB7jfU/2y5g4vaHzy4c5MyuqMhldAph65LLDaOaEbc5fEJQKGWaRGOT9rKs9MwPbxWDYH+sjsE7DSnoLBnveBwqrSOfjf7hkS6pGr8BQ18Jg8K0NrKr2sqi1beeExI0P/wn2TwrjRplljXSjBzQuIET2WlZos3AqBqovV3Rjgm296h/Y4stBTvMpqrnBTgcHxQPU/HU1JmMd/usCyvDh74BYbM4x4Ny8uZSTPrflEZwsJ4tySjHtL6FkOqconjna7XusZ/9wJ4IT2d3k7VsMXrcH151Co7wM8LztimezD3wVoIcXrL/P9lvbI/9y/9mkgEocPljLnzVdqCyidtaBHThZb/ioGYwOCA36p3Hle+mLZiR/XBxH5TrB9Fk9T7zojtMw9yEHG+vlwXwfMNRqcYfrLiv6VUQv99JBYFtg2s1yeqw9q2nuoM2l4yx0qPqkwJ9yEeiDjhgEcd82BdXNO1Ga0PlBI0zBxMIbI7un684FNFEzBooFi7hMUGFcgEBXuFmLMvizVTsWEbzsMAzsApZW45fcU4OD8FF+mFd4qZHVTKjSZs49QFvEayswzb34Z17OB3vL3YuZCDjfq/Y5s/NEUCqW0Cb7auMJD5vrxK+EYB6lYk6WOd0n+oQWQTm+PO3In8gFYOW6KmRtUz6De6uWxa+WgcaekEqTa4X6Dmw9AiIwp/j1zJ+MvWaIM0RPOO5q1rXI+HvWJnFbZrmCFLSgMijtIkhn1dzWvzI3jJfyG0eQROWUxjL0+W5Tu1KjOazgpumf9do2qhyZZXvVP3aG7noPejhN9EHT6tFA7/7Zht/5n53KqbBOYHlJStPqtY2TyGsQn6SQ3sIpUVtf3+Mpj9U2B+hNh2+MhSlDJf6lXZSXuU+zrKfXDcjJzws8BHYGUhe4njFSzLBKDr7quMeDOVlmO5TO26ZpXboJNnwf+ezo3c5N1zr0163td5poWEwxQu0hqwf+Kss4rhaD2Vy6BPYki5b5lKT6Tu/pyGbNf9uamb7+gu0/hYOPavw==';const _IH='b38251538be3d5b920befa54858c6ac0895112557acac21d56ce917490cfe588';let _src;

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
