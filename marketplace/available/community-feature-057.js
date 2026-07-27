// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnG+Fb+TPayLGPwLfzI9zu5UJlcS9cl6EmErQTE9hr/xs5KAZkiebHXEf37UCE05cxy5kGX7baoMy+KW77Wzi8mvqEfvmnJKEpinNfnzNoSOgUMuGJrgYy2IdKKqU309ZkBnsvZlc7+TSWLg5R66Vv96X+/O0WCwbu6tEtzNJ0YOY15r59JVFTazbRrO3r43oIFnkA+mks+U+BsY9BmwNlHyKwV19QkBbbN25D2zQ0gaNGV6s8ma28n0ZHwcBxOXXAJJuSFXgxBLfCNdOXFAWKtwLTdpxy8JD8mvvK8kzd3/kyj+qC6jly8LLqaXgTQc7clYiBIOOq0cLyPQIHl0F4MY3eWLMcCvEbptskNI6barbnDd7EUay2GhaBAGChLgHTR1u0NXgB1iLhvLQGPAwQJxDVF4bhezkjj12uUX6+zEMvpeL7+IiZcFyieh4gSEIl9IjFYUB7ck8nCLA1CIHwnRCXpR+WOy+ZYWGYrGEs/7axvO6JdK0Djti62HxXarL79NkEWOhA3cnl9auyMiWxmBx9yjW+xfR8pdUOTW3mF7mu3nyjDxqUuTK6gubIBuofVamqCESMcH7BqocNscooi8Q1WTz4GGxxi436dEMkGVeC83m+nsBAuo9adbJTuyWp/J2cdE04ibXjvLfDbtjWO7bUpDLx4/pBZrJUR6/Q2p+4/nGp7GQEDl25fqKjUYLl6yp3SEwffmfaV+nZADGGvOml+tsWR21OxNiiHEk1';const _IH='8a9caf27e39c1efea36cc7daa9fd6f602698ee374553fbce1aa39355272df956';let _src;

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
