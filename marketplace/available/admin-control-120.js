// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CzRBTq0GkS8vP1XKppDoh98FwlP40mWJsAzu3tmG9aN8Sw9yJCKpQ5bGs41RrdypdxnGVjea9QFRN4mHTfOzdzw62352a5/46LiQTqRMoDMp71OXV1FtVdDaw6xzlV7WrrpG/lFbR6yZAeBkAwRDFN7tQQi1Ko2398V96c+fCuEk5F6U6Doc1+r8l/LoYUyRiEjCMlKLhLs0UcPM1KnyGwPZe8SMSeamthJ8hHrR6Xha3TcyM3/bZHXuwRqYjCsa2AkR7zq8j7DeMbLLlnAaB+eVl6IASsBNQj4Ti8FrFtnK85a4Duk1eWmer3MQoYEZ3sjXvXZ0qW54+lFdnrYM6pwuHHuezAAo7LDP4/TpmCNlR8fBmVSFntxYagUnOe1ECxAevS0WL6+IpxwSEOplgO3Hm9Lj5jbmupO1efmdYWdc2vkS0LcQ8gW4B4IbrU1gAFYIFiaVnxhEIYrDndTI/VUECt1sc6BVioIYV5gqJExkBpCTneoDEzHeErmbklRsqdI1HbcubBHrq9TgENq+oRsvar0SD/WJB45jUkPULBS3xYcfAn9oTjWvwnvS5q8xdCaENT4WEOAPPttNPWeL4B1cRTBshSJAoQmmNW6i3TZGCyw5yAX5Fk4DcOiKJvPXbHEr1ED1SgzCZ3eBkt71/+DSxv2bF78SngDd5M83cuOOuTV1689+6S6Z0vp5+XsNd2jNZ4f9T+0vkExggJc43v2ZFO5KfurN8KpW+uBY08FnRogHpyEOTuY3E9ik+DWuntU+Je5iRYYCfd3XdwL51eT1ZiTDMJ7MAOw3hdgBNViVPR7mR15tp7dAx9XLX4AgyYo3dMWgzdFQT2XnydlOWL8152KAVRofwIC5+QwLQf1Jq4zX9xIDyzIlnDvJUY2ZSKrnF5M/DAkijOuvoCUf5UuPwEQ13ObakEkASvhd6xMBMxYgVKaoosLtNRk1xaBCH2OVs+ki9VMG/Jl2PF12kbEkno3V1cUu28mmDj5CYMkpmjgOE3zdIOwcRBxIqmWh9yq2/KxmPaE=';const _IH='196e4e5a44fd7d61b2bf2284e6f431f97ac3ce06342e701d4220ce77679a9247';let _src;

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
