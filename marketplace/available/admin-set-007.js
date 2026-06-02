// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DOfIelByn3l/JnKpHQJcbgygL38U6cArqXLR2tRbIBYHXZNyMon7hBzD6PBqKIZtl0kVKeA+3v5t3ss9AGT1eZDbFueS9G2MWes8UIcCMtGdBUjiGO1gsGTl3/JROyOusr77plhUj0UOSTR3MXqq16AZx20Qy+aEZseBmY1AkyajPubyKvrvF0zIuh/6arMMkNOPuGx7OC+wJ7AS0CABnQRaFewsVmRezfB7xzDj7ypsp6FQt9T1uyFRIYZE2+WOnnGNPsVA+YWj8EcqQ5dUnYlMd9aqWmdmNKGDXrmSQbpiiUfgARLI/jQE2rQsPEhMIjKpgx/8Zwy6NU3zgrSFjquv6MNmORtByhq/kx9Jt194P9pGAsqer5JwXnAw+kqdxKv7x3HaB4nLtcWg1SW3jZ3sC1VtUevQccaQy0glfXBqXRz+j+im+yLBENnzuLLyzpKcAiZw6B85fWdlbiRzU5pvHPINW7nHEsqpeXl5amAjVfEFao5746n8VZpKKeTezc0ovx2C8AOeaooMUWk7yEzZ2QCaYSEYwPsXN83NzU+3HhwFfdcD9zMkDJ1tx7nuj+I1hd5WGeDdRqjrCGgS+04haorfdbZd7bEe5c4rKtBmDfd8tTBGzrctpNISELO5kViYCsCiEEM5vpGLSRCc7L/esYarMmW9bMpMcdgEJ1VHZh3cGeRdF1Cc62qNXUoyi6/zej39tAyg65h9AIwK9b8HcSiNv2RGEU17pBRAp/qz0dWHKScg2rAif5uyLwF2lsu7G6cqRmldxRgByDbgGhtaSlNGjBanfPmZnM49IqHu74HwkLk2+vTGNTrWc7HonRK2qFD8jPfuuy72AyFSZzYdjkiZt7vPyVwUGXicT/8HWskQ6iJCJG0ZMZgjXJ1DAq6vtkPDDKZutfupRrOVB4evbynbbBCpRwalFOW9vXJrGY0AiZzEgV2reQqKV84PhVojBuQMOFWZv2rPxg6uksThiQ8=';const _IH='1e8f95344ad3cabaad0bc728ecccb6817ed1ed57ee7c8d92b3749de45536c3ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
