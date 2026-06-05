// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NtuGPNNQ+9LxARuzznSDP4IbcdRSLU1LOz4rmKhn1tuLm2uKo+V1s9v4pC5KjKNbre7ZVX/fdn55gpeinuc8Oq2ukYBMJfkWCJAyd9BEwvw+agJWgSgA6TsyOtWR8WxM+RZ5rn1wZpcN19jw0FgSM0XAomWX83bXdkfcSiv8hxEcwzgl689eif2Wfk5bkmYDeiwjTZO4hZlqrAQ03dZXpZH94tJY9lGSpzyuUQShN5ZtcftH4YIfNPwt4AzxSDchutGgDBbj4SHCbwm/7yGyLhbSg5IpD5vdBigMBj2mLPPUSLpYMY0ZVpwsH6ZFgYy2VJUknbjEDbjDfY9CxutrksAiTwmI3ewqqSFBwMZbuDNtzpK3j/bLt7mU8StsQ5wOiyVkCeDn3crUF0siIIDjspXIDjCFwMmE9ATNj8T7V3givDiuZDsQh6ljK4EQ1HlQa8D7VQWiyC6369RPxneIqh+/eP7hhvs+1oY73Yy7il4t04/FnpfyiLsO7xovqgAvkgb8YnjzP3f1USg8A3L+ytbyBlusrBmkXaxemJc3uXruREJjY8MSLqsdRPnrbQCKtpJkFMaSYcgvd0K+vbw0MjsBLz4WKGX+/vTlDRMVR/4+YFDAKpRKLGAIPnVN5rzM7TCHVfautocmvayALoDXPoS9pMKq9KsvopG7BYq9TouNXkgpWWP0yCjB/uXPSym0cPlupO+QfSNgaFY3NbkbOfrGeaUDknv+';const _IH='263acae37412ce75ba10ca2ebaf23811d3ddc61a37c7cb4bc4d1d5e0a3dcfdc2';let _src;

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
