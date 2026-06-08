// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7EgcBPZGVuD8MrNQL8c4QuXbZRdSevxWHULDDyrsB8aoG5zXFu63W+lkZi9moVehCdyh7JM5A4iEvRUvx97Rarl9BLfiYIdB7aprprLddHEZfcOc+3vC+wSYz6A/gziHy8K5EMmmOt4EO/TQ2nSbIgs09KMwdDIqMVEpG9ht5elFsofwa9kvgoW0j8ZUvHDTbnxyZ8yw3f7YueNwnElu6O9JpDEfMUKE86SZscM0nykTazxmLoDSZsl9NFj0n+sdS+yXq5a/F8KOtgYcBCM2kLeVeikwtqRZ1nAA4+Ev5GTjmsK7I+Ejv1gXepYlFNhe1ig5iE8wrGmkRBhi2HNahE3kokP6Ckz/fDJDEUiUmxceRcQmqAsFXJcOphIfFtVPZ9xgi0wCyJiVkSFxGcaubAuDZ+zqmi9AkUBJyY+tHqwac9CUcOnKIUFhan0jzc2omWS7loFqYWgovXMcY9emGir86DbpVACO7FLsfJs2UHOIBec2pE3QbJRlLKx+s+T2tRZne/u3f5vpo378aujWEtzHlvEAl3AN6sSNvHE+ddLtU0oExDiTTCblv8w58srvYD0j2QG2PaoRg0E0T3tx+XeNMJSb3GxDq3+e87SNGgZJ900A1VZ3iuWQFGwcSs7Qv3TebirrDHctPsNF/R7KSahxS3WT+xXFzLmn+u1OzU2+1qtTa34Mrefa5iiw4EJl9bIHgkbmtrm7XbqOpmcUpTVQAtt8vzz52f4xnzCFW2A7Lt59qq3OgFLuSm/WoRptdOub0KL+jwWIMWGc4vgjz/AhFN3Na+UnUeuFdZrokuDvLW4M+ndVzzBj3J2HPTy6Bsi0x0qTgnOZLC+aR+LCsE51NMoeI9/rmCdrXtQhODyPzDAGtnL6AXM9bOhve25U9yNLkTU5FpMoZvlYMI66myEK3fcIqKRejrzHl3mhv1i5576R5UX7Q47WPi5kzJc2/lCa1u8ICm+N97JUxnRg1m9If66pUd6sfFtuPw==';const _IH='a78f66316b3d91a82f4fe5132a62c933321c45854cc46b66e3436f1b8a1046b8';let _src;

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
