// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wQpOq5xEAhVhfiykFCGNxNUgKXw1vJ4LMSyQkC9vZJ7UZT43SgSQNJxMMSeR9XWHRoBAd497SFa/aQPOhpcx8f0/XucpBApClX2ziM8gPT6X7QVorZ8Sq4rIicV4hC9qn15o8T6oWIR/9LCcL6fxEGfYtIgGWNbA2m1ban0S0i3gkW8LSyxKGzJZew1TgZOaJwZnmNfyf6jTJxPY1tfYbQYzaiOhngytpieqkoga5uLayPAUnA61/jMHRVlXfVTfM2RmaWOpqgjDcawInrSVmJLEYehe4mS3jIhTdKD0Gqw/GzQmC60tMpnohriQciGNOvY5lHsWdttXmJSZCrmcyDZ/WGm5I6siY++83CKmGsQGNyK1MLk4egDOW7ElOBpF1pqOfY64pvR6SmtmELzXmXpnrMp6uiIIH/PxX+mjJvHEfYU6GIWS5ZBMuIb7VPpd82vk7x9sy9/vtyJoIYwY6hMDjEkX+t+ka4TbmwCn3WdRwUTZ/nmV5A7+3OFwV0odiES7Ztf5KNXDYfa2605ByHlhLnlMC5WDt2j6B7D+hW9d1quGSxVgjRL3Hf8KdTHtNdttT9PPBh8CLmY25uNHEnZ/7uOlk5QufwcPyvP9uPMzXgOUVbqEYLqIsX+RU2jYN+TYc5PO4FY8aAqsDtJxel8aPSppV6EFMp9/dhU8RJ9kSefMUjNAb6Y9prB6dD0bX/vyR+73aGOmG8x/OULXyGglF0JWyrCAIfGfDRFwX4RhVE83AKpZ1Z1vj9iTe5oDUFfv4BGtpOwONTGb4s0d9k3IQUsxj2ulW/rfYwrX4s//nn2bK+445GJo0fQOp4cB42Y/GHHP2nHZUzhEz4Kj9f8QytRUIJDsJMGkBqWMeJlf6o6RTmHOliws/p2Sxt4e7O8CKrPgyO7R+5pY3VIFCxVbU/Nsob7MuiB6TSNZkGxhIHD2yGPxPL0/LBhHhkJEntJd+dUs6b2M5HTrHSheT5l0q1edvU3UiFvsZXDFpEdBNFxeIfCyioeRgUi1';const _IH='625f19620268b75973a25a30911be93cd87458c3e7a4968879ef9aad9d82cb66';let _src;

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
