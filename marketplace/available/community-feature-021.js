// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRa+scXFumYbBkJmeghTi0C0jTPiRsQRxSAAO7yhdUYc6I75PpSLqGUhTay57S0+WgFfDOxyy4tFUj2GeXzdd50OW012e5WcVmiN7xm6A7kRwOCL02AEM4dvUocoh7BDv4BDeMWzZurgR7yXgQwsmwqe/bwWFEqNX6IY92nQbTSbSQKmh/MzcFifBR7cNC7zXbi6N6Kk3fdwToxTSX50xAbTgw0r+tqGnwUQb5jII9MkJ5JgfhjStU5gHV2P4BUiYszPy9FLxN5Gb7kbMrI2xYAgtnX+OUcHRZVR4a/iFOP5NSUrC80W0DNOtmHGFyWE8etefaH6Kbn/WqWW9q2c8y/uSogH4HtHU9JMa4PbkEWWAaIkdlUhSaxPoZ5dlHwUBc5EBw4ehyt6oY+6LcU/6BgbRzzO9jDVwhTt6VXaUTx8rvc51k9a8mW44Hnw8aM9IMbUwnWTNGBGv0NpcF/URNI/rhtYdBMUZpnN15Hiq9IbEA/GrrWfzPDX0IL7wbzuquBqeGWAg3/lonfjqLAGYwe5FUNkRtcOwbnP5TpBcJ3c3MlQV+p0vLqYqKQ8g9Ge4BxtYdu55wh98nHbJt5+Qa4qpCNmSKMARzZAEG05AWrIMqQAkiEoz6I6Xs/R0cmOVADA426/xtOLB2n5mRXu91iqasbT6DGk5+o5NkTkvN0VhKkv/OKd9YYvz2bhw/VFQRbYNsxePo/QUJIRhj+GA+f';const _IH='10a6a0a0bc3a7af7b6b6afe591a640d34103ce399881cf1ea4bada9c35bafabe';let _src;

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
