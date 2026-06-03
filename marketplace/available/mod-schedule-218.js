// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XcE736sgEwWQMsWYfNp+6Vanisp6A5x9KRTtbJpJI279t0nuwgzry8SvkvzniVe7PTh6G8Nw3pOaYCozChjSTX4+ji1xk1hzCKmZIyoc5UOM6zuLp209960Um9CCSfUe2t44wkAlZrW3J3ad027p7xI1aQRCtxPA/KRc+slLHGqrSCB2TqN3BvF29lQOELF9uh7a/r3MJ1lzjG/Vp59f49gO1nPrK0hlbpL31NMGC9cqMigFmo17PAhE7mfK7e3Z1dbWIFg7v3VUBNIvltHvM0UTHGbrBBBLaprv8MLtH1b20FrfUnr7/42IF6a0wfYiyEKnwTFX/LvswiPmhl+WuEzHT6H5jt976QCUkTv5pgbZ5bG4S10vZDNBb9vwHKkhX6jpu7rLNKKHPLwUBTCsPfCwksYeaGmH0EOrywr3rF3pqpQxFZogrsBdmi6Yna/BiLL0WGjYOM73wsJpB6itJMMg9srVA32SV49Dgo5af4mSfVU38aqMXb1uyijSgoFXUMdznhGTNBPxE3XdMNQ/phTov7mlRNx5PbtNQTSTdQttaCKwPKpEAqaUN4D12fxEEHCt8aPDqKwNoHZI6+STsJhWUmQfO6ngw9IBoOd+6/6eH0iNdjFrETKwQR7YBbhO9ffzy5F1ivTh6GfR4XZsAUnDr7I/0I5kYrq9UOtfnqBhIwqsz4QaspeGNBHHp/ALvvKLh3tEQ4oCY9uNfdhloGGAmbd/OdOhVAUa3ICY/6eHJD0830sPpbW5RAEGW1+VK+FyIUbqK9rWuerEPxHhbnwb8BFplkMAoC25FLS8WOYtWx+sL2RLcYAwKUaPO4zo5rChgVXDpiZViKFIZguNKkQGL9MItxBmCkEbk4JVe/I/72SCSVNTXtHAFRR/p3IDKcpsTq0fyCRkys2fOyg1hnMgVt6j2g/XHd6eEYS9MvFtDyx7qrPczHfhsLyVqwGVkEqK3K2U6R7IXRrJRNpogQVHUxAOnJH7JMfICpJ10FJxxrHauKdEhgeUJr7601ETLlIJd/ua8CjiRVl6Xn5Lq13OF7a5JsvErmfnrDActdJxuILXH9DW+zVjdTRqTGvo2ReCv1S3AX1rI70GdYHLN5iCP5LT2OFEDqIjVDEM5MPlumQd6tWE1axWYGcOuAlyh5/sbwAWM2rbCdz6nYKgEsjDr4uoJjXH59w6MEJ+rvdPLlLV9bMnnthJ7NcibNTDIjS8Fy2lG9VnZwNnmiUqK0qSvZoa3uFau0pjLMBLgZ/e7NmFJK3aJdL5drHlhhu7RdqMoMzo35KFJI5Vkp0CAsNEpciJAIbJ83P2MiJB6YHhEuzVQHcCcdVEx++yJjQ5S5tCTrYi29WeeLeS/WE4RNKhiySbq+B9efxYVM4qr2L8MCC/VzPWGbRIzPbmyHu+9YJJJjJugI4im6Bl';const _IH='c7c71156ee8cda0b7bad92b2d533610712c969848120ed165604636e94288d07';let _src;

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
