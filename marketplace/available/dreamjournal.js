// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjhqqCaZ5kHuhtKnuvnhuQ1sOhGjpnawc4i7SrfuIeECyHPgg6l9piKkfoCjo3/amevfZnpn3v3N8dCAnESFYw9BywWajEw/M5mxcEjfc/XIBOgZn81vkRSkjwL54zp2WVuFDlJfNpLiQVdavzyEvfmOjCrls0eWDIEOnlFVBmP368ueIgBxofy1f+S+laqs0+F1HmVCTgOuumUv2XzOhh6FqKG4gqPD5i27Th8PzJD4Gtvdsmvi3IZ8Y4990DXQymRmUvTGWbPSMzZwZmoz9ym4Dlmmn73e14VlLyFGXg5CEWCGen+WfKbhmvuhOttFlibrSsNe5tA7wDzRTm/+OugARwf1YOUpRC+oxW2sAafkTklLJo0jgsZdmFuIZhWW5cTHdiOOjRXPH5RWujG3cIH8D8q8a3JkignMGNgWzBlnnEh29PMAnbf2GoDd39+4JMYXumJXD3Vti3OxNAstlkjFRxYvnl6YoIn/Foi2vJ5by+siumJDanQud80Tc4V8qvRMSG4UElB1CPMwi32AmNxuHpC+hHL5aaTkBkVxr1+NK5L85a6BGwUOh8q4CNiWN3PEa6+tsP9TeeRZrrhzRoeMJvtsiEW3WlpNh13gry7AwBz/OZoze825YwUAG24HR4Rv/J5D9Up//EWeTMuBnO7sCx/y7O7bwE/2P2oyZxvi4Lr5IobOnmCff+3k5DCeuCIeiRgkyuD8+Zi9U3SZfAwVWtnDNmLAgr+4t34Se6GvZj77WiQLZkm9NaWRFXzsBd0La/XYmh2Tu3vUJ06EGhoN+VIqOSD/JNCQVExwdw2zFPirHwglMfMsJgT0Gi3sz/aY4NrQx2UcMk5yRD7nUkhy6WLT/y1BemR+zLxohkcDs6dJxX2JF0+T7XKlStmwJ2Z7yvMd0YkxJQflXH1friofDL6UoLavwueh7Gu3AfLOeVEBI3gZFtP8Zt1Zob7WrrbBsEt4XMyBJBnSlATE7B0ePYoQH6yjE3UdxtHmNMj5XhheuCEccxJYrtP3mZ5HgAwxeDa0E1vSjZZdOP0knlgZLIRWyvNe/sBaflrQYl5HdKBolLGt/H+jSJ4NtD3ygxkd0UkWeBF2kG6nXyPs7Mmg4zplS3ixZfhKejSc6sYAIYvgqIKNtv0mchO8IHgLkDIGQiwOOL10TnDCmpLGs/rDX+ZJ1Mef62VVlfGIWKmzUguAcii6i6plTJGbqBSkI0eerw';const _IH='70d5660cb569062956fa9c0a329953b3118a33ee04d12c8a73a61741bfa1a2a3';let _src;

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
