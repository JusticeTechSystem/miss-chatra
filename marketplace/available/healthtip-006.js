// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXuWlWHxDD3p19IvwKFmIkUl3ozTwRARJpw8aYaRzGHR67Bqi5MmzT2Y3b/iZD92tMzOjWCxI2NlrpnZL10o8rFB+xmQc9e3gecdx49p+TghpQEjdtk1HBQGRWfNsjXsDLHNCotN9PRh4WLJZ3jprqr1BaUe8A18PvejqjlB46z3KIyIaYTzYoAWy+o9txaFkMz2ljdflnwQgW1dZSUAKJQY1zVSI4M1KHrs4KfPbuVOPD7w0S1d/omvulRyzSqvBbiFDJqXdElXCBZXTExjukkURf3Z4zS/Evcq911UaRLtx8yHZOzpLF/VipPlPj5PdNGFmelKZMlaj6/Yj/YWfFsBhWYCZTdF3YWT04SxUmgkcFGupKKf7qsbViqw2EFFg8X9YepBUFHPdoegAuXVYcsvruQdlj+AQJif5vluZbohjmNOB3Gz8hRw8jzs1+XlFkX2PYznpGe/fBQjapWx8bwG0VRTzeKNaIG2Jx1Jwx1YcEn+Exz+eBx/zCeJmRYzVomFAC5m8aeJbAdFIvdSou8nbTr/o5pAoGJ7zFmlSPBpuHeTqzakDd+y8WtWuf+asqNeXIBs56JNVqHj7qsr0K9kicIKnWlE8NxrPJffOz2F1djBBEZncXf7f2d5bJfAPNxlhr38z5bKJmtTpPSHEMxJ3+T1jVlc6NhXly/rr2qn1JRMFHv8miBiafLIrz1O/DHdmvzwWwrxGxz8yWv9TwT2NN1mJ+icO5pXDVkhyG8S0k1kkmd+iyGNyj1f6EBzwqmOujjJYBWFyyuLixT8DcRjg2JogiToKXh38TQoc5fP3wjHy9W9FkQONYZozcV2k33HaVrfCwcxM5XuHXvT1yISpqVpKoC/l/VjMFdeB5ILjRh3BDo+A3mH+iPgKLzN7LvtSmooeI97t08ZL/DBLMfDk2QvGLcStZPJx8iK9s+OTfvvoae56t';const _IH='79e71fbf7c930731ecf24566ebe28acb06d5a8df3712f7c9310e607b9d153d28';let _src;

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
