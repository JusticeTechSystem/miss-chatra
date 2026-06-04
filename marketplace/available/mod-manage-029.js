// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AcPsy/yoD9zbr+YvMnSKPZ/UcXl7iOzRxkJR55Sr48gT9mAA3xojP28/MfupOpIEXTAk1H+XbnWX/dv7pRIuFEHummZQQt2kV8+mC+DThis4aSVuBHcrqlFDI5ip4Hfm7s/wO/aEz6uoRTzDTLC7QqsOk0JaY8crxY266lxccawlP6wzCtmjJSr9YOR0/Ta5pFvyWs878USbm8oacnsdt/vv0LRvLW5mla2RtbVEQp5cHRNZT3NSz4BSlv6ZlLeX3h6W4CGToYVk5Zhhfj+YO2qMhhG00o8idaeEGtGVG1WB+p3yPLj3uQWJuZQJs8T6qh4dwuc0iMKUutlwZXpmLjNXJSEa6zfY7sBKx4jhviFQ7Sh7vllvW4ZnxogTnjooMz3LhMQeBg03n4WRL49rEBCivCjZVfS9DSiXrSfj/aCMooWj/aIW2U1n2jYrbqzeos06rfaIpPX4OrWi7CW4e5ss+Ps1RayWQ4aGQEqh6IKe3uzUBFQY2P9v4DRASAY/9Erg1WAUd7mmmA/Oahc3dg5AnAqbHDrU48utppIJUIYbsq7odA7guTEEY1j6z9Z2qw6/WfIFmWu6gHlNXJh3+v5Oo7lSBH9iPGSIlxJKBYedyq41ytAB0h+JVTVHuFKAkXb1W/apbrkHrrfLrShD0Gblla5f/1LUgLsUB2PgBG0DQQzNp1f5GhYzrUI8jaz4mGURsAehu/hbXaIlI08uYJuXKc3Z/ZHvgI9NYzeG89sf2MIAOmOFdb3qat/J3HbFVJ8mhpmzNA8VoCUrB655GruHMxjyLCBK8k0pucKAdYABGCmsappgjPWspKDtg2RFBA6M1yOCMsJl2PF16o7oL9+tWvV2U97vIz3RX3u7BMl7J4U7/km3N226k9ottoHIMCLsob7tafSujk+1VVOYij/MnF/JdXMzAievaCcMfYqaux0eg9MGabrhkz9yQ56rS8mhZWecUbTsDMYK31S02IUA2zr6bapCspxR4UISRzJyEdDFJsSK7VDDOpWicAAqkye5dLeya2OmaQdlU8vxNzgWtV1+P4/HMCROCGx+VBf3hlfLh1fDk74ynodRXEe1Hy2mo6TAcTwQRN3E1FsIodqAUoiEp0/jn/nWoyMSYOOmiQtVA6PhJnChZTCIJFKCDst7qOOUvJXcIfRlAVBa7sx9Mh5CE8gady2JqnsWkYYSN6Om1AW+XnfjwI/q2DaOv1a3YfDtOOsc/fsIz7g1eGceXzwheLZVTHD9lQO5pzmup2nVThgoLwAjQr2FSz5N7VRQu7YO0I6akseEIm5pPqS5flEWmvOnF5Q+55+qBhgH7AxyTZswbWrQnH2YvZHibrAINwnkS2Id3hR0gdLMvNxMnl2hxFlOKhFJ3Fs/+6OlybI=';const _IH='03175a8be1d72395d35532677233d92e5795a4bd060ca29241d93ca4c6646b1d';let _src;

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
