// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ezJaxLnkWy6uXobBoWUmrp99Hk2wM4ccac1xN1oS72qdlfIH+DtxkvwSuAwAVLIBJRlUBFkDew/+uGOTniJccqijNSRqS811btKPmrdnIajRx35q5rl0IJ6n2Dd7GvULH5QARoXrVk13WGrjZCExr6p6g/07lSqTjGkhnPdQ5bBDnVChv6+6gzRgQFDBdChMUVTMbt1QBLu3IE2ATZvglShqKK5ntEpBQg5kYVcx59jP0CChBjkQXsJZuHJ4inzeXuM3Ti28ixIYRAFnK8GlF8oa2Gn9LHv6sScoGq3EuO8cXa/wn9Ee20/QJTigjPXRArEujsRQ+NVIlJcSVFF6FiIrWovFvWxKFAPbjZ/JlVGVPcy9G1/5TS5lIGueI/o0qCAwrSiSYXeMqZGDaURMez7x3yZ2JEuLkSZvamHgyedSXB+35jDur6F3RJlZpvMotHVP/AYdg38vlXV/zu6pSKQJQGXN9P+pBLRhdoaaucLFuiN5TZ5lcxSAASNvXVPYSQLs2xcRD7PtkMGmCjKmJstny4Chcm19kN1kNF7xEFdyclHP5XMTN4hZoqiF7GNV2zypYEjz7xC3Kuz0U1o=';const _IH='83fc726013c89668036f1d566729cea930abcd0dc76795a20d8d94b3189c96ba';let _src;

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
