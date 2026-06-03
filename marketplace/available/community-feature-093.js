// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H5KX+6W/+Z5QQj9K2Eb4R6i7LrmxJdfNKQWkabDUS3cXxf9pi9dH35cJFXmVCjfgpAzcAd4zmVmFOZUGf5sk/vY3OiurV/75e8U0LuB0guOduEPyfvhb8KZxT6WMFPnwmtnO/m+ouRTEFRjvs3jcwkQxRYP42kOkS5MrrKGyJsxmd7T9OEvDjeDGALAEzX3KCoaExNisMRsDxyApUhx4qwggaapxo679y8NEdPcIxprjwghW4dk4m/r+Q2HNZsxjqJ+Tt+yrEorG9cBE7HAHC+t6GsmVsnFBCnckPptIiTAMF/+GsKhwKclZtMlgCql4u97fp2EZ0qLKEFXUhpOPXIP3RFSeionpBTmBdtpmAEdEHFo8jkpS7r5kUZpZ8HvrFIQg1Q4EbjBhpUIg9QnhsJ6Lxpezxs5Ub0Z8fjRCUavHK2btncwrv9FqljjjBnsjeutEK9KCpOuN2VZ3R6bJ3YRwMoHT3bOBy/PwHhIgWTOoFUl/rpaqVRBhan4gnxewJIo1Jp4zjnlAw1adtK6WQLBS7nY8o+iZsW1FJSkmYClJKws6Er/YGZyPZW37iIksJhig0m0fbOQpXKu3pzxTlGFyTb/ewFQsmoMA/wL6Mz0oqL1LShe/DT2Am1xlfScl3A8A1SR6JWmhF5Ja8vtI5tFQjzmp2jK7L1ij1cJt/sg/ucZ4b6r8XCnPY/DSRZax+5guVren9D+Df1J2rc8QQxVTL65/zIIOtA==';const _IH='e0a6b3819ecbc624efe8a03d1bfe8abf169d5617871e123043a9ec9ffdfb4dbf';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
