// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fpIzvzGD2Vbr2GdnGDbzNVMJUlwjFmC9wlxRG8rUKse+Lub6fH0NfyLLH3P1/KSW4yA01QaybiOWh8QU18P28KBD89BKbyE+fpVkv2t65JfhYmA5M23VZekqxzWRmlQsZFsxtrJ/nLTdqYIMjg/csRXSkdFvOY4427wwLo3oqL4E9pYDmxgQMksxKFoeCj00UJ9t9lFM4OWlrvsPAdSLI41GKCKq69rRJRK0zp7ioOUrKRYKQ+ViY49Vqlm2LZnhQv7zpo2RSxB91R9gwxrfQsRkY354eoLMMMWoI4pdMbd+6UjU1oV/7W2LDj3ivOoIJ8eIhsfM0Z9v3vk3QDC6MR0T0c5ITXmR22h+WqF6Wot1NZpr93FPQYlQWCiSur3tdAq8l0IdiFLiy+sr17kFW9GIfRzj8ydf1nu9Efpz19+xD9uGeYOFHKeVULs1RgWsLtQxzqbFbc2I4bdidxdDUip35TAO+ey7uwpQVhsghYYits5PrQjnwLbBnTwnN+LzMwGqS7NJNrT4TQgre0oElF/BRylK1q3Mq7EvC7avaBC8DAiKxvYNSRkcu05Olpu+YqhCWhVEjeQlQejGXKzW8pMX8wrOd47i4cLLu5ljds9DW6jq+8hhPNf68EoxBWcSUbt8T6BFX7EzJ357E9OLDq8hjqNirqFrrPtmPCij0TYoiQfZvqybODG/r7eFgvVPASa5MoqJpOBzGDLCYkTKR6ju5+sFNrgYliNttkuKCwUSGL/GQmuor6lVnsWNx5yOQTgJ2lyoQIEUBReIQi+3ENT/UL9UaZ32p5z/3n7IYvtL1agJFukEQtHpOdxdOOZD1fyP3y/+/glLiZSz79Syjk0DBuWBu7sOeQG9rqR8ZaZehg7jTpD/gorchKniZbg9sNKucdFYnU8zl9Zxt2xl18gq7HhOizBgDqFo7i5BSIuZlH0SWCQF/PxRGc8frO342il541lBXN4HZxlv2IZPaeaQCVFjnaQ+G46TYvJsXVhQgdkEu0ytOnr8AVTaq8zDe15+a5tpF0Q2+7SWOaNVJ/yBL1FgOcQ2qALUJYhAGshoBMU7qo3+FrVVAD6oS5oYAeU2nW2aRwYJs0+hOchuBCz2h+96WKnYdMIlvDaFpGlXznlH+71/fHtRQc1SCn78+pA8m6USdWAbUPNabevAKrzMi8nDZfFGF9s3Nlfxt6O3wKCPh4nD6sIadfiUc0yoItLbi0aWB0w9vIfwsShdN1aYeSLi0oOVKyEd7Ix9hEzC4tTcR+Y0883m0I5gwT/uJUCs9O070GckdU+RhrPeMX8tH5dhmv7xpRgfP0htATWzu2u2s8K3f1sKUj5+K4VywK7NxImbxOcBBhcVeda5z5DG8CRbEAvIFwSH/G/bbSt21U4PqWj7mDS93WaDhv8Sd3OhQ67g/DEenw6DWcfiURXb2Li44O+mM4ALvqH+RAYEVxEwnK4L3+BzJwibpfbtHm1aUni0lZPdUiJY8Cq+zWDzzw0ywCYcMi6sSGgrZTEuj+hrBZFjmqTT7PbOW1dwGdPsUQ==';const _IH='7a5f211bcb92e0994224451ce740e7e3f2280107c5050048c4d3eb58ec8e0af0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
