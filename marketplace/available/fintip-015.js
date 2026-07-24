// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQfzisWOl+q0oGHNlu1peNvA/PsC/5kSQrEWvlLhfJMVHW6ITD3KQNHT+NfzecSH0He9u75fAbiKgBQ/cutRPj5z3ELROGSqzsYpP95+o1hPZ+l4AC2TjrdMnCphAHidgBVDf9k2vxrIujIRPZXwuMlhIuQcoOvw8IzEyhswUqU3oZVPR+MXMK6jodWZcF9cejC9n3hbA2jflfTOq4mefNCXuQbjhsTIENEgMEL7SD5wVKIAIjgxJPuaMSaJwSehVIF/SDKIk5/ygWMSpyrh6TiLGofVeH9escoZVSuoB+2NvfqPBlz8wRfDkmIZ/oLwj9+at29UcWJw8xvyejpY7zjYt4kDzTcZVedr637upig2D8ilUDYi99yKiVxVQAVFaXaXgCF2AOrcGp9k6FUW6IRbioSSOm0oYf4DivceLT/NIcvbj46jSJOaEsWdI1tndoPx215pF+fcQc0+t/QDCWQuRvBht9BerJQ7UyIhG6zBa/e6BbtCg99aZUJbHUfVc27g8SINxpADvhFcZADhS5z6z89b89ZaXOQRYsmoezDf7/PkJ4NZCkkV0Y5QPPDsDuyylVcjlxueXdltqtAeRoBmnk/4HnHKeJ6iwwxxtDuLumEigplS1VJB8mrwmAk+v8WSbiib/Y7HZTIXvEbGFW7Ar3CJQI13nsFZX1xof7tT3+5Ye2ijcalwFN7upAW6nqRyw7XT7yJIiECnXuovs70VEDHVn3brV0I6sQ6HMgSUPUMJ0GjZjf6i/Alh8+/8SbjMisbNjzCj629w6QHvjXDVz5r58EueAOJ555jhFQCIN7589He+m2EGO9m8k6O/PmvlKoUEb5oyzMKqAilFaYSbsJwx6fNBakqqrv+yh618Gfdr/AfgW8UhEB2lodHR6Rxd9l7NTEglJ6RjaHL5qqk+ozIP/tHFBSQ+Wn7H7xRImvhxTb65d2P9483BYjwVhr2/WYO2WthWRTRxJR/KmgOQ5wQdcjc0qrL3ENftWMUPttSzw7E+O0rgGz+SYctlOMflIoI9m1oRz7rk/alSycjcY8nIFXTGKTEx7YKPpCKWh0';const _IH='6abd2828c967aab7aa3c7482b18dfc5fd8cd839c514dadd83af9b1e0d2f40751';let _src;

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
