// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoc1u9MMU2C7U8tUTfZljowkbqzlxywlO95lzaTCUz7m0FwUXqC6fFjYPFzu+u247aEpWKneCYKTYJI5L7zdti0e1KT5l+/+0pDgbyFn3OMbVXYwXrCP01Ca5Wg8Kq2Q4NlquM1GVVUiIEITytvjUrFy4ccENlPvWVzsj8phyywVEhA/s9A4Z+JnAbRgJR/qV4VYV7q7jXRdO4dKoVxIzUa/+WC4r9B19O3LhyGLVQTYu52YPNmiaQRpkzrHysGUfI1wwOt142hMHxxNLUlFRPj2HesJJEEPmb+BcGm2iBc65rnBY5QNJQf0lVYCXainUexnnMqGtdr52SXNIuGSy/suppNTQdoxNay70nP/j8esIv16HOZfPxJZ/jJP9Bv3rX3Jv2M+x3rV1TsFOQwIcbuv1D+6jjDu5R8mgdw40GQHEQh8yn0JcVA0O9EuHHX448yIa75P9Y75IEMTZl2lBXK6rE8ZpQqq+RlPnHwTLljIbraIh/E0PGqgyNhC0QJdP5mW4KzVWt/7EizZQC2DMfjYhamoSgOFjJFuJGeBdnXlmCqQHzZtmEk8EduFwJmkjVQ0XC+WRFMM5RyVkh4vrQCo+iHUR3mcXy0hjCSkfqQgSlqam8rYuhCkKk37yAmC2PnEnPUROIV9I6lU1n9zNM/FEtIBtwyF05Bp7w+h+hj5cZspajF2yU+lgTcRGI/Bvi/bn8cH7J9SW/OQtY3IH5ZRbXAbZpeIertTTIHxRJ566bLdp8aH0qPTruhheG1f4Pi5zeWfKNgSbdB0l94btVsbiS3hcV1yk2Y3iPAW6X9UIcd1nogz5UdKshAH+1LN2Q7cBq6tdlpU7j0f3UA4tVa+bAvG5ts9BIMkjtHgnmkLo2poW8Ci6hlkADViHLCIoXxHAzR7ELvg6e6l7AMyYAkqShr8M8I+V14gAs3xYQxihztMzQMeyLj9m0/drdLHxoCzTEOw4ANq8ErsyomPlhiMigMdnR5f/2KvhTXvS2BkXmEl1Dw3sSyEBapIYlH23oaCkYcSps5r4BaXJsmYAThdifOVZ4XJ/f+0sYdj5WRAd2l0AU2zfhjUWruHRddKW0lGaB9BJ2ArusPsYOtLroID5ueQ9maDlUv69wmBfG2p2m9VSDp81te4QRr8huXcxkQVX8aq/XqCQjOiodnbKm191O/XGt+Or4WvEsxLvM7Bf+qKgo+lHSQOGSHwbqY9mkRgCt1Rx4vg==';const _IH='3aae619d317b4fa968cadf3f9daa364ec31c7338c0f14106f1b8ccbb35303113';let _src;

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
