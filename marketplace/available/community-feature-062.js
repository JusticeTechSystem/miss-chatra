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
  const _b64='T0JGdjSjVqT+krfsm7ylIeEc6QKlwYVIcprX+28EhOXKegrECYOI7t7NgVVtBPsKh0BVgwzUSxuHPgplUBMyHGhaooXNl0si7sRAQcRHGxVfCw2ZwGblUlJdl0HcpgIIG0muXxrW69xIOIaUcbGirWYjnYRtHYXORKYm7rhrp9rP74tihRsw/iA2PoFwtUELORDkqOM7g594E1ehGXFPbGv8O3KS4I81tvwWYpqFtlEf4cfhfiocgLtTL6I7DH6C5qLuFaTA+uOTwrPLeTVEVN4Ju5uS4uB8fRMVdnK2N4rDLyoeOsCcjwR9pmlTnzyRkkTjKjDp7+w5Tx5UhtjyGFViiqWx7BMW3MzgmAsVw8/0/ppg69AXmG1Uxovey/9TFJoNDt7Rwp7ZTIshmXR9JyV130W2ZtL17vNCuz11yllGddCb8DzLB70ytnM3WwkBIbZxGZFSxpVvlxTSaQX2r0nKaPX41HwipsNg0Q+vBybVdMTJzAIGqF8RgsleI+Tl5Dzig3VnoyYHt3d6ctRhZ+NTPc97Vge1l3jVkwfHG2wuXq3bRzsaBPIbIqXNgBSlHPW7XDPM/G25NBc8lEuLZ4GZWLpqry49gb9f7i+DlKZ3wHTjmYbdgsVNlgaxVAlkiG2fkKf+tId5s5g1x67yMt2q+coG0v4gohQ524r/tj/lpE+EY9zKH371D/LGge9HMA6p6DjpzwxmUWENP0GrplXHwRkq0yKnW+PdvK1FgtI=';const _IH='27d82c119b9989a835ecbc83b057f59e0f04e9e5c1ae8cf40aa70388a65c4e69';let _src;

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
