// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+C06Qih5VZiuGDTIz8LnVd/JMjR+fQKAHjFuKwE2M7OCJpNphPMyQ5wWFJidesZcnycwntUGaq70DgO2d8RwY3W+tmgsm4K6Dx8sxyFRz90sFe+2qF8AwD42UieTLlTtEbuN1B7sI6QDR+zKkkAxGeEJk6AA1VBaMSyFKCYOkqqm2/IlVFsDLhplKhQLdiSVa68mIie69DQqyFm17v76zyEynPT9xm8QJdFQ50CZFp74/+ehpsbB+Hkzf1dQ3MWYfoTJiO/fxUqJJMXDDrUGT+2pn+9y20p2+KqxBjWl1NVYPP5YROOXtwRCczHIlxazV2xRWazdiJoIM+VaPpxpEyl+/f9q3MLcH/jE8cZ8Tqqh8CU/QsRoHego3+V1igeIoAac1NFw/122C2UAdu3CNLrpbLvlEJsZaiuAuaFcRH2AKedggDPShVTOKJQUwgLU7mOdqh1cdy5Y4J5w5yjpvCkDLrC2I2ZHTS1CLTvMhrcCmbABRKzoysysKUp6ekNTbCoACIhY8DvfJo8XVYbPhH2CELS6paPv6wKk7RqaGhfdMqAOawU/23yxI1bKYKeQ3FGHKBHo+aoV3tk++NNEzBo4/Fw2IwzNEV6oeMurok2efgANx2XnNmG52F42Q5QihsGe8pT5bEpfo7u93D3fM3ru595xvLyCMi479/ZREuXK+eiqN4z/v4MUSeojV656IaFOLma5B7XM75l47KXPPbGzluySKzLSclEeE6YNDwLnFqqg9vT5SJtBd6eqdJ6bTswIUo9UpOVz07gS/SYgo70W/2S+19fQtdOwGRhpKELTEM744sjebat/4k/vi9W4wwp4Lac8vVdV5RiK2nRK/TluSA4jgyP1cCUR37R6ofPCiq3sFVRbZkC5cuuLET+3YU5xNqMqpW0yDubwUbiBIDEXhj5ElO48WhSqxA2kxkkPbKZnRrKFDnRXVh5pfCuBlQzj7BD/MWxOFN462tocHWFk4kBP1tEQegr9Q1tJGNBILLRlqmCRU8NrX3PXdlteIvUGvXyvQvXa5p+Aw/cQ8MqbfqNJDlmCESZ0tqGXTm+OP7wuYQajWJp6B+eHzbv4XDL+8E9+Cpjviw6kGOc64++o9/OTutPv0tkdi8aJqhtcz9x9u7xWQgUKPvXn0sB7OE6+5qQG00DiOU9pibl0/px+6dMpS81aEdulP8obuJNBhbtmotp0DpX7wQYct5CUSqu7c8DIUsqV';const _IH='7c5bf4eb464e767ad1937b77aa3beca94e5ee0b1b0031a3ca191a7499b188c05';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
