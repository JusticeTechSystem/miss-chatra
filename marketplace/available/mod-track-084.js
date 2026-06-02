// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v4M0La4H4qFms6dAg8gjlY5FNZyQzp9KFAYAPASqlS4gwwJY6btLAV15A2aOThA1T7k3Wv4wlFsKN/1Mt9wHb5zkSP1oV8+U3zG1opH3Gv3e4CtP1J7KJ4/wjA3rDVIA7YBwPEGjeO09vqCOcgcBdvlufMWVCPKjgG8lAEpeX0e3ronF9LQaevdMUwbU4UKtljk1y9TLxjI5/LTkec+ygWaV3ISlLgr0QlmevcXCjU1kV4lWNyDUWMCaIZHTxzHDdAvDb/3lt7Aw5/gRiF5UafbRcJ7VwpA3XpiGnbemm53bnOxR+HdV5kGYVEGkpVDprE3VntE7l7xGKdbdmFbrbsyUv5K0n/GwFGVz7PGux841QrrjVehFyaDtV6AnNa0IjDWdg0riQmN+deq21Hf6weOJyCICsR4xTxebgqjVo+rBPXrvQMRwryqXSFXJwk3oqWCI/i9+t2vqVV3Vw5vbPan6wO1lGoLjLWTBq53+zzdhWGB6ypWN64wo0FN0/e3hhcCxDTti/O+DadC8KEapzwciQEhLvhJhI0EcZkjp12OPOrsStkKiMghzBPj1/x0y/Z8PJi/VzDV6Vh//TuY8ZeNH3rYD9MhKEBKCXhTKyCF/8VcU3WA9frGd74Eb1WHPJx2r/1w1EpPTOlwd0XqRCjEJvoDfR1etwxlhdoTumfZdfDi11wWrlEhyjXFtTCrp/HoaYohvBbmSWqvQhmKk6KLBBmvp6QK3/EpgHN51IWlcBdTQyiccVN932GpIAMwrlpG2J7Y4WE07Yd07WAVjmwQm0hosacUlturNptATiYWtrxxdA8otE2a8cmzq41ANNkhTDWRmJVas3EvGBXV8M4xL2g2Su05edtQBOeZVBqP4zGTedccHdOs2YUG5DtKlsrxiEdEjU0Bosk+iUN2Z7ziGdBfh/7hpS5JUYa2X5A84HnPV7ZRMQ6lLpf0eSlOG59kX3CAjGHWe1+rnHZfnK9Gs8M7x2s6l5lxy0DYcOs/7wgPSn8DNT+ZE2qL1+irGOpE8WSBKH6Z1JSt/yPS602Ce4SwIGFbSHXY5kcV9SKmAwNGXFaYhtJXgOdgqn0jwP1eZtUe6NpEmysBWRMFsMhGOs9g2ABzCBKOepfiTRCGuFu2mRQxypmyRWTWvz72MJMVaayCFbd8zQLhIwa9zoc3/jzBd5LhzyrQn4Emj0OyfWtrC9MjHauLDop6siikluuZXBMdN/b5ZjnJJjdOzLJaUVgsVV/2Y4HX64lKHcGotYn/FImMAvE9H9IwHzluzdOVF088h5hSOUzOYGaBayCqGnlBmmnnmL+9obaEebviW5pMLknX/+0LAEOQvsaDMBrOtiHRC35YSHtzD47ogFUSsLUNBW6lnTQ==';const _IH='c525268251f861ab4439b12e5f9f57588990a98c5720e2419fc3ca85cf50a4be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
