// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSi7josvMjMbYHLDSu7XByBZjaNK2rR4gg+IeHmFqKk9iYVXuBOhnoReOmQVBGNs2S/cxoQrdN5DL2UdIdLX9uSD6BYIgnciBcIwFuD4zOgxIHhSLGfdu+RC7G6YAmzyXCx38WFQ7gxRRRdVih8bK3hJAFkk/HJ2EMCRYs4lRj6Z8uMo2+NR2WvC+K3V55fGifAGxHWVpKOB2ZPnjRq2FGk+rvmzlW+YoOhkMBnlfCTiUCXIg7r9PTXIhS+F4RJ5Qm/RHeaTXTU6qr6JJajC5ok8r/tmOG7+wXmrV+X3Zu88FOpACPTTOgXDL4Lra4GNbIQ4IdoxBsy08hD7wXNKEBFihv68cAcpvctfp76XW0Mw45GVGYj6Wf1xvB9QZcAKbleoluHnVIr3ZSdw5VzVwjcWnaSicBAcBVDtiVqvsxgJIV5zRdJBz2CVxvSN8nc+AlEX6y+6yoIQZmt9RW1U9uFio9xa42+ZPwtd4tFdKhCJjOzt7EuYFQ4+5MDQgl1Yl1FgAqdrb3E+OFaFolYlw75Lc2amlKFsiVNeOQCoFPoRmadxWyoS5p6fo96T1fb792xY8D3gUkExeBG8NaxiKypUzkivaJvmalKGjKzFhmv65pi+k11SWev1TV6KjP41tNLHZsJFZqvLlRb7Q84S6G+i9sH+sWHLpOm3LULTE6tB1New+wsmtpqWC/v1Mxa5L6+rzBQGS5bwcA/awWV4d+T6DD8u8T022rU39E8OYp5yqQHmNhf5B/ArxEOKdlGoxLL9VwKk3UCydMdMsxa1bCR5lI5wCCV1ugf0J27084kg1Cc4f6wdZcQdLMAeNr49dsaPggZ3ERwiT6XEkp8zP3qHUYghreYlNTob+t2Kls8rww6n3Fo/GVVcp9xWELTZnUL/Fozjq5UrXPEFNzU9eUS+79qy2jYVQy/i0ug8AF+yDr3IrgiNdCKNiFxCaeeANzklXxvFQEj/RdZZTaYiPdcm1DSRWnynwyBw+5FmZPRKwDNWGzAFXN1B85yT16iTLrFdQ6Br6xKq4kI4CsbypFFw9unM4hxxXW8d2jBz5ueInl3bFqI77OLmcWhiL7YKT7BzN/khUGizDvxUijHKGN7Uz0xkOze/o2918O8wdJwPqw624dZS69c9rfsd4CTluWcD88J15bRUwUmwG2ocd3SjySsfYPguk7jyX2/cL2G/H2Y4Q2Lu4PZW5R9c5ynIzDvDz9g';const _IH='a1859d8de0e084ce4e66d1470cc51f9eb7fb32b5149b435c317b171201ec6f12';let _src;

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
