// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGLP9N8tS5JkZhb6Dc80Ptg2QPI7erToKza43Uiq1BcpZXWgto/5nPYkXG8aC83yrRxjt6eewn1Dezw1pUT1pXeslo8a5+H6Z1u5/vnItGB/ZMLUSoNn8JINyko/lrVxVP9iJhVYBzs+UM7WpL5Nry4o9UQsIdxspBJyTVrsZmgDBO57GUB/uXK+KNXd4WXuYddKNOOqsUe2xVYpJE+kDmdobSDLUWendSp+hssU1vsc1lPfisjMffRpGTXJRJbRyUZg9ZGKIpof9cfBYvf9MKHTmCE0JO1KHZkQDQ8pVVD5Iw2w4q6w9z4QLLPp80S3DqndLSpKEx5r42XqisFpYAyqOc77tgVpwC9UF9IQCH87pk6kSBpK1SKIIOn9Cy90f4zMQH8ggaQkrEqU2+gnuHpeRe2hVbH2HDSWpddnHWTgkHbusW4zGLduOUBL2On0ciIa1tqHGE1HZoXvJLlZREQxBOetbWz4GJZuHyLGrulutcNsNs/h1p06ypUDBesoicqBu5akN109suGQ/J0JhuUg1db4cg/fYfm5PraZYPGlN1a9D22d8KedCogwzdwRrpmAYb2jwKX3UUsQBxKJw53JhpOHRfkIhBDmE+6OX0KMEnE3BcKXgLCUWGQh/Z+1at/fIe6Yfztf+6noMC3+Lb6sY3DQo2ievrIRLC0SYUCrUDjT50JQ2yHBfg+z3HLlapZBJlfFatUJJbZ97Jn77O8Jrxp1ee29nq1mFf53BaAcUH3pniU/GsgvRjx4MS3j7c41y7h8l5YZk2e7AuvmCL9I9zS5HdLyPAGUg91XaXIVsg5W1xf4nXMTa9ACioopGbU0JGHi79aNDWMDbJF5IoLU4CuAyRMCDp0F9Kg3EvCJrZ6C9hyJvPsOpGcwO1Tc5ifbdjr1J9gAg3IPsMCmxs1YlhdBuDa8MfYh/SeF+8/Vxv9coNV9tZborPuT2UjoS+yuc8KHJoYuDsrJLeU0zVcx1Yi2ZHM5gsGINuLqRCNnjlPSh5qrc7DeXQde5ayTRHlM2KFZ0LgBJWmdcDYFOtOFTIAinlTlauQu1ri5C8nmXLpyPySekzbfHCK3bKhrMl7L/BWvxtJdVN+knEijn+GbljBw3cWf995IFNaF71HROm/2ZM/17/CjpBh89oCf/5vNWKF0OwHkc1OB/7F5Wtm8oe42jhUYhnSQd2Xz2o2yNe0BerzjMc0nzlKv4fyEAKWRflaKwjv5iXXH7ux51C';const _IH='03d748bbfadf9366012cfec718288359ffc6d5227fc58a054264f363c87c1c4e';let _src;

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
