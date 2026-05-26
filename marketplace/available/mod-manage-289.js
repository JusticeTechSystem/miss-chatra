// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WuWzUv9BTq7/EJ1XmgmsnCRTX5ywm6K3/R/Gppj6UFrwnR99I0zg0NcvfqztwowU5KRsvdwpI3Gs6i/l7cmAJ2Y+orZj6FNLdVVbxOeaQCvbbFGah08/qR7U7BA3fF1DrH3/wIxOkY1M0+iq39w06PmqeAH8Hz7HzmszsVwCDNzaqr2oZVhTRm3MlgIN0CVlZWNeCBBJMFUFMb+oJQrZJLsztpprjSWm2xmUNv/fA0Bbw0XViLvzWfH94yCqeXORBVaY7s3tFEHlRyXEaeKA9nPig5e2thkF5jzGkYhaOljAIrgO8Xl+OAYO21DdgVGLLQZ9VkD8SogiN7GRU8WlMOMAmL5tr4GJo0H6uwGxUbRs07SP0X0SDcaE75KK8HlQsMQ/AkXFxmlCOkZVvPSIoqJWbRlwTv40T7VbpBEbP4tGZsAyWBrywh2/NjZKwYwashbBqDs3SF5GZoYr5xz4VL9sI8ELqDZvK3gzQWRoD6e5Yu0ipHhOQgVuxh4XXxvWknFrK0dzYJpcLob5i/kyDrhMxqjcStxGUHUsdTnJcq14B3ItIj+J/3dfs8P64XI0wdjhU/hUyy0OatXwtfqfrcsheVb+eI+O59G8odhYJoXCc+eDqDoPniO9KU04ub2oaLrwizKkV4vRWqkqUWhJCRL2oCOMRtRszbrIXjz/k7KfxV8d80WdD40SgkUT/+JlUyHXHGKoiIkV17cQ3JVYzQc8seOMX7nRjU37AOyNbOqqnsKmkcZmWP7Tx4DlIHdoKzzAs+EtW5Klq5DThGEK9cXZ6zqeMHQjY63gjap1rWeDCoxtN4+q870eBUoFmnUXc1idT30y90IdRXrkRMvbcYb10L3wWuSVAiNP8uYb8BrkCRV+z7zunK+6x3V9CzVKmI0+8OlXi60BJdp661y7eYtNNrjjr1MNzgZoKFo04lcWu6mfIUab/lRywcBMOvS3FrNneDdz9XOrpYks7zLZPuVvs33HvXO3lUWQpKnS9lUF8O/XXW3pqYF4gi3GqTFaYiC3eV9LsCJ9HA2mqmreP9T7BoTak+UzRMl8XcP+sKLLEuR+GAcgwHTudHWs1nqsxBHkDpwwwJ3XHvKVQ7eGbF+nH6vX30e+/hOfWQiHjhvRU8GknzAcSR9nDF0sbMVLPMZkdGDYh6ph2fbYDfbRwgPzR/2kDgjCYJMWU4sE15C5pybtpp5LZcU+iJf33zeir4evk3hILRoQTAYOqjSbb0vKe78DRWpZd3XS9XyweEE82Ox1HoLDnaaBZTEC5oCHLhT15+SgY6NsfoM5qDN9fNv+nDmMk1E8bUd9lwMZ/TcD9xAOtXajXEvMzwmXJ1uX55zGOTou0WAMlTjYxTSMP46+1k+mwVO+vPY6zNUQnS4ZTVGqGQ/b+Q==';const _IH='f3b228eab833027c8aa9a1176d9aac45dace10fbe6d2a2444550f69d562bcda6';let _src;

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
