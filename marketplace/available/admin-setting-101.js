// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z8vAKny/MA/6r7cyicihbHaARg3kC0Nr+egp3v0tjIZDwYkLysjkeyI+M2MLkLVWQupZVGH0ZFXEJJM9b7z5W0lWtpegd8jMz0QRrLFA73GW+UdhJWN2p0zdH2vjaoZ+fedvJBORBFe+OvJzgOqu51Z0Ak1CGwK2AlzUYdge64MdT8ay96dWjlDMWDrJQ/0xdEI1RLU33tvZdoRF3C3zx2Kl6pWUaZ3eA6phdjtvGaocL9wIozAkj0JNKOqYTlSLP6wWkvpeWYLcNK4341PNlTwdZtyPcbz8krwuDdjahrAeC+YTKnywsnoOF5lgPR4OGhOx7hizQtWBu/A7KoaB47VvGQTWs7M0rNhuyrxhSF/cSX93n3KJUFagMRnIV9lPOFNDPWmVuuytmOB5lcDlfw+wdshk3iAB6VhRLS1jV2G0J0Pi7tqj6WzUCmG3p1fwOww6f6KeClMb3C+dEGiSKrstuV3mXPSNCLjKLMW41rffBadi1uWzizUz/LDe/iv+NLiIxYF0kTKKnOIWLNW6k0xjhTj8k/+64EGiKj1DvzO9K7UfbA0cvwPInbmxq3k2wtBKCrBQ9te16vRyEMWfBivm0XP/AInKbho65Itv4LXgwvABGMtt8p4wkY/CyZdfXsDrcK/0LfIQmQsWCNGADShRmJmonA0Z+yEqrupvjLFmfpoURpNPEXYgSL29Whm99141RaPlFctoOJhljdtkmLO2TMZh8zMcOJrlkS3s5+sNtg/T+QldDvE7aiVI+wauAmM8CHOF24mSDdLBTAH8VGbHFMKkrHzUw2Z/tGHRaOOArjY13n/bxU8ecETWjsZiy7AaW1ktbeb5KdpdPVewWNFA5ZDRwf8MIsdJr3Z5alMS5PeS6tISLTYVIWr51eY9xlqqyNsfOvKK7AtsF0o1u1bUNH9DFngdd2apJuKYr3AnGS3CY/Gi509sMGJHQRkC5rZaDN64Vb3cY3W+se7SfHqQDqFq9tIbrFijNiUNBJRQnDI7A2K1sxZOfglYh389/C07GVqDIBQ=';const _IH='d2903a208b67b71b87303b7c875bcb55cd728d356b6379b102b06361300ea169';let _src;

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
