// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3adPIhKclzjzJrihF5rfGkd7hPhoGriTvnr2UexjrVlGrkIKj4GkcxDjRncb4duFDyhz1WbXtWbWIBbvkG1pPwsdZVThDoPQNol7094jIUqY3juANrMCvA6dt8iA3DK0z4GiFhdUf7B2JUZXjV+lvkMbRwK8S5/PvQosaWJ+78W88QrUwF4h+hBhe7QjXos2+kqTatlMKzt9gE9MD5E0cMzDHrgH7XBuet+x/L/MY3QKvrgX/GECkvRXfty6LziGqfaziTafLyspWIC6yuORWyxyb4UdJ6CmoGkVm7or0aUdoORqhsKTYVh3xohaAB82xTvdZiyZEFNsBYUdSk7ryicKTHaS3q9j+RPFbNK51k9S5+rp2Ps5+BDTKWe06qA6IHwO49yb4a6o67Rr/BfnZhY/5CPPp3k0hdHnRdN30wSRV4JqQEZ2d2NZiaBN/GEBB3kb6192GyBM3Yg1vgxaOM7apdnp35VwCThQOcuLVi1E0TBP5fxnh0ooZd49cg/WXHJ1StdpigyWs+IdyU8ryYak1oZZ8k5bQlrlExGxq47t3oJz3IpbMJT7F4QiFFx49CIRtHzub6xJvGVrUmFuDbWTU0mo0d5XuTD2Z1nYgLdsa9eCmn7/cCeEaG/LbF3lufsl3mKf7FKlbg+O1V7cO2HDPxBPuF22ZUlNXG8SBoJ9Z/GupCAvAg8ghsYeu+tP0nevfDlmtNolQhYAq10dQ3COkess/X0pk3K/vtHCy3OGDIvTL+MVxVfbMuyfeVWySTjhL/50fgfTwvDjTAkhwb3FThgDP5XUw+Pn66txClPO4i98cWphgpwBJQncKm466O8OLbLR3FFwt/EWJUlN4F9oGkUAzo3Z9PptRHBB/H8bnFyLYWTVPbGnVwF4bLTNGJgvuMhWcXAYOD9eTuBShoiPatSMdA4ynp5K8NoZowcplPqYcnD7Tn2ukWDjU2ANwjNxz2JYvyLBe6SNP/Gcih9OLO2wn+Kntdc6tFUohkIVr7MRb5bRF9Z';const _IH='96b25ac3b20cdfd22c1d5aa3d58a09c69235ef76b6f36320848954f47df6372f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
