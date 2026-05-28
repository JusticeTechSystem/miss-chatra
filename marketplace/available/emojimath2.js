// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tMJyxunanSm0ZwTO3CmnBsFyZHkKsGzvBgfoQ2kWskSImcBYu5zcyvBqnK8kdW3I0SEbqe0aRGPH5oocfxzZ3g5PLHpbJzKnLK31ebHxOBIr4lM8/MjRn7hv4dZYSlyB4EaACU7cN4M1W4s6nTpI0c2ygYYlLrRxHKTByOhhaOrwGhYyW1Zj+Q6+KON1ZIV08nNqziSNV0EJyoPyttfx1hgHtfyqKz0CvnpQ6zA0cs+CNu/AbDRnMvXk91UcYsx+5EkrL+GTOzDTA81ObexDLFxwaP2oFuaYf36C1mOKD86nRiVJ53gP7CYmOQlX0BwuznrstR+i3R8rBizICvZvKW4X92oy786YFx5TMzH1uYw4uL9Nz8wCplmlL40quH7AlEAryiwi/zYh11Irx9/KXix/sbzdhwD4pilO/eZVmU1jYVR0LEMCooqd51pjmZgH/2KPTQU7+BAOBk2fDN2T0ZZnhHeviAuLucLq0PN5zfKirgdcdTvwKskxSeQcedWOMNlNQVekCp9o4EdLdYNeniZMd33IWntSd+8JGC6uiBve+XtE6/AsPctkcqXJ6AWBIk6Iv8yCcM98/kKzFnnMPkTbAZL/AM9UbJadeWJCCnCT7VozNOnG0T8MJtsFGN/h0YAP4hoXXWIKbqIF6Ced0uJOHdynBojka4V/j0bZowh7+vPYJ1dFGJLGzj0o81ZV4hvL3egJxW7wMt9M0jdh8c5mVqhq8J+GrlWrA4AVs2x8pO5ybHcRAMQ+RLG+srjCCL2r1b+IoxI87gR1XSQLJDEkuP4MWOhTQlZX3X9s5r5MBVb8tRgcWBctGYf6gma/5YlXbsW0/WxbLNrxx8i4/xtOW/M/fqClL8MPQmRZFWpZUYX+O67l06ZQ46LPllmAndT5Agi9popr07sWgR8F4PIa0mUldIdnOv9BO34Eqfv/Dj+N0/yfUqzx+XwVl7TkiLAmyeCoidjm1wOIIMv9JUrICLUgu/wtiSb7IK4tGndpMKPnb1K+aNU0Hd9cznncJvqclSo7su1/xlSigWO0wKJpReYeBJ4BMZfzwELVaEQSMASTdKuWVuK8PeLonWF9XrFAePS9yRWg/bMAiNPQT2bLJi7uLCytIbSs/464M7YY1Ri/OngpprYvjz5/k6jxR6EJaCEV2P53sBFhjMnAVAvw4tsrsxrXtOjfEBcP71gg4Iaz2uHms8DvcOt8U44rdiDQhGS1Rg==';const _IH='38192a9902034387d6d14fff5580e3735c30eccecc25c73af505f2267e4769eb';let _src;

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
