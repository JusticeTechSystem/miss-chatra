// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e2MZOqhR/NmXTbwDfWGbzzd1SZaCwfyCucNL0K03LSgv1sXDEd4ysysSX2C5EhJqgxIfgJ0oHxAKVIZJhvvCL70rm2EuX3ipyB5pI9z0fvwX/1GIwyMuWh5WSdLK3GjvLUpYxG95/jnmxfxGlKfTNAnCghEoZIYgvmGsJsrO6raOrIb/8c6owgDQK3vlfC5aKt27j7rDv+eHJdwjLKJ/8kcDIiq1O+bo3cKl+mAaHfLNs6Gh+2AI11Dr2QpCRYBxWJ0/wzAWMc47FN6XQ188WXuMF/lGzJaWp0OW38QirS8ojVFzICjkLqS4PlexniXG0/ylbXnO63LzszKOb9XuttkDsAenHvuwPGMOJllkCivrYRQXhY5tv6tydfIPQ8G+7V9KUPgjyFuiVI4xUg3LQr881uCa5P2pCQelOm1SxqTtQVHqAiQYTtCpNcQT1GWDbL+iwMkrjl+aUKXoBZAbGF2ofcgcpOV2S5eXbMkfV/l/ROifN1O+lSO7mCXKfGTcr7nnOVEmB2ZICivpf4lvg7rB51Ee3DmZWBf1ChB1Oi14XJtUeeTRkRT/JZfdd02ruUJcHtAUKU80JYa/0T6Qc8s0FHZDYojD/LOD2FZ1hUMHpnhszWhsz3pwfjpouMwaeAKe5wEjiLYpin0BmzHu1dEsjAqvVwjSu9stGcBuQ+Uo+aVxz2XIcXfrCSRiNWUXtmDfD6a/JiIbR6YhNBeXMSeUoDVMf4c2UtTCbN5SIbllQmDNzsfz9jivGLVruNzpzNSDFxtsuZ8SGrLrFuKN+pbJOnXdgQpBtS1d2J6MWbY4UpwAPaozJ7GFVmzEZN97aDolfjgd2vvmbFR39Gir1fBaxguFdjFyMPGPylIQyjngHgLzLrHkz5OYNC3C2jQqlFppJ073VeeiAcCX1cLoIm5ZICNhP7sb9lTXi+137DH+gP86NEE4RqiOxi5Tq1+GISZu8e8liT8O0Ff0yox1Ds0nZ7SOE/g9OkpG1QCotVf7tdgHuswQQUeCihJrtDrIpjG5J+Hf1XlV9tanY7qEVotawRlNig==';const _IH='8b0724694b6f2f3f4a17c63dd4824f8ba001b8e6350209d856599479252ac4ec';let _src;

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
