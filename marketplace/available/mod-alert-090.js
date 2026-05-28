// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rS86x9uNhtM3jTYZomt2KXxzWM2ZuT19tQxM88Lf3S21lyOZyIYdgaK6wAu2VygF1kMLUJScJtHmDeJ4BzR6uPWtTFAuw6DdQZbrFKWnYiCT7fsH0XGSn1U1C+ZptILyDLZORjiXrLwLO+7ltt6g7nKe27xwycLgLjS4nle+raPUBI5SOPZ2iSuFTuORz9SjL0lkQQwmzptasD71B5TggoIWvgE3h5GEQPxs0IRGzB28mxLSeOIuNRLmYfw67vZiYv1/CQZzD21waxLe2DPN0QQnZGoe4xj7hnZjhVdfdZiZ3AoCZCONpNVZv0iypvfk7SfOsvqvwxS5eMVApsWuOVYNdElXRIHKo3l5FcAPC8jfn18UtiMW9jlaY8xwrnKCUVXzSxBCA8Xiezb2bNbyQuUV3PEEVEm00EYLOjjmlioIpi6Fg4kp3v0C6QmoWjriX84yr/QWUNpRw7jrBcTKDeAfwtLEnG37WDwoyiFGr7TFmjJ4ZQbw1SJO8DRG9ViBssHG53I9ZdsxWFZaTrbKHngYy037U4fn0lp8OqLJPNFcwWfdyEUH+/ZDnHsGlVumKfBjS216LWE6ZNwC61QAPz+PldMbN4SACAsLJoIXHa/8l3NmcTaNN8sapA+t6zAvtvkpwaneB+Roxd6341VMdVRo5AYX0L4zjPVfNo7XyVIA/kpVIo1Gi8LAb0fxXT4SDOloPEGvUUhbt76PxyOCq0jaJTDJ5Sgx0GDWC+ehP7NosDsZ7unOPYwTtKwQEgJELLxTxobIWh9Uj75PidtO0C6yBrttUuptlggXcJwcOB8T7uKhe1s7u7junlKfYwFV3JlQNFBtxfv2OGrcag8t50UF2+eFvmDKvp96rQsAwqPN5S4jeeL2B+qqIMtMw/nBONoRnuzU5LJHuL2pXTiC3W0dATTykevDe6oXj822WWViSXn2j2jIZNVPzgzIilN/CSJnsJ/fQnRmye85Ppl9L4Q4PGaBWestp5uqu8NlFmcj9EEomjtQa7Jzruq48S90QEs4XsIKV23iiDMLZ+y/ZyWbU8duS/k8op5mEHHP313xN/7rYUCpz+Z02XzKmuRVFESKu1Y+Rjzo9wsGqw0JVLHLBqsSfK8QWB/PuUOMW1enBWMxZPCJw3kZM2U2TMPWTfodRvKqriGAn9HlckqZEA8D7O5VbO8brBXtI2GFW/Ic9WP8JFUwx1eBLzROuLl0Q1OPF8OqbHDwLSEI7CR0GDf5G4m3B+0DJNX2+Qc5pfDg46qDiZGFocgYq5ZysohjQ4sRbdq3mGAW/IAKvbIJByoNFqgdepTby310XOzQ+qfmONB1MOYAtFI1UplfAlqTuwWv8FCpNIZlAuQhvxETs23Jci54cjF2Hg==';const _IH='b79be2663987917aecba7897360b35fcb480be89645e49b3a292dcb08e3c7d74';let _src;

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
