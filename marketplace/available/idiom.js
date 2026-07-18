// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVPlPzjFSYzJwX2VuFLTZ0M8hM3ERMYdwSOGh532l/L7rU56hBTKB/U5uBnzBTHwYOAbMTnfeYPATrQGWYxiylWrwghk4VJUU2mTHzmjIRLzZbG7UxmJzC8/8o+5iAE5x4rghy0tASjdu0oCIEK6x/XPZtdN4kmz+g7Omh41jaM3UkxrtLf5p7MYV8jR4+khJ0XdkejaH+VeaEjqM+OkZPQbFskqggXQiZ1zyFqMlhID2tct7iwT0gtHffqaycmfAOU7rpW5/fMqgl52/PAeBED9jgEENqYpHPz18nyzMFM81Kc/Eix5QbtKsJuWTDyoW4sls29dAcAlLpI+qav2Ci38OPC4P6PDq2WLuBqeMlkeQrqgytqbLQkjTE3pwVejc6ZfchqzlN23maik9W23oRe5CM2pdae3lb0+D62cSMlH6X7khnvJDXvACGmekh4INBLRhoOWq34y3509FPfpYCOMIB7JYC8eW+67pXmG0A2aHW4S+Z2wzYx+KmXZz/ifjvhDiS+0nCrbYTV6+S+YfJ96WJMpiZ+25ffHRaMbDT4H2sbX9qmFQe0odJk5dNPCuRum2L2X2hyUGk9jc8m0c8TMFhYoBFVTqKnhAzVmQUYkK6teHFg1KUvxTxipuSKcihE01jxxxhklAWC6Z58ejZJF+rbQGyekaD8eISZ5aQhWa5nQi/SRrJwKzCVSUILeNgX3MuwhQ8q4xDO2BIhiCDLo8nzBEtjbVjI3EQ3PlyeShFWPsz0FWBPQUsz7g3TuOh+puZXXe7I5q+iqGkLknigu1ulM+F8phYcKeH3yNJn8HSZhyL+VtQTK6Jo2Q7VJgz5DbuYf1i/r6bYoC6CLLPNXRAQuOpDFzLP7j61gQXiIBeCRwbT6LTOYjLXRhBqStpT2jvM7lxyPDjqHFeFPVx1ciN0wNM3BkJ3X4bYG8z+xM/xPDeG8EJ6KVGxkQASkc3+/sMMSdFdcTTJ3MwA0Lyi/niriZzyBrgOzhJorR5iVVT2lA8Nl7OBwdpt/gxlIZeamQa7TKffSXc36Is6rdrewtX1f92ZryyFg17D9a8V3MFA/gF/ofu4q0iAMHjD6WJOymmnJLP5EZTmUycFbqYcmX1ZqlAv8XX+k1DyJC4by3qH4DXH/Xdp3lJm7IdVA9zpGo8Y7jucvzqimK8e02Eb2ziNaWRrwGfXmvd4yyGLrKAIsnJNnlxI51WNw==';const _IH='0af6b0a361a9ed5154c6fc422ca14218b81885e26a2b0717b632939b5ce34766';let _src;

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
