// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWYqOvpNMcExC7J+QH1MAQGpnMjn2IBACOcH1xj2PxIQ0pYJVFHppcM4yk9EQj2RsyQAxuzevoIIBt/cN6UYdfkQaOIb7VRZFiIPeYM5qPjZLdp00ijQmoDqqR4CYbkwoCqQEy/tLLxavxo+xjtiXaXhExBIxfQbl1xy+tOffiTe+bAv5vex0ZoO/mjxxNqhun90Oz3QoNb80NFu2nocPieLlTo5FMpy93fsVt+n2fuwEX8THpJUMxcZ/oHYzJjki84koC37KizyBOdM4zxacv8t1h7S0hPa8zp9LzK/ThgbDWbNyV9BJ5xJYxgA44k8EVpeUasM3+HvPSFxHT9Dmd6CAdmeGAKEdMKBI2jCngPo9/rMo7phACBgxhkJy/JYGEsdn0uF0Gl8C4+f+zwxyGvtFwHjNOjKl+8BO4YmeYl9/WxX/hSXFM3A2TAC3zA7KXSICACodvME9OTqsqiHxmP42FcZ9lqcq8f5mjsllTaf5JrYynwQklgU9u8CJFnRG3EBFArPF61gKZmCcBM7PaJ1BPy8qCP4zwAN4xmaeg4oepm/pe4dhAB0VjjCR86mRxyA9X2I2lJuR65/OYE7oQZMYrjZkYX54fM1wdy5TqFL8NImGdkY7gXo/jferdpT//Xugs+2XYjoeCgaiTxcY/ksKDEbsLZJLgdrG3C9VSjrWKJzJ/8ve8Lb4gnm5zu2opY8i3HMsOO7YXC//GioKt67UBvoVerjAzrSPlgsn0oDLoeJn6yE3sDNlXJcPkiuB8FLjEHs+DYzA9C3fLuGEYwbiRfFxvkHexO99SED+rdC09mTmaVka6lMPT8F34I56zV+kKbT0spMeqVnSmnXcyKY7GQKsTreZGiy+A7SeNLJrt3/5yNHvOyKBySDl/MVV2Jj4q402Kd/zlgB6R07dvrp5+JMfu94FJA45+lday6sqW8Az2MHobmESWOe5t861GFGG4Q9DeYn6Sai1kALlH549fk0cPGencgss6ZeE6Wd60ZhMsi02TKZjOMbnSGGNlQWoZy5GaZcTFZx14QdKOzUtMH43jo8XkvQuVRv9H6FdgZxsXueI08UnQuR8T+hDVl0aT9/AOPUR+EJQcmP365+ijCmf+xZ7KXJb2mDelq9S0fjG2jSw0KILY+nAHU0TGu7Uwq0D2lqZuMfoqZpAH3rS0DNDvQXsFJiTpGDLbLwCGZ3Ri/SwNHa6zILGIt7Oddp0rW9c7dj0d2yVGwyI5loIr6B9Wvwm1LSIQ6Ze6F6ZnGlMVuTWm/1sN7+4Rc028Tfkez0BpZq6QY6LcPNIDB+SBU4QOamx5uPLsSc+ipr+qibuLacWu+XNxaRtgIkds1YF/bsp+jpux78FHR/scf5JFLbCmKKji0Xrz2+o64TrZF2mgcxZhYG/4hunk2WQ/GwDQYOqEgf1RrGo=';const _IH='33abd2a3eefa9e29f045598dd47647fd6990e83ee06b9c036ea55304836a7e02';let _src;

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
