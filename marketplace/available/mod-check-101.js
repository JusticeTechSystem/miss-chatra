// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='scb8t8RFMwCTwbnTbWTl5QUk6lW/nAAbn4Qj3BhirloiYcFEPGGNRTguaRjwTdTCcZiIc5KpbKVea0gPrWjdEaDRbECoQ837KDEekCjhmPV0gEnxSTpde6WtsutGYkg2jz2xHLbkTCrZ1w5nk3MxBIGD5v/HLzuEKjXrgOZpFBc6scDaTNgYd91x1SxRLf3Hr/qUEU3rKLPWSnWeI7kVhHKy+t+cuQHFjGjyeol48l16maiS0sUQFIRw607cq00Py2bU9zYK1Uws2HoJj4FX82fotmzeja2syYfcs2OL0paNlPbZVUc0lGbwkGOyg09NOmiUmTYo/SVXA/wfH9cfU9v72+8derRsPU8hDukd/RZuxA3nw7tgDz699xQ9nBdWZ8kdXShoLTQsgSQPX9R7Sm5uBvI9cy2YYRIKrHfKL1WGCadAdFnu1MEHugBLRTz2gqd894hZwSzNArXhMRZ72I7XhOfLLU2nMESUsJJ+POxdJF0elZqs9kxSVVerwMWUeiDX5jea3s8c6OJZ+Bq7cEXrio3aqwz/xXFKrvLE0PGip4wSs3VryCr4vYRw2U7+ZGR1UlZBr4ksZfY6W/X6m1B8IjF/Bn0dikMiBhNS6VcRqbFIUY/jKw+I9zjlSGXEOtsnsTPxBnw5h4CWNqc7nY7b8/Fd1kPmYwn7PVVbKrNWlctygmLle1iyKeFqLK/xokVLiWmVMUbWu7LsSyjmuiuVr1boqw97CNFlk+ObDIhHJY+XTBxP+Q1Ep6JD9WJ2foI4DyMcX+Tpw46r/0pQ6WjbC+TPL51ARuw3hYYoVgOz1HTE/vFl3EgQH6hMcGWnFzF2M2OnggUOKGY0YC4InsEH76VBBmoffiS/5vuVBZ/W7tPtPF1Uclwii648Vvcq67gtZHiE3ZmTxcJjvGqv6ZyZm21ifDxTHDOp/X3pmjlkdWZGh12fI1cD9lISpaSMtvE6m/9/IJto1JXM1387Jgg8NFPEi+W4KHvFag4Wn7OFHsVtdr5BwqRRjK+WFhQ6LGJhUEGvY1pa0CthS/d1WkIhYHVgGnMC0jfP+d20s9Yxp5zoUErArPcbTLjRHMr1VxQ8Wd4xnIKk4bxegYejsZxPnrF+7HSgwUUVNCtA7NondDSkMZClyTw45kQ0DEexTADLDH+aPW8Oqp631zux52fX/FXmedeiCsNAPsxwxZFCdPdt6ZY8SxV/zGs4OKOi8kb0ibZoyvHgBKVRjKNvr9hWnKagzZDJ4T2wUqfBtqQTCnP1+FHKbWPC86WMyF13PAQfbQtiPQpHo2N61g77y0c7NHakF2JXWmjfGmdbNAxx4co4BCiEZDFVt9Rq5S6S6R3UJ2wImXF/avmXxFpQb04zfBnQ/G/+W31BbeO9';const _IH='e987c70b80bf05a7a580d4a87eefb4c1ec30602684dde15ce32227914899802e';let _src;

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
