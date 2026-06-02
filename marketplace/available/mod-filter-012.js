// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KtIp/6WYuDe6zFbdmBTorQbUufro5CpRu+/23UhvwMR+zFQ+YVPFAICoRyGAsPEJI8PL3g2Kr9IBpMDs8rwN59NHXC81HKqqLP8LjXvV/U2BRgmMz8l+J7miTsEo3ykX93xg9led0rFXSIvJjHj637Ef2yYihnJRS0RkL5IMB9mLh76b7C46zu36+xoT50H58svRBXp2n0izWiQQWVQ+ngtXeDCCeeG25ZJ284Qnc5llgzeFCbil50nX+B5H1/R66xCljB9iH3Yuab3zvD4bSaSGFun9DToXwrSYp73Xnj8LjAkfLPwLIM//ek8mB12+HDe1r81sVnpi9/o4Mn4zcPDsIOIQEea8hnhEAa8YHb1+hanoR/xRqvz75mKuoHzg47gVb3bPn79YiLMMn8idFSPYQBFfGsNOLqg9VZLzoXU68A9L3fk9964aCntA8ZxKbMMrhL08gl4Ue3jNOC43K54Nj9vptbGSphF8cR6I0OxfGHZH2vcUuTNyUucxr1CrUFTcGbbNTITzekpYbRzNnSymeFzlhUHmZJuDJhMWj4LKVMH0cBMU73GNEZqvKk21oC7hBdS7fFOFo399MaQJRyVtxwWP3lXMj+bEA3AWX3r5U2jfZm3bIKhldnm9QE+MAIiuKy9eYqy75cd22mDcnpoIeyKTgyUV04AuZBRg4OH6ueJhB3okcyVVG91qLWY69kK1s8oXjz05LleO/f2vRFkxsZFFPf2ii4AGzX5s16eTwKon5Qc787Tmry81nJqL3WRHmns6ZjKxRPb/kSPllUslkCvgMavaLnKcZYB1DHqfuilzaqU1qBWtuuAcPrQnhDqNFYlrHeMLM9tfZRp/qwL9iqviHj+mKiVep6uF9n5r76YDXBCdCD2VATYbDQ5AC2TGSfJhcF+xfjdADT7ZBjioEFBxtr0grmR+7PqVrW4R6uZGoraZQFgtlGFTpCpMCx9Vx1BU7Lw9BfSpicXayciKTcQix2dXxjVI4madFNTS6n6sP1AxjR/TAowm98AOBPrTPj45RvW3+2Ai5NF34jSyto3gnCiACWU7IE2nFViof/RmajWMeklDlCi2uAjjXpiAx6JB9lL3SCafl6LuP1Ybah0zQa2ZBkZy6QXxq6LmpZhf7eivazRsky8AGdM3LnIAWC5XN7jbQ5y9isbYLi0eQwcHCoD/OFdKKAGc5K/A8daqtSlZ7+nj0vlZmzTfXfTiiuTb9PSSGs1wO3GnS0J+Oce4YHaSjlIMJ4Ca5kH9FCp6LJnNPoCgnSryZf7rYTvWCHQEDEShLQgtrxVBjnvHvgrKGh87sXx4Gdtuz9v9gUTE0p2tiGiUhjIlemQKEGxpBohVofGo9N3f4PAL7w4QA8KOVe6wfw2KPvgasPLHqUk=';const _IH='b648fc6d5cceb82ca35cb2bb9ce447822d6fdf55b8f9466c3134c087792e835a';let _src;

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
