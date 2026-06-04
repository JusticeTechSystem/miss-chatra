// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='90kTpx63nD5FaCoCtYdp4BA6W5eOFprk+ZfF0o8zKkhvHfUSnbavtKNeGDZIqw2R321j6zYqyYnjnreYZ//9HmkN+JEVRM+AfaVpCbb3BqK7RtV08Hl/GUxdOVmXB0FAxCUjzwX4GJH7N8m7/SPl0Xi7k7/vCZCbsPneYmvlmiGzpg9Q2ODSCYfp7ubNSlNsPQtEzcx8h46tXW1HAOlzm97JXWm6VJwiAcFKY0fUNZu21AXY8mMnpE+Z+fbHga18QlOiFAqKGH7XnJHZqJGQYwG+vqAE9KFz9IS6miTLZjycb8QXCBB0iVH+ooIq4KTE08P2jfT6/r5IwGcjOf1M7RmJkrzxVsHZFmaS79wThooUUvneUbos0yeICI8qmggohH1g+8v+Ht7mTlH/W5t6rDxvUwwrlk7Vt0zcy/Qw7ni2Rt7qErmpntunA+aGsZY3zM7wfejwvsl0xo8ot5Khf9sNW/NneAB/5v2WmxSJ/xlS1nUuUBPQY2KT0oTmFo6Ngw2VPCH9k0Mys6zjnyYZn3k5HaKm4CDRfDVOoeCb+TyhD/yiTYiJ4fsf/76agaI3IEHOEqaBPOOkt6VTbCnwXHbU++NDZoVb4V5Ed6P6rElmLvD26hUqngIFYCaj64tUO3hv8e3c25/rs12AIDwP1a/8KO2fyz1eTNaJ+UuycpqT22ICPwZCJaKLj2rQ8ebL3LAG2tS4ArxNkGzhxkK4A7OFDS3V9UTP6atKjo0Z2A/q+0TkAMN96biMOKciqRxkEtLKSJXGdVTrR3oEvTRdw3B2/6Fx6vbkfDpkgAwD/VZyfWqJr8TPc380ycMV274wX3gbs146vKClyDuEkgzDn8py0VIcVn3cPEIcZuS92/zuM4shOxzD864s/FbjFoag+PUTMGVqroHnspzGC0hDP4XIXB652NoLSyBTVJkyLA/e4ZMwMrhp/h2/sChA9thMvoj6vkKBcFovHj1nYWiy4hyd9K25aC8cEyRwK1ZYnkaSOmeQGWOp1aqdMG89bvmzWz/AlHtNfy1U3yED8IxUZLFYa4URU2cNOrYFT5U78yjEmNLDDT+vFGGPoPilxGiIhteVFd3MxoANaVl4aVpCzY7+dGKJgaeGnpXSDygG7t8GJfnW4JBDndSPOqLFEV9WZQxJvoDwWpTc7mwpCGjLrcoBmivlkmWCuZB8WVbekvnZS/kmFuhwcC44UNWyMUUWwJY+27iiqazpzqX27X6of8ztiTktDDLLpf2Vs0yJH5H07wu7BG5I3unGwMgLHx9bIGimMTPqGKEk95/iVwbEy+9688Z3kKyYLVmrXgTxBED0Gy1abqsssFEJN6dUALsscVsjhvFNoMSyg+HEsM8UErZ0uyu6MUd08DSc/wrds7kWaiI=';const _IH='a1b877a85a960832b2aa86f1f45cb9a563304ba1c6c5009d9b33a8214b2e02ad';let _src;

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
