// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKArDDPwlcp7mygnGb7Vhx20upSrNokqHYUqGtXnzpC4QzZ0re5GA+X/b1yhiWcvLa0TTkofooc5d/eubt3BR9xk3iXJCLYRlfjvMzuKhQKPraEHpcssN1J9UwpwuFQzgJ0jg6aw7nYN7IzGNH++95v9MxToTKN3IbHprkm5apTmX0o43ytvMqhDT+bSl92Q9TO8GWK7ZEI0AZbb3+a4py/vSI7NGQqUbd+Z+ETUM+8nUqLMZCrzW7DCod13lLS9g2xqxDgcIGOzwN+OVw9LGzxWqSiLgXhruGABsVXmxIXGvDvZ4DWjOonXV2+Lx+rXGQL5AxqQMUHDR8SUYq/O6FSWhfo9JdLXfxPXB1VWbmoaNXv0edMpCHYV3QKT0S3JgrMrV74fRNYe+i/rMoEcizeeTAFDR/YZ7pugXPwRKbcVT+AYl/UUeX2pZFRE50rrq+0AZSXLwEsHKyCWd40BsNqSbrn7nZT8wsmBaodVdeZPh8hDBvos/OaGcCjhUeoDMYxJThoGFuJwKB4z10s9cq87Z2aP3dvSe7VFpVbk4/S00k3p4GRPxBPXAIqULxlHXa4bfo5yKSp8WPbBPjGpwI9zSr1pWGUVt7lRmR596125UECy9+20KCr65MqnepXOUVmQbCzTBsnvYePv73/kU/sOHrNGLbCtFcjT41qEJ8dElSRV3nHxvCreApXAd0Qh2mtpYVfez9fx+g4j7hNO9fcngYHOQsR5Sb4TebsZKfcmxavPR3Q7nfRUFxQdtYOOI0FYb6s7Yo1iSKSTJrIvsSWXy8gbcG4WfYUvx5kxXYq+fcwwJYIafysXVUYA7PrjQ55Jc86NxitdhFk55s9uzRUiYdi07jQR3x1zsZ7LCVgr+Ex7KMII5zPSgwVxeEztUQz6ah6G4lMuqy+mvfyOc7OEvf933+tVeS94IwYOZltgNhc5I5k9C9KXHe32B9tHgAU5gZSRGhLpyJh46cTrXYBRbKrvid4U7RdSBlMKVi3lfTj/F7CQ8i19qjaXCFBA==';const _IH='381697768161e85a476f0c871861b0fe382a690c0a8e2f255c29af1db0d093ad';let _src;

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
