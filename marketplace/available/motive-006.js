// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GM+x2bATLiIl9eMIzLmwoqVSlL5a2dmC8kb60GrsVOwTa6cYzst3LRsSjUpaVnjfEZkUmqmzhsFSr5XUWhqqX/lxI/l4VWjSEWTcaNgO+pIjLsXuIESBktYC1+Iko87KboIsdWVdN7sr4U80Uv4HeT9KzDfvsrDZY6djTT9zKKWEy+jZpf4duZRhdLkNQTBSzVQ1a21ill8lXOJh+GwdtjFxj61IRx15D3scjkY5zRYJlHp3MrzBjWGg4qezwz3MEU+EeKnJTS1r1j6zhPOLVrHdRIpIvJL95Wv9v7EZs4IlGyYr5BmbcUeHjYt6eeo8myh/wVvta06kGM/CsfmcBFNSAaJeKWwwmhom4jKmz9j9VJTDNxNTwVIuOxGyhafeMKTEUZIbUtNASxVg83Dg42/6sEkO5OZx1BT/Kdra6suzFtShOMnGmXZXZgRlzHIZzEW3GAq9zqBP96Spvj1H4hQC7qYrM/zma63yChg1IbJEo3iZinCVyWZujqiDGmcCY0maqOrZZKyUd1rpigWG+MSRsp1a3k3oyXU7ys6rh2R33WTpza9nBdiU+71R9LX13icYO8qlWPZCqG7hQ6/mCBTLQ67ZPmorCHY3Cu7NHivfdVpsIibDT9gbj0SkbuuN0vArBWhOt0w106IHas29mS/XP6fwMuddV47YNonVq0tHabfUET1u2mxYa/UVP+BBlMxlmQY6cm+sQoMGwyo0AwQqMPSQ6ASdSz7dA5OUlo4wVTJz2bsMP1Gz1wNkkDyBoNV6QpNnb2gcQSf8haAqrgkckLMo5tfljisOVl7KTyyA5W25uGWIVSZRTu94mzIagYamVzJxkEZSxNuScDEhhHCS/PqF7oSpokgtDJHOFZ3xgzOv5DMrgxnaVpU67bbTnB+kRb6mpxCr0OFWtu619U0Jxi9r0BNhAMFy8aNAAoGIgVPVlX3uLsndEwc13bP39F9r2xAUGoINDtUspiWRf72e0J8O6UHS0d5BwuDbDCYTtHRFjXWn7NtJc/lDqG6z+qDLBeIibIuEpJK7qWo=';const _IH='932103f907325c2520cd0311f5b5128656ae7023df5e099fb132b36693886ebc';let _src;

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
