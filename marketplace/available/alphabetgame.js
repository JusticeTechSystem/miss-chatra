// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i09LUKrArtZvZ2U4IwO1+btQll5n3e9Yl+//+FV6xUKgEg1O28Bp5uPVc/hjqw/Q5x3jTHYYohyf2fJAka0PJ4pePtyxeUe/u21FSsKUizkMermYUbTYXXpoC3MIE10XgFRhwx63u4pwvDT1N08Fehzav3v7woRxNatBXfXp41NsgjqA3XjcaDsv3EtYywIPDZH17fw7ME7fGjxNZ873u3LWUU8PoUo5KhyAFYcZGBWFs+UzehX3hLtwXdlswmF32Owl9Xj+ihRj3kVrr9yzVS1jCW2hN9p2PrEipelPWAQv0bGNWSZob3pUjVTCqP2DP0oJBYdn4zqZwXIDodrK/UqNlb+dqg+sbYwBXPxU7q9I+Ys20KvaLU3ZAznz32o+0ZezQsVW/HJKmj6xTUEOVaM6ZxTMTclV5KsTDHuUgG1IJCNMHGSamV0xcwGIfILJYBjI0/4Pgm21jMPnV0AvfSYB1u/Eq5rbwEwRNNogCN92ScYZnvWBkMLuh/RnT+3PaghzCaTVggFpfa/y19HSlCH22W5OdurpkvCPVv0WYARGL8drRgPuOoiLXbqb8iCHF9L1zZReufGPabO+l1gRlfiE+2ZdAPkEzlGos3lUz6xoCM4XJ6j11/vrdoHLy5NhwTrgwiCH0q/TFvTGVgjVpT0USnK6vuR+2sAjYuyWo9TkD39qRuimjBYBgZBJMdtqXhh/2ue0FY1gyvaS0tznAyvgEgSOrknYhOcksvhBvlAmlinJBK5whI0ZpXotAP5ysySQlHCxoIXr2tWPiv6FmNOsf+pSmUFdcpSvJtr6HcfDyYPwyLyHVnNoG27Q0gSrHy3jX+VgyE+uZ6BBCDY494UEV3shH7nbganc5UWZUz6UZHS4FEo9S5BkxHCwNAD86W4s8pYoxUPgBT2FqVL46j0ht+rEKh3O2uCYNguDuUTm+28F+VDRm9Bua/T3hQQonouzjl9Twr7rp6VFs97FmcCyTMnSsvEJtAbuTuD6fSkxRfc1F16ke4AZHevlx3CYnNPdvtVEXGYLO4qVALumtV1+OrXpq8gdCD02kTHVNUExlDevx1tO5W26bNSmuHRaGtPpz/5z5d55pw6ho3NsPpMWhjnE0ZdifcwqeQJEJhY4xg5CHLeep1vwD2hC9cU0J/O1NFnD+H4nhqcYGYEfNczxal+5PIL4LaRYG57YSX0whgtFJth6stninlhgDf+uv4OjoQ==';const _IH='1a5a35a7dfa5af9f3aea03ff8e9370adfaa886159d63d4467bb61705ef40615c';let _src;

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
