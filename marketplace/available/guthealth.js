// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSio3/xT1YKZDVGzb3AHYIjCxbeRjQ/Vgd4CcLNfxpKS8S3yzBBKDge8ZXxX+kr5ARR2xkpQY6SusV1KJETfpDrSB2k2N0IxyZ3PdKyjUWfvqMAyR2FcjF5/qh1lYZuflw6A85H9l6YCe2XgPuo6KRkD3EIFeyHivhsXIalNFiSgNJ1YLsqIQYPcBGPwicES/i2siTFXC3D1pmwtI3UTuTXL5IIGPnh/6AJ3YX1UIWJw3JASu48sTnCIfFdHfgdpRjh1ImxbdtwO68f777N47PM1IEWKygN+UeLN2zp9RL5jOPGdADT6gImbciy5b+KWejX0rBGtJEOEBnAVbAMy+uJWT08rXsqYtX6tlaFlVqitbmwx5Q0Dw2Zv2qDkzYRL49Ys4sTvKIdO6a/9p9NSsyhB5S0B95B+t1Ye/XDU4sD8PYCq29m/oEGmyqh9q6rVwi2XSRWKHzPTujweCvQGfk4/x1sDbBQi9YSQw+v1TmXZ+ra/NqXRKAW+HruJr22MUAug8Utg6+aJU6szpYk/Ee6CgmD2/BZoagBlmYNVz2iIMSHYbvyTeMsCYtpwdghyWgctnZ22DyC5053RR3SVmijFBesz5ASfVbFJSgw3r3YsdO7oyxw7K6Dc2du1XIhVX+K1mSp0g+Y66fLE7YyxIqzP4lHm/X0ecpYVWwMhHWlgzWonqjTtx3G25vcVeA0xtrDfuBtAA83S5VvRcQAc+3JT22xjH+hCVyQkpVBHIGqS0sCCmgh2fbEI2vtNrzv/VzeH3yLZ1o9KOEJO3hrphSV40bZt4sGE413xAKvgfYoZ6n24neLm8v9PZ9uaW6BpDrOH5Y58RjHH6TvwhpZGvmTdQkS0birmr7Ed4G5Dqt8uT+tBeH6hxq5vHHuyrNuvY1r17I9nNgCSEYr/kS3AjYk1XtngaTYlKhjrKtutkNpCr/1GCXVG84prk1jMEw7skXKXsIXgiR8/LhRHdNjGDiOQYb5R1P1eN4t4YavI7SV2AZK1u+7NzMMUoT16KiYhYlLnnpnv2mDKUkoXZcIlp1pyA+zyIHQgLvAlg/9/cGgtXs+t/s3Bj7N2ZVJ+FSBJeQGrP9M7iTvK8L+iYuhzoaTroMbfDkUdZwYl8PQ4ddh50fpxmfrOIF0C2TCoeJHfWS/1c5KjCYd2Ip1lUXRfqWw1CACGIvtKVMUc5WD7pK7TDw5ja3bvcDtMH+rfxC0TqRx';const _IH='6eac697a4e8c591d640ba83f5352275a79df0c93c005cb57db7482fa3a413aa7';let _src;

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
