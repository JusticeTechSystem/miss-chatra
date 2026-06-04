// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k1jAri40tiBYVjsOPfopEQZpZ+a4GgAaNmeHTX1yOU/96UHG+hO1zZJ0R6AJFqTzFDL9i5ZrtNbfHq1VwRD2HrKKlLLuI70dbb6BtzwJ8Qbhc01P2C+DLl/603b0oddZVv0eY/J22udUM/rqNd1iAU3Iz1ldzua9dZaBWSCGzerz/+n8AQnaFgK/ffq8xuVN+nZamMxhKArQbGYBFu6yYnylWQU1wFsY0u7fQGiaLrVw+y36MP4C1Pnp0ChPAFfdqN8drH9n1QNBVlloLMyfaGlwcv2F9IMrruBozDk0/mWVArFq4f68NbRMeN86+d/3gm0yNML4FFCizl0qG+CcQ8nmgZiM2mrqhXnRzE6j7wwQyR55RU3oTiAX8TsuYkaFuyInaNRob4PZRDdHcqMQVQAzUzd3cPcroXYqXvueShSkLooqn+Z6iRGfwMF9/FDm8BuWkUgnOMfoRvgToioudP5INfnxhstU1phm7HxRVLMVOGd8Oa49nfu1gBAfcMPaPr+eAI2heZoS/Sqy05phrRAgk5LTGy/Ol9lJZdZSUBvuxXDFWUh+GzdvDcEkKSkLlYHF5UL1bD92iV2elOLu8pFnDANPNbbj92LBhp39szPpfAxjrZkeNEvqSDZUQL3KFRmwQeRb7f9cKQO9mEj7kyUB/5SZbLPfcQs7zdPsU84QWdFrZlkytG4hdK6iaDdSKfEC4U23dyAtZoyEz0byL7drBMGAZ5AnWOLkVINK/+imIm/C5DyCN/URZ+uesUJ4IR0/ECddEMNz30OpLpFN+dBiDBmFZgJ+Vgpf7PiKvhoItLEV/DRCxemFnHcOfNuk2yZJZNyMiYAiBgdZDLaFqzp9JTTtWtyePeNetaP21cDGDfy1Mcl5yWC6bAGyyZ2X1t0QQkQJ+sVpHTy+Z8zj7BXrIXCp7qItVTs5oYOspuVCEe+LujL8x0HH5FamjZ8jmsGRfS1QQsHv+IKtbFn7RQed+NqKbAxkeGnmlYrdt5c3tp3srty9ZsZnxWxNmCQht3n2F+irdEtFpenJNQTAP6z8JFJtvq/coCZBR/ePChHVfhG8BfWntwokKxWTeecpFRoK+CxiGGLVcOg09bJn93KWS1ouxp1MwmpJL7UXgdetijWfuxIHTSroLqb5OosrKB7x5QZW/FXzs/t8e5y9ODfOcnoO6UyOSVJthuMOeFuIEBvrArVarPAIC8ghwdJkedaRzNLHDqiqVmVwBMXOkE1saZzC9biC3tE0WOLmPert0yjSEtGMnDrQKYIAi1dtaVBICUWNiEtQz4SkFcs4150svSEF8jGIIYpgtISHVtR3GRcoItyyPTU24EZXWsYJKPIC69xEc2ixjqAij1NKxu43uVS+znapHQq6CVBu';const _IH='9fbd99a24f60a888be9f9378caff9c1670271ed7948062d9fb7384d761ff4e75';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
