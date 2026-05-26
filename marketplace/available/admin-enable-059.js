// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HsFrTeC+Rcm5IpyZn9p0Ch2fIKVjm+b3ebzsA1VvxuIjnfH2X1uRfSjhalVPI8ygNfjqTqvb0ojA3hIAwjUxmvpsUKLJbMSvzeVK3LQair9i7cK8DUNr07MMj8/vm936sI0TFLhT5PYOFZ/mRhYp8CHVJQdPCmB8i5nVpb23tOGVDLaBLENmtAM1hY+4Gvl1hHawy42WOIbHxQ4VXsj8tUeae3gUACt/Mr+0rZxZgsttUKN7WljzMB6BD3skzUsE+o2IC7O5sHh9Z/D5IJObOukseGyPA1s7y/a3gfDcErakTxEXqHQ0PM/wTo3KjyqICD0Lib6iodPsUb4BzuXk5nyR18l8D0NuNoc1F+I4Si83rACji9Cm8ZGJDGiGMbshWcLhbopaK9Mt2SMxbb1u4rja0KPgVQchaq+pLUXhiPHHC2bwAK3lNnm7jndCYEx/XrgSD4XjkN/KAXlSJhj/Y2CjQ+4vrZ6LtZgQFz9hUEz6nxbDuNCu+HBD5TgGjUYqmCevih3wO85RsBcleTFw5Z79nTZrWWS32r2dkQJh1s932WvoZcVLL85fkEANtUk8Owv++l5iT6/PqKTO2t7aU8CUdTIIGaOh728nH3wKfetg0n8onN01sV5b+WpcmNREf4FKxDpP6iyCmC+jw3eua40ISPToieHqggkscSiu7A+k4WI6o30TuP7F/1sZ7iroa3XQvr2Yp6kKxQly3znTyp8wx+3QH1YmfdCZuyT2SOqDx2kt5BsSnADAGs+YllKbBFZYlYGzupIeIdMZJEhW607dWCm8CDJAa+UHO2kc+FAqGKXPGpFdmUgi7DEcYUjhrC2KnGllYljH5j75vi4grJ8Lc6Aau0tbpv/991mGpQ50S9+B6KN8vHN7vq0x6IG0OYomPCtfTVSaSXszeGsx5OUt0nnv8ncs3r0+LBs12eawaBPYqne+NIJWSlNpUsZnZlJODr/LF5cAzuiaDtinBzC48DG8GKHZoEbZuH6N7iy1G+1HawsjRyA6rNQH';const _IH='51bb9765dae906888de69ced71bf3d7e1b9fedd88adb6b4cd2d177c220caa654';let _src;

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
