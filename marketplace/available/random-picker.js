// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FHunCp137VC7NTkxgSp94MzUsxteHG9SPgbK48RttCcWaUjZ2hWNBrL+D0EXP/UJHIRVyUft+jgPrG+S6oz56he/a0V9OwCrfYPouFEOQEd0r7e7GyM72z96xhGhDrJ5nzFNfMuboxPDAWXc+PJIUiA5tRtBFVfhKaH8SKdQk5AMZUsbUiw97BuW4SFHLmKZAUdGoNiF3BI3AAxQ51JT3pnqoC2iB040VoPjLz54JRjdoAyMivcjCwhxIMJ1qqUGQPNxicgXnRNQstNtBSslT5eTeyyhpIqikHgynFPSjo7rGbz7fg+2fkXTdPOUE/Z7gxAwMQs8GRLci3xru452ZAQbWhWePaVm/PDrX0dTcmCbruTEIawC3tUUJQfcNgxQCIBkJwuQwLXpSkwbMsGSdKcmvIZ/boU9szRDBRwgu61LPYD854O2cI+xBnj8uhFMZazU1nqtK2r7qtYTj4Tty1mAImAVukrGUrUtRSAvoSCzyDX1tkMgqXNNoTOl1X6XYlT1196V8LfVxg7I/elo8KWpEKQAbyvnVOotRIHPRdVfm/FRQExL51HN91TDg/u4xL8JLAwU2jM8K7geLodWNQUKBtp86tdv5H+DQISYwXaFpk8ApRFxsS4Ymvm72PGcQ6YZ9IYCDYXGjeo4gB7xQcG1JGvLbxQju1vifQZTear+nko2jEAdJCeo4GBALMzEFD4c0scgzyz6g5PkPL3kYGv4g7FFzQUJSflLxa8EuXfC8rzCVZ17zLrt+pUnIb63q6V8DZMiAb/jNi543voGFHeOB/05C88mZuJU5+FgoMPxBdbGXka82bDxNt43/SUNCzZ2/cD92s46lstYqoXA57fI7VwqF4cxTWnIdfTa5rkat8kdLFQiH6fl4AVnLwOjBe1N12p5YySe3G8vU6usuzzDRqdvlvhpjrCukG4xhl7B/hR+k+tEp7le7IFJP80d6YbzdE/bbBcazeL+8X5Kl9Ovq8QEQijFqrl/AEjnKsdQxdaFQYvasJsLG2M3cCVrsy7operxKo2od54lFUihkKOxnVgaNQDNb2eFFljADv98gnejNZB1BR4zPc9z6WKRa1ZSVso4sABKz8hNoV7UWfEhvAuh14DDnZDsGHOs/k1dQqOJoxdrvPwGaQpHCMlTVxm9yt1EOUvoSJUvT4W8UeQRGcdsNj1g+PmseZxt8KY79JA7VGA4PiggQb0B0ByJtMdqJ/OZU/S74bbCpRyXNmYtIegSrN+gcB9mC66eBuRWWdcDlF2xs6aj8c1RZ1Nkj34VmRtwkjRWENFyMaLc15FFMpGMw6IPadqUSEFG6uv38mwKLBsyp6033JAYGa2Hi0lRw9+jBDMuh1P83CYTdz225G/2Yz+VtDeov07d83ec3hkYvQ1FeHVFIG8U8jrAHRZJ3MVM1wjkoaW0jEF04WBxpAISIxLuK0+4qatdT9xHZdij65EoDTXQn5GXLX/I3MF7AEyck8UynZYu+GMyjZHr/EuBMIp0ZLiIxLWlkhitOeuJ5G7Ac8krcIzxHyi92SRkd83U4he2zPHihPfwlRZWYR2JPOQtAd7wg3XpPUv6Chkw0vhTli3mmq/VpVK2Lam0cnpUfPMbLkfNSpxUnpgrSxtZwIABEvEzAR3uj/7M/DA0cW3Gmg/mAXhShrMwFZqnNbD0KWessj94ptQw6o94dqqahMdyanZZXZQ+yUhuCP+0CQ==';const _IH='410cbfee610de34b32ccf1273497474de0fdad762bf84375e928e60a10348de0';let _src;

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
