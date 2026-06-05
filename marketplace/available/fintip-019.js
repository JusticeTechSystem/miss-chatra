// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eFkBJEMmGL9KrnbVAZIB5eaobT8d3G2038YwkWU15vzj4qSb6C8rFDRFGCe69XJvf+AlvK9mKdRPDa3uqHvki1wX9WlcMf33Tn7Yt5eY5XfNP4Fyu1dZhJOs4QyRMesjXbfgdrIqKxrMb4pCF/PdupP2WV+neW/QZsYRfPKdp9b8LGPB47p3vDL/atwbjZTMie73a3ABK/w9V0Nkk36TSb7b3dJIiNvarHKvT0WbPZbjAIrzz5JMA9J5waevtWJdyDH8hJOBE9t0Z0s1W7sE1zqTG1x6VeSbIW7iTi4LBGNU/HsbEjK1XIBo8Q+He6W7XpVDDF1jZW6CgF9fwx3uTqrfMaW+9kFUWklKpji9ar4YJovOJQGRo0Von7TtQnXF3uQW5PJkdSloCQOQ0Ekp9QuxN4jHwk2mb4mwC+/p7ScL8aGfCA/UAoFMyL9T9JxvYdZd0GMqbUr8JgtYmjLbVMyi/7TzH0R822DTgnyls7BKAX/xPRI6hfj2Wau5q2suoA6qi5BgbpBINFCblMaiPhfv4dAm9UHwL9G1BCEXsk2pmU5Xj2JCz6P5fMydEBheRsccQPU9VX62gBjR3mwq8J/OOc+3+nW9zAMwciI8o5LXIqWdQHHX9FsU6jxKmzgyUR90L8zy7/SsatGaXUbyIcRhGqaXtBogn3ZIAiSnqBR2OhFWQ5vdSHxI/5rJy2XygumePJKXrO38t9iMMqTeQS0AW+N2VxNG3ELrB59jO8tdJ5/+nyoVQ4qmKW2AVgDRtmHfEOquwCweRoEih9l8hQHxuyBw4DUGfxG396KXOryFo/c8w7pxF+hxF4xCzvWlXcMHM67dgqTWr91IXF2ePgHK/jWA+gF0WxgbC1phnAcREq0tmQzkdDPwXywSywn77TQlUSUio6UO1xMqpoqrMfgW05QPdJ/wXPMIkWzE84hvRI2c3KlfVMgiRpZ/1lmse1ulw9s5Hrn8tOL9iJAKfXYedT5TaMCV4NxRnS5rd1vn8b4J9+7zaEUnLBdbPcDB7R+6+lMSgZaeorSLR4CzQYQdFsAv/ktIxpepNIW3w0VpLQ==';const _IH='18feb140f2d70196dae81906b7980798566bd03a381997dfa39b48768063dfc5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
