// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBlXdc6eESPP/IRnN1ejOkz8ShEDVd9R6nHQ86DU2RdjbInt1SBKecFAnRQTKAvflKF9VmVW3IcEj6yow4khp5eV44suCzZJJOwOTi6MdiLmOkvhKRqVy07dI4PWU1OVy+KfsgdcPjTxa5SSp1JMfcL4hoGOTSpiHlCAb6tct/vhZDFtGRjYmSkWhqDFUwx4ChIjvG9HCn2HRvI1UR7nRfiwOcL8IHXEEBJnZAzjuM91YOKo09qJ7R6TdjGyNlzXpC4RVKmH05ZOuHga9Zwp32gCtr58HMqauNYY5JrjqtUU/j0cTS3ZuorCHGDPf45eUI+5puJIBIVs3tdt5cZrbqidlW5339Bjq68rTotarId7Nm4J5WhJ3r98gWOzB0+xcRy4pyFEOE9/Q6ANDZ8WqCkb0zbcnjaygkU0Cc+PvdVgFUF68wLmbLclEs/Rl9XMICEXaM+n5W5ahV1REtY5KKEutheDOPyDoNlmPGihliP9NsbdiF7/oHdShopUlxUXFSGWk1jPbDxzu0/wIFgan50aoK+NtHe+Dba+HdyGQGrCzyLy0ODBJ55TYGte7G7B4zXG/YxWtmuk/dV2CfvnnaEIesqwpOlgOM0LSXwQV4ftKrzX1EBFRpJKWz2olkK3N+cL9vyDkT3X1kWaFuIZ4nbdfBMMtxcu2r9nPmjhU5bbWwraJ12lKTU54d1aWTU5AqvdoKZocEH7I801ugargpHs3RGMuwWr4lO8ejaMp3S0gD5toP0VKiwf70bK4CbYlCo3o2nUiZbIn960Kueq8reP4w84+krkI0P1RA/G2PH7saCT3m7le5Pyq1s0An/YnMy9Ag7tDRIUj32l+DHSsny1y9uwDZp6158XuIuK/KZcEvEOvgxCQsusVRGTT2ZrMKqWQpMmxVzO3qe/bULSgDA5w6lg1U5VDNh+VSiotKDk/mHdG46Jc1Ab/L4pb5JHUlO06EdK0SjQCQOnJpDvBoqAoMoM7l4/yrDYOaRtWxMhINIbIfuV8bsCqE9HcBobMcotzQ5PFd8dV8Gwz6Bzi+QSqK6j4VdLqMrAul8S0RtMhM5+FqDuFEzycHyl3+dHflGYZ7udln5g5xyyIr0I4fqBvor+znxyrot2vxfhOENzQmO6otFJ8JRkHFVQeWmdHNZh2aXv0oxaKr8oeIUDEzvzT++U/yTx309PaaNqrjvmm9sco5WTHfPW/1TwA1EO/w/XilVox/0wFc7Ht/KSYK4acG6ooRaF9d4bBIsVVwsyVjlhRuT0sS2WUbutdjalEmTgH+kqx8RkVNZ7rr6DnD23X0KhQIrPAYpeIfZ1ARh1KYiycwHN8Cojdhprqnq5oQpzA4JuVSsaWpyLoL1678s3uQQ08wLutNVDIIcou5TFNreSVIo3jHKGOUjsNAFizyTg==';const _IH='7e0cd5cc043718c597fcf04a09a72dd7fee78f577d24ddd555360d8d3fca303e';let _src;

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
