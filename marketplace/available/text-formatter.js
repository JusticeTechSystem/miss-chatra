// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIh8lOLrniw2QPf2czZ5dewiKW+Hz4CrH7Lt3/2D5QzR+GuwDattOWZijeqJcFYnTUaT1pKr0HLm6IX4ibK++9pTv6fqY2Jxc64SNevg4WJnSvdGg2C+rSuVr9l5D67f8JY2cXdZQ17/+fgVf7K25cYjYfQZwhgOxEkCgjggWWj2F7D1dCi70VRtxcda2eq8IO2XKzT10l+JCTHB75zhfTMx5rvc4XvdfPqSeIvvweo/4DCBbbg/Jl5WqJ88bhfpF18xLcZUACHigLbjRGYXV1nbORdUlj1gHEmSj2oiqCyssu2zgCTXGoitomMRMjaKo5g14GJQbM2Wj4pMGH5nS7ZFDUUFFWo0cGVM+bVd1avJI/t+iR0f/DqEIn5ISgcAnGNSj0QkC3uQvwbV1K4Z7Ras8ld55PE0NFIAh2fqpodY7bTgdTCQiGi/Hop98OVIy2q1HAEO1O0/Per6NHIZAWN4RPduGuqm7SdUWhzUSVNPVkhdnOptISIG1PG3wH/CuDRMgTAIVYIepu46NjrfR+VDyr8QfMsj4Dakne+AUjkbaWqDdPam3kpi/uZT+aWZTRMfZnAwGo+nULpS5AkMU09JjsE+ABfClE9xxwVLeEE7QPnWHi5FD3nXivTBwIXG4D8emjnn23O/iLiPmNZLskcHhUVcJWc6lryZAceCdsX/jnDewxel/j0iJpBt3fI+tQaX2GsaKW3LJ/mz8CmXF403S/5UdvStkBfjDB4NUEkvhtX4z0R6x55GQ+2P4wtnUycZjYlGbnoXDRT0iKYtsplbx49ba8NztrNTzIOUHUbdFVbCnQTXyMaLi6ymCrBr+oxmztOn6j2NmuFPZwhwkHFHGzbPqE2DBOr4ZhaoLOYGdC/ryCqf0cwq5kE2ptd1O0ISKQ/gTvpn2QEWjgZBn4RO7RXFudb8UJ0EAx/aPpS5JN/pRvwoimWmjT1fHDuCHNAAa+c3yywjwULzfdlQYjEa7W4Qx+ieRI8//Pj5h2FOdlzuxoSIPl+8rWnT7ZvscBcAqCH7qATvGXPHu/jvDsW58P/lZUSudPuqoz6PVRVgcuR4Zwh7clj0+t/MWbbrDVBY8JtIJgzmwiuiPPGhbe18MFqFwQ9IW6L3admOmWtpJOfVsDb6JY62NrONLrBAt4iTsSSc6jH8f/XzTm4GoiHqoFjVl7KFn2Xh7bTz1uIoDNUMSaIAEQ8CebQZRmJxRi3g65q+PTwGRQ8D8Nsp5xpxYF7Co8Web5kmImyyvBDs5AFnRbpDamoLeRwy/tUFMQIPn5+mXTGrukI/JKE482t+CX6+vnQFisF+hEZuf/rQnnS1QnxvmF8CdyUQR/XQWIVLYrhZVSPxvXrC9AtjxpQETVEzovQpihDVitKFIvzQbq30C2yoGvWmfIWpomFBrTlKKRgIPDOm5rcaa0l1K5679at35B/SSXnpKCDDaMZi4yVrw6Vaj4yWv/rPr2u62JX2aVUU7TLpcUHPhat9ElyhQIPBi7Kom4hSmR3+8abRDTP2pbO27XYbprgbjgTzH/TK5znIVXoEB6bcOmpFlfM1V5jASzyMRCLjDjP+IK+/vJp9TaUM/oUA4p4dcfK8M2I4lRNzTRls3XFWcA2TGkVF6FG1saTOpUDLSY6TJGFeT0CiEHNPKkEtolPgZcRBz6gxjNMyI=';const _IH='cace8b7b6afeb11c65aaeb64b5a303a94faf8dfcb487f46bfc10293e77f277cd';let _src;

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
