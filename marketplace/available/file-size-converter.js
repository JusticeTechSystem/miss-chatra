// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRq8s3Cm2t3H/hJ58AR8b8L7hg22POfngBJasF+vRLrSn2r8xhjxb06tNuhTdR7SGMddRDtnik9Mi6cyGWuDBNpw1EW/+b4APqR1hWlqfJ9AHdYsozMXSr7lCuc36sffxQ+pdHxXJADXFaiAoIBKyNXLTwmm9PvoHZ2wL7cS8XSBUdzbljF7soQZYkho5ik4Yw89dJu9h6AhzAHS2IgrnCjhH6YiHGz4KRvS/l2TSvH5Qyq0nkrGiTWFBV50c/oRZuWO/pQt2ZQE0LakdNLKik3FtrSvgAbJdhMYr/swSqGFt9Z+MNe/GJNW3CW3c3l7VT6zMBVUV9BLV/wPsttgM6BPPakR1jfIf92Azhm0D4gZczlzvl5xnfz68Cw7itk2jz5pbBn2hnmQyxYM1cAMMNu6m5ew8CEPixQwHIA638DrggbFipOHfNPh7kH0Cq3IsZMtqNCKSoUET89zYLQksOXb9kdTo8kTkb4NvYEO4siyxrWXbS4wj5lAwp0ofFJ5hnH9gXiwzlO8bg1FB4oRJiWn77xCx1G6hnFg0QXIHuJZxaS3cR9R1Khe3EFBfhTR2VwKtpAXgRcx6PbYNJ5ZL+hKCqnPIYcuh6UH2+JHz4DI0LS2vHj/hb5axv2/jgq0FRJ8OjvInjoqOLUaQF/jUG9nwzZp34FhUWBvnZ9QXDN1+rZ7gP0qLqsoTbS5z4ztaEL+uaLGbJDs40S/ShdZZ24lOuMGTTB4T+R1+myRC9VF/F294tso5XODHseWHJSYt1yZ7sIul0pdPX8Wi6n6O04gGZwBJAWKC0B9zhRVZHQnZ3dZffR2JeykJQzJitCpbM9QaHkPvsyKhI4/LDXoOdnasf6CTJt5RBr2RaW+h7UM1G5W9nJwq9zg/DFlhg6O3YL9Nc8Kcje4rLkeZ4Tm+6Id2LBh3kJ2ahpy7nhitQup6fLoOYe4cm2AXJYYl42tK/6VO28EjNLCCxraiUihwhPg28ovEIjRJsp5fHt49rjcBifJkXHpINEZ2vLZrrJCHPzt0uUK7utIjoj6+91Ixr4XHIXT7wn2eaKZT5wZh7J9PnjHSdpsZXlkpf7f75Y081XRjm1crGBC2Pze7sx2g+uS8lud1AdSWDp6Ocji25+LjKqSuDQVLwtUzzKbo/bVCL86CjU2Wv+NeIblkouU4CHmpyzGWWU5FUxjVy8RhojYX5TikUEXFlIcxpF5AP+t2NcviWNl8u/rQ2aVUrKqv/O0tjqB7OfniGLKTmIn4aj9VxUlGJ7n+0L3ivfNLVs5LhXop2a584bOAROkv498bJ/MnU+1oBd5yVmRYdeC+N72CSK1zCuYAnxgDeackmOurbv1yGHESa69Hk7REcsnp3gOIrulu/6fwA8r1VuSMqjANAw86C3ps35UnzIZY1aDcQMEMrFtFH46D8777BVcm52ookpqtftEyDoUtH6w+wwW7vfWE2ydrUAvdb89ePaQZws0IWNhwEGWHkMJIkgCjuWpGr7IcrEVcRHamCKyqmZu84o3wCNO+pZ2N9K4hS9tyc00VARLnj8CmZL8pDday4L88qU9zEGPEPl6C0fDrdPurAF24CHY+X0iq57jNBuuz1VMhgtMl4xKvh9iPdVjkeEPiltmlnlcleNAQFZcCs3vm3GFlMFUQoDOL6E4GiGK3uTfMR4sURT7hgtWt5IKEANOOlW14ea8exPj2hzVQoEYx33IUW+AlPoWwfoqWvrd0jAv+LcwvkIpPUnko37dh79bSstmhYB4f1AKfswjgZsA91Nrhlui7qg5EOnkhGuyUeRCPGzI86YZh0w95sb8PtsgCy8DX0YohvD3hTgZEnyUzuq';const _IH='93b4f5d0e0b67e23df327c2eb78f3b47a6dbacc703c518ddf83ddb879a2d4cf0';let _src;

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
