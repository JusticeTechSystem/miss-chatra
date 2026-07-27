// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/UIYf5ULWxp6QUHhVoFHTaj+Brz9Mkd4o/HO+3LUPhdhL/jjeU7u4H7c8OyxEIPHM5ZnEgE8WFes6kv6XMLBuVc0F/MKtvkrG1asayHrIW86Mbwbdd9pLOHpLdxX1MpuehuePqzqxFZfzx9pnVPW7jbEVz56pWH3cTspXs876c0zvtLupNwGKRDq20T8/OHQTgeFDWfzOq9g2czem1vV0DpTRgbdyM4MdCIi25RC0g9qem3ktplOhXbGkirAyGz7HkQKAAGckfs6UEOhntUrHAYAUE/OZ22wdbMccdmkOyYEuRIetCy9HzSh9ZQut4DsvkZ68dMMcSnnXuRKUUYzhFNdFEhEhaK25wUt4beHVrNo3Ee3y/4M0f4JGxeFI+ws4dRMIgBrwiDHT0w86UrgtBGo9YFxknrDwsAxy2pNIupwv2T+d71sn42yX60jOG/ZUaerlo1K86dCmKlmcJPMB/AAuqYz4MA2xcFqui5lhc/2dOUz3W8tIChVBj1PMQMUjQiURWs6o91Gb329ty/rK714DUATNUj0Use6xGUpjAVJbGzgtr4Ny5EjAswdQ99Y4Wwj4YV3IHBCN6+nbexMdd0DDSg+kiPIacJXG0madiKD9Sv2aRvSiy+WyDnHkPXbhrAdqplgxaiUOaqTfWsmxYs5C8SpNsdDmIz6ZhX8Xw7GmHB8HLlxczIEICHFX73tUgCdr47K9ieliwBDPr8wZrIB5oHIwWU7bgNfpUpXlemNMwzQmNbj72ARYVJI6037Ga5bGIP95K4G/nXOVnmVXfEMpfZ5DyDQVwz5UoevwsiL6Zk5BnA+y7E27tUIWVZJMI04iq1lRJiyUHU/Q1EiQhfA5rSPyM7unxOjfKWk+LSJKWJvz01c+rnhIEeYjHoTB1/nYVhTo5Tu6QfPADcdEi9yZagvR7a44JK8byQFfnCX6AmrNEIpbRdr5x9FEEW8CHn9gQ3K7MfRmJkaVB7kH1I4BBMQOjc42WfxSdFMSYNbQaR8MamGeODNeC041V8l1tjwGu5y7hKS2IyMvEN+kMvJwr8p1HSzJSfPtY1jyHLhiiUy9ZT7jfyh4Oi2RGlONwwxsvEoAO8W6/8QXLPw3yEkA24qSPH77WEmvEbA4VcKiOSl1MTXYixYFXC591fEFx1qwsSvmyqvrsxz0xEcVBGQvQ67aZX0Zdwfh4tzZt29ZlADs+cTfzMEtZwkZleE4hTc4Ch9ogcRiCCLHWAF1/w04OimSOtfIxh9XO2f0vQw0v3bj2+eCRLzr7DE4NmEQlCvthagHhjQzdaDFbKWF035rturXP9ZNdvvlGJpK/N/o7eKXwoolxhsFAI1LnQ5cAj4+j4J3leN2b1EF6JSO5/B5gZrfdjcf5hVVE59F2XXlebrazk27AbzVxfbvBpxJIZCAnFJY7qvUaCk+FKNedNySW7ijKUJXh1gL6sqtRwltYAGl4Jlw5uTrbBBSpd0G4KqzTse3Isa50JGKQYHZter4moEXaifSrHCcNvJmFOKhrcEgPjw=';const _IH='98e28cdfdd80f2ea07523bba8be6a756a846acf061d961d9cb22865ed547ae04';let _src;

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
