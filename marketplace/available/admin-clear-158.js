// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2EkRF0k/p0k+3JZV1xL2tPdJdwDuN0MZDguQlmlF9ZiuGPi5yPv6Z4Np7luxfs9tcnKAo3RniTicfrJ6yeOA6XTNE9NlYwd2XaVyhFu4gwo4rfwYD09dT7WGc2TUWAo/zoz0nFeDuxzoNFUEaTDHsdEsTMg/wGDyC1XtSFcezuE5p/6s3LunlYJXcT+8YCDjps/hlwU7y/WCFgYPDmlEfmeIaODjpzdeQpIYRH+3TBYiNk5TadyHUOZellGGib1iRqhU6hIgVVBw4CrzDWTSlETbM6jyOqyHKbXLn9DNg6mEf9U7p4eIYF7mf4J3SCvHPLejPXxW/NwYgsHnrl3leqYkgw2YSxcit0WJ5SfLbQABOvjeqsXXVTa9AKChCYsUzzjsUk4ZKoj1G309yNZApIpmGm+PyqmFznqkJPFTZC5Rt4YLE2LfkyW7pY0rMF6zfZpF5kgUDDHehERSTearnAydhuip7IxrRFc6nuKMMuCcJanwDn5qPqhCgiysN0B9TzdgUjvFswV9YjC/Qeeuj0UHMhnMCP5SWQiC2wsYNwWGA064zDECg4boWKUaU/qHkBylgRs1MhHAM3EWf9gsppvClqvIBXzLlWnb31SrV5UmK4SVUDyc/oSKYr4hemwXWCt0XlzNZW3ftsJWDlEysnsKiZ3EgXr0bCFk1DZ9ivKN69sC15yRzSIS5JqXouXmezKSaK8jkeffJ9GAPEpl+/3Cxeh52S96hhUtGmlL06fYicYJpFPZFrfX5LSXaOhW3Sn158v7qQylyg3hsTHMglCyaAaqotXXm/zGtyiBeWL8WLpRhapsZXI/4F9UUFqHPKqQXW1osTxOjpsd8qORQyGOtKXCN3CbWJjvH0f9IZJBmqgwampe8h88+P3de6WOFdrHDW/RVSm1oyuIt1ZkAulf2IYgoWoChlGVjht0mZk7dsMpVSs4dEsvCI0YJnSpexwmhIXuC+9cx9/YxNTKTeugmY+MLAnA7O44v9h6c7qYxntspzhmvvy2';const _IH='0eda6bb322c0d5356dc6d698a1f8266a638c080844a2cb0e42e32cefd68b4529';let _src;

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
