// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='or8f55dr2Qn5XOHDlOW18Qw9fAiVFOLpl4twuM0vXXII3hTSHbVq+xEGSAklJlWzLMSEljqN1coU86uzZBHQx6EX+NJuwPfoBjRsy/sQGj9skDPB593jb8oKqMtUMCIrJvi04aXOCEQqoBRAKdwlZKpbJbl3SzkTlVoczE2eC3vCssaUPuXDjz4dMoMtJAJkDL7HsRKrMgaI5FJgdpAqsYvv0BW45sVwSGdvlVHLCJfy9ZkhzgLbhvseWYNwVsj48tSOJH4yUa1QJkpGU7F3+kYOdmwxRWOOL+5vLGw5xG5xp61krdEiUDDGDLWZnagHjcbTNr8k/4dV16UesZrkq6EKMLiRLcuHfi7j0uBbGos2fGqHu9jmB/U8Mtnjh7N/DF+BtpYMSgYEqji73+/LRCR+GssnLU4nUEVx6I3w4adMO4kkwveVwpBAO5UubrnFL3TNqCtVie3LD/OaKgQqX5L/zOydrV2T9LShlUK3hvRH8Gg/Oq43GP8Y/0iK2yyRR37iiRU/vQSUTlEaKE3x9kd0jaAcWFUC02ZRSFgeX3yncV4J1NTUChIqfuQmgTJ6rcJC1fGT3ZB2x4KOGUMMNzJlMSClTpVbkgp1hXe3QuHNkwzp+ON+Jo0+hLfwHYCe7E+zXK1f4y1H5pei0Ry5wBy59mu5sng+gDj8glU0urQm9bBWrBOSmdRnuQGoMEQGeOp6BbGjPevkdK4eIv9PefZCh8BCWbuzzXEDz8kTBKCzfI5fErUcp0xgkSTk8wkPLiKcFJK9KAtTMa3qh2ajj33ScFsHcDkirsW/xbfLw5LV68Nf86Y7TvPd1NUhxCTVsdjdbNuRGC0zfvLo/l64X6Akg4RqaDbnw4hwl8KKM3kaCaj1eaU2wyfITyoRpABxo410xaktAWfYribaSdLF+FvLNa865KTAa2FF59bwS1L20QMMY8qyQkiCtjILfBpkIJnXf/iByFZAzc17IfeBe5dUag+m1dDRCU1pHtnJlm3gz07M43P+4P9eOoIGKfMgpLA6iLFsM0EGqNHqc84=';const _IH='23ef5f44d86f2c0e768ab0befaaac717189543eeaf0d5cc1dd6210b9be0094ea';let _src;

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
