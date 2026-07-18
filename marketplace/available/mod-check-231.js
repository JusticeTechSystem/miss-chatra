// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSN9AcMSnyD4eavV6BCWeXANIHmEF+WJXYlu9xdcFYtRM4aTic1YdkV6pKmoT3kdrTHFD5WHJikjVx+9LBtHtoTpbMt06eeTG56j5DcC6ynVUiJegRwoQTzFgo76HdgaXyxiCzSx9GMHGbJBGvzVB/SyEW0JJirtv/meBQcjb9mLVdW3jWB8cGuF2Vlemp4ICF4i3iZkqE1+F5HfOXhA+44NHZEK6YVUbQgDAI+cEtwgZ/n1g671cwxF9ZexbOYF2HkTvEnsvN+5QV2ok1qpFD0BXFwKmp/UdjmNsMmcfSU5bAmj+YnqjxPLp+fEZd/lWaAYa3e55oTo63u/Hm0XX3AOxzGRmum4MC+lGXPMXcq4pYzohy0bz7eQP44JQ71MeILZFyI4H1Jfn1rSMJqxRm7WiyqYtFM4yLhr5Px9TR6kvSK6orMidkckgT7z+3Lo5tLq6AvfCjA171utVYr6kz7bVH3u0rOVoxauBBsRT4Riypz9KHKBq9KiuxI019V8fVeQA5y1anS+ogmKLKDDI10d/5yxxQvZUjnQpUNBt/K2Qcqr1dOh3d+lQzPNBcEzgGGdA+xRvhqnv2V03jkRHZ2rOTsIJJdrnKFyChIfAm5jBbF13pDl/qz5CEZFVhuVsbjU6ih2fYdoT+I3JIo07rl2hFo5XZLMx7RJlHQK/G5RjqI5w/CKFBqhoqPL2O/kvIkrpTYbGRvyg75bE4aRPeDraNpf/EBcaxJDp/hFNtSW3IRyPEy0dkwLwG6ubY1R/0Gz+UaMr/WCEDKXGH/wHi5K2dD4eXyWdiqg/GDLvY/HOvHoFhwhq+0dJhRki9nh0J+HyNIG/eRCQp9OmHuLBjXIs615XhmJO+TAaKCQthXS6S5cppyCRdxylVH+HkXSAoOZPEkPihkFNBZvMfc0Zbl4Ef9JGpJWsKanjoMZLCbVTTQounqCt2yD6G6ekXH1J+WKpxTS8B+qMqypS7zfADbopSW5QTuENsY0XSAmxIbmnDygrY4MpMNlZDzZFP1q58wQHjVNqFBeiH5Xzxi7DyGK3hmVHu4aR8vTEteca6SRAf1zNrypKFyYosvhk2oh/GWMtuaRlpx94CaVLS0gyyl+Y5xSnoma7HKWOVCNDzdLkRoye6aavIj70MTpmQ8npXBsTMJkv/xMqMIYXGJ0Z0amuxjmdReaG3RzTuCSK03uSPbGsS2023l93R88hANd7hgd0aOLLRud4VZGDHA6exa5s5LtD4IsORmSoEngAyxgymaUKdUCahysS1oA56da5Br/9b95aPMZs/rPEk/PbMWGJHZExpER1pN/gY+U8qbOH90Ny1u2t9o2z1o2IMSYObDdRRVES/25+s0TB45JY0iFdnM8L2Fsh0Jok9G+9M=';const _IH='af3c184a22a55bd6f69d23f946549e6c3ebc3ff0e7f689845f59e20c10a65e99';let _src;

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
