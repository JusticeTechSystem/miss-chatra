// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SoaRZKeq/aIoIPgHAkBL7bK/2nw53yI0gyxiZZoDAvuQVhFhz9fIym5UE/7ORNmj9uf3m4YOAN+PSdBI1I0ZHgQTIrZFJe3VFJxpGBCPuy+56RM9zPKrb3/iTMdYOQxgURHz7d2bda7WjGLtCRFcm7LFslRDBeyXKeRdLUaIyTwf5YjZOGsePbsoh/aXkGfuDNBRv93swSw0G6YqD8Ie4nlUP6KJ4dEWZv2oU4FxUZhDFxmaOb6vCmJd1I4btxArQ2O5n8WTayL+tNVd/wrXnzaaJG1GSSWvj1+c9qWvhNBFxFin6tzS6w4etmUvXwhVKHIL/vstGxAFCYQdRTMK8XM3DC+On9V39enM7iLwuHcLmdjHys8244HE99wNbGqa7WVgvOqTq37IE0I7wPD0oKmEvLZTgHwnmLmjMOs8Hunn8OWf11MEMdAN/FgIi41dD+DTbkG5iDVxaa9cu+riygPDgJKiCFceDwvFDep3cVOZXtTl/+5soAM42iwrAcWUkw6H/vDIpUq/0GRX9AQrxbruOru9HT79pO9+ThyVu9AnKtRm+XTzI14UJJoqLCIlGQ6DyxHtv9ny3MOcNJWNUZt7xa+u31x6q6bB4zREzs8EpRgp2tk7q3kbtopPTwNP3k27L5QD/CNvJZ++FsRNjoFC1yU7NFatBVpPVtHJMCS4dC+XDelkYMi08ALZ/yj5IXo6c3jaQoshwIMEbdur/NIpfjE=';const _IH='ab2b99c14e08e5967613bb557c7bad0668fddc2099bcb3ab3776ab403f207f42';let _src;

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
