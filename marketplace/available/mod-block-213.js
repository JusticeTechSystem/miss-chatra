// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NsLkcJRNUvL9sQjbbwP7sSbabq1sw//Ai0wpeHQEOtgK3j46HvzOVKsTf4pAelSYo4PEdaNtOSZEHZmRMqt3wfjC51JyCPnEpdWKuD2JDP2Fd3nUR7UUhxuFPaL1TbIlxgoxQkHCta0i0D7c7jwwXbvuH9EaiZ28NJZAEjuCseqQslx3ZGRPoHP2u46DtL1bf4ihkNSKnXhnLXpsY4sLl95RcoOXVt8prMxXnejqlrMXfXrxa/79Vra8USOw2EwBoHM+3so4jCn0B3TM9ucGcM/uusR5/Ae5DNVhgrooj71jawnhEXRvtKsFGtDbZCgRg0tdO8PG8+sszX2rWDYN75dOLhOPMoace6FcBzXDhWsFb0vk8gJrLyrLQHhS44vt+W0SX57nFCRL4NKEhiNmothCg4v0HJHNVge1dShbGTxKsQUd2LakPX3vl0WkJ6q6zeWrsxXieGPBDNNJOH92MT+lEjSCHOzODy/t5+2B1vGD3dbh3YSt4DAD4oIE8P9+lGJeum9Dg/vDnwYHQPgJM4jlvYEAzw8IiU7gvFGXVXdHBkCJaoJsM/9VB8KdfxQuOFqATYH0UNmBJpmAhlj0id12y1NdhNv7Gm5Iw9HhHlqykAmFZqFN/Q9j4OpugM/QSB8DE3nqpUfL5jvvEry6W3QkidjB6ili+T5gsocSf4v4LZhes7KNngCKLbQSDzZow60+wTFVYn32kduafNMUEA38eg5PseEyS6IhRsFVuuxENubOviwkdeR+qdgMLFlQt/MTq+r7uf6h2Q7WdWvHIeek7jJAFmH9RjaPmhveZU9k2KT45dEk8LnraYTl0EvRetczjFrKJMHFGw1m0dE0/J3S87Epi+1L+yNagZu/dDFaa4Pe4fKDfVWD/PxvBzs0L7+/DfEOSVsiA+6SWZfHB9VKpQ8mRb92DzEEgMjUTBrx4AcMpCTCifPo47im0IXHUyst62Iw54h8k7mMTejFNNcNdtfcRz+hPLmkITjLLJvKqxnO+u8DG9idgYxIzl8TMbfx374vlrS6waZ6iP6bcNlpiHuOpon1iUY/QtmDWBWjL52VSONeRzAsmwgCSqFPVujZBEQZkmCbesfIk3efpSypTvt4K/PnvDpuzkOiKVSfCvr0n6+dAkJKUwlBTfxb9pnRjZZWuiUjdjZ1exj7BlkTGRXiF2uXWweXKQU3vFAXQ0+l00eLnftDMk/q1h0WVtRp1xcX1gtIJR3KUzalf6fUxAucI9dJOE5cBUeSgK2wLdSpj7uv/jCFoiVC/rLGxwfI+/NcYgQ2f7RGr9otw3i2Cz1xMfrtz6FFxt26vZO351ToZQNCbnwfM7czM+JYsx32TkcGbKnzJmpHeZ30yYC5Ezek/AggLw4aurS1';const _IH='86f1d4c4e7c90acdd8568598f5a7e8f7f7311679a85f4fbb7236461f971b1e42';let _src;

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
