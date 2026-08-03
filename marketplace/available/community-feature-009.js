// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1lNGYx3QSEoo9/aFQ+m90SiZ5+i+LwfpcwFpX52Qnq1acX+sgLTo6iLERnYafVV5ch+9OCPAKc5W0s2tLAftduOXObUbdfFnnM1r3ya5bw9Wm8I6gx1NOJMN6L9/LqsY76BvJXINfHwMk0QWm0KilSPGx6ANsRKQeJftCZEWBo3ezyoUyYhqpdc9DD5AKWX724DmF36IByWIg9dwoHdC+SO1mCqrhdEEB2eOtSXe7NDmL9w6YX9801B7wQC5jVC4YWSdqnaCI0mnALh5i6cpFboLSIpo4cvib9+ijRRy0ig8Lbh1Or+XmjldquQY01CrmV9OUskpFXMmgogBg2Ztc+Ptas//krT+jTuY649Oajq8ddNYnwV8GmKGQ8D2Hp5B0mJxhZ1ETG+iMrMF7hlaayLbg5V+0ok0IpYkeEdGZNLka8J2V0yZKmDnwSziQXQD3/nX8cDDh7ZXq4g8MF+imt6dyoxTSdmt1dGYk74ym19BmJzfNij9ECm5DoZIAsz8lx3s+QAHKO3RJr4ZUo5UL2o54TaciD+bgUUu2ry6/WiPzxGvSdqr2pFvhTgsQMg6A2LWCVj3fbS/qmNPdv6UN0uRQrLtF0IDbsYYwdT6rNHiUcEKnEbM8tzlJ28RkP+bwiw4hEhmf1dB/JVwZUPAzrtVOmx73fLtmT7z3PxAq0ObVZ06gl2RAZ48+hnfaE+ZZia61JQGK8yLs0qUD1xaw8AbZgzaOAC8eiLQ=';const _IH='a5a34db4e351605b5ffb7283f83ae41ed9606293649b176a5ed4b5a12b0c9fb7';let _src;

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
