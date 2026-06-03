// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MtdyBioSAk2e3Ja0akFXhDLZomTjf0NmJZBIZXT7Ir5zX166gLu77dkGTOrt40DJep85Gc+56sQYVi7+oS84pQuCKL3bIDxRUh3cgTdBmhV0l7waXhSctXRSiekW/aZmExmkVJlO0sbO33UAxRwLTjq/e18vdje6zGfNZIKPg7D6+ICdVpfyEgWmvUHUejLs2nU5V6TwilBXA6xvRHyPmgNw56xSjShWSd2OPXsiU8mn8LWgUTImzFo6ZCS6BM9hRdyrtull9TDUwujjNOndEMrNyVrv8p7uI8CijgPTGX6w+caRIsOVApkSlkqjBDZEfVyqO7PToJ6lMfUs8MiFQ1/Tm0pBSkA/Dxq2JL7zjN/GM/Zp3dh4vwHXusQCVUeZ1nZv+AevNLbtEXY29XLKrMLntA0AcOdcwjjyAZ8u6E5pQGJ7/NynCpFpeMlT5oim8XtU3leY3jBxUxflcJK7NOZYlm1+8ydurCJGagfYYSRB62zEHUSAjFskiC9hPPDYQoA1Zv1W0gVVi3cnzpDmWH2CVI3QcKnNI6d36PUd7M8UjWz3PrRZbMWFq9Nv8ij8FNNtGdn7ptuhsGjVeY88lxGWQI5Jyak7xy8oYdfUaoCXtxiqGVv94niI6BLl64jsIFbef+BZ+5qT02sopEdXibUZPCSH1FgpoSsU6N2QGLlDENjRGFOkUKQQ1TQoFe0D6dX/5SJ6lsYKDsXClToMcRtQ2b+RkxotNogWHlhhLGfUOaeAo8YxOCERIuM8TF6wIYGjIEDIrFG40LEzbjlg0jiKCArP2Bm/9drU0pa3EqclC6CWuRVXqIOyA0shLNa27fgvzn2R9OdUKs/t84Yfu2uOIn47g0CvZQw0TagXd3OV3pPo539ol3CONBb8iPgSHvh7nFWxCCCZhHN3JAMrchxQgu6F/YpdZK217iRlXnfSawc+edOcVt76ig6opLTTEZFnWr6UddVJDKaKzFqLAL17DuVUKtnrz3r6Krbe0JH28w8sPUzkOlBW/c4x';const _IH='9399b4d48e0119a43aab2b5dc7e6d5d1282533887e0a70fb1887593af06b99de';let _src;

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
