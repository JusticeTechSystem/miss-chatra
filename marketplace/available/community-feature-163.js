// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgvqfj7Trm39TOxloUDo4xKzk4L0bBT285xs6T5IshASuv7q7DyHwUrPigbvCiUQFJy2wiep2BoK+lBRjXnjrosZwWeFOl4xIXXN544zcl8xATrC6ajJNouK/LyZ7zBUKhHUE3NpZL5A4dcAVQZ/dLexmgxRJGjKQ20ISlPUjH079hmG0v2yWcrB//uB2SJJC9EAk2FvgM8Zz+s/OpDYA122cWEQclMMQ76/rBYz2DGIPQan+mgNVtnDCqiKhUddZoVrA+b5/tXhebHcPxyDrXQkje4OVD2nHcY+1jB19MHs2DtT8IYw/nm8tNPeQCakEC+vRDjuHVgIhZlfgzWOOoc0c7A/U4V/WMqa/UioH/7CTpzIyc2zu+AATnahBTwyit3yr2u6pHD0pHk45Gqf1IV15nMlTG7uFaG/cdyh5y2epmCnYNleqpfwo5pj5Q6KCvVEs8s0FXv9VoAC2/2ig6WNSsssPLxAtWy0Uu+TaYxrJUFBQf1fBenBGbzJ2Kpbybi7gSl4bzJ9M7if9Uj3Z0RdtmEJkeDu+1DFmHWmZ1yVav+vI9/75ue70JfH56HkehqLkY/Xx2EDQmf/Nw9LS1S8XCxyS0lsBOpX7uRYek1d8HpPr2CuPXkuTk06i1P/UJS1pfwMSyy5JQ4efLEwBnxkrtGGVFu/4Uk1brdIK3PAgZrOqgBU4w22DuknYv2Q87b/Vqxi6kBLYubiMxKlGJ0GWnXzWm3fHdwnixMg==';const _IH='86f504000335648f4f26992e35b2b8a5f2cb2a38254db5d49c28910855d281fc';let _src;

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
