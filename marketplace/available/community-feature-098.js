// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q5edKHgFMrPeLGKMi06ioR/KVsAj02x9a7H5JFquUzz4vEHghGkEfPRQMmhQakaVEgLrrdTlaDYUZZ5RYDDZ5e8KHKirhKNSr0T1YLctkTmg8pJ+4CHghCnhd0DcdxQ1My5JLe/ahXF27BZdDHKj2lCGxoBW5IA6IwKiRYxWfqWNfsuLKZjruWgZmhYoXdg8jhXBbZB7XmpSux+a2yD7t/oMr+SmHs+lXnm0QP/U+LDzuZtKbU2L4DoC6PuZBqS9rKz+Wg5pNPCd9zFVckWMdsoDs5iUd3lLh+MIs1ks1j5eefqAYwf7flZ9nxBb2usZesVC8WP1gi25mzS7XpWlViWHO2l9ORP2YzRRi7qohjoxylaSrap5PVfZpwmdPBNu+NbVwe37AxQnAINxKzBDc95GQSMq34llyKn1rWK99cdXQ40XoxJ2tZ/1dle3+oPoH/mveUoDZCGi87CafkIPHBbADrUm6hNAJWZkW9zjCNhGnhnNayGSc0oiaVblTazFWeZrT0q2CAYdFUWGiP/3CT3HtLzd8CIyXyaBHfZl5GDegPfBzFFE03qDTQPpo8asalEfhIMlrRkIRnb3NrhdDKt2Vy+568AjibDALu4GRjoqq0P+jpCijQUzC6/gJfBUe8zu9WCnMd1emQn/7smCMx/idJsilXuNqzMR0Di/8lUu5MrF+bluX+iAnHERkn+c27t5c1NL35HK4BFmxjV/PeRjVECHKD3Bzw==';const _IH='c218c9b776922eee2c7d0d9ccb62c0d6038b95acb08104a4e26bb5e5b48d49bd';let _src;

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
