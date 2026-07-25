// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3ZI0vksTiXOEjemsZvIqwyhY4Wb87niVwXMImjOjMREhDLSfXiJLu6TYdXKrzdagMznkncKTy6Yhx/xihd2EjGlaAHvJnkt+0EeYIi1ygUcIECk6uNs/4Hjs87CWYi+02PSpy2GDMv5z0LPugyv/Y03SbHuRlIo4ufmfyH7W/wUgFNO2gfhDWBs6VhpXLLZaPFZPcam0YHsmsZcz1/acPuCS5nt4fl5AUII2APHbwDJNfO17XjL64syapJsbhaS5pPOYsZKTwaXmQgY0V0bolzeJgQKhe/kpff8m5x+xmI7AzM7Na4y9T1Dkv/OTL0t28psWnUcGY/f4ODsJZtFQZGvbX1lDFpS2yH3UqPiwBeumOkrD0aDDpriQCAGYhAiBOkKaNzCg/XbYSMHskrvJwVI1CGKG5Zlre8n0gvoXLVihuzTl+83XWlBxScFNWdxsTb1pEObNHn47KTJV/N+WUwmTJSeNHZi6D10FNzM91P6EJaeuWeXTjan9Kbt3ouEfVv8qVtIEWMxVhLroNfVHDKhuV3nKCTQFym1Qp2yvjubAQOtb68QB+HrCVGHeSZEtBD0LGLlq3nD3c57johWzGNJhzaRw1NKpnG9AdPMiSUDJImhFbP99sHE0eqla4gdw2JVAnZarlNvpUCNrX2iNdsEOEQz8hqcXl5+Rf82w2R/YGzfvS9aH8qmuZWCux3L/UbUMobebyV3PzYUVhsu38R1UzFh22hPzwBqAFV4u+moBo0QA2yhvyWqy+h4Lynl8pjoHKn9PLTotXKarep5zWPqITJNFcTnhQCYmun0mT6FWE3Yf/DsubzGsDf1lUoKvRRfy8NpdiKwv6S7ceuuT5n9kXRXD/jcmSzGy+tlWLqd5ol+31bcngMWo7Rg7ksn0F3r2v3CmN7WIf8PkkY65FL21J7whj+8+SHlhkAlZBnGNPEdb2dORJRJd0GquxsPGWnXlXHzul08Plm5s8kFoq9Q1CrDeKJLWnwqugu3gSiY8XyXtdZv4h3njWgExAlf8ltEnT8ddvI8mi5x+s1CFo2d/tgfHJ/QCS7RL1VRjmc++X';const _IH='abae86cafbc3f9c1334723d70a2cf2e1cac7fc6da01ba45ab1040889075cc08d';let _src;

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
