// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTe7Da9PQ2v2ZX0njXpf4WkC1+yPphLiw3QIONuPMEuUc4e3oQiPitkWwH3eB5w3Mg55EABWfEOGq82a8WLikEdHoS8VWDPS7zfaSVyZXoiCsTUkO/FYam94Cy92penNVLQlwTiWoH+lNt+fCXz4FhHTDvyesZGEZGlryaSrzYMS6DZbNOS0EJ7EehIwIt32rGiMWjdj6Vk7jTk7OCTGFyqeAQlpUNC8AMO1KoJ4rIb/X2JAu9kpu9zyy4OCbEdm0eGPZkYSCLLRB/KiETMqKqemm1VfX/+JmEE2L74ERL8LaTT7UtX9BpxeAT5Ay0+IkPiOA4Nu5p0f3qjYvu7vSNmLHrg13LNqSZjxTgrPxO/FkWosbCKXnWs0h0XQllB3n5fvKlfUcyThIlL+VA3NubJDKqUQsA8x4zDmsI83jrPyumrpPkYGx4P1P75wZM+haeAWgyKsjr3eY8AMWTyRsijB2o2bH3CQMsh08XTGH6TnbRH9DiufT94JAeTRsKkUbSJnwds2XC9Uh9Xp0mNqa+/D+hnDqSJ002ah5Yq4gXptmQTg/qebgq7WcQhrEotPFcF5C9kXAtcmdpgzbHyMA0TELeKMixIg0r+tV/Mez6bM+n4TGmPqCVEjqlU5QxtzsH6Bq+8zZZLL5rKNO4rpD07PGT79U/qVZ4tnkjOcXCqV6mI/d2XUKj83it7X51+J1dJIaCOXpv6pbYatHLTbVrKYGtrqTE0Yn/TZEbMgQ03BZr8g2qeb7eLVmBlE/0RJ+WNdUPEonP+IBktoH6x+bTr65tD/lhoBy30I9gAIDPQnrena1CmCgXff73V/lRFGyjshggBCXnlqqRhXpqJewPN8a419i47MaTU4GAoNEQjRR+e0jeQS6voalo0+cJRCRHh6d3bxfsa/zRfRXnLVoQPCm41mGXtjBKFZyQpw/UmGhU0v0OLPrAL8W/irqJ6NTJTz1hiw+OD5t+nCdX+TlrS24lqGbxjspo69HXF09om3xHty0ReEaStrPtRaf2sBtra5FrHxMY4GcmedG/YwMiWYlvpeu+ziUVNBD/FZqS5Vvj3Zd8aqDUfWWD6c82dQZSqc7BUmEJNp6lxZWy/dRsCE2u3KZj7YkrWkQThrNU38OPIyOtWGgOQs7f00ZwBQSUSfzoXLheoqHBn/zvhcGgBB8kF6OCl5dLHpp36hrs7Qk9cT7Fao8W5rZu0qdjEPTnaZNY9esjTiw5984yKCgpH7WTsYeTTr6vQv2FBJ+E9yQycbVYAJjaalVwQPVX2o9uiq2t6ZR190v5SL5DVgjmVr4myWeGheDqZ/McQ/wwm5oemaiyLtsgN+VNqqG/H57jkbITql3ltYSuSfjRdRoS06JqsNuQP1tnNXbl2Q4w7PEbIvEDUBPJJ';const _IH='268176e400572edbfdfab3fab9a5588dedf3646811d9f28f0869bce5cbffc5c7';let _src;

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
