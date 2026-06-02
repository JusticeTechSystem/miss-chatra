// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPXDTpSt4gw9OA3r68KqOQJQfvv8WGkK5Zszo5S58V/uOlK10gLLKFyw7gvPITbgAfyCf8WhCop6ZzlQ0X3ziMulsFK1KvBUVmAV0F3BtfTHSHDglFXOaL8PF4aiBJolHeHd54FFLabam0UnuGRop8Tgrq/Wj6/YNbN5s1XZDm7ucmc0ElMRbsNuoiZ2gQuXEB7oUKMg1uN6ICHWTMdLXb3/m+Rd/HEsOcS/+8s643tQg+wQg8xKpCPmF85PPuwYCfnRXBLHP+AvxzKNBnSEhhTVgskC7NiEcfcBct6EYqvRBisyZp/lcKD0HyOIh6hEkuNzwmWOOvL0qwwEsDH3w2+vkkxPeaWSl7o5G4KcrBjWCPNsihWE4/yKzNE5FuXeG8+NGsw5klg4MluyLOfJZL7L99zL/CM/gyOzhn41/jOrrf3wEhEdontbv6QIVFTwc7FZ+QxGE3VMTRi37F6TdoJw6KgIZYHrohd0oldPysSLdL1JzejPOwwsk1TL+rPWwiXT4tuVLduhdCZDfvLbVI8DM/lLjYzU0tVBDY6u8wb9EOXVlROUjUZFlJMZJNy4lt/vJk20Y4jlklWcHbTODOBNlhyzgL/xCxtKYojuYU1CQVaYs/hQlnQLx+fHPRqfUnxscFEedEMNSfORMb8VUEB27IZ4a2w8Txb9SEuCCSr0eQyaen6sQhiqhEbVcFnIM/S19WMdq9Qnd98/BAaWliPOhFKvdEuLw03nU8aPyD6084vkxLi1Ch2cIFb895D4tCr05vkTFNov1dzi4D4rhV19ezeljB7f5SB+ypgvsM9vFZck+WqunA/SBjf/phJ3f1/WjA+jWiQZuzsV98Z9aWzJ+9CJYV+j11F7ekOyNKKINm4anw/6RiUQBFmlMCJw8LXRToS26+iU+yUEpr6T8jpontoCFB0vQmMDboHQNxEAdaUXQ4hz0tMGdc3zOuugOXDKf4sGGioRkaFKz/dtshJhnintVPDIMdVArQ6t0Kz3hXwTNx9SiGcmFgdPijTyzj/DdFRr0Z5IngGJhR00hCXoqpDlFK1UJCBGE5UffmZpcvrqMl5hnPrUijYdrSilWW/0HJkeWft/oCjX+lBqiiNcVrTvVO84b9aaooqVMYMCtKomsMWQol7Xc6svfewDpP7qkmjh4bYBrV1NlXf2BTQSqd+zWCM4Tv9UAoSnYnRiXjN2iDE87M3Y7ROMqzJetj+9xf4=';const _IH='19d940492f0702b4812c9bf68588cc7a62d76c281c756e9f3d9ee976c64d3727';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
