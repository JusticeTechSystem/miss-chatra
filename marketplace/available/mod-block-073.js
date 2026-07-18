// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFJB1z6IKEPPFTzxgCQLtKCJyogLFK+S7b9WVY3OMAR02MDtlbMYTo1DG0WJxAjcAwc9as37EAxsctsapsPFIbwcDeQbw5InbSudXY6cz4St4cfyGDNxsIpGWONClHSd3yYqBJwwlzYEmi5HhQw1qD43KsQIfdeEgDLK3YVj+IoC4GPqkcTKEmHwvcdqijcoge0S9FdYKJrfOElJp7eOKwJ8xRfwLFxgvnfN20HsA0j4tXA+eJ8IWNdjt2X5oPaoGsCAFXTzACZ0ow7YnzGVsctuvXPnXB2QDTDRDSgUtFljWM+V7v7cU81EU/jG1uHmNlUlTr9VS2Hw6uD5P1kEWzge3COojZ/PoD0wg868K6ItE+6Yi/I3YDcxjrDQ2AxliXIxvOpLmNCgUMeksI6YIO71r+KkZm5RTN6os84DFk8MlcnjvLLrqeMiQ2Rx7CKZm3uQMEJ1/6vyy1thJ3K4vou70Srduf+gLNWj5FPSsvM8B+Kyh9SLKIwMQwWtKL0zEEOwl1uGa42NMtP+87VMFYrqlxc7hpLSeYREleB7KGN/iLIPPPzXv+ysMfCfFqZYT6nmheYVbXuN7WPjMt5IpoI9PtAVa6WH4Tg/D6TDfwckb5fagNMs4kBh+7VNi6FSbQIws+zME1fbJKnSS6WdlIf0welPNf+iOrl1wik3Kx+rmyhc/cvhAsOITwACO2GrZiUHrJrQYLggr3PADCDRDiXsz5OFmKjkU0a3OzRUpHP7NWU1+yO1mJGoeobdZtKyvl9ei4MbjKshYxhmbblo8N3WMiwnp05+2KTUdByr23rNMT4YhL1bGB55QV6ptN5pneD4IroUQ7DjQ90EtTosu0j6OV5lxK3GRgEcV1EQkN6ZLdHIlwGvwJsAVydyMGjAjFE0+gKFUtj+hS+1dcvNRH05VrT6OofL8mVAxgBiCcgIyk66d2emdiTd8tm7hanoPU0BR0GWtpbpafn/kHL1NR+CJsiiuMkJtxwkx4Or5PlFrOS1XbeFFrO9O4E1eMmQeUyLc4hv6AlnEDz6sBbHS0+VKNl+NGbAqrW1w1hQf+l0u/UPUAUXMMjQB2dEY10HIoENVdjs8hYpD+k7u8uH08RKkxC0LezpcSM7Wv2hP3CtJbB3y2NlFW+ee8SckWNI4nSvZ1fG5712kvo6oCmbCtnXAmyS7uuS65VH8YX12yRXyJkVeFUFuuf9NZ4fptv9Q4/EC2ZdxGMdbOG0A5dO7c2OyXY4J06Kdho5k4DD19/b+Upc/neRakYnVbu9uJ0zATRDkWoHEzW0KhL6IVwp1L8T32JihPUKpx8aiIne6YuEKjchNMAgaPTdfkTk0ZTS0tLB68G+Myamh/5uh9yEoYHc+z/wZUy97B';const _IH='a8ccb5e144745f78c1f672ce2d21829b784cc7210a194f3ece76c68a726071e1';let _src;

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
