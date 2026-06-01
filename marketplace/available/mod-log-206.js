// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/97pPLxlLhIoU/Tt5uItKG529rW/moBbyyFOWNIakwPR92pznQKZ2qoMevQJmT8s9/m3SyGXElXTQUY9Cmwg+qzV/0TcTA/xIgcUc7meFiP8khRUKYkn9R9WkPbDWDmwHNg4A/Vz+t1TmFuMF08k+Uk3bwyMMfqC+7BpJQVz9G/ajoAIewCGQqezipXf33jwC9yDtPSxMGulWsqKo2KnwEwa08FJKL2sRt3HPFvC7X1KcJa/4Iq9n55edHGqK5nfW3LvYefzwCMFM5YXyf0YRkIyTzoqbUbiLzHmatcawgzIpK6moaQpagXhOrRe4K37xCB6fEkRl3cY0qJN5uWDHxl9Nr8vzduSJ/z+nuEn2/POyCCyTBCDpyQrQHS+VLPjuKKc8T6N6WtQ90fiZlR8U6tS9tq9a5VdTmZqI1PZ7eHcOF8z8WDXho/OFL3rDHXTsquUwlrMh9inVWY8/zSQeTLelXmM2wvGGi0142pDPvxizBHGOk6lQC/kYmppNUSQK0M1qOa86d//DINsXeByM/In3YG7YjuwraZH3catHA3PGlNz0LrL6GrK/1c6O8BEjQhSA/YmrqRkejbYRY06LQPzbVzBjC7Bn/3nw+D1Ry9tk+vVj8Dg/iukNAbH9xBfDv/POoeahJF2oI5AEKDpJY1jyEWOTQl/h/AqqwS+DL2P8NRyta2j2VZuT9iq8ytpWUjLA7U36xbwm2f5yFuEJ9nB4Op9/QWGiJLksR0LFcn3dzUMCZLIfvnkBNTRI1DcgDElEuWTsxIoS++DXn8x3Ga6CGBEfKy7dvA+lPStXKIbCyxgzD93rv9B4NxVVKTXhdUYkIs/09b/Rsj15crpISYwW47ecxV7dRgiEEEvR3cwt7q496nefnqQ+baT9NdTK/+6b/0sU3gVSUXuE9T6hN5dJtf7IDUQYwsZT9yyxhrfHC3HxqrwdDM1YcIM+5mqYBCUD6YEg51x/+dCM5/4LgDAgeOi2Tq3crJboD1cNkVA/lZY23QbpOr7/zuh8Z4eOB+0JOQHYYlW+qXN2x2Vjtfo64TCNl+w7ourwmOy7hTC6Vd82DFiANfXbIP1r+y0IgiU2GSfPZYeXVvTvmgSMU2jJnU1RHaL+7aU3eFy+/7ay8XVhsdrfIoua2Oxp+ERnMBtWiICiIR2N6NPQCFcqnsgk/fn2Z5wkugyKMhBd4sWzz3mk8zyPEgAyA+okD83DQ8KJAg305PFNHF4Yeew911Q95yInOeHYLJtCiz06OW7pxgh/j4w8AZ+ASfyUsNWKI3NL9WPoAse6LkoXojeqJsJv28cDfP7T0jaCOH0LUVF9XQ+1k0PCMDwRBt7HQUfyIjhmFqNLxog9U=';const _IH='db9051de38d9974f9baf5805fadf8342081dafd9f3fd8d849cc7c7911e7977f3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
