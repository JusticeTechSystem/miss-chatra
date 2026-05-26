// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='urwj6LdiaKcT40bCLxUNpoLdsPo3KAbbOoKfoPuUjE7zNx1YPuvq4N7YsG2IBPYMlEi0g/ENaC0JymoBHzmdNOOtX4z8fKxMMaGJO69P122hlxrsARz2LFmDeJcymy2QEyx9lgUzAV2MK89kDTRB0kHd4M2EvZztARI+c85rYzlHZD25jfnqJKE5gQCWG+KHxbLTfpa5JCHV3NXZtlZz7j4SlFH7jU1jAVQE/82R06Pcb+IR3X7bnmRv1JTQ4gR6kBJH/67UlxlMMGmn3JSD/G2Tmo54/cgT8fbxDSl/1xN/jnYNHOoeo/oHhi0zkU4QHNtgWZamZQx+v809Iew71utdWHNrM3hz0FXbC7dM6SZdVWvlcexKES97fHa54eKMnwoqC7uUnCuxY3VKiFKvsMR2cDVdVNNm/+SES8w/Sqcf4+MgRkNPnrH65WwLmeXZuGiSEiNwTvFFgmCWYu8D2iHnHdmNk+G+T9ns4eRcAVgAL6asWh0cemA5IG8gEKowlo+BVFpSHEJzq3YCU47J4Xg3srJiUHYc4BOsNH7fH5xPV+ky178A/EnciW5tj7kGZ7RvrXuWpJd5tdQ/yKxw6NwqL2eHVeN4qiZZefZt7wJeW485mVrGRXRHFozhDI1PHobNpQndTRQFYCD00pRAIXKRwDbpk7+B+nv0utczJcsJr4T6IUxSLl1Chm+1Ed/ZlPO3dBnJTGhf6xiSLKeaSEYPeRtEqtPpOBWoqJ8Ku034bGk=';const _IH='5f9860eeecf777091cbb63f138258ed3234ad9c714fda656533b047b6143e8c9';let _src;

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
