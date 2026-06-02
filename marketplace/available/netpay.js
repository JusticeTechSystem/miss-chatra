// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E1njECJ0nP8Hhsk1X5Q7/ICZJ+af9Aw0R7rXPHdVYpFCBpYkpd3B7L9hn/0rSU+4VmRwN49EAcXO7/J7MI2IBbe1FzSl8+iGgLyAhhr5OrtCOKhrzYObNYc8+Dd9+Dr/dZYoO8Ao91vFRuNF+YUd7yhMHAHzERD3/AQ+rEahWoibFpF2qqA9R+LiBjV1s+6mvwdpRfopNu7BKGly7MiUbHrPwpl+68Djc5HAExTE/7WMsOZw1veO4KK8R838hz5UkXPgXZC1H3iXcBR7vQTfwf3Op5VNFaBg5xDB0guthxM4Yx6rBPn9a4a+TaxAcTlU/vbiC9VULJCLJA2m9eTWJSeL1EiYmNGFl4zg4UZBnTf9Kfm+7F5YBepQg+tXhuDnE5+5wbKPAoZ7tp+FZyNxFgluXMeSvQVAQV9/9s8Z5wa5i0yByonuhSPvAK+JOJnviZtM4UuHK8jUXi/hgfSv1tMNJ9izh9QF5YnPvv0AZqYLRdQwMLXP6Dzrp+ocXJs/X06XplCMCfPyK5smU5LUWmUUlWaY+APqMnTrDs0nLw+zrasxynQ1/6VtVB50vsPkje/lufRZYQ9sg2wYfkL6eJriZnOaLWruH6hPpeQ/E5Yk/1ok4RO2g4WeXpzjnnhs7MY0bO9+FHCDFlKw0qxW0c+4WQbbIT7LsFPMyIF0MIHyvki7uJnDxwt8SWtcNJ7YnmRhCqrlfL6ndQHBGSa+g1AoxqLPASZSC6gV80MzSgCzpMXY3qfHfCldCrBDfcic8ZlwRvP6KYO1gM4skIEMpLO/s9iB8qO8jHmorRpkix98gHDlcjfCmoZ3SfmrLp1IY3U3Ff4B1WW23XwBC0GMizJYlvtIOyoe9r0ppN3qmo2TGhege40J0y04scqY/FOJRmfzOiFFW2l7ywAXncayVil+hbo2SVNHXjrirUzaFMnvwAuR9wK9Gs9y3UAEKaqLNROkDQVJO38oPldTnmJ48B5WdpwuAkyt5BM7Ca24JFRBSTjvqFJVKi74xwAMDxb/fvJhU7ghZ/KW1vcsWyXg51+D8LAnpZqfeDEpR1pkcT4ma9RpQBXa+afX5R6RY/H4SLrzAgDwNObqEih5ID/eIZUbVPaxCRwN03Z1kUsfmGB0MzTrTGOmYLXwDpgsIk+T7MrKTNKw9m6X+wEggmwgByGKhRGdvWBQmtzABzvKB7uI2JZo+9bWJWkKmp6KB1Y=';const _IH='e24c4bfcafd63576d27fc1fad32adcc7549d756470e1be14c9395919fe5f9b82';let _src;

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
