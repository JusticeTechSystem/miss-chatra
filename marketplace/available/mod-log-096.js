// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DuAyBd6gFzk+Sl+GkPNPtfDM3nViUF79iJ7O24MJGGmDPTUsicUtmTwimfFpwiR1pvZpYjjtWK2QTVRDtM491Kwd6oJoDTzfVDC6lg8oka3AkYA0BHSEJ+ZBx+qtELgwKilThCbbGzoHyt27o+P7BR2eTJqylbxiAosEJbvM41M/63aHSA+CQqv9G3APqMw22Yoqa48InI6sbyfZyFyWUU44eC5vOa1Wv2DArIojz1w1AKU3Jo5ikAML4n17U8BDKeWR7ZJKO7DaOQs8JmZc8iuMH1DcFYm1NjlqXLKQA0RvGNolOaN9iwOEoxJHixpjig0loAnQIdJNUkeoWpbxEgkqNBnri7zp7uYz7cTM+PAho2q0ty8flmNMv7XRVwh3bkN5NXl1Fpk48G1pMee0ZTBZcLgmdcm/CkbTBBqhIhPoufjaJk6/+d+Yhs28s0WYSHek1bfRQ4qlol3izGVWth6XEPBhPhEmLtrasn57Ezca0vE14BoGIwIieCkwCOAzMwk3ftLX7llQ79seZMUXz/GsRYeFxA5Rq1KwdA+Nw1r678g0hJIaOwACl5bClQhdjnSvI6GXdrj3TeCBeCnvq6cNC6ot5qR0ktumgbfD7s2bxAgSmXfIjK+8Ut8QbUOQ8elB+fY0bFz4iSxk2XP7aZT8skJudG7KEy2zO5OJomyP6qzu1jNOEpgamhhzbFxOffhRbJ8Ancm4q08PZbGupe0wrBAhGBupgyTwDfHRjsIm5Zp5isY6HJwSAvtlq2LAhC374hS/vv/wJlPkJE+7KWA9S3dc0OADeALLIwKseqveX+z4aiUqlFGG8YvyPLyUv5GaLX3i9ncJ0twMj2dWTI/woIdbBXDhXnuGpqM6W7ZNx2rX+tfYjQmYmI7Z6/lP3kR0RN+9bTZ8C6WpgArRpnYlifJJw7XHszvBShn6hQ3qmEhb1gZy9qmGmOvFDyEQdwh2v3EXNC/i1qJWml9J1vW2c6KGZH+RecTR/GgWN/pIUrcQkEWpbeGeP6ZzzBmPQj/o0nNXJavs/fWLi9etmp+L1gu0idGbAigUBrx8UoZJD5Xp4IAJEpQlwbEa5h2ZwDHUsU5o2wkepMwWVBAupjBuqK2Wu0J46usVtt2cKu8jkrp8DyABu+HZWjl+OBL8OYiGebATXncB/a4nppklaivBzB2txLBI2TS5o+bI7mGxviG2aIYjs5VLi7B2yOqP3Eeiy1hfwgoZmspfWhUDsss+3LoqO7y32w2Wi3tU1bkZUW4dhyCVqiXMvq/cU9xyWT2SbG9qcQ9X4XKfz6iPVRUdLCUWLtEDs0akH2W0ez0C6olpk9zW5ekDit/Oacy1MUzlUQ4=';const _IH='dca7c447301c5643f527c544387eb5721cb0aee4d37f3f47aeb0a7958e494bdc';let _src;

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
