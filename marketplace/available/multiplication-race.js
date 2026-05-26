// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xbuz7saRqT8TbdsS8cbIBt4GeffjUdAAzUSzYEN7eCTcCviAYXjkRT6fKoKaHA7zEWYQSNPs7AbD/RqgxpUe+HoFpxoe4f73cJCXd+zv5+/shrwEydhVAZJtEXGm7EdmvLpm7C9EtcO81598FGbs9DobPHnssY4qNAxvcNsBlV5RK8ASsmbutb/i96EttpR/q0ZH6EqYWu2idCyxnA41awT5l+gifCpv2btQk1Wd6Cff3hbXJDy3IQ87bwzHA5wHwYmWF3XDhmeH+49MdeeG3npBxpCigb1E2T3SNZQfx+ssvk91VK49IMlIpu2xHWz7eCmNksK5GjnVPhEF6Tv/UwHFfxlVFsFLoZ+it0EMCAVCKgG3SAt4RIYjyaDMalr3p97wGgd4Um2+kMM5rTdIOjLGvXlTh9DCPqtMjK5xbIC2CefOje6O3mjFPm4ypMGzTn4Qh2SBDNxcvnSFYXdQnr3dpTq7C+NwCboEisRob7nL/xna1Z8zxE+4O1GTPxsNB38oBXAPjlB6WUl1EttK9ovl2X+uaBxDwMgbtK0hHNy99b/KdoWlPgxGEkJM9LwteZkzLpsdseaGUt5JSMWRhU/gqkMihyg7gbLzf5KR/UulOXAp7cj8awmlZvWM15sbL4BtisSkirjPwHinRmAhTFFpdyYe06QwEFpdvH/0lfXXiPh1FbCSxO+9VR9C1jrUhtH8iNxSOaMXB7iCGfC+2PGfdKduWGFnHW6pOkxDCt3r0mjoS+nF8kwu+l2dNICb/b0lEwiMF3XvHs9xlFFXf2ueQn+jW1fRkG8OOQ3Kyr4kJ7JA2ncqL0zYI+fCLWjWV0rdPz/ReE50gIicKCT7ComspkOPkBYT8KuwYrnrkrAOIiuotX1Ry3H9bQrf+5HjZD/JBK+mbZo8Ts0nXkGm1mn2x7zAJhmh9KskkvTMvwXiWzx0RVPpmgRUnTsaK/VYWuj0+htT0eBgnmRDVZs2tuhtJmTf0ezj/BFPC5XDP4K44xMW/hSTCkw+UuscSGzGfc471/oLSH0IgXALawFGasAyJX/34vO3sT90Ure+rNiaG2WrN81fkOz04o4m3S1dvFMSWAIUrQIRE2Ewd7zO75UHptgBDyRBEuPlzh57lBxc8vtuVS/p9spj04CYRlOeKVHMuYUVIWsPYYpjDtg9ItrmgaoJKq0yjdnXKENQYGZgfc/+xYBNPNqFFiTHNkWFeRZofzK7OG4nBis+BNyn5p2/bp2tmbNkxpf2cFNjpnlU8Clb4HzyQI6AB1B1fwK2pntl3I3ONRm3jb0SLQCNq2zF9EBY4jX/A9+KcdCl6dTFSHdtxF1IB9cJ3sUCfp2PBbw0WhJeLu80ha6ldIEmRlPUcOqXaTuS2+aFlLVjaXU2PGqkL9T1izWYhSsYHomNriMoI8FK0yXYNWFzA3nZtAseISOD0DxtFdAjbKizG6Ax1yFzJA/C8HUK2FOLG4y/pa9gi4K98W7RPe/U8R0D13TKUUU5PfvYASULnsqNERyLvnlM0d2jvdxrPuEsqfh6H3nekhgIk3ra4+u9Q2FcvVIrnI9nzh48D38UUufdjcJ+r17NDeXiEQ==';const _IH='565a44ba87ea7f9f3fbf5d84c168470ca84d3c18ca37ad21b184fa6c41114cec';let _src;

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
