// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8DnAgFpu2E/gDzH4kr/96Plw25Udl4gt8ji5EruDLupsnVL4Atn8RF/BuwhWOpANxVSLaFPUFKJkGOiNDJCDr3qOb2+ekhC3fo8UexPCf1yBrjF1nTqYSZU9g35Zjwj8PEsKqG3ps1I9e9jDxOWpXgKMSqpaRWV2aWIHWr5et4YU0S8w+MhWXYx7OmS9E1n1SSxQIeQCDht6mfszUYe6XGgp9mhk8mCbtQzgWcByKFoVR0wblU4SlqHkQZerCEmIVilb1NUjgoZhIftxEYaiWotWOuRiATTFsPwoh+oq9qhMPEQLosK+Djf2VEkE5Jcg4X6JOvzE6CR4MQxiYCsVZdE0YeskUn7L/UEkkc4XI3UNXtAPzS1/rhYgbiBfHmm19twWOZHEZCnumTOpa46W4SkX4isQY18tsAKtAFOIEg/R59vvYmmVVO0wQd2Hgt5k/fMO6ZT4/UCsb4Mdc8yOsrAaCdYG3dmdGgDmyYYfT5bAExp1wdTbYoj63ZlT2VCuV+bNZnj+bGEZB7hebZb5Ggvxt1EifWut/olqd5A0zMbgmn2QNnnyKS+kSmam7wI5TaBLgEroo8t2C9Vz5rMZGh3WIyng0k1SkR1xHC73CZZuzJKHWQw+roSLcEzmw1dV8tjCKlKSQVvCEbI9WlEYP2RHhC+Q5BtsaUlpZx7P3Yv3RhJFjXlY9a2BgfOqlx40kN0ZctxNGt39wJevCgDypzAs6pP/FwpmeEgmu2DwzWQOaRcF9ue8u7hjaoo3hC6JSkbGc8vo0P9ZOlp7pOFE2YlRgBCPflfwJaqe1cNb++pVqLx+T/+HUHgXUhhZ1lKup8MbsPWhHvZaJdbELsABnsqN3hunI88lj1IlaEs4Doq03xwpE5H5adTFkvBbI6pG0Ra2MOjgeg9uY6FH4xfXLuKmH16O1t8HFmPo6iRbv2dzBvmqbzrEXjK/o1UwBjceKHNUshc/Tl1DkWE9rcs2MwaInrylzpAGZdgnahkwr7WG1mHdl5mC+8PgK9UuN76LxGuK5SQqNHs6UCjtmpvIL9zd73EjGBQXKj69nn9NKRqEuw==';const _IH='a210d3ef80259c5ea26bb73151c037ec1316cb2048ddbb60b5357cd8221d301c';let _src;

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
