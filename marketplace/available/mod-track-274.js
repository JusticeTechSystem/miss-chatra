// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqBmljrUXiSYj8IDHaYnVt9A/HvglbSrNGybRqLxsPVA+wBRRqiBkYsgEY0QpzrwHHDLLEUaWDgIcCVyut0Ms0wZU17yQJ0OpEoqsYrvM6Fqlowb73PNYBs0Fy+MSM2FSL84om4XqhYJLjgQK+JV+n0ZmncTrFwgYbBLTX0niSeGTT60nyhW4zTrB1njY8YBYZD9NTawedmu/9jKPWrgpzGFj+ClXEWg8hYBB5IVfZDG/CYRs5hdkuvaVO0GjomN17+TqPWtBkPpVC77r0oq4/ir5em941BnfarLk2+Pubblyifmhc/c1J2k57N3iC8D2rIUHSWut0zJpJlgPEtuKjEFbGM6zjtS8TcyGDYIhKc/7J2qJLMMJ/8CMr+LPyjjhwj0KgR1IzEj67pujqEXT3ykl89/PbeOOSdN6RcHXUO01cYWQJkEslR6ugd/7dAdxU2xKOp0gwZGQJZ99twZPr2B9r3wj+PNCqtei7grtsrp9giXolBd1MjBiMssKAfL7jbeEPmSll5Kuc4Gilyb453MOWXs9+ycWB/UuUGWEfm4tKFgUxLdp0dT25hX4Pgcvl//+4p6Azag0UcubT9aFhdzHD9OZtdIcWqbuCYtagsmwsNgJ02RyN8y+oic0eX4nCeBFTawvl+uqdc17JsTmfuy3ORhr1HhXzXEWQG3Tqvxntl3Y22Pzmi3Oo1/0ZjmIkop9Rx+gdc5PG8ND+JigYej0rVZwToTetAszHx1JsJ/jlm9uSD8NsWR+5vXPpqIcSqEWZETFAIo1wEySne9SBZL9N4xvYfd3mLCCIsy7YI9ijzzvKFXPK9CrgjAGBemYc7bIv3pFwjT9CRFpTZMyq36Tl0kGTVvYK0Yb0nkrQQ/a39oBWpo3FoDQTF2XuE57jjKRxnerrRYLyl9gDb+S4i8IDoy9HYsZJG+2uL+ME20lywmUzDCTz7Y6AzZcFKxK8Yp4x434jTKpfQx51snUNbBzQntntaXc3taHmzsvk8abn3d0Rx1/h58IB9ZeRqxRWbuq/FCy8lr0HvLPWB/gxjmrVBPWaY3lw/FopWeWQYb07EHgz8uEPeXAcFzvPqPtspCxtqjzEHQjSClwdmCVbJYHNRoEmN0Ddi47frXzuJ6MhSk/sL4/c3lfNVVmC+t9IISyD+tteTcYrK8oGwmEP4Wumhm9ARdhjCCCweoryZJAIEHk5kS3ZfW/cChfRiWHqUz7EQz4ldU4WYWsc6Rb+kh/vf60k9Hq70PD9uwcABodCZ1ujCy4mnEFCo4HTvklFC7zA1YuoNcw5hV5HxolOeZ+BuYesc5r5vFj2o70aNeo/fd4MdD9eQ2tmOTL17MBrhPCuiFCAxCBLHqZyUTpEKe10uO6iU4ybAMhh7Po=';const _IH='3ff15a0dab83257676bf3e6f2241455e47839aa785fd93ad8564b748c1944089';let _src;

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
