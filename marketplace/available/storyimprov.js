// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N3YKlQTUfu1xIIinWcKW+BrGnEFM6yRSYmiMOF9TfQXKxTBjOrHgC8xS4xMtdGutwVt5yfxooyLiag7rm5zrFFDfUs7bHjPxam0nTH+3g252MfO+rEMq4e/FLhwHqxHTs5fMcmZnP9qMDmdUpX4lbI1dAn649Xf/HmLhBjwOiKbvrh0tNIsnNyXmE/FjrOBY1bO6tH3KTez6pnYl5ZFon0h44yGFsHpBIBMRdiWmEzQjw8ueorVi+6G1GESe2RJG84xB7qNv3Tdpoh1KswWlXfr9zABaWrVLK4fOkYSkKdHwtpHleKMSGN5uAFl6SSGdAjk2OyAJHGP1shXfWd25FKrp8cyp7vkiS+nxPQCq0sJMCnb0fzwUTQkaHCVM8XMZan6Hnlyqyw/GMDDVT6wpumpKekBGxxYcLTGPCpXe7EHPt02XF4yMFRqFMG+yOaxREPgS18Tp8DsNAqaQpLQvb6QrZ7S3ZsjSxXci8Yk7TlIP4knwTZPqi+JmSPM1Q9mH72+48sf/0efjXVMlgw7FaSpUtlq9eoqq5XcQ3pSL8fm/saxa/1hVzREVCfFWbR8xJBc2PISrC1+1fS6nmxvwDFVfIHNDOSeiTIx8xF9h3e/vWEb8tpBIa77s23w6FQwL/SNueoiPA/iLlHeHgRVszF6fFYrY7VFfmzvx1aSwWs+JoLf8f1d92j2I66kl2tw7EGS0O0zqBEPN+iOWEqj6WMpBlq+NwH201MZhMc+TwwjUybzhxWH4sLKFfDxZwJoF8MqUxeUuKE0wRUn4tHGLb9UeVZDZKJ4+0e7EA18GRlsEACBH1b3CJ0kyMGB1Ceuos1ROCAjqCxs8Ium1Nq7XPxOB9seKBKAJy70TMB2z293h0IAKpH4k4LwVjEGPPHjx2EklvTZHFg0ZUDVOCYUWda12wSlEyKpUHIWN6z7Pv9+qzUUHRp/9dr6gZ3TpxNc/Kh1+2ah9PHOpRYNurm6RpqSdcFg65fo926o1Tp/np4phxEHxT/7tMizl0lQNAg7eduljgPtQsE/9TFG0FyUcsi0qq5etviAxau/TO1J1XjvRBE5HXc62NKUi6E4Ywt+CTv+XcOaEePPhSQYwMdlkFaWIkPqeMMhIeHYx/l+UbpcnLuQucZUjHOu0Kcv2EPQ4Bhoe8TDlYmH3foxNAeikzyi8bP39kcNnrGhz9OFA2SEhTQsTLBs/AkPnLNvdWxtikbHI';const _IH='e7dcea14c06b14fda28107ec7bbb3b4c2d751a0af06db0a694fbd2c2687b8266';let _src;

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
