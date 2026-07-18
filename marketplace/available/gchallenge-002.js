// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBBut1c8b+MfmYXI3icI+VazlOcqePW9FqM4EHYd1fBw+/NN7zcCcLk69IFN/X+uq+CJBecMWFYf+hhGMo2IZDY0MwXIDaJRgcSM+ncP/kYbE7uTK+nYhgN3l7Yx2kKjzoYHYNrvVBrr7Grb2r74+YqEpWdYWX/oO2knbvoZclqrjkVjerYwhdobb6Zcb1BdIul9zqkgk3Izowji+E7PV0CQOaeYG0t2oLPnPwbC7XiNi46TkwPOvOE7Vsq9cX6lX+5KrqnVsZSzhJG33pqoPhXF1PSpopnoZKY/jpHfEMf4nSDqvxEcY8uYvcu7+Uon9IvK+BKHVYDzoJc+9QchrlLP6nmVCs0wSkjFY7xM7vWxpd4cZI+uqKEZK2/WRPonBVgMpm1t/DCrbM2Nw+p4QlzE4GDSGreczjdxYN2uakZAl5/EMesqF+OH2UP1hczzUzgAhsw92MU7AaXXxrT81vjrnmruZHq93BJHx5H4OwizTq3ClWzV/05tVzS48eLFJoR/r44JMqwD+J93LhI+VMktF6v9/LMtjgbwzY26fCKlVerVHBh3U0tmOB05ZyjYUfdDYih13MzFVq2x2LW2A2iYuOtVkDokdh7NyKbM0WFvovJ6CRW35L6YYU9OQc6+o7ExeZXdn+Izx0V08sQjIW4PGW29EU78Ps';const _IH='871989938b1a3aaa7a6c3e96eb518e6267603f301a0564ca30f63d07a98346c5';let _src;

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
