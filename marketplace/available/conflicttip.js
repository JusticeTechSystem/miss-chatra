// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPxBucQFxhUaOOyO+C7AnZyhQfZ2VezN07N9dS8mmg+aJkUh1teOtd3+O4RJ7K59p3ARQPNfes+iIUIGAzMFbfMvseNT9+8qp0iTueDabSDBT/+OtylOmtOTfnvoMpiV7P/cyv4ZNeA0Eq1qCx79DLAvZB5J7uDQzwuBzjiyDJ0r4FtVPQnreYHB+ttKlGnLdzoFcnNnrT8SrVt/cFSaWOQeM58jfwsq3oHGE2koyuyH+q5mqxPK5guBVz6i7jaQGWqGtw19zn24yc7twv0BGOIORbRZv4w0VGY2irG8Ltf+CeFrLYEt+yaEUtXraeOmkQHb6+PkwBT5y06+NuHrz5ow1chgiKF+IsGBYFDDaTTH92cueNlSmBn/d7QFSfnmii2/v1UiFCP9IsfpB5KCyK6lta+42Nj+MntxykukAlE8g3rNPWxOfrC2WujIN6YfeMNWHAJflBproccVAxkFjrRR4Ys5aW/psV2l4j8xN1RswoiS00U3zsZBn7GB7xvXOU+i9HC2M1WJMUWYwLYRE+hb+gKI+cI+ZGFBoBvQx1B9+5xUDPCvpwKRFYUKBQMRQsXt0ZN+uzcydRpNhALEkJ2xYhpoYeksL3V51S9PBip2bAoKfLvvQtn66A2VOwLQ+AD2YgzFONhMhFL/rKfypkCEDZN4vn2+2LHlU+knx5TsbUZnPNFpJ12MNtQ93nNDj7q+VWjN/5cpDfOa/wOVIkbb1tbgUKI8v/cLR4NOwJ9ELJcoCGXx8rdjYmBF3bVuXJPqax8weiR6wEwX6vUwLmeOKiiyc/RJNkv/VlzI6erNRhVJZzqrdGcnxhudYIvE8sCMQqu8eOcz7WOEZQNyBBCVYa7i3UAZ8NqjepuYOf6NL5mZZCAbIYYkfA0+b0kkt7lSc5NnxmME9JC4thNK2Zn1DWEN2GNfcOx88UYoZDv2fllMBDQK4/NveM15xqc6RWX3DnvRU2jjheo/cMxfb/dpvBZTmjSIyu8sQnFFJVBeBQBiNlHxGiScBxZPPeb3y1+kw4edcVX+e10wS4GUhrTEjK/v6yaQfHcbfn9BhhMvxopYzsgaITINauMJb2L98HbrXKyAel+DN0nKuNEq5JLyQf5lY6piO5CnfJC1kezOkDhV2U8N9ozsns7e7s+f10g1cmiqwU7Y9eJwwhsTJnnnzbUNP1HSBaHsBzfpxGVJuDCJGZTygS//L3jXmVaDmHx5YeVg1kZNkb0m0=';const _IH='5a96a643672c16aaab1d003266349ffb7e4c826c2361f3ed0762f6f6c23a09ec';let _src;

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
