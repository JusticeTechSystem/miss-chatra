// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p9QPq7gp27/YauOm5iod96kWWNYwtZELUiMxXhKttivZlhibIj135CykQ7xj+oKtSVvcTS3YIRhClK9e83bdmDDnob3v74jymsVaYX70SjQQKjX4ck7vfoixjYgYb47u1EuJRc+BVx0VymxGcb+vB7E3nqVBDJv0ieq4ivqqUpQgCQw+OgmtTFB9BcUwyHjyRzBl49gWI/3vYdqRYTRBk8PbYdM2jFOF6x6O2aWFyJaHqHMEpRrbFuZb1t9dlXRCB15Fg/RPdUVMEa8OU8S6Sp/GTRtLThBAH9Cx9d/h8aSu1BzEu8n7Byw1UxA5TkA9REZO4SD9NoYJr+/209XO8fEQ98gvyVk8fift116Y3iNnS/XCprjOKY/kLTDlARv8qlrDW+6LdQoXxv9ZfSDfuJBjqIxvze0qxk6gyXJnohlruICgcrhAahsW+jR18QfgPnqxDYf/gfoEgEAUCuK7WMu6mto75BKA7KMkdH+2OScjUfeI9ekYjmaiWRUpOWEYhUcCheHDrDKi1VX80rvFBBmNM3p+DXpjdheBp+P+kyGHAHBGqlR3gXgkum6RQlzheNWY3PCdI05oUnN5HzCqoh0mj5tnOGvFm4SE8uCdKgZTiqFSMzLnlFAc+TirxyTw6d38NMlIiipjnc0AxHEsc7gHdYxnFyCJ+W2ryxXad+rC8YyVDFX2X0HTKXyhCLyY7jZilsP9wGYaQ4bflgU4FLRwNB+8judRNH+oPnn45Uj2RYcMTLVs6iM0jyjxo4VtkMUmrobDwweHcCNBpJvuu/5hk+ndme+bzL36XeSnhQiTA6euFmFhVxFRwaaxSHIDKCXcKyPdXjOlmpRaehNS+qqKFQDlIzs2KWdA/qqa1MMgC1Y4AkdpV2R7KJVlTCfcWeidYyUCcEH5qUDg7yOJuzSimXsrHr2VNOGdkYkUKCHcWdmlajxEmpAH9Vbtjk+y5QSmgS1KkAuIEmzIwoAQ3Gm/F30ehDCSu/WLlcM6Zc0Ajj1q/VbcdI9UFOwGvdsyq/IQ4h1MRDx/vcETd/iFSzle08TkGpQeBmpTpeXHYldwra+myUJqJ/+SuorQMFgvZ0I/dqUlLlMEmQuGP2Qui/K4QLqeQUFdAO+3/GtzfkSB1RTIM3MUY9oWi7Rv074IjWXrv2p3+0gV0fMU/RjK2eGAllZ4r83sI4y3PHmj5HCVIEYL9SNAWImQAO4OM+RbH1rYZTw1hE1f7GN6TWBHeLXUMHvKrKPEZJ/FTqeOH9FswmnM+SZq7zE0L9eRPpgNqkM8HdZiXM6by3kJ3awlhXJ0RNlBtBtEh+XnPm9F5nYBDA2PDHjXxvO/6x6nlBl1c/vFN2xIJoDoc2/QOKS9YB+IT63PBH+XuTWMPNP8QQLEJzFdsONCeX0FuR1T';const _IH='761fe07d3e9467650171cbabc9c1dea019326db61a4a09f0361bd97c7881f051';let _src;

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
