// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RmFwhl46CLhE0/54G0jXdEQaLK3L1ecKepj3ZHbOdGHuNIcjtLQnYCv6M8EFjfjk8zat0Off9IqqFLoyWN0jd3+Lkacxy4sGH7IPnvYTrjuhG9Sb6DMqpe5o7dkoyEl2BA4nfuM80avuqHQQD6XSqjKdLLN3l2lfS5j9u970T6DuDAaOuz/6Wp8IycFJJV02ZpR0sYOUt3frNTNsT6RFMq1RVUpE2TKH5NE0nchGrvpXPw/8jtlf2o0DoyJIfKm0VQysfEtgatNrCSQasefMUmQhu2XYHOmMX7FwiicF42+zuQDM0fEQEnUNxSnBkqjB0RJLYXT0ZsVCoB3KDYeyW8tHW5ZXw8pulhGXWtieR0FvLxTuPJh0Cqk6d+QjffDPVUrVAEV6ScH/mub95RLXZ0jN6l3yVF1o3oiB/PQvQKFRdoLg2BB1Bl4WYcI3GiMzsAcuQF2C79DpuOEABov9Q0ccWOd/YKelhEUZnf+tOT0fx8NMWnvVtNnpwTVkQLgFoE7ONqvG+rsHNIigCvchgn/4xYA5l6bTRIZ7dDu4PLjeaIAMVBDM8y7WIZBvyGi3xs2klY7/FgGyZ/GT6Ywzin22zhmUSwUhTbo1W8ue10bUKvQXms0mr3ZRACglu+6iwtxdao8uItEim2l4LmF3P7Wl6Dx1mg5JQEJclSZlYUAzrodKzG7sbGbancnN+dm8zI+DLQ6L6xgtbzamhsv0GOMkq+K0BqkwbXsmxNYAWxUC4BPQN/v7wcqvHwoAN4jFhmPRpNG+je6xvaTA7AeVVCjU1u8hUEifIi0WssPJ8BRibdjY41QL9VB3FdGrCDJLtXDZ7qnsUak025z3mvUSCPanDl7fiH6ebbCVtv3E8LQc5q3e03FXwO0FDlPbRy4zDmIUlU23QJn81yBwy2ligFLvzqK/q60PKjdH3q+K0rPzzxV1yoTtObUSRSlAB06+HbvnZNJYCIMBRlEKCAwY4yOlmIsxDHtwdGWcoovSFt4SQp/3j+BX83mgKkogDvuv8Tu5sfFPYxZ5errqc+LZaBL4MMOJeaUgl1es/m+djZGSdlzPLNXxFeVJUg5lMtARJmMonfTfBI6lqy4AfsfQf+pJhO/qcH9rFiCEVnmqou2y8+pWLkV3hV43rzhDOBqDcAdM1VQ1nDqNgoV3KcZohyGZGxZ9E5bCdttsYLda+DwkJMDBH2DErWNQVIctSpYmiYBpkTg=';const _IH='c38e7790d2058e3ce47181fb87dc98bc3e5def2d6284656749419d2daae2a2f2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
