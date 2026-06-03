// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D2iWb0VB31CULm27fSuhcTQYodtU8EXFZcP3cAwXamvaxminef6JPKt0e0jAYo9wlHnV/PS4jiob1UV0dggC8Z+Ha8kEoJDi1E3w6kn/ahsWXD16+mAd3w5henY1oVYt3jd7c/C96U9p8jBR+6/3wKGtPLO1TZj2VW6PWksLZauzDtbJ3JE56mETsQO7CesmefL64UPeYaMnBrApX0OHZZ+c0tpA50l1aHYH4ebwDjDcE76NFOxbhnD2Gl9Ykd+h9IJocYOySZhJYgrON33DsEzGsFLBF9kGsW6uoH9/m6pNLt+5SHYXzRNTp6ocdECiYOdYDgzCJ8RZl0SrAdJ6qq5vE6qnWFlRMEwE7Iy/OJQWbLvAWUpsUCfKXQUrMGALyThVEcSKoC7W19wjeMmKjs0VF27/Q8pFz827M+lxDgZJ3R9/fpHnImXX6ASQl8Joh8+nAnXKWtMWRWCNPGSR7W89NzlIzAT4SsXHvcV4hWVyek+LuXCaY4TiTH4lDncY0cg/Yq0bUbIKPgIm1qNfMpl5tyH9kajrzUWm5fEfzHsFcubn0FOq+ul3xr4sTiNXnGuqj9gDa272I5LNuTFxPvW/Tq2n91085ONc0F22GyCw1t809Syf88Ytdg89p1qwS2jBghuK93VdXR4TQnVuXTFZ0fZlrEXjQmB1Q3RPN4AJ9YT+T19xHH6yWEBPoMP0gC1dJeWqsgqApZvZyleD2OJP7IcwxNqjN2ygHPqcOSpSNM9z/Yq0tjxpggXiaBS7PS18NWYkFdq3wmEEcWccgynmXBDPN3iu9KcTIJQcx1seCV5VQ/AiyAQcxFM3yCObbp6yfhgc+0F+M4jjdzJQUPXNqezYNKQVnRuwItFa8tWoWVthoH1Mdbn1JqyuCYni0CgBOZP2TIeEW2hrRiF3dsEc6+ZiyBYRUhzagP6YTWM/lzAfZiK+cWYhEVCdSMhxEKfmkTf9XbJfB2oCM0LF+ICbhMgxUTvavIuuocKYzoOdMk/hdYUtkN3BXdai+kkh1B9YY2XD0iL3NeGBztPBgeG4ceATD0EiHBEjpFAAHdcMwB4MtYYv/WTYbtb7BdcHieOMaEc8HfLlyHWYVTLPO7ZKi2vU4q8aFLhKt1AFtfpha4tA7Vn67DwU7VOcyZp1WeSesfrwga43TFdVseKP7GTDafaLe1cREUtcQ+q16KkgCHdB+ctGGVMEfQMBLYl4S2oMvikatPPyr9L+6/BdF+WEy3xZXjgjstATahX1BddU750rKgl2v8Nye9kuQ2EvO9CBP0feDS8tY26udowDGLD32Hdj8AZIEnl8mOD2Yq/YbgWCLl7vkU37WsFEDGT6IzhYZlk/Xv+DxKMnDKLRLsm1PA4PWq88As2uROu5yP2pYatWr52OQg==';const _IH='4904fd7eed5c412a2e76f21030ca0aaa55c268287d8b56e58da6b943eb7bfd65';let _src;

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
