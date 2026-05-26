// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x557PAR4QUbi/XAasMCIwfkvlpFfND7cC0anVOY+6HT7lS/Lwy24PUMbuXN5gaW+Ne5rdoxVLANtessi/5uEAxK26ibc+5OxIZ5RMoDTDZP9AuqHGxfbzhMfIM4XTQ7ALVDPhO81ivBawtsoGBp3YAbnGIUh2zFwXCzmcgTpuGCh6f1HY4ahAnMdY3Jb6NQER93fUrJLq72/cp/bKCdYdepSKbVspHrpxRW6H4G+SQSeKzyLIEneXfSRHo1/dnoadPBU5UTwEFugYT5coOh8ZFHjy6u3FbJgY4xV6N/9G1xLeI34YOviDyULjT0n1AJRQYcI0u5Mg005n2euX9iRhnRNEdF8Pi8j2Qc8TdRWXS205ZCXva7AyzZCZHNWBSrDTCdygBZZWY+ly3wi6PngxkG+yqEckGhvFkTn4JPFcIZdTAxyTJ/YKvci7JycpTbmkg8WShQe08u+D4WdMilOGRGBgeLRthWxFFiTQRriKB03l537bfz2ntB4Cnv6348FbCOseJfYRkrEJa1G7UM/yDTckRbfmziVu8TZvmUfYSG7mmdusAtUh5IUJrWGJ+LMiSuXwzgbv6rxSb/UNWxbnncotBJEiZLLruPHGqyTt6OmRNkMfVDlMGSo0oY9MYlP2+hQOwL/fCMLq6npwtZ2yusD3Fxv7e/e7iylXJe9StGiQcPTyXUHO2HctBjXXS73756ZJ7TN5win2uNHntviSJCQhXP8hDwHg4OvDPQHEhnBLk7HMUQgxYQSe0H3t+rpVdHaKRpfUK+cIskoOd0VfJRB0XXpSK4t7Gblx05uf3rxt1w+sZWIwK71hsUNoLXBrJFVNEhNbZ+4vFopHlbYAShuOMqfJLhumoNw98c4jdPhNJoKfNOAC2GHYykdggefJzim3gHT39+TUyfbRXFoph4dcCKPCGi9zmAcHfkAfcsGcBSnv+BUNc474LcXRR2/wLv4WzJK8c/IKJsUwrZ2YFk5FNFZUhDbjc32lFKUw433Ab9Pq65ahgko9YfquUYjPvfzA6mEkuZiZmtvXPfIT+ghBAAnzlrFgKG9ET/8LxDK+A+jJR4IZT3sJ4cTfB2u/bhOZNcTSxbDnw7+JWaS4tR8dPZ9opNfuSEy2+AdJtFRatXBpnvRMTsy3IhT4ANsOnYk7Qc4WZnzBHLPEXfJJoQCUi2vMoxk5ZAbrMtaLG67YoDGZOUDQVmpM/cAWuWV9nFXm+S+rHitxYEjhR/CT/2giRuOocTEzEdWZWQbd34746FDLnIUrjNHlfk8M1LQyq4EaNUR3bD5R0sje+fSYMNOWNXeOkoxO83k8KmztANivRPvd0dy2xG88IswTyoG9R8ip0uIEavKwuhUlTHon5P8+l68kb8J8DcaSUraI7jJu7HltXDk407nxT3J5EpyW6rmGnEHYMFNGi/MPPTFWiEOmisrCuZu9AIxuZMq5SbeIXj8Rft35jX7uNJdpm9cyW0OsaphBGB40eJj32+gMOeWsaUdeCxYNFTcJhMnC+wCAl5yAfTHHs37OqUaudqmMKBXLItPt2f8rF2/eUbx155BqMhN2FyiGB+feces9/RxP6cCqUIWSOT277yyxa+wisn4obPbUyZfj9S3tvJ/C+WNKqphZCUaLv695qrgYAUPpI4nxwJsHK+etjL1DGdcLuInBS5Phmou0KTLtMjm4v4VqR56j4Zuwno5GJ4HYB2qx87Rxt1sWAsMsF7oYPbC77/bshTj+N+u4J5pk1mowmz7IVsux3JETQ==';const _IH='cca06a2b26b2b1fcbe9be9834dec54c39bbf938683f92f0718049710db66064c';let _src;

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
