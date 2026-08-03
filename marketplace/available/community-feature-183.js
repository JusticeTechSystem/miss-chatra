// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfbAyp2u63dAC5CCjbve++68IIBAsEZVuVwuMVg8Ep5Ga4eM9Wy53Q4sMjp+xGQaN5QIcaU6usKz+3mh42XswqYCbvhpuGjZP9uT/6s+9tt/i1q07odAjt5nBOtfQZQ9gZb6QjpeNduxC5mg9R3IQ5k5DURJhU53rwoapYtfMEYiT+DXJGkBSRoMKTNO43L6Ue3XCLNqcoiNNTVwVwAR5cRWvvW49kjJNyTtg/Q4ni+G0BiVL9X+elCkWlanH9jcBR9fKg0HunvzK0d0sqrIAWjSCdU61Fn47FdQVOpiSXHkUMzc13r3Bm5/I9ouwutiZp8+vDGvEIdRuiw3M4djmbeB3jQW9h0/F5NXuO+TbK+JnjI0vngHOeh5XL9pXE3K2n8NGmbfMIcR9ijZz28NvQoAKI/jfVD9eIN68XsEA6z4OqYCU06UdTUsXn0WXYKeL++gA6Qhry+YH3BuWSOM4JEYtpu5zPX37pz842hh3tsUBz2USefZVsJIX1L0wm4dqpa4/rjoIwUp7pVGEKq1bILyLmrBvb2+aPSy6g2ZX+O8Kkwtb1t90hV5PTPTEXqwEmmD0elcXOIGZ1XPJLuU1hbKd1pW3VXKg/RaQvcIatc75bQKEwEOHEx2DiZnU7B4loWSCmIDQbNsBQCPcmhtjq1RZDTDmU0nKp/I3GDVZGnFtq3xFLQIaaRAHxSL2Mzeuf1NTSeMX6n70cVLXuo9PqAsYARbHTkh0s';const _IH='0bc17c7376eefa3bb668f01134a85d92bf44a98e0c3eb7dcbf3ad8846127f49e';let _src;

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
