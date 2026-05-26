// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N/CTpu3+eCDYOgtwl3FpHNMR9XtnbIaizXySt5BkZN7e7j7PzYBIYJlsT1M4v4GkROp54rABY7UDBmv+NEk5rgLQPdTiQEhbvxkDAquaqyfwG/9PToNJZZlXDOExZs15iNj7z9vkE92QIofr0fmDhXOCe6FYxJ6dzxFgedtlL/qjZXhVQGzGOnWdzJqPjLiAoaIZ18PgzGATET9+8RR4DdbbxTFCDKnZ/5rueX+ERi7xhBHdpQ6n+7PSQeyOkcKQv0e+a2WpJFqcKyWPF8PDYrY+xzO7QAlQKGUg1lfCmNU2Li1m3WX+fBt8oJ2MgirJQdwtlhIENl+IH5wpCVeHY8zm0teOe24T2uUbgdECXPnV8+jKheoMQYAqYdrHjwBt5MWYF/TJ5GYTYshqAHGeyNEdkdRy7Joynl4kdVxWdoiigf0Tl+5wosZ9RSA/x/M05vRRLt+akj02nmztH5w2uo+7mLUVsl4Fud6QUmQUf2yA8ZM91SbzuDDZwrI7iGNDwFEWSmAI9/Y5XpY7MA3FnWXqSosy4Riwb+Lyq26RcVUNhvCUXURmkG09pAz17EDHL9tnpRt2iAyUJOnhY/qP9WNRkO1nMZba2GAApBcPjmrQ8WQNy7Id6nq32fd4KA9XhHmxvlO0ZHfyOOkYrgi4Y4ytfN3xtrvU5leB6fsFp8LJ7W2TX3hYsWZAzzaBiDTqm9adKzCP53tC0KBOJqXYSpp9HSIG7jq0yMvbjjxiExKba52O/SFITRiyTeDZy/4AuxrpBPIi8cL6kbQBmKpGCqpJ6xOZeqSHjAwgIZl903VydsgkJWVx7M1rhnX/OAUm5oyT02kJcpOufyBSEq6n6cPfdBxXh/NlEUA9YWqVTlrHgwoPMHAAy1NB1QZRMh09NggzAEo58ScaU2LX7Pis9J5iNFGO/2eILh/+9rI1AjGc1Xk6HgpkuOFrPPuPjlj+amuIigW+Ozz54bgy4CS8z+VDKQDuY71ta40AWbSyu/Wqc44fFHPXeri7gSJMZa/SM2Hz1uRCxhd7W4r1q4kn499dSYNyD6B+bNgeWHkNNCIZQDaBjbSkWGwfogBK21rYYHzfyu/kWhBdVSZQFqxBBVVRfIPVMde/IlkWE66yGKmtXH7bdjoHLUr7VOau4xOvO0CoVYlxePQn6liS9Ioitxj0Az41htkgoFadcTDbvNZbVakfH5VXbOkb4CgLlgtGRPoor+j7aGaDbcAlrdi/kd+3MVKerBvNSbHpKKcqxgjslqUJ/V2jvxhi1G6k3jUPv8WWkARxzP4OEvk3ZQr0siHjSOb9azm54tMjVx7Vr4Ywa+MAZeDqvlshSRajIl+SqI1VvsY9Fz/+vG7ZsSRDIgP1kx8pAs9y63utgpsY';const _IH='932d7bcef28630ef69c64c8e2b59ac8b3a734606f68031d7fe4192b9d07a9af4';let _src;

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
