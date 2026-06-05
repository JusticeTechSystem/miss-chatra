// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lRJkiOJ03rfMiwMFbcEKW+KKUd1eMrk3Qz7cSZL4FmDTrnr6pD/9+zy/5ALDaHX4yNcfpl7A6Gdkp0CXk2jGaSXHDK/IU7UQ5++3E/+9fbAes2EIPmdMnwEaUTwKB1S2g+1JhAKq650TIEDAJFahpQGJcBg3TBvaH34dQaZFaaeacZ6U1GjXmhi8F2JPTktd3DvI/s0OR0RYdebJHrP2MyHrqCtDldU1xR7UCo7NrNlQv6C/73pX88ChBSDiijtgIx5AzpjaBLL5Tj6Wu7ssRYAQY9yFeAKZpxTle8GCIVE6jtxCrVuAjaP+ydTUkpPKO2dshZAxhKfsf8x7QFh/pL15iLc7wdTTh+wkzzx4aF1s80maHSGAazmSDMyn2qmucfZdvNRirIoMLgDE5mjKCSLI1fmnAOFlYeNJ0g0AJBtobf+f0u5m7azklJohiRVU63yWTOnA4FBU7OvBEs3xv0xT63D60pxy3WrG0Jjzmb55pkX1aolQHT5vqpARc/brKl8RbAoxmt+9fLPzslgiZKwOT7MMcVyP+GnT6PDoc9L5OQsIkGi6RbsMwJkVxSz91nocVvam+vrYXeYGU/6BYWSyVvniItMzAoqQTc/5tPVfPNnhQrLNTfMYwTKggT6ScyeU1KgvQfslk8KU+54kY/xzQ52Sdz1ZlO6KqNis42Mw08AztgTtQONykCbYjj7tL2PvVqqYDecDeAroOB2gqk/M8RCoC556JPHKdxCIPMROPVkbIYaisxhaIg+k0CHzOnJkTlV/O7jyzEopxIEgCPVDYyKYRofe3IlCB9XFtugZRoK8CrAtnktEe6dJ/vMB+opTpiMlVS36yuIAMXi2AklrpahoWHiGMlxBpIkNH+/2ZRbd6HCMyPqjsDmG+YTgp9Fm1BbDDwNRdezMBdey1I9E2WAvGMyjUCyjNkVTsqK+lEOlt7qfYX2C1L2ufrZLDWOh0VFQNStCaWqpIda3CUxQgxuZGODmkQBCxGFMXwSnlmaQkRmhcFIzCQMaQ+q0SXCTf9k/j8H3ds1xgp7LZ1KdGyIAqmaTKsqYJ8C9NQAMvpTgrrf8PV/KKnzSAfddOvG52xFrrcfz2snHwozZ8/FxfHNG7910a+FC1r6JVRsC/fOl21Qkd8RV4Ob8Ty7GsTZCsi5QTVQYObdzl318W5iv5CJmu78+ZuQwEqgo/21YeMnnqX5YY1Yacfybc1n/BFQ7tqnGObDH/DxbVJabC80HcCpTrRUKtzhA4Xgl8ibJCi8m20TVp4C/15WJeyyoY/A+e1fzmijtOBmlRlGstkIRqy3IzpSV3I2u0Xb3EK40JD36P7j+2FFZScRXajHtCU/Hn10KpUmLNuKEZbdqh17e/4cefon11O6CXCmS';const _IH='9f3c7b1d262d57183025eccd0fdda4ccfe19916e48aa14df683fe71b4aa169f9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
