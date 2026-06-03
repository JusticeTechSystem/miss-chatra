// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l0HZmOJkDDQpmUDZwHr3aHTs17ksrmSLtcPcwKl6AWwDG+pr0GtPokD9eMmowEElA0MK6ODlRMQMj1tpjEgdH4do9vcgVDRhYK5Q1BEABW+1eNk8TB1aQ5YT4w0lGKK9OYTG0nx++96qMiGpW+9isWuMHvtDs3kiduFMt80FIThgZ7LQpRLfC/w1tkFIWsnSalt33Jv8949uDIksd1a7rY27bdKslqFE6ldPJ8c6ASJ18cLptM+vAXeviL5qxvXQcjB0uw3DZsFArEg7fbqj610zmSLPAx74NWBhAm9G8MBPy1aQPFMdr3ZiK1gh7/GOUOhkrDUD4YtJuyVyvlp/dyKnDxqQWWGDxlIpRs9CvOoc9dDslViN7UmR1ifthGblnJgQdg+sTq+R9kL4/ZbCWRUVdF/UNF/y+jSCaBwTfNiC1+sNGeKn/ktwvkU8qREFJfhS6yH1XEvn2yYjx/+C9losIQJLSl77ZdAT5DxgPtXHS7xWxCPV+9mHShc6PVVsZVQ9ENYCwlNMTgLlYNmVx6Y0wkSxRJ6oeINywnDGFxcumbOBa3R7OyaJtE1GYlQvgHEOEc1btErWdyK/48sNCkIOxYQl1Hepkwz18Ygfhaik/ddrAQHobj56X5mPNeA2aQdo6AudLFpBtM27utCCBi4siBx4HFNG1ZLjxx4jzw2rIVSKhSyj8bYhCLoatnsG9JLxUetD//+Hyq/L+K4ogvyKSZERJwY30UogWMmDPSlW38YXuRc=';const _IH='b860bd7b141af4f9d73ef1582c38ae0362b7263839a8c0e9f951bee68b0533ea';let _src;

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
