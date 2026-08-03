// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpRHVaM9vetQI/zDbIacxDJnphPHhYrQRuAi2JHNh98S8PoJzlJWK6agNEwlMsg9cZ0MsO+y4rxpAE8BwvFeLa27ZW4etSCuXWAwCva5FEz8/aD2njtltnoHe8FmQ0YZ94Bhq1KntzLrGh0gNWHbnAhKlcb+ZEcmg+PZL34FdBw3lM914phZQAHidF25Gk32KwDoetunQl4bCJlm+k8T2rSQIwjcvGOd7r3j+ZtSOE4Qry2iyigKkjEg74FilFRT7xrGXE0Q+V3nf5B49+GSGVsouZt62Yfv1gbePHRxK34YX0sKNI927HvtsoGS236Z8R4j8GUouV5y/Lrzo8lDE96WpX7RhmbbpkdWyQ93FOji0YhzuoXQ1QKVxr9utKTqhlg8gsslwjCgM2QiMdEOrDP7BEo9GkXU5aApdr+PVdEdokuxZ6E9/BBY9TfENWo+cfD9fMG00njDbaZij513+cH5WZgf2BmYvszEinhxunxp4S5vBD3f561G4TQeYbM0LHaoXLGDKF7aQCk5rko8wbHiynHFRf578AaY46khlfWdgT/quS2YFPmvM7mRgSZYYvIzaTixNYrykfVhm8WX+PNfZq2IR5juQhmha15Ha0+QgAGxGJnz5xg1nwyDNTtNl/c6FUWZ0wZE2B0VC7roVWwHk8TjHl1eYL6vdKvwDTqPnisP5yYnBcMll+L+W54o8S3W9lEFXVQrj0EPZqIM7+axH0OwXdWmhy2VyMlDrVCEez5cCt4br9OeNapKRluZZwX2YjzalUo75PdiUd0EPtN7vycLnaF6Q9Alg8tpzU8HMtiKrP0pRkmNmln7s40+WqQTTqVdI6S6JTVTHv4VwEes8zx4TuOxKI9p0p1dqApOgW5hkPwWMFhJIBreR6AXSUQJPmPdmofw7duxLpwy02GI6y3ex2z0ncn4Fu5euURdlKKGBvEcBbH1ynQnwb84hNAqb6xq9NkGtAfGVuemLHiEryLITmDriwhwgJTR2FZbxrKLTUIJEz3oosIZlctW5HeP/4CaBYAFIzGPgUxawLUm+uxrI11ciiJ0flkauoTvN5y18NpyaO/RqsF/Cj/edS29rdvqo2S427yPSwsD98IWa9Q04HrhVVlRrs3LFSYQV5vd3UKRoYyiNSxhmFyxzkAgWqWDsKuxP+oeny88ZiyskFrimZv3yl6bL7WWPe1GefCK97vnwFOXLdMjXiR6SdGTks13y7BuvQEsukaNcKHP3dVDv845WZ17dtRKk4HqTwNlnhSSX1KgyClFWutxlvmdhv7zTFVV8FVvcU2YfC+2FPxRup7M9UFIIyJG1/m3Z5l3d8ULUiDC8mMiQqLPW054+835ZPGwlkZSWUiWYF9kl2zvXMjZ5mVYK0yuiMdw==';const _IH='4a7502b16d789170cb59194619e8b600af499b0e6a2f8bfd82738395ef8f8345';let _src;

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
