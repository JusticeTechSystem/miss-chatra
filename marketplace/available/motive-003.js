// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rH0PxPXXtNJLbXM4loMTQobJ0ef/uIVbGG99pi7TGFMMZNW0eNZ8fvdOXrj7pX6pclh2lKN2fJ/JqDGEZ7ioi01zpc5XNBp0lydmLiRmTn3kxoeNuQAUCah8SfyXXXJix+t0zE2V0t5wtsgsXktbSZEuqAH84AsS1SibYt0ieoOUJ6aRsqvTrwIQj3UkuttCt+sPwp0vfqf7XLEYdMOjaG5qS8pjKd8+gdn3X8EePEHO+uhWcxG556ep2eY9dUHumzGWvz7tyFORkvbReSImyTp5+OWjAkD9LE4/yzm5bNE/x+lVm8gc5hFc5RK8Ruw93Bk6N4A96ne1fxJEWy2TvS7vdzz1pypsLEk9vi82MNxeoiNWz3aAd7myxJT8RlZK1yfmUp/Cc+HEAbP/W32l5qOgBlOSzQSB+qThTqXka2oUkVHZzNe5Hu69scaYyKP6E2CrgnflzY9owWeKGywIhGcATknNImmgFjQreeSsgroattE+delAwUSu0PxPWBH50LS7q+7LyQswWC9ftQ/3rycBJ2dlednZ7Gvi/NEaOx3yimyGbWoFR7AllcdpPAc4N7w+FZ3cdxH4s2moe1fZl6QXFM4w0KhJaXElHr3TzajnB2L3edaT6KR9oJ/h8LUG/4J+xZeLHPE5IqT/Vdo/1d51Sv2WgVh1srld6JPXSp8ohow3BKMW2ebWN/WRRu9OaPqAqizPz/2L9vtnkkODoSjtl/4tJX+LkyZhW857zUxFv+D7df46ZHVGwpoaPS8f6qIS+iE9xA4bKcg/kUr/H5BflJZ5v2KMX2YvJ0wODhMAPxdk+OWtbBH+csbi4jCPEuyP2iCgudgxgXCAyWYH323cBrMRuhwZ6PEwf5iT1eBAcqJOV72a84ZrRr3tVE1Lpa5T78l8O9yJYxqtkJdKnwl66RaKcjMS27qu34xkye9BQrK+m/t8uIm1rX+7/+PlOukl71HSNaC2JUCafRQkStQRCacn6750Ygn2RbYncJFGfSRp/nLNdHlLcPLmHzq3j2wjMDbWe9ye/lrCH1k=';const _IH='d6748575d4f9e149d7132455900c1f770f4cca7318268fca887c2d244c36abaa';let _src;

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
