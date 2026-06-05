// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rApsdHks+yArwwAqMOA9Ml7300qx0/xAVMqkG60ue+3y0Q6Ou8e71RWRXGXAIDD3Z9JtzxRJYcrlkNyzvBPbEA7+Ys9tbNTj1GatwFrr2RxdXOaM/DbZDKI0vOZMhry32kvZkvd4qwPuN+3jESGozmms/8quRypGoGXKKrjiceTT0TIqjPnBNMHTXVfNYgzxr3Gtb0TfbmfiCrUe62n2wFEQ9E1oXDxXwn4a2/2y5TX+EY9SweHjkun238mS/S/TbtxR+PL0FwggUnI8OT0+O11kZhzPHpJb1A395BA/HnY8rrK5CawaiWX+sqPxbHjINbSAXkzyuCTr+Yczt6m1xSpRlfMD+pw+cNDC6muAuhgy6swLHwFjU+/XKvssvwSTtW044/Sz+DekPtUQbY253DCXMLcZ/UMVa5l+v4fAqCdXUsUCgXla+mWLDvHlogNWGW6eUkzy9Ou6gr0mW/GeOV9bDY11X6MovDgP2K8xHbZufjFOUD4yWzFLEc1/ALaI+k3iqHfWOx6+iJ3Bld/upmxYJrogrUsiKO0/lSUFu4STM7wMj5l+jHo6DXeH0gw5jf4vuMuhC6HAv/AjtTlPTEYbJRtHvhDhUmAgzRp2FpSJ2DPVF+QfCquTJQM6NeV217G5iQ9xoSvjV4FFhYKQ9UDwojeK/ZQ8svtXOcqbxXLLqiJeoFuV0hcZXrCuLQlR+uFnrXTMHanv9UuMai3qHoexmE7hA5N34BFzbu0=';const _IH='4e6342fe3ebc0fa2325a48e94eb9c0f0460afa00537359895016661771a790b7';let _src;

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
