// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bvLc35l+k8PGo1a6yKeTG8efI0TfzEVTUS1K+rzXWhDhU/vdt8YdPPyIdMMCk0sV1QIKrgsC1+HgQBYtB0n0Z60zSsnkdt9kQ5ERM68kWaSYn8YL85J0AO9u4cBLomG/DSdDuSFdlqrSTPtPI+3/S/FwwCLQARSes4HmEw2Jk5oaLpDhVListeyrq7HEZstMDsq7KZPV6Trkz5gBwhKj59escc9H6epafGjRVn/E1xOFrMNS8KaB/+C/w1ZTUsqFBenkYDDLf8FlKHS256OcZmz1pxtMsXBnLAOhYvYI3q3v/rQM6RBVRAaFB/YeFHYaqtldnMn9QP81fPAtPAenhBU0vDWCX4rye7+H7imzpmisFDDEKekQr4373u10yknCdz1WaWTcUMllg6qG4qPxGPjfEeRe3oQobDnG91wFVc+GDdbu0Q1dZMZvVkp4tTOeqIMzb7FjgzbnqfNbpoqmJ/nxD85vYwuQeJvC40QNeTQS+WHwOYYi9H3yIyT6qBfwpaWE/7pvvqXnaIug98mLR1vCDD+xh90ZeZJFL2oTHq1SQSzS9zmSDd35kCxJMmT7EcadddRf3PL5Nu5RjHaUdX4bNB1MB1nd0ak5rut8WK6OMAilStkVJWq53bkLdFavG4p2gMn1VhM628rG8kbps4OJvEkTF8Qx8oTUFykVbrHy71PtQ509f23b7lSy252ph3GmHSxyZ9sOCePdlnSdmVKoX36Rk9RORRHdssLCcS+zokYIInUQErPTk+K6sxGDP9Io487otbglxny2tSaHlRq1/BYd2sLbhiSeeI13NW9DDSgXYGehBrxjFEv8yAAYygNKUtv9kfK0h4a5FEh4sQnUrAar/gwR4iwRsrmJCwBs466K8TCMIcnjOhLxWSmmhWtirJPInOm9ezR68CXh38kqS5tnPBnTB034VE8ndi8tYGYs/1Ie9ZsbwzZISr9loUatkpNQ+AkEZln9Bpi2ID0ww+jmKHQ/8PnCp3RnsuCSVt+4lf1n6p0Y8YMy8zYT2LJ/1X4zNJOMbABhxJ5nvwVWrJyy0JFKw9G+X+c7Bx5/0WRB/fgMo1nvqXOcjwmvg7eJo+o3OXOMGRO27TtS6A06059VyVTDnNy37SfZT7mluuc0np6zrgUqMLsx8u7NsMXoEhwiXcYEVaEPAJP3zRixeS9iloAQ1BBclOe689DYAlkzbTiPo0g8pFlLr3HefHs5f/UNWV5vzKLeOp1TUrjf+OkC+lYjf257wzErSGUOGN3J6CphFIxnMk/tXgHkfo3uX594xAbqnJL3Jlst2ni9aXh4cGlA4QZ7uW28NJ5S+CFyiURjT0roWoh2kXnZj/ffTOhFxyoiR9bnRlYR98WsbDAP2Qj9JBUzy1jA';const _IH='d3482a8108ad8f97adad719dbab9b9aeb973cec213782a4d0ff974a1779831b7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
