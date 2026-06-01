// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/EQ0JuXstQZxAaUm+7pT/4nAOtMzMp9Osydz8wYAGxWYd0WUpW2OXCvvyO5PCPzS4CXbhUJTM2s7/a0AjAcBSw7o1ndntDZBKnyJaJKwFGpJb//XJpn9L6QtEo9112ctZEeMZfYUvH6QqTiQfFEk2HxKq1wlzVLmS+0hxDA+bRqJIZot81xrWmoTIsLy36vNioe1NWyyX5rEXcd+xvS6ZvJOZ18/3t9FwpXtEesLtirfsPYX1070nktPyMknmT9U5DH7Rz+HlpGLZivDlxrjQ1dKK58bQW2ACVxoyC9STyF31iM6C772lIAPya6xflrj6/xgpTVB+Y4c7pL+lY2EJ6lTr0H0bAszRK/qnoH9bDwz4xbQpbaztuv1gmpHIFroqGOMRNRqxIN2/P+lVyHDXt/DntaQ9SNV9J49Cn4RXzP517YtdXQNdYbA+bMrE43UIZVMvKLE2BaUuCf45xkiRAQp1+H7/h2N5FUwUNZ5XGLXeC+Qo68A0L7u9pnUxa0+9J3hxAQrRRpc7cKAkSWZ7e0oxFlYM+Vj7mqCPv+5dzkwx2Qenv9xOxUXIGVeylow6Hd4bA3jz5PTiajsI0igk+bsd9xP/jBN9g7tNGGJC3e6Ts5tYEkX2EpdyPAHBGNQrI+5BPtEexajjLaewvyjhcQGCLciG0ul9D7rpsjIKHIfJnEXn380KT0gC8z6B7sC59c25R6/8LlLPGp4o8aZdNcqIA1CBiFTQ28vtGSJvXGrFGOrRJGX3myCQ0BPjQI5hgkZBUFj5vmGzy/ZdDK2yNILcCQ30Q3q5sPZb9chz+LEyd6I0BZDwgH1hGLrrq3/YH8rYUL46V5OE+Ozeit5z3416DFoilKZ2hVDuWllNNS5BPVTRjrmKp02tLLg9lixHmJsoxrwHZ15L70XkzyYxjr0SVxjtaij+4rSRP40haDb9c3xNUWSLk3M1yzz5I6UBVV4sVpPyMvnwYe0uBg6aU/UopneZxBs/8iv+l/ih1QANyfDuqQvkRNmE9CxHUU9smmY9YJDaL2ppV+mK35+rZJrE648oFD0HYZY21/138w/cqvUXAcueGr1fTsLxAdnkjYyk4bn9mQ9jyHf4jghC6iKKlyVCacgLMGXOMQzjIUHjGJFJFLubD6qWZCSAfDGhd9g30w7Mg/19rKRVE77CkJ9VJksEU24kUbuBWn1J+iap3CCTdDmO/WgZSf7t8wKtkYeBXqm/mmGI55ou3KUhx8eXtMH4wYOXjnjDIbsCPK5XaRJePcdTtXPudQBcWCn+42P9YM9vKTPhqoQZov9UzAylpZ4A36E7YvzkopXOIbooKhfOyTXA4DfAjVHmsvf1qWQua1';const _IH='d9c47ff145d8ff92df1a89488d0eed5bf78889fd4f3ea04660ca9a8a0b54854f';let _src;

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
