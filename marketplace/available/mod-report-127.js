// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQb/Lyo/DN7RiP5MXWqzXEmlgdxhpmBeDnnNAe9FVVmO4IKQcliEkt14OdqSzEVx/wTD6j2na94M25KTlu1sj5YRElQeI5woWpUBSiPAFNKMKgxOTPogpUExXHACoNTG6LVYyroXLtuPRDDBW2III4kKvzMxuZlUVro0yLlZ5d87KMSuEH/DcmRpCmjrGuoL7ojywhWJKxdsi5FXxhxdwAtF/8gifBcZxaohvryzueXVXij6TNyAO9zb55nxHJOSgTvLUEhlhL5FBDSyB+oISuOS7UuGS0FC54t0Tz+pLPlnH2pQ7wUJiOWwTptDbiywnsiKUYJYBl1S0t1KDUdb4FJPXSUgjE9I82q24HNC23jPhNkOZMSvAtuzmCGQUMI+cDJh6YhhgX7eQLxqWag3zsKpHTPHzywycPQBKT8QjweaTt4tN2/J/ANZXVBvnWZ1viyL/3OFIRy35+03Xfb3RmHHkQMp0NM/D7uBXvovrflZ9GdCJHadkXSS21nDaPhZtj1eYjSzL+d2Z+urdVk70F+RYXi0trYB7USfz0KLa4YfPg1tuCQyEsPc6z2wJF8ZFnnvIlf+fXReRUHRMPLCadHjB2huFftzZEuRvofb+/OUlcOAj9UY15dYTEDkRFchqfGKEXY3vWFfaoaFJuuQ+Pra0bKvoM8lMj21xfHGmtvESXpqJHOXGvrnx8oinGRIlZghnpJlJ2goIYRjkagCyDJAekHtxG1M0nRIlLAOOM1O4UW9SkC2JDpuqoaV5zrfp/XHxXJtu9CDx+tHwmW66S1YfVQ8/vlFQJwyyN7/k4puewPe6yWsS/1kIOtJlC1xVO+RAxrClVmRodCuSiGqcgXeVjxNKCvR1sXsQToSIsB4fztpjNKR1Oa44bcBUiIYBhS1oUmFqp6NZUtTftP3Ya7tWwXGXXtggn7Sxt4CiN0zXqFk3yAZT/goZDG3R0efm5QfU8Wfod2uceAIr5P+DsXs+3IBAo1DE/7oSXbn66bjCPllWF/HPtR2CEWF6gCIGNmMn9pz3GRuz9dyFE/qQ+tXZn/cRiqmm8xSwRr6q2987gW86QWRH928EBhR3ouN8UmSF4aQHQV3P0x8kGk8qF8ourjWhEXMr1Zvwd0zdIjF92hf80cgjYzFN7OHiyxIBo0bhPhLrBlvmeFWFoQpZUZo4BR7UtsmpD1HZrAP/gUD33kneLMLTdThLVTh3EbSzR2DiTgtrsMbLcFgWLRJZl/LxADG/PGdAXyVEy9Ce9S190SZd8+kWF8tFGZHiRCYFMGLNpfqd2CtDkMeqhjRY63SqpIscrEhebeHcrYfi0/C9teXo0tzq3diHEyb0lmycYoIEo4+f1Dx0jkihpkVzyyNDFUy1y0nr3M9jvWTx50xczc52UmAQ24';const _IH='4f3768a636cfdde148fba732acbf92f64b38ef648ba0ecf1749ab038b34c997f';let _src;

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
