// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7K4wKDXPoSrCBcCtXN9uGxJ4sjPZJFwSMpMjkFiJs/k30Z1Ac9gZ9wahYDApguHDikXlyiU9kd/Ivr4zmy7bUa6Pxoy1P0a8RaZSMgtwhqjCF9plc0XH5TGxvgh5W2seAHCcYhqjjluoAIfdt/L6eFHzjD28q7GQDz0dHGWM0eweTSBq8p4cqKbzP2ai+aWiwoR7ZTrJZxSAOhET3BqoPZTBjIvOysGhxmBlembKdbuKiiw+5IGLp0RNWWElOsDPv5fIZbnBWEiOnOY/AXo3lF5DJJ3pn5GbKTD1PgWTGNjfuIFja4wZKQ5LSUt7z3ZjJks+Lpzw1DWBo6IdqWN1QAGhJHH1ZxGKqEemKGfTnbct6t1eq2hf/W6gYTB2XS4Izm+/9WNR4BRCQYqNy+P1bZ719wiD172AMK+GqLReOubrSRAJZK9agwzx+8ZT65fLRvbjA+RAxJwgdiRLmFp2WLFqtlUrWq5MT60B3oYc/vTgQiDrscFg+Ao/QUiFdiQtQvEsofrsAqpcQ8tVUKJlSLT3eGYCnbGC4p7iQ2A66EprcrFN8jaP/QhNnP3ehw+wJo2Ze7Lbe1xjVAYB5Jh3C+8kjbMQ/3Gul8A2chvObckRyQxEqTkarjOT4otQRowpJT8Ga/mV2bmH0oPMAiis3Qbyi1d/eFkDxuaBaqza0XzGgj1e4pTwROBzrcK+7m97zjcbIxkDpPIZPTzC4GRLqLJZJnhGsGt2RQOmR8uNMD6jQ5K/CpLIWYL5UsOsful1pBsULpYoJL25qqLoFyt2JY58Wh77s6BPUO2yBSXr1v/3/UGX6FGND4oNzGoeD4Oucsc+Dn84aQhJ0fpDLRJ8ntVsbDN3C7tcCbOrAMl0vMmIxuNnG3vh/j/MTJOB/jXObtATm9gR1363ATKHVTctjXpEWnNnPx+5ll+QerzRZR40ZjrvuRYgjr1mFbVVm4X4IacL8V7PGOrvm8SX+vMoSDZS6ojWIQh2R2PJXftgSHpi3cQ81zKRoxTgUhNU/zul8m/1Kh/KiBVJnfFlTWhGs4u8E7QRkocBgGkP4rgkQ58fs+C2vOmGCPqMEov5WV/HGZkFgtk9vhxAE4OtArwWX2fECygl8gERn40MKNAmQ8u2LEAVi32+zYdk1l+NqqRR5Mpw6HlhVQ7j+Ei34kSFfLLiDy3xlV6Vv6eSMYXpG1CZOrp9ADMrTkYwAtwypynI2v9Bbn0=';const _IH='71132682550911e175c3e86d5ac1dd57a081f8b85900cf197a4cc423077431f3';let _src;

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
