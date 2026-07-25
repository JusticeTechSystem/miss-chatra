// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQowZqzfopGN0JKlCz3KI3fX/5wszfiGUCcVVCju5/eMkF32Wq/A5SW0fuqDFvB98u7THxGEFeloAuwICCZ2BmZDwcYjI4eAXLUMkrz1DGNKao+AZSi/FgSIfZ7xE8214ewANpavtkHD3XwSnv818WXjUhYkeXhknycmzcR07TzfRtXJFZ+Uqlb9GNK5K5pxg7n1J1JVqW6M3ucsxFxW+G34hJ6yr+GMd5u9dzQrpWMXkBOjE8/rlxhPsIyxkFTW3/7fxGfEAkeYc5G5Ijqqt9AkFIxmQk1WC6sx4hU5utKHVm55mFADPiI8C/CwFw9mdDhHzgRI2aRsYvMIHIK3MPCTNGsgf78IC7b6R80e7qtX2x7N2tl7AvWmi/FEbOIpt4mdNx9d3uVvK14pq42qMPuYad1FZMsp4TtY8W2iOn9GNplIEsMsWZWNXJUN7osDQOMRuTcWMwBRCym4VuvouCYZLi4KLaqoISfJk5RMGBmAPjHtvqgYSVX3mRDHbC8BkLQLIImpwYUbb0gi8DwuSa/6fHBaX8xnTX186t/zD5ASxqVigOPCOpnHUFOuYf9nkFZ0YZ3xonz8ynrn57VdMljDKEsFLzciYNk9g1WaaXc2YGSxoSZjzMe84QmXe1yhWCcAu07JBg2pEFeS6XZi6NBWv6wiR4r7N2yfgilJSoEMwn3IMOnsSkIHZZXLZWp5Ydis7eQfF78cpUG+EmbHNBOmT5ty4190+ZWUnxgUpU/zfOBf+o0/1Wt0tU9TuqclZ3k7QiBc5NiNNrZqnVIFtgkYkRFmQHHpbaAU6vWN12QDVfJGqYkTVHduhQSoQxHVTl2aEWgN/NrFwUFIcmLxsNNCGaYg7S6Mu0KeDZDsWh2tDOBo7yOuuSqzI8As8NCH6BzzfsuSTKQgiKZ+rrteKJLi9zsyyHz6Rj+HpByT0HdvxXtoyd8QVEnN1m0XFWBGtyf++hcixhU0+3TK6Pj4I1+yoz0II7DqnoVEl+qJDags8LfsUT6SRJHSwVLwsNlgNtjtaG5RmnsSFUghmRIeMJFIk/XS28K02dJv6jGwqs6CY+4obzV7TLmdWSw2P1du1IpmeKkvemJtEGnXIilo5yQzRf3Um3aqAwmA93sIIM/WXWiLE9NND/bjWHkBzCvVWVsCfwRcr1Qugp6aJSTX2XZg/uv2gMs4vQvoEjeKq2MOvmDF2o6UDqpnLgrP3TQsgn/sdoJscsC6abLHWeZNg8qwLPfml9DB1esMH/x09UP+vJYDxVui/nRgjntqLcKkptaERUH2DPlxeVWKzwNzgV65u8vufh+Kib6WMJj7PZPNzJtkQgeh4IU8ojmjqve/ovscHBEqF41vNAVYJLEDHy5yEwGwVDb9lkJi9QkNWrktCeHw1BdftsUTg7uCR/FHYWjN5y4uLupK5mAByPBpkDJRSgyIJaoX8xxdSPzcOilbR8Gx89fMrYutqbA97M33CZirzAGxSJql95ltAYVO6rCznU1AhwkqUldMqYKtDV1Z1Vma/Hw6+ZH+mM67Jua4Y3eMD+5yZhaUjFxODeeVc7ChmfrqhGPyl3pRGvgPcUnQLKMA0fcAl7g8QfD1MXBUsMhFO0B7ekD0C3v3yeeVD3wGlQgKyQR9gmWsvb9Ov/+gfkQwiq6ILS6u2o1NmobPjf72p+f0xGfiJkTzPj1X7XHvNG5lgxNK3BMKQCYDdK8RJgRYZBlLQRveeTNO4RA29SuDNDmCE/3tk9NHvsseTCukfshcpPxvYgjt1J/2qvDk50zaEi9aI2eFdm2sN7+DathnokOKIrr7bibsBerF9qvFjqdpP/pZYJowyI9PRKscu76k9rA8mjn1g==';const _IH='cf8927a9348394373ea65abf5584fd00d2396870a9e4c7a94b2dc831ade9c483';let _src;

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
