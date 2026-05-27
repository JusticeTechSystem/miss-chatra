// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C8ka+el+VUjIc7qkPSetVb3dDJ4MEjmkVqxq6zevpfRAnQ6L8oflGqOYQuknKAFbGtNjapX56WhRShT7mg3yvep4CAEwJhLTgpL1F16j6/T0lbBXU1vD1y16TKatWjNtJMixcgUc+XhB/8xwbJ7ue6GVu8fQgTasEOFuhhxj/2/6OBaOjxkpaqgjVpDFaYlq7Cnry1YjHBW652PtMZ2uiKNus6H1CXuyjQ70KvG7aqVKSCOfA7mihMaBpONe4OpD6XjMZM2rYi1Hz9SZnzGCCAD3GY6Y8QxphxUy7LXSwPB6Rk+ZOnnv0ZQ/IZi9FW588FDDO/iFSeSoUapUhNkJ6M3l5mVjGAUSbmcOR9m1Ek1y4VKv+kBQH3cogS1ENSsk2HdBTiC8CpPaQn0NhRdRLPtP46wj2GyVmC2t8tIzhSYMmJiynU60G75UlN4PveEuJzyZCOXIz9FpX5myWefdUc0/NbsIoO3E/feGjLsxhyheh8fwsLLdX+XhupAVdrX36sWLYbyUuGedmJdFTfDXATCK3ZIAG4el+aQ2O2Y/lou/oBs+GVuSJ4gbyubbM3rLbBN9UYzfRaePzu0w9hx4j6VFU8dH85batrlGRlL/yzBInrfCfzWScSYboVBpaQleC5p+lmx+URkHd4nXZgr+YZRP+Lj1g/CY4JXRJ6OHjVmc58472hSvercKMXkezJZhQbrJ+f61OhxIaWS2NbDMntTVXf+/LFJ1KozJi8k=';const _IH='f437c29309620777a7ecd0443bfb0a62bfc20524036b5f7a0b215d8dafbf44cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
