// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQI7OQ+5G9Gq1wbKErh5Vhvtw66q8gGq+tj9GAXyyzyAM4EvG5vinX01BGmuZGzoVK9YGM39o03Kq3EgB8KrrdXD8QtcX3w2NMQYAXyOW/0emH1G2TZcw++uoPPr6CcsSQUACVuLkCvwIskeJ0Cf77xV1t+l1RkyRLa2+6ASSdEyxWY+/aFO6QRY+3NoQcFqiIaCLuUWu6zS6BLsMWgLmWPHldbjwA+iINQglw7XiUfSgxZQSEgO0CNzjkhB0Ylo0IlTop8ug4ELVF0Pv4R3IeRzrtt3Chx/zLEqQ4IvUgl4GFeWAJnxk76RE4Fbvycnnq55nRTWK2Yudx/X+xpvMcvIZkFE+6mgQEz5tlpEaLJAnL8Um328M5B8QrjYOKqwCdTI6OUTK0V7IJboPJawl6qvasIvi4x4TRMWC7/DJHaeZiOW2yNAUPyEnOatX5+zoJMuTCp4anQtOtv7f13rHLo8bPZ3IaCq2y+mqKl+8o+J0V8WRO1HnFvIUBf92oVT9E0LwLiI8i5J2LC+EOnRn5aeQ6PH8Unlo3qe+rV9oKZtdRdErrv4q6AWiry6mfw4h8uH3SPLI79YTEnCRZ0jgibMYa1bxyo5hTeq6geDCrJ7vwK+fqz+8qq1J3fOmIf1keWx0O2upAqtdh7/5q7eYGtbGKtFgK1bMBSI+o1FentyLYMFjaM7bFruj8yQ+RitaA6UO0vn/GAnP1PTZT48imbAgk14OfeU84mSVYnWYmGPegQPLxRNythM4KrE5Eo82BOlTjsYw/j7TUsd7p7baUQKdOfhAA+PV7x7OpFAgt9kPn73cda3svRjD2M3jRsgy++H9pqIb1soLMeZsER8LGgaPsSQbVo/8uh9ZEFeeMu32+6+bB3OrEgAlUUM8WzXIDabo8GcdGvkVv0ufSZ6sl3e9JhH6etsPPlcQvyKYdIyHjuVZ0mEhCoY5upUrKYqoGnLhhmeVGEHJzqwGkbnQTovbhXox9ELqlgbCwDOSZOwbvTnj70sUfdYsY=';const _IH='5753a1ddf1f9b258115ce4cf2e747338e77910eef54d33e648bbe88bbb67f62d';let _src;

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
