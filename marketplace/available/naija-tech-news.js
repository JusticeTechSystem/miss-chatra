// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDF4MxEBRmaRwzFi1hgKQjR5GiNiVir/bhLrwRWJC0y/uuPJdeXZOrYZ8kmMzSJbN0CEEPzG/QpruBMn46LHfMQJdn/Tbii77a5LoxvDdCa8fX5m0uwhIbtH+YGbm1JajyyujGNGqjrW1fP5g+comox7XRn+40F0K8TpA0zVqPMKSLd5WOjsXm+xpwAm9I0IcYtV4JaC9Cq1UOw0QuagyRgPRrs6ReEJ3QHskA1o9qcahgefVkyQqTwPLnPx7J39x9Ig3i9SrAByp0QwZ1vK/TKUTfUN6bDsqTXfZsvHJxZwhSxCInxrUxR5MEtBwzIn+rYbZwiEeMS56NNE43HFHDoOJnHHxuJSHGmyt46hzXoz3G34Y/LXl3JJiKhSZjFtLufZsmKA+PYP8dkj+Bz+90+spUcSkYGOtqn4ZvMmsfCvnt/408hVmFvklY+wuAEyNzo4ZmfiKwnPMhVNkPxdD8E0M/l+m60dbVVgN0mIOcyU8VCI1qIPXnNKCdKj60m0ZDQg+192dohoSDPx2WjIY0LptRmgVJNMua3qMASZJx7XJRr4jFdyX+2EQ4e1XpCgbBypmbPcztIJ3TJy3oO4IpyxG0bU21NsmgEdzPjggPQ+ov1QpK+oF2SBBidA3PVSvV2hOcOGBs6vpVC+g0SxXPjpO2V0V1WsTgs2GpuamgI+ukQ5VtTYFEyDxHorrI9nzwkR9bLizqY9yxuA7ckqWzn2HheCochL7drlon+zNekLae6pz8mSReN595WMoTQ4HWjfCJ/FsjA30l2Eibf6xeCZvgihbdVXW3yTZ4IuxnCSQXVaXud8hcHrPerRcNw+G7JKAv4yJ8jEyqy9CeD//Vuu6byHNgzY6+VZwl3nse1ik+XNg6yWeEVcWn+SpSwBVxO+inQT+aJiREK5Qm2Dh7ZsYm+Ie1pSTqAzu/steezs0sWP5n7PiP+xvfuTwOFOZcWyce0YpEGju3vMIG/yxlE97te5BQLh+BggucU9IQfbHgQj/jVZCXYQFhQU5fw2XI1/a1uU2EeQVIVKbfljXgId4eOl9qL+Kq9odKd1QMalnR8qC9Dge4aRvG3h/K42lMF5bkuTOhQdDGWvEivWxGEJr+H0ckf22ilLhQm1/Owdoj6DZ0UEqaLLLma+gEVQKHUREXAxfuhHeBc61O70t2wVbcMD/5G71VUSam5Ekm8dKfVOnwE6c3ROIPMfgbPK9nRn/2Ca21MQ==';const _IH='22385f888e39299846c81a52c2675b0508b5540e270f9defe4c91e3175fa09cf';let _src;

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
