// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSo5QVaT+Va0srh7RZFcEL2iv9W8cxBLYXhSoI4kOCh+jCFGt87NY5CR9lK9pUr83+BvWeDtRPFNp790wndF0P2Lr4U4/zRG1595kkvzVTpETDB0vv8xzZui2xYIxevNkdkLbkhgmoKt9Sa7NPv6XMNONlCmFjZ3trbnh5IP/dD+JhiRy53Fb0b4qBcRG0m7mDa6+lE7y3kkWmkS6NO0N3GXjbsCM0sOImEYFBHZuryIqrRAfoMn67bmr/aadE38KxM7dOTSLmXSPPANkaL8cdIT96IFRXsuCy3TVKo7xKaSSB3FwGsp7Eubb/LuYVz2Tjk25SM4wa+ULv+joldP/0kaMQHThiLKLbh+EKLHXUbxQEsL851ZquI6FcvxSmxaDMZfPCYpvqeOLbB2pbyxDnwp4Ym5e7w0DzSKKaQlhIqaBDg2HKYfH9km0BCci7O4/9iIMdBMRaSjMz2abgjTqvZE2kun5Ix+svfgLZV6/VG/l4bRzQJwEWvhfB2zbndB3APcuqhQ0O17nswxOIFfQ9tsNhvP8DqhJgv1mE7Sp5QHA3kWHosk7JGCnHqi4ihn8jpX7DV+UM6gsD3q7hEy9ai/XY/cz9DMwRWIij/XKRyPsPRZpLdafOIuHWH3fWVLNn4shFOS2e2q+OjMojfxPpiOOfLxj/4PYkWDwgBuk/WiXex3OQZ7rtvRpdSfFlNer9TcBcCEm6CpCiQ+wAhvx6UY18p8HmXSIUGlfvO9S73twWX9U6p3YruBYp47VHaFBUP1GkPYmMwrSoeSsibpMtW9ZE6lk9ekqVPYksRchaVpZ51BmFWaCma5uGrO6m+8uVVaVYWPBN2IgVX6jolAon6HSN0dXMnANlgzpJ/FR1eunb6LviD+hctpi6NhEypJSB2lN8OI3QAAS0SVsbwvtSW1w7JECpxGyzWL4tz+B0pcHEVq64n010HaHYNunO7pQa14L9i2F8teaRKWMtT/ZkkMpd6oag6Lc3kK8O3JdMGt9bydQTywA==';const _IH='529997f5a3c7733289e9bd76b3064439ec24d37861203f99fbe8acfd361566fa';let _src;

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
