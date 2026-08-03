// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8Pdrv+uPYS/UU/NmifpnPZ1rU+lGy+ERCQGyhuInmPaoFSI51uXIw3cIRIZ+mZWcNW/aY3y8L+n8W6BHR5Auj138kp0v7o7H4DPXEyVsa/ei94jr7aE8RH1C+JRYP5RpEscqm7HE0NNULa7h03ecHL3NITeCZheZvHY+T6XLawJ7xL0A4Iy9tZtGRxbsgI7dc1z6Mgsq0C5atOIOwE6Ww0IxgrWH4cR270bFTatIe1mOoxPfMfhkQr6fSyB1LMyBCT/TluTTbkbCX9DyK+xVknbyXlxU/naMl3a3AHqA/ETDk2GcvWRLANEWmxIIAKDQ0HUaTNjmxqSXHK72H/H4RuDDf43R8ANellHel/nckBy+VnCiSbPxwWp3B9wU0iGwXFUzT8GRcRGABb3BnSFJHIB9TtdYHfByk52KrX7qf5Uqb5xtKwUXnok979i5kWg5GgGymBFj/8HUDr8hKoMVVWeGy4q0z4HAt8TGsnwAXSPMSc43LcqvJmzMD5qGdeLEj5d5teAfumMvgYqDVRAmvI18nbvYbvSwho3it5074KGLbXrbWyHezizAjSZhHV8YZDUCrgNe9BUBGg8gHWrNPttJ1WqXv3VOG2U+8AivBgVfvgBd3JweWbOrMzqDhGO6G+WG5R3lLBYaQy5Dn1hL1BVbzWjlksKkq2Bx7J2udUFUa2ZkBcyeuFxR+RW00vrvdwcUeaD1IT5upbT4N20qpHKiiBZ5NgZdEsh36CT3JUz6r27MeEnWxVNwleeZxkRwrTdbRyen2ZRyRA8JI1fno7dKz85QsKCtbo7+u6r9PlKpChR2YB1TjE1Y2RRvoqP9hW9G2l5Q1Fqvea+aeXFdG9rB+u+jIs6yncz00pNdE3N6TFsly2i5ivCwizjR7a77dUHQoXyjYWDWapa/7aYMBQDR2glkwHDu2fKSFk4PJDAisbxkwDTcpZhYeYWCS0fGr7mbHqA4kfOXl/ofIfAlQn4mes3Fo5hpjn0XYCZQoVT8nYcSby9/h7lJ+rXAh1/BJbFGcRuTGn/IBEyI3cBh0bwaIBXWumSlT5lSMM7rlCbqasnybhzvpgb3njfA2udRwY3+41+vH5BDmR5a/cibqhDco2F7RaDoRULSb/b7l6gGbpwwGYDYhKJksIxhNm9x9NvTHguZa17R4slYLl/yqSkbA9AcA4DJuNi3FTpl22NIzSDbs78ao/ZxWvRR7eadiys6VNbgjU1ryYbaTQ+lyHt7C0PG+1U0SFx9XHEvvfDra8ASiWsEQlRrfcHfXH3YjvgBMhACVRzWOzIB33Mk/4tedqCAofXbK3/zCeCB9sup+YjxCVRPmMXK1GEek0gQd/g==';const _IH='ae90f6fb6ee553d92bf322daeeefbb4d2a3b6925d14abfbd06c191b0d3754f75';let _src;

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
