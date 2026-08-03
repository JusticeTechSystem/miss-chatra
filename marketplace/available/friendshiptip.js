// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwtrU9Cyx33AlMwcVPQd+Ho0EsGSDo5V/RFiy7ye/GAEDoUK5Fav60faPfymvWI2imTwcC5KjVG40vlB6Jsp1b7Vdci+cTRFcR865duioYVl3Lx3ZDIoRomAVx1XNCI1IDbTD9JzFUSdP3wmCTqr+qiCSD3Sko6oiS1Q3fV09NbXrWbMVI9X98hH+DbOm7x0UEbYxM66tm1hCRcqksqxovBM2oulRE2IMz/eRftQpPnutI2Z9cgCIiiXeLKtan+QwU+KTgB2IIRZD+3YlhjvjQYDNIDo5SWpmOP3lDnlhkd6Bl/tIOxiHa3u8a3sUjEW4KueBakF76c1zfSrU+5tmBa+uAOtFkIzv/9uWO/0JDHaNYx1yfPenOfKb3JQzX8yYHOMEg2K4pIlbPfP/3bNqkB34mm7D/tq4x0XNaEFw1WJtG91cxLrli4hCSSmivpFgK70pp1CFN/TMaAwrz3ZAu4ByHu7jaJqYyxnojHr5tfW5tY2c0HXfcchZKB8eCAYUMc05S87hN6UqkLyBGgg+7Z9ee86mCh6xcbf9ya9IdVDijktgHAjS8v65NhCSSh5pBIUPn++Z/IPX1PE5yfkTOzBV3yf5g7nlS6r4z0hsvCrsXG4wLcMlx3QMSST3FBWxHkfsZLVKJPJIjBwfN3rEURZeImU6ibHCJbzXcNHQp8EWJXRj2uewuO1ZYr0Tk6i/tfPFHxcDoNjmWwivPgy1TCoxYuxBi+FZaSzkSDxEJ8fdVgEYUUykUllDCReCMcehVmTaMU9aFsV4JcNNyKu7PvnktDzw7L72uvl5Sk9xPaYwkoA1inOfAtPFNDVYldRFfHviksbjq3d3MSea2QMw4VrgHApTLohb9MOjzDFlkNQyKmMK1qcgvlpg3287vUPL1bU1g5bX20Yv3bHFjIR65K1kQeNaj2pk82o4//Kh+AJojfe/Tv916Si5Ic5v4rpErZNHzUQ0EBV+qgoa/+wn0z46jZ0jTia3Ttb+sqtpEk3Bs39QkV0wCCSpHbp46fJSwK0z56Cfoz474szj6GmabVtMRCnxBVyPAEESo+Xw0V1M9NwwnxCjxhC+7zqhxYoz0s9zOP8xdLpgAAotRwGY72U4ZcZvrT5UNFRDPzlSKKORGcTmb43n9tJZzXpJssHolLIMIDscEExZFf7DHI51uWjs1+vmtWMD5FO3lfY/tToIcc6iS0xrM6KfnX78Ds7sBq2lfQNMSzXsU8SztBaHfI2Rsgg==';const _IH='6e195e045b2b20a3fc036afe4b6e545cb39267c60e212c325f56ccb16f609a07';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
