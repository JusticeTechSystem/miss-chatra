// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I7BbHwfcKnXxR3XCDN9svNI/acVtF1rL4GskOPxH3433nrcCNVKzlfPsAovEAXeVx4COE6ppNBV+jOr18v3cM3AaZ5GdI6yj67mI+k8dEk+Iex0ssuFTwAzx7XNS+pTCN/tFBM0ZS25TzIxDiD+EF7TDNXh08YIEcRD4avIvuhVTot6WE06du4nWzGe3dRby5I814BF3EtwEWgHCqwp9GqxxTXgrJhPw0JzfSBRekp9clA9Qwir1ksyZ/aSQWDIBFE6w6z6FIIn0XXfI2uAv5wTi768GzH/foN5JrTXckGkKBtx5ROj3gBvhwmOdcT1Bz1nTU3d3B+39QuQWXTMTQlvzq3sIhIALdAv4VJqEeNLefeYoN9jUwdydFS3AdMK4HeQsG4Bm/MgwtyA8fX9hIcAgjNx3vmHHOqRB6nUMNWf50QwStEy7+2Z5lJokB6dYGSfH9E+KaeBkRDPoTsk/Kb3B+nKmQmC0lASPancDjmflJYHMAuz9E8DQT1NSYBUFA5e8K1zm1ZtpX2T8H3q/ftx1LTu6r7NyQVVE60FAZhyBwpJRzFeX1L3Ywk7YXWa9/BavhiuZ8zMHeqONNFobzT7gaUHY6n3oePiLntfbpiCYoeJm5uAIWVwiMv9I5+heoA9LBp4BN50loVjBhpdnbaDaREgtYdTA9pbWmUtg70HATlCJhKVoKdgSrdaIA4831VnJLpg+SDfrH0ZmmvGvDZb3QaJEFW+0e53UDbSdlRHQUcM=';const _IH='5c546a143533fba7222c5da0bfac67e40e871f188fbf9d726142d8ad62582fb6';let _src;

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
