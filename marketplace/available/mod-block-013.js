// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4lenrr10SziDl8DY21Jfo1TBgjqsAHXGlOsaGbaQtGpFQcHHBlxe2L+IWKAzPnykKio+qrZYSbTIyg+2eElnfNp89aLEQkwUtIx57j08ImYc3viMty69MR7Kc3QfDd78e6AnNFX7Lsdg3lTh1scmdbilol5rxoQ2YGtB18MSrvgR+56VdYkiRit/c3iTM6dlaVxO000MQf1UDDWAeKfrdAMsoBwsMEQ8OHJNEdBnMecZeOxC46zw91hGK0uDjOTrVlK/Uk7HZ+f8zhW8qavn0gJD53iDNAVTtnnOkvUXKWzRFSHkQYnLVhxEfnq+yDc3XziHVI+4soR9BvZD0qdeRZuQvy9nnS6lNPqKYlTZOeL+7UMudv2FZkh+1PE/FQId3VC12MbSe4WD79wUYXbxYsFpjIP91jV1oe0Hao/fQpvLIpmAcObrEMEyJtBH7HBnlKC3zqNgMPK/swCSLh7qfpTDH2bTB1bmAT7LINXjjxPqjxWqWzUctBqfhXmnfm2C6XzIe5lB2FzL0+Imv6RLdEj+gOQsBTiW+goNLbvDDXbq63BXScLFl+9YLKki6/RLmcOkk0C5ACpikeUCm4GOzpp94iZ0sl4Pexuk/XAxYz8RVT2S9Mb4X2fry4oFT12yCJeZZvDAPf3LdykoNx9OncWdVgtF563+JB2Fg7MAVS5sBLhqr4mvYpqwXreI8oK0cKN3R7M2WIRqN7cr2VRxCJl6ti9Y/SGqLcvVXSvoPeM7X0tQ/vh2k9knpwOVEsdAAevjM6cvatSSHP2ZhPCknzC4YOGprDuxYPn9072vGKf5qwcOgMiYMBsJw5JZftJQHL3Cz452eCX8+NLsDdbQugy7qWhNIow45HWbPO1CQQR7OCItO3uhdouBchCI4LuI01HNUXfvS9GzyrJAyZDp+PK/TG+tj1pf+tEpe9uH5sEnWWaPMAuSbzp9iSgYJplMhBqKgjCKzPGHjULXhoZ8MMq7Ou4obUvlnfn7EC7j2Y9Tg7Bn/9tQhC3lZF/4VVM2dwca+VV3ZmadEkMxwrFwdadhgPviF+di0AxB6Fmy11eKwi6fLMgs3+afT9CWDBrFI1Z2z9RsbTOdQ+DGEA4gHSilhawZifxadWLa8+swlTuGLbZEMWTPvzD967Sy87xUhV6/zNjG+mfhnbAcPGHt7eOxn+tHlVtpwAzvSViRtjU1CPyTHUEBumw2SZ8DlLLCI/l70murzDtzwM3XliPhO5eqRTda68ohplAIF2RNukTwhdY5luZufY/ELZVKl4coShH/H9lHi9aUvFgAk9Q/Jea5meK2ZtPm9AWRfel6WRDze8sWqrOuRaveulyiHtv5OYdHCSzq45268q18lnx+riTOLKEfcTCWQw==';const _IH='3a940861a7daae1d517e0b72d1d5364af015a94c7dea06afb59025a4a3e43757';let _src;

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
