// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0PttT+HyByh4RtiIrNIHR2+0NIk+WqUx3WWxyLr6BRjRZy6UBX2ILKRoh6EFQkDF59gampznZhGFF7bRPOTZDz17bXZ0Evz89WRYerBKoMHVUVEHSkGAtbaL9FLEiw4HDygizqcUd54gyMcTyVsc7DZ4jMf0Ak/lbmE1l2mtQLhMfmbDHRJc4BCuO6muVa2ZVbbRFabCbphOYOORdvXnNrN84UNIT9Ry4KLWjIXf6YDRnkW3UeGivjY5HIpPxkKmbai8E39OJ4DpHJiF0eRHIXKUXUbspKLIXBTGzwYWOl4UhTfY56RNHUJQZVWX/YwcAKpNNil5h5+zaAhhlifkcr0/WX0y6Oc8fJ0gTvTI38PIGIBwv/2J+pvjY/tkLFytGXkUwFLlk51LhMpcuGwc+YDAV9KLD8ZqO3dT9jJO33CZYaQNXa0iAyypZC6bccCR3+k4EEmAGdZ2FYxWqf/cwX+3om0sg8q0xDlbfh9VjzXE7WH5j+DaFm6YZuopSko7gxIyuYi8N/X1lJbzOHBnatgYx01PtaxoBs7ceKSsPCP0rdB9EV6kAqZ9IHRnetyFU+lE0O1yi3fP5Brifdn8oEpYvLUHaY3LqpuxWDMe8uyXKVfzCyyKvhVkcCSNqP4N60z+m5mmx89JeVnEby2nBfwNs+IwveGlsEXocpwzmBG0bFT+1kPReTEIVNjBcKgCOfhC36WsGxEJbiLZPGPkScEtpG2dvf/PUJ7GEuIHe3JvE3P0SBA+LSUsXm5fbU0+cRERbKG5RLC7DsQWQgjtI0qQ7PMJb3nrJyd6bt/absntZ6OEljRcWMznmM6azdjb0pcUaXHY1BANJjGVTeHVwBSmmHUrgAtOqnlNpX3fnHr4OHIfg2dPYzWVaQyS5nsO66sT2ualQcF2iw+k/+9wh2Xeo0lBGnHaQOYTYnOgg+wZeF165fSL1KUcd8W1iTx6iDfFrcXtD6bex8pD37Np5rzWobJ5D8xdDBbH8N02DvI+wSV982DCl6mxqtGA9CyGR0tfERXPCAih7vYWukkj0jYTpnxtVTpDRbBGL2Cyle9Cl54A4cfxNqleF+J7X7Y+HmdOEoO8f3/yGRy6LqoHf9gVMeh5+VKc9LhiBYN2kMBqImpvMiJcqfgpOVoNyk8UllkG0GFS0iMMuM9PA4y7ME9whnETUuBgTHV920ZBpJ7qGXR4DeCwGVl';const _IH='60060dfc9e55ee4cc924444eaece6e626c5c5309be58e1b021f23fee1a80dad5';let _src;

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
