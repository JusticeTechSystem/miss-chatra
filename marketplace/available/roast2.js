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
  const _b64='AVZ0aR7jgeN2hPFI8ywcKMBNAn8dy2qhGlfvZACFsRUNEwTSWB5tph528s9xfMgfGQZlsjWP0DEFlQdbXGJnpmj236YEBsP8JvvgQwpliC/sYypmPch8lv1iaBQ4ioKbTiEM+mi44Pge6un/a12AANm1JnCX8nxpSDt78wSgwyk67fS/MV1cMJOUmLdKWrd1qS4LsReCxu0MXk4TrlILWWh+Ik5LQiape+hMtAtJnLqzEqHfXya105nScY/m16oAUMa8VxEuIx1PVWhrF95C7RMeUd1ooeH4RN+10pSy7hjbMUVLEnSLBJ0NVw2pqhZzR+a0pngbUQZcF/esziA0Twh12B7xmRcg68jjFmYnMM72/oidLzrtl7ArCBTy/AmzjGZzd8gbataZ3tP1D4+55kEkaSvjLagDjPTbyhB7ltdb+iGTWdUFRlm322u1kXpZciodGWm3Voz7wNUVesbN8S3rm8ztDn06Oo46u/xWMXMpeCfhtb45/hhXjK8a9XmkEYhubhncshQPMmVQPjqju0iEsAg6EZ3EqHq29JbglrdAg6CTQ6gybs96rZbSdn9MZSFNpNm0SreHrgTJuTNhc61U1P0cLz+kpgquhiiaijDUE0Yb7VhhzUPnDdoqRicv4u8Jp24WcNaG6kSvaWgJ3MOCesY4Z5iZTiKkXQ1W0i+iqWqpBySfZSmQthL+jNMHJIYh/DFg+0MyKuIB9XWwG7ddJRUzByx4W+uAtIXXDgQ/taLR6kYhOC5mQLN5/YVaG3YY2+XR1Hax7uAAB3nVeAn7DL9RsA2RLiYAkOnSQx1/GrbhB82tO5SUYeV0vyCOGAmvXODu8Q7owsYe2bZLJtSwWy4C7uYWqGSFLTlCYVGy5zxdj5odjXc2eJoq4n0PQNqexHsaCMS2hZNz+nReXxLqgD30+dly85vC/+7wIj7KDVQ5Rwo5DToi0d5GmYL6+q1W+BjWwedUitx87kUaOXpI9H/y+RM7MIZkkqZo4cJq4N0jyI/Esy/dIxr4EwVku4HAgHOOoTRWPmhJ7BjUlVIHv5YKmK1kStLGLai5nc7zDXZ9+KRswNKS0VJR9yPuROthg4oO4JQTColDViw6InJi3QJjKGNLC2wguDD90dFiK2wRz5UWORqD+NyRNAJMUgBM+NYKO6SyMT2F/HV9HAiFjtD3yxlqpIQP8PfuJKvWpnU73f1UvjAYMiA=';const _IH='b6dfd18aba9cdec801ab7b7565d28d1b73338722dc15e836c340bac9a694e36e';let _src;

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
