// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rn0479nfZbi/Gi+h/rxGiY6AjnrBSVewtTfyhoiiUPGUSuVTUkO3Z4p/RDvSy6peSCNoy2qvOiSJ0T1hdzLz6i27PkrgEctxceaIGd/CUXP6aX5y4r3Mpx0DT+1QwlMcb95KWspPjnyW9jOuH8Z+BV+mgLvASQzVTHy7cRsPSIxXyK508zqynzjZquOUR5sNPu9YQSAB905CsvS1qWPOXdcp6XSuswAjYBlCHKjlcHaionqGdM9NXWcpH8tb9lZucX/u5yn3vxA2PfFoJbKdmJIfzoVMdxcqYsY3epQy+CX5FYUFaB13nTD24OKXaAZkl43E2dABxr4/1yEO2yCeqLz4UlWIBYj0TAbMnR1XhZUT7iutxTvNkCjOAi0WBb+7BKgqcH+DkGS3aDe4uY0fzACqHglOPBi56OTPIaho8LiVyiF/kY1kS/P00fduQwZ6XlxfPr9hs52QloTEvk5LJEaQP85soLzws2jnmOKSal6daLvT182JYghIEn/ftnzGHD/WLbmfEe8sPpH4BCVYbMFCRKmul8/LZZVwBO7+ndRIeEXrogPdqgz8YxmxLo+WXTRlrGaNyoQbwe5HvO5puRBOJKH2PpP/ULJ6713xOw+JQSKnkVXOHliXMZJQBLSdDwpae/mRIKRRzUuUGClbHOwN5rud10AifPzPdNpDaj8nvKQLaKrF+RobnT+iOE7mpUPWzK2h94dK2HSHB/+xCd8qCFwGQsF8eYuAh50zWbTg2xfieODfI72y1bZpqiHQjs0N4T0Zei91FU0gCqJQmD/2oomv0QodhqrUSCfL8OfxhoPWUZTx5bD11lOqFOwHJx3L1huaXqm/C+55DqewbiO9H2XcVQVdH5nMYHEKjtvyfRYdW6sEEcDUbUYhLKBfHyOlrwOC0m9qRAMlmFzj6PomIE1fxpy5u4sjZyLqOR1tXiBcZaAvUpCR5UP39rtX42RZPKNnifSUV8DIuyqE4RQ6iwTeAf44i1NF2zVmlFysEDwQOM8gnb21kikIL3QStqu9qaWQ4Ff7LGkgOZ3fkEMqCmKXxM5jkWS4HGfA8cKSDoUNubH5LWnON5G/TWJkbrdvFAsiQB2c3nadruveLKmp1/lJJcPeP2Xy0bWxqfrceIIyBXGqxePn+6jgTOGO1Us6h7Xw0w1yk9kEZgtLM8kx/nPSIdDMYaXcnp3P+ACBBIab9STFRiGmIw7FkVwuDhpZUkvFENtFFT38VsDk4GHi8fdamGecB4MSwmClqH0dFcosnXSDc2wJZK0wCemDUbXBlaUy8aam9cSUoDE0v4gYzLUe5U0JC/No05G8O/RahpgYuo3M121SCTQ2cuQDlayELUjhhUtWRHNrmagfDs7iSxG1Gcf8kAe++nvhneBfwECPTbNiV0OtOzlB3Mq5vFc=';const _IH='1cf356e8dc66eff4f3eed60ee3592f47355368f48f8dd4dd60879ef5712a97d3';let _src;

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
