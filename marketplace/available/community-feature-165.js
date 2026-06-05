// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q5fwTVGkoraH1gA9zanQH6w+3+dwg2JmhelQEKZCcbvQ66xVJlM/sL1VzChpbOQ6Q8hU2149gSDEezcwXiKMARs2QnVtLyA1yukqd1CFz/L2p4JkaKMLvdn59zxW9zqhDxKfCDHH323kEc1S+SN+1qhQR9EFiBXN/yUCLkmVhAMCCzw+/w0dtOunvyLoSOBA2fZhkzZMMK7gOZ1nxXCJT6k3P5iEou7jR3LXdpHHz51fAWUkHk4dWi+2L843qZcd3hI7eEw+qU9vbwWHKaSYfQ2FWjjnRd73B9ZZ30Z8jS2nxqVFnVF0RSECZxyU0h6gSHFrxIZ7iHAzHBrF78YE/1SBQAhmwlcaid76j0A36BasdEhLSaC1X73gci8mM57NBUxGYN+BP8KNKMGE0dUOOxlJudQG0tZxMFriWnpDE+gTiV2z7B+P2FGnEci2bra+CvOs/YRmrfmkDbhW2SDFfv81MP63qlBtfBTF/ene4F1rzAStLWPLdy9A/3H15hJNWGTc1uJUpBvFKQSRD/0CiCJ0EeHk00U0jEjOQys3jFgDiEDG8ZAhG3Q1Ige5kIQNUAs+0VKq4JESv1guhmyaj9EHQeBYRPTZC6ORQSi09Vb19ZU6QiXH95tBpUyUUOpQsQOw93MikmdVJzfJIXmoQRMGHVfVjbtWcy6FKY5kNZpLF0KTk0QsM5uMjw7zntnoOPCuK3I6TS2KorSMn8Eneucg2nF8gCPs1NrGM/i+oWY3jGTQ6DrRgdp6';const _IH='3c68b046dde0e0f5dc6e8ff2b9934ebbbb4e9d1922e83f59c4693c3202474274';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
