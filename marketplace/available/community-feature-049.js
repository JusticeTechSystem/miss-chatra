// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dO87lOjgoDy57ifQnIy4523UIiktBexPQ5lVDsLCrgjH9dNxv3Dzvkcz4NOcFLVs2gMuZJCY9rlV++7Q+D6pSTO7XdjLpyxRx/6y2JDbf4thTOrw8g5oCv3D437m7uIXIxy7QALWs0zxzp74Qnhx2iCLCTUZh8ACuF4Zxj8ocoS+3McFVynij+Wth5YaMPclqBp4wJux55w9+yGvOigUzrd7yfElFLojmhGOCKjl0WTFmXWbruCl1QGyuJROFhfB+suaBFpl5g/GSipN+GCDevZNEiy8rX7Y/57I3M1/fj/JFR0Ju0qPdAlmh2l6tSuq++X/iYHnRQOevUvUS0ipTU2jeKo0ZzR58qm2MGq9/so7YIhr+GClu+JBmKlBgW7U0c61e+e4eHaQs8g4l/NR/HPdws15/thZ+1mZumvqbOz9v1/kOy+W8hYGcND7a8ZUt4vtJ+gcoQrugXYG473kpF2ODoOFkWspOODdSXfZJmIMfYkOl9qygauYpnCzXt/cLHSgb2dZE2b2vvou9Gd6fDSxhD7whBqOkqS2/n0aB2fADyNogKkKsgwyNFPf4IIIcIOc8E8hyIIjSmqmLhQNMMbBxucyvEdrDPdSXZUm0+aZDKJidtovtLWvGWtDaqHn004rZ9Cmn3Z6yqSFe5Gz4a4+smslZRqpk3xlK+tiuzFPhe+ZGnGXSVUylG2v9NzxNi4781bvG++/qF0Rmjy5nJXtIAY+qtpnN84cjd9mxyzalA==';const _IH='f1b96021b95ebb65a7f4e5c114bc9e6bafc1a8c0f7c0c9c95250aac5d3b07fda';let _src;

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
