// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNyAlb5lY4ZDT2uzlDBKD6Y61Regt9DEXZMbvcwJc6x2ZfX2ftPy/PHGhhD9IUi3zguAK9vICDnsZFQXaTZ2IQRAiBN6WmMWkJ9luq01j8WPrd+zzzgo4KUBI7swlUCC2ysrwdn9ZojU+iFOt3Q1ekHBNMMahxqnSZ2gzN2px/kL1bwR0nBvL6TzIbrywPiwnFYNuxvTVQOjkSZZ2GGxZZCfAvPPz7q2LlIjEXJYZFeBwjkx0CWemhqhg2/m++wQZF0XR2o2Zx3UxuqSXqMjclUM8ZOCxSlkpgwgGWGXnYsMyBwR2D8g5H9vqH2V+4r+sk01SSnX5rJ07I5oVIy6VHmb+FWbvA+XEW3jHoYPJNq7Y60t2sEPTPF8BIEgI/mDwflskYxE77r7PU0h0wT+bjQvUvMDhR+o4Ghh/hefBELofylTdsz8Vvb0BX78saFinE8uN0k1euRKeMjmaXVJgtzpYNit83daT5jeV4G92wPa8Pr8w8e+iEk8TLX+gArZX2msNpkGk84j125omgF01WKXRI1pnUBXBSxYAntwVweQFiSLdpNVDpejt+5pvqg+9c8NEMcYmzmxip+LcW05SHq0ZmoPQvS6xKwPVAXX9e/46nXONGVwL3J14Xwht4H6TzTlViMEAlay2lN1xVu+MyKX1CyCZH9WPzBDQ7+in7rvjPVDzTMpzM2cIuyTZP8argU10jkavwRTajKlRdLqGvep7J/cshffIvtbutxZkB7IAsLlbBXva51kDi+ob+iASwILDS1zcIWE6KcxJHWEvVJoIGpOSVHThaE3Hl5em6i1WBFzorr3iNylh6DHHvmpHgTfg8jrqwdBoYo6tJk1CPb0PQM69sjLLtamKtcRMXv2JhD5/x9wk82XwYehqIv0kfQ2lemxhVYzsuVnVKr+JPELg5HyJpxm7Rb2hzp0/8gJbxQE9anA0g==';const _IH='1ebffa2842c49e700edb58d74782e9ba0f120b1909e06fcb156987e925dd990d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
