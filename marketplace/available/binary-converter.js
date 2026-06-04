// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DSPr9h/byPOUG/1k4De1j+TTqG5LcYFpNOMe4yYCOHVMbLKzrQkCU29WDEgGVOL7RBi0+myUsOqNvysBUNjVVHzqIuGc8Vav0x1GarhbtqE2zeAKa4hpegeDWdzXOJru5P1fqkKXCjskfRcsp7+AD26Yid+HUm+ic6DdP222suIWXN3CXQyAUyYK5kTVjuSh8qi5NrBqQiqFuWS3o8PYGBE+CLoyWpv5fFu3XgpQUjiD6iV0rPNdyWPAT2ruFe44Jx5IOuzfCuRRSZsEnFEsKa9I4PlP/nzRvUx1mKyaFI9p15UTr2AEX8Zy9vZon6kCYZ34GGtBJQARAszt2dkcSvB3GWtpR4icpVtCWwSPVOKzZU44Ue03rcZVDkh4nRW6p4OkjfSzui8mf4tUc6mFpbJO0XxhQFjIG1cYhdeJJcmVXcqiNPyT5OCxWzxTH5rIPHc8VtnaMeYqIHchmx5tHSvKZogYgunZT5cQ4dRzoRnLr9koRTFfKxbV+87JZXSt6Hnkm+euiYTaz/o8LOT/AG/anTOUAWAz6k6qgqoL8jRnD+zJmlf8XLPT8O4tGEsyInjRsDj/Q+1/kW8cNg==';const _IH='3095ff297141ea722ed80105a248398ee1d105bbdf2f2b07fff74f885600e61e';let _src;

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
