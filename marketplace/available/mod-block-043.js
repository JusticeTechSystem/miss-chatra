// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhW3nqTMOES4FyYif7opC4plCYW685FYnw12tdTueVZQ56+Egkr/njPRW3CnpxLCfJuGZL4yjk27bL6Lunx/fFbMdYsRd1a/8zXGPpXTfZ2E3dBSeDa5Ao6jEMN12JadVaG1Gt8hl+VbuUw55KwouOXhUIxqssCjxEk3MYhs4XpJW8LLTXsZGq65yMSMv73alKmGgp0igWI8Mmoc7nWA+CF044yDtxWwGMqDFTwI7Qk6K5tJi4FkE8HmWrhFCl8bT1obs0bs4w0s4329r+m1eYpUkuqy9L85ZJ4+eNpJSqqkTvhilzrRS0+xjAFVkSosI503RUq18jOyd96vopx912Wx/IEFd5SwQoEu/Ayp07sudkFdKyLNXjkPKwvDW+AxkB0cuPEHRuGFNU+AeeCkUXMMpOt3w5iGqX4L3xhKjrertjhMWIRmk2+8VzM795ha4+Zh4KpPXwzg9pBaHdvhhRaAyDKA0AYqhYPB4jW0gfsCerS01FeGV6z42h8m/v3dw0az+BzeSRdUHiUgI4Vhe+EEVG5MrqClnjoJMhbXweZ3SyylupJTbj5YWAxyZ4JPoAzr51nENJG1ksELYdM8ZxU3cOJPTginp+ZHLp14U6G4QlQ/NZbpaub00Y8jXZP+WpHQL+p2rdV9v/S/2j7F4k/zMqtPgh1Njf9qNxpdIFeJORNCS/KZpiBBRzxgbWbKyfK7UVSqWVzS7VpD691mQdMb6dxv+3TskW/ZZ7mE8ZEHMFwEAX8ua3V4esznx1hy0rkASvd41IP3XcbDO2s4GGISOq528Mhas6yj81vLSx5in3vX5AdCYoZNEP5kgHLjAB57K1knSFmTSJzsTR11TkZ1zbZeHl7hE0PmtfIS4bFy05HYPT0O9JnxLM3mVNyqdoJg38xsI7Ien+Uuf6nDgedShaDxXCyF1aIkdy2GTFkqGp6+VX1qa+JELVr6xxy6YrjWd5ohvAvMzSnp4+mBGvMpnvcgcMaS16XWAS5Qy68q3H5QAIhHqws4/VAyF8g4ii6EZiVU/5M9qZyd5V10e9kn5Q+kqvTbWL0SFcDO5biKYyCxkMnGow5bCjw0vp3ZsEU2XAm6TxffwPQxk5EtxcSWx7hg+GruqDjSOzkcxT5h+ZsnVZ9Rm9NPQxOmykxu5EMN2Zw0cEsZIxeteo7hJnNsXiv67lphD40t7NxApNz45KGwds6uW8WKbyWJWRFfaQsg/vL4J0QN65uBcxmd7o/1cEbJlnyhHOJTyzZLZjmxnr6wKg3v8z2oupOC4lXdPWY1yFgQTHPnBf+AzqeN41PiNWbnuE7n2xFyzJzkCbggeitXMUL+VTY3R/qbfR/XVl5hLObkJzUCTa1eMMgeeihxtQZuA2';const _IH='d994b72392f5939917076d2062ec603f2e5a15b476c8ff8b7adbf3afb029aac8';let _src;

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
