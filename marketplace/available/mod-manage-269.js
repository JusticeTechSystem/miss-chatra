// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RN4ANe394Hv8tnlnVUh06tJ9J8Lhs8ycksZe4b8jl6k4EywZjBJjIlw1XKc1+cvoetPuln4Vtk4QB2thUMf12ShDLRzfy8xHauhcUE3z8si7xN/qtKtxe/AYaUN8sJlxUXItIxvddD66VfzQ0uZ5YKFABy6GVTSq8hRNkS9iMRaZJF3cIPC73p/TdtGnKIlfJyIYI+UUudwGbCgYJ+GxC4GyM9AN9heMHXWPa7OHrvNdXg6mMEzwK6hl4uVMFrtBo2ffSJg2G6YMeTbUZzH9tLX8Kd/KfQEhNkDJMz3plP0wx5Ktvzj7gkivdv5K51Jd/ede7BJrisJDCwBuy7j5Dzah8LVpJm5RBIUqT1Y1PhdBiCHfk/U5iqZbUt/V5j+HCPvXRVGHQoHHHSya5RpcnfT7celSoJgYiy1RekcFIJ378kklpDXuMDDmw5OOEa8VIsJvzniN9u+h7XNnvlXSEx31KIPr8weNO+Ai3mtz6NNqCx3rCKMl6THBPjUrbysXhkUgW/yrwxV8OQ/BCGbLJuS9LmlCjwMcdqpwasBGyn/njvaXrPHYZcVk0hH5wD6FPcnjORKcVvGfs+r7Jg6NR1Frg1LFDniMLMUhuRq9nNE04z+AvcA7AgPzdzkw3Y/1AWjvO+LgQEfsorsUi7prM6HnsQba/bvSSEH2/PsaUM/U6XoWjRjHo73XxHkXTQ2pTB9BAMg0Ib/KDAPrMNy3HqtFdN1dyZ+DbVEiDjFgBa7myVYHED33nxW16gUUrVOHlpiFOKaOq8ZtBe+dNPutaVA2vuDECP59wEcvoemywKPgeAKzEf21VMavMdV9yy6oZb2xovF5dYVO8iVGinwlbQBSnt7hjuiUQd0w1JHnv/T+q2AYTUzUuGOjOINReCZljtBGaaa3RS8a/+a97y1P/WgAtATPyIToiXqTDuiJMDAIgiY8q0pfjISUA9LNfyvrA2GTAUsaMGDMlJLDFYzNRs8DUu2RVMwxSKV8czbpJ8ASa3lQz0/25RM9s6ghDFW+dcQlAok0rUQbSHRBrGWxqx1CAYLPHF6CE8C9iA5bpzykvRoPAReJnBZryneHpPGmCxkQkJOnTq+i1SDNyLkhpOrGNTapOIyuwYKUM94QvXLUqVox7QLIJP7AVYMuc7UJ6zoY776CvA7oqL1W28rfn4LWNpLRiX6/q9+hQI2sEMW99PInvrV2jKoXY6M9YiN1Bsclou3U+XWgkXXwFbO3oVyH1TY6rtJKM2NDJZU2yYUKN+RcpwJNj4S+9QiAJcVcc/pjGLNDD9Y0XbYSgVAp+olZcdzSqvFKsD78IbznY8y0G2DWbk139//FYPOmFf9HWQTdeKqBsWTAzbHe1CdaMNvHYXuqSVxR1DInDcXtqLw0GCn42UveXw==';const _IH='33bcad56f2f8b80abb98b059b8961064292e5b9f49b24d7b6a2933b6f0dc5dce';let _src;

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
