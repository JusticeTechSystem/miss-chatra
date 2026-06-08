// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nTYQZ6G46u9mStwKFjKLs4ZiggEsGrJl++OQL7YrEYuD5/itkqh+uFuDRAK/WnJkk0ml8t9oBbrEuqCtgkgkHr6dIA8XDhblU1KZGtFDAHWfJWOA3JiAUZGQllzIsFD0wy30TxnQL5wWNWaxnA9LtV05Vbeave8Ncjf5KU0NkJwseERYxHpYUVPNLbXTf7KHwBbPnNAS8X4LaRAFZjMvsZZo2p/Ifv7DJDjgqKFs9o8KmIp6qdYm2mZxKRb8hJj744/YfsR1hN4ERX7lsYg2gi3Oz/FJcCp2oitGT6SlzU9hqRHcecVXeagmaPxMuzLX+EV6Bw+iNx6YDy1+hxHyN3gJ2Kt5rHt8A6tDKx/8G9Z8Xlmqu/3KZaZUuVXOuJ3eIRrBhzFVrxxCAhNeDTEl9+2CGmunwgaveZpfDlU77rlf728rfGnayg21BVa6+auw34Fd/ju3IgJI0yBaGiW1vQ3l85obeDZ39HmsmbCnGDCp801XbMpQ70lWDTbt6FMa8jXnD4mIekExfxcufOindXXsA8d94B/eP3FJ+7M90IITwy7p1xb63qLG2HHq5IXN4DA3DQ5r58WZ7UaJzS/am10wAbvefVaTUaHMZ0ZCRNqOvSj4KqCyu4BYwq4NBmCvgTXsWtFO3jDDl/ZU2F10doWj73KUv75dDY9hbuH8RseP+Xnctm9qPKLsM0H80lfqBmehwHAmqp110KbqrtTO1lQRHMVbLEqIYevnVEboRaJQHrGY36LQzBzF8dPA8lSK4mzLZvhICGIFNa1cgpwhw441TceOSSZEUGM4dkkGrRq1rMHulCZynLBo2kweb3Uu42WXcI3ipXouIu69na9ysw11ahcAPJL7p9iDWBiD1Gi341VThCJ8PAx0mBJElobyxlFoSC7P9sfVhspTLMelgSDjrKRMTKjCfbOM0nhEmuBFGMirZMQUSkMPuMKeR5JxiFHQX34A0XztJ0DU/xFueGn3YSZIimPQstXKhtufXCB6pCa3DzeBbUsHJK6To5c5vFbNsEseZsHxavwgli+G7aU9Sm0QqrmJjdZzXCo5+3SnT3l9/FUs5n2/jHo2gaWXotocUUdARLmPuj3PwPSLJiuLvbIp9WJxQJEWevTu/Wae3EOhQ9R1o4hdfFoVzDHDPHyJWGgaYpul5AhvJ6rUSdqJahCZ0/5AvxnT1pVTwSblIdvYnJblP9TQh6ky9Tk+3smjX94xh0WnnSTeSmV/SSo=';const _IH='3c15826ab9c082e78c0f8265bb1349d46cd2468266a745117afcce9b77fdea18';let _src;

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
