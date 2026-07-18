// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTX99L+ihAzNXzNmAsogXStHgm0qi8mawNRIryRdD8xvAZwDK/Ou6OWKoDXyv+IXBQwchbfSK2Fm7TQrmWveVb2tviB5PDMjgkHhVPsxwaut/9dz34V6ggzKeWQFAsJ+xvqbIAvq7Mfnya1jZT8O4ZKmQu8Tbt2NENW8vZgek9j2EwqtbdpB5ICwp0SJ2HRs9JSR1ctCd7AlE/Azmz+nQV9r/M+eJGHkz9QYHZwTrdhTFe7zGVF2nAI4SpjsWSfc5vV0uLEBDs4K3g6cJvuO8kB49bYuyzKaecGsA9NjV88jG9rlqxOpAbyux9Io8tiPvonyco7mYFWPCOu/mfCdRPfcj4UbzmhMaTNUl/pmWSdMFgnJ/Tt8H/TmylZEEvWRGi15i450JqM+KTket1BoGX5K/Vu8LmEsvqpLUSDcFFJRloBVYFnqDOn0SDuUtxqGIh1KAHh/0lpLFYB/jn6Pb1NZBvf8CucETsD+kpEooN1Izg2+KBMAilE9bNOpBqfX/J+VurQaOoXtVvW3jwpmWUPMxGnAobQuIJziEISKKn6elwqwEGNSvqMO6vZpLaHXdydJErjF8I6o8SSSOvpu0OdBkkxwFZdTXfwNsYi/3fN7krUwYnAOQ5RwBJHpdPRKc/SRPY6yPYncu4FyUpSZoXP73bIiiuqUMYQIebiQiuUjQ1KL8DiO0aUzjVADHOS49okaqzSmaMiSqfQua6K5UhuCj2tgVxusmMY072GKEmzo0i18WlwyaY0hl2gxkWpfRInQn+XSn4c28BuH6XOIw5jEEakekIpl9JJxt/p9qxGOQx2V9YWoPbG2SFFtJRS9Q1MHbfZnifRQk+8wh6QruBlU0lU4D8uI3CI5yq/DzX9rDB+7yd28wiWFl8u097axwTWebeZKtRdLvLagcaR/kxnG1jDcpi3BPk5RbhWVWbldhL63yASuDpom8htQ6VLlIEfoL9mYqkZAlKzPXFVI8vg2+0+5tz49DG5TqYWaVcEwy9ktjEWk/wdhDDWuQCP/ye/gfDKl8Ct2tojEmMGNVtUj3h9WBP+m4haey3jMKS/QWvu7TbJTa6TqtuAsIvLZ9O01yy+N8U5gxZQhz4r4MaOuviwLOs8IlPUY5F203bE+rfqAQckNOTuZTrtuhGvgPjI8ePKQr40xWcGP3ULHMMZF1LE3Rk62hC00rm/ZHLPHCK1RsBYEj0MpSRBJjdJ4aIXmhYBE3Sc8IIbukkeB7jFQ/c15nVzyr1+dXrmFW8BASxfp6AiIBgfTXFvyhGgTtPb9KMORcvle7MzgVkMuu2Nvy+xupb+8bQE4KPvVm9999uY6UAYTGDOZFt2rD/gEJsU6oacmuofAmTy';const _IH='bf916c293997f1801d82af048cd877feca461fd7070658a958e2b585e60eb29a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
