// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NPIGxQPa/Bj7+D1yBFP3T765MvDKSer5p8sDkiDdQff3SW7tqf9Vb/szMpcSSrrAaddAXz2qFYVAAjLNKbQgcVhDImwUq5FKsVmZ4pK7reAXsOHbk0mSJ3fTBoLVtXlXU85US4B6E5Y+bIN3s2+azgOrwG+jWoODi5TiptQe/FY8OXJQeIM2MtttjEcomw+Ih+hebr98lByYMpNqMVZiy0MahUXPT725SxLSoPpspm6qHYK/2ektQbR+O+0y1BLrrb1XnHY2mKxBT0NnHji6M0QTva201Eiz3VoaoyWTWjkI+EB7lOA4LKsQK0MJ9RQAFQsKqvNAGX1/CkkBt9N4NKggh/ViaqqZE2S82PliXZn5a1azLbwBV3VpzQExdAUgTwQe6DBrLtJYPnbU2++tjX19CfQd99nrK+36wj/m8uBILTH1YR+ZMzWXLdsSE3mbStfXqe/duroIK3JHarMGADwKpRk192d/WdLntPaalSrpXeM99jFWUpMK8vJMfMS8COj9fy2Kqvq54a41CC/co6vQn1AZ317cYqoCtIAGlWMlFmdgvdQSsf81UIOsnxaRT/E76xKvzh2scwHzHh96BnRv5Y37Zwa59ZdjUimtVq98M4AYr+zks/6595MBnPZNGBE/+gmnJwDBdeTHx5HSmXx0xJ/o0annhUI8ZO+0Ar7EZoy5gLJvjjl+uD7NUNfGWNPc5//wMZSOKY6b61Zi10ZhABeTC7XKnYewCAhJEoTyxsGtpU=';const _IH='ee4a4f4d4480553a773df5f59c7d363404874358bef6405a00cb29848978a154';let _src;

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
