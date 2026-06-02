// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+iJF0mX0+2SYNevhOp3KNeRh8oDccd/HyKimnCw0mVPiQlmo7vzGtICBpm1q5jVmhOs61Q2Qwx8qvJFQpSX6Nf7mtbojxmAMOS68+cvSE24BcO1CuF8L5X7+YIlPG2VulIDZpppc2Q5wPENaVGiqTJndsRMggEfObLyTGQxB35fZvDQnpXddqPmo8ohuoPD+q62meiVvuOFthGgrKmy13ZxIbc+NyI2LHSKQbuxL+Z8ljuu1X/o6qNpbQ/hGSoBwELQrl/TWLWBS+dRR+A7SkhbThpJBJuwxAv7Isqem3A7l4C0RTo2V2gCc4s3luJ0iGXXrug2BNIayL9m6eCljNM8RbXMD+htgbxNkRHbTsFifnCInoVywmyyGe0OB/lNpCtLuGAzd7TCjYTCsIvM6e6Uq0AjAogFgysnx3bDsFgezdve23ltbeRV0KvsrGTf3u0j7J8fBHKf6hh0NME0DaYiXJmsyKOQoammR/RL4ppAGC/itNWGybbdnsPmxkBdP6F8fV3AkVQxwLAGjNxfy6QybXLW9lgvmtiahNfture5ePf4IjRW7iwGgEeAe4skcemIsaQhmpHGq0RpgRKtwafzfKTXr5SJ5RMXa0y0pF1Z6tblHnpe1Yp38AP1v/EbEp3riuYohNIIlyvkf/Gb7Th4glq8mvvZbtmm5JhX+d0bmeeqVrRtJQ9pfpKfZg5JqCyc9qo33guw9gK2iCkLxRfGUjJrbLWSvSlwm/cZWb4UrAh/VDjZBPN3+2/+L69TJbmvTDY+qdiYN00LwMPPQF7z9EzH8y9Xea/iW/ZWIbILAnOcxq7+YHoDPeMLbNqS44bG+PW3KOTMAPWYhd4lUVWOswr88wPm6+NafsjqbdvtG65GVGLprj4dIjZzABXaa/zDxeMgeDp4TuxXFTNZ//DAIpSPD+JVfhh+5H+GazIlVJsIe3wQDAxDocDznT6/qQhDLsNBq+fHAcDztKfHeVbaTeY7rtcs2jOWebLl3Un2jko+AKtv/oH5GkldOdRVGFxGBnKbFiL4HP/mQKyxqjWZexRvJIQYwAPePVlOl94i3b/dPzYzEvQbYrTEbL1J3zsnu1Qx5uAz/etazmAcTL4FHEQROTFyf/ilIn4QOP+/dozIfwf8dMF5lHHLSy47s6aaYj8x3IUylK1N8Jk5C9Y2+JFYe07+1KzadtVIfpE9uJCrPth+XmvRB/sOyIBv0XfQgT/f9i0bsof5sNMHtnMhZIg06o8mQlAJQNP78yi3rFH/GSK/Uz18zuJQhMEC7KmYcJm+jynKHkwIr+oXJQp7eZctDWcBKvCdWj/UmlNVr1lMB+7ICZkmeUiLNgBmYx0x6u26oUrDeWb87iyU0AupeSnMNy9Jc7aOvtT9B';const _IH='9dd4d8187fef90ed5e6152c2967da3f5a335fc6b390f7c4f4fcb9b7da3443a55';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
