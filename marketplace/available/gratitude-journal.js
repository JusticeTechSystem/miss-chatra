// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuu+rDEl178940bK/yQHI+M8Wc9C/7wGiLF/sZSpFNS74zp647SqPHOYJdEEDcPSGusaSZui8rus3XHJN7fKZ8BLfLWsD7Vt4PLxxIR+oF9lE24Ac6wjduPKH3RxYwNJGLfP2BSA+V/IK+kE9zm4/CaKQVwkg+/UmbLpUnyThFjXclu9zljn69Vjqqw3+NaB6wCPahJImpHXxA7Y0L2DpXzwPDn2XEiuvcp18FliJ3DszbVZt51kllBfRAoxHJKI/OQVEcFCVSDP/tCcO57zvIGtN96Prd0cb5ydZ3FY4s2RZM+ynGpTMYeTaJXSrOnta2EdQeq38n1QkNa4X95GOm7kuIS/eH3qfoZoptGjd+wEXhrw5OYf71bni2QAabNJuxaHxiDojLdAGyBxrPyzzio3P7194vPfrYRuK6UE7Uen7Sstsl9sK0uMDtcPSazPiZhhqxqAohFg5CUE7aUH51KYfG/HiOm0EO0q0VOD8tZegbJLoYf9bbFwOmqvXWyso0yHLrVf3aR/IUocC8hJlOdnRyvR/+CAeLR2lhR2qCFiJqVtVR6k9QF+cw6AGYyOEC1QephWPI394Rzb/+QWYceFg+qz/MWGgCQU99NbNIfVy/+PR0Nh5mxsivjutv3O/3UAx7vvRwxPBoQ2rnvnFYO3AZkFCFTTBvLDXqMJBNMTNicV6ECxRHg4yPmfBw8ElVCwymTRHx4hb6pswDBcfmcZNVEnemOGHZ1p/e8J5zDuP1AMoo8w1NLvMZneKYfRKmoeiMXrLA3f6BcYEPYtnTlrlK6J8C2hhaKuW57DOF+IVkCMvz9UglI3SGdk+Hm2lN4Z3Sq4BVIhr5A9F8uf/4WF2Q8Pf626CKSvCmja1VkxzTN2Z7ZUqVklRroA5OqTnZRTLVy+miv7UFF71AeBiRviucAGQjCp2pD2OgvlbMdc4X+E9WWUL+QoTx186Zrnvjk3QEx4jgsuPsN89HN+TCy1bEySE2whfn4Ng+alFHioESRYXbnMFGZUK1VPS+lLONT+YaVZC5jzZk5//YcHHJsak25bX1rN/n3QlP8SuinQAFXrOiYrq/MnVC5F6WOaT3kHcD9gfuIJazwY3Iit/t1hbz5KSONdKxb5w6AFLiwsSvtFP1V9AvSdyVpsMh+1yNTfCLjo/3gVVZzPveZ/JotiNXUWcnUCjS+OFKi+uSOxW5SWHfw6Pc01Q6n1VSxC0YksX1AlgG3ppnSWtZfXP+XuLiS3WbToVbODOGeEbEWZRqHyN+JkS6khUKX655JUk/o3WccGZGKf8bjJ3Kvx/0hDp2D+0HjvViki9xq3/5SQXx8UeuT1LxrEqRJHxhlUpJPPfO+KAneyV4/AinAub/QOaqb3c9jjAyMEpWUOOwk/CRmJXdnboPMbObb/kvpNNUuhkCoarsazgXK+V00z/S4C8aSQT/WFP63r4u+cQczyvDqmtzIM/wNi7Dh28S1TBO1AIusqcA64d8ulByCknJ+9GLaDiSX3RAjZ57sn3JWlXA9qwkiV9BgHXBqQyzvI22PGkPEyrrk5bRxW/WOibduduIRh93E1BfNfqD5gH8rN8xgTMuMoTtkHr7oEgm3tJOkHwS3SOCLmTYRzVnQYI75XD1Avrg/73rVNvKJQe/erpEO7y6ViSOpo1ymGzsI6dRXFe6bvgao/cSj4rPqtQtua4hYW2TIl9Zd7J2js4vOS51GV8ikjQult2L/0r07VbOKG+f1tv7xEljHtR21SSuzwMQhnuqEsTvYSl2CAlEUO9S0kShzlvmHhFxHslQZOg7G4E5g9IhEGODZYb2VQpF2Vkc';const _IH='16cb1efd4ac81c55c3af03df988597e60d94e83ad687b1b6dda6e7c9127b14b8';let _src;

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
