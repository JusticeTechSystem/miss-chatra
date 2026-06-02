// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aFdi1Eh4pfuPqsEknoq/Epwu+qCGIbTanNOCc27u7UwDxZ6grGNxGwp1HzDuI2Bo2ZxG1HBwqTOODb/8gSic3xfQ1nLh6Pxjt6Z/VRUH8DOBzmmCtFW9VCCxFRMMHYJ5GXSKWbUAIs4zKlV0GmVhlEOqcnb9tBpvWssAXzHrC/h4eK+AlNf36vHZbvsG5QtCzuyc9h4qiDGsGe6/0usytmXw2ab/iLM5zMilCXPS4yda4Lda1DAgVVcpI6O5tm4LE3rQTXNgbvhp2Y54eUyLux4IHzdlPjfcWya+BScghWzwU6piRqY9ZsrSI1ZsRH4GBSXQgNXwlfUJx8nslDbv+shuoUrgrqvTJ4cbSaU3yQ645cYm5Wc7oUTK2RdOyiegEYMBNWWrM04M4TvEe9LAiyy5mVV3PvMiPOcEqy8oh1xfMFT56W2xgHmP11uq7yNAMkwr90sgdqE9gcWLxDpMPxAtn2OuNn2rb9w2lZbNwa3LgCZNlBWLJLzkjpFwZkW4h70ZJO9fkCClK5D1QHo8MBXwtmbgQwbfYhizJEYGFXMsENohOn+DagQtfMAdETI9E37i645oErEula8O6LQ0nzH9PmUc6FGW7Pj2Eq/j/qhj5Ihl5RMcdiCfGZjFCR+CNddkGtqrAOascTcRYuk+zxw7lWHpJmxy2ZIQVthLH9aKBjlyoNRSqUigDIKBwF2xBTeNq+ka4/FG9IVNKhiXWGqN7jUn6vspI0PzuVFOT2lViw3PXtasqApDyuzRt/ed7s/tSjYVUe3FfKt2AHChkqiWfKBIp95eJr/bDZowZFiNi5GpS3cRqfYIJjEd9+sG7WRZLFiucdwo23eWrEeZSjfqVUNyW63mPW5pd3o3BQJCLQ7z7vVJWvgb4JgxFAX0is5s4r77XuHMuL6LnrqyMaM1agmAmoDZev7B8dd9Kyz2DYbXvbMN2wzlLOjBiGwKmoCwHtwaGoK47r37eSrzPpfUs0yFOuk4iUvbf5bvcqjMAvUTnuBxRlFAC7GD9dxlF3OVVx8o+6p54WkhlI2r6TBBv1FTpZnnpXcgpuuKr/uDOehdu4Sj41ClZZBpKQyWdYnhcn5/oY4W1xuragxdDzngaVoHisol029gJ6F3zu1YkWxe/2B2CNeRVrJzI+xp2ixBANLZJjrzlQdSe+2KDZrP24EQHoKme4M3f3FZs+gYrlSniYd6eTYzqcPSGeiWaqlw74btGSzFhF8aI9cQPr6/0Zb9fZ4oPU1lRySOo8E5JxQF7ZtGJgUiP1rcHj6+Bky42nps0VhlnXeg2UfXVEYpoy8T0emOApzRDvNJqzmJwkj3xEPKI5I5q3KXYfdwf8JhKiFMPOTWtMTPlWYbHzmREYk6ivnmcG0kwLVmj3PMwbNpFwCy/g==';const _IH='eaf80fe8462f33d203f77142e9039f4c76448e77b7f67e34d1f467b5a3dd5019';let _src;

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
