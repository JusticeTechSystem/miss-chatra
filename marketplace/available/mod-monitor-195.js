// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy7z4HNghrojXg9o8d5dtbuDOQdx3Ckwe9mJsT+mlQj7U50KYLtVQFklyZu0JDAHjDVhY/3V5WHe6m3OAfRH6JvTTg/e4OcgqvHtpD4FgsyidDAcTtlbW3ldCKeBm3kjYkePrmyNHEtk/kgNYmxtel4xFLU3vti8wliXVT2HrPeW2DpZaKfUV3OT5YreoMvzINBH6UWyt+d9DfElqfp/0qr6qMfsSUIgykSBaFLFaxmYd52w/4r70Ea4WxkjI0ThyfLX40qNjLLiwwzBK19uYxMJBc8GBGFHH7Qny0XGNzdtXvOJzUfrRH4hpvJba1qEi2GrpCr2AGuF4WFM0o72hm/wXLJSO4Yfw+W3PesoLYVI8ikno24rPbwEJXXc2IibztGstfiU2U2hnilugMKKhSJqJqVz7VjuMXFu1sEB851nRtztLvnurqlXrJZYBsdhV0H7N7X96TqZDEaBwrKgDTl/z1sF5V4KFgw+x1EiOYlHeVD1ZXBXEo7uAOOLmuip7M7GnD/ijDtrj8iJGxF56iaeJ3ypBCNWwI9cDM72McaZqj39Wlk/L+cJL2PZ25zUVTwZCREq1/J5b9l3NvCJdjU9zAyBAxxxJDWfu3ayJk5fXmmMLlwFR2Phn0gSRpLn0KxYdmjxcYxWerT2KH/HI7yMJTmekFYlB99OAXkI7tpijYqo9flmF/3k0ACYVLfCjgz2t/V1UFH4Y8ev25asVVp7BZY33hTLuwu/NI71s+VuCVAVPrVRh14maL75PQ9wN20bu3w2JLg+ouKTit5ypelJcydxKZ4Wz6kArI6+IOkLXtnIuWnQaiMrU8pQr0StMYlbb55OFop5KSSEe59uvc1mAnWPz0CWvl6x+gwn0Qgq8RdUGDUjXBVUsLEAHEXEtIXNUV6tpSzgvIe6XyVD7aKK/1SBBL/QHiRxqq0RhiykA9A39+Y19tQptF6cSdvPhG5cv+bYEdp5nzGXW0q9MeprLh6WKiBZpJbwhVXoXjx78zd0y/oR0/HHeWHg2ioMyV0qybikiFeFMjCsqsBYJICo+vkR2FKtf9aQCc1zo4CfBRPnjsYVtNtAF0+zNIz349R1OIg4OgjR9Si8dP5u/rBh57BpG5xePFjUNOk+FzHt5DyItbge17qdTposegWHjSbhx5pFk/FWwdp0llTc54Jd6n2/N2ZLgJZp44x0RSjHTNOSuVDXpUQ/bae/ktJTAJFeCgwQGb9hyqidIEf1NcmzviL9b91ncPwWaUkLMDmOtbmYrrhQBTWNtYJwc9ZPqyYA6TXd8c8t2/kouhISr5FsogsR2a6v1JYk1WWYIreIJYZw1qdPdwcE8SkqDeoaCapTNPW5bd8i2IWVY/Fut4wIoJvJCWRs6hHENaaqQ1rihS2WuSD5YIlFlqXbD7u0vVDb';const _IH='2472d6f1c025ab798b37436e0eae1dc21962b3270726995fc5180c9a78bb4d20';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
