// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wsk7av2uTTz1g8XVrtDEIzhOpmbamxzmVEVcl5qaNWwnor5Gvc5w+94URzqK8lSN+/3vhieZPcQbuEdBFVjHnEHtV6kx/g9q5NczArfqrx5HXbRKDBMI6r+b+bE+9FlNccQGgiVxzQQUmqWyUnaMIh/3YCAAC81Hj22uEXfGd5bICvRNfcXPjGNmUWuDbJAibJBGlWgm5WrgYGN9Wu3frkwmsxLhNoedCPBP4MLYq2TYJmCQLsVIUq7+9d+JoLBKDKIua780ZO9ZKG1fSexx+2DJdB08Bk/rN18Dq8s3fuvAvFKoFOwRsNaKvjiRkI+/cFyrc7RcfwkLThVXb4CDePBD1G4399NwsQxfmfOrWyJJ9oCEvcryQTBt8zp0P7YoH2yTJXpJCeWL0lFP3ciIOmktv4avSyBojyXK+aTT8JEnsF2K0ixXo1qMmR0nTqtcAzhpKjS44iugrynV7tQL19knFgPlSBWWSMm4qwy4ioC8evlj5ESKsPJmjG41vIID2i5LAfgNP7nLW4hsO4jfLa0Cvzu4hPQXZ9kecGUM9y4TrZosEuaDZtWYw0XqRfQtBF7UcPgvhlcnbAvTzMdDz9gJxUC0BF6D0JF80Dy0qI2/sOlTby9BpMKA/xzUo646iHuLf+4Mi0dZ3lbm9MJOLdzMR86rXTnWK6A1kJ658sCi/SuAEDpIqItegdHbYM87NZghQ0N9CUxYjTc6OLDtdfKfA5VFIQyodmylOAcw6WfAFI7ipNh79e3FvGWEV9qmQgyAVl/LkGDETfn06hX4YDJ5+/RvwgB60Fg2Wrd5GnUMhSdQ4PzYyKMuWtet/a0RTac2fNOsxBjCRRlNbkZFxESUmW2eLUJKoln/ovk68PRxbqzrCcvhYGy2yoEMgveSW+5S1Kh0qUjECLwCAZsJSpUBNaZZDMgtzdjPvlhJ1XeSYIoQWFPQj1L56HmKdZdPmHeCZRgdW0BeUGBDsRSydpUEQb/bpKpGVReo3wENt4EmGXEWIMvdACqTAEeMzNibGysHG2s/sTsNYDOXvwCp7Sh+6JVrVjb9EYfAtYeEhRlaPr9oAmmin1a2sVNjIeESZRUfV3seYBTHXR/apuZ9S2F/qrKhTIHzkaK6mzRE2IvgCfc9XooC1YvRxSeMKTm6Kq54yl90ZVHSMy0ijMSV/d4uK8sfL2WYV6Z5yVjFa0h+0y+3SzQ+zAL+BX6B/hZ+moqC3+ZpsE0TPpeMeyff2aEZH9+s+K+GvP3HZulorqW0ABfj9tDknhOohlHiB7N9odeUYNv2wH1hq/IrGhVrkkrA9vYtUqgLmyQR3taNRQ59Atq/LOziA==';const _IH='1c96653ba1a151c54b840f3f9d159a16ab5a9cbdcd2d959623879620c6834796';let _src;

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
