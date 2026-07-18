// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRmwaunknnnnSLmGKl3Rqy2JsQoI8X0fwI1nzNUcmZIZZv1+RgCnN9WCwejmXMQAVJbRVNusi0PRWAJ/4aWgs5APOseClapOeB0wW0dMIjUau7Kt5Ay+ofcXJFmIM3UtWRE2HikArq81KaPglw84SGbN6rop1de7YnwZ2PeuN4b4OSude7NvaC89aa9xM8sFVtGIY5os6Fa8R0r9C4WQlXVw8qx6Yzczv8NKnL+l4O3eJc5YgTSTXzkhNElG97/u+4lo3V3aPVr9pwXyPubEna51L/cyygx6Odg/y4J7148rJTLTaTc9pgZgbHSapWFgPBUxbKNuP4MLweTPgw/5sc0zL7Pu2kC/BF1hGIFtXRD7Rwp9XHpRUISjZ5+EJ9d5QtvMh8jhszb76+hc5SFaG/entKWXYXxh00RBIweRe9KEXtPV1HhqMOA+kr0/TfE4gtpV3/wgjNV81e39aeziyIpDFtP4ssggjYOLNBny+B51m3CnQBU4q5WTcyOMUVWs2G4Xs/vjRikwIVcay9ZPrAPjy4IYgJtfZz0YFWViHAiqftIPqptzIAM4vRZk8niqV1x7fFG6xLOvW8KFUwQM5KHx0G3lT/ICFyaGtN7tREIiWmin5ytzl5/2aJf+9H2zQixsrT5D2oqm2TTekMV2qJoFqVoo4AMIkKmkN+vo5vjyHH6DdnLsne/WAsY4UwlQwuBttWsm3NxsWymNyD0qHGoba4oMQtadXfT9X/eC6Q2UY4RLRb3cLOFfipvb8E4ztjXhRLF0ZHkvhKBClBUtbtwrqiFYRe5AfOvbD+g93t3qod1CZOZ7p4j3m5vOL1UGSICSZTbsVKbL7E6CNwQmqMVRoD1R0zAKSaICdioreOfQ2V8I4lBSw7gUcT/wKGccvrDQsYp/5ZcRN7LxcTSqLAhwN/o4WtgbYOtx3ImzqS1jSkL8Fgdolil2GkkQKjIVq9y9arm3CxlabcrA3IEpXo1ZOz8SjJ5luUg2QLbt8Mn0ntWy0MYga2U7EqFEu8UtkF5OMEbcCOb60GDeEOSGqFSVdx0pGpwPuSTEbi6Ey6tSEZNxrc/AUOQrVoZrcoYHTzeYL+fDpTyY/wfZxdSAW7f/0HSde/dF9eQuByOl08xNy3DoqqGsBNHMWiWlb/DJyPcoMKzvX+/AIBEQoSxxStRlHcc/GWVLihughxaCOIEC6B/PHFscmOVja9vg==';const _IH='10b9ffd626e5a8152f0defa7bca0450ca41fea7fe7face710dc3c2993a90537b';let _src;

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
