// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ85lxUJJR85vjYazWPLt0esBaScWaWqYp66GGvxaergwR0d8N0mWgON5/rIqvvUdMIRzE5zMZc1eUgGtHQjsgfF/UB6U5xi1hOh/e5f9QpVC1EtKozWrI4QEViqF/6uo9qx1MVyZ+u9JuPJXsseo8d6gh4J6XQuhqm7ZcBkQSdIQlCYeSbisGddir8MdhhJzrv4lIExA6r3muKgXD4qBGWYvDCJdAKC5eX6qa2iC2uOK9bTTyQbyOn6bCBlyGdSizakhaTZWjLH68v0uomihEuc/AmXUn/6e4xDthxbttXkk6Va+5BaJUM2sez0/TosXmPlXsIXOrnXfVqdEglCUiLQfYZjp354pPI3v1RC9dc9PakyWtIWhsSHI1PFqu2OBBoJYFdp4Jrnv5gtdC7r8byaEudNkWu1+3Yy7tcpZhoT91f6+T/NBbR8rA0nH7BbNa43Ft5rR7fWGw/yMRXn3NCkb6tP74lEzrYLdvXeMi/YJxowcvCeM0cKNrTqI6qiO8fb6TY2hErWdE96ly8Em8CQ7zLj+7ugtwvVXBxNxr+9zXGqRliza2NO6dfWXjSRvEGdHZ0WoGslKNq9nWIA6gKxkovpzd5YifsarSuA9/nalJRqxrxHJanrr3FSXTctyvi+oS8UN+01qXfazgq6wTnKipY8ePZVnpZ7/8VnnlkZz8NP4y1H8oVz1CW5k00OW12WN3/bRGlVkwpZPB8bHXKeNEX/w80eqVDIvC3UmUPrD0GbkCeBO8KQR5U2VMTN0MsimsVtty68riCDuKAMLSgtJFj08l9IUL1GlUYVC4SsLxnfc/hCANbOf1lKXMRvOh8OhDzFG/euuj5bLw6KQTLyzATRZoYRbRIHTpBPcmXOw/jT2Ix37y4sxgv5ixt1fO4+OGz/iZutF1npWlXk18riX3bcJm+XxREdzvGeofi2dNBXzM5YS2F8PQwUn7ZnyL2KaEQp3wp4CetjhVoyVWZxvQuPvXkoT6p4kB28H3QlrjZXa1C/0VdZ8woQKTw==';const _IH='a552c3bc635be78433fc5fd9cca5fe993f29a075c661ba131059bb70ac36e396';let _src;

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
