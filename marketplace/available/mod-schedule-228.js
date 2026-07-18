// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuGAyG0DE3dVOZOBd2uXM86JhqPEJd7Y1HQbXiDqBlMGQVyS7/vlGznlwTcjbv4aLjtofQZyUk/LbVQ2PELpfHiyz/iLQ0AcT/0vdXRBTZrGJ4cLqC19ijAZH859x5rpgMq4eLrYWSpez6+y0sxfMIScPyEszOKxUxnbkXMiI68oiBfSygdYp7aQsB5sj5GCDqn0FL/wEaZypm0J9Wb+ssSSBZBBvwtobtfz6SvLR2vBiucwUneA9pew/Fwy0rqRRKDRD49AJnKdcaQHwTS2r09lp7C6eEx8GwpLcHPBqFXfT0QDkF0nQjeO8YowGE9F97/vuTVFRuehobWpL5Ow+BTLkYqWOPMhz9/W34VTOwLx10Hyet75ej9BJRtL/VC6LlfQ5qqtrjcoPp9kUcRCel9sunN+EIlmH9m9exRbE0AiLWulM0J6hCrIAEXFgaj6Griq88rCcCIhS2J41DzOblUoIXHvr0PY8VbUzEDf1wFOE7ukbyq0irl1tScNu63HK3o0ok//e0gR7zYzBvZixV1QJE7o4GQa1yijpaypUiYfy4Lmq3cuTlEC/PuvUfuuWJc988BffxYqPzC5yIML3iZbkxbLlSTrMcvOn5OrE/vGolhIxSjnjvqXec7V4/SMHG4K/PUwlX8dqiqj9v52ra0PBOc7mHqoR6Qzvsm+Qvomsn4mDmoE0qlvzqgPI7ypAMoS6Wy/UNntEyITD0+wbB8i+yajDrryvQXmapjt/d2eY9tTvKHUCaZUSV6C98KhqdhbDcMV3Gx1+TVzSyFUGeF3Gtr4CqhjKmHRv4mnN9QI/JTMUhENdkYASWZ0rmtIJy/8Y7YzpYS4MgtQQEG/zNXORTvMVDy2lMjfcX31bmDyGMyoPO4QjJIsbPooGt0/gVxnb2t4u48238cCZcN5pD787jvNnzdKaEvjyRI5eV7Wgky7EjC2PZkkEdHRHKces4DbjRamaRqq5T2Yn/JlkY/OQ3UPDM3y2YKFxV6GHqcrm4d4j+jNRsiRwxvjisEP6uOWTDUGLHnDf2LzWgOG+ONgacppACIvJgeJTnWGgUI9S2LgELqkvAv4YMPWRVJZhmIrRupDRr1fMWmNx95uVrt9/A5ecXls715x6b6nlwUOxO7I5KNkT70J1wjd+2SfSfaB+pu7Yl192QQLDzvbZ9qw973vpP6LSgGVmbykN5xnWWF7fEwkMO1JgCIyxUjeNIuEtT5fDiz+Eym6nTO9ZcbK+lZQpsiVn/CSxHt4scvKpbCpjH/a5/1ZkXIPRanaC7yJO5zPUOXqYvzk2gClT/8hhgHY7GyUMuaoNR7k5b98UpfsqGkLTZgeweBWNJbtWUut5wSs+v8MHiyYNOfP7Dxgc3z8aiTDZVpKbqnb7ycsFgpJ24QfJR7VOh33j9GPo1CSoLV/VmDSXP6qM=';const _IH='b2ed3d6b5a88af2395cd9fee5c189e097a1e3b352edbffb0dc0435ed277d40f1';let _src;

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
