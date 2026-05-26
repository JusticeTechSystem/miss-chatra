// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mCnVrhFnOmoU4duk3BDq0Dv/ybFiOlOO+x5H5P6YsA2RoQyi9ZirwD+1BUeTGHN9p7jS7WTICnXn9hYVHDqaqfaQhuf9HbZh07xNWRgYHLddXWGs/xiuI07Y2XKm8V7qy9AfppoGQAjZTzMe32HaFcqjsBNXTh0nugQp0LdzCwg0mZ+OAARGFjQsyjjlijTbMhCCitXzrOXPqnQo79pcEem04Umrwm92N6t/xpiD2TrfLcVWaWiaN9mXRKB9G0ovxovct5QcojTulLwOkDvD6UovaE+pAmuxxVKpATtLryFav7NWOLAXFu2XruLn5aWBdjVJeC6yfflJ6lQ4nyGEHP49U2ig++zPydbhcneMFvXwce6AjfaT0g7jKPgY9+IcwDipSjlPW9ZydUoeBzfRl4N1Dpna4/EsA7b0b8Rxzj0UMwm5o9qGXFCvZt6N2QP97GFnzle5yC93K+uHyMXtkZj+FRM2452Zv39UWpR662Z7FL5bw/pq/yDBzqzYLZaBXv3otQwPTMGjErmpn2iV5iCT9lsSGmowu3uhZdVdnzj4aUtKVuTen+qClWfk4gSqSsJyY0wqepXUKyPBulPYN0Fa7f5vnheRloKaTCMMRK53mWXA5hVX+lkJ2G4VBfW4hbWfAOrnSEBqqWSgY3f4iubyWjTdtxDSPNZ7OCR3uCeMowPfIKNcdCp2f2gjbBn2k0oCQ2CdSOsbsJylhRAV7AMfKemmzxKiORLeKN/vPyqtNvHw++vkRdzyXUCQELCjazA1Vo7Z86Gty9eUhNlBAUJGRMAHMDtTvZXze/ARy1XLf8sSeyMUYuLV8tWhvSfZ9QfDYhhdmf5iHVx4VNj47LVOf3ngGLyiRlQ6HRpbFivUkvhCKA/04Mr5cVJcgA8JwX1f9EfgcuNkGfLMRj49OleQzUMOyS/rOHXV4wlb7olVUdxKbRmZ1OXiffOLxAJ1YeCSWMpVUTd7oKVvbq2TuQkJvFvawdD8S9oHslttzO0WiahdMSCZn3aIsBAzlLKsviWDv3EPWUpDxLD92ZVGBp0TdMn+dKcfcYv+EHAIgthlbzF4bROnReKJTqwqy5rvtdLQ5JK5Y5Ly6OuXrbeEsbHvERl9lY5AgPZctPIEzy3tOeXtGT1HHLZ8y+wYvnWsxz1+xi69koh3oLofUlfP4vcOKJsiVkI9zG84EuvcoHjtr7vt+NWg6wSQ8gikbqZsgfzZBtm4a5abMpEdmSNzgKjIKkcgVvJwHT6RALwKvjB1no0cCxCoqKAG+BsSo7/e/rIkAuig3IvdS21ywfqmMrYhif34DuNmCBluCb2S+qCl1rj76eksUzCo7gNmw0EZuZ6DWDsq8iKpCG5qYI+863tWqinv5zAK7g==';const _IH='707dc4a1d008847ee52f84aa73f4311e4d6a6280e02897bef38823e86360026f';let _src;

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
