// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DNVmVekcDLtYbuYXeMG9AWcEX41jbJLbV7TeDF/JE/N2TOtxoE1mftG+TDMPt8NeUu4G21WEqyz1LkHET7cYJuosfedr+33cK7ogwIvM1CPUHzUwZ21/RyaMLvwfvZHywBcTaZZBpuxk/huXqtb3+ijQMcE1s+D2MO709tXAfFZDEWI60uqhUszew6bO9/Aw/HaarImaLpEzYQECVIWFdfxAChXaR7loS14LncRv0iLf3JGA963M1ikk94deuNUFZSBS/8odI0aVq3Ta8gAGEXJeumKrz1HgSvyPijtre8U+GMntPoQHeZUdyf6QR8Ws34WczMCGosARRm4oeX8RYK9yhvscKKqlgWcLCz+xBmfa3/gh6I+zZPYhxsY8tSo1/w9i6DIbIAda/3Y/q22ya1AsKSuUDa7ejXpBo6aT1yDqNqBb03DKY+pPhhFwfcYeTIsTb3eFDhIv2BzPnSSQ6BvdC9vnXvfO8W8QVtpHeWSAcfwp3Eg6sZy1SscP19lwmf97faW9aKiivPwlld0dXekJXgO0wvSs3/jyxFy/wSoCF2OdR9yArXd8om9211WsWqtpmoquqs9dpv5/tUVgS8ygm0l34Uo1FMb3uZnaGMIxJAi9IWULSoAJgasGJmFNLQ02VadENYTxP7wYbEpkLpzLtK2i9IEyQ0l58+IXbKcwPsNNLlaeuwxo9sUjzdr4GybJRmk0c+FbV31WRi+XFd999sZXRzWiI/rw7X+gTXlYWQl+VG2o9PQhnT3Tjmivu+PWgcmENV1BIpZSTzZXpjzEwkUHaKmZ+Wfz2dvVrAU2E2R8KiggrkW+LnfQtELzWczqZtFS5q17ZFSzvKnICJZKVYZ1IO++d9h8/weGz94cmEf5kFw9VHqDtyQYsATS+k1uWDWarc5JQmaa84QOnM6vTi+YOqXL6ke+cI+HE7+iXUT6VbYXQaXeiolIAurcXsc5noqqmP0wUxKEaIoNQTfwiDW4jx1XgGfluSewEhD5uR/HiaBfzGL/HzW9R7GO7/rab2HT6iztXhlAdJDIiGf+xjw0z8IFivRBGA/e/uNNBlihHNzMxCJh3EhIbyUKIpTFmjfbKwBb7SKSdL2wfP5qkkzRuYyDrABZmmDRaPCWTD8T3YHRcd3bEe896DI/Hm9rwlc7BqbndgG+PVB3TLVV95tE6984yuw7zdzh/sOQZYkoG9BC0jF0SzzhZJ9OkByd/r9nWjLomE0toX6XhWFxR1LU0HOsSLa90A/H/hMQ6NCaFL18t42A5GNz4IuqIl+MlbEXf1PxBC907ZUStxk7cFbvU2EorpMjGiwYnc7jYMDPk0nDJkGPGYe2LvkG8je4pYPVALi/9Dr/atKKB9c8piVkBE/VTOpkfi9R';const _IH='b95da8cc73f1506d31b0a2d05c6eea77dc9a5b6449152a38a89aff834e10ce16';let _src;

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
