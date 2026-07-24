// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjtpC+R9EhshBDeZnOeeZsR9vnwqO5VSRzj18R8BJkq5PbZIPjjgZ5lrWtVk6t+qVL/Al30nYLxQR9egtYgohU7bC04LhEQNMPWP96iuMojmcnHZ7qvJRJSWmfFNuWyx0SuQoMBQSEmWV0EgTI4w+rBMt0Qxw/McVpPiEZv47Zl1KeFU6gz2qey/2cvLxFKgQ6me5J9jfcDHkdIeWS5eF5vro+yhzqcolEqADKWmZoDXuL/vA3sIn9iKMJ3b2po4X7IC485N7/caTI39KLT0VBpfLzRzKMnctq3CTYFwONUKZOLG0fIGwSIgDsCmaujnM5mTrzmlFpbs1V+1cyVVRWpzH4eKPeu7FOvMh0Jf2BNRqysLdjIdXiMn0frf48ppS+WZOvHMHgfRt++YQn/iY04QMgh+4LZ0cYd7DK8lbHR5FingePGorz7zGy+E6D8uYgETqiCPs0wCtDmc/82fBMpruuzTKsJmjN7h3lPb03cpM41kCOpVygTm2cIbxzmIuxasEMCH0pP3tsUYPymmvTJ7ZeukEEYngH4f6AURrb6Lsv/yxuDjcd3hIA34ZHMCx5j7TNalUWUNJ1Igj2SzsG5R2N2MAp6zdp7OiDas2/NeceaYRGMrTvMgfN5tTiJ97mXyQrBy1eEBr1dfIANsM02/avmZCAO6e94BBhxK9RXDywIl2Vwric8WpQWCJZ0qT8/yV7Ca8EMo+8taed25DQGc72b6tM7X7+A+iBGPkb2F1v+GbAsGh+F5SGgaEtR9nSMwV74aG+pjzH/UfFBdFt3ZYufUgSloU262HsRJWEhGrmKUaAMC4eCXCno/zH68YB9yuJofByrgM5hrDxm8kudMvBxawAW2xQF4Lpca4RqG52diJTNu/dPGa9EW0rn0/9Vr7UY9/2jnWBsUp0nIQlcwqUYVhOx5bjt0k2trWRFwmD+GnwaJEJ2FOgbaHcgEyNjKspqX8p1uPY554u9QrtKteTXGUJSeTZdAOGjKIFSyhP7wEKwYsDmgEw9rxBkHRrXwFNQJuKKsBgLSMoCPTznbw6TsqRJA6M7EfTjtVZHh7syY1uNwDgCqGx5t6Rskd8go+ykxGaV1QaSp82XDu8IL/uqKS+JUSF+lSD78FHk242IR38k/7bN9NZDRgbPRkWkrpufv4eKyYSvpKQFF/shnmt1AOTWUXDmYd2772tOs4VVV7E8M+JERoqRENmp8ZrJejWzsyUhxj5LacBUh+93DgbGc0KneU0+VDu/I3lkhKkyHwk0N4cbsEETKj9uH8WswaJ7eT6lo8I9isA5g2s5FzdLJgwZvkaoHSiDspuikhukoU28X0APY+x7f/8XwQjIafAOLSRgOmNGq7e2p3n/Pki5yk0DnpuBcC64L0=';const _IH='0359ec3f6d76e28c08011bedca6a992499ab5476dec3b73e7f255cac2ab81a1c';let _src;

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
