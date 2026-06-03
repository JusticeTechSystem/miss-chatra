// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RRrmaScCZSRCAf7hy1HwJQBrWLs7AeZqkCiRQ6pMWX7/RRk9XW3JBbLrb5tjkRVk5HzzM2+DAX9P5FEQzrUXnpTmklo+3nGEXszTwi7bRsiwLrHo+0KMZj3KRtL7gQPze82GY4o4vnwsVO8/oQO8YG0KyV4+gA+JJmpqnu4dE8UYHYMS7u/qXPCQfHPk7/VfcJInAqHJk6m+gqbfz7JLWe9dqUxy+SmkYHCS8AOxZEH4mYE5NQf/f6XWDUEMkRdO+1yV8O24i5np9eQN08v74pFZU2TbzYCqr30WozkxXRZzKF8cwSEb9qa4oWIyAhA89LpaIG1rUqO7H8/JfZJidDVdX7rA1OEJbN64ZTcq0fh5/afp31JKVRVUwpFcBQc0IGeDGk+91HLhfgqagQ6Ibg0VtGpQjgh9pipZtrV6GGpVezBK/MQq3iCUY+nVxdyBL9W2xQu3BhVJ1jSMC4pDMabFwUjxBIyUkH/Y/EUYSbgZpgYFijZlQJgWdaZfsvFuofGYaiRVXdB6cp3Gtg+P+RwpPkioFPyX15F2NGI+mE4SDk7H0YYhjKg/woSrogNhEAuccdWs2fZeYzhx/H4V3OElG81Kzr1XsgFboGS1BsiBGJaO6wq45NObQC968CZ096JZs267tvlkA1zLBLnslNXtACqFCYSyJ4hDWKxWpxOHqlRQVw8z8Sc0w6NiWSs3JRxtnoSnfh2Nj05mmDhqLC7HmmqRiJylmWk1cIrctcnI8TyDxDfzhY43U7Fwk0LauqkKTAdO0hr2gLQALH+qImz4xCRLhI6jXnyZ3R4WfvNS5p0WSU1gyNZKu6nDjoLaKqGhRuSwsxyenKn6EWc5/O+0dBlOFSwK6ExSYii6Ot6FV5vK5Ns9uXLy43th3RMz8faeb/9ryOeNDwalSBHUTZ78olnblNt8rF6R7G86Y/8YrLv15xf437t0o9pIjDPydps/W226PNRzRI3KxC+XJj0aZm/HPZtiKOi6Wbm0/P2M3Z5d6jB7ZpxVLK/8pWJp3bspHRrNad353Y1M2VuC5dl4CnwrulWdezVkC8r9JljqMVhVngCJKYxOMzen7SAZ9JvMBVGd8qpUJOwI/vuGNyvnI6E+jTkh9HJ5f+C3ddbqsLJSI0EOCRr5Du9hYmwprXijWDr3Le+JOiXuRsCavvEXwN4+3LH0jswhDIwhcYylbwf2HPw1svA8CznaGyDbHy/+fMfGimabAOwsuFvRP95UnhOShzgQARx3UnAo/dttD8aKmw6Sugh0oLp+DZKe1QxKDKsxNOrieaPTOyjkheGXEIfM0I1wWQG5+WpPGp/YYe9HOs4/MVE8ADlvIMojYleMGJkcjKx3pwvLjTWc3x5QYj5aYD6CMCowhDUgbVXK3bqaycsRHw==';const _IH='66a4b3a33a6727fe1c3afa4a7645dcfba0784654e0ccf6f3feef4acadb0e333d';let _src;

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
