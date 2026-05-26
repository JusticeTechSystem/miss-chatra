// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='723GLSDETq731RBOaVcrvG4QmKaBx839gI/Hp6Fze9LqVmnKWAncugSTGsqSCDrceim/uXgZe76XPwi9GNA/FwqujMk6TDWEmAbTAeB68fbqKEODTadwKXhnqGpJ4zjiXEX2jTXJLxZSRNQNk1X4Mg4o0AEgfbUJ5NvE+MOtARQ5fJeJdA8XrESciLSl/RCZzW1yD7VIJ8PMraYOwkazShQfLFtSUpf9EJiVFr5m60GQN0LOnnxmTrnwi5oKuWmy9rShQ4wz0QoT9DMyuOzrPr0g54xHYG4CQzXqB1CBkn7OSHF4gJhRvgPdPaX1A5SauZaXjERHixJcoOnPDxy38AUQzg4hXvMb3Up1iK+kHBsvn6h9rMbYzVDj3aMXN+ExH5mzRyUzGZEqSZAhg27vSqu+IkFR+GR5KElTlU+sYnCx50Ns4lmvaGpg7jREJxtvNb/EG+0x9Eh1FGVRjBN0kjgZG2k1NKcphrQ/p13gJUSOkUPAEXqMUI0ToDdjdR5+ey/66qCBHAczvNpVktm7wSg2kcsBNSTP1MlRflxL/waXVbg+eLcb7GgIq+4Baf2jzTdUujvv1hVyVBaeVrcKlnn9G+JEw1SCx7d8uwARnmlX0sgP0po+0PHS5frsI263hlIUQodkJ07QgokiECu9kwIhCQG1x3yv/dWdkuXgoWqzYz7WykdwWv2d4ELPq4EOJ0b65jQFbqZt8G4gIeraLCaMLqzEXJV/Syt0F+X5VuXVCKfC4I/2s/WFLti9xRKn4ofFiwXd0fGVJTwS2cRKrJ8XqZ2x+KevgGJevhyeYMwpSAifx3aqsmGDJjDWQRWck1VMKuNJRn4swtKP6g2OdCvpTD14djeh2bxTn85Bas4b7XmBKbHb1Us8+BcUAwH2ioaHKLUATTvoTt8YdJClQzK8VgSx5tpAaOzOmudl8d7jy14WIH+4XifKB8klNd1jDuEFA1zoSHhe5gjVb534lXU0/Sh6RGui0VSfIT2vMQzbATqFX5fjCY5jy21dD9NVJgyuBYEvyftZlCug2Md++Kn5Q/DDwPyDgYF72oOfMb9pyB+q6SAhDOf3/RoOkLoSJGHcqd+TCfU5bebySRws0PaVgx5VLUiUPyhU0+w8lr3nHom+SRf1ICDPNTZ8p9S2Ls0aUS8jl+N0ZD279U/geDgJs8QOGbRheQOFDQogYWCEorQS/xEVMYbejc9u/L7S7g19UrjTZpOIrDpcFjGfXfwo05j9jKghhFuMdav1KJ3KqYCsaDm8SiLCyBik1kJbLjT92ubVhwPuvm9webAsVidegI/BAIylVSlfW7RDa0z0tOgXxKfDxB3E1hNB6SAVYrjdBQW/MNH0CjWqqO60T6+Y4n4=';const _IH='3748d5566eae691b7cd61eb5366b19cb1664b0b3a286690ba3531e3efa8338f3';let _src;

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
