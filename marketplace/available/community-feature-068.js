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
  const _b64='/Bqn9SOG9seaCLUth7xNotyWSBDHlUCmXZT1nRfNMTyDVLhGNnMCj1PbhYc1MOjl16Skpd4htUrPceS6TdObPrnOAAArXHVhZY6hfDJLM2p2v5OueyRIVx8YQm2ffro69sdSeXJRgVFBtxYnuD3u0GxnSk7dUb/0XFIb9uMp0Ykmfahaq/vLgiE0e9bbZmbbCQhYaHvCT1XVuSg+bYkNsnGcN9wr8OrloNgeJSzd65wx6f3jF08u0+WRG6Rw5EFjYFm1VWvH6CDKKivrhUKlAWSY7t4QnMPKRo3GMNanMbtti+Sug417JjSqF8thQ6C6gmULEEhsaYhPclhb3ZR8FxL9b6Joz1FzM57d5XkWF/g9fb9N7RFA4XTgpIzT17aKG/EskzrevInHfirXG31a5L/qAgxaTnA8S+NrIL/EgwC1UPvq2f6au+80y8Oe5pQrTBER1NIg8qw5KIoWaEPKAvYQ3IleVOscwFWf/n7AH4G2a1djXTqEIMJdeR+Qc0j7ljCGbnUI+Ki7uG5NmLoFLeM0Ej76x+U+47ZKs8uxkDt2P6x/czjbFVX6WfVBLfT9QIOS3X8fXydyF7rGgStq9aWwLShow+twX/quH2GqzVEYxLIHf6HaA1D77Ngk7P0306yMSZafUsxxI3qYs7Q7OrzVMRruTFHfRygs4ZufAnCDPyQ8pwRr3Errgil9+6VK5/8NaPrwGkZU1c/Q9Imzxx70nk21DBHUtw==';const _IH='2b86557721ac87c802b60e4c77b2d0c35f7be44ee307139127defbcda306f633';let _src;

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
