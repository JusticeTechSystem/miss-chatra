// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='37Hrp636wlzo7FjDIqrVR0FVmUj3E6f7bbj+Uk/DJv2VcCCqrQw49i9XnVr902cMIQvKxnM6nqBdW6IwokTHy6Aye5rxebXyThe6EOzYBsOZ7elMohHLvGi6v3v6mKRjPCCrIpNvNYElCWET7d84wFFWvOkjEMBOC1xbSW87GL//HTEk0Ol3b6RRTQOakrqewW88alTIEATuJN+HZJ5OZOd13BAIibJljSNxcachiIYcxYOQgDxeDnRLnLqKCKNlDl/kH8Lyn07Ck699qR2BUQVQZQU7bdKTNgOZR7IvetFBkJyyAmpZuyYfdAsYcJMv+a5taBTrSe6IsquH8w/dgVx6ie9+gBFUEy8HcblK4TJpnfoGISzr5cH44U6Cm50w5n2S8Tg78NaE/vhDjjijG4VUi+fP39SA9N3b5WMj89CaCjV7n+9fSBjf6lOHl2kg9pWNNAAl6V9EQlhExePrMCAlfMAHdiJzxAoGEKda9ZASxRBRMJQBmxRLCTC2245RkX515B+YTP8F+mumzQC2TrhBlI7NLaE96gUoPd/RC0uqEME8zoQk+R/ZLxmufGNPC1b4xXFj2l5z5oUH+DVUM5pn73F0lFw2gAK35VGYYbF/bvTXlg+7bvxV6laGOWK/xguBck/QY4pcsQPzjm1VIyvOdJsNV7+f7vPlVelcfO46awoUh69YOmajvPCCtXg45AHkZvgJfbmEt3gDSNKJtbWv8bcIzL2sLJEhkXZeUVkJNhlgmvg8oOrfM4Lqm5qUVsh9Gq6aQO/oRM4aJgTL4rNm3p0iizOW5Q7JdSlt1+kmxuZbPp8F4eslxkdll8aGbSj6MDHaoMQpODkb+ZJuLqJG97S/hpYvWsk3mOgkouZeF6ng0gZyZ5T+9v84kVhrrtiiID6KOfo1VyNKV9NQWjlpuVjuhncv1i+iXAhTjWo6JqxedHXBf8yWeBeP5O94f2ogqaBXvwCMcUm9GpYQjVIbQeiZ1A/e4EGpYiuoj/Y7WrDtWtqVXTUc5Ssl2s0UeR6ETblQWcQVeLYCtHk/DQ8QvTp8mtiYNlXfc8uYvN6AxHv1JTu7LLg/4qyAjhXYrTj7cXw9uEZ/rHMXRagU35U9nPI5ccoPzWHWl7n7MOi34kQR2lv8IVhgcq2U+xoes1xbqtBhkVG6Z8cZk5DV9Tms+TUAdj8T5skZQ/fSe4SNKul3xzgSDq041DpWDju/KMIisq8exkSUHj/KLhDSGe2DY6ng65pbxaXBp2g5t/IzECCkXD4No028zUgP7dkcFwZKEwKqDlHpDKlhW5G4u3pcIafNB7plWpq+ZbjggnXDqJln6CoSQVU9DFBQqHYBlcZgWHfLsM9N9oR+KtPJJbtGzTeGKfIbfX5D9rZK';const _IH='72c24133cca8babf20762ccc57067db687817d6dd19b38564bf9202a55808dbc';let _src;

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
