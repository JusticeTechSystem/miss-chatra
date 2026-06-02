// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uyhkzWYjaAMRkr1fpjVPFxAlgiuVZWOsgKTCvLX94PuyqEm3CWDbRV8kl2j6oz8AL5PZiCRiR9ZTodO3+pWUP2goFbInJseRFiV8ArIQ6VqVsB77rdHBexGmro2y5CSl7WJCXSiK5XzCL6FYj3fisp1wdH2+kr1Vfh6e1BGYS6pKDINV5GjGkCxNedArBRuyyvce3o/Ks+PHSUdyeh2NqiIwAr2lUDb4kTLyezoU0io+/BEDbsRB9P7P+LkHHGxjOYIewr3ccJi8wSbSgZReTBKf4iJeSNBls3dHLt3FQe51fzfsIW3KhjeCa1FIxkdkmmxEtbpTmb+TpTpNFYcjCBlqHgSOZ5q+f9a2E357eBOpKQPKQW3qWKwNq6k2YIXJjumDPdi1vD2nsvHOqNcC0D3O0MUlD4Gz0bFTfQJs3BhzfVYUnbutjb+I9xvUfcXTKhBWjZ8mjuNHGVd0YQjwGRKFmALaO+M8M3u+gNBfz6CHazWvHFJy3Lm6dbh466yc/qymOKVwhPa4GZuCzISBayxc3qRhtr3LiWAZnH8X9StzguJG+wAkRwr+LUJgNCxTimndzq8Mk5hfElC4b/JJHbd9+1/ajUdzVFAmoIXaN90pY0U5KlykBwKWpfLG383Yh/O2ogtTcvPeOmfpFev39kptjBSr1w3ujtWpNlZTj10saLxIVdDRD+PGr57ybOjB/NW8BdvRoeObsxQLSrg2LTlHaZQrzOHWqtfLEU2F92bF+e9/qTMSgpGHytjurB9V+cyNB/By19kdm3klo2Kg9n7XCOdCDt+DNGaceokd5GKQipC4k2FYJefr3gHs+A2fI16IUJM4XZ3/JKH9JFlURsZp+aWIKDB5BZi+PbtQNZdhDFo0oYcnMcrYku5/+t/dw/cXtZAWaWpWpWuD6dXoJUn6cK3fqPdO4CapVYNoLR3WxKa//FuUO+LZYKB9pc/wi9KM9BHLAnFhKobd+n8tOcElt+3QVJ/z7OZuPCgQ2j3x5TytyKx1Spwt+tXtoLsUujPy8/35YfvgPnPiVaC3MXFa9f1E7+lh/qado8YUW7qXfKbIV2CbeFf1I8v5mUZlQ5cN46n/t70UR/PXveDBbThQfI2JYkZABz6haO/pD1xP2Qt42j8iwNP3nE3b9xG4lBw1Vz3y71487q4pxi0bVE88FRvQ0kv7xFuqBHSFsGbh+R51R0ldR3qSUyWFhy8mpxAwH6qzXHLZiW/aKt2QCpzvIwI=';const _IH='bb38956dfb20b3c005dba53a40203249357d6720878aeef6a451a3704ab65313';let _src;

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
