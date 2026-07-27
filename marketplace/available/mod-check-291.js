// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIPvoBgnxeNPfOtmLkrvlkcL5Q6zVrAEOIZLWPzo8E35X5iG5z7KDh2DssXWQukl9iVNRs00jwwDCAG0peQy5VPclgYUFO10q/1g3SkxEt6ei0WAGIROVKEQi5IJvRYDN8FgfMefWv41n51g6mdYLm93PSnq9aZUxiz2fGO8WT0ay6yacdYJkDYp8f0MuuLfgsWva7I7aQ9wCLwapWc8rO4MjNuAzx5ZBvUk/Dj4MAA/8OiO3rVa3sejD1KbRAG21i/wAAiS+ageNz5M+NlypF5EhfmP+h1bmlzqnMKEjYbq3AAt4b3pci5Ve4FPdY62QPittj8dsQNtQnD3JxVTLhzr1t8q3q/rn5U8mlKOcv71xJ+2pokAy3PfofZ9kn4nMmb63llVXq8fyjfEwRSiqF9csLCtEdB5gWijif6lbT02bc1t3eX0xBmNvQ8IR0HOYQgwc0b049e8mHGk40X+Ecu3V8WqHhr1QCM3c1WpM5RpbtWgtzbG3lM2VwHVlczyi2WaBEcalAV+C0lGtUXl320ROPB8T0/EJbBLc0/uMQ2S2CQv9SQZkMAwrxwke+Ey+BFk97m5Mv2G/RaKx05nceqcrRCD5HcywQb8Cf7SheMSWHbeg8iHUnEjsl5FbzCdSsyckP29BoR6xFilq/bpubbR5fpnYyS/zYqATnQwg4rezG124dZYenF9wdgO1/QH3hKcq52sjl+sF31FMQ9ouDRr13vypEwf7DRoG6MdnPC45t5xmt1yMkCmHt3hzj82I2wPYg6VZ6luLD4L7QQZSGdSz5u1xY1Rxl5GYR7Z78lG3gQ3Zl1r38KSgw2rqQJaikg/olLFiqqGuYAs9GXWZV84Cz7AVfoqjraSfzOqnSMBAcQNdpWoC1QiIzYibtJRpHuadG2bErD3IXsAJ3tDkov5F2pygtlnFsauOHbes4XuzpSi99htbkSBUCnbCTXNtMXHieH8DdhVJbSAWBsjHbFtESHpHi2XSBvohlt4iG7DMzcfmnNhLuV92cQ6yX8vGqyOWzJdExtKGoUpw0ahJP3EN3OcgistUssDZbEsgp5Jt4jvmZA8Go7paemtbBJGUL8AI0xkD/wKtFSYzcyXayd1Nnc3G9KCuU8RMYSzIM/j2BP/vxQfcZQ6dAfcCk+6rWATyx4rS2zOeXTOHpnAkylxS5B+vXysGiWv/kWQz1AixQ5msiLJPDqXaH09Hs7fCx7ngkJy3KTmX3d0fbzJAKMKO14dvu3r87lWODTioKakxGOxLXDwM3SxCA1eZFpsLZGektykrvgggmr9LZaJH064Zo66o3jd0yLS9ArcKqsL2h8kUUxH5ThNxZJilruVo4AAWG3MjVLokmP2IRCImq4S5sDqdAy7ndPFEV59Q=';const _IH='67b506ef1d9306e256206ce60bec14e5a0f8a08dc9e1bd6213433eadc461edbf';let _src;

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
