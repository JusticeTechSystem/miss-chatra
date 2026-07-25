// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyiAm8Gc2DR0HLxlqJk5XUKbcA5pPwXuP28XMraEMjHGs5xUhh1TWu6YxkBZVBHNQI4X0DefP3zZALfiNioMboz9Eho8tfb42lS72BeUckaT6IGtuuELN8d12PJpu2RoosDGxjPUHu1DhjQTtMGgJGwU2aLyhiFw3/YSZXchYTvATlWdU/4OSGIYbYMY/995VZJsdsFjv7y06widSa0CxNIID2bND9TGT13a2yNwV1nOpVmLNuiYhxpheLa+JXeRhMW4xuDdrRxl756MbJVSgUIHxSA4+LgiTwokRI7UvESXPWUA7I5VquaWlIGESvE9hECfBQY0w1fuiL/A6NP+MgjUEC/c/zv8XzO2J23qxQ4QlR/OdOeAocaihiUOiiufivHWYRiV/3SWkCHelkZ4ZgsVMnb7wJKvRKfmG2tFHVJg5CPEFqZlhS27Vff6scgpK9uu9eOffZNxxNlTBr8tpb4TT+FdlrOP/q5r3PlRMXi1ZzbEQFVvxvlVN64rriGPm+v3JPT5H85DeGBHwLnCmtbkr8I04hkZCTjn44ySMepwKlmdBE0zHHmXkP98LphMUSHng7gtYfWLlR59gG53b1s85qnjEjTHXhxmFSYjS5O8a7h1PVdgBoHwmmtbZvrTDcK2TcWd4IdfkjkttaRKljWg4JotsTEXTqoDvujAvCv9YurIn1tjG71wpt8eTU/kV4JBmd7KN6GhkR/0q2kONJMUHrFCpg9vQDTH5s9VG4k94QjeOy8PFQQXga6BpTEvVcctZghuxWET3YF7cA9SkXP2VMh6VSX/VGceQMZyX/uOpOfsNvt1vsL97Yc26x553Aowm5zWDzuu+uFSgh0841Rxv/enz79WwfR3R4HRtFM5rsVqpPZhkMtJH6ngb3ARbKN9CDA/1IUSmXlTGPz6lBt9r4DzxdiMSAKhT3gpaHqM5XndJGvriFnn8DkunUutNfdMPdczVbLM5Qy4s1mjIf429uV4H6V+qF479yLH66Ei7mzDKoI9B244SI0z/hOA8Ju8s+eTGcQ773teEnFwflkfDiD+46LrTAe1ul0AoeHJZEfllfH6JZ5Ln35q7x4Ao7+zMjhbZ3i7kbKPv8KTiheVQaGcRvKhCIqNzrTkWH7XdVSp3H/+x0b1OMcgcGDDOxL2DbWDwQbpyGCKCsS1ZAu+uXg6lXQPqeFsLKBOf2W0iYV7lmpozFHNI0djliPbazW6S03pAZJsD3MCATsDyNkim7lipW4t5hbEvv8yI0FeF3kivrSCivalRgOzNpIbfJp1TRjJ60B/aUlbl4pRfs7uWZx4dxEOz1SNjO8TNAPvi7ASDSQFvxJpwHQ6mHvp9AUCbsRAiUhyNN4fTuOWz3Y2O43GSbRHD9Ajlueeg=';const _IH='4d0de85aff7e5ff38c6148b5b8dd460cfe7fa9b789210632708f7224331a1253';let _src;

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
