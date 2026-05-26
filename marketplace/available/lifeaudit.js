// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yhljIf+rEDCUNOCsqdQqpXccqVVvB/6xHy6VSZn4IutSpHk05UllzbWVkZFy3GEnzUotZzkg6yNNLovHs5WtmfOq6TVrt8ySA8SBs73xidTzIaOB3zhxozB6xsV2Hoq2Vx59YxOrA1FEPuc80m80K2C9iHpupuctICTqjgZwo9+nQJlV86hbEImHCyzAajIwZGjyB/h4KPMZJUbmq5xdBynE+meAGILOdrNJ4itzkZY5ORttPM5qau0HeJaoOZz6lFeA+ePO+Fpnfa/clFjkBjEeMKsSZ3pZ4jwVD/LU9wt3lPG56VkcM+TspaL5TKmQyfKOjogGfeuG8R3ig45f/pxRXkVQzIerTeeIvsgkU+T1rkhXiVub95Jdz/lzYMMlVm7r0hLeUuZQAuIRMhfVg9rDY+cbaja1xTM7ZTDyHVMdvjuSPXwe/80TbE08shwPLw27KHAIIM5Ux2pS04h54oEubwAldUn6k/X5E4HYqiwMJ6nFpCG7LykmDql21w/b9JhCytEqewzEtaFDUQ/O27M5+8m7jZafwwaefG7wYtl4zbV+FCBf0gg7yQB4Mh4d0gzCN3jUapm6Xyxl44lvNl1Xi4m4XOtmWUav0Qj8dmO7+gcLxb+Z3WAnmyJyGmdLb1Kmdzy39pPBhEP5s5j4P58QpTkbHCxdN+Si/Ealy5wuh+wlqX1/Gy7NT0hCBqmD6oxxP8X5W+G++sQgz0t2OX/7jqYzL0IrsKWcoSE90oGv65BGsFbX6lFCOZjdcjlADjINnhOJyCoV5bbSx/HlVkJDxZEtRZnUjxdC1MpF8YrUQYUXd1cN8hh+9IC+uW5/tQjhbvvM1mxcucHqKTPqJdIgSGLaxn4AGHEp2VL3WVPuoBoQLNm4sMND/0TF8tkZNhjgpjDZLw9BSQSPkNsuW2eUScE7n4Vxx8vMDFK6HOwpNBJUZWmRPl/QqbIookbk86e/fEqdNg7Mn0xJmnVOkFWm10ZjEdtoLTN5b2rq4LFDgSln+OTvYD/Vq3A4FNTn7zzus/REmnVpkq971RSL1xFIkLTHKGIhSlZ9xE6We3SseyJ55mqG87D7lC/+HDaxL/LZjyANNye5n32xJvKoMftPILB70AUNCrrH5cy57cGJfQpIYlei4PBCSOpMkTRW3PiQ2mhYowaCp1mSezSG+n8f+9owvGcjLR7+0ky/QV+Aww9Ww9p+bfEz79Sip1Lsq0//';const _IH='f889f58d8aca924f2003afe6a34f299b008a0a74d2c18bebe4da7384b8532a21';let _src;

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
