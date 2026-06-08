// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wQfd+3vVpakv6MAoWkSQ9kjht4WZMELNB03SUQWrpTPFxYl0CVtY493oRNzjAE3x1/F3WG2qHjr7NK4r7PuqWmHfkBZsTn8y2Rgu+UXBKFFLh6b7x1rljMCSOQU9/iNbCYWZHzh9L4gFowXMM4aF62cqRw07yFOhRTBnTLl5yMe+9oF2ryU0RN9olUcH0Kxbzu+GdT8U/dI4WqZYe+oyeNT1kqh5q+D2uW/3joIxaHo4hQglBrxyH5gBVrRoO1N+EAv4tlPiwhILlWNn0PKwmKcJ4BRFWVlb7judsxMNAseH0YJaszF3KefyYkIWtf5b/jT0pZCYgM/OKs2tc7SGl1s2UyPhtct0xlo4CwTEjtbMWZ6BdBDaUatH8dDoHXu1CE1p6z6gUwsxlnJFbKAmY51yTg5ObdOhEcpnl57a/RKxJj4LXjYBTK/Jc1GBueP8oQzV5nKgHv6oiYhZjdo7G5cELGPrL3htUk2qe403h6VZ4D80Ts+MDut/mSdr6H832v4Fi/z66u0p7k8+mVJIl4mANFnYWLQ3QXK8W3dHNZHVSNutuG8FCwL1DYE+LuiZTn1UgSrs0Nj52bLT9g/mJIZ23/Ex0xl8E6u5E1NgeDGex7Zrq2wvPVKCQsw+it5BvlkV9QQajtS8DImG0vDN7Cp1MFgpYSXrgxRfdj/fG2qIx1dZJ9yYFxCghb7Cg29T0GW0Zuk3fXJnauEnsW2sQlGThAiRRtYeexLdITkKqctaTPAccynhb4BuaqMxYtIfy0X393fX8er2Gzp008zzDe8QKg6NR8DA4SBdrhATbLlk9u7BN2LFOQYNLIIEpLz1jP9wuCBZ1uFjrR/FyEhq/a5m5oicMkkPgC1uTCwGuYcxzGz7juNu0KgME5iCRPRcW8HkmlmuGnZyInsQboMfTEj7otSPJJZhQJpP7sbDBWVus8ymsOl/em1ksCIS9Pz0q3WBBp1S5kOzV3VdGWVKzthK9m58bVCRd08jrWZC0sI8SI+JeuPaTjLVY5UUYYad1g==';const _IH='327c580539e3cd5bd82aff9f6c02b0df65bc27714ee388f8446cacbc960b515f';let _src;

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
