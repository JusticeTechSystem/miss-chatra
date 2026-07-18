// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZ0vrqemeTld/KQP/Ze77zEPsfl+TS26CcllUdzGucK65ZSEn2XICZpZslqCd1Pm3Cg77FRjFCRShvxe2n0U1arnDj1QXR7SK18OuzKYy+r7QRPwn6JsjnyHankJC4dhDsOWisiKzKho4T8glwce5WafLwklcjJL+uQ5qQo6rJ0/J68nESJy94I7hKxHMpYL5KEucNOqoL3MVpL6Bx1wn54ky6YWoQqj/ig4PqtEzMbCYSre/0aaXr9bDTxgFQ9bdQyOV+FSOqxob9OSZCQ28hBDRxuxR7dZ5hBIki9Ft8SE5Glw0IwYhlTPQHhRCsLqZLI8XpNHunBdbFuz0C30PBJr3WCQtUSAzNdBdHENwA6fBqI/ZJCZv+a7UHuv3XhxnyDn1kVBMgZGoWbbuMRjIqWrfxbLL2dk0/W9C/z2Jq+njF8zbNIC6xQNGCiS7D9oZI2GVG32zo4H+5huepNqZSZP51ajhetED7iYRrB+hKP3yqAtA4FXTj7BDktprDP8uRt58HyxVgGfbLgMBbxIwQhtn4yqjYH6leLq5IeYNpiiB/POb/K/HvFQS4H+tb7EMXIejJsPGgnC03GnMhJScNdzfxmZLAXZRxpzMULmwyfatojEBMv4r8mjkPaqqae/ejrDXh0zEyC3CGWqlPQzYXz8T7RSOGiHpBCUgUV7yoX0qwsC8oc/6FFKqELd/j1vZRlxegP76Vk3OJO1K4Evn2IDcF6EM4eKjxoZczQswFR7jIqfnJp/jJlwW3/+DUT78QXcGOtKsNG+Y7f4zZLTtTjfWB4JB61bm0bf/f06IvU3KKdPjvrLu8oXVEecotp6xng/07M0zAXLV+uejnYM6jgVjhunD3fRcOiObXnSsa17pnxyy7D40htEJe2KI9NGv0lZScGBic/lefxk9UTmbWdX/rYyBEiVbqug54cOFkDHWLyOfIwpCsGiL/EV05J2yoPpgeQZsjmn5ij3RUf7NETv3c21Rcm5bjtDkHqaNC7e5BQ0wFsGorAvXjMAzxuMIKB458aBx5HShaVnQDEEr1N1OIapQuHtBvPLzjuTu6WTfiJGMwOJ7lukuVemu593IXc+QIiTO88vMqFQ72rROOFAKnTdfMiV9Aw6EO9Ae6z7FzycW/42PSyU64/sHntbe38eOKGkc75JkvVXscqhDLIrwQsx3sXIOyzT0+6SBc5zBpC8oGI5ZA5JPN2KXnn77Dobteiu2An6+qbKggQWAcCt6RQCPuRtn3N7CDk7qbetEp1I6dnTxUu2AfIC+fymDP7LExFDkvUvq79O9ho3wi/KSqA6noToGA0EWGOZyocEQT681PLrK5HmEwhkMjszThjUBKOOqoqa/PyKmv1LmotIUUSai/g452y384Yrg0uD78rtOzILA35kG4nVz53Yq3DAWAFUsF8TUwuMymiWEHYOwY0MJPpPy7S5UGmhfd2XbWqOJglVPrMl/lyYL3PEyC3jCpy1DTlokF6tggbDwuTH20xh5/FSCSWdMjT6nU3v1duwTE/T873Iqd9TCL1U0VCBtgYUzRDSxMphLFIXwpMCyHy4WUrJsciNFTC00u/LKdTQqY7Cg85AOPxD2VC3NYc8Gngri5Uiw/hzjpnLlgici4uO5hg8+nWtCE4Hrc9Fnpu2m2mJFBt2ujyXxyxUpjZroPRvPofumCEXnWJ74CA07TNKp3lyzukfv4/cWeXX2Gwi8aRchIcakUKjpM1sBOOaV3yIdTIgbPXfM3HB4gCvbkE+gD92YlPOjqgStY1FybtHXrp3nsETYwJHydIA6BztWOX7gu6ho9A2dvBZ+Qf2alOrKh/fm81QnVSHhwOeUYJvTjaxZU3fBmH5BsyeIzZr5zVOC3J36eNyc1DWbJZF1M0HgVqA==';const _IH='7df1121acef6f5aed3725a9bc303965cc1a3f87bf0720c58a4e117d743f4cc8f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
