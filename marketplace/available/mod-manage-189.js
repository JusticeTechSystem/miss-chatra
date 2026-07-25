// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjd4Gg+nzcl4kgdwH6tzipP1BMPwmToDSj5DQlla6Gaxg4QVTTNvQuI69YjxQ+5A1UtpM/9NsMj1Trvp8v9tjRgXA1+Qhggh15UTJu5+9vxGJE08FYMpOStPK2E1XVXU3fNclNYy85B7VpqZ/Y+dQc9Nm9YmqczYPEzlrOvM5mY4RInaCHKmbjr801sgpGoQTmdIeBznVwXefg5Wv4yu0dcHH+o7bJiPPIAnP4cbM1g0jSAOpPidLhu95OWz2tG4NP3kEZM6NAHOUiqnMC8KWeuzj1W0yZEYYkfAv5dV9ZBQ4Q3SzkH3o/audQw2vGBZ97KmtE0sfXsQxtBfISqXtolWspbKU+3hy3bFZzIbERTmPzv1Se5k+4B4JPmdWLc0y2vRk2c0UekDXrkVV1qnnUHgMeaNfTycmbznwk7pIz0/V+OtVseoqSCHuqxD+fYmcOWrCe/5A4qzHQS+K4QtzkNmQdxLonEpOtNFNsdeHqIIVKhN4NlKbmZN51IEity5v1qRmIvuzDtGyanY4GGRxgYSmppn9ktijK33YXYS3zTbXqtva8Fy2VTvQhsSLwxBsQipRoEYgOTLh2NmZggBiofEluqhvuwqqSUnJDtU0O6SPgrAYOynSw5OKZz7GcYYhmL8YP4CHxNFI8OBFr+v0iFwJutFQMev++w0iSTDpeuo00EITL7fRTNj7WK6OJjp3AsHSa5ljYH1AL+SwESUmQQZSe+dcIgwpBRXAwBEm/TzOqepIMKJXO6mCpiDJvfzT2QhEygDqvCE4cYddGXtilx79mu/P/Y4HCvnnjm4aekUtUfsXIG7Hge5/NLfKRS7qhkXUKeygWybQ68304QnEVDsz+RWVpT8kHGQIsa5bummX2KrQmLwsDcwUKHrZnQESG7O4ZtxlRw1Mwd4BJNRuHOSQJRzL5gVJ79m+cFsuGEd2MT/jNyEVFaNpXa05u4oVcDV+YOpOlOSgeIiU/XYYeTkmf6KdKdgBuMA4+foq6ZDY9idf/VAeItlaSQyVv6GDVg8vyrfOeWnquk8xf0mjYiLtpSMZEQ5ntFqU4lLDFMGaozG1EXf3cE0hUqfSlfYG+ggyAKLeTRb6FCVAPeeoxgU/7lm5qrgNgnfV/YxLy7WHbVmkPbSZboEnRT79QKnf2jy9yBpQNsrKgSsnCVdO305j2I0i2eavuX4eWcwxvQgbAv20fay/I/eAtohTPzu4fde/lsHR1pC3jXU0RiCiwstYw7J9wGy+CRIWwV5qPB34BMf4VP/6xzRyn1neg/6zcFwgg+5abMqicOxQ7xaClzIO7aocSh6yNE73q2QyAs+kPSRXF3L34iMLTaszWaO3b/PunsVmJBBdQXPLVQQF1qptR1Y5Yn+AvGssESY8i8tVCNx7iEZDz';const _IH='deeeda452a3b6bc08d4bc29f21bc15fb70190f298bc2ea691987966dc1d5e677';let _src;

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
