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
  const _b64='35jLl+ZIhXN4IpCv7VA3oouqf3BMEv1BabKsTGydUOOPBzGyulV2VKW3gMtXJgp6n6x6gbFQZcqW2OQEhU2QAH/Dn/TntnQ4jMGDPfgiDQr5FO8uXdndJMl3jsm7gCPdwlmlDJ9WGn+/OEFPMYk2VaBdzXRVd0bzRA9nh5itWfhOeSd42ljmzJX+j5e/GCpaTbcscU4miEagB1w8h61v3eMPVVpLlOFUEYTKcnamxlaAzZiI/zSzG8FfimnNfVDEc7I6K+DB9Cmpl8sheu9pJJHprEVqz+6e2mrtvvSUOzfwpt4hzE/ZU9ikUaQxTcy8Nt5Su1QQ9e7hyby+FCTbeWV0NfAN+BMaO1nA/3k7WRuhHnGTSEtInHK0pGDZQvFM2yODofZHwmAPgwLO0BLDbybSDOcxEZYWb9KO4sBymlhInubb0OBkFIExgv409jKiy0KStC53I8XZO1Xqr6P0UWZw6go1xdZQvmHooDGAvU+jeyxbRA5hcVpgySM9itOYG3wLNcgqoWgWmyO2Gs1lXu4Jrseb8ZY/UMG7253ejhC7Au3r0TLfe+LKZ13KLiUQdrNTryX8uGYJW/mS7kE62ysM4Bk9wA+PvmXSV1Xb4V45l3XI/m1TYm/mez6ZsbL+xAaauF5nUXu0RXBtSenBPetWX9oNj407kR05CBWtl7wYwccwIudRPLPbh9cU7j2TPmrkdSyiP0yQE7vcE6Rogh+wnAPcoGdLEGLvNnJCZfhUyIoq7gkbfJ8TFGCgwCZS/jl3jgDgh3xLaADWxFKkKGbmd5I5c4tRy7JY1H0lHc+PdM/BH+F7zchFeYmxn0kU+YtY2VBLXGCsyUTAqF3RGDgaQZ7sMM5+nvoNfe6lVu+bqrYaSQMZvqC2e/rSibF8pLbLz/TbF+9A6ponXxJ9GyvOEtEmJoJhhEZop7S9ulZUaKLIgLQ0/aTknIAh7vnaiBoWHzyAoqKQ/eXSUBHC3RtF7IG68nXLst0SOMx030wMkD+y/AEzXYPqsvyiGIY53DIPoYo3/Kyu0nI0uXXCGHInOLNvNmFD78533FCp';const _IH='7e8ad4e92d0bc1ac508ca0f84b7b17ab591af894804a570c254bd7531ee4554b';let _src;

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
