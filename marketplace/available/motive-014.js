// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw64iwFJMzEtsC/BxbhI1Fxve66nPJg4fUW5oI/uGxDZRAxje2y3R13pbAfgK32wIqoSRRVK2gZItkIXJNy/Jt0dNxUhq/pBIBYte05+DFslgO9lhwc7YdxcA6Fy4Fo/rXL1aHWRKyeWSnhDZqMKhWj+zqAV+2IionkuUs5AgwTx5idVvJuaJwpitNMQGjaqQTeCtXDHYUQAN74RaOt7oWihHMGh918RKUfZL8BkM3krrBylSiA6xvN8534Is+gthy/A0aF6SUfAHKPCG/tTStZNQDuzrv+QHLJDnk4t/6lrUJEKvSSYzvifiJRuYuADPtIcbS5NDfVDic8fbBFuSGkN7phckRYQ+ge7zccxGdHma1CgHNT3nfePv7ndfgOEI8DWRhqOtOMklmZZlfo7l7mkk+iVQFpOGgsnIVqqXS/o3jSjKxsVpuaqBbkjZM+ACJiVF8aQKZDTruBkve7dDgewfZeQiJgX+p0AqPBMUlTiyJ304ySTSGa4mgnZRbCztLKulXdP2SfspwqF2eCW6PlCjXZhFAdaF2oU84e8u+peAxZixbn8+ycrtxs0QNUSwo0aCtOpxguelDttHnnoGcBiUM+k5I9QEK1EPyuPja4bzaHmYPgIyg/3+IHSUWkE9JYgy3T5KVBXQMn4SWyt+97al0Jxx5IkpGG+Ok4vV7IhIYG1uOCbSgsCtKTTFtL6SdNZIH3cRnKX7yd5mSYNtY0kvEfPh7oGz0XG71rgUr3mOWw65Q/USy1F3UDFgFDzSNE9hB/jQ6TVVZnePP1fnfPl+AJp2YT966ZpcEbDXRYg5AdqUt3OaZBWohZwdQl10GXU7asTOLBObmrcNLEvzEdnmf6Yg7O0IzJLXFHJinqsV/sR+qOxYI3o3IfBus+epsJo5I9foyM65sm9/wlY35dTW2OUXA8oU1HYMK6teQnKaaGUndnHiHjpUjqiV/js0nJ5lEwdnXog1MNlXT9pHoHhs/GK9tGdZaUq72NkSNIVW+pCJYbOX7TSlJWTK5O0FndSqlHKCghbKL2PtwXlr+TUM=';const _IH='19281440dce4a46e39baf194d615af1c5209b3d8bc87de6b23494557a6aa3ee1';let _src;

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
