// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGn2FZeK5v2IO+emaFVtKJMXj/6rBKkzF5GWpTQmVf6AC2cUSb15TNu9EGRmfWIv00oBy2TeiWlDO4sE3L4EQwtwAVVjKrVJ+7igNl+U4lkVCJbDgtPxaxOIQGOsyTvOD43VhOUEYbpiQ1xYZ+Gf3aVo8vNyJ64glqWXM0gr3fcnHFc3Mvd9YGEPwXRMKjjgmpo4jn1gKHBEYKAwP3SnYunBOTWM6zgfeZWFMOG/PiYe9VraKkfqyV2ss8qiXLgEoez/c/gJeTNYKEIbcGQkT2+A0U7eSDOxua6jU6kRXAk6/vmR/laLqOV24lJH+gqpI99ret+na1liAHQkup2jh9Bqc7vJluTQCZ83ORW/UHiHsnUnNWohLLV0YwcU3MHApuf4SUhUIPywGxrw5IuEoCfJPi3fgI3DU6APrwjTpy+YYylWUStBuEdIM/AZmAKtvYbatq7ggFyfDImCGOHUe9cj+BU+CmQVtSsxGaRQGmO+molKtnEr1fHNjIbIMSD5U+ctDabHMIcdhiUelnhUBhwuuQ9nMlH4duYY4hqOnhXKhaZNUWmnUe3M1HRFyHEmTVlStlK4qioBmxGdFSadaSB1AAtgJ4xE8VPSyS4Ydyw819cY0W6MkZJU6nShKUpqdBSZpRkLDIIN3UrYP6AXc6wt7SLt3mIAhejYB89FOTS7CnkgHM5SOyZKxrE5RzVYQvuCCmlaX4Mzbg/Ho1TdkmbzNWBQmC';const _IH='df00f8fce72b9a9df0dac9bb624eadf7187a9e62e3c3baea3ea722a43697bd21';let _src;

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
