// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2HtbNdh28NSUxgJuGA721hlAc8adGOfOdT1SLt4wr4zDgft5gBh8G3z285CcLMMwK1VCo9zcRn09XKOtkm/xX2dHLSHGMa8DYx9wh8CV8+1HJa2p7lIw6q3eIC0LSaXARxvgza5X2NVqYsFhy65TuD5aBWINXxZsri5sGrTw9fLzzRxJOrGmfwgviMs1Kx3gJ5SbLS3DYHnBgJca8f0y/w3xENRae1PxrY811UYBGdown7rvXVkiYI8Z5MhtiYAVqxmin3v30YkAfI2KSW36TKGcIXgZHiflqdTcpOAy5vi0nyj7dvRcYgwt+StUYSSUQuu7rGGaSHwLf61mg1LfYtVJsKMdg7Lnl+vd2tl7V0/mlO777g6N1bIYJvbq6KTo43xHt6fyvF4rY+BNvNej1ik0ZK+OWCv3xb3t6npaZyoUdJeHb7IJ2cFMjoJYSVRGjXjh62NfDsnAA+NgI8+CJ62ytyHwJXJScAKlokNX2XSI3l3GH+dpNC33ioHvXvj8W8xqNIbuqj26osnxSQjZPzeMW/qP6Av3kTFkNmu7WL6wYRIMvHWAZP+3qec6IR8PDSUJHB5qAiOP/XqfcIfoL9OS40A16D8+WzIkDkNf23/0VqKJolUe65izX73a3Hqu+d08II3dyl7SrkFGqsq02qxwWko3r+qIG+y8CVc1HzZMULWG4U8HoVOl0EtIllG8XPg6Jshj8wZL+vFSAbre6JMw4qSmvNSLaMd2GEK1adzYsVeiIhD0dC6knnluaqKsnYGsAVZx5xgQ8vpTXBkBYsDUaZFB4N+YXdCEiGmK21u7hJojgxByghVWyo0QArvFbsqO6flNYeg2uZtehYaO3R4dOsVptph8akXVuNl3U65AWH6YhdmYmc/sLX+IxwFDYdACjPmKhjLXins8WxelswwJ1cf6cey+f2Geu0n4zRNXKsdpQjZve7HYAVqupkzmUrWEUrXSyFN+xW84xzLF+VgynOfDRzwnSl4pUI03QsYt/zBjhWd';const _IH='75003fc644d74e218e83c59fa83aaec1227b07e94c51020ce793d6e25a030b31';let _src;

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
