// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2fGWXs+47KONHL9kS317h97ZS50Nkkub72Arna3W+3tGSwlEq+0/70BHjqNd5uaji5dZibzKBfwnPLJIoOvac+TZOXBVEg6mVHTChuSZQyrkz9SVSzEsW6BSB+tJNAxuxC2Hs1FMhzdfsIuB5jtE5VsPg73YlA6l8z+vZNYKtCTrLnpRPWx3W9ye9+gl2EyQP57gn+UtNwnvBxOZG0mYYm/+UZnEb8hhgaDTSTwBh38aGw7XH0dc7P3nZh2mI+LRgaZN9VKG6pWxaCXIeuo204+3t76NZlI6Zo+jIgppRcrlKFyWTb06LmrTi0qXMl0ox4ugqHYy43BCjZVC5HeO5TkHBzwuM3Y+Ny97n0P2f+na9rflGnIXBLWo9LNVWKnybW2gw1jKOpNvj50e1luG4fo4UB0P2/oeqRZ0gX/znFX1ivSBbyhh0rQcT7dne+dt5K05ofoDevG/yuXAR47IwxZwBM14tLwVMBv+6rPku2VUpr/I6ppeaOIzcKb2IDHW+QZjc8jLfH3vttzU7xygFmBh1YCab2DHmx2pZ7gnEUqF6Bzw4W5xKW8GF2yxptmMeMqSpN5u1RZGW/Cs1P/9BhlJrWAlqw4EDKGvWp4MJKlqVlFaboe0BD/RyDUbEYJOf7q4AHgZDYKqOFQe7KH0WdgNBzLe01f7n9Hv97cLV+mKVlUHTSiMmVpi8LyD6n89uV0Q7leuOHHYN+AaxwmEhjPC9BGmnC5vvhcRxrQPoKQ9FWI5aG55VO/tw5n/LzwhcU8ETQnKendUUAiJlK4jDv/RFYManPSL5YDWQIVqVLL8bkG6i7avak2hp3yxOShp8h05YzMyCPEYGTvhUjFcO58pQlX915lNeMxNV3zMCL0oSo8wPMpG4dsU2ZwsqK9qY7DSmhWT3pnCaxBVMTR50gSq79k29hyzIg2uSnT0MyKyFjV1IeP1UhaBKVEkF8K4s7WoCFsZSIgSn74uKzKV33mF34PcebaM/KK+r5g1QZuG2C9LO67moTS4I/rOiWngm';const _IH='7b65f05c60ca0b89de23021712aa221478a106485e35f9742a805c4c14bede50';let _src;

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
