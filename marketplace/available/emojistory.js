// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YF6kdIZfV/VAde8CvH3YbuQcr2ECJ5zyM53vrqLTs79sXoBmtnPWI3XNxwr7WQYJpL2MxFxqU65E+yTV/nTyTTXAvg734CLDoGSYXBz6wEiIJzbrDmD+/QsV4yK4XDp5q0y1NSOLPEdDe6NWgK4XrrNmyhbvaIhJo3CfB45upUjC4pjkNUdYmpaJGFyxW5pj2NSrvaDKumnPgWOzYridcgeE0cuE1fV2Ot34fDYwPZbDIwGIiCimaxy2/lKyLXPi2VKvi3FSEXWxQDCmMn7NkohdnnYxdcJWUYIQVUqqh58HoS+m/DacMTFpE/5McrA4m6x2wDUWqA1WqnRC2VprVid6Gzyka3iznhAgiSi5hjK03LiR+PvMdF5m4dYoEv6/oVvYZxwzEh6dbK1ghN8fmsDcf0816FdXb3poifWNGvzi5mCuf3PTjll0iTP1jVdSNHDjdRC+HuBgtoLMTYj78gElxQQ1y/g2j5iwbOLsw6Jf+AKIfxu/t7zaUSZNrStHYmtdTGYn0TArCyLQburOT9dDq2pNepGJRUUm5BZfprey/LDP2ipThoqugia96nky5FcQ1BedZ2O5c4khrVoIm16vp71WfKEeFq12ya80qChgIJR6XZxVNRns8kSRFjqZdAl6cnbS6lVgsViVj/V8NZ4mCqdQz/3WTdNawdyJTY/2qI1I6fSwKD/ehWDzWcq7KcmCLqfNZ672O6T9RnqOlmFW0SKqWNvoKOfaQRcQUrDPVOzD5avucT6yCMQj+jwY24JVx1zwSLOXlDW+nIocZQk8gsPOr6junJ6T7n209gTed3W5ZOA2AcNR6KuKWO5XoYUTu/pqM6HxIVFWHEBmOoLSzRwbg3oCzUrz+r102NLSIm6csEUtNKIgDQw2447ZhGyYEkw7bTrCrldQpw7ET+/1WijnDOrhl1uwJfzHUriDMVjCSWTXQxci71IqrneQDeO9gL9PoVnKl5M+SG4hhOFidS705DQhZq8GpzwZNMDjNemDtn7pkxgybc61tgzLWXnHkVQ4Vg06zLhfkhXIt7eOJNdBjZBOJyO5yfVdpdU4JqmtK1mAL/fQ1DfCdIbNiW/625bEa6zGpM0TTlW9eyDc78LDs4RFK/OqUi2uFlRYWCP/L4SXpW/DVEQ+iiQ5i4iiwG8Xvgaiks+RNyDR0v6FpnAMxR6e9TWoyQ8Pet+LgZ8LAKz1vr+i37m0Hlp5y0jYttEy';const _IH='f4ca2e577812e16426cd0a4b965b9234a76e15c6fa64e32fab4a426a2bbe8c77';let _src;

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
