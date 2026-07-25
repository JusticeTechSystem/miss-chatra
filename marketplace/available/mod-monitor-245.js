// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS47ZWgX0WZte3tEswqfY1Lm+ZQEy677Cmp8+mylCeIyO2YPVwS0YFxkaMla/V48v1XrqZlTTuyNWSPWQI+vakUcxKZh7NSAQ1OWQFDIqY0vHC9suPMXVEKW6v4QGW3n+TVF2wip8LQvDa5ctD6NUrw+SN+5DoChNc5BsX2/EAh7DQEo/h6V8CIfXXyVO6Uf66oa+dfFxXctpJrYlSdI/rGoUKjvaxiJO6TC5+aSUmy2ozCSonCnTffT3wiImlAy7NHS03HJBNDqgb2Hb6eawFjVeRzT5Cfzez/HsYYBdqKSoaplMd1ILm5gkZYEXpRj0HNpCaPOfPAXnxi6jryu6UqX6NSq2G6zIB5Sb7jI940bJzDZwc2Tb4JvHgBAVpFjk8rUId6oaAnmRKaPgspTopMGc078soYML1wOGDh2+44vpk0Vs331wsO1TLPPfL7KdVFLq+pUX32aKMyTFVUS8ygylvTvkVqWjyBBGzGmLmejA3NowTyZldN4wLSnyRi/TFHRcBl2Y/GjXQr550qDk2pwAPhaVcFixcL0FL8vgVgEKUfr0MSaQ/k47ht88jsq4epQ351FnTJ/+k3e693L9i3764p2TBPaBy0rX5zjPxv3+HRB3lhYiYKnnduD6BDxQyrLAj4+u9X5QcXICDnTN4+l/V1+O/MgrXkWJDFvPoxxWFkIVacQkDjlSFBCh4ANkmjm2Ty7Dd89YTudsfzT7RnIRVkEVP+UXqs+4DiX9c0BO6y4P7D2onQGb4781VIVhndD7wKN1DAGjdoFNXW8rUmE6tMOAzwu+7RCj092ws6NvQZtjSo3Xq/PV5D08dsZBLI5bjQ/hos29+W1+gdCVuaA+lUz9NqagaUse91LE8MI3kyD6KP26HGgMhJA0fO7qAnhiHVtIzQFg2I7dmWyEu7rzUWxbhdTdY+7d7jb1dj+n3xAS/qUboeU8Gtnmy2y/6zZxww4k5FzXTqEwLbvAezODRUonjcSi2edY1IUsTTcku5tnNiPRwpaqTOXsHGFIlAVUFkR1JoODopfqfkb5w80ZKLjgD4jCu2v3tY5AYMODCPiCZtwauoBdYkmdYFsg2nCCZYkjycaKwKCt7LMJXxlhkAggoY0zB8qJWYQGbOjKWCgiAQ5xiwtGmpvCjXMT9Q4X/lZM1ovBTz0UaojnQGoQoIzQxlXGcf+qv63dhRuqpErIxxXvwYEDTkq1udG5F80u93cBu3DsdDfXLrwaeVk40Cc7coc4KVgH4FSBE2Q6QlgMaJSkyncmIjBk1lI9XNlp9sMnUpPPijfZSSSvrsLCMhFBvxYI03vxkIDzyIe1hSFQDlPGoO2QlGHiHFzAICU21eZXjHMuoNjupwro3XWGRnWYdGpOUo1n6r8tIaf9DPyyOSDl4aeXAFepeKUZuVw==';const _IH='0d2349d8ff694606bc7a0cbe9c946c947a21e0653cc227906484aa1ada076fa7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
