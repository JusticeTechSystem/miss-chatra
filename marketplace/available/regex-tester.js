// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x9eZUjxlBRk9AKRySyYPyfgIgUwj+VmG1Qg7wQoZV0GPcNMyQhPLVYzOKyKuOkv7qCTRKijiDuJNuYGjgyeQPnf1Ujc2R6yExl9P6LdTn5Iwu/cesWTJkFORglNZ97aNX9eRGZQOPyV1ZovIfHQvO3F/e/JFVlelvyqAsuy4wkt+OzaYzIPq13LOtkNzAPmnAxJyE1Neh41sYrNwHfW6yE/meIja3d9HyvK5zPkEuwWaDsgMlV8W1n0r5weXu67AIu3Dvh9hxDyaexQB5QTojbiC8qugIWPweuoVpXCn0xuFICatwEOKEXHGSMZyVESSkNhXLR4Sx7h8WYr8N1iU6RJaRmELQ64ffpVu+QyFegSFMmxmMESAIsz2QXnLNc99sCya4A1bO6XDdvDzlbg/Rnw+qnDmdKSkIK4eiPPi/RH9YHnKhPzknAcrE392hm8UkgRzPPQQ2OaJKQUC6kwIX1X3QPNj7fkU+GMnT/ThpSFBcncWZjOgCQdhLFYQEntFVj6IS771YIEQ0VDTBQpxdqdMocL386mXuKx+Hnq7WYz1LxQUyXFjW7bXIHSNu8qNrCLC+GpUo8Evv2iTTCmvp2SvEyVn3Wk8DdZFaossi7bvZvp0fO0RBp0pNeQVYlcPjoViilTepPBQN6IVuZn+zzegpCFlSf/xIAvzvnc7yvNNOPVQU0x+19PerxIO9mY9NTT3lH7n3wSRa+Ox4hRzqODiBIF+PmK28pZklaYXq+vlDb2wYIDm+5Lu7QZopw6r0Tj/W2ToVuhOq6h6hZihVVjJ1qicDxGh+WGnl2yMlO1XlhkMDu3HQpx9cHQ2Ce6v2nKy/bVoK/TyWhesXhLTZRwolSW9VBAtgKZmruvng18w5OGi3DcmabQJqoYL8IMTs1Q7wAp+GiC2kuMNUUVEm81mYkWUVWsReaH23+MVJI9nlnc2+fFEpQoXjQW93riHgzzynOrt3CSYLIui8x8McEG+G6R2XSbhxt4p54FH9U7Z9uRJy53q/3aD3MTdCKaZjBI4oJAE2FVb69UvXBBNDz4U94BnfpjYruKGEdYluUs9VQ2h3QQnHtLxUB618LjYCT5kHANQKNZvtlPywixYoAZ8iAFb8H5aECtKxpAOlz2AMseFjlh/o080Fnkc/gRu60dfABf3+gpBaTpaGdOEG/QZWzj6IEcZ/J2/DOoFevn6FlCwhKlEznkTkMAldH7jpv5Tzn3EjhxeTioU8VcoCzuY+aSSlvd/LE0agTaH8oodPb28IT/eEw4tR/YzygvVBpGDRBxyLSDhSXyDW1s+QfXpEHQU5uIyp7C9QCAzv1wbvNplkiL3/P8Ypz4KQf0WrjwVmgg+EBer07Td2NX8tV8/S3HJlqTqvd3dUjd6qw==';const _IH='fde61ab870a64d10e305f525a17e70b8bc8f6ba2d850e77b55902f56852a36af';let _src;

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
