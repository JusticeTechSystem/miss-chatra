// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VOUMtz0jI7A5VB4xCc2clwRsaqcKofcRy5X+xUUas8GBcJtMkugOi7vmXynsYrTbM6WR8DmsgtPDqHfzCf6bI57MTs8NfUNCpAmKRGz5KcqzQsXTcm9S3IqQxAPr1vXCimq5ZiNwdS7xtAKp3HMyDvySlKCzUinzlDuD7yzwzwKzCXeQ5/K8pnL/rnGyUWw1yAZHK+sgUuC7XpVCNEpzYp8aqNulSfcNcTmO93uZT8O81wCWXebgmcvQ70DgyXmP8zvk+YHsG6rlycAeBJsPLEOaSnvCl+FtrJgKaUEtDpz88lstKHX3dgsGVnPUcwmw2K1pQnZ+xsItuPaRkK02co0q5A3x/WFknzpoYykSk702MzvDjULlhd8L7hPMH0yl9WmXl0aKtSRtZD5coTS9TCIAviB0ZWcNCTGBW5bq04AXg6dmaPwCgBt9VlDK3yQ8DVpEw5R3SWCNR4QAFxfXaWHtiVhISsnIipNriIFGsIzb0CzI5FFPZ7B+alZTQZw52mJ/bX4kZDBlgCw3lgrd3AxIs4p0mIF7bvJ5NLf8dKi2T2Yz2tD+q3CpTTtKnZeFKkuzz4FbUET+LRLl8DfJUJP2bFdoXy0eUG9R1QDtW5ctJgqLiukSiF0ivs9WWpryXpzWhJtHQClbWLCKJqO4bytBaaL7/aV9/RiBCsi4+/9pRGePSnLKK/2REiSmwtvfphDSk7/pw7T+Hi7Mn1/xrL51O2uij3gnDvo0hI4igC9mvDykJuc=';const _IH='5dc158584172440c41d3568fddebe7a48bc3153cfbba95058affa4ec5422b324';let _src;

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
