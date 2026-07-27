// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTzpt3t8iMKhz0Gb6idnmETN0ivy5bW8ieSiedJQWi7HCIMHyqa6wW7vWgXVdyDVLFsbYCb3UFzXBMbcdhCDsrgDYU0tkaDSUBeEIrjwyf9oD/D0OaLa3H1o1nMJCA5xSnnt9adkRrXaQRrZH5q9Q5Cd6i2ndiXFb6YXxmK+sZA2ToTMxCDzoT30pAXSrpeOVnDp+9lxeKc50d/Pp0GH0uL+cmgu8Ya0ofDMX3EIZQdOcnVcc9E1ikjqzFnNWO8PaVJX6CVAZAzu5w8o6qgwCR5+KKLpmUZVVCg3U2bK2knNajHhGDryWkreTYOeltPok0Ey4Dpqegn65PXIeGQAfSOCa610xgJlOP5YBPvEjH/79ORfWe7ftryjkCy8B3AtEEZNTaEZz91MIVgqdOhCJqvwGDGtkq4hCGbA9hYdVG1mZJZh/5dXW+GnNNAksirNork5DMR/wYR2RnuPEKz0FcK2cePtF7GkvApTvsxXluyBF4/Kmjm5eHKX+/EZ+lWVRCUC3vQggMOmpg+kzLfrZmzO46d1A9vEG2Mp+gwqdfU9Q3uDqfwEGpZ+ivl2IjlbcUWqKGHW31hLnBNkTnyFJlGNK2/BL2ez+2y71+6FoTCzk5XpvtIuP4oF2H0cH/gdGNFmvxS/q2aOASvsL1o49F0tkwH9LylGf4Wl9/628Ljm7z2xiBT2AwahM5AQVrFFXgu5CHv9hCLryeU7C6hRU+7oAXkZY0SCZM3rZJDH/CaJH2snUxUHc4/LgqGsOhJGx/U//Z4An19Qykvu9U87TbrNTI0ZepYdQKHmi3drxZnPqZWvjRBUiuQNinfi7BJZOCd+YxlM5ostLc72IYfdf2LGUaUHKFwSIJAgJuqgBIwhwa5vyrlvm0YwJ8r1nGtgf7DlISFAhBbHbT4C9DtIi1mV3/dZAPp1v4atgxZzmrqJEQ2JzahhTUAwIZgl0MNpkD6d95ZStdDRHDggl/JsZE/4EPUIn12ShhOPVlzT8/URhS6dCCcShjUN0rbsmr70+6Wazqc4y3wkWibq7iSHvKnR9aE6Ea4L+8CzT0Dlxw5uHqCyKkjiay7Jq51TN7errOv0ChHdrYMX2hHLpr1QCWI3dcoLANOp4N0Zb7rIemJlyE0w3414tXg+d7h0cTv4Qz5/5mgGT1OYY3rK0N0123MmyKbf8DJd5aqp24rSB/NVg6QC7WHj8sEYWU1D+rIH5eUyleaPdYooqCXsJGJIQPcYFhOFPzccg9umvHyFt2q30XeFUQkB3CFFINAwU11wxJggngbFcl91gNjlUitx8EvwM2piNTBWMMgluswOGzkI/x4ogeqLldGJ8Fn9/qYAHsQ9V3PPuUQRZnviL03HkVhYgiijrBDk0qN6s/x2tVFfVtYw==';const _IH='d4441faa1fcc62958748a6f3fc224fd4e4d36c900dc4441ded27e55842232711';let _src;

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
