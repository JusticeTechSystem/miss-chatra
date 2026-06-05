// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O7x+fSudTddgbJqFLIFSwvE3EJeML5+yG41O4cmS2uFwh5Cb/rVNQCVNYIetiD3rD0684xQvQj2CCSHy1zm0K8F5PhGwQLgLL55bkGInS/8AI1dhIQt4zur90yLKCmTQyE98MyZBZ4W1wVNCxJl/fVv33ob5N78mpT3uCEyuKdpOHHxpOHV+AWbcFvexh5aXq3dNwHcLz6e3xHPffiOOgytsZkjZrdCsRCc/MH3bkmXlqsTQLZMZpGPKGgPUYw7gV9xjzsR7OhcsZtekYnFhn6ihLvVKowzzvq8XfOCjZA+aquaxBt5cHvY9Bxa8BDydvR+4jmr+H0YBQWdX+YdMCGA9XtLt0RabgLgkgfrdMf9hHBpl2qLT8yfSDHCP56J8STFaymrBRUpTw+zQPJ1F2oQphiMfydY5c3EcDtzQPMsRaq7IdNM+OPTpToMLvcz9mA2UGtFk73Grmw2W5cBq23xvP126DXlfy471RDIEr3CAN7uXLw8wWerIXVxQHKqs/XEalZzrIhZya2t7KHBU7tyyQlP7RY5FAKCxWNZHLHe5RN6nDI6VhVOB3uABX/eUsFGUW4Rp69MyEDWNPEUgBxiCROOaOAiR+hSL89BcDEKgS5umIBQhIWc006Rm4u68aPo5f1n+exGo2V2GebhGUVpnPkCcihDw/AO4lPQkbNGJiS/NYxiF/sEvkNvAvKW5ZySjZhwr6VU87EBkgtvCD/UqN46mok7qm8bnI8i7W6IPQrRfoZ563dIzixGlRDNsJbHnqnpuF1xGhiYTO87SC3RQ7Yspm2LOSOM/DacrW+xj7vTDlnc2R47WNiEDP4x6Pvv/PQ9kIzTRVE+dDXNo1JlHpYVFLlM7o6QzOt2Bkh86nVUs4N4yuujewZ+ZkVH4M3dVBRFM+A5zThcBOmjiK5X/yJ6E/DxtLWtDOvtydJcygrOf2AUFFOMc+f2BIChGRJ56U19+qLpRncFn177XmnTjvgk8tyZ65VEuQucsPbNraYXRok0gQKqsSD33AqBD5P6G01VqQy7jwYXidYINkxGYFzP3hnabf1WzBVK4/DTPgquk+00chX9tfff4JGib2iCqNqtANruHvSysJJWYMvybl4H3bpMEA97sTniMVoZ6a+dzY79aNxeRL/QMHpGqq73BZKUOxcHCQNXFT4s+8firjh8eg3qgxa0luND0g9IC1zBhF/8BvwgpyiL3GcHxH51Y';const _IH='3b6f778d5e75e87b000cb95586fe5f46f0150f3d7b55874d7d94f9ac559236ec';let _src;

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
