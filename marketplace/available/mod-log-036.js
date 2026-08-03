// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaV5riBBCx1E3eh2iCz5sH1FBkil7tBvuMoUeJ+lyojVDvVSA4SgXfJ+KVXQD44ZD8C4dekEDKqKoYcFvfGyTGW2qmzjor/hPSu82WWRfAYNt9tzxTcsRERMxASOvkWcvwx6jt43ECqvwtBcMX8XMBYjtfAv/carrOCK3D2a2t5+Ivec4UHF+T7GxHeu+GwJgyphJn17JTnQG6rxFg9hYIucLxCBdXB4jPByf6naEvAxuZN98R3pT7hHZkyIm11phzb9eKihVFsXYHa7NiSN/O6XOaoPIKMHYFDsRcMyoakKqHEL91DGVCCxuoEpGDKxvxysefIdRX55GrzwHj9+6E7Z59qBy0yb30bVQnlInLop9Zytf3GOtjPPglARj5uIDX1eDRzkKjNLhrdQUUPBV7RAAUHOSOJl/oSYrcLVTXGf2xS+xKPlGqvW1ACCXP11HZahPUcas+iRHBnLfTBgtUf5yEIyTsYl34x9sDTJLg3kgC3cCTwrUohk/oUkJfHbJVze1XIEEUaOYEm6QKYdDuMYDqNdZc2l5gxWWfjOcOY6qEY9kM1WfWm3V7UUf/45y09NkRIrxe7jPnuIYqZG37uPOffP/dpNjsJ3cGA8+vSIHbbU+geWuA3r3oua9ck7r4V0JPzPkKFtolCBB6O8V1B7gpNlfwccTt+E9m04gMJlhmKpxQ2Ry5myS2veeKBMjb5X+2vVgRXl7GtNTkzlOPtL6mysgR+UUNKj3s+95uQPY0Z7D7UtZ/TsSqDwzOP3Q47UC4b4syhLGZ8J1p2GuEml5dnjQx898+qc2022AB5kL3fe/dXiVH35tbExQ07xFf+9TwPXR2wvyUaED/ojGd/9lQIxGVBXeJklNCYyj/b+D1C7rv22J+k1avDFA8qOjwy0EqtDtgq/LwKID5kJi2/hUGgL0CNXdMy57YQ3IDBCgC3mVV0+jQ1rHtANTunlmKAWc/Kohbzq1wfzD7IHHeO/GYGPn6Jl0hyY2DVNLxsCYD2DZJ2ledddda8mT6benNqDQgY93jClZVA+7OPLQOet6MaixWgfE394O/SOYMN5F/tzAmFiiGUpmn9cSUD9k+/UkcWeHsDXAZkNr+QTzgZRlf3SKap9moKQpT0T8n1cLFYlvQRiadtRbBTUQV4C7prtgp6X1IMYE41dsE7/H/Pd99c9xlk60O6JAmIFbiJYyDL5GwrxJXt+pPO+t/7KMqm8mZLTYaUrzByYw+YCunDr6OPxK4iZxb/HBvjkNQwONZgtFaAyHh9qaFUZC5pULE0Fz6HK4ni144z9Xph/IJe/pKdUXLUIjPQMgO4asDE8En/Grs4BHktKK3pK2+qF/GpA==';const _IH='f31950753946f0099d55152a6678460ef038717c7177483f27b08c2d84f8d9d5';let _src;

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
