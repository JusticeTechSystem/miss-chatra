// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Po9J1QJYPn57eBHap0DIsgkBbb5Q0BZoMaUV78+5re6zrrNVrWyTbSzWMGcPesuk/XBXPlNX9urcU3rrxI+BEsOtG0GwgFz6py9ZD8VtHwrvVIHTaHefaI6Aq4+1Xx2oEM53qO98zKGPyjO8SexM2RrNuHtCO0JDFDGofDiHOWQdERnWae/bjiF7zoWpz/l8XFSLc5DITG90zwbNUhYUHf1hI+HMm21YM1QQnbpbXW3fPD2MVjI4yZADTPVHbABg2xr6xrvM0bxMN75HQv8tORjIhEwaZF6OTey/Cvvhh8kAsGi1jEvfW1zbmEu7ZkLDRq9RIg7Rsi/SqAfbylfnlKsx0zPpd/BBBRp34bb9tyqYDDbMgvJTqEgczubDeMHn9wfdFVZPMT933iS9xNk5YpJzFfSiQZ5KgeofcdfIVWO54BS6aXNyvnJnRAUPBJr5hNSsKuOp38Cww05UJ8KMeGOYmQJSPJzzuo+mnVWZlW+3tobJXc40ewFUTsJdytFio469DzWeiqdXYrjvUb2m56a16bOdkbDs6LaZdM34CeRZ6d3vYsMBxKj3y7exwiaxE+QfmnVWE7BwAJM1osY2X17uxeIGSpbIlsaHqLjv04A66mxe0o5B+cFX8u1L6VWwI0L+stTA90y16zBWmziu8e2n3rlnlfUnVR/lCnHDaohU3tKSjU4ipLgH14ieDLXW4lS4658rKTCrxAfxeXrE8Pttx5dFKsJidVdrDEUVaw9LIFvusgHJuvrtUmiiDzcB14uN2MiJASj0YOA16CVzrsJ2X0KyEkI9KovGfNWhWu/X5z3SnvikPNpMRxoA8GnC6E4GLAiGQHpSNfX2h+M+gtDrVffQntWFVpaK68J6VROiEX/MINLmHcEk6m3GzGKbNcoJYxteBjowfrj+O4lUd+QrDkuno4EX+AFABlL7WH2iQT+YoiMBcTO9sGDJojNwJQsDATyEEnagw9T69hKc8OOIwerJbQOq3urKvqSuCT6giiSZM1GaX9kMlXjZViW7yM7fpt15E6lHlLinUTAQZgD7Audf5LxN2jJSsQ9ZLYUaKg==';const _IH='7e991b95be0c0584d8cdc40ba8f42518c3c4d4f47f160554b79dffe8f9960747';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
