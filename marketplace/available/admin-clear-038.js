// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXdFsDFUiB45XTZ9rAYivX0JrNXENkmsHY6dNQUTU8unpuvnO2Xm0Mp7elNcy3vhnG975kesDtkP3yl4/di9tus3a3gQv8VK9PL7Cwd/Z/gh37Ti8qzWX4FyFbD2rjUTLaO1OASTGvSUFJuld/qTEsUZEYDtPXm1VnRzkN4XMy6FLxTcrD1iNKbvpweDw7gVPj+YRpGyTr9ReH1qdww2r9hLVGp0RRZFIorjSh8SUwai6Gg9qiYJycxwHqTuHqFjKnRHccLIMEnJj78XauxMh3oS+6z5w0xyDyoothBJrK/ETsF5St2zuSq2CREGNoBpiApIGAdWUZ32UxTqWWmDGPNkewpTOU++fqkM39v3NSDLYNFP8HIvyBKcy9NKYHKQb7Dvq9Duo4RTCh/ziY5aWf6JwFOnktYVIIDJIog7aoJFQpaPHntyq8JORHbotSbM7RldyLELQC63H5nAoAkNw5Ay/8iiDeOwDd8FVYoOsMy4v5Z83xlbigqtJ+FEyUYb0maAqcswadqYUPPx4keS1Jx5Apgf3kr6XCx/8IsuH2ZReR7QPlroEmx3CiagfRsxyqb4UE8OIsDXh/zp6a28W0GPBj99cH3lKjIBaGKrrOb/Oq5AOEbt8Kj3viBEwVcsS/arFu3B4tql4vKts9x5dHIamz7+KxnvgN5XJa5bIKnlkGLVzRwhOq5h2JyFtgfeo5IesWw8Hf4F7xmSyzcKRg3mx9dVCd7F1AXNLHYg2+ZREPWn7C5LyXfXh+8+aiY1tMZ1B5NSxO2i1I96hzbtcqEjgzfsRGVB7ufKJAayvKKWJf0+AB/3kIbHnulBVB7sCdKNeVyfdKc4LYwXXPSPY/1PUqQtJ6Nr7JNuIP7sEawKI1NoK8dBGw7kieBjy3nXit3T5yZ6/8XVLQ+7Q2SdLn+yzv0NWDgqj4RgiXYIFprZlDDqQEq8Oab/SZnDMifFq+r2uwR94wujKUs1XEKkt9qEEpzIhi1Mlwr9DTDJ4tbdqcTlXJpg==';const _IH='14ee8e111f33952ae1a6e9ebe87ea1b5ca7d574548eeb0a6badafc77d4d69092';let _src;

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
