// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcfzVOq3wYTh05PekKlxVFdf+KBRB1peV2kDE2UEa3F6P7JXTniEaffIx/FHBe8NJewOi0c3/iRVOZDfpucL7Fl0FIqE/akrYVjOVrPByQBqNv9Hyp2iDMAN2Xd30RY4P55bXVQdgaW74darBWUS9PAyYvI5Ti5vKQRs/uMch5jsLJUFgqixK2b5f51WJGOLARGnfmELHDF20tJcyLsyq1At37SF9rWh6ROrn5eZ5x10ZqUj3SslHptAGLmqHVNNZ+K7CoCwW7tn7dL6koznXYOZakP5PH8b1DiLmhbbbKeTujceeOrCkMwVwmQdGA6/4XMo2zuXpu8NEDzZJQuGJ+T8X7yhe2B8IB2lYlR4CEBOuaojMRKpi1GUTTF1kSRDgY39x2zLc2RN5Hw8JvRbr+UAOfHaW6d5I5jGBs9Ar437iwztuxtfR68aQOcQJO2Cr6p7x0+aC1XtdV8wbvAO3DrvIfscW8DhGbWCHhzsgFGZZ5Fad0jms43QQDHAXr+Ue9aD0Gw0ZxllovmkYY6EZWJ3VU2g5dYHo9YTu84u/tDsfZrRui3MCYh8DuPhKwTjRtjM9fcYQTAFwFmXADv7FPW04xHDA1Ih24TkB1h0shBaOSpjoyCAuwi8PBHawkAR9r1mBy50gSLgjaoP+160ZM5NHhhMH2YZxAN7/x2lfwRl+L83ig2c0cEKt3whNI99lz8hCJoJEi52apCrTewMbycuquiSfnRm+wv5gz2rlCoO4jgSaOs3nmn7PyoEJesDkV3Kh2/9GE6VUM6KgDN+nINNw8cuwaVhfGdKkwKoXS5C5B+XEddyliuOonQKZnx9iKOafdqZKURG5vGKngmmQLAiTf/ej6w5MabzA1+uxfyHMXfHYYahnRoV3jaLnxfzDI8P8joGv2VxLCCLsbqa/TAP6k1QFasIDiq12chly38HD56Gd9QCfbimlwm6Gd8g0b5hOZRjI+sk9oTELGTTF6FRv732nyK5mhu4jrnASyyo1p9Q==';const _IH='421e3fd56c37ea989e42566ef2970f560f195297c473aa08fc2b703e045af37d';let _src;

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
