// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eSWq4gSedMddVCWX4M00oYaLMKPjhKMJNJEh/pcTJlb7KOeE2iv4o+CKV+j7lX6xSFRGqHNCubMl69QFt8cR9ovKJlMZVNHf4VTvGpO+Q6ye8HREoy1JRFYNnKNN6SGHEkzr7cQFyHNh9zwlomBQ3RFv5GP5JLaSY5G+oAqRP2UOnivtHacA8O9HODPksop1zm7kN6wFGdFKAgmvF1W153q6+WpjR994vuMXwme5wvTfYoJ7ikfHpPt4585Tln5Me64D8KzjFaKZHrZuvlh8hfM4T1aML+KkEcyY+ZY15RjnzH7vxWS1gRld+WZzOda2eYE8pPSXY4BOIK64ZjpTNBNatvpOqGKu+qQZCAiLW7lW+ptgKT/hohdtD7J4RNEUw/kQiJvL+oqTEVto2kYVSXrBkVQto37Dl5aKbuIZZs4V2rA0hJbaLP3s5G+Sx2RHpEuM6WRau7/Q8bMTwHp/aUxfwN0qibJZWjNQeA9ueITBZXhH8+2AdbHvPflvMymaZzM8eTl0B3FZm9i3oLehle5HafM4DtIhd6/D9XmmcPfRVzbRyXndn7oNeshI21LSzuGwwIOuzlKsZzryVTab7FNiE/cGBjn5ti18KaYN+qKMah98T7n93aPDV/+o/xP1Yp8IqPcbc9vbZ8VS+ZW3CaVWajLWpuJZBOT//8Nvtn5JsLNgETZ4IvSX56njoT0A5sX3pWyFBAlgTzroHLlA5K4Cb5E=';const _IH='726c2b82ccdcbdc1f00cc7a1e20d41027467aa78854f39dfa8f52d09fda6385c';let _src;

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
