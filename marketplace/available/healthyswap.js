// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rQxejshmdSUl27VgdFhyyvbfiyBXvxievgJkhEFoZK5REqwN0Qi+DoK4YpFURa3Zaxw7TYk7zRP/xBFTp4acl5sPXsXD4Q0JztSWM/sLW26ww49pimetIY4c7nQp6uLEJdQjBjKzwJTGogQAiGPOdW/f47dUA55CIpJTSs+3SJRhS/omCEgoVXy9up42w+wILyx+HKnPMLbKvXDqVI2X8/URy9WkPL+VphvXa2avtEVk1diA/fuz+h87sLXIkHaCAN+Vqdjepe3Gn20px2ik43BOUu2OoHYxodZnt8oKnZHv2poLzDX8BjS7y33WBA7rb8K7v0oAz+DaPx9+AtPjbReuI6MO8EOvwp5skl12Lyjr8Eorh9QJ26VrzjRq/43fZ7JNQIosB8TRdmYuCir9tMewCrYbN5Ogu9XyDbENT/tsfQPAz8jIxMlA2tjbG1KLnh4Of7bYtAjdfbxJL+VDm91ZjIrI/P2NqyAsNk5DEHCjfSGTjBfloaULJEazc9rl2wGZoZnYG9V3hqyeqEbmNJqKMqgI1481gdG8TA6wib1jChHrt4EIr2HVHFp25e/CFyeQTITQOmC0VIC1vVxefg2/4v1Ehh6M0sHbiCH6t5bwspwWglJLzJqCCw60ZNK0K3FMyH3zPv6GpGFcpR7zmAI9Xv2KYyztwxlSYMKpHQ997sGmCvLQ8BkHT5BVAdbooFZI6PVHTjVfrIQarxRNpQGVXBknDt7O3f8xl+NX1zYS0u3/BHcOKax6VdBcL9pIhkrGrlQiHqDkjI4guY+VWaMBhS7u5x6s8iQkrNSV5qvGaTbAU1rGinGwqNPnsBYurIOHEv4FHukmLQz/HmMjF7379qdfeaPIWLPBJMeW4gMrtjLvNXgQTTKIbc4J3agvq0A1DODHTUzPOiULXdYFZTpTMn4xjTChXDK8gZJW8JrnOZXg55bwGtTKUR3jzcD4NuQxyl1DVSo8iV5KxRfRXn4GsZ2rxCk0jezwvoIz0ggrPKFMWnqkbbaxLA9pXyJq+0cDvqb7acSEvimLHiupLlfOBbJ0rOIKicLN9l4QYAL6wUJWp8yM8WS9fgsB0fqYBS2QGzPwGHENABDrguDoUoDAIY7DNbMQo3Y+MydWHJGHQCERflsp9MBPaly/DaXTNOuUw7z6/73rObJclFfxfnIPqwmkor8s4IuZvFBgpYXenQIwnOlxQE6FdRpi5atgbiSw';const _IH='1935421b07f610f1f4d689771114bfbcda57abd003b60a2d060017017c970e8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
