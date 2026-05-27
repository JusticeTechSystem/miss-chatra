// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FZ8cpOxiIzLvWVllp4GUBtb7+tWRh0D7qOdSkiinS2J26BBFlquuLkFkhPU8DYh7y0W/psXnVuCBfVHThPchB4M7DVH8tbK9ZhWasJaOT61o1Nal8rFmB88C1yAtJa8AqO9Fhr4fJu3P1LFr7+dh3iiy0ooFHKGh3Xg/ObJWnB+XI2CXskXbZjCM88V5eiU8qTj2IBDxvg9cfMX0zFTTGZ6hhlaSndnecMJoys02EN32qxbSEFBC6zDnT189jhfgdt8ePBqYVJjH23Lbu/8oxetebpNhtGL1g5rMVAURdhCZISEP41Lwb5VvFRROXvqiZBvAplOMzfLGc8f8WZUVKpDh+3amTJoJlcBEYmEKQwHy7wwH43qzDliGOgKngHSjsiybp8UOfH9yTTie4T/mrDrbAJ+9C5NC0Uf1cyErFfqOXQXWhgTt6m2QCwFgTf2vcBc++3meHXmY6pGrShjTZY41TH+DdtZ0MjRoNoVQU6zv2gDkhVVzP71phOcpCKf6llNIEuQSVzaWUg1iH7PQl4B5x9gOCRyrMYYT2VY4QQDVXOEwQpNr+xU4ZETM2xJyy5oxoJ4wg2OynJ/zdfGkCyARoFbo5DFpwhBCqE5nKrkc0dK3XihTum2cL5lw3oal148LtokxNdVW0fv5F2xZfcYq2ofQCVyY6m6Nd7ZbpsMprhtRlX8grWhKa9PK3wJPeN8YNuItdUgk8rXF9svP8YxEyIYLWlKIbocJtf93orjLv4lSnb6RLcN3N7BiR2ORQt3aMOB/bfO7lNOme77X4XRO4EL1h/EnL6IfkfNpYXyLDqkPB9SJR9NXXJNRjfab9Ts+um6qdxM/uq4u67q7Yp/C+bUGeGAxkg/WQ1EkrY7xek1joJUJyhVCCs+Xo1dMpM6kf7+KxKlkfMcI41iDOigfHh3ZbmLlH26+5Vox8HdJ0IQCKaXENfDnPJnk9YqD3B53/O/4ituKv/+T6kKjXN+8SETuAHtC91p3dSfuPJh8EqiUWl/6pRtspSOkInOXyHaCD0LhDEjL+KiroikRpIn8Oi7nnUK+JBv/FyoaBtIeNtBN/ekq17ckw9u2DtKDM8vjdRhVSWx/LEy+NjSD/xgkbDFbLYDpLyxTvzOH9wTy2dYSBebJahdCAlwGb/KnB+2Sdh+96z5Lyw30dRieA/kW3aKF2ktUgy8K3QrrUT8HAQRbliSCusdk40BbugbemQppq4VyR00T+dG8ROhDGuKMgJMqlLyv/9qNEe5ZGhleC4WuoeuQR5Z6orPwFAzgDlCCbK7krdOiwMViUALbp7TNAM67JFxGpZPjBq5U11qogzF4+xdlhz/sEqZUWnA0irAwErPkKyqhUpKxootPbsAg3TUdhPaUKoublLMgKH1Q30/8x5cUqw==';const _IH='b447a263976ba87a526780e18fdc6909bc4f2f13423aad111177775368c2e329';let _src;

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
