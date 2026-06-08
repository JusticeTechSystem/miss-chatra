// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QYOihNKQpAuc8H1P8v6S/EgIBX86dBiIjQ7evROf/6poH8IYSPQqG6Fk9sjmJtoyIpH80azodTY0Psm8Wuj+u3UX7/YDKx+Xp6lu1Lepsk38MzkloVvhN7D1hIRQzMgrFTEOWbJbhnnkVLopdG/wookC9jvuvTccczNd0Ah4IaFKYo955bgyyR2dttQPbYelzkL8qpVO2oB59rJd0DSMpx7NpKpmHJRK9jWHmgDkn+5FkDT0N+IKB9iMNo7XpDI5TaSUNzJWsw3Wke2JqzKAxNyR0klYZ9SLB3PeCFfm1YE0XuMAixGreIa+mglM3Oxbo7kZHyUZedgiSmatVLWyI69kN1bTcsXuLOSnjjDnFzsklP76hQ8KWBbVSvrlQLQX8ZPqEB3sYFseWDSyiKQruyKzPFV5FOy6ARVB1IEwUuAAF+zezF6u03M+72co81QLxI1EMk647jNFHmqu+wIeySBajBwquxzo4Rxr1+cVRIXYvnuNdMYVV23n4cDlSdSQgWdgfpYmww+wToCX4iuSUfWhNrA3FwmxJoARY04knzj6b4AE5tgJemZhrmcc/pHljBc8kA3Q8VsxYqrfWtLXvZGDUKrzcJZrb1FIuJsj/27uYhYfSGhU1vlrmbw3RMEQJ9p+Lwxs5u/xkkk2iMNWhmAKU0RLXGYLgmZbjXQedPTZy0rnU2MRDN9vmJpSg0PPZTIiizuEPVsW3407Q+uosQ0sEFQ=';const _IH='1ca32b10f922fbf9a06e661ff3b67803d6614dd1b6ab515a8dfecb1673ae47a6';let _src;

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
