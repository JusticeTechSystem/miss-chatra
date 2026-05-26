// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eRNI1kvLBE/hONCn/MdnNLIn0qtALOoAVEff9u6AuynKq5QroXDtv+C46tTGO1+rDXcAkjKAdWEfgATOUGYsYdPSN4x+ehPzdApVtzTgGgVgRaUb1V5I0+vL36hg9FSnHP1ZhZ2vkwLBjD9+RR5peSbgjtcbptWmfkc7Rd280BzVAbgvI1esI1IAB3z0i8MJHFi8wyz7eEbC2Zrqr0ZCfP4J69FIF0jsu6bpw5/ChX77AyUvMDPHgV4JrfZ9wGL1RMHgpUDpthmFrtapLZu2kgdkCrITRKetOHgVXim+xg0iR6TAXWsjYyzqiA0BbcK75+rUDQZrSo4Y1qhLj/Le+gvtXMKQl2vPy7LLGuUiu0fqN7QsIVJVop9YWJvBb1LMOp7FAD90LnAAVPZyHdfNvwgwsD2dvxlfXXiq6RNG31JH9vSUOnt/dO2YQwFTrVOfWa6X3iKJOsFRg1XtecPBky7r7SHpKWoR3/JNERltflhCDp9vGT+eUCQJbZy5wW+kiwP97xl6jOheWMprKZ3ksYVyf3a8J6UaPigK5gq6pOCHtM0QCihIB3Dqmwkeczfdc6EYLn4XLJ/d6Rrg3ckFSxw+8QBoVG9gk0B+4TvgOo146Tx6yBJAHNpNg2c3UMITbw9VLTDyavMaBTbXe0iD36Nb9k5SYLjs9p08+BJxQ/RIW/mu4Sey7A0HyMtbmc47IOERq4YOKPGdu2Tc5fd+/yAD/BUzNgzqt6cFo8fcQxdB+Vx+aGR8L7Bxo3wZasg1LF1szthhBJsM3B/R1fwgplgQLHKOJABfo7NRC1odWl166HxopGhjhqCvrlNu0uJwYdjn0NiVeGIxhIFxZoWBWGifi5eLhAthXIh9Mx8fSOpfV7Rfgm8FNp/UmGv3t1w65YHgHZCWhbnxAXw3zzayeITiVH1lOIGyDbniEIxCrCMwvHM4Ph4LlpyFrYckY2OXLWKwmGD3qLbsdEPl5AsWxF1yDvoNYjqauPz2FA030TGf8eLg+V2iMt3RP6voHzj+/Ob12KKRcbv/x2Sa9hPOKP+iEh+i4lkt9PppgshuM9RI1uRgKtFD76ecdlNmWocOcfNNZ0m+DL9DsYJM4R9wqm/StTcC5QVArlPOCwyIzHOr4PB8eGQVD6i5xIu2ev3Y9IaOFz8C8TqEq+9mMptbvgfpWqzDysoZgPPh1UKzjI/E7CaSK4UJzFj7TYJk9/8MEjY8zGpp0KI9zTw5Ohv6Zk7LNw==';const _IH='9ee44ecbd4af797fd8f3a142eb5a5e4f307a610e3cb5f84538539dc2c2424ebd';let _src;

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
