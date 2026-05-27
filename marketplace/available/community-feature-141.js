// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bfs9vFGiqmsMkYLuJK3A8b3vPcJXGkPPo9xTlsMXPHvQN6wahfzMgcDGYemM337ixm+x01CORKBm6AC18s/XDlNsh1Qd1o7+zKM5i3qgeQZCJxTzFKqCoMWfrDTcoOeMaqWgc7kRrmThUMwzXRHY2gn2KmHUh9W9HVEUqMb4yZ8rZ1Qkx5Mtc2c91P7RASLAEEUA/AgAg3ZW9DJDyXc/yvkgZpe/lNUmPw0br2fvKtiK8DNP2J7C/CwYchAF9i58/BGm0sVHGv0P9sBJn3n5qPZHve1YDZ2HAJJOzMhpN2djy18qpLHcqJ2gYvJOeIO5aD3G1+jHD5LKvuFiYmybQihRqRrevzSPcW8djyWwA6BwWE07WYZ/Bq6i5eOvn+0u0l7wjrWW86HpGCvZ+QnESw0H5j22UPul3rFGY60ru/bjSmnsF2CVL9dc5ymZip3T2YWsA9EatGC+CgWbx/F0Qv+e1UPDmiUSpWc4eItEdF+2J9igbp5bOixjrH0SSHCwkSjLQCHwMxmAXsyVVsfhVSCx0JvGnVHGF3qBSNsPMeOwpXPJ/IRi2hV/91oWnLvsRqvCyH6YVC7RMzbqftORc5FZLfifd0MQh0MB6lcuQvr/uGgvjcRSSmwItRmrMExuBRWQyrDGuxbXh98zzq7bqGjd/I8gTNRwdIXyyr1ynezVR21iTYUd+l8DSWhtbajpNLEEmzjof5BQ83ZD7bSy5MboAtC5R9f5';const _IH='387a32a080c184222ad0cf4015ffc4b6d5d5d15699adaf2c6c545b99b524f867';let _src;

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
