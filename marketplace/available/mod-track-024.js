// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB9eVsZLg82paRyG8AhMNGKBKK95g3kSlyh4l2Wg6BPh9AUFzGYLp+a1/97uizymH9JcdfdmMIYG5I7x2Cm2VlmkX6HFmTkFZHtxbgTn4AWZuyvIbCngQZpbRq7OvMWo3k8+Pe0tmmQpfOg/3y08Bi4+x2n2xwsy0zL00JL0WSrQissROv4QfVd0ypSh79F5eHHrrbiy/9IlHBtbH9R6A8j7rUyfyQpK/0RNrwceb+aHrUL88vJnpVNrUa5eMNEDLJVP8KY+h9ph+gKNtpfl3rTm/FsO73dbt8rqGPTeplmtBWIz9jJUfPKgZl0734x03U4TD/xVnrRojmyP0u3shkqVbR/qtsUuKq7RYzENGhrN/nGh0oS3pJhDVGJDRrgC6JzLNBANqqGdEtwdiyJkL4yJ3Qr3bmuFNOidyttYY1JdONc8+2ogg8Kqe5Gl/T05ynUJWxKPPvVuDMpy8z/DULVmd/Bb7ZZoLcMWLIMIRGL8JXuYoHtjdA9JgCpHIlbpMEqgVwgjjvnM906AYUImruFCjJvD0m30J4QVSlv1B0r1d1CH/pnGcTyE5+jER4AsXUli9WMJS0x6EiTnnneG1g5LLJelo92joYIB9J3/3i7CauNiGG88GMuhe8cRoOfMPPWKZpIi35cggsqiXG8QCHtFn/jK4bqgnYlK4uL0VCIBDd57TtOBW9nWpcBKFFA3/t0h4SlblpqguUkUlOLyvEDiq9Je6W4CIvzCA7Z8Jw1lozNxOgMyBxCzGnKJmNTrpuyPbOK51zGtRyRw6UcBU5yzPXPxXJVlAUtBimiekvS3djpfxHeiKHbJHtipR6PTSwRW67LDGzNlnMCQ2UlaFKIyn9pI932/HdXr+uEDie6qSw2W+s9VtqjUwEyOxXyfW6tsT/nGb2MENDOCvxH35bLUiJyoplIEVZ8DkFW8IDNdQ+IQQl1nNVf61g7ssym/xJ6cJbw3BbMvobsqbYSfjaKFTYcF3rAfh6ethD7GeiBemIs8KPcyU0oNhKYmZtbkP+k4PrHYRoEhB4Mif0yCwoqsP/jwPFAsLkfs5Lj30Py+3PE97PDiEDj3sJME/wKyqpE/gDdNtHDCY5wCu6DsXVH2RPEU8BdRCN+N/YPUUBCdDIfnssT4L3F9jGteThu4TRvplMebZRkED0eTMtdOLrwpijdhmY9J54ztIR940CcwYe4AMTZvGCe2PXiAuvAU6DSF0V1hs9Il1XIj63bGYQWvyIwtTpOAF4wajV3d9PO0Iyoz6MJJr2jRzha1z0gsW9I0mT+5KtPykHaCUjPBa3k4uBq40+tstfbU5XyvJl3OHPPNjABxzyLI0p0JMIFinnRGUT7abtGI+QBrY9mNooc0bvacCIk3lM';const _IH='ebc674932bd0b5c90fbb9345f0e1da0e720419f9d86f813d6b1cea3cd3437134';let _src;

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
