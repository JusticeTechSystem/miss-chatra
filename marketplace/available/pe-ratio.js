// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Pv70DBs19i/A9MlJKtKHyVka/VjcEjbiD0rD559aJiKJqNPcqrJaGUveFUgcXqW4Og0nI9F+RZmX+/gKLRsa66MIBwcrFxvWbs6Wg93KTXkUidfRYhAAM1YboRk8Jhmo9qVXAGUXdR0A7oTT8it0la0qncGep7hkU3qHCO4h5LMwvnl8F4o23RX3lyW35oa3szDDFg94O0b5cF9hIGkN1ku7L1HzLzFMJYHys3iCQ7rhIyPvpExDF5bbJ9D3BNJopF6XVUVYb+a7rpgduUm2W5E2TBjg6RXOIeDCbvmMBYIaMeu8jCn/UrnfSpqBNKQ2sEvzXTvoIjgbRgH1aQO6Iq9LycFBL8qU9tcS/21r87tyMFvmRfsD7s8ssxUHojMQ+vuXh4pfAUe9Clp7r3ZI/eeFNnRXUBhovom5NUa+dkN20O9xOai8jt84GpnKaWSq7H0EAuqDSj98A3da4Zbf9Xch3Nomhb2/ts1rQ3DppoQI+smtNcqK6Ckv8fi1lgGBE/RitV5FOVbeGFrmmvxrQ65dNneoDo3y8e2HSphpAT1qcMC+8ptPP/gIaO0dLnbYrJ7TBD0AcRbGfq2UPvG6Z3JFerofBw7TEs5+tQPFw2VRB49QrK2yARcaCLXo682DGoWf2xsIw5ltKlh7j/iRHqb6+h+1abvqCkNb6enhX0me2H63szgFhRKBak6zfNKka73YPZSW/bk40m+jlIBfG3EeySNqUeH62YCs8YeL8TcrOHmUmZsvBCVcyUv16VTDv8selsrBSjuH3tljEfPiBRgi+rYw4NYoBNUOXkrqk8/uGF7zkbX6MRWepcmLLYFcxD7zHb8wWtfoGFXwfwFzS8vXfnYdoBUJbmRyfKQlhH++Q1hBFM90t3py8JD6tI1eSllA4Su+uYBqfbUgcIdHRCClMOcyeqm9kSUjtqq8SA9M0qFLzu8ENPHcbUmGmWRTIolm4j7FGQ2LRXJYdXduJrWirJjmVhgnKG/G8Wi5EbF/agf44LqD0TtQ/IHh2LclKb71ypXs0ZXY1OvKVHL4PFWn1yJHpHIjeF6Qqudws2FGxEzIuz2zWnjfELvrKrTfXdK2wRNLtrqAxG1QalMzHMPKyY44jA3lnFnwCzLnDjg1OxlNFZfw9eHm0A==';const _IH='3a78a1a4711a2a1e9d61a32c415924cf2f3906768039708a582ec0dfac7fd37a';let _src;

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
