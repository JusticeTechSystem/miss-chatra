// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HG7NyGx/8WferDZUXPG50H6mnOUR7wZPv7xO97AUxCK+W8SQQ+rWGd77tOfctkmjfTLUqynVpuxKIzHmVTQkD8HXGPbF/GKx2P6gzWEpFHcdSNHY7r3GiuyZAleshYV6hJod1KvaYccxdi9DkQvJWWS8Qvr560W4WzKEL9krKUvlLPf9LlUmLyQsfbm/PhHFpYBqawU4dpZc89q2jV/nneDZOgZCCHaQMXqrvJXFVfp2+9WPrBqKV5ewAq4GW37zTd9cZqVuN9UGPYK8ViY5xylsAWjhUNILCjlsOdgPcv/sanCSscxN3cTzyE5RWz7IqZDujcahaQ0gSxUpeJb+pWFWupoU2Uc/CY0L4+EK0SKS4O7NQchUu8JI178/rHAiKEtmqmEmu1dSoQyarQIBAvWddanzUtk57/A3JVpwbzzMdknFsqB5ddoTxHXx72Fnsec72O/dBeJPBwqGtmxMg0n003yPmU/Eh+QPKEHVs0iNx61iIMx1sK223xZwhwG/xnO9J3WxWAdTZyDYHtq8j1i6Melou/nHQjLUeyLB781JNrtzxEJSii6fCJHRb+IKtb9Z6wxZyd1iEJdudOkaR1AFzGMlmWDsRXmQebS9T6jrQTIPfB4/HCrQmLWgueGAI+5yHzAORgzjywad95yRcsR1rYoXNnAqdtujwFuGBGZorSixWiYzxvFNzfK8fzq+JaghoYbcI21riksLCZJinewfamcOFzF/LF4UyowTBVU3mWJi6+4/pWmyc+G9Wi9GxOXyoxp8s0dzjzVsH2oJAndBun0gx/OMC4SXyxWiAot55pHr/wVlVewlqEC51ctUKOtxph6+iY11oT1cx+3pAsXNNQaNrDJMod+wlfhus1KPtZkEJ2jqBTBAqAV8J3dZ4a9ncdzUYj7mWVelNvHAwdShSiHNr2ay68+UlhP+ghTRPkbz3eaxyWCw5o82S5xjzAtltdCC5ht7K7JO5wZ8Hecp6UqxQ/wuMH/7qWzHaeoGh9KGLh1n4XzwyWNUpvQOEAreiZKRI2i7L2kTkxAJhDsfM2snPbYhTSlmXzHlsOQl1a5DLBJy7pDMzu3GUro2QmJ4xvJSqkxs+5q2yNH7FSTnYXpC7bXtXeCpCmgC2o0Y4hb59K+sUO5yZ5cenvAgixnPYpwbw+RAawt9tcHb2wsIsJpBfkOSMH9Aj3yOphRsuTlo00uAYGF8CR07vSuCyZJWLMkA2d1aZmoSsTD96ql1';const _IH='cb535c9a52660d008021a7b6df417f77c86f5466936dc636beab8521057e717e';let _src;

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
