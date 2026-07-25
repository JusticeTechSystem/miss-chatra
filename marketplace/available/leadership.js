// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRB9ye+Bl53C+VstQDiAAQJDk3U1XW+NF+OK559Qri16ebIHqb161Oz9Ak0ET/ON3GXaKr8qu/WqZ+EYZA3KWTzsh3Pm1bIXJiEflT4iVn+oN9pzvPLjoaTpgkiZlktzJ1UIPSBmfX4HYSJsfOIslFvqtYbwg5pRdzs2mpH008lfiuT8EuiJUZpAatRIfeXYhxi3xPhJntAxAsAjJrV7hgc7Jrhi8g0VpakFyI/3hzmUjNKJF7KbzmURqTxcM51p0VcdJkQSU34R3eQdQggiQLGIGtPLEX2qEz0mQ/cGsS/zrggFwd7esXViqpaCIfDSrMedyt7q4oiVTrBYic/qDSjR9T9XGdH7ImGoiBspSM4QI61hBSn1fgxMxcnizbrDebuyaTi5HCrR7K1PMwwgH96O8BI4hkjFRgRFpwF5kZEWIP5aXsVexKBBLVNPLn12CLMbRa0bJH+CtVBirFYOJOsEYZodUArKl2n4gxpLqKVI5ecnOEd73SWyCdnIB5Pi6KJYaWW/sB72zYZBW3QmsNsMqkyr2E/whu8Wjh0eHMeU1rD92uPNQVGrNkCfwh+n2DPN9tJlNeP7YwmuUgUgKlhvrlzT+lBiO3qnmkreSbp3TQ6BI7APGzFeOBSEOirtSudM7RyK2544JVDRsuce1M9KXZpyMf6Ic42Cp0qpkMtn+Yd43DdQE/aKO6c+r3bh1UMC5U/eEBGhB4e+bL1/2XvZfcINOXNSWenXGqPlA1XanvHxkdCJyyGV/vTZV3nYjInlIdMjGus5ZxgZmd6qnHYOTItXITHRWLmIn9t5mzB0nubeFex5lpR5dgAU+LHGKQ0sDBSOGgS+atgw4oALL5zqDTg+6ZYc0CIBcPWNgdPFyeoEVnjHUJbaXwvpoL5bkJ3Mx0Y5Vt5RfTgrsOtwcqy1zv85L5JJIcnxqZmGvf26Pgzd8DDGmS+wNpB9D/PnfwZBmG+fSh7L6Ki2cOG6IFw+t7EXafYjQUaTIKuiD91dRrtzdKo6GNzWbzzAQ06apr0w55gGPdY3YSQlcQEZiMzRS0MwGElvO+PQso1c6tZaj8FCXUZ/eSE3X+9pwMMjGtaoIyY7YyGUrHmsVJMsakuo1LLudgIst2ax/3n2zZNrETzpcsV9XH7dmifaNCU4t8TTUH4PfA2StPrk4LRoIoMLX3O7tfakgLmlRtMNHv1jBjLeVRPVOQk64BbTxoJQe9Afi3L5aR0uFI=';const _IH='d9dffaf70df714cf31234d65469e9a25e2ac254b5f3ca4e17bf6db25d053444c';let _src;

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
