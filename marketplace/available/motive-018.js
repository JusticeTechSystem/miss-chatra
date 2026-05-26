// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8F+Q+UirxqKF+drZ7MWe6dxHpoV2AfQhNEjpOg07zFHhIS9s8XVxoBej9uoTjXKDfVXljbjMMTfiFXW4YXHM8KsERHOL1rnxkFPe3Y2nyTzUZXqE4+y+FealWfyVsUmTEHULgJfRr8XE8rlktit1Ia7pzlzTwdunR8jVGpjG77f3Yvw84Y3cgHtakJn1xgC4fvO1gxDOSUZ6dFvrTflohnUzemlngm5kYgZ+y/cdasdKHSf3SlaM9imeLsISfarq+KnJAvwl+qyRSM6YmmDf1hL6PDjWJlLQZ8f0jhIj5q8Ut/2R1xXyxSIZIZJQXf+Pfg8oKOASL1zl2TzoShIgkeTKuwfE6oxYM5BIXiW/p4P0+KG9mCemuL0JpXrBgGP11en/xOLcpDBjXUo+vdfvn5Jwx5ECJBWkAcKrbTbiYqJXF5KWi/RXV6CwyRUW/pyUkDMeMuOoM5PpQnYpSD2xMC9wBFoucWxIAcHxsoOdPx54S0Hn6sHscdJDGb6xghDoHsmjig7av8aoFTScu6PC23m+Bq2Dzwrc/ngJdXqsoDwC8wQxkKzHYhriiWlU4E0HHz2rFpVgQL9GOqlFNAz2SUlPrh2QroMpEc8IuR+WkgvskIoUBakro0MpGtTlNDDDf4O4ttVasu86N7dboY9SEEGW9IW6iL4oeUrRzKc3uk0sy334F4BUVbPiDzR6abJ+dvXCVAlPMYz0R6nvGxa7mPPtYP5RkEjNuYsaxpPMjnxIfT/X5BkZ70E8ahpvN7ikKPqvfeKnnO8sEWotMlzo7t/k0NtmXdR/I1vK/Z3KIey27wrUZKEJu+Y9hiogCfZG/3AOZnzAdFXLFkpOANboNjVRUI9TWs1wsyteWNN+PHUqf0YSwDS65sN5c7aBZvDwn0+dXRnw7HURwHj8bPmVgVkrIMnqhrEFUkhymY9qxE01zEozLvrrvTd28AQM1aQNBntlGcTdcrV3SOJVC/MP1A+HpaYITiRsOBnzAV7ApugxHSV5VzyOQpppAzAwN4P/9hpK2j+WQOCnu0uGFz2p5sa2';const _IH='96f8cae2723acf479e1bd97090f967a853e2aa69492e6eac4a5b251df392b507';let _src;

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
