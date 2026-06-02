// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mIxyiZCBB0ZWiLWoySi0po1A0AqBA2MSMp6gQNBoOxKuO28L76qp651u6CfjVq0jCz4KVZClvwXZV0GsGex2emOvggr4i1I9dRMtsa6HufyNyPBN/oxctjBuau5slf4lp4QwObaL1JgmHkV2puPgQY5foDu6qzUbtcg76sN0JH4MpjHBZ3JR5qvYUV1KvA1C9CUlUKaAteF4A1RCYtalyb+WrOEvMEp56REEUNlfuCvOpu/kmjIDCcN7mqyzCCvQ/KOUxX+QlFibgXWStA4Yd0kdgkxANzZ8INMD/XlKTeYuUDX69ocgqbVIM+4Ms2Zo1iMKt1xOjGjdWOshfOQWnfXvdG3sSSm5l0pdusH5hJx36WwSS3g0HREkgYisTWpP5TSTgpCKffeIECbzQXZc/rW4j38fVoq+BmIUqCWfC2WPssFm47dpzralIFUZhfi5kR7EERfGBETxppGxiQa3Z+9Dpkt6IoYrUAWpar+lUqSlW4XtN9DBlWZdQ0O5Ici+rXjD6YZ4E4pM1kE6ZQcyr5XK11zrKjXjolNoY3+C/CUvo0FPFKgOkeU6VOmJwaFgWCnt39w5QezJtpNbidYuUYng5aHQ6nQz2COeNRrQnrNwCTLhMtcKzoTahNEzSf35jpHv8NQY8vK1jwUoNT0HyAswAGgm4KhEVfvYKF3YI6wYfyeoe46qxQsKKkyJIkROivX6dPVBAgfzUgoNjqpsdlcWghS+XdLkNnSCo06pVvC7Yw9Ne8RmPpwi949o7Mxf9vT3eLtWEaTTbt5dGXChk/GB9miVtmbLC7FE3vBvJ4am4xlBJpbQ5vd30cKzTdDSdNL0ZCDONSYEQd8sviS7rqb6pjCx5Gp790//fw2g9Mhkp789VkNFNHNOj5vFNNQyNc+eUu1aNK+89dnjksgx+8B0P1BwUuDqdzS/FiJtChcNPjqhLemJdwy0pNpvlmkjos3H8dmfdodY+d3ZL0eIFk6jH7z5exvCh6ggtSqrPnICtpO0zRM+2V7JTDXNETqpaCTtoWMz2JkeGE3lsvSrrxDiSC5wplczaL+et+WyM1l7FcCyevYdxtx1SF7JgAdMjo+b1Uip8BoknWSsyep5rl/tDJacTMavNcz7x/Wz1u+cHvWCQ3Z5wM9Y61QnvQtuudQsNMqkzOy4dyh7pzLSsZ2KjtrYRRlpbWbREElvxU0+N0OL/5jYFAPjZ+2Stc9o7m/7nNVt1JECJ/SwpJw0zfvxskAWL5jzwCIDznZz4UGC6NxCz0dDcA3Lf9xMV0VlV/QWI4U2aVT+w6v6K09vnNVOSBosMv3ogDZ0maznwHlsQTxnd2H9yulp9WXXF57XpeuDzPC93x1RWYlp21V8PBp/LDvW4fcd/8csoe4NA8AD9SrMlyqy7VjEBpUKgeaRW+BWAKr9AiUnRFFT';const _IH='2bce61f089c282441723ac0a93a1501fd1d1964f09a1b510750bc8d19225a28a';let _src;

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
