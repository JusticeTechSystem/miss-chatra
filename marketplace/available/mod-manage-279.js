// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/ZD24zoAwAuB7y9Kg2hR4L1tJ44G65fg5mJtPyzgmpi455b291V/fJwU3fU3lHNLPuiTSoL9OnO4GE6Lo3HhZgojnnAMeO3nawRWBzvVbzt1I7hU3QIFUPROE85bZqFGuK97IZtCkDlQVDY9dR/zIcloB7FdR44eGp/CDN6OG8k6JAs0jM8IaJ4muNbOBazrsNdp+YHPnUEbwM2qVzOlHAA0HWsUVWVm/iSJv7t53720Dik3n2z+pjJtEYrmTNUzrpO7vRzuXSbLiPmC9pSeuNvz1oUDT1/Fcr+NMr98BJe4hKT2in6/VeX2hJJkdHi8jC+kzVgAvO7teVzqFepiwUaq0gcmwD4WTktTDFm2QNYShSCqReB7lQAr48uLW/dlzW+MpNqbp6Sf0j13gt+lgB3PpFh3YA+Nwwsm1L+czMBH2oui8FpIvQ9ISRyX3f3D3c+T5b7UwI7J+fAAzAkxaF2Gt8tz6qHVIzAa2cx76WLMcSoIqpMkdp49SUpmrok23JWYCCdwg03ixU0kfOT+HqQJyYMl5Sy2qH6LVorAGEkKA+nFGtEmBrJJLZQyemjtXJP0mjy1ZL5wqRSwazhjzcof5u3Idjb4QLKAAFiK7j3sxHk+o1VF7O32j+QEqUsj2S+ao/hBAA7WxmiDSiEV5uT5cHZygUcycp4FLmp/1VqZ2HKxirL6C7T2Qm1+oR5c+/Bqtvap2GeWRxg3gFq08iAKDsy5EZH3hGPa2m77Rdk6/Fi312wxy/KUl929PTnAejKUn0cdqNXVoH5TLSorfmFrNBHAd3W4qroz/jDAhieTPQl6y5UnSYq7cXTs0DfemJzXVcj8lRIayZkw1uGjKzL/Jr2Oll1kiEQFETAJFdeZS/sUlUszrLioa0r0zWNPR1EHYflbSF5bslH0dXTsqA2dBtI7krDITA6tAyzh49ryQIaPRwLpZ2yHq9BGj5FIoUg9VICoWvP0QrkwItfp1YdrfyfjRHBeSVIVLyh6JpBXpOuey63AH3iZjlSNLSsEa/QFCp5TG3X8QI9S0Y9acHtzhfB8ofKGiialxVFVLaQkm4WNYMce1eNfkoUzTrPU/GVjVn/mAnAjBjw5rSmvA3BlM4wYU06Z7Zj/XCXvMAQc9W2c3XFXBZmaelbm9+LM5t3w6+PhdDivIgFXLrEaEvqOb6tnxC1pFGjIJH2JtDbN4sWQ1Hys+k+9CWYuPNEgZ12jIK24B9CQLp8kXXvxYaD9boFfX1lE+Ib5PaJYIgY/Bv2zLne1V9GCjtdmvVa8r+Q2J48RhsIPX6Q/Ybc5dNn2vVEo1oU2qFPqtemKvWDtXfgKYSgXAaWYvqFQQkTN5i5iRK6T70e+lZNn+112miu89rW9BhMU7BRzGy3oPLUk9XNxZYKnR';const _IH='6534d731977b76d6e12fb0d1e9541b256ccdab6330cf57bd0155712f2829770b';let _src;

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
