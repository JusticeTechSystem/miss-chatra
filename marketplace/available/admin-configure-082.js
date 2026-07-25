// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSYB0VPyWJ65YIhr0IbqICbI3Q5tQJ2bqYQPO2Tz8+t/EIWNqoe/itnMBi5FkxxHaWLHo4CT5Hj9YjA7Z8KYnRsKq6nxoXWUk0yiy/Owd/Pi0Em5oS40u3KmWPTjvS5XUjRpPoPHVs17ZHbrb45MSM9c/tqSquiq9RTUSTznuvj3MP859Py12GsdcmpCvOezusxytYnZDHVy581r0BM6DijT5Y5vy8ZRxJnaQlcCn8sjbVIS+2UcHvK4SmYOl7qdxXgLx26iM/jGv4TBUfWFNUj8cOCBJNgha37duWSJb99xjttsO0YWdT8TjwDu35gfVsmrCItcFusQ5598PD5W71r7n/rpZxrgnbNj+PqnReIbNc3d5U0QMh4AbuM91U2Lr4FcZUZRLzpdrS1XIWyoC5nRIZLANAjfDDddhiQLtFFUYUYafs/nMGiC5R/5HP2l3wAnb9EUCOu241zkTnLgdGnnvTz+1j8QVO7pKhzUbMSk24jClSYeWHcpuSE+b7k/VMEw/6CI9iVY0nM+IL+IAVrEvy7oEruYgHsPYFqYJ8xvOtxj3sEEtGdXvXIRYmdMhaM05NKNu67XvG+SJReydcFnbuUEXOupOSBjlt+fQtm/k2kwDgEsugUW7IDs6qJyV2hV9ShRiIUJHQHwAbzW6YqhFFfdZabTv6RQs8h/F0SAie1mPGNdkE2YDBYZwa8wfFbBXHA2ezxoYDDkUlV+G7u41zqnom0UWEPpw02G81EEAUC1z6qhCWk7ji4MuXOcAWP435gM7AbzLlJs76S3HEQosChJK37G3DCn7lqGTV0tfhVqZ9fReha69UgDDv7KC+EulGVQTQwwfDZVjEhwxqM0w+oxMBDKLN1fli76fXsVa6UiWigJZvL9nO4U1xDFIJDgCmcGRSK55nJabbRbbmQJvtx3k90IL7fbU7OlikuT6fFQJkVLVmPrFgUbsS88dpmudh/aopdEk1Ifuaexnw04WmH2OK188cJIxHoL2V+E0VvRcvQFLzDdZLvfRjn/YmIAbewhGoF0U/Cqeuo0TINS0=';const _IH='0fbdf726d12d1f5863690894251e3a70777cc459d16da3c02d37ca9918eba583';let _src;

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
