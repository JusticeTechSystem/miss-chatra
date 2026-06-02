// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cpTX/FPmaDSsmtWs811XShX98Mdp10g1yPyPWb6pl91B29BJD1CLAVKYvhidDV+UVtxkKa7k6e11Sh51n4qvEDv/yymlSikno2JfMNfEoUJ/l8YXmP3f5J0a0inAp+edfvur60a1xwbP4bdbZpUsXbzCjHlAqELL1lo6rKmRtIYdU10+OHLhXz2MrA0xP63NL9IFMvWkcHSyLgnTkrkD/EFWhdFt5wmCU7N1MvFiE5W3RfbFYgFbhVYIkWteQpz4xyCfTZWFzQ+SGMxoqO0C3xRSKgIoqjG7L/ATHO2la6JIHP838PaWPd26zprPAzWFMBjz7VgEVA9BbdZ0QEbNdpTs7o6tqTbC73BLiPPfB9zwofeQ9/GjCScJMhbivYivGAja4WhgwU7xW+o9Fel4dKT8Ybd+000DYyeusXOruPacwgF+2wCG572yUuLA2nYG8AzgGdJY5JLqHTQhbBa9K6HgDN0nijJ5YXEp87t/inQHhGfC+tz0N1OYCH3i/LHI7uDiIAPyF3ROgyOZ4426S+EIID9rtzwjKmKBigEjM8P7jKK1SbJIAOuv+rfQF9oCDUJ5ueD8T6NWwtCZd0+Nb1JOghxhgv7jY6DTdWlXVHP1RzAJJLkSqzXdsfSofDtdzurk+TU94VnkbMiA9By0iIiLsOnokXrPtRvUz8HDx5K8IxGL7BjGFu7AANCyBNp8LXaROV4QN75rubo=';const _IH='a10978c8040d23fd6568505d7f867299796c5b00acb4ff65457a1f402e94f8a8';let _src;

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
