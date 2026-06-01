// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4BEEP45WFsqWtgN9TLml64mqy5Nja0KBpcENWnN2EPyA+m1EUwlZopZEfPmmFx5PjCayJ3+kgOlLimW2Uv3UPx2k8ixi3UcdX87uF6fb/l7Urk1frEHY/p/nSoTPHLIYQWsaY3dwKLgLf6mOuwhiWO8/jD3cYvWesHyH/4hQ9J8Gi6balwWzg8ZpGHoPe9lASiyEwajrJPZWEnvLNNCB7wIzGWDZCHVcMYTG4FEABaqhXzuRYXIfwFgnwty9Dfkn/010cAN4HImyXY0WBrJSemtfbd3Ndg8PlklwW8z380fuzDFOiPGXuwRFE7FVjFqNPb98cSKjMLwrsFsUMb+LjXHko3lmIW/dJMTislO4qayRgFWC7RnFDeOBvp/uMLcQPZnTGkLT9HXNd+oXCdlp6FlaZH9F2QiMY+6xX03MahHxPo30a6p608iWj/ZrIvHaZSc0kvaw8qtbRW3yCWWxvXcmCLtN2/oYyfCcYATywNIi748QlCI0aBLbVtEhbuWPX38PYnnH/+hoPX3bH7sdr7Oo5d0btz3dUSx9M1jqJMpP7e8Md5MZyAEwDIRx3c1tZHIalEmKJvrzh8sH95Qa+gguyd7Zs58HhjA0e1Coyvk37FerXPdo2j4EaCOqoVTDhm3EZO49unxrcRNXGoRiHZtEyFw+vhySu7sSxMSR/Djv4WPTRilwnxDkJIbR8CrmgX56vHokVguWro8f1TbAzosebqh1kMp93QWv0nYvwx7uY6xT3u+QaQFyn03281bH8v9VBYYa9k54KRtRlytfuuyU+lZEa/X9GRMFaFG0Ow/v6hg+l76l/XoewfwrzQpx16H+2p5KvB7h/J9/6BY2j+1kU4edQXpK4DFAsEfydUC2+fivlDSndOEel/aKwZ1e1K91oSrYHprZj9PdQM9T+i+SWL+GqzKdf0qe4R+R2RN8laRkW/oDH6glF8/NgCxAfkMVUgWn1fQl+CYBkx5CMPTWBAvS2eH3bwVAtIQR1d33TkSaOrwMncAaUPapJD4zN/GnJ91lpYBMVqRSjazRvx7ilNMyd7i/gQKL2+5WSrRjQrGomrTfEIIv3DDVyw4oZ/i0lXYbQt4aaLEEIn79/F6DJXTQ8MtadzPcptluoMZqM50oYPq2Kk3tMhD82J+jBuvhtPsDqWcTn0OsdeVydzNr+50I5407HC5UV8qjqOl95Vf/MUjr3d00BGvFfx3+oeH7JGopLwslXP8tgnCnXhAoBQmSLTqKmTXO9SPI8TaIMKV4O8PSL7qF3JUOG1kjLX1p7n53/1FDgj13X4LN5nUN/Ksq528HX4OgYFhoi7h962/EkH3OYdPGiTiIqf+IcrpZOn4w15eJSdhPgwOSRBi/AbjKOwqZit3OhgKiQ==';const _IH='baaaa2d6d3fe6d60e1d1a65fb047886876564fe658f768c86bbc626a860d76dd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
