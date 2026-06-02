// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N4dexj0hZQLw2LVtEtepfhzh1E/kbEn6KCI47zLQu7vXa22OtelXFdaAkXG3AvvwXMC91D93Nu0UxpHbRFTKyfhkSys9rpJKqS3P2THpyQoY30TgtOQPxpTqtH33Hm222s52Djq6ywDx/E5b6v0BmCGKiptCXHY4GHTfXGbdh1Zgmf8K4Ue69h8+9D81DdImpFE88EfazCj4dmkzFOjNpbDNFp/VLMqfcTwj2Ivx0lrP94eaO1gbhXGw+HqhSm10yyar057qQb6uIETigLpAB6FMFI8zTKf+MG1fUWzm09b55ePSj4qMqt7Pf21HMTgykzb6cgRS8Cq5GD4nwv9ozE/r+VZETUDIhGtZJpe18KozdN51HS+CpqmP+La8Hja0RgwyY5U8SNbh9+4ndOu8Rda7s9AMa27mGwtW5nEp6Jerk4iLxglLxSET73RSvz1izS31nr5DBqKYHF0NguH2smNRedf7B/Vn3cvGdl4SjzBU8eKp6FBbSL1qtr04ySDah34dzaiEdGyv24TKZg1uLQLJoXqFY6x6+9hqFJmqya77EaX9BY+kZGVTp+rXR6a3fUBxSYN0u/xTby2BN2Sfj0YcM6TBcDIdMFPHIJVgpoWTCF3NlbMXXUHC4uUYdpoUyb4J/npHr9S0S53asbY7C/61Yljzpk+JxZ1aPP6R5WZ6WF6zcu/w4uxDewFf/jcxClt15pwEZ4XU/UHLMDxratYm+Ljd3MWOcSAIYfdKGxzCKhSnYAzJ7SyXrvT4KcjZSUasGcqBNlF8EL4zWoXeB5NyosDff+rstTwt9lNLRnmm/dLS05Ifso6bQcay0EIdPv2MQx0T1Gthjvn9F2SjDO4wBcckGSUYYVJqTr4FRSSOf1WKd2QeX4laSx+2Xegl61te6AkL4MnE5hm2RulXA8zxLo/3TB6X0zNrdfb9ViRRUPr8ENg7bk/ROXiEWcXWyzIIlSj66h67a2qgH/pDS/KXbV6QwuzV/c20KJQhJE3/eHMyiD7kp1QufEH4D986yFQizpuLJ1Cv2Nm1wf29zOefw3nCRXkl2ebS1LVVx8PO9qgqRhC23DhBXkqMv4zciwKKdTM+JuyWeQp5P86KTh8b4b0PdjGErWixh+wVt0kwr9q96zsxtq0Mmu+Qazzvh7TYz2srbbWXTDVIdzvm9x32NoTrtr2768jTBpwaTghcchmIY5JCCxf8I63OIIq8V8dxyDvcDEMXmk0HCYOT0boQnBOUDZ3taHPuPNayEjZSAOAKLVGaJxX79LwNAKOyUZJ5ojcio/uHBImjC7E5USqgudBZEMwK6c/72recYc9ppfOF2YDcGyqmsGlTwu2sIOrfGNBoO/EnEzFwN1rxQtn27+sIJ2q6SuqsmQeh4b9tttrVe3Pli4boH5MdDoPzVzeUcOaPd2IJH/M8/DcQp09DPwtGdT2esrCfK1eRp+hlM9LnEM3VwvkoKQYWSydlohRhJ5TVBOWwO8WH65mZg3ZHwOu+tP3AzViMIvzGTOvt7C7bvCj3MLSWJWk7gTLeJ6C3ogtgTuQp4Y5O3u8mhiN5zkMAWSFHhjnUewnrEAG8yXfoRTjFQyg5DgSrN52yMzAnRHa8M6prkD7pUsNsI1gceQx8tX7LQT0pLelWdypR5pey2mkpvEKryY26IoftoEVA7kxJambtCK+g7q34X5WnIaIpXWk1q/F15wDLeDFi7GI=';const _IH='e01898a75f1d3ebe85d41122d83950af2822c56959013d713654f19a9c203f7b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
