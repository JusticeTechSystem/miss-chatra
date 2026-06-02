// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WEcOAOUZTbY44ZtHUgMWuhqckByxi/RIEg31BzBB/lyr/CXnpx6i9RbGeTMi0M39zWRhsCCIBxa0AjpGeday1Cx9V/SnmDBIDXspzvqy2uahP7r4cfaY0U+qFGnsvBQ79GgxPBy2nzF8auuHeAKZ+QbLsKZP6igWzmm0ZE+OpDJUMO3aOGBw1vliXOFBys0UeGngQh1EKO1bTSZfCXC6yXCI0RkBe1c45HTXy7dacLBdYs5GtEL7m7zGt/hEUJzpRVp8PrciAULq9Mk4VJ8/Ox7zK1+zhQsLnwnXXyS6/lvKk8O19lfeO6/UvHv7ujBP/Fhca+P7AFoEq8XCg/JNkkB6TGU/7TIhx39nPyCo7fsk/LeFmzCKdCIaR/LLLyCNLeC10eKM6qH6imi5KGnditlQi7k2TceQdkbalzZFzPeiaSexJnVeU63xfEyh4s4GKW1fvzGYFZCvRtHTQrSiLXXo4QZpbKCAigK7F2QfH8VmnTaHTp/0RYD8pn00dQ4HD5winHWssYbFwhtWYTP4X09VOV+jbG6IM40CXbTxnOCB6hmlKlzlca5SUjczcThDl+YUaclqUwXbSDiC1nXQH8jovDeZxLiTpl+PNpFA1rHMqn+8H0giDJgm8sD7YNudbeovn1XeQG09QlD50KeUT1ezzj/qgpOhh6JpqJ6oeM+02ciHvLlFCkRZZvmB1FVtUJJfooAd77/TIFKolv2/7j1Ytu/GtnyCGRIqBYxIym0+kYGN6+3uMyGMw7Ilnnf9K9W8k4dkmEukgPdVE32/s8SLVTIrOnbhrU2zrDkoDSXEz8ouDNE/nKlOkTwQnBLLUqpQnnXmuW6tRD65L41xPa8+TgoGz6qG77jZXd57AnudRhfSnsfGONPWMyG5DM9QwyMMrIqIGD8tlY/atLigUhP56WPX+V2UVrOpWkxqKLzzZXtv34tjcq0Z1B0PA8itJp/wfQPTGKFb6GbAxqhzsBHRJzjW2f8ze68Hfh197hHguHGHWWRaPUNz5FB21qrq9vsCKQ6+mBkbhKhJZT/nKXlKRawQ2Q==';const _IH='7198f3305d473f5bca0860b77bfabb95ee074070b1c51927d1113d3706ebcd4c';let _src;

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
